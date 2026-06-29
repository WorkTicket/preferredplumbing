import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight, Star, Shield, Clock, HardHat, Award } from 'lucide-react'
import { services } from '@/lib/data'
import { serviceContent, pageMeta } from '@/lib/service-content'
import { generateMetadata as genMeta, siteUrl } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema, webpageSchema, faqSchema } from '@/lib/schema'
import ContactForm from '@/components/ui/ContactForm'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props {
  params: { slug: string }
}

const trustSignals = [
  { icon: Shield, label: 'Licensed & Insured', desc: 'Fully licensed plumbing contractor in Idaho' },
  { icon: Clock, label: '24/7 Emergency Service', desc: 'Available around the clock for urgent repairs' },
  { icon: HardHat, label: '38+ Years Experience', desc: 'Serving North Idaho since 1987' },
  { icon: Award, label: 'Free Estimates', desc: 'No-obligation quotes for all plumbing services' },
]

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
  return genMeta({
    title: pageMeta[params.slug]?.title || service.title,
    description: `${service.description} Serving Spirit Lake, Coeur d'Alene, Post Falls, Sandpoint, and all of North Idaho. Call 208-290-3889 for a free estimate.`,
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
        <Image
          src={service.image}
          alt={`${service.title} plumbing service by Preferred Plumbing Solutions in Spirit Lake, Idaho and North Idaho`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
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
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <a href="tel:12082903889" className="btn-primary-lg">
              <Phone className="h-5 w-5" /> (208) 290-3889
            </a>
            <a href="/contact" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
              Get A Quote <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="flex items-center gap-3">
                <signal.icon className="h-6 w-6 text-blue shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{signal.label}</p>
                  <p className="text-xs text-gray-500">{signal.desc}</p>
                </div>
              </div>
            ))}
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
                <div className="space-y-6">
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
              <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {rich.subServices.map((sub, i) => (
                  <div key={i} className="group rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-premium transition-all duration-200 hover:border-blue/30 hover:-translate-y-0.5 hover:shadow-premium-md">
                    <span className="font-display text-3xl font-black text-blue/10 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-blue">{sub.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed text-sm">{sub.description}</p>
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
                    <div key={i} className="group relative overflow-hidden rounded-xl shadow-premium border border-gray-200">
                      <Image
                        src={photo}
                        alt={`${service.title} project completed by Preferred Plumbing Solutions in Spirit Lake, Idaho - Photo ${i + 1}`}
                        width={600}
                        height={450}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── SUMMARY ── */}
          <section className="section-padding bg-gray-50">
            <div className="container-page">
              <div className="max-w-4xl border-l-4 border-blue pl-5 sm:pl-6">
                <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                  {rich.summaryHeading}
                </h2>
                {rich.summaryParagraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">{p}</p>
                ))}
              </div>
            </div>
          </section>

          {/* ── BENEFITS ── */}
          <section className="section-padding bg-white">
            <div className="container-page">
              <span className="section-label">{'Why Choose Us'}</span>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                {rich.benefitsHeading}
              </h2>
              <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {rich.benefits.map((benefit, i) => (
                  <div key={i} className="group rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-premium transition-all duration-200 hover:border-blue/30 hover:-translate-y-0.5 hover:shadow-premium-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue/10">
                      <Star className="h-5 w-5 text-blue" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FEATURES ── */}
          {service.features && service.features.length > 0 && (
            <section className="section-padding bg-gray-50">
              <div className="container-page">
                <span className="section-label">{'Service Details'}</span>
                <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                  What&apos;s Included
                </h2>
                <ul className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 rounded-lg bg-white border border-gray-200 p-4 shadow-premium">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

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
                <div className="mt-8 max-w-4xl rounded-xl border border-gray-200 bg-white shadow-premium overflow-hidden divide-y divide-gray-100">
                  {service.faqs.map((faq, i) => (
                    <details key={i} className="group">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 sm:px-6 py-4 font-semibold text-gray-900 list-none transition-colors hover:text-blue hover:bg-gray-50 text-sm sm:text-base">
                        {faq.question}
                        <span className="text-2xl text-blue transition-transform duration-200 group-open:rotate-45 shrink-0">+</span>
                      </summary>
                      <p className="pb-5 px-5 sm:px-6 text-gray-600 leading-relaxed text-sm sm:text-base -mt-1">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
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
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-premium transition-all hover:border-blue/30 hover:text-blue hover:bg-blue/5"
                  >
                    <ArrowRight className="h-3 w-3" /> {city.name}
                  </Link>
                ))}
                <Link
                  href="/areas-we-serve"
                  className="inline-flex items-center gap-1 rounded-lg border border-blue/30 bg-blue/5 px-4 py-2 text-sm font-semibold text-blue transition-all hover:bg-blue/10"
                >
                  View All Areas <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── CLOSING ── */}
          <section className="relative overflow-hidden bg-gray-50 py-14 sm:py-24">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="container-page relative z-10">
              <div className="max-w-4xl border-l-4 border-blue pl-5 sm:pl-10">
                <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-black uppercase leading-[0.95] text-gray-900">
                  {rich.closingHeading}
                </h2>
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
                    <ul className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 rounded-lg bg-white border border-gray-200 p-4 shadow-premium">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
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
                    <div className="mt-6 space-y-4">
                      {service.faqs.map((faq, i) => (
                        <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-premium">
                          <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-gray-900 list-none">
                            {faq.question}
                            <span className="text-xl text-blue transition-transform duration-200 group-open:rotate-45">+</span>
                          </summary>
                          <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-6">
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
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-premium transition-all hover:border-blue/30 hover:text-blue"
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
                  className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-gray-700 shadow-premium transition-all duration-200 hover:border-blue/30 hover:text-blue hover:bg-blue/5"
                >
                  {s.title}
                  <ArrowRight className="h-4 w-4 text-blue transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA WITH ADDITIONAL LINKS ── */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/gallery" className="group rounded-xl border border-gray-200 bg-white p-6 shadow-premium transition-all hover:border-blue/30 hover:-translate-y-0.5 hover:shadow-premium-md">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900 group-hover:text-blue">View Our Gallery</h3>
              <p className="mt-2 text-sm text-gray-500">See photos of completed {service.title.toLowerCase()} projects in North Idaho.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue">Browse Projects <ArrowRight className="h-3 w-3" /></span>
            </Link>
            <Link href="/faqs" className="group rounded-xl border border-gray-200 bg-white p-6 shadow-premium transition-all hover:border-blue/30 hover:-translate-y-0.5 hover:shadow-premium-md">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900 group-hover:text-blue">Frequently Asked Questions</h3>
              <p className="mt-2 text-sm text-gray-500">Find answers to common questions about our plumbing services.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue">Read FAQs <ArrowRight className="h-3 w-3" /></span>
            </Link>
            <Link href="/contact" className="group rounded-xl border border-gray-200 bg-white p-6 shadow-premium transition-all hover:border-blue/30 hover:-translate-y-0.5 hover:shadow-premium-md">
              <h3 className="font-display text-lg font-bold uppercase text-gray-900 group-hover:text-blue">Request Service</h3>
              <p className="mt-2 text-sm text-gray-500">Get a free estimate for your {service.title.toLowerCase()} project.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue">Get a Quote <ArrowRight className="h-3 w-3" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Ready to get started? Give us a call. We&apos;ll figure it out.
          </p>
          <a href="tel:12082903889" className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex">
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}
