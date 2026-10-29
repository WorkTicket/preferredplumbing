import { FAQExplorer } from "@/components/FAQExplorer";
import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = withSocialMetadata({
  title: "Frequently asked questions",
  description:
    "Frequently asked questions. Owner-operated plumbing in Spirit Lake and North Idaho. Contact Preferred Plumbing Solutions for a free estimate.",
  alternates: {
    canonical: "/faqs/",
  },
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <section className={"pagehero"}>
        <div className={"wrap"}>
          <div className={"bread"}>
            <a href={"/"}>{"Home"}</a>
            <Icon name="arrow" />
            <span>{"Common questions"}</span>
          </div>
          <div className={""}>
            <div>
              <div className={"eyebrow"}>{"Common questions"}</div>
              <h1>
                {"Good questions."}
                <br />
                <span className={"cyan"}>{"Clear answers."}</span>
              </h1>
              <p>
                {
                  "Practical answers about our services, estimates, scheduling, and plumbing in North Idaho."
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
          </div>
        </div>
      </section>
      <FAQExplorer />
      <section className={"cta-band"}>
        <div className={"wrap"}>
          <div>
            <div className={"eyebrow cyan"}>{"Let’s get it handled."}</div>
            <h2>{"Still have a question?"}</h2>
            <p>
              {
                "Give our family a call. We’re happy to talk through your project."
              }
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
