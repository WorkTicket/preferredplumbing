import { notFound } from "next/navigation";
import { servicePages } from "@/data/service-pages";
import { serviceDepth } from "@/data/service-depth";
import { services } from "@/data/services";
import { projectPhotos, type ProjectPhoto } from "@/data/gallery";
import { locations } from "@/data/locations";
import { getAllServiceCityPages } from "@/data/service-city";
import { site } from "@/data/site";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { ProjectGallery } from "./ProjectGallery";
import { ServiceCards } from "./ServiceCards";

const stepText = [
  "Tell us about the property, the problem, and what you want to achieve.",
  "We discuss the scope, practical options, and what the existing setup means for the job.",
  "Confirm the estimate and scheduling with our owner-operated team.",
];

const portraitHeroSizes: Record<string, [number, number]> = {
  "bathroom-remodels": [1312, 1199],
  "kitchen-remodels": [1312, 1199],
  "water-heaters": [1024, 1536],
  "water-softeners": [1312, 1199],
};

function findPhoto(stem: string): ProjectPhoto {
  const photo = projectPhotos.find(
    (p) =>
      p.src === `/assets/real-${stem}.webp` ||
      p.src === `/assets/real-${stem}-1.webp`,
  );
  if (!photo) throw new Error(`Missing project photo: ${stem}`);
  return photo;
}

export function ServicePage({ slug }: { slug: string }) {
  const page = servicePages[slug];
  const service = services.find((s) => s.slug === slug);
  const depth = serviceDepth[slug];
  if (!page || !service || !depth) notFound();

  const url = `${site.url}/services/${slug}/`;
  const heroImage = `/Preferred-Plumbing-Hero-Images/${slug}.webp`;
  const [heroWidth, heroHeight] = portraitHeroSizes[slug] ?? [1536, 1024];
  // Each photo appears once on the page; the hero is an illustration.
  const photos = [...new Set(page.photos)].map(findPhoto);
  const localPages = getAllServiceCityPages()
    .filter((item) => item.serviceSlug === slug)
    .map((item) => ({
      ...item,
      cityName:
        locations.find((location) => location.slug === item.citySlug)?.city ||
        item.citySlug,
    }));

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
              { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services/` },
              { "@type": "ListItem", position: 3, name: service.title, item: url },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <section className="pagehero svc-hero">
        <div className="wrap">
          <div className="bread">
            <a href="/">Home</a>
            <Icon name="arrow" />
            <a href="/services/">Services</a>
            <Icon name="arrow" />
            <span>{service.title}</span>
          </div>
          <div className="hero-grid">
            <div>
              <h1>
                {service.title}
                <br />
                <span className="cyan">Done right.</span>
              </h1>
              <p>{page.lead}</p>
              <div className="actions">
                <a className="btn" href={`/contact/?service=${slug}`}>
                  Get a free estimate <Icon name="arrow" />
                </a>
                <a href="tel:2082903889">208-290-3889</a>
              </div>
            </div>
            <img
              className="cutout"
              src={heroImage}
              alt={`${service.title} illustration`}
              fetchPriority="high"
              width={heroWidth}
              height={heroHeight}
            />
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="svc-intro">
          <div>
            <h2 className="svc-h2">{page.introHeading}</h2>
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="svc-aside" aria-label="Request an estimate">
            <h3>Get a free estimate</h3>
            <p>Describe the job and we’ll talk through the scope.</p>
            <a className="btn" href={`/contact/?service=${slug}`}>
              Request an estimate <Icon name="arrow" />
            </a>
            <a className="svc-aside-phone" href="tel:2082903889">
              <Icon name="phone" />
              208-290-3889
            </a>
            <ul>
              <li>
                <Icon name="shield" /> Licensed & insured
              </li>
              <li>
                <Icon name="users" /> Owner-operated
              </li>
              <li>
                <Icon name="clock" /> Sun–Fri, 7am–5pm
              </li>
            </ul>
            <p className="svc-aside-areas">
              Serving {locations.length} towns across North Idaho and Eastern
              Washington. <a href="/locations/">See locations</a>
            </p>
          </aside>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2 className="svc-h2">{page.featuresHeading}</h2>
          <div className="svc-features">
            {page.features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="svc-process">
          <div>
            <h2 className="svc-h2">{depth.title}</h2>
            <p>{depth.lead}</p>
            <h3 className="svc-label">Signs it’s time to call</h3>
            <ul className="svc-checks">
              {depth.signals.map((signal) => (
                <li key={signal}>
                  <Icon name="check" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="svc-label">How it works</h3>
            <ol className="svc-steps">
              {depth.steps.map((step, index) => (
                <li key={step}>
                  <h4>{step}</h4>
                  <p>{stepText[index]}</p>
                </li>
              ))}
            </ol>
            <div className="svc-ready">
              <h3 className="svc-label">Helpful to have ready</h3>
              <ul className="svc-checks">
                {depth.prep.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {photos.length >= 2 ? (
        <section className="section tint">
          <div className="wrap">
            <div className="sectionhead">
              <div>
                <h2>
                  Recent work
                  <br />
                  from the field.
                </h2>
              </div>
              <a href="/gallery/" className="btn dark">
                Full project gallery <Icon name="camera" />
              </a>
            </div>
            <ProjectGallery items={photos} />
          </div>
        </section>
      ) : (
        <section className="svc-photo-bar">
          <div className="wrap">
            <p>
              See recent Preferred projects from across North Idaho in our
              project gallery.
            </p>
            <a href="/gallery/" className="btn dark">
              View the gallery <Icon name="camera" />
            </a>
          </div>
        </section>
      )}

      <section className="section wrap">
        <div className="faq-grid">
          <div>
            <h2>
              Before we
              <br />
              get started.
            </h2>
          </div>
          <div>
            {page.faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {localPages.length > 0 && (
        <section className="section wrap">
          <div className="sectionhead">
            <div>
              <div className="eyebrow">Local service guides</div>
              <h2>{service.title} near you.</h2>
            </div>
          </div>
          <div className="actions">
            {localPages.map((localPage) => (
              <a className="btn dark" href={localPage.path} key={localPage.path}>
                {localPage.cityName} <Icon name="arrow" />
              </a>
            ))}
          </div>
        </section>
      )}

      {page.related.length > 0 && (
        <section className="section tint">
          <div className="wrap">
            <div className="sectionhead">
              <div>
                <h2>Related services.</h2>
              </div>
              <a href="/services/" className="btn dark">
                All services <Icon name="arrow" />
              </a>
            </div>
            <ServiceCards slugs={page.related} avoid={[heroImage]} />
          </div>
        </section>
      )}

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Let’s talk about your project.</h2>
            <p>
              Tell us what you need. We’ll help you work out the next step.
            </p>
          </div>
          <a className="btn" href={`/contact/?service=${slug}`}>
            Request a free estimate <Icon name="arrow" />
          </a>
        </div>
      </section>
    </>
  );
}
