"use client";
import { ExternalLink } from "lucide-react";

const assets = [
  {
    title: "Facebook Cover",
    size: "820 × 312 px",
    file: "/social/facebook-cover.html",
    platform: "Facebook",
  },
  {
    title: "Google Business Banner",
    size: "1192 × 360 px",
    file: "/social/google-business-banner.html",
    platform: "Google Business",
  },
  {
    title: "Instagram — Brand",
    size: "1080 × 1080 px",
    file: "/social/instagram-1-brand.html",
    platform: "Instagram",
  },
  {
    title: "Instagram — Services",
    size: "1080 × 1080 px",
    file: "/social/instagram-2-services.html",
    platform: "Instagram",
  },
  {
    title: "Instagram — CTA",
    size: "1080 × 1080 px",
    file: "/social/instagram-3-cta.html",
    platform: "Instagram",
  },
];

export default function SocialsPage() {
  return (
    <div style={{ backgroundColor: "#0a1829", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "32px 48px" }}>
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7ec87e", marginBottom: "6px" }}>
          Leeview Property Maintenance
        </p>
        <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", margin: 0 }}>Social Media Assets</h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>
          Open each asset in a new tab → Print → Save as PDF to export as an image.
        </p>
      </div>

      {/* Asset list */}
      <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "800px" }}>
        {assets.map(({ title, size, file, platform }) => (
          <a
            key={file}
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(47,122,47,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>{title}</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>{size}</span>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7ec87e", backgroundColor: "rgba(47,122,47,0.15)", padding: "2px 8px" }}>
                  {platform}
                </span>
              </div>
            </div>
            <ExternalLink size={16} color="rgba(255,255,255,0.3)" />
          </a>
        ))}
      </div>
    </div>
  );
}
