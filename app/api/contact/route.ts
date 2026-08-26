import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- Rate limiting (in-memory, per IP) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;        // max submissions
const RATE_WINDOW = 10 * 60 * 1000; // per 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// --- Sanitise: strip HTML tags ---
function sanitise(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await req.json();
  const { name, email, phone, message, _honey, _ts } = body;

  // Honeypot — bots fill this, humans don't see it
  if (_honey) {
    return NextResponse.json({ success: true }); // silently accept so bots don't know
  }

  // Time check — legitimate users take > 3 seconds to fill a form
  const elapsed = Date.now() - Number(_ts);
  if (!_ts || elapsed < 3000) {
    return NextResponse.json({ success: true }); // silent reject
  }

  // Field validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || message.length > 2000) {
    return NextResponse.json({ error: "One or more fields exceed the maximum length." }, { status: 400 });
  }

  // Sanitise inputs
  const safeName    = sanitise(name);
  const safeEmail   = sanitise(email);
  const safePhone   = sanitise(phone ?? "");
  const safeMessage = sanitise(message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1B3461;padding:24px 32px;">
    <p style="color:#fff;font-size:22px;font-weight:800;margin:0;">LEEVIEW</p>
    <p style="color:#7ec87e;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:2px 0 0;">Property Maintenance</p>
  </div>
  <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;">
    <h2 style="color:#1B3461;margin-top:0;">New Quote Request</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:80px;">Name</td><td style="padding:8px 0;font-size:13px;font-weight:600;">${safeName}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;font-size:13px;"><a href="mailto:${safeEmail}" style="color:#1B3461;">${safeEmail}</a></td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Phone</td><td style="padding:8px 0;font-size:13px;">${safePhone || "Not provided"}</td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
    <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:700;margin-bottom:8px;">Message</p>
    <p style="font-size:14px;color:#1a1a1a;line-height:1.6;white-space:pre-wrap;">${safeMessage}</p>
  </div>
</div>`.trim();

  const confirmHtml = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1B3461;padding:24px 32px;">
    <p style="color:#fff;font-size:22px;font-weight:800;margin:0;">LEEVIEW</p>
    <p style="color:#7ec87e;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:2px 0 0;">Property Maintenance</p>
  </div>
  <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;">
    <h2 style="color:#1B3461;margin-top:0;">Thanks, ${safeName}!</h2>
    <p style="font-size:14px;color:#374151;line-height:1.6;">We've received your request and will be in touch with a free, no-obligation quote as soon as possible.</p>
    <p style="font-size:14px;color:#374151;line-height:1.6;">Need us sooner? Give us a call:</p>
    <a href="tel:+353851818163" style="display:inline-block;background:#2F7A2F;color:#fff;padding:12px 24px;font-weight:700;font-size:14px;text-decoration:none;margin:8px 0;">📞 085 181 8163</a>
    <p style="font-size:13px;color:#6b7280;margin-top:24px;">Kind regards,<br><strong>Patrick</strong><br>Leeview Property Maintenance<br>Ballincollig, Co. Cork</p>
  </div>
</div>`.trim();

  try {
    await transporter.sendMail({
      from: `"Leeview Website" <${process.env.SMTP_USER}>`,
      to: "patrick.leeview@gmail.com",
      replyTo: safeEmail,
      subject: `New Quote Request from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nPhone: ${safePhone || "Not provided"}\n\n${safeMessage}`,
      html: htmlBody,
    });

    await transporter.sendMail({
      from: `"Leeview Property Maintenance" <${process.env.SMTP_USER}>`,
      to: safeEmail,
      subject: "We received your request — Leeview Property Maintenance",
      html: confirmHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send. Please call us directly on 085 181 8163." }, { status: 500 });
  }
}
