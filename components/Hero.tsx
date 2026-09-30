"use client";
import { useState, useEffect } from "react";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { trackPhoneClick } from "@/lib/gtag";
import Image from "next/image";
import { heroImages } from "@/lib/images";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Jobs Completed" },
  { value: "100%", label: "Fully Insured" },
  { value: "Cork", label: "Local & Proud" },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0c1f3d", minHeight: "100svh" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Green accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--green)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--green)" }} />

      {/* Main content — grows to fill available space */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8" style={{ backgroundColor: "var(--green)" }} />
                <span className="blink text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#7ec87e" }}>
                  Cork &amp; Surrounding Areas
                </span>
              </div>

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

              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "var(--green)" }} />
                <p className="text-blue-200 text-sm italic">Exceptional attention to detail, every time.</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {["Local", "Reliable", "Fully Insured", "Professional"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold border rounded-sm text-blue-200 border-white/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:+353851818163"
                  onClick={trackPhoneClick}
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

              <div className="flex items-center gap-2 text-blue-300 text-xs">
                <MapPin size={13} />
                Ballincollig, Co. Cork
              </div>

              {/* Google rating badge */}
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 mt-6 px-4 py-2.5 border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                aria-label="See our Google reviews"
              >
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#7ec87e" stroke="none" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-white/80">5.0 on Google</span>
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>

            {/* Right — Cycling image with frame */}
            <div className="flex items-center lg:justify-end order-last lg:order-none">
              <div className="relative" style={{ width: "100%", maxWidth: "520px" }}>
                {/* Green offset frame — desktop only */}
                <div
                  className="absolute hidden lg:block"
                  style={{
                    bottom: "-18px",
                    right: "-18px",
                    width: "100%",
                    height: "100%",
                    border: "2px solid rgba(47,122,47,0.45)",
                  }}
                />
                {/* Image slideshow */}
                <div
                  className="relative overflow-hidden h-64 lg:h-[420px]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {heroImages.map((img, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 transition-opacity duration-1000"
                      style={{ opacity: i === activeIdx ? 1 : 0 }}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className={img.fit === "contain" ? "object-contain" : "object-cover"}
                        priority={i === 0}
                      />
                    </div>
                  ))}
                  {/* Left fade to blend with hero bg */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to right, rgba(12,31,61,0.35) 0%, transparent 45%)" }}
                  />
                  {/* Slide indicator dots */}
                  <div className="absolute bottom-4 right-4 flex gap-1.5">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className="transition-all duration-300"
                        style={{
                          width: i === activeIdx ? "20px" : "6px",
                          height: "6px",
                          borderRadius: "3px",
                          backgroundColor: i === activeIdx ? "#7ec87e" : "rgba(255,255,255,0.3)",
                        }}
                        aria-label={`Show image ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating stat badge — cycles in sync with image */}
                <div className="absolute" style={{ bottom: "-10px", left: "20px" }}>
                  <div className="relative" style={{ backgroundColor: "var(--green)" }}>
                    {/* Invisible placeholder sizes the container to the widest stat */}
                    <div className="invisible flex items-center gap-3 px-5 py-3" aria-hidden="true">
                      <span className="text-4xl leading-none" style={{ fontFamily: "var(--font-bebas)" }}>500+</span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider">Jobs</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider">Completed</p>
                      </div>
                    </div>
                    {/* Crossfading stats */}
                    {stats.map((stat, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 flex items-center gap-3 px-5 py-3 transition-opacity duration-700"
                        style={{ opacity: i === activeIdx ? 1 : 0 }}
                      >
                        <span
                          className="text-4xl leading-none text-white"
                          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em" }}
                        >
                          {stat.value}
                        </span>
                        <div>
                          {stat.label.split(" ").map((word, j) => (
                            <p key={j} className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                              {word}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
