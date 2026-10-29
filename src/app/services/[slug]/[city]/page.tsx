import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EstimateForm } from "@/components/EstimateForm";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { getServiceCityPage, getServiceCityParams, siblingServiceCityLinks } from "@/data/service-city";
import { site } from "@/data/site";
import { withSocialMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return getServiceCityParams(); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }): Promise<Metadata> {
  const { slug, city } = await params;
  const page = getServiceCityPage(slug, city);
  if (!page) notFound();
  return withSocialMetadata({ title: page.title, description: page.description, alternates: { canonical: page.path } });
}

export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params;
  const page = getServiceCityPage(slug, city);
  const service = services.find((item) => item.slug === slug);
  const location = locations.find((item) => item.slug === city);
  if (!page || !service || !location) notFound();
  const nearby = siblingServiceCityLinks(slug, city);
  const url = `${site.url}${page.path}`;

  return <>
    <JsonLd data={[
      { "@context": "https://schema.org", "@type": "Service", name: page.h1, description: page.description, url, provider: { "@id": `${site.url}/#business` }, areaServed: { "@type": "City", name: location.city } },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ]} />
    <section className="pagehero svc-hero"><div className="wrap">
      <div className="bread"><a href="/">Home</a><Icon name="arrow" /><a href={`/services/${slug}/`}>{service.title}</a><Icon name="arrow" /><span>{location.city}</span></div>
      <div className="hero-grid"><div>
        <div className="eyebrow">Local {service.title.toLowerCase()}</div>
        <h1>{page.h1}<br /><span className="cyan">Done right.</span></h1>
        <p>{page.intro[0]}</p>
        <div className="actions"><a className="btn" href="#estimate">Get a free estimate <Icon name="arrow" /></a><a href={site.phoneHref}>{site.phone}</a></div>
      </div><img className="cutout" src={`/Preferred-Plumbing-Hero-Images/${slug}.webp`} alt={`${service.title} in ${location.city}`} fetchPriority="high" width={1536} height={1024} /></div>
    </div></section>

    <section className="section wrap"><div className="svc-intro"><div>
      <h2 className="svc-h2">{service.title} for {location.city}</h2>
      {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <h3 className="svc-label">Local planning</h3>
      {page.localFocus.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <p><a href={`/services/${slug}/`}>See the complete {service.title.toLowerCase()} service page →</a></p>
    </div><aside className="svc-aside" id="estimate"><h3>Get a {location.city} estimate</h3><p>Tell us what failed, where, and what timing you need.</p><EstimateForm /></aside></div></section>

    <section className="section tint"><div className="wrap"><div className="faq-grid">
      <div><div className="eyebrow">{location.city} FAQs</div><h2>Questions about<br />{service.title.toLowerCase()}.</h2></div>
      <div>{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
    </div></div></section>

    {nearby.length > 0 && <section className="section wrap"><div className="sectionhead"><div><div className="eyebrow">Nearby service</div><h2>{service.title} in nearby cities.</h2></div></div><div className="actions">{nearby.map((item) => <a className="btn dark" key={item.href} href={item.href}>{item.label} <Icon name="arrow" /></a>)}</div></section>}
  </>;
}
