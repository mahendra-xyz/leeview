import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailBody = `
New quote request from your website:

Name:    ${name}
Email:   ${email}
Phone:   ${phone || "Not provided"}

Message:
${message}
  `.trim();

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1B3461;padding:24px 32px;">
    <p style="color:#fff;font-size:22px;font-weight:800;margin:0;">LEEVIEW</p>
    <p style="color:#7ec87e;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:2px 0 0;">Property Maintenance</p>
  </div>
  <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;">
    <h2 style="color:#1B3461;margin-top:0;">New Quote Request</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:80px;">Name</td><td style="padding:8px 0;font-size:13px;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;font-size:13px;"><a href="mailto:${email}" style="color:#1B3461;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Phone</td><td style="padding:8px 0;font-size:13px;">${phone || "Not provided"}</td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
    <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:700;margin-bottom:8px;">Message</p>
    <p style="font-size:14px;color:#1a1a1a;line-height:1.6;white-space:pre-wrap;">${message}</p>
  </div>
</div>
  `.trim();

  try {
    // Email to Patrick (business email + gmail)
    await transporter.sendMail({
      from: `"Leeview Website" <${process.env.SMTP_USER}>`,
      to: "patrick.leeview@gmail.com",
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: emailBody,
      html: htmlBody,
    });

    // Confirmation email to sender
    await transporter.sendMail({
      from: `"Leeview Property Maintenance" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your request — Leeview Property Maintenance",
      text: `Hi ${name},\n\nThanks for getting in touch! We've received your request and will get back to you with a free quote as soon as possible.\n\nIf you need to reach us urgently, call us on 085 181 8163.\n\nKind regards,\nPatrick\nLeeview Property Maintenance`,
      html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1B3461;padding:24px 32px;">
    <p style="color:#fff;font-size:22px;font-weight:800;margin:0;">LEEVIEW</p>
    <p style="color:#7ec87e;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:2px 0 0;">Property Maintenance</p>
  </div>
  <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;">
    <h2 style="color:#1B3461;margin-top:0;">Thanks, ${name}!</h2>
    <p style="font-size:14px;color:#374151;line-height:1.6;">We've received your request and will be in touch with a free, no-obligation quote as soon as possible.</p>
    <p style="font-size:14px;color:#374151;line-height:1.6;">Need us sooner? Give us a call:</p>
    <a href="tel:+353851818163" style="display:inline-block;background:#2F7A2F;color:#fff;padding:12px 24px;font-weight:700;font-size:14px;text-decoration:none;margin:8px 0;">📞 085 181 8163</a>
    <p style="font-size:13px;color:#6b7280;margin-top:24px;">Kind regards,<br><strong>Patrick</strong><br>Leeview Property Maintenance<br>Ballincollig, Co. Cork</p>
  </div>
</div>
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
