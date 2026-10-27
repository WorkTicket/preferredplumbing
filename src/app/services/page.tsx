import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";
import { ServicesExplorer } from "@/components/ServicesExplorer";

export const metadata: Metadata = withSocialMetadata({
  title: "Plumbing services in Spirit Lake",
  description:
    "Plumbing services in Spirit Lake. Owner-operated plumbing in Spirit Lake and North Idaho. Contact Preferred Plumbing Solutions for a free estimate.",
  alternates: {
    canonical: "/services/",
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
            <span>{"Our services"}</span>
          </div>
          <div className={"hero-grid"}>
            <div>
              <div className={"eyebrow"}>{"Our services"}</div>
              <h1>
                {"Big builds."}
                <br />
                <span className={"cyan"}>{"Everyday fixes."}</span>
              </h1>
              <p>
                {
                  "All the plumbing expertise your home or business needs, from one owner-operated team."
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
              src={"/assets/tools-services.webp"}
              alt={"Big builds.  Everyday fixes."}
              fetchPriority={"high"}
              width={960}
              height={827}
            />
          </div>
        </div>
      </section>
      <ServicesExplorer />
      <section className={"cta-band"}>
        <div className={"wrap"}>
          <div>
            <div className={"eyebrow cyan"}>{"Let’s get it handled."}</div>
            <h2>{"Your plumbing. Our family’s word."}</h2>
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
