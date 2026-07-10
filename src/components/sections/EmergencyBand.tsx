import { Phone } from 'lucide-react'

export default function EmergencyBand() {
  return (
    <section className="relative shrink-0 overflow-hidden bg-blue-gradient">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,102,255,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-light/40 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-3 sm:gap-0 sm:flex-row sm:justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-lg font-bold text-white flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="inline-block rounded-md border border-blue-light/30 bg-blue-light/15 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-light">
              24/7
            </span>
            Emergency? We&apos;re Here Around the Clock
          </p>
          <p className="mt-1 text-xs sm:text-sm text-blue-100/80">
            Average response: under 1 hour across North Idaho
          </p>
        </div>
        <a
          href="tel:12082903889"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-blue-dark transition-all duration-300 hover:bg-blue-light hover:text-navy active:scale-[0.97] shadow-premium-xl"
        >
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call (208) 290-3889
        </a>
      </div>
    </section>
  )
}
