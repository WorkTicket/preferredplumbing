import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, ChevronRight, Star, Shield, Clock, HardHat } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/data'
import { generateMetadata, siteUrl } from '@/lib/seo'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = generateMetadata({
  title: 'Plumbing Services Spirit Lake Idaho | Full-Service Plumber',
  description: 'Full-service plumbing contractor in Spirit Lake, Idaho. New construction, remodels, water heaters, radiant heat, sewer lines, septic systems, and 24/7 emergency service. Call 208-290-3889.',
  slug: 'services',
  canonical: `${siteUrl}/services`,
})

const trustSignals = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Star, label: 'Free Estimates' },
  { icon: Clock, label: '24/7 Emergency Service' },
  { icon: HardHat, label: '38+ Years Experience' },
]

export default function ServicesPage() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
          url: `${siteUrl}/services/${s.slug}`,
          provider: { '@type': 'Plumber', name: 'Preferred Plumbing Solutions', url: siteUrl },
          areaServed: [{ '@type': 'City', name: 'Spirit Lake' }, { '@type': 'State', name: 'Idaho' }],
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
      ],
    },
  ]

  return (
    <div className="pt-14 sm:pt-16">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHero
        label="Our Services"
        title={<>Plumbing Services<br /><span className="text-blue-300">in Spirit Lake, Idaho</span></>}
        description="New construction rough-ins, remodels, water heaters, radiant heat, and emergency repairs. Family-owned, code-compliant, and backed by 38+ years on the job."
        image="/images/hero-services.webp"
        imageAlt="Professional plumbing services in Spirit Lake and North Idaho"
        priority
      />

      {/* Trust Signals */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-page py-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="flex items-center gap-2">
                <signal.icon className="h-5 w-5 text-blue shrink-0" />
                <span className="text-sm font-semibold text-gray-700">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                href={`/services/${service.slug}`}
                slug={service.slug}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-4xl">
            <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Plumbing You Can<br />
              <span className="text-blue">Count On in North Idaho</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We have been at this for nearly four decades. Folks around Spirit Lake know us for
              showing up on time and doing the job right. That is the reputation we have earned.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We handle residential and commercial jobs of all sizes. Leaky faucet, full new-construction
              build, or something in between. We have got you covered.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get a Free Quote <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/areas-we-serve"
              className="btn-secondary"
            >
              View Service Areas <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Not sure what you need? Call us. We&apos;ll figure it out.
          </p>
          <a
            href="tel:12082903889"
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}
