import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactFormOnly } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Free Quote",
  description: "Get a free no-obligation quote from Leeview Property Maintenance in Ballincollig, Cork. Call 085 181 8163 or send us a message and we'll get back to you fast.",
  alternates: { canonical: "https://leeviewpropertymaintenance.ie/contact" },
  openGraph: {
    title: "Contact Leeview Property Maintenance | Free Quote",
    description: "Get a free no-obligation quote for property maintenance in Cork. Call 085 181 8163.",
    url: "https://leeviewpropertymaintenance.ie/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#0c1f3d" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--green)" }} />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
              Get In Touch
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white mb-4"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            Contact Us
          </h1>
          <p className="text-blue-200 text-base max-w-xl leading-relaxed">
            Request a free, no-obligation quote or just ask us a question. We'll get back to you fast.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
                    Contact Details
                  </span>
                </div>
                <ul className="space-y-5">
                  <li>
                    <a href="tel:+353851818163" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
                        <Phone size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Phone</p>
                        <p className="text-sm font-bold text-gray-900 group-hover:underline">085 181 8163</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:patrick@leeviewpropertymaintenance.ie" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Email</p>
                        <p className="text-sm font-bold text-gray-900 group-hover:underline break-all">patrick@leeviewpropertymaintenance.ie</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Location</p>
                        <p className="text-sm font-bold text-gray-900">Ballincollig, Co. Cork</p>
                        <p className="text-xs text-gray-500 mt-0.5">Serving Cork and surrounding areas</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Response Time</p>
                        <p className="text-sm font-bold text-gray-900">Within 24 hours</p>
                        <p className="text-xs text-gray-500 mt-0.5">Mon – Sat, 8am – 6pm</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quote callout */}
              <div className="p-5 border-l-4" style={{ borderColor: "var(--green)", backgroundColor: "#f0faf0" }}>
                <p className="text-sm font-bold text-gray-900 mb-1">Free No-Obligation Quote</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Tell us what you need and we'll come out, take a look, and give you a fair, transparent price. No pressure.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <ContactFormOnly />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe
          title="Ballincollig, Co. Cork"
          src="https://maps.google.com/maps?ll=51.8969,-8.4863&z=9&t=m&output=embed"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </>
  );
}
