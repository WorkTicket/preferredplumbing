'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MessageSquare, Wrench } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ctaVariants = {
  hidden: { y: 60 },
  visible: {
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function MobileCtaBar() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-premium-2xl"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <a
          href="tel:12082903889"
          className="flex flex-1 items-center justify-center gap-1 bg-blue py-3 text-xs font-bold text-white transition-all duration-200 active:bg-blue-dark"
        >
          <span className="bg-amber-400 text-gray-900 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase leading-tight">24/7</span>
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-1.5 bg-gray-900 py-3 text-xs font-bold text-white transition-all duration-200 active:bg-gray-800"
        >
          <MessageSquare className="h-4 w-4" /> Free Quote
        </Link>
        <Link
          href="/services"
          className="flex flex-1 items-center justify-center gap-1.5 bg-gray-700 py-3 text-xs font-bold text-white transition-all duration-200 active:bg-gray-600"
        >
          <Wrench className="h-4 w-4" /> Services
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-premium-2xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      variants={ctaVariants}
      initial="hidden"
      animate="visible"
    >
      <a
        href="tel:12082903889"
        className="flex flex-1 items-center justify-center gap-1 bg-blue py-3 text-xs font-bold text-white transition-all duration-200 active:bg-blue-dark active:scale-[0.97]"
      >
        <span className="bg-amber-400 text-gray-900 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase leading-tight">24/7</span>
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-1.5 bg-gray-900 py-3 text-xs font-bold text-white transition-all duration-200 active:bg-gray-800 active:scale-[0.97]"
      >
        <MessageSquare className="h-4 w-4" /> Free Quote
      </Link>
      <Link
        href="/services"
        className="flex flex-1 items-center justify-center gap-1.5 bg-gray-700 py-3 text-xs font-bold text-white transition-all duration-200 active:bg-gray-600 active:scale-[0.97]"
      >
        <Wrench className="h-4 w-4" /> Services
      </Link>
    </motion.div>
  )
}
