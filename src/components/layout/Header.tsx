'use client'

import { useState, useEffect, useRef } from 'react'
import ResponsiveImage from '@/components/ui/ResponsiveImage'
import Link from 'next/link'
import { Menu, Phone, ChevronDown } from 'lucide-react'
import { cn, PHONE, PHONE_HREF } from '@/lib/utils'
import NavDrawer from './NavDrawer'
import ServicesMegaMenu from './ServicesMegaMenu'
import LearnDropdown from './LearnDropdown'

const navLinkClass =
  'text-sm font-semibold text-gray-700 hover:text-blue transition-all duration-300 relative whitespace-nowrap after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [learnOpen, setLearnOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const learnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setLearnOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setLearnOpen(false)
      }
    }
    if (servicesOpen || learnOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [servicesOpen, learnOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          'bg-white/95 backdrop-blur-md',
          scrolled ? 'shadow-premium-md' : '',
          scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-[90rem] items-center justify-between gap-3 px-3 sm:px-6 lg:px-8 transition-all duration-500',
            scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
          )}
        >
          <Link
            href="/"
            className="group flex min-w-0 flex-1 items-center gap-0.5 pr-2 md:flex-initial md:gap-2 md:pr-0"
          >
            <ResponsiveImage
              src="/images/preferred logo.webp"
              alt="Preferred Plumbing Solutions logo"
              width={36}
              height={36}
              className={cn(
                'w-auto shrink-0 transition-all duration-500',
                scrolled ? 'h-7 md:h-7' : 'h-8 md:h-9'
              )}
            />
            <span
              className={cn(
                'min-w-0 -ml-1 font-bold uppercase leading-none text-gray-900 transition-all duration-500 md:ml-0',
                'whitespace-nowrap tracking-[0.02em] md:tracking-wider',
                scrolled
                  ? 'text-[clamp(0.6875rem,3vw,0.8125rem)] md:text-sm lg:text-xl'
                  : 'text-[clamp(0.75rem,3.15vw,0.875rem)] md:text-xl'
              )}
            >
              Preferred Plumbing{' '}
              <span className="text-blue">Solutions</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 lg:gap-7 shrink-0">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={cn(
                  navLinkClass,
                  'flex items-center gap-1 after:hidden',
                  servicesOpen && 'text-blue'
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-300',
                    servicesOpen && 'rotate-180'
                  )}
                />
              </button>

              <ServicesMegaMenu open={servicesOpen} onClose={() => setServicesOpen(false)} />
            </div>

            <Link href="/about" className={navLinkClass}>
              About
            </Link>

            <div
              ref={learnRef}
              className="relative"
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button
                type="button"
                onClick={() => setLearnOpen((open) => !open)}
                aria-expanded={learnOpen}
                aria-haspopup="true"
                className={cn(
                  navLinkClass,
                  'flex items-center gap-1 after:hidden',
                  learnOpen && 'text-blue'
                )}
              >
                Learn
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-300',
                    learnOpen && 'rotate-180'
                  )}
                />
              </button>

              <LearnDropdown open={learnOpen} onClose={() => setLearnOpen(false)} />
            </div>

            <Link href="/gallery" className={navLinkClass}>
              Gallery
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>

            <div className="flex items-center gap-2 lg:gap-2.5 ml-1">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 rounded-lg border-2 border-blue px-3 py-2 text-sm font-bold text-blue transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-premium active:scale-[0.97] whitespace-nowrap"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                {PHONE}
              </a>
              <Link
                href="/contact"
                className="rounded-lg bg-blue px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-dark hover:shadow-premium-lg shadow-premium active:scale-[0.97] whitespace-nowrap"
              >
                Free Quote
              </Link>
            </div>
          </nav>

          <div className="flex shrink-0 md:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center justify-center rounded-lg p-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 touch-target"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
