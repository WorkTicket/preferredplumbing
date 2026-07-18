'use client'

import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'
import { StaggerChildren } from '@/components/animations'
import { services } from '@/lib/data'
import { Phone, ArrowRight, Clock } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'

const featuredSlugs = [
  'emergency',
  'radiant-heat',
  'new-construction',
  'commercial',
  'sewer-line',
  'tankless-water-heaters',
]

const specialtySlugs = ['heated-driveways', 'water-heaters', 'water-softeners']

const featuredServices = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s))

const specialtyServices = specialtySlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s))

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,102,255,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel text="Our Services" centered />
          <h2 className="section-heading">
            Plumbing for Homes,<br />
            <span className="text-blue">Businesses &amp; New Builds</span>
          </h2>
          <p className="section-subtitle-center">
            Emergency repairs, radiant heat, new construction, and high-value specialty work. One call covers it.
          </p>
        </div>

        <StaggerChildren
          className="mt-12 sm:mt-14 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              slug={service.slug}
              title={service.title}
              description={service.description}
            />
          ))}
        </StaggerChildren>

        <div className="mt-16 sm:mt-20">
          <div>
            <SectionLabel text="Specialty & High-Value Services" />
            <h3 className="section-heading text-[clamp(1.5rem,5vw,2.5rem)]">
              Specialty &amp; <span className="text-blue">High-Value</span>
            </h3>
            <p className="section-subtitle mt-3">
              Heated driveways, tank water heaters, and hard-water solutions. Solid work backed by 38 years on the job.
            </p>
          </div>

          <StaggerChildren
            className="mt-8 grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-3"
            staggerDelay={0.07}
            variant="fadeUp"
          >
            {specialtyServices.map((service) => (
              <ServiceCard
                key={service.slug}
                href={`/services/${service.slug}`}
                slug={service.slug}
                title={service.title}
                description={service.description}
              />
            ))}
          </StaggerChildren>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/services" className="btn-secondary">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={PHONE_HREF} className="btn-primary">
            <Phone className="h-4 w-4" /> Call (208) 290-3889
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue" /> Same-day service available
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Currently accepting new projects
          </span>
        </div>
      </div>
    </section>
  )
}
