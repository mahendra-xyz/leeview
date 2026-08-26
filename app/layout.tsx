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
    template: "%s | Leeview Property Maintenance",
  },
  description:
    "Local, reliable property maintenance in Ballincollig and across Cork. Painting, garden maintenance, pressure washing, fencing, handyman services and more. Free no-obligation quote.",
  keywords: [
    "property maintenance Cork",
    "property maintenance Ballincollig",
    "garden maintenance Cork",
    "painting Cork",
    "pressure washing Cork",
    "fencing Cork",
    "hedge cutting Cork",
    "handyman Cork",
    "home maintenance Cork",
    "property maintenance near me",
    "local handyman Ballincollig",
  ],
  authors: [{ name: "Leeview Property Maintenance" }],
  creator: "Leeview Property Maintenance",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Leeview Property Maintenance | Cork",
    description:
      "Local, reliable property maintenance in Ballincollig and across Cork. Painting, garden maintenance, pressure washing, fencing and more. Free no-obligation quote.",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leeview Property Maintenance | Cork",
    description: "Local property maintenance in Cork. Free no-obligation quotes.",
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
    "Local, reliable property maintenance in Ballincollig and across Cork. Painting, garden maintenance, pressure washing, fencing, handyman services and more.",
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
      "Property Maintenance",
      "Painting — Interior & Exterior",
      "Garden Maintenance",
      "Hedge Cutting & Tree Work",
      "Pressure Washing",
      "Fencing & Decking",
      "Small Repairs & Handyman Jobs",
      "Outdoor Improvements",
      "General Home & Garden Upkeep",
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
