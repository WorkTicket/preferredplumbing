import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { LocationsPage } from "@/components/LocationsPage";
export const metadata: Metadata = withSocialMetadata({
  title: "North Idaho Service Areas",
  description:
    "Preferred Plumbing serves Spirit Lake, Hayden, Coeur d'Alene, Post Falls, Rathdrum, Sandpoint, and nearby towns. Free estimates: 208-290-3889.",
  alternates: { canonical: "/locations/" },
});
export default function Page() {
  return <LocationsPage />;
}
