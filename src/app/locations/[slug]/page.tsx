import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/LocationPage";
import { publishedLocations } from "@/data/locations";
import { locationMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = publishedLocations.find((item) => item.slug === slug);
  if (!location) notFound();
  return locationMetadata(location.city, location.state, location.slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LocationPage slug={slug} />;
}
