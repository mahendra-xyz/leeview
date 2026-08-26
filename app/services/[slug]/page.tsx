import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { getServiceImages } from "@/lib/images";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceContactForm from "@/components/ServiceContactForm";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, PHONE, ADDRESS } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Cork`,
    description: `${service.description.slice(0, 155)}`,
    keywords: [
      `${service.title.toLowerCase()} Cork`,
      `${service.title.toLowerCase()} Ballincollig`,
      `${service.title.toLowerCase()} near me`,
      "property maintenance Cork",
    ],
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.tagline,
      url: `${SITE_URL}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const galleryImages = getServiceImages(slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.county,
        addressCountry: "IE",
      },
    },
    areaServed: { "@type": "State", name: "County Cork" },
    serviceType: service.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#0c1f3d" }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--green)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--green)" }} />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10">
          {/* Back link */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={13} />
            All Services
          </Link>

          <div className="flex items-start gap-5">
            <div
              className="hidden sm:flex w-14 h-14 rounded-sm items-center justify-center flex-shrink-0 mt-1"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Icon size={24} color="#7ec87e" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
                  Our Services
                </span>
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white mb-4"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
              >
                {service.title}
              </h1>
              <p className="text-blue-200 text-base max-w-xl leading-relaxed">{service.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left — Description + Gallery */}
            <div className="lg:col-span-2 space-y-14">

              {/* Description */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
                    Overview
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
              </div>

              {/* What's included */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
                    What&apos;s Included
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--green)" }} />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
                    Our Work
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="aspect-square relative rounded-sm overflow-hidden border border-gray-100">
                      <Image src={img.url} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
                {galleryImages.length === 0 && (
                  <p className="text-xs text-gray-400">Photos of completed work coming soon.</p>
                )}
              </div>
            </div>

            {/* Right — Sticky contact form */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <ServiceContactForm service={service.title} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
              Other Services
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 8)
              .map((s) => {
                const SIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-gray-400 transition-colors rounded-sm"
                  >
                    <SIcon size={15} style={{ color: "var(--navy)" }} className="flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 leading-snug">
                      {s.title}
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
