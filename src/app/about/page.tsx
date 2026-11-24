import { FamilyStandard } from "@/components/EditorialSections";
import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = withSocialMetadata({
  title: "About Ron & Hunter",
  description:
    "Meet Ron and Hunter of Preferred Plumbing Solutions — the owner-operated Spirit Lake team serving North Idaho. Call 208-290-3889.",
  alternates: {
    canonical: "/about/",
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
            <span>{"About Preferred"}</span>
          </div>
          <div className={"hero-grid"}>
            <div>
              <div className={"eyebrow"}>{"About Preferred"}</div>
              <h1>
                {"A family trade."}
                <br />
                <span className={"cyan"}>{"A local name."}</span>
              </h1>
              <p>
                {
                  "Meet the owner-operated, locally owned team behind Preferred Plumbing Solutions."
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
              src={"/Preferred-Plumbing-Hero-Images/about.webp"}
              alt={"Preferred Plumbing Solutions family plumbing team"}
              fetchPriority={"high"}
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>
      <FamilyStandard />
      <section className={"section wrap"}>
        <div className={"split"}>
          <div>
            <div className={"eyebrow"}>{"Spirit Lake is home"}</div>
            <h2>
              {"Good work."}
              <br />
              {"Good people."}
            </h2>
            <p>
              {
                "Between them, Ron and Hunter have more than 38 years in the trade. The company started with Ron taking jobs one at a time in Spirit Lake. Today the same family crew works across North Idaho and into eastern Washington."
              }
            </p>
            <p>
              {
                "Ron's rule never changed: do the job right, charge a fair price, and treat the customer like a neighbor. Hunter grew up on those jobsites and now runs projects with that same standard."
              }
            </p>
            <p>
              {
                "We do new construction plumbing, radiant heat systems, water heaters, commercial work, kitchen and bath remodels, and emergency calls. Every one of our guys is licensed, insured, and takes real pride in their work."
              }
            </p>
          </div>
          <div className={"visual"}>
            <img
              className={"largephoto"}
              src={"/assets/hunter-about.webp"}
              alt={
                "Hunter Norris of Preferred Plumbing Solutions working on a radiant heating manifold"
              }
              loading={"lazy"}
              width={1536}
              height={1024}
            />
            <div className={"image-caption"}>
              <b>{"Hunter Norris."}</b>
              {"An owner on the tools."}
            </div>
          </div>
        </div>
      </section>
      <section className={"section tint"}>
        <div className={"wrap grid3"}>
          <article className={"feature"}>
            <span className={"service-icon"}>
              <Icon name="users" />
            </span>
            <h3>{"Owners on the tools."}</h3>
            <p>
              {
                "Talk to the family doing the work. Ron and Hunter bring their experience to your project."
              }
            </p>
          </article>
          <article className={"feature"}>
            <span className={"service-icon"}>
              <Icon name="shield" />
            </span>
            <h3>{"A name behind the work."}</h3>
            <p>
              {
                "Licensed, insured, and focused on reliable plumbing for homes and businesses."
              }
            </p>
          </article>
          <article className={"feature"}>
            <span className={"service-icon"}>
              <Icon name="pin" />
            </span>
            <h3>{"Built for this place."}</h3>
            <p>
              {
                "Local knowledge for North Idaho homes, cold winters, rural properties, and new builds."
              }
            </p>
          </article>
        </div>
      </section>
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
