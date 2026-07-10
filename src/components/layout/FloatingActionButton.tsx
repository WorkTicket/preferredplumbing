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
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-gray-200/80 text-gray-600 shadow-premium-md transition-all duration-300 hover:shadow-premium-lg hover:text-blue hover:border-blue/20"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
      <a
        href={PHONE_HREF}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue text-white shadow-premium-xl transition-all duration-300 hover:bg-blue-dark hover:shadow-glow-lg active:scale-[0.95] ring-2 ring-blue-light/20"
        aria-label="Call Preferred Plumbing"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
