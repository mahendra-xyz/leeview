"use client";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { services } from "@/lib/services";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // Split services into two columns
  const col1 = services.slice(0, 5);
  const col2 = services.slice(5);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(12, 31, 61, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ backgroundColor: "var(--green)" }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-3xl leading-none text-white" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em" }}>
            Leeview
          </span>
          <span className="text-[9px] font-bold tracking-[0.22em] uppercase" style={{ color: "#7ec87e" }}>
            Property Maintenance
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#home" className="text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white transition-colors">
            Home
          </Link>

          {/* Services with mega menu */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            ref={megaRef}
          >
            <button
              className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown
                size={12}
                className="transition-transform duration-200"
                style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {/* Mega menu dropdown */}
            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] shadow-2xl border"
                style={{ backgroundColor: "#0c1f3d", borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Arrow */}
                <div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t"
                  style={{ backgroundColor: "#0c1f3d", borderColor: "rgba(255,255,255,0.08)" }}
                />

                <div className="p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#7ec87e" }}>
                    All Services
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {[col1, col2].map((col, ci) => (
                      <div key={ci} className="space-y-1">
                        {col.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-white/5 transition-colors"
                            >
                              <Icon size={14} style={{ color: "#7ec87e" }} className="flex-shrink-0" />
                              <span className="text-xs text-white/70 group-hover:text-white transition-colors leading-snug">
                                {s.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Footer — All Services + CTA */}
                  <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <Link
                      href="/#our-services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white transition-colors"
                    >
                      <span style={{ color: "#7ec87e" }}>→</span>
                      View All Services
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs font-bold px-4 py-2 rounded-sm text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "var(--green)" }}
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+353851818163" className="flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white transition-colors">
            <Phone size={13} />
            085 181 8163
          </a>
          <Link href="/contact" className="px-5 py-2 text-xs font-bold text-white rounded-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--green)" }}>
            Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 pb-6 pt-4"
          style={{ backgroundColor: "rgba(12, 31, 61, 0.98)", borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="space-y-1 mb-4">
            <Link href="/#home" onClick={() => setOpen(false)} className="block py-2.5 text-sm font-semibold text-white/70 hover:text-white transition-colors">
              Home
            </Link>

            {/* Mobile services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                Services
                <ChevronDown size={14} className="transition-transform duration-200" style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 pb-2 space-y-1 border-l mt-1" style={{ borderColor: "var(--green)" }}>
                  <Link
                    href="/#our-services"
                    onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                    className="flex items-center gap-2 py-2 text-xs font-bold text-white/80 hover:text-white transition-colors"
                  >
                    <span style={{ color: "#7ec87e" }}>→</span>
                    All Services
                  </Link>
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                        className="flex items-center gap-2.5 py-2 text-xs text-white/60 hover:text-white transition-colors"
                      >
                        <Icon size={12} style={{ color: "#7ec87e" }} />
                        {s.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setOpen(false)} className="block py-2.5 text-sm font-semibold text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            <a href="tel:+353851818163" className="flex items-center gap-2 text-sm font-bold text-white">
              <Phone size={14} />
              085 181 8163
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2.5 text-sm font-bold text-white rounded-sm"
              style={{ backgroundColor: "var(--green)" }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
