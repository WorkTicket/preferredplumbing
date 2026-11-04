import type { Metadata } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

const fallbackDescription =
  "Owner-operated plumbing, radiant heat, and repairs in Spirit Lake, North Idaho, and nearby Eastern Washington. Call 208-290-3889.";

const serviceTitles: Record<string, string> = {
  emergency: "Emergency Plumber",
  "radiant-heat": "Radiant Floor Heating",
  "heated-driveways": "Heated Driveways",
  "new-construction": "New Construction Plumbing",
  commercial: "Commercial Plumbing",
  "tankless-water-heaters": "Tankless Water Heaters",
  "water-heaters": "Water Heater Repair",
  "water-softeners": "Water Softeners",
  remodels: "Plumbing Remodels",
  "kitchen-remodels": "Kitchen Remodel Plumbing",
  "bathroom-remodels": "Bathroom Remodel Plumbing",
  "toilets-faucets": "Toilets and Faucets",
  "bathtubs-showers": "Bathtubs and Showers",
  dishwashers: "Dishwashers and Disposals",
  "sewer-line": "Sewer Line Repair",
  "drain-cleaning": "Drain Cleaning",
  "water-line": "Water Line Repair",
  "leak-detection": "Leak Detection & Repair",
  "gas-line": "Gas Line Service",
  "septic-systems": "Septic Systems",
};

const serviceDescriptions: Record<string, string> = {
  emergency:
    "Emergency plumber in North Idaho for burst pipes, backups, and no-hot-water calls. Owner-operated. Call 208-290-3889.",
  "radiant-heat":
    "Radiant floor heating design and install for North Idaho homes. Built for cold winters. Free estimates: 208-290-3889.",
  "heated-driveways":
    "Heated driveway and snow-melt systems for North Idaho. Hydronic installs sized for ice and freeze depth. Call 208-290-3889.",
  "new-construction":
    "New construction plumbing for North Idaho builds — rough-in through trim. Clear scope, free estimates. Call 208-290-3889.",
  commercial:
    "Commercial plumbing for North Idaho businesses and light commercial jobs. Repairs and project work. Call 208-290-3889.",
  "tankless-water-heaters":
    "Tankless water heater install and service in North Idaho. Right-sized units and clean installs. Call 208-290-3889.",
  "water-heaters":
    "Water heater repair and replacement in North Idaho. Same-week installs when stock allows. Free estimates: 208-290-3889.",
  "water-softeners":
    "Water softener installation for hard North Idaho well and city water. Sized correctly. Free estimates: 208-290-3889.",
  remodels:
    "Plumbing remodels for kitchens, baths, and whole-home updates across North Idaho. Clear estimates. Call 208-290-3889.",
  "kitchen-remodels":
    "Kitchen remodel plumbing in North Idaho — sinks, supply, drains, and fixtures done right. Free estimates: 208-290-3889.",
  "bathroom-remodels":
    "Bathroom remodel plumbing in North Idaho — showers, tubs, toilets, and supply lines. Free estimates: 208-290-3889.",
  "toilets-faucets":
    "Toilet and faucet installation or replacement in North Idaho. Fast, clean owner-operated work. Call 208-290-3889.",
  "bathtubs-showers":
    "Bathtub and shower plumbing installs and replacements across North Idaho. Free estimates — call 208-290-3889 today.",
  dishwashers:
    "Dishwasher and garbage disposal install or replacement in North Idaho. Owner-operated. Call 208-290-3889 today.",
  "sewer-line":
    "Sewer line repair and replacement in North Idaho. Diagnose first, then clear options and pricing. Call 208-290-3889.",
  "drain-cleaning":
    "Drain cleaning for sinks, tubs, and main lines in North Idaho. Owner-operated team. Free estimates: 208-290-3889.",
  "water-line":
    "Water line repair and replacement for North Idaho homes and wells. Free estimates — call 208-290-3889 for help.",
  "leak-detection":
    "Leak detection and repair in North Idaho. Find the source, stop the damage, and fix it clean. Call 208-290-3889.",
  "gas-line":
    "Gas line installation and repair by a licensed North Idaho plumber. Safe, code-compliant work. Call 208-290-3889.",
  "septic-systems":
    "Septic plumbing ties and related work for rural North Idaho properties. Free estimates — call 208-290-3889 today.",
};

function resolveTitle(title: Metadata["title"]): string {
  if (typeof title === "string") return title;
  if (title && typeof title === "object") {
    if ("absolute" in title && title.absolute) return title.absolute;
    if ("default" in title && title.default) return String(title.default);
  }
  return site.name;
}

export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = resolveTitle(metadata.title);
  const description = metadata.description || fallbackDescription;
  const canonical = metadata.alternates?.canonical;
  const url = canonical
    ? new URL(canonical.toString(), site.url).toString()
    : site.url;
  const fullTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;

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
  const label = serviceTitles[slug] || service.title;

  return withSocialMetadata({
    title: label,
    description:
      serviceDescriptions[slug] ||
      `${label} in North Idaho from Preferred Plumbing Solutions. Licensed and owner-operated. Free estimates — call 208-290-3889.`,
    alternates: { canonical: `/services/${slug}/` },
  });
}

export function locationMetadata(
  city: string,
  state: string,
  slug: string,
): Metadata {
  const stateAbbr =
    state === "Idaho" ? "ID" : state === "Washington" ? "WA" : state;
  return withSocialMetadata({
    title: `Plumber in ${city}, ${stateAbbr}`,
    description: `Need a plumber in ${city}, ${stateAbbr}? Preferred Plumbing Solutions is owner-operated from Spirit Lake. Free estimates — call 208-290-3889.`,
    alternates: { canonical: `/locations/${slug}/` },
  });
}
