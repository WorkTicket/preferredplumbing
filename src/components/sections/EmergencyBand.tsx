import { Phone } from 'lucide-react'
import { BUSINESS_HOURS, PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

export default function EmergencyBand() {
  return (
    <section className="emergency-band relative -mt-px shrink-0 overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(26,53,80,0.55),transparent)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-2.5 sm:gap-6 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <div className="min-w-0 flex-1 text-left">
          <p className="flex min-w-0 flex-wrap items-center gap-1.5 text-[13px] font-bold leading-tight text-white sm:gap-2 sm:text-lg">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded border border-white/15 bg-navy-mid px-1.5 py-px text-[9px] font-bold uppercase tracking-widest text-white sm:rounded-md sm:px-2.5 sm:py-0.5 sm:text-xs">
              <span className="live-dot scale-75 sm:scale-100" aria-hidden />
              Emergency
            </span>
            <span className="sm:hidden">Need help? Call during business hours</span>
            <span className="hidden sm:inline">Plumbing Emergency? Call Us During Business Hours</span>
          </p>
          <p className="mt-0.5 truncate text-[11px] leading-tight text-white/70 sm:mt-1 sm:text-sm">
            {BUSINESS_HOURS.short} · Avg. response under 1 hour
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="btn-white !rounded-lg !px-3.5 !py-2 text-[13px] sm:!rounded-xl sm:!px-8 sm:!py-3.5 sm:text-base"
        >
          <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">Call {PHONE_DISPLAY}</span>
        </a>
      </div>
    </section>
  )
}
