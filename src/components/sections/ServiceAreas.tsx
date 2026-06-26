'use client'

import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { StaggerChildren } from '@/components/animations'
import { MapPin, ChevronRight } from 'lucide-react'
import { areas } from '@/lib/data'

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Service Areas" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            We Serve All of<br />
            <span className="text-blue">North Idaho &amp; Beyond</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            16 cities. One phone call. If you&apos;re in North Idaho or eastern Washington, we can get a truck to you.
          </p>
        </div>
        <StaggerChildren
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          staggerDelay={0.03}
          variant="fadeUp"
        >
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-gray-200 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-blue hover:text-white hover:border-blue hover:-translate-y-0.5 hover:shadow-premium-md shadow-premium"
            >
              <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              {area.fullName}
            </Link>
          ))}
        </StaggerChildren>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="btn-primary"
          >
            Schedule Service in Your Area <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
