import { services } from "@/lib/services";
import Link from "next/link";

export default function Services() {
  return (
    <section id="our-services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 items-end">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "var(--green)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
                What We Do
              </span>
            </div>
            <h2
              className="text-5xl sm:text-6xl text-gray-900 leading-none"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
            >
              Our Services
            </h2>
          </div>
          <div>
            <p className="text-gray-500 text-sm leading-relaxed">
              From a fresh coat of paint to full garden overhauls — we cover everything your property needs, done properly.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map(({ icon: Icon, title, tagline, slug }, i) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group bg-white p-8 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span
                    className="text-2xl leading-none block mb-4 font-bold tabular-nums"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--navy)", opacity: 0.2, letterSpacing: "0.02em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm"
                    style={{ backgroundColor: "var(--light)" }}
                  >
                    <Icon size={18} style={{ color: "var(--navy)" }} />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug group-hover:underline">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{tagline}</p>
                </div>
              </div>
              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "var(--green)" }}
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-8 border border-gray-100 bg-gray-50">
          <div>
            <p className="font-bold text-gray-900 text-sm">Don't see what you need?</p>
            <p className="text-gray-500 text-xs mt-0.5">We handle a wide range of jobs — just ask.</p>
          </div>
          <a
            href="#contact-us"
            className="flex-shrink-0 px-6 py-3 text-sm font-bold text-white rounded-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--navy)" }}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
