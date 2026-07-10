'use client'

import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'

export default function MobileCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden shadow-premium-2xl border-t border-white/10"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <a
        href={PHONE_HREF}
        data-track="mobile_cta_call"
        className="flex items-center justify-center gap-2 bg-blue py-3.5 text-sm font-bold text-white transition-all duration-200 active:bg-blue-dark min-h-[52px]"
      >
        <span className="border border-blue-light/30 bg-blue-light/15 text-blue-light text-[9px] px-1.5 py-0.5 rounded font-bold uppercase leading-tight tracking-wider">
          24/7
        </span>
        <Phone className="h-4 w-4 shrink-0" />
        <span>Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-navy py-3.5 text-sm font-bold text-white transition-all duration-200 active:bg-navy-mid min-h-[52px]"
      >
        <MessageSquare className="h-4 w-4 shrink-0" />
        <span>Free Quote</span>
      </Link>
    </div>
  )
}
