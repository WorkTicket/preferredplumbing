import { ContactPreparation } from "@/components/EditorialSections";
import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";
import { EstimateForm } from "@/components/EstimateForm";

export const metadata: Metadata = withSocialMetadata({
  title: "Contact and free estimates",
  description:
    "Contact and free estimates. Owner-operated plumbing in Spirit Lake and North Idaho. Contact Preferred Plumbing Solutions for a free estimate.",
  alternates: {
    canonical: "/contact/",
  },
});

export default function Page() {
  return (
    <>
      <section className={"pagehero contact-hero"}>
        <div className={"wrap"}>
          <div className={"bread"}>
            <a href={"/"}>{"Home"}</a>
            <Icon name="arrow" />
            <span>{"Contact our team"}</span>
          </div>
          <div className={"hero-grid"}>
            <div>
              <div className={"eyebrow"}>{"Contact our team"}</div>
              <h1>
                {"Your next step?"}
                <br />
                <span className={"cyan"}>{"Talk to Preferred."}</span>
              </h1>
              <p>
                {
                  "A new project, an urgent repair, or a quick question. We’re ready to hear what you need."
                }
              </p>
              <div className={"actions"}>
                <a className={"btn"} href={"#estimate"}>
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
              src={"/Preferred-Plumbing-Hero-Images/contact.webp"}
              alt={"Contact the Preferred Plumbing Solutions team"}
              fetchPriority={"high"}
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>
      <section className={"section wrap"}>
        <div className={"contact-grid"}>
          <div>
            <div className={"eyebrow"}>{"Real people. Direct answers."}</div>
            <h2>
              {"Let’s get"}
              <br />
              {"connected."}
            </h2>
            <p>
              {
                "Call during business hours for urgent help. For planned projects, send an estimate request with a few details."
              }
            </p>
            <div className={"contact-card"}>
              <Icon name="phone" />
              <div>
                <strong>{"Call Preferred"}</strong>
                <p>
                  <a href={"tel:2082903889"}>{"208-290-3889"}</a>
                </p>
              </div>
            </div>
            <div className={"contact-card"}>
              <Icon name="mail" />
              <div>
                <strong>{"Email Hunter"}</strong>
                <p>
                  <a href={"mailto:preferredhnorris@gmail.com"}>
                    {"preferredhnorris@gmail.com"}
                  </a>
                </p>
              </div>
            </div>
            <div className={"contact-card"}>
              <Icon name="mail" />
              <div>
                <strong>{"Email Ron"}</strong>
                <p>
                  <a href={"mailto:preferredrnorris@gmail.com"}>
                    {"preferredrnorris@gmail.com"}
                  </a>
                </p>
              </div>
            </div>
            <div className={"contact-card"}>
              <Icon name="clock" />
              <div>
                <strong>{"Business hours"}</strong>
                <p>
                  {"Sunday–Friday · 7am–5pm"}
                  <br />
                  {"Saturday closed"}
                </p>
              </div>
            </div>
            <div className={"contact-card"}>
              <Icon name="pin" />
              <div>
                <strong>{"Our home base"}</strong>
                <p>{"Spirit Lake, Idaho 83869"}</p>
              </div>
            </div>
          </div>
          <EstimateForm />
        </div>
        <div className={"area-panel"}>
          <div className={"split"}>
            <div>
              <div className={"eyebrow cyan"}>
                {"North Idaho & Eastern Washington"}
              </div>
              <h3>{"Local roots. A wider reach."}</h3>
              <p>
                {
                  "Spirit Lake, Coeur d’Alene, Post Falls, Sandpoint, Hayden, Rathdrum, and surrounding communities."
                }
              </p>
              <a className={"btn"} href={"/locations/"}>
                {"Find your area "}
                <Icon name="pin" />
              </a>
            </div>
            <img
              src={"/assets/van.webp"}
              alt={"Preferred Plumbing branded van"}
              loading={"lazy"}
              width={1600}
              height={640}
            />
          </div>
        </div>
      </section>

      <ContactPreparation />
    </>
  );
}
