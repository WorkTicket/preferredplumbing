import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { ServiceCards } from "./ServiceCards";

export function LocationPage({ slug }: { slug: string }) {
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();
  const name = `${location.city}, ${location.state}`;
  const url = `${site.url}/locations/${location.slug}/`;

  return (
    <>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: `Plumbing services in ${name}`,
          serviceType: "Residential and commercial plumbing",
          description: location.intro[0],
          url,
          provider: { "@id": `${site.url}/#business` },
          areaServed: { "@type": "City", name: location.city },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        },
      ]} />

      <section className="pagehero location-hero">
        <div className="wrap">
          <div className="bread">
            <a href="/">Home</a><Icon name="arrow" />
            <a href="/locations/">Locations</a><Icon name="arrow" />
            <span>{name}</span>
          </div>
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Local plumbing service</div>
              <h1>Plumber in<br /><span className="cyan">{name}.</span></h1>
              <p>{location.intro[0]}</p>
              <div className="actions">
                <a className="btn" href={`/contact/?location=${location.slug}`}>Get a free estimate <Icon name="arrow" /></a>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </div>
            <div className="location-visual">
              <div className="location-stamp" aria-hidden="true">
                <Icon name="pin" /><span>SERVING</span><strong>{location.city}</strong><small>{location.state}</small>
              </div>
              <img className="cutout" src="/Preferred-Plumbing-Hero-Images/locations.webp" alt={`Preferred Plumbing serving ${name}`} fetchPriority="high" width={1536} height={1024} />
            </div>
          </div>
        </div>
      </section>

      <section className="hub-trust" aria-label={`Why ${location.city} calls Preferred`}>
        <div className="wrap"><ul>
          {[["pin", "Spirit Lake based", "Regional owner-operated service"], ["shield", "Licensed & insured", "Careful, code-compliant work"], ["check", "Free estimates", "Clear scope before work starts"], ["clock", "Sun–Fri, 7am–5pm", "Closed Saturday"]].map(([icon, title, note]) => (
            <li key={title}><Icon name={icon as "pin" | "shield" | "check" | "clock"} /><span><b>{title}</b><small>{note}</small></span></li>
          ))}
        </ul></div>
      </section>

      <section className="section wrap">
        <div className="local-story">
          <div><div className="eyebrow">Plumbing built for the region</div><h2>{location.city} service.<br /><span style={{ color: "#078ac9" }}>Practical local planning.</span></h2></div>
          <div>{location.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section tint"><div className="wrap">
        <div className="sectionhead"><div><div className="eyebrow">Services in {location.city}</div><h2>Repairs, replacements,<br />and complete projects.</h2></div><a className="btn dark" href="/services/">All services <Icon name="arrow" /></a></div>
        <ServiceCards slugs={services.slice(0, 6).map((service) => service.slug)} />
      </div></section>

      <section className="section wrap"><div className="faq-grid">
        <div><div className="eyebrow">{location.city} plumbing FAQs</div><h2>Local questions.<br />Clear answers.</h2></div>
        <div>{location.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
      </div></section>

      <section className="location-closing"><div className="wrap">
        <div className="eyebrow cyan">Plumbing service in {location.city}</div><h2>Let’s get your plumbing<br /><span className="cyan">handled.</span></h2>
        <p>Call {site.phone} or tell us about your project online.</p>
        <a href={`/contact/?location=${location.slug}`} className="btn">Request a free estimate <Icon name="arrow" /></a>
      </div><img src="/assets/mountains.webp" alt="" loading="lazy" width={1920} height={640} /></section>
    </>
  );
}
