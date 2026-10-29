import type { Metadata } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

const fallbackDescription =
  "Owner-operated plumbing, radiant heat, and repairs in Spirit Lake, North Idaho, and nearby Eastern Washington.";

const serviceTitles: Record<string, string> = {
  emergency: "Emergency Plumber",
  "radiant-heat": "Radiant Floor Heating",
  "heated-driveways": "Heated Driveways",
  "new-construction": "New Construction Plumbing",
  commercial: "Commercial Plumbing",
  "tankless-water-heaters": "Tankless Water Heaters",
  "water-heaters": "Water Heater Service",
  "water-softeners": "Water Softeners",
  remodels: "Plumbing Remodels",
  "kitchen-remodels": "Kitchen Remodel Plumbing",
  "bathroom-remodels": "Bathroom Remodel Plumbing",
  "toilets-faucets": "Toilets and Faucets",
  "bathtubs-showers": "Bathtubs and Showers",
  dishwashers: "Dishwashers and Disposals",
  "sewer-line": "Sewer Line Service",
  "drain-cleaning": "Drain Cleaning",
  "water-line": "Water Line Service",
  "leak-detection": "Leak Detection and Repair",
  "gas-line": "Gas Line Service",
  "septic-systems": "Septic Systems",
};

export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : site.name;
  const description = metadata.description || fallbackDescription;
  const canonical = metadata.alternates?.canonical;
  const url = canonical
    ? new URL(canonical.toString(), site.url).toString()
    : site.url;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    ...metadata,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: `${title} — ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.webp"],
    },
  };
}

export function serviceMetadata(slug: string): Metadata {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Missing service metadata for ${slug}`);

  return withSocialMetadata({
    title: serviceTitles[slug] || service.title,
    description: `${serviceTitles[slug] || service.title} in North Idaho. Licensed, owner-operated plumbing for repairs, replacements, and new projects. Request a free estimate.`,
    alternates: { canonical: `/services/${slug}/` },
  });
}
