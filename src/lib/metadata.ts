import type { Metadata } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

const fallbackDescription =
  "Owner-operated plumbing, radiant heat, and repairs in Spirit Lake, North Idaho, and nearby Eastern Washington.";

export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : site.name;
  const description = metadata.description || fallbackDescription;
  const canonical = metadata.alternates?.canonical;
  const url = canonical
    ? new URL(canonical.toString(), site.url).toString()
    : site.url;
  const fullTitle = `${title} | ${site.name}`;

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
    title: `${service.title} in North Idaho`,
    description: `${service.description} Owner-operated and licensed in Spirit Lake. Request a free estimate.`,
    alternates: { canonical: `/services/${slug}/` },
  });
}
