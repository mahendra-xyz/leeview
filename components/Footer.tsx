import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0c1f3d" }} className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top accent */}
        <div className="h-px w-full mb-12" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                className="text-5xl leading-none text-white"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
              >
                Leeview
              </p>
              <p className="text-[9px] font-bold tracking-[0.22em] uppercase mt-1" style={{ color: "#7ec87e" }}>
                Property Maintenance
              </p>
            </div>
            <p className="text-blue-300 text-xs leading-relaxed max-w-[200px]">
              Keeping your property looking its best. Serving Cork and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/#home" },
                { label: "Services", href: "/#our-services" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs font-semibold text-blue-200 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {label}
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
                <a href="tel:+353851818163" className="flex items-center gap-3 text-xs text-blue-200 hover:text-white transition-colors group">
                  <Phone size={13} className="flex-shrink-0" style={{ color: "#7ec87e" }} />
                  085 181 8163
                </a>
              </li>
              <li>
                <a href="mailto:patrick.leeview@gmail.com" className="flex items-center gap-3 text-xs text-blue-200 hover:text-white transition-colors">
                  <Mail size={13} className="flex-shrink-0" style={{ color: "#7ec87e" }} />
                  patrick.leeview@gmail.com
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
        </div>

        {/* Bottom */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-[10px] text-white/30">© {new Date().getFullYear()} Leeview Property Maintenance. All rights reserved.</p>
          <p className="text-[10px] text-white/30">
            Built by{" "}
            <a href="https://consultqualia.com" className="hover:text-white/60 transition-colors">
              ConsultQualia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
