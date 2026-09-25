import { Phone, Mail, MapPin, Star } from "lucide-react";
import { PHONE_DISPLAY, EMAIL, SOCIALS } from "@/lib/constants";
import { services } from "@/lib/services";
import Link from "next/link";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Footer() {
  const mainServices = services.slice(0, 6);

  return (
    <footer style={{ backgroundColor: "#0c1f3d" }} className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Green top bar */}
        <div className="h-0.5 w-full mb-14" style={{ backgroundColor: "var(--green)" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <p className="text-5xl leading-none text-white" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}>
                Leeview
              </p>
              <p className="text-[9px] font-bold tracking-[0.22em] uppercase mt-1" style={{ color: "#7ec87e" }}>
                Property Maintenance
              </p>
            </div>
            <p className="text-blue-300 text-xs leading-relaxed mb-6 max-w-[220px]">
              Trusted home renovation and property maintenance across Cork and Ballincollig.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leeview on Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-sm text-white/60 hover:text-white transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leeview on Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-sm text-white/60 hover:text-white transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {mainServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="text-xs text-blue-200 hover:text-white transition-colors leading-snug"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:+353851818163`} className="flex items-center gap-3 text-xs text-blue-200 hover:text-white transition-colors">
                  <Phone size={13} className="flex-shrink-0" style={{ color: "#7ec87e" }} />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-xs text-blue-200 hover:text-white transition-colors">
                  <Mail size={13} className="flex-shrink-0" style={{ color: "#7ec87e" }} />
                  {EMAIL}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-xs text-blue-200">
                  <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#7ec87e" }} />
                  Ballincollig, Co. Cork
                </div>
              </li>
            </ul>
          </div>

          {/* Review */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Enjoyed Our Work?</h4>
            <p className="text-xs text-blue-300 leading-relaxed mb-5">
              A quick review goes a long way. It helps local homeowners in Cork find us.
            </p>
            <a
              href={SOCIALS.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3 text-xs font-bold text-white rounded-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--green)" }}
            >
              <Star size={13} />
              Write a Google Review
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-[10px] text-white/30">© {new Date().getFullYear()} Leeview Property Maintenance. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[10px] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <p className="text-[10px] text-white/30">
              Built by{" "}
              <a href="https://consultqualia.com" className="hover:text-white/60 transition-colors">
                ConsultQualia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
