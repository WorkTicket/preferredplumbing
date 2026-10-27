import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { LocationsPage } from "@/components/LocationsPage";
export const metadata: Metadata = withSocialMetadata({
  title: "Locations — North Idaho & Eastern Washington",
  description:
    "Explore Preferred Plumbing service locations in North Idaho and Eastern Washington.",
  alternates: { canonical: "/locations/" },
});
export default function Page() {
  return <LocationsPage />;
}
