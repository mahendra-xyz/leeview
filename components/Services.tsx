import { services } from "@/lib/services";
import { getServiceImages } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";

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
              From a fresh coat of paint to full garden overhauls, we cover everything your property needs, done properly.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(() => {
            const usedUrls = new Set<string>();
            return services.map(({ icon: Icon, title, tagline, slug }, i) => {
            const img = getServiceImages(slug).find(im => !usedUrls.has(im.url));
            if (img) usedUrls.add(img.url);
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group relative overflow-hidden rounded-sm"
                style={{ minHeight: "260px" }}
              >
                {/* Background image */}
                {img && (
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Dark overlay — stronger at bottom for text legibility */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(12,31,61,0.45) 0%, rgba(12,31,61,0.85) 100%)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to bottom, rgba(12,31,61,0.3) 0%, rgba(12,31,61,0.75) 100%)" }}
                />

                {/* Green bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: "var(--green)" }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6" style={{ minHeight: "260px" }}>
                  {/* Number + icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-4xl leading-none font-bold"
                      style={{ fontFamily: "var(--font-bebas)", color: "rgba(255,255,255,0.2)", letterSpacing: "0.02em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded-sm"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                      <Icon size={16} color="#7ec87e" />
                    </div>
                  </div>

                  {/* Title + tagline */}
                  <div>
                    <h3
                      className="text-white font-bold text-lg mb-1.5 leading-snug"
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>{tagline}</p>
                  </div>
                </div>
              </Link>
            );
          });
          })()}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-8 border border-gray-100 bg-gray-50">
          <div>
            <p className="font-bold text-gray-900 text-sm">Don't see what you need?</p>
            <p className="text-gray-500 text-xs mt-0.5">We handle a wide range of jobs, just ask.</p>
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
