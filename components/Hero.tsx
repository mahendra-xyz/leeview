"use client";
import { Phone, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0c1f3d" }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Green accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: "var(--green)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: "var(--green)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
                Cork &amp; Surrounding Areas
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl leading-none text-white mb-6"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
            >
              Property
              <br />
              <span style={{ color: "#7ec87e" }}>Maintenance</span>
              <br />
              Done Right.
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "var(--green)" }} />
              <p className="text-blue-200 text-sm italic">Exceptional attention to detail — every time.</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Local", "Reliable", "Fully Insured", "Professional"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold border rounded-sm text-blue-200 border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+353851818163"
                className="flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white rounded-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--green)" }}
              >
                <Phone size={16} />
                085 181 8163
              </a>
              <a
                href="#contact-us"
                className="flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white rounded-sm border border-white/30 hover:border-white/70 transition-colors"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-blue-300 text-xs">
              <MapPin size={13} />
              Ballincollig, Co. Cork
            </div>
          </div>

          {/* Right — Image grid placeholder */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {[
              { label: "Garden Maintenance", h: "h-52" },
              { label: "Pressure Washing", h: "h-36" },
              { label: "Painting", h: "h-36" },
              { label: "Fencing & Decking", h: "h-52" },
            ].map(({ label, h }) => (
              <div
                key={label}
                className={`${h} rounded-sm flex items-end p-3 overflow-hidden`}
                style={{
                  background: "linear-gradient(160deg, #1a3a6b 0%, #0f2744 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
