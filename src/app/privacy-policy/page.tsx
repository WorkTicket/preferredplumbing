import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";
import { SafeEmail } from "@/components/SafeEmail";
import { site } from "@/data/site";

export const metadata: Metadata = withSocialMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy. Owner-operated plumbing in Spirit Lake and North Idaho. Contact Preferred Plumbing Solutions for a free estimate.",
  alternates: {
    canonical: "/privacy-policy/",
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
              <h1>{"Privacy Policy"}</h1>
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
              'Preferred Plumbing Solutions ("we," "us," or "our") operates callpreferredplumbing.com and provides plumbing services from Spirit Lake, Idaho 83869, serving North Idaho and Eastern Washington. This Privacy Policy explains what information we collect, why we collect it, how we use it, and your choices.'
            }
          </p>
          <h2>{"Information We Collect"}</h2>
          <h2>{"We may collect the following categories of information:"}</h2>
          <p>
            {
              "Contact and quote details you submit through our forms, including name, phone number, email address (optional), city, requested service, message, and how you heard about us."
            }
          </p>
          <p>
            {
              "Communications when you call, text, or email us, including the phone number or email address you use and the content of your inquiry as needed to respond and schedule service."
            }
          </p>
          <p>
            {
              "Technical and usage data when you visit our website, such as pages viewed, approximate location derived from IP address, device/browser type, and referral source. If you consent to analytics cookies, we collect this through Google Analytics."
            }
          </p>
          <h2>{"How We Use Your Information"}</h2>
          <h2>{"We use personal information to:"}</h2>
          <h2>{"Respond to quote requests and schedule appointments"}</h2>
          <h2>{"Communicate about your project, service, or estimate"}</h2>
          <h2>{"Operate, secure, and improve our website"}</h2>
          <h2>
            {
              "Understand site traffic and performance (analytics), only when you have consented"
            }
          </h2>
          <h2>{"Comply with legal obligations and protect our rights"}</h2>
          <p>
            {
              "We do not sell your personal information, and we do not share it with third parties for their own marketing purposes."
            }
          </p>
          <h2>{"Cookies and Similar Technologies"}</h2>
          <h2>{"We use cookies and similar technologies as follows:"}</h2>
          <p>
            {
              "Essential — needed for the site to function securely (for example, hosting and security features provided by our infrastructure). These do not require consent."
            }
          </p>
          <p>
            {
              "Analytics — with your consent, Google Analytics (GA4) helps us understand how visitors use callpreferredplumbing.com (pages viewed, traffic sources, and similar usage metrics). You can accept or reject analytics cookies via our cookie banner."
            }
          </p>
          <p>
            {
              "Your choice is stored in your browser (local storage) so we remember your preference. You can clear site data in your browser settings to see the banner again and change your choice. You may also use browser controls to block or delete cookies."
            }
          </p>
          <h2>{"Third Parties and Service Providers"}</h2>
          <p>
            {
              "We use trusted service providers who process information on our behalf or as independent controllers of their own services:"
            }
          </p>
          <p>
            {
              "Cloudflare — website hosting, security, and content delivery for callpreferredplumbing.com."
            }
          </p>
          <p>
            {
              "Google Analytics — website analytics when you consent to analytics cookies. Google's use of data is governed by its own privacy policy."
            }
          </p>
          <p>
            {
              "Google Maps — map embeds and directions links on our contact and location pages."
            }
          </p>
          <p>
            {
              "Email delivery — contact form submissions are transmitted securely (HTTPS) and delivered to our business email so we can respond to your inquiry."
            }
          </p>
          <p>
            {
              "Our site may also link to third-party platforms such as Facebook, TikTok, or Google Business Profile. Those services have their own privacy practices once you leave our site."
            }
          </p>
          <h2>{"Data Retention and Security"}</h2>
          <p>
            {
              "We retain contact and project-related information as long as needed to respond to inquiries, provide services, maintain business records, and meet legal requirements. We use reasonable administrative and technical safeguards, including HTTPS transmission. No method of transmission or storage is completely secure."
            }
          </p>
          <h2>{"Your Rights and Choices"}</h2>
          <p>
            {
              "Depending on applicable law, you may request access to, correction of, or deletion of personal information we hold about you. You may also opt out of analytics cookies as described above. To make a privacy request, contact us using the information below. We will respond within a reasonable time."
            }
          </p>
          <h2>{"Children's Privacy"}</h2>
          <p>
            {
              "Our website and services are directed to adults seeking plumbing services. We do not knowingly collect personal information from children under 13."
            }
          </p>
          <h2>{"Changes to This Policy"}</h2>
          <p>
            {
              'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect the latest revision. Continued use of the site after changes means you acknowledge the updated policy.'
            }
          </p>
          <h2>{"Related Terms"}</h2>
          <p>
            {"Use of this website is also subject to our Terms & Conditions."}
          </p>
          <h2>{"Contact Us"}</h2>
          <p>
            {
              "Preferred Plumbing Solutions · Spirit Lake, Idaho 83869 · Phone: "
            }
            <a href={"tel:2082903889"}>{"(208) 290-3889"}</a>
          </p>
          <p>{"For privacy questions or requests, email:"}</p>
          <p>
            {"Hunter Norris — "}
            <SafeEmail {...site.hunterEmailParts} />
          </p>
          <p>
            {"Ron Norris — "}
            <SafeEmail {...site.ronEmailParts} />
          </p>
        </article>
      </section>
    </>
  );
}
