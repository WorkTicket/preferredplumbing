import type { ReactNode } from 'react'
import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/utils'

interface CtaBandProps {
  message: ReactNode
  subtitle?: string
}

export default function CtaBand({ message, subtitle }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container-page relative z-10 flex flex-col items-center justify-between gap-6 py-12 sm:flex-row sm:py-14 lg:py-16">
        <div className="max-w-2xl text-center sm:text-left">
          <p className="font-display text-2xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-3xl lg:text-[2.15rem]">
            {message}
          </p>
          {subtitle && (
            <p className="mt-2 text-sm text-white/65 sm:text-base">{subtitle}</p>
          )}
        </div>
        <a href={PHONE_HREF} className="btn-white shrink-0">
          <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  )
}
