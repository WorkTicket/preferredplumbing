import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { StaggerChildren } from '@/components/animations'
import { MapPin, ChevronRight } from 'lucide-react'
import { areas } from '@/lib/data'

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,204,0.03)_0%,_transparent_70%)] pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel text="Service Areas" centered />
          <h2 className="section-heading">
            We Serve All of<br />
            <span className="text-blue">North Idaho &amp; Eastern Washington</span>
          </h2>
          <p className="section-subtitle-center">
            One phone call. If you&apos;re in Kootenai, Bonner, or nearby Pend Oreille and Spokane counties, we can get a truck to you.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 sm:p-8 shadow-premium">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-blue-light" />
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Coverage Map</p>
          </div>
          <StaggerChildren
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5"
            staggerDelay={0.03}
            variant="fadeUp"
          >
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-gray-200/80 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-gray-700 shadow-premium transition-all duration-300 hover:border-blue/30 hover:text-blue hover:shadow-premium-md hover:-translate-y-0.5"
              >
                <MapPin className="h-3.5 w-3.5 text-blue-light/60 group-hover:text-blue transition-colors" />
                {area.fullName}
              </Link>
            ))}
          </StaggerChildren>
        </div>

        <div className="mt-10 text-center">
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
