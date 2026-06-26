'use client'

import { Phone, AlertTriangle, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function EmergencyBand() {
  const reduced = useReducedMotion()

  const content = (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-3 sm:gap-0 sm:flex-row sm:justify-between px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 shrink-0">
          <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <div>
          <p className="text-sm sm:text-lg font-bold text-white">Emergency? We&apos;re Here 24/7</p>
          <p className="text-xs sm:text-sm text-blue-200 flex items-center gap-1.5 mt-0.5">
            <Clock className="h-3 w-3" /> Average response: under 1 hour
          </p>
        </div>
      </div>
      <a
        href="tel:12082903889"
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-blue-dark transition-all duration-300 hover:bg-blue-50 active:scale-[0.97] shadow-premium-lg"
      >
        <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call (208) 290-3889
      </a>
    </div>
  )

  if (reduced) {
    return <section className="relative overflow-hidden bg-gradient-to-r from-blue to-blue-dark">{content}</section>
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue to-blue-dark">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {content}
      </motion.div>
    </section>
  )
}
