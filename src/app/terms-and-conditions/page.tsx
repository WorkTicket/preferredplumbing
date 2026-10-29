import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = withSocialMetadata({
  title: "Terms & Conditions",
  description:
    "Terms & Conditions. Owner-operated plumbing in Spirit Lake and North Idaho. Contact Preferred Plumbing Solutions for a free estimate.",
  alternates: {
    canonical: "/terms-and-conditions/",
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
            <span>{"Company information"}</span>
          </div>
          <div className={""}>
            <div>
              <div className={"eyebrow"}>{"Company information"}</div>
              <h1>{"Terms & Conditions"}</h1>
              <p>{"Preferred Plumbing Solutions · Spirit Lake, Idaho"}</p>
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
      <section className={"section wrap"}>
        <article className={"prose"}>
          <h2>{"Legal"}</h2>
          <h2>{"Last updated: July 22, 2026"}</h2>
          <p>
            {
              'These Terms & Conditions ("Terms") govern your access to and use of callpreferredplumbing.com (the "Site") operated by Preferred Plumbing Solutions ("we," "us," or "our"), a plumbing contractor based in Spirit Lake, Idaho 83869, serving North Idaho and Eastern Washington. By using the Site, you agree to these Terms. If you do not agree, please do not use the Site.'
            }
          </p>
          <h2>{"Website Use"}</h2>
          <p>
            {
              "You may use the Site for lawful purposes only—primarily to learn about our plumbing services, view project information, and request quotes or contact us. You agree not to misuse the Site, attempt to disrupt its operation, scrape content without permission, submit false or misleading information through forms, or use the Site for any unlawful activity."
            }
          </p>
          <h2>{"Services and Estimates"}</h2>
          <p>
            {
              "Information on the Site—including service descriptions, project galleries, homeowner resources, and FAQs—is for general informational purposes. It does not constitute a binding offer, professional engineering advice, or a guarantee of availability, pricing, timeline, or results for any specific job."
            }
          </p>
          <p>
            {
              "Quote requests and free estimates are invitations to discuss your project. Any binding agreement for plumbing work is formed only through a separate written estimate, proposal, invoice, or contract that we provide and that you accept. Actual scope, materials, permits, site conditions, and pricing may differ from preliminary discussions."
            }
          </p>
          <h2>{"No Guarantees on Website Content"}</h2>
          <p>
            {
              "We strive to keep Site content accurate and up to date, but we do not warrant that the Site is error-free, complete, or continuously available. Service areas, hours, licensing statements, and offerings may change. Always confirm details by phone or email before relying on them."
            }
          </p>
          <h2>{"Intellectual Property"}</h2>
          <p>
            {
              "The Site and its content—including text, logos, photographs, videos, graphics, and design—are owned by Preferred Plumbing Solutions or used with permission. You may view and print pages for personal, non-commercial use related to evaluating our services. You may not copy, modify, distribute, or commercially exploit Site content without our prior written consent, except as allowed by law."
            }
          </p>
          <h2>{"Third-Party Links and Tools"}</h2>
          <p>
            {
              "The Site may link to third-party websites or embed tools such as Google Maps or social media profiles. We are not responsible for the content, privacy practices, or availability of those third parties. Your use of them is at your own risk and subject to their terms."
            }
          </p>
          <h2>{"Limitation of Liability"}</h2>
          <p>
            {
              "To the fullest extent permitted by applicable law, Preferred Plumbing Solutions and its owners, employees, and agents are not liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of—or inability to use—the Site, including reliance on Site content, even if we have been advised of the possibility of such damages."
            }
          </p>
          <p>
            {
              "Our total liability related to your use of the Site shall not exceed one hundred dollars (US $100) or the amount you paid us (if any) specifically for website-related access, whichever is greater. This limitation does not affect warranties or liabilities that apply under a separate written service contract for plumbing work, or rights that cannot be limited under Idaho or Washington law."
            }
          </p>
          <h2>{"Indemnification"}</h2>
          <p>
            {
              "You agree to indemnify and hold harmless Preferred Plumbing Solutions from claims, damages, losses, and expenses (including reasonable attorneys' fees) arising from your misuse of the Site, your violation of these Terms, or your submission of unlawful or infringing content."
            }
          </p>
          <h2>{"Privacy"}</h2>
          <p>
            {
              "How we collect and use personal information is described in our Privacy Policy, which is incorporated by reference into these Terms."
            }
          </p>
          <h2>{"Governing Law"}</h2>
          <p>
            {
              "These Terms are governed by the laws of the State of Idaho, without regard to conflict-of-law principles. Any dispute arising from these Terms or your use of the Site shall be resolved in the state or federal courts located in Idaho, and you consent to personal jurisdiction there, except where applicable law requires otherwise."
            }
          </p>
          <h2>{"Changes"}</h2>
          <p>
            {
              'We may update these Terms from time to time. The "Last updated" date shows the latest revision. Continued use of the Site after changes constitutes acceptance of the revised Terms.'
            }
          </p>
          <h2>{"Contact"}</h2>
          <h2>
            {
              "Preferred Plumbing SolutionsSpirit Lake, Idaho 83869Phone: (208) 290-3889"
            }
          </h2>
          <h2>{"Questions about these Terms:"}</h2>
          <h2>{"Email"}</h2>
          <h2>{"Hunter Norrispreferredhnorris@gmail.com"}</h2>
          <h2>{"Email"}</h2>
          <h2>{"Ron Norrispreferredrnorris@gmail.com"}</h2>
        </article>
      </section>
    </>
  );
}
