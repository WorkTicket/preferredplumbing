'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Phone, ChevronDown, Wrench } from 'lucide-react'
import { cn, PHONE, PHONE_HREF } from '@/lib/utils'
import NavDrawer from './NavDrawer'
import { services } from '@/lib/data'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

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
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-white/95 shadow-premium-md backdrop-blur-md'
            : 'bg-white/95 backdrop-blur-md',
          scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
        )}
      >
        <div className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-8 transition-all duration-500',
          scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
        )}>
          <Link href="/" className="group flex min-w-0 flex-1 items-center gap-0.5 pr-2 md:flex-initial md:gap-2 md:pr-0">
            <Image
              src="/images/preferred logo.webp"
              alt=""
              aria-hidden="true"
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

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
            <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-blue transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>

            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full"
              >
                Services <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-300', servicesOpen && 'rotate-180')} />
              </button>

              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={cn(
                  'absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[640px] rounded-2xl bg-white shadow-premium-xl border border-gray-100 transition-all duration-300',
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                )}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">All Services</span>
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs font-semibold text-blue hover:text-blue-dark transition-colors"
                    >
                      View All 14 Services &rarr;
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {services.filter(s => !['kitchen-remodels', 'bathroom-remodels'].includes(s.slug) || s.slug === 'remodels').map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="group/link flex items-start gap-2.5 rounded-xl p-3 transition-all duration-200 hover:bg-blue-50 hover:shadow-sm"
                      >
                        <Wrench className="h-4 w-4 mt-0.5 text-blue shrink-0 transition-transform duration-200 group-hover/link:scale-110" />
                        <div>
                          <span className="text-sm font-semibold text-gray-700 transition-colors duration-200 group-hover/link:text-blue">{service.title}</span>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{service.description.slice(0, 60)}...</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-600">Need help choosing?</span> Call us for a free consultation
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue px-4 py-2 text-xs font-bold text-white transition-all hover:bg-blue-dark shadow-premium active:scale-[0.97]"
                    >
                      <Phone className="h-3 w-3" /> {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-blue transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full">
              About
            </Link>
            <Link href="/gallery" className="text-sm font-semibold text-gray-700 hover:text-blue transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full">
              Gallery
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-blue transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 rounded-lg border-2 border-blue px-3.5 py-2 text-sm font-bold text-blue transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-premium active:scale-[0.97]"
              >
                <Phone className="h-3.5 w-3.5" /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="rounded-lg bg-blue px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-dark hover:shadow-premium-lg shadow-premium active:scale-[0.97]"
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
