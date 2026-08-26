import { Phone } from 'lucide-react'
import { BUSINESS_HOURS, PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

export default function EmergencyBand() {
  return (
    <section className="relative -mt-px shrink-0 overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,78,204,0.35)_0%,rgba(15,33,54,0.4)_45%,rgba(8,21,37,1)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-light/35 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-2.5 sm:gap-0 sm:flex-row sm:justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 lg:py-6">
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-lg font-bold text-white flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="inline-block rounded-md border border-blue-light/25 bg-navy-mid px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
              Emergency
            </span>
            <span className="sm:hidden">Need help? Call during business hours</span>
            <span className="hidden sm:inline">Plumbing Emergency? Call Us During Business Hours</span>
          </p>
          <p className="mt-1 text-xs sm:text-sm text-white/70">
            {BUSINESS_HOURS.short} · Avg. response under 1 hour
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-navy transition-all duration-300 hover:bg-navy hover:text-white hover:ring-1 hover:ring-white/40 active:scale-[0.97] shadow-premium-xl"
        >
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  )
}
