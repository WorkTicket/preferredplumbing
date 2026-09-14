'use client'

import { useState, useEffect } from 'react'
import { Phone, ChevronUp } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'

export default function FloatingActionButton() {
  const [visible, setVisible] = useState(false)

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

  if (!visible) return null

  return (
    <div className="fixed bottom-8 right-4 z-50 hidden md:flex flex-col gap-2.5">
      <button
        onClick={scrollToTop}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200/80 bg-white/90 text-gray-600 shadow-premium-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/20 hover:text-blue hover:shadow-premium-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
      <a
        href={PHONE_HREF}
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-white shadow-glow-lg ring-2 ring-blue-light/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-glow-lg active:scale-[0.95] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:rounded-t-2xl before:bg-gradient-to-b before:from-white/20 before:to-transparent"
        aria-label="Call Preferred Plumbing Solutions"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
