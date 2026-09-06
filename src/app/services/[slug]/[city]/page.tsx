import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Phone, ArrowRight, Shield, Clock, CheckCircle, ChevronRight } from 'lucide-react'
import { areas, services } from '@/lib/data'
import {
  getServiceCityPage,
  getServiceCityParams,
  siblingServiceCityLinks,
} from '@/lib/data/service-city'
import { generateMetadata as genMeta, siteUrl } from '@/lib/seo'
import { breadcrumbSchema, faqSchema, serviceSchema, webpageSchema } from '@/lib/schema'
import FaqAccordionList from '@/components/ui/FaqAccordionList'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/utils'
import { getPostsForService } from '@/data/blog'

const ContactForm = dynamic(() => import('@/components/ui/ContactForm'))

interface Props {
  params: { slug: string; city: string }
}

export function generateStaticParams() {
  return getServiceCityParams()
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getServiceCityPage(params.slug, params.city)
  if (!page) return {}
  return genMeta({
    title: page.title,
    description: page.description,
    slug: `services/${params.slug}/${params.city}`,
    canonical: `${siteUrl}/services/${params.slug}/${params.city}`,
    keywords: [
      page.title,
      page.h1,
      'Preferred Plumbing Solutions',
    ],
  })
}

export default function ServiceCityPage({ params }: Props) {
  const page = getServiceCityPage(params.slug, params.city)
  const service = services.find((item) => item.slug === params.slug)
  const area = areas.find((item) => item.slug === params.city)
  if (!page || !service || !area) notFound()

  const relatedPosts = getPostsForService(`/services/${service.slug}`, 3)
  const nearby = siblingServiceCityLinks(service.slug, area.slug)
  const parentHref = `/services/${service.slug}`
  const areaHref = `/areas/${area.slug}`

  return (
    <div className="pt-site-header">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(page.h1, page.description, `${service.slug}/${area.slug}`, [
              { '@type': 'City', name: area.city },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Services', url: `${siteUrl}/services` },
              { name: service.title, url: `${siteUrl}${parentHref}` },
              { name: page.h1, url: `${siteUrl}${page.path}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema(page.h1, page.description, page.path.slice(1))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(page.faqs)) }}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <p className="text-sm text-gray-500">
            <Link href={parentHref} className="hover:text-blue">
              {service.title}
            </Link>
            <span className="px-1.5 text-gray-300">/</span>
            <Link href={areaHref} className="hover:text-blue">
              {area.city}
            </Link>
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            {page.h1}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold text-blue">
              <Clock className="h-4 w-4" /> Sun–Fri 7am–5pm
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-500">
              <Shield className="h-4 w-4" /> Licensed &amp; Insured
            </span>
          </div>
          {page.intro.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={
                index === 0
                  ? 'mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg'
                  : 'mt-3 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base'
              }
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <a href={PHONE_HREF} className="btn-primary">
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="section-label">{`In ${area.city}`}</span>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
              Local {service.title} Work
            </h2>
            {page.localFocus.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 max-w-3xl leading-relaxed text-gray-600">
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {(service.features ?? []).slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Full scope, photos, and process:{' '}
              <Link href={parentHref} className="font-semibold text-blue hover:underline">
                {service.title} in North Idaho
              </Link>
              . More about our crew in{' '}
              <Link href={areaHref} className="font-semibold text-blue hover:underline">
                {area.fullName}
              </Link>
              .
            </p>
          </div>
          <div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-premium-md sm:p-6">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900">
                Get a {area.city} Quote
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Tell us what failed and where. We reply within 24 hours.
              </p>
              <div className="mt-4">
                <ContactForm formLocation={`service_city_${service.slug}_${area.slug}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <span className="section-label">{`${area.city} FAQs`}</span>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
            Questions About {service.title} in {area.city}
          </h2>
          <div className="mt-8 max-w-4xl">
            <FaqAccordionList items={page.faqs} idPrefix={`${service.slug}-${area.slug}`} />
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <span className="section-label">Guides</span>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
              Related Articles
            </h2>
            <div className="mt-8 flex flex-col gap-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-gray-700 hover:text-blue"
                >
                  {post.title}
                  <ArrowRight className="h-4 w-4 text-blue transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {nearby.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-page">
            <span className="section-label">Nearby</span>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
              {service.title} in Nearby Cities
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {nearby.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue/30 hover:text-blue"
                >
                  <ChevronRight className="h-3 w-3" /> {item.label}
                </Link>
              ))}
              <Link
                href={parentHref}
                className="inline-flex items-center gap-1 rounded-lg border border-blue/30 bg-blue/5 px-4 py-2 text-sm font-semibold text-blue hover:bg-blue/10"
              >
                All {service.title} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg font-bold text-white sm:text-left sm:text-xl">
            Need {service.title.toLowerCase()} in {area.city}? Call us.
          </p>
          <a href={PHONE_HREF} className="btn-primary inline-flex bg-white text-blue hover:bg-blue-50">
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </div>
  )
}
