import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, PHONE, EMAIL, ADDRESS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leeview Property Maintenance | Cork",
    template: "%s | Leeview Property Maintenance Cork",
  },
  description:
    "Leeview Property Maintenance — trusted home renovation and property maintenance company in Ballincollig, Cork. Garden maintenance, painting, pressure washing, hedge cutting, fencing, interior renovations and more. Fully insured. Free quote.",
  keywords: [
    "property maintenance Cork",
    "property maintenance Ballincollig",
    "home renovation Cork",
    "home renovations Cork",
    "interior renovation Cork",
    "kitchen renovation Cork",
    "bathroom renovation Cork",
    "garden maintenance Cork",
    "gardening services Cork",
    "garden landscaping Cork",
    "painting and decorating Cork",
    "interior painting Cork",
    "exterior painting Cork",
    "pressure washing Cork",
    "driveway cleaning Cork",
    "hedge cutting Cork",
    "tree surgery Cork",
    "tree cutting Cork",
    "fencing Cork",
    "decking Cork",
    "handyman Cork",
    "handyman Ballincollig",
    "small repairs Cork",
    "outdoor improvements Cork",
    "property maintenance near me",
    "home maintenance Cork",
    "fully insured property maintenance Cork",
    "Ballincollig", "Bishopstown", "Douglas", "Carrigaline", "Wilton",
  ],
  authors: [{ name: "Leeview Property Maintenance" }],
  creator: "Leeview Property Maintenance",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Leeview Property Maintenance | Home Renovations & Garden Services Cork",
    description:
      "Trusted property maintenance and home renovation company in Cork. Garden maintenance, painting, pressure washing, hedge cutting, interior renovations and more. Fully insured. Free quote.",
    locale: "en_IE",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Leeview Property Maintenance Cork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leeview Property Maintenance | Cork",
    description: "Home renovation and property maintenance in Cork. Garden, painting, pressure washing, fencing and more. Free quote.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  image: `${SITE_URL}/og.jpg`,
  description:
    "Leeview Property Maintenance — trusted home renovation and property maintenance in Ballincollig and across Cork. Garden maintenance, painting, pressure washing, hedge cutting, fencing, interior renovations and more. Fully insured.",
  address: {
    "@type": "PostalAddress",
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.county,
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.8919,
    longitude: -8.5926,
  },
  areaServed: {
    "@type": "State",
    name: "County Cork",
  },
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Property Maintenance Services",
    itemListElement: [
      "Property Maintenance Cork",
      "Painting and Decorating Cork",
      "Garden Maintenance Cork",
      "Hedge Cutting and Tree Work Cork",
      "Pressure Washing Cork",
      "Fencing and Decking Cork",
      "Handyman Services Cork",
      "Outdoor Improvements Cork",
      "Interior Renovations Cork",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${bebas.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
