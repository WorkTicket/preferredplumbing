import { GuidePlanning } from "@/components/EditorialSections";
import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";

const projectResources = [
  {
    title: "Permits and inspections",
    description:
      "Review state plumbing permit and inspection information before work begins.",
    href: "https://dopl.idaho.gov/plb/plb-permits-and-inspections/",
    icon: "check",
    source: "Idaho DOPL",
  },
  {
    title: "Underground utility locates",
    description:
      "Request free utility markings before excavation for water, sewer, or gas lines.",
    href: "https://www.nid811.com/",
    icon: "pipe",
    source: "North Idaho 811",
  },
  {
    title: "Septic permits and records",
    description:
      "Find septic permit requirements and existing system records for North Idaho properties.",
    href: "https://panhandlehealthdistrict.org/licensing-and-permitting/septic-permits-and-records/",
    icon: "septic",
    source: "Panhandle Health District",
  },
  {
    title: "Kootenai County permits",
    description:
      "Check Kootenai County building requirements, forms, and jurisdiction information.",
    href: "https://www.kcgov.us/220/Building",
    icon: "building",
    source: "Kootenai County",
  },
  {
    title: "Private well guidance",
    description:
      "Learn about well testing, water quality, and protecting a private drinking-water source.",
    href: "https://www.deq.idaho.gov/water-quality/groundwater/wells/",
    icon: "drop",
    source: "Idaho DEQ",
  },
  {
    title: "Water-efficient fixtures",
    description:
      "Compare WaterSense-labeled toilets, faucets, and showerheads for your project.",
    href: "https://www.epa.gov/watersense/watersense-products",
    icon: "spark",
    source: "U.S. EPA WaterSense",
  },
] as const;

export const metadata: Metadata = withSocialMetadata({
  title: "Homeowner resource center",
  description:
    "Homeowner resource center. Owner-operated plumbing in Spirit Lake and North Idaho. Contact Preferred Plumbing Solutions for a free estimate.",
  alternates: {
    canonical: "/learn/",
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
            <span>{"Homeowner resources"}</span>
          </div>
          <div className={"hero-grid"}>
            <div>
              <div className={"eyebrow"}>{"Homeowner resources"}</div>
              <h1>
                {"Know your home."}
                <br />
                <span className={"cyan"}>{"Plan with confidence."}</span>
              </h1>
              <p>
                {
                  "Explore common questions, project examples, and local service information."
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
            </div>
            <img
              className={"cutout"}
              src={"/assets/tools.webp"}
              alt={"Know your home.  Plan with confidence."}
              fetchPriority={"high"}
              width={1351}
              height={1164}
            />
          </div>
        </div>
      </section>
      <section className={"section wrap"}>
        <div className={"grid3"}>
          <a className={"article-card"} href={"/services/"}>
            <div>
              <span className={"service-icon"}>
                <Icon name="wrench" />
              </span>
              <h3>{"Plumbing services"}</h3>
              <p>
                {
                  "Explore repair, installation, heating, remodeling, and construction services."
                }
              </p>
              <b>
                {"Explore "}
                <Icon name="arrow" />
              </b>
            </div>
          </a>
          <a className={"article-card"} href={"/faqs/"}>
            <div>
              <span className={"service-icon"}>
                <Icon name="chat" />
              </span>
              <h3>{"Common questions"}</h3>
              <p>
                {
                  "Straight answers about service, scheduling, and what to expect."
                }
              </p>
              <b>
                {"Explore "}
                <Icon name="arrow" />
              </b>
            </div>
          </a>
          <a className={"article-card"} href={"/locations/"}>
            <div>
              <span className={"service-icon"}>
                <Icon name="pin" />
              </span>
              <h3>{"Service areas"}</h3>
              <p>
                {
                  "Find the communities we serve across North Idaho and Eastern Washington."
                }
              </p>
              <b>
                {"Explore "}
                <Icon name="arrow" />
              </b>
            </div>
          </a>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="eyebrow">Before your plumbing project</div>
          <h2>Start with the right information.</h2>
          <p className="resource-intro">
            Check permits, property systems, and excavation requirements early.
            Your local authority determines what applies to your address, and we
            can help you understand the plumbing side of the process.
          </p>
          <div className="grid3 resource-grid">
            {projectResources.map((resource) => (
              <a
                className="resource-card"
                href={resource.href}
                key={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="resource-card-top">
                  <span className="resource-icon" aria-hidden="true">
                    <Icon name={resource.icon} />
                  </span>
                  <span className="resource-source">{resource.source}</span>
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className="resource-link">
                  Open official resource <Icon name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <GuidePlanning topic="Planning plumbing projects" />
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
