import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  variable: "--font-barlow-condensed",
});

const description =
  "Preferred Plumbing Solutions — owner-operated plumber in Spirit Lake, ID for repairs, water heaters, radiant heat, and new work. Call 208-290-3889.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Preferred Plumbing Solutions | Spirit Lake Plumber",
    template: "%s | Preferred Plumbing Solutions",
  },
  description,
  keywords: [
    "Preferred Plumbing Solutions",
    "plumber Spirit Lake",
    "plumber North Idaho",
    "plumber Coeur d'Alene",
    "plumber Hayden",
    "plumber Post Falls",
    "plumber Rathdrum",
    "water heater repair",
    "heated driveway Idaho",
    "emergency plumber",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Plumbing services",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [{ url: "/assets/logo.webp", type: "image/webp" }],
    apple: "/assets/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Preferred Plumbing Solutions | Spirit Lake Plumber",
    description,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Preferred Plumbing Solutions — plumber in Spirit Lake, Idaho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preferred Plumbing Solutions | Spirit Lake Plumber",
    description,
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: [
    "Preferred Plumbing",
    "Call Preferred Plumbing",
    "Preferred Plumbing Spirit Lake",
  ],
  description,
  url: site.url,
  logo: `${site.url}/assets/preferred-logo-truck.webp`,
  image: `${site.url}/og-image.webp`,
  telephone: `+1-${site.phone}`,
  email: [site.hunterEmail, site.ronEmail],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Spirit Lake",
    addressRegion: "ID",
    postalCode: "83869",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.9627,
    longitude: -116.8685,
  },
  areaServed: locations.map((location) => ({
    "@type": "City",
    name: `${location.city}, ${location.state}`,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  sameAs: [site.facebook, site.tiktok, site.googleReview],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${site.url}/services/${service.slug}/`,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <meta name="theme-color" content="#061c35" />
      </head>
      <body className={`${barlowCondensed.variable} antialiased`}>
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
