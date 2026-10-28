import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { site } from "@/data/site";
import { publishedLocations } from "@/data/locations";
import { services } from "@/data/services";
import { getAllServiceCityPages } from "@/data/service-city";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const generated = [
    ...services.map((service) => `/services/${service.slug}`),
    ...publishedLocations.map((location) => `/locations/${location.slug}`),
    ...getAllServiceCityPages().map((page) => page.path),
  ];
  return [...new Set([...routes, ...generated])].map((route) => ({
    url: new URL(route === "/" ? "/" : `${route}/`, site.url).toString(),
    changeFrequency: "weekly",
    priority:
      route === "/"
        ? 1
        : route === "/services" ||
            route === "/locations" ||
            route === "/locations/spirit-lake-id"
          ? 0.9
          : 0.7,
  }));
}
