import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { LocationsPage } from "@/components/LocationsPage";
export const metadata: Metadata = withSocialMetadata({
  title: "Plumbing Service Areas",
  description:
    "Explore plumbing service areas across North Idaho and Eastern Washington for homes and businesses. Our owner-operated team is based in Spirit Lake, Idaho.",
  alternates: { canonical: "/locations/" },
});
export default function Page() {
  return <LocationsPage />;
}
