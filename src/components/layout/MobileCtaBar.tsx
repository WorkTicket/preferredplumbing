'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PHONE_HREF } from '@/lib/utils'

const ctaVariants = {
  hidden: { y: 60 },
  visible: {
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function MobileCtaBar() {
  const reduced = useReducedMotion()

  const barClass =
    'fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden shadow-premium-2xl'

  const content = (
    <>
      <a
        href={PHONE_HREF}
        data-track="mobile_cta_call"
        className="flex items-center justify-center gap-2 bg-blue py-3.5 text-sm font-bold text-white transition-all duration-200 active:bg-blue-dark min-h-[52px]"
      >
        <span className="bg-amber-400 text-gray-900 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase leading-tight">
          24/7
        </span>
        <Phone className="h-4 w-4 shrink-0" />
        <span>Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-gray-900 py-3.5 text-sm font-bold text-white transition-all duration-200 active:bg-gray-800 min-h-[52px]"
      >
        <MessageSquare className="h-4 w-4 shrink-0" />
        <span>Free Quote</span>
      </Link>
    </>
  )

  if (reduced) {
    return (
      <div
        className={barClass}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {content}
      </div>
    )
  }

  return (
    <motion.div
      className={barClass}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      variants={ctaVariants}
      initial="hidden"
      animate="visible"
    >
      {content}
    </motion.div>
  )
}
