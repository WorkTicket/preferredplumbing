import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/metadata";
import { Icon } from "@/components/Icon";
import { locations } from "@/data/locations";

export const metadata: Metadata = withSocialMetadata({
  title: {
    absolute: "Preferred Plumbing Solutions | Spirit Lake Plumber",
  },
  description:
    "Preferred Plumbing Solutions — owner-operated plumber in Spirit Lake, ID for repairs, water heaters, radiant heat, and new work. Call 208-290-3889.",
  alternates: {
    canonical: "/",
  },
});

export default function Page() {
  return (
    <>
      <section className={"hero home-hero"}>
        <img
          className="hero-background"
          src="/assets/lake-1536.webp"
          srcSet="/assets/lake-640.webp 640w, /assets/lake-1024.webp 1024w, /assets/lake-1536.webp 1536w"
          sizes="100vw"
          alt=""
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
        <div className={"wrap hero-grid hero-text-only home-hero-grid"}>
          <div>
            <div className={"eyebrow"}>
              {"Your local, owner-operated plumbing team"}
            </div>
            <h1>
              <span className={"home-hero-title"}>
                <span>{"Spirit Lake"}</span>
                <br />
                <span>{"plumbing."}</span>
              </span>
              <span className={"cyan home-hero-tagline"}>
                <span>{"Built for"}</span>
                <br />
                <span>{"North Idaho."}</span>
              </span>
            </h1>
            <p>
              {
                "Local plumbing repairs, water heaters, drains, radiant heat, remodels, and new construction from the Spirit Lake family behind Preferred."
              }
            </p>
            <div className={"actions"}>
              <a className={"btn"} href={"/contact/"}>
                {"Get my free estimate "}
                <span>{"↗"}</span>
              </a>
              <a
                href={"tel:2082903889"}
                style={{ fontWeight: "700", fontSize: "14px" }}
              >
                {"208-290-3889 ↗"}
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
        </div>
      </section>
      {"\n"}
      <div className={"wrap trust"}>
        <div>
          <strong>{"38+ YEARS"}</strong>
          <span>{"Experience in the trade"}</span>
        </div>
        <div>
          <strong>{"OWNER-OPERATED"}</strong>
          <span>{"Real people. Direct answers."}</span>
        </div>
        <div>
          <strong>{"BUILT FOR IDAHO"}</strong>
          <span>{"Heating & plumbing expertise"}</span>
        </div>
        <div>
          <strong>{"FREE ESTIMATES"}</strong>
          <span>{"Let's talk about your project"}</span>
        </div>
      </div>
      {"\n"}
      <section id={"services"} className={"intro wrap"}>
        <div className={"sectionhead"}>
          <div>
            <div className={"eyebrow"}>
              {"One team. Your whole plumbing system."}
            </div>
            <h2>
              {"Big builds."}
              <br />
              {"Everyday fixes."}
            </h2>
          </div>
          <p>
            {
              "New home or old problem, we bring the same care to every connection. Find the help you need."
            }
          </p>
        </div>
        <div className={"services"}>
          <article className={"service "}>
            <span className={"service-icon"}>
              <Icon name="wrench" />
            </span>
            <img
              src={"/assets/repairs-realistic.webp"}
              alt={"Plumbing & repairs illustration"}
              loading={"lazy"}
              width={1536}
              height={1024}
            />
            <h3>{"Plumbing & repairs"}</h3>
            <p>
              {
                "Leaks, fixtures, and the repairs that need a reliable pair of hands."
              }
            </p>
            <a href={"/services/emergency/"}>
              {"Tell us what you need "}
              <span>{"↗"}</span>
            </a>
          </article>
          <article className={"service featured"}>
            <span className={"service-icon"}>
              <Icon name="heat" />
            </span>
            <img
              src={"/assets/floor.webp"}
              alt={"Radiant floor heat illustration"}
              loading={"lazy"}
              width={1536}
              height={1024}
            />
            <h3>{"Radiant floor heat"}</h3>
            <p>
              {"Comfort from the ground up, designed for North Idaho winters."}
            </p>
            <a href={"/services/radiant-heat/"}>
              {"Tell us what you need "}
              <span>{"↗"}</span>
            </a>
          </article>
          <article className={"service "}>
            <span className={"service-icon"}>
              <Icon name="tank" />
            </span>
            <img
              src={"/assets/tankless.webp"}
              alt={"Tankless water heaters illustration"}
              loading={"lazy"}
              width={1000}
              height={1500}
            />
            <h3>{"Tankless water heaters"}</h3>
            <p>
              {
                "Installation, replacement, and repairs for on-demand hot water."
              }
            </p>
            <a href={"/services/tankless-water-heaters/"}>
              {"Tell us what you need "}
              <span>{"↗"}</span>
            </a>
          </article>
          <article className={"service "}>
            <span className={"service-icon"}>
              <Icon name="pipe" />
            </span>
            <img
              src={"/assets/camera.webp"}
              alt={"Drains & sewer lines illustration"}
              loading={"lazy"}
              width={1349}
              height={1166}
            />
            <h3>{"Drains & sewer lines"}</h3>
            <p>{"Find the problem and get your plumbing moving again."}</p>
            <a href={"/services/drain-cleaning/"}>
              {"Tell us what you need "}
              <span>{"↗"}</span>
            </a>
          </article>
          <article className={"service "}>
            <span className={"service-icon"}>
              <Icon name="heat" />
            </span>
            <img
              src={"/assets/manifold.webp"}
              alt={"Boilers & hydronics illustration"}
              loading={"lazy"}
              width={1312}
              height={1199}
            />
            <h3>{"Boilers & hydronics"}</h3>
            <p>
              {
                "Thoughtful layouts, zone controls, and heating system expertise."
              }
            </p>
            <a href={"/services/radiant-heat/"}>
              {"Tell us what you need "}
              <span>{"↗"}</span>
            </a>
          </article>
          <article className={"service "}>
            <span className={"service-icon"}>
              <Icon name="home" />
            </span>
            <img
              src={"/assets/new-construction-rough-in-transparent.webp"}
              alt={"New construction plumbing rough-in illustration"}
              loading={"lazy"}
              width={900}
              height={822}
            />
            <h3>{"New construction"}</h3>
            <p>{"Plumbing from the first rough-in to the final fixture."}</p>
            <a href={"/services/new-construction/"}>
              {"Tell us what you need "}
              <span>{"↗"}</span>
            </a>
          </article>
        </div>
        <div className={"linkline"}>
          <span>
            {
              "Also here for remodels, commercial plumbing, and heated driveways."
            }
          </span>
          <a href={"tel:2082903889"}>{"Not sure? Talk to a plumber ↗"}</a>
        </div>
      </section>
      {"\n"}
      <section className={"winter"}>
        <div className={"wrap winter-grid"}>
          <div
            className={"winter-photo"}
            role={"img"}
            aria-label={
              "Illustration of a snow-free heated driveway at a mountain home"
            }
          ></div>
          <div className={"winter-copy"}>
            <div className={"eyebrow"}>
              {"A little less winter in your winter."}
            </div>
            <h2>
              {"Keep the warmth."}
              <br />
              <span className={"cyan"}>{"Lose the ice."}</span>
            </h2>
            <p>
              {
                "Our hydronic radiant expertise goes beyond your floors. Heated driveways and snow-melt systems help keep approaches clearer when North Idaho weather moves in — reviewed as their own project, not an afterthought."
              }
            </p>
            <ul className={"checks"}>
              <li>{"Hydronic radiant floor heating"}</li>
              <li>{"Heated driveways & snow-melt systems"}</li>
              <li>{"Builder planning for custom homes"}</li>
            </ul>
            <div className={"actions"}>
              <a className={"btn"} href={"/contact/?service=radiant-heat"}>
                {"Request a Radiant Heat Estimate ↗"}
              </a>
              <a className={"btn white"} href={"/services/heated-driveways/"}>
                {"Heated driveway projects ↗"}
              </a>
            </div>
          </div>
        </div>
      </section>
      {"\n"}
      <section className={"story home-family-preview"} id={"about"}>
        <div className={"wrap story-grid"}>
          <div className={"owner-frame"}>
            <img
              src={"/assets/hunter.webp"}
              alt={"Hunter Norris of Preferred Plumbing Solutions"}
              loading={"lazy"}
              width={1145}
              height={1374}
            />
            <div className={"owner-label"}>
              <strong>{"Owners on the tools."}</strong>
              {"That’s the Preferred difference."}
            </div>
          </div>
          <div className={"story-copy"}>
            <div className={"eyebrow"}>{"Our family. Your home."}</div>
            <h2>
              {"A father-son team."}
              <br />
              <span style={{ color: "#078ac9" }}>
                {"A name we stand behind."}
              </span>
            </h2>
            <p>
              {
                "Preferred Plumbing Solutions is a father-son shop run by Ron and Hunter Norris out of Spirit Lake. You get owners on the tools for new construction, radiant heat, remodels, and everyday repairs."
              }
            </p>
            <p>
              {
                "When you call, you talk to the people doing the work. We show up, explain the job, and build systems meant to handle life in North Idaho."
              }
            </p>
            <div className={"values"}>
              <div>{"✓ Owner-operated"}</div>
              <div>{"✓ Licensed & insured"}</div>
              <div>{"✓ Local to Spirit Lake"}</div>
              <div>{"✓ Free estimates"}</div>
            </div>
            <div className={"home-family-footer"}>
              <div className={"signature"}>{"Ron & Hunter Norris"}</div>
              <div className={"home-family-actions"}>
                <a className={"btn dark"} href={"tel:2082903889"}>
                  {"Talk with our team ↗"}
                </a>
                <a className={"btn home-about-link"} href={"/about/"}>
                  {"About us →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {"\n"}
      <section className={"process"}>
        <div className={"wrap"}>
          <div className={"process-head"}>
            <div className={"eyebrow cyan"}>
              {"Good plumbing. Straightforward process."}
            </div>
            <h2>{"Let’s get it handled."}</h2>
          </div>
          <div className={"steps"}>
            <div className={"step"}>
              <div className={"big"}>
                <Icon name="phone" />
              </div>
              <div>
                <h3>{"Tell us the problem."}</h3>
                <p>
                  {
                    "Call or send a request. Tell us what’s happening and where you’re located."
                  }
                </p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"big"}>
                <Icon name="chat" />
              </div>
              <div>
                <h3>{"Know the plan."}</h3>
                <p>
                  {
                    "We talk through your project, explain the options, and provide an estimate."
                  }
                </p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"big"}>
                <Icon name="wrench" />
              </div>
              <div>
                <h3>{"Back to your day."}</h3>
                <p>
                  {
                    "Our owner-operated team gets to work with care for your home and your time."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {"\n"}
      <section className={"work wrap"} id={"work"}>
        <div className={"sectionhead"}>
          <div>
            <div className={"eyebrow"}>
              {"From behind the walls to the finishing touches"}
            </div>
            <h2>
              {"Built to work."}
              <br />
              {"Made to last."}
            </h2>
          </div>
          <p>
            {
              "Complete plumbing for new construction, remodels, and the spaces you use every day."
            }
          </p>
        </div>
        <div className={"photos"}>
          <div className={"photo"}>
            <img
              src={"/assets/real-modern-bathroom-fixtures-1.webp"}
              alt={"Preferred Plumbing bathroom vanity project"}
              loading={"lazy"}
              width={1200}
              height={1600}
            />
            <div>
              <span>{"REMODELS & UPGRADES"}</span>
              <h3>{"A fresh start for your space."}</h3>
            </div>
          </div>
          <div className={"photo"}>
            <img
              src={"/assets/real-new-construction-rough-in-1.webp"}
              alt={"Preferred Plumbing construction rough-in project"}
              loading={"lazy"}
              width={1200}
              height={1600}
            />
            <div>
              <span>{"NEW CONSTRUCTION"}</span>
              <h3>{"Get the foundation right."}</h3>
            </div>
          </div>
        </div>
        <div className={"linkline"}>
          <span>{"Actual projects from Preferred’s live gallery."}</span>
          <a href={"/gallery/"}>{"Explore all project photos ↗"}</a>
        </div>
      </section>
      {"\n"}
      <section className={"areas"} id={"areas"}>
        <div className={"wrap areas-grid"}>
          <div>
            <div className={"eyebrow"}>{"Close to home. Ready to help."}</div>
            <h2>
              {"Spirit Lake roots."}
              <br />
              {"North Idaho reach."}
            </h2>
            <p>
              {
                "Based in Spirit Lake and serving North Idaho and nearby Eastern Washington communities."
              }
            </p>
            <div className={"towns"}>
              {[
                "spirit-lake-id",
                "coeur-dalene-id",
                "post-falls-id",
                "sandpoint-id",
                "hayden-id",
                "rathdrum-id",
                "priest-river-id",
                "athol-id",
              ].map((slug) => {
                const town = locations.find((l) => l.slug === slug);
                return town ? (
                  <span key={slug}>
                    {slug === "spirit-lake-id" ? (
                      <a href="/locations/spirit-lake-id/">{town.city}</a>
                    ) : (
                      town.city
                    )}
                  </span>
                ) : null;
              })}
            </div>
            <div className={"actions"}>
              <a className={"btn dark"} href={"/locations/"}>
                {"View our service area "}
                <Icon name="arrow" />
              </a>
              <a
                href={"tel:2082903889"}
                style={{
                  fontWeight: "800",
                  fontSize: "13px",
                  color: "#0875aa",
                }}
              >
                {"Not listed? Call 208-290-3889"}
              </a>
            </div>
          </div>
          <img
            src={"/assets/van.webp"}
            loading={"lazy"}
            alt={"Preferred Plumbing service van in Spirit Lake, Idaho"}
            width={1600}
            height={640}
          />
        </div>
      </section>
      {"\n"}
      <section className={"faq wrap"}>
        <div className={"faq-grid"}>
          <div>
            <div className={"eyebrow"}>{"Before you give us a call"}</div>
            <h2>
              {"Good questions."}
              <br />
              {"Clear answers."}
            </h2>
            <p>
              {"Have something else in mind?"}
              <br />
              <a
                href={"tel:2082903889"}
                style={{ color: "#087aaa", fontWeight: "800" }}
              >
                {"208-290-3889 ↗"}
              </a>
            </p>
          </div>
          <div>
            <details>
              <summary>{"Do you handle urgent plumbing repairs?"}</summary>
              <p>
                {
                  "Yes. Call during business hours, Sunday through Friday, 7am–5pm, to discuss an urgent repair. Saturday is closed. Availability depends on the job and location."
                }
              </p>
            </details>
            <details>
              <summary>{"Can you help with a new home build?"}</summary>
              <p>
                {
                  "Yes. We handle new construction plumbing, from rough-in through fixtures, and can discuss your plans and schedule."
                }
              </p>
            </details>
            <details>
              <summary>
                {"Do you install radiant heat and heated driveways?"}
              </summary>
              <p>
                {
                  "Yes. Radiant floors and hydronic snow-melt systems are part of our services. Call to discuss a layout for your property."
                }
              </p>
            </details>
            <details>
              <summary>{"Are estimates free?"}</summary>
              <p>
                {
                  "Yes. Contact our team to talk through your project and request a free estimate."
                }
              </p>
            </details>
            <details>
              <summary>{"Where are you based?"}</summary>
              <p>
                {
                  "Spirit Lake, Idaho. We serve North Idaho and nearby Eastern Washington communities. Call to confirm availability at your address."
                }
              </p>
            </details>
          </div>
        </div>
      </section>
      {"\n"}
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
      <img
        src={"/assets/mountains.webp"}
        alt={""}
        style={{ background: "#061c35", width: "100%" }}
        loading={"lazy"}
        width={1920}
        height={640}
      />
    </>
  );
}
