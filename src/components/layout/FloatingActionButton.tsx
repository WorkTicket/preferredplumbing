'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronUp } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function FloatingActionButton() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (reduced) {
    return (
      <div className="fixed bottom-24 right-4 z-50 hidden md:flex flex-col gap-2">
        {visible && (
          <>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-premium-md hover:shadow-premium-lg hover:text-blue"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            <a
              href={PHONE_HREF}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-blue text-white shadow-premium-xl hover:bg-blue-dark hover:shadow-glow-lg"
              aria-label="Call Preferred Plumbing"
            >
              <Phone className="h-6 w-6" />
            </a>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="fixed bottom-8 right-4 z-50 hidden md:flex flex-col gap-2">
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-premium-md transition-all duration-300 hover:shadow-premium-lg hover:text-blue"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.a
            key="phone-btn"
            href={PHONE_HREF}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-blue text-white shadow-premium-xl transition-all duration-300 hover:bg-blue-dark hover:shadow-glow-lg active:scale-[0.95]"
            aria-label="Call Preferred Plumbing"
          >
            <Phone className="h-6 w-6" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
