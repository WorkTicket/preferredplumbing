'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PHONE, PHONE_HREF } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/areas-we-serve', label: 'Service Areas' },
  { href: '/faqs', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

interface NavDrawerProps {
  open: boolean
  onClose: () => void
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const drawerVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + i * 0.04, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.15 } },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
}

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <span className="font-bold text-sm uppercase tracking-wider text-gray-400">Menu</span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-blue touch-target"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.div
              key="ctas"
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="border-b border-gray-100 px-4 py-4 space-y-2"
            >
              <a
                href={PHONE_HREF}
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue py-3.5 font-bold text-white transition-all duration-200 active:bg-blue-dark active:scale-[0.97] shadow-premium hover:shadow-premium-lg"
              >
                <Phone className="h-5 w-5" /> Call {PHONE}
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3.5 font-bold text-white transition-all duration-200 active:bg-gray-800 active:scale-[0.97]"
              >
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <nav className="flex flex-col px-4 py-2 flex-1 overflow-y-auto">
              {links.map((link, i) =>
                reduced ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="border-b border-gray-50 py-3.5 text-base font-semibold text-gray-700 transition-all duration-200 hover:text-blue active:text-blue"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-between border-b border-gray-50 py-3.5 text-base font-semibold text-gray-700 transition-all duration-200 hover:text-blue active:text-blue"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 text-gray-300 transition-all duration-200 group-hover:text-blue group-hover:translate-x-0.5" />
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
