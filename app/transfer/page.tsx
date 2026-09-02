import type { Metadata } from "next";
import { SITE_URL, PHONE_DISPLAY, EMAIL, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Handover | Leeview Property Maintenance",
  robots: { index: false, follow: false },
};

const GREEN = "#2F7A2F";

export default function TransferPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#fff", minHeight: "100vh", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: "620px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "2px solid #111" }}>
          <h1 style={{ margin: "0 0 0.25rem", fontSize: "1.6rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}>
            Leeview Property Maintenance
          </h1>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#888", fontFamily: "sans-serif" }}>
            Project handover · Prepared by Consult Qualia · September 2026
          </p>
        </div>

        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#333", marginBottom: "3rem" }}>
          Patrick, everything is live and set up. Below is a summary of what&apos;s been done and what you need to know going forward.
          Login credentials for all accounts will be shared with you separately.
        </p>

        {/* Website */}
        <Block title="1. Your Website">
          <Item label="Address">
            <Link href={SITE_URL}>www.leeviewpropertymaintenance.ie</Link>
          </Item>
          <Item label="Enquiries go to">{EMAIL}</Item>
          <Item label="Hosting">Vercel (vercel.com), free plan, no action needed, renews automatically</Item>
          <p style={note}>
            When someone fills in the contact form on the site, their message arrives in your email inbox. The site runs itself and you don&apos;t need to log in anywhere to keep it online.
          </p>
        </Block>

        {/* Social */}
        <Block title="2. Social Media">
          <Item label="Instagram">
            <Link href={SOCIALS.instagram}>instagram.com/leeview.property.maintenance</Link>
          </Item>
          <Item label="Facebook">
            <Link href={SOCIALS.facebook}>facebook.com/profile.php?id=61593635473473</Link>
          </Item>
          <p style={note}>
            Post once or twice a week, even just a photo with a short caption. It keeps you visible and helps your Google ranking over time.
          </p>
        </Block>

        {/* Google */}
        <Block title="3. Google Listing, Search &amp; Reviews">
          <Item label="Your listing">Search &ldquo;Leeview Property Maintenance&rdquo; on Google</Item>
          <Item label="Review link">
            <Link href={SOCIALS.googleReview}>g.page/r/CbiefiMwD3FfEBM/review</Link>
          </Item>
          <Item label="Google Search Console">
            <Link href="https://search.google.com/search-console">search.google.com/search-console</Link>
          </Item>
          <Item label="Search Console status">Verified and submitted on launch day. Your site is being indexed by Google</Item>
          <p style={note}>
            Search Console shows you how many people are finding you on Google and what they&apos;re searching for. You can check in on it occasionally to track progress.
          </p>
          <p style={note}>
            For reviews, send the review link to happy customers by WhatsApp: &ldquo;If you have a minute, would you mind leaving us a quick Google review? Here&apos;s the link: [paste]. Really appreciate it!&rdquo; Aim for 5 reviews in the first month. It makes a big difference to your ranking.
          </p>
        </Block>

        {/* Contact details */}
        <Block title="4. Your Details (as shown on the site)">
          <Item label="Phone">{PHONE_DISPLAY}</Item>
          <Item label="Email">{EMAIL}</Item>
          <Item label="Area">Ballincollig &amp; surrounding Cork areas</Item>
        </Block>

        {/* Next steps */}
        <Block title="5. What to Do Now">
          <ol style={{ margin: 0, padding: "0 0 0 1.25rem", lineHeight: 2, fontSize: "0.95rem", color: "#333" }}>
            <li>Send the Google review link to your first few customers by WhatsApp.</li>
            <li>Add 5–10 photos of your work to your Google Business profile.</li>
            <li>Post one photo per week on Instagram and Facebook.</li>
            <li>Reply to every message and comment on social. Even a quick &lsquo;Thanks!&rsquo; helps.</li>
            <li>If you want to update anything on the site, get in touch and we&apos;ll sort it.</li>
          </ol>
        </Block>

        {/* Footer */}
        <div style={{ marginTop: "4rem", paddingTop: "1.5rem", borderTop: "1px solid #ddd", fontSize: "0.8rem", color: "#aaa", fontFamily: "sans-serif", display: "flex", justifyContent: "space-between" }}>
          <span>Built by Consult Qualia · consultqualia.com</span>
          <span>September 2026</span>
        </div>

      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const note: React.CSSProperties = {
  margin: "1rem 0 0",
  fontSize: "0.85rem",
  color: "#555",
  lineHeight: 1.75,
  fontStyle: "italic",
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2 style={{ margin: "0 0 1.25rem", fontSize: "1rem", fontFamily: "sans-serif", fontWeight: 700, color: "#111", paddingBottom: "0.5rem", borderBottom: "1px solid #e0e0e0" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.65rem", alignItems: "baseline", fontSize: "0.9rem" }}>
      <span style={{ color: "#999", minWidth: "170px", flexShrink: 0, fontFamily: "sans-serif", fontSize: "0.78rem" }}>{label}</span>
      <span style={{ color: "#111", lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{ color: GREEN, textDecoration: "underline", fontFamily: "sans-serif", fontSize: "0.88rem" }}>
      {children}
    </a>
  );
}
