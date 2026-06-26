'use client'

import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'
import { StaggerChildren } from '@/components/animations'
import { services } from '@/lib/data'
import { Phone, ArrowRight, Clock } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'

const featuredSlugs = [
  'emergency', 'new-construction', 'radiant-heat',
  'water-heaters', 'remodels', 'sewer-line',
]

const featuredServices = services.filter((s) => featuredSlugs.includes(s.slug))

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Our Services" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Plumbing Services<br />
            <span className="text-blue">For Every Need</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Emergency repairs, new construction, remodels. One call covers everything.
          </p>
        </div>
        <StaggerChildren
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
          variant="fadeUp"
        >
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </StaggerChildren>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/services"
            className="btn-secondary"
          >
            View All 14 Services <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={PHONE_HREF}
            className="btn-primary"
          >
            <Phone className="h-4 w-4" /> Call (208) 290-3889
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-blue" /> Same-day service available</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Currently accepting new projects</span>
        </div>
      </div>
    </section>
  )
}
