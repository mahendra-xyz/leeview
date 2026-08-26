import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Leeview Property Maintenance | Cork";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0c1f3d",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Left green bar */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", backgroundColor: "#2F7A2F" }} />
        {/* Right green bar */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "6px", backgroundColor: "#2F7A2F" }} />
        {/* Bottom green bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "6px", backgroundColor: "#2F7A2F" }} />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", padding: "64px 80px" }}>
          {/* Top — tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#2F7A2F" }} />
            <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7ec87e" }}>
              Cork &amp; Surrounding Areas
            </span>
          </div>

          {/* Middle — heading */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: "96px", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-1px" }}>
              LEEVIEW
            </div>
            <div style={{ fontSize: "32px", fontWeight: 700, color: "#7ec87e", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Property Maintenance
            </div>
            <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
              Keeping your property looking its best — every time.
            </div>
          </div>

          {/* Bottom — tags + url */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              {["Local", "Reliable", "Fully Insured", "Professional"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
              leeviewpropertymaintenance.ie
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
