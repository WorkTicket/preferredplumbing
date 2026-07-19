import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroImagePreload from '@/components/ui/HeroImagePreload'
import LcpHeroImage from '@/components/ui/LcpHeroImage'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import { IMAGE_SIZES } from '@/lib/image-sizes'
import Link from 'next/link'
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Shield,
  Clock,
  HardHat,
  Zap,
  Wrench,
  BadgeCheck,
} from 'lucide-react'
import { services } from '@/lib/data'
import { serviceContent, pageMeta } from '@/lib/service-content'
import { generateMetadata as genMeta, siteUrl } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema, webpageSchema, faqSchema } from '@/lib/schema'
import FaqAccordionList from '@/components/ui/FaqAccordionList'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

const ContactForm = dynamic(() => import('@/components/ui/ContactForm'))

interface Props {
  params: { slug: string }
}

const benefitIcons = [Zap, Wrench, Shield, Clock, HardHat, BadgeCheck]

const cityLinks = [
  { name: 'Spirit Lake, ID', slug: 'spirit-lake-id' },
  { name: "Coeur d'Alene, ID", slug: 'coeur-dalene-id' },
  { name: 'Post Falls, ID', slug: 'post-falls-id' },
  { name: 'Sandpoint, ID', slug: 'sandpoint-id' },
  { name: 'Hayden, ID', slug: 'hayden-id' },
  { name: 'Rathdrum, ID', slug: 'rathdrum-id' },
]

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  const meta = pageMeta[params.slug]
  return genMeta({
    title: meta?.title || service.title,
    description:
      meta?.description ||
      `${service.description} Serving Spirit Lake, Coeur d'Alene, Post Falls, Sandpoint, and all of North Idaho. Call 208-290-3889 for a free estimate.`,
    slug: `services/${params.slug}`,
    canonical: `${siteUrl}/services/${params.slug}`,
  })
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const meta = pageMeta[params.slug] || { title: service.title, h1: service.title }
  const rich = serviceContent[params.slug]
  const relatedServices = (service.relatedServices || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services

  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service.title, service.description)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Services', url: `${siteUrl}/services` },
              { name: service.title, url: `${siteUrl}/services/${service.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema(service.title, service.description, `services/${service.slug}`)),
        }}
      />
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(service.faqs)),
          }}
        />
      )}

      {/* ── HERO ── */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center">
        <HeroImagePreload src={service.image} />
        <LcpHeroImage
          src={service.image}
          alt={`${service.title} plumbing service by Preferred Plumbing Solutions in Spirit Lake, Idaho and North Idaho`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <div className="relative z-10 container-page">
          <span className="section-label text-blue-300 before:bg-blue-300">{'Our Services'}</span>
          <h1 className="mt-3 font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-white">
            {meta.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-lg text-gray-300">
            {service.description}
          </p>
          <p className="mt-3 text-xs sm:text-sm font-medium tracking-wide text-blue-200/90">
            Licensed &amp; insured · 38+ years experience · Free estimates
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <a href={PHONE_HREF} className="btn-primary-lg">
              <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
            </a>
            <a href="/contact" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
              Get A Quote <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {rich && (
        <>
          {/* ── INTRO ── */}
          <section className="section-padding bg-white">
            <div className="container-page">
              <div className="grid gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                  <span className="section-label">{'About This Service'}</span>
                  <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                    {rich.introHeading}
                  </h2>
                  {rich.introParagraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-base sm:text-lg">{p}</p>
                  ))}
                </div>
                <div>
                  <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-premium-md">
                    <h3 className="font-display text-lg font-bold uppercase text-gray-900">Get a Free Quote</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Tell us about your project and we&apos;ll get back to you within 24 hours.
                    </p>
                    <div className="mt-4">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SUB-SERVICES ── */}
          <section className="section-padding bg-gray-50">
            <div className="container-page">
              <span className="section-label">{'What We Offer'}</span>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                Our {service.title} Services
              </h2>
              <div className="mt-8 sm:mt-10 grid gap-x-12 gap-y-0 grid-cols-1 md:grid-cols-2">
                {rich.subServices.map((sub, i) => (
                  <div key={i} className="border-t border-gray-200 py-6">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-blue">{sub.title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed text-sm sm:text-base">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PHOTOS ── */}
          {rich.photos && rich.photos.length > 0 && (
            <section className="section-padding bg-white">
              <div className="container-page">
                <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900 mb-8">
                  {service.title} <span className="text-blue">Project Photos</span>
                </h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {rich.photos.map((photo, i) => (
                    <div
                      key={photo}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100"
                    >
                      <ResponsiveImage
                        src={photo}
                        alt={`${service.title} project completed by Preferred Plumbing Solutions in Spirit Lake, Idaho - Photo ${i + 1}`}
                        fill
                        className="transition-transform duration-500 group-hover:scale-105"
                        sizes={IMAGE_SIZES.thirdCol}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── BENEFITS + WHAT'S INCLUDED ── */}
          <section className="section-padding bg-gray-50">
            <div className="container-page">
              <span className="section-label">{'Why Choose Us'}</span>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                {rich.benefitsHeading}
              </h2>
              <div className="mt-8 sm:mt-10 grid gap-x-10 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {rich.benefits.map((benefit, i) => {
                  const Icon = benefitIcons[i % benefitIcons.length]
                  return (
                    <div key={i}>
                      <Icon className="h-5 w-5 text-blue" aria-hidden="true" />
                      <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>

              {service.features && service.features.length > 0 && (
                <div className="mt-14 sm:mt-16 pt-10 border-t border-gray-200">
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-[0.95] text-gray-900">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-6 grid gap-x-8 gap-y-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* ── FAQ ── */}
          {service.faqs && service.faqs.length > 0 && (
            <section className="section-padding bg-white">
              <div className="container-page">
                <span className="section-label">{'Common Questions'}</span>
                <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-gray-600 max-w-3xl">
                  Common questions about {service.title.toLowerCase()} in Spirit Lake and North Idaho.
                </p>
                <div className="mt-8 max-w-4xl">
                  <FaqAccordionList
                    items={service.faqs}
                    idPrefix={service.slug}
                  />
                </div>
              </div>
            </section>
          )}

          {/* ── SERVICE AREAS ── */}
          <section className="section-padding bg-gray-50">
            <div className="container-page">
              <span className="section-label">{'Service Areas'}</span>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                {service.title} Services <span className="text-blue">in Your Area</span>
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                We provide {service.title.toLowerCase()} throughout North Idaho and Eastern Washington.
                Click your city to learn more about our services in your area.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {cityLinks.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/${city.slug}`}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue/30 hover:text-blue"
                  >
                    <ArrowRight className="h-3 w-3" /> {city.name}
                  </Link>
                ))}
                <Link
                  href="/areas-we-serve"
                  className="inline-flex items-center gap-1 rounded-lg border border-blue/30 bg-blue/5 px-4 py-2 text-sm font-semibold text-blue transition-colors hover:bg-blue/10"
                >
                  View All Areas <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── SUMMARY + CLOSING ── */}
          <section className="section-padding bg-white">
            <div className="container-page">
              <div className="max-w-4xl border-l-4 border-blue pl-5 sm:pl-8">
                <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                  {rich.summaryHeading}
                </h2>
                {rich.summaryParagraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">{p}</p>
                ))}
                <h3 className="mt-10 font-display text-[clamp(1.4rem,4vw,2rem)] font-black uppercase leading-[0.95] text-gray-900">
                  {rich.closingHeading}
                </h3>
                {rich.closingParagraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">{p}</p>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── FALLBACK ── */}
      {!rich && (
        <section className="section-padding bg-white">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <span className="section-label">{'About This Service'}</span>
                  <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">{service.description}</p>
                </div>
                {service.features && service.features.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl font-bold uppercase text-gray-900">What&apos;s Included</h2>
                    <ul className="mt-6 grid gap-x-8 gap-y-3 grid-cols-1 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.faqs && service.faqs.length > 0 && (
                  <div>
                    <h2 className="font-display text-2xl font-bold uppercase text-gray-900">Frequently Asked Questions</h2>
                    <p className="mt-2 text-gray-500 text-sm">
                      Common questions about {service.title.toLowerCase()} in Spirit Lake and North Idaho.
                    </p>
                    <div className="mt-6">
                      <FaqAccordionList
                        items={service.faqs}
                        idPrefix={`${service.slug}-fallback`}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-premium-md">
                  <h3 className="font-display text-lg font-bold uppercase text-gray-900">Get a Free Quote</h3>
                  <p className="mt-2 text-sm text-gray-500">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
                  <div className="mt-4"><ContactForm /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SERVICE AREAS (fallback) ── */}
      {!rich && (
        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <span className="section-label">{'Service Areas'}</span>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
              {service.title} Services <span className="text-blue">in Your Area</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              We provide {service.title.toLowerCase()} throughout North Idaho and Eastern Washington.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {cityLinks.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/${city.slug}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue/30 hover:text-blue"
                >
                  <ArrowRight className="h-3 w-3" /> {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ── */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <span className="section-label">{'Explore'}</span>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
              Related Services
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              These services are often needed alongside {service.title.toLowerCase()}. We handle all of them with the same quality and care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {relatedServices.map((s) => s && (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-2 border-b border-transparent pb-0.5 font-display text-sm font-bold uppercase tracking-wide text-gray-700 transition-colors hover:border-blue hover:text-blue"
                >
                  {s.title}
                  <ArrowRight className="h-4 w-4 text-blue transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BAND ── */}
      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Ready to get started? Give us a call. We&apos;ll figure it out.
          </p>
          <a href={PHONE_HREF} className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex">
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </div>
  )
}
