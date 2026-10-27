import { locations } from "@/data/locations";
import { site } from "@/data/site";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { LocationsDirectory } from "./LocationsDirectory";
import { ServiceCards } from "./ServiceCards";

const faqs = [
  {
    q: "What if my town isn’t listed?",
    a: "Call 208-290-3889 with the address and a short description of the work. We’ll confirm whether we can get to you and what travel to expect in the estimate.",
  },
  {
    q: "Do you charge extra for farther towns?",
    a: "Travel depends on the job. For longer trips we plan the visit, stage parts at the shop, and include any travel in the free estimate before work starts, so there are no surprises on the day.",
  },
  {
    q: "Can I book urgent work outside Spirit Lake?",
    a: "Call during business hours, Sunday through Friday, 7am to 5pm. Response time depends on the job, current workload, and your location. We’re closed Saturday.",
  },
  {
    q: "What should I send for a larger project?",
    a: "The address, plans or photos, the stage of construction or remodeling, and the timing you have in mind. That lets us discuss the full scope on the first call.",
  },
];

const trust = [
  ["users", "Owner-operated", "Talk directly with the family"],
  ["shield", "Licensed & insured", "Work that meets code"],
  ["check", "Free estimates", "Scope explained before work starts"],
  ["clock", "Sun–Fri, 7am–5pm", "Closed Saturday"],
] as const;

export function LocationsPage() {
  const url = `${site.url}/locations/`;
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${site.url}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Locations",
                item: url,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Towns served by Preferred Plumbing Solutions",
            itemListElement: locations.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${l.city}, ${l.state}`,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <section className="pagehero location-hero">
        <div className="wrap">
          <div className="bread">
            <a href="/">Home</a>
            <Icon name="arrow" />
            <span>Locations</span>
          </div>
          <div className="hero-grid">
            <div>
              <div className="eyebrow">North Idaho & Eastern Washington</div>
              <h1>
                Spirit Lake roots.
                <br />
                <span className="cyan">Regional reach.</span>
              </h1>
              <p>
                Plumbing, radiant heat, and project support for{" "}
                {locations.length} communities, all served from our Spirit Lake
                shop. Find your town, or call and we’ll confirm your address.
              </p>
              <div className="actions">
                <a className="btn" href="/contact/">
                  Request service <Icon name="arrow" />
                </a>
                <a href="tel:2082903889">208-290-3889</a>
                <a className="hub-hero-link" href="#service-area">
                  See the service area
                </a>
              </div>
            </div>
            <div className="location-visual hub-visual">
              <img
                className="cutout"
                src="/Preferred-Plumbing-Hero-Images/locations.webp"
                alt="Preferred Plumbing service area across North Idaho and Eastern Washington"
                fetchPriority="high"
                width={1536}
                height={1024}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hub-trust" aria-label="Why homeowners call Preferred">
        <div className="wrap">
          <ul>
            {trust.map(([icon, title, note]) => (
              <li key={title}>
                <Icon name={icon} />
                <span>
                  <b>{title}</b>
                  <small>{note}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocationsDirectory />

      <section className="section tint">
        <div className="wrap">
          <div className="sectionhead">
            <div>
              <div className="eyebrow">Work we do in every town</div>
              <h2>
                From the first pipe
                <br />
                to the final fixture.
              </h2>
            </div>
            <a href="/services/" className="btn dark">
              All services <Icon name="arrow" />
            </a>
          </div>
          <ServiceCards
            slugs={[
              "emergency",
              "radiant-heat",
              "water-heaters",
              "new-construction",
              "drain-cleaning",
              "remodels",
            ]}
          />
        </div>
      </section>

      <section className="planning-section">
        <div className="wrap planning-grid">
          <div>
            <div className="eyebrow cyan">Make the first call count</div>
            <h2>
              Let’s plan
              <br />
              <span className="cyan">the visit.</span>
            </h2>
            <p>
              Share your address, the issue or project, and a few photos if you
              have them. We’ll confirm availability and discuss the scope before
              scheduling.
            </p>
            <a className="btn" href="/contact/">
              Contact Preferred <Icon name="phone" />
            </a>
          </div>
          <div className="plan-steps">
            {[
              [
                "pin",
                "Where is the property?",
                "Share the address and any access details that may affect the visit.",
              ],
              [
                "camera",
                "What can you show us?",
                "A fixture, an equipment label, or a project plan can make the conversation more useful.",
              ],
              [
                "clock",
                "What timing do you need?",
                "Call during business hours for urgent work. Discuss scheduling for larger projects and travel.",
              ],
            ].map(([ic, h, p]) => (
              <div key={h}>
                <span className="step-icon">
                  <Icon name={ic as "pin" | "camera" | "clock"} />
                </span>
                <div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="faq-grid">
          <div>
            <div className="eyebrow">Before you schedule</div>
            <h2>
              One address.
              <br />A few good details.
            </h2>
          </div>
          <div>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="location-closing">
        <div className="wrap">
          <div className="eyebrow cyan">Spirit Lake roots. Regional reach.</div>
          <h2>
            Let’s get your
            <br />
            <span className="cyan">project moving.</span>
          </h2>
          <p>Call 208-290-3889 or send a free-estimate request.</p>
          <a href="/contact/" className="btn">
            Talk to our team <Icon name="arrow" />
          </a>
        </div>
        <img
          src="/assets/mountains.webp"
          alt=""
          loading="lazy"
          width={1920}
          height={640}
        />
      </section>
    </>
  );
}
