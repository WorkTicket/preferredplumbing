import { ProjectStory } from "@/components/EditorialSections";
import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";
import { GalleryExplorer } from "@/components/ProjectGallery";

export const metadata: Metadata = withSocialMetadata({
  title: "Project gallery",
  description:
    "Project gallery. Owner-operated plumbing in Spirit Lake and North Idaho. Contact Preferred Plumbing Solutions for a free estimate.",
  alternates: {
    canonical: "/gallery/",
  },
});

export default function Page() {
  return (
    <>
      <section className={"pagehero"}>
        <div className={"wrap"}>
          <div className={"bread"}>
            <a href={"/"}>{"Home"}</a>
            <Icon name="arrow" />
            <span>{"Our project gallery"}</span>
          </div>
          <div className={"hero-grid"}>
            <div>
              <div className={"eyebrow"}>{"Our project gallery"}</div>
              <h1>
                {"Real jobs."}
                <br />
                <span className={"cyan"}>{"Solid work."}</span>
              </h1>
              <p>
                {
                  "From rough-in to the final fixture, explore Preferred’s work across North Idaho."
                }
              </p>
              <div className={"actions"}>
                <a className={"btn"} href={"/contact/"}>
                  {"Get a free estimate "}
                  <Icon name="arrow" />
                </a>
                <a
                  href={"tel:2082903889"}
                  style={{ fontWeight: "800", fontSize: "14px" }}
                >
                  {"208-290-3889"}
                </a>
              </div>
              <div className={"pillrow"}>
                <span>
                  <Icon name="shield" />
                  {" Licensed & insured"}
                </span>
                <span>
                  <Icon name="users" />
                  {" Owner-operated"}
                </span>
                <span>
                  <Icon name="chat" />
                  {" Free estimates"}
                </span>
              </div>
            </div>
            <img
              className={"cutout"}
              src={"/Preferred-Plumbing-Hero-Images/gallery.webp"}
              alt={"Preferred Plumbing project gallery illustration"}
              fetchPriority={"high"}
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>
      <GalleryExplorer />
      <ProjectStory />
      <section className={"cta-band"}>
        <div className={"wrap"}>
          <div>
            <div className={"eyebrow cyan"}>{"Let’s get it handled."}</div>
            <h2>{"Got a project in mind?"}</h2>
            <p>
              {"Tell us what you need. We’ll help you work out the next step."}
            </p>
          </div>
          <a className={"btn"} href={"/contact/"}>
            {"Request a free estimate "}
            <Icon name="arrow" />
          </a>
        </div>
      </section>
    </>
  );
}
