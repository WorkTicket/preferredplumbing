'use client'

import { useState, useEffect, useRef, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown, Phone } from 'lucide-react'
import { cn, PHONE_HREF } from '@/lib/utils'
import { isNavActive } from '@/lib/nav-active'
import ServicesMegaMenu from './ServicesMegaMenu'
import LearnDropdown from './LearnDropdown'

const NavDrawer = dynamic(() => import('./NavDrawer'), { ssr: false })

type HeaderShellProps = {
  brand: ReactNode
  actions: ReactNode
}

export default function HeaderShell({ brand, actions }: HeaderShellProps) {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [learnOpen, setLearnOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const learnRef = useRef<HTMLDivElement>(null)
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const learnCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const homeActive = isNavActive(pathname, '/')
  const servicesActive = isNavActive(pathname, '/services')
  const aboutActive = isNavActive(pathname, '/about')
  const learnActive =
    isNavActive(pathname, '/blog') || isNavActive(pathname, '/faqs')
  const galleryActive = isNavActive(pathname, '/gallery')
  const contactActive = isNavActive(pathname, '/contact')

  const openServicesMenu = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
    setServicesOpen(true)
  }

  const closeServicesMenu = () => {
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  const openLearnMenu = () => {
    if (learnCloseTimer.current) clearTimeout(learnCloseTimer.current)
    setLearnOpen(true)
  }

  const closeLearnMenu = () => {
    learnCloseTimer.current = setTimeout(() => setLearnOpen(false), 150)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    setServicesOpen(false)
    setLearnOpen(false)
  }, [pathname])

  useEffect(() => {
    return () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
      if (learnCloseTimer.current) clearTimeout(learnCloseTimer.current)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
        setServicesOpen(false)
      }
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        if (learnCloseTimer.current) clearTimeout(learnCloseTimer.current)
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
        data-scrolled={scrolled ? 'true' : 'false'}
        className={cn(
          'group/hdr fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          'bg-white/95 backdrop-blur-lg border-b border-transparent',
          scrolled ? 'shadow-premium-md border-gray-200/60' : '',
          scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
        )}
      >
        <div
          className={cn(
            'absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark transition-opacity duration-500',
            scrolled ? 'opacity-100' : 'opacity-0'
          )}
        />
        <div
          className={cn(
            'mx-auto flex max-w-[90rem] items-center justify-between gap-3 px-3 sm:px-6 lg:px-8 transition-all duration-500',
            scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
          )}
        >
          {brand}

          <nav className="hidden lg:flex items-center gap-5 lg:gap-7 shrink-0" aria-label="Primary">
            <Link
              href="/"
              className={cn('nav-link-premium', homeActive && 'is-active')}
              aria-current={homeActive ? 'page' : undefined}
            >
              Home
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenu}
            >
              <button
                type="button"
                onClick={() => {
                  if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current)
                  setServicesOpen((open) => !open)
                }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={cn(
                  'nav-link-premium flex items-center gap-1',
                  (servicesOpen || servicesActive) && 'is-active'
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

              <ServicesMegaMenu
                open={servicesOpen}
                onClose={() => setServicesOpen(false)}
                onKeepOpen={openServicesMenu}
              />
            </div>

            <Link
              href="/about"
              className={cn('nav-link-premium', aboutActive && 'is-active')}
              aria-current={aboutActive ? 'page' : undefined}
            >
              About
            </Link>

            <div
              ref={learnRef}
              className="relative"
              onMouseEnter={openLearnMenu}
              onMouseLeave={closeLearnMenu}
            >
              <button
                type="button"
                onClick={() => setLearnOpen((open) => !open)}
                aria-expanded={learnOpen}
                aria-haspopup="true"
                className={cn(
                  'nav-link-premium flex items-center gap-1',
                  (learnOpen || learnActive) && 'is-active'
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

            <Link
              href="/gallery"
              className={cn('nav-link-premium', galleryActive && 'is-active')}
              aria-current={galleryActive ? 'page' : undefined}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={cn('nav-link-premium', contactActive && 'is-active')}
              aria-current={contactActive ? 'page' : undefined}
            >
              Contact
            </Link>

            {actions}
          </nav>

          <div className="flex shrink-0 items-center gap-0.5 lg:hidden">
            <a
              href={PHONE_HREF}
              data-track="header_mobile_call"
              className="flex items-center justify-center rounded-xl p-2 text-blue transition-all duration-200 hover:bg-blue/10 touch-target"
              aria-label="Call Preferred Plumbing"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex items-center justify-center rounded-xl p-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 touch-target"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {drawerOpen && <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />}
    </>
  )
}
