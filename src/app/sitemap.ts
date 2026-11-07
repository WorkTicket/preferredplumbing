import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { site } from "@/data/site";
import { publishedLocations } from "@/data/locations";
import { services } from "@/data/services";
import { getAllBlogSlugs } from "@/data/blog";
export const dynamic = "force-static";

function canonicalUrl(route: string): string {
  const path = route === "/" ? route : `${route.replace(/\/+$/, "")}/`;
  return new URL(path, site.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const generated = [
    ...services.map((service) => `/services/${service.slug}`),
    ...publishedLocations.map((location) => `/locations/${location.slug}`),
    "/blog",
    ...getAllBlogSlugs().map((slug) => `/blog/${slug}`),
  ];
  const now = new Date();
  return [...new Set([...routes, ...generated])].map((route) => ({
    url: canonicalUrl(route),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      route === "/"
        ? 1
        : route === "/services" ||
            route === "/locations" ||
            route === "/blog" ||
            route === "/locations/spirit-lake-id"
          ? 0.9
          : route.startsWith("/blog/")
            ? 0.75
            : 0.7,
  }));
}
