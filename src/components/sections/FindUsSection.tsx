import Link from 'next/link'
import { Phone, MapPin, Clock, Navigation } from 'lucide-react'
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
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Find Us" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Visit Our<br />
            <span className="text-blue">Spirit Lake Location</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Serving North Idaho and Eastern Washington from Spirit Lake since 1987.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 sm:p-6 shadow-premium">
              <div className="space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-gray-700 transition-colors hover:text-blue group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 group-hover:bg-blue transition-colors">
                    <Phone className="h-5 w-5 text-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <span className="font-semibold">{PHONE}</span>
                  </div>
                </a>
                <ContactEmailList />
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                    <MapPin className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Address</p>
                    <span>{FULL_ADDRESS}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 shrink-0">
                    <Clock className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Hours</p>
                    <span>
                      Mon–Fri 7am–5pm<br />
                      Sat Closed<br />
                      Sun 7am–5pm (Emergency Only)<br />
                      24/7 Emergency Line
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue/30 bg-blue/5 px-5 py-3 text-sm font-semibold text-blue transition-all hover:bg-blue/10"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>

            <Link href="/contact" className="btn-primary w-full justify-center">
              Request a Free Quote
            </Link>
          </div>

          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[360px] overflow-hidden rounded-xl border border-gray-200 shadow-premium-md">
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
