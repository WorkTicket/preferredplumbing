import { serviceDepth } from "@/data/service-depth";
import { services } from "@/data/services";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { site } from "@/data/site";
export function ServiceDepth({ slug }: { slug: string }) {
  const data = serviceDepth[slug];
  const service = services.find((item) => item.slug === slug);
  if (!data || !service) return null;
  const url = `${site.url}/services/${slug}/`;
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: service.title,
            description: service.description,
            url,
            serviceType: service.title,
            provider: { "@id": `${site.url}/#business` },
            areaServed: ["North Idaho", "Eastern Washington"],
          },
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
                name: "Services",
                item: `${site.url}/services/`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: url,
              },
            ],
          },
        ]}
      />
      <section className={`depth-showcase depth-${data.family}`}>
        <div className="wrap depth-grid">
          <div className="depth-art">
            <div className="orb" />
            <span className="art-kicker">
              PREFERRED / {data.family.toUpperCase()}
            </span>
            <img
              src={data.asset}
              alt={`${service.title} equipment illustration`}
              loading="lazy"
              width={1536}
              height={1024}
            />
            <div className="art-label">
              <Icon name={data.icon} />
              <span>
                Good planning.
                <br />
                <b>Solid plumbing.</b>
              </span>
            </div>
          </div>
          <div className="depth-copy">
            <div className="eyebrow">The right solution starts here</div>
            <h2>{data.title}</h2>
            <p>{data.lead}</p>
            <div className="scenario-list">
              {data.signals.map((signal) => (
                <div key={signal}>
                  <Icon name="check" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
            <a className="btn dark" href={`/contact/?service=${slug}`}>
              Talk through your options <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>
      <section className="planning-section">
        <div className="wrap planning-grid">
          <div>
            <div className="eyebrow cyan">A useful first conversation</div>
            <h2>
              A little detail.
              <br />
              <span className="cyan">A clearer plan.</span>
            </h2>
            <p>
              Have these details handy when you contact us. You do not need
              every answer to get started.
            </p>
            <ul className="prep-list">
              {data.prep.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="plan-steps">
            {data.steps.map((step, index) => (
              <div key={step}>
                <span className="step-icon">
                  <Icon
                    name={
                      index === 0 ? "chat" : index === 1 ? data.icon : "shield"
                    }
                  />
                </span>
                <div>
                  <h3>{step}</h3>
                  <p>
                    {index === 0
                      ? "Tell us about the property, the problem, and what you want to achieve."
                      : index === 1
                        ? "We discuss the scope, practical options, and what the existing setup means for the job."
                        : "Confirm the estimate and scheduling with our owner-operated team."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
