import Link from 'next/link'
import { Navigation, Clock } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactEmailList from '@/components/ui/ContactEmailList'
import LazyMapEmbed from '@/components/ui/LazyMapEmbed'
import {
  PHONE,
  PHONE_HREF,
  FULL_ADDRESS,
  MAP_EMBED_URL,
  DIRECTIONS_URL,
} from '@/lib/utils'

export default function FindUsSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="find-us">
      <div className="absolute inset-0 mesh-bg-light pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel text="Find Us" centered />
          <h2 className="section-heading">
            Our Service<br />
            <span className="text-blue">Location</span>
          </h2>
          <p className="section-subtitle-center">
            Based in Spirit Lake, Idaho — serving North Idaho and Eastern Washington since 1987.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="premium-card p-6 sm:p-7">
              <div className="space-y-5">
                <a href={PHONE_HREF} className="group flex items-start gap-4 text-gray-700">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone</p>
                    <span className="font-bold text-lg text-gray-900 group-hover:text-blue transition-colors">{PHONE}</span>
                  </div>
                </a>
                <ContactEmailList />
                <div className="flex items-start gap-4 text-gray-700">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-light/10 text-blue-dark">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Address</p>
                    <span className="font-medium">{FULL_ADDRESS}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-700">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Hours</p>
                    <span className="text-sm leading-relaxed">
                      Mon–Fri 7am–5pm<br />
                      Sat Closed<br />
                      Sun 7am–5pm (Emergency Only)<br />
                      <span className="font-semibold text-blue">24/7 Emergency Line</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-blue/20 bg-blue/5 px-5 py-3.5 text-sm font-bold text-blue transition-all hover:bg-blue hover:text-white hover:border-blue"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>

            <Link href="/contact" className="btn-primary w-full justify-center">
              Request a Free Quote
            </Link>
          </div>

          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden rounded-2xl border border-gray-200/80 shadow-premium-xl">
            <LazyMapEmbed
              src={MAP_EMBED_URL}
              title="Preferred Plumbing Solutions, Spirit Lake Idaho Map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
