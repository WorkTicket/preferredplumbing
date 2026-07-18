'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, ArrowRight, ChevronDown, Wrench, BookOpen, HelpCircle } from 'lucide-react'
import { cn, PHONE, PHONE_HREF } from '@/lib/utils'
import { isNavActive } from '@/lib/nav-active'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  getNavGroupIdForSlug,
  getNavServiceGroups,
  SERVICE_NAV_ICONS,
  SERVICE_NAV_LABELS,
} from '@/lib/nav-services'

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/areas-we-serve', label: 'Service Areas' },
  { href: '/contact', label: 'Contact' },
]

const learnLinks = [
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/faqs', label: 'FAQs', icon: HelpCircle },
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

const servicesSubmenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [learnOpen, setLearnOpen] = useState(false)
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null)
  const navGroups = getNavServiceGroups()
  const servicesActive = isNavActive(pathname, '/services')
  const learnActive =
    isNavActive(pathname, '/blog') || isNavActive(pathname, '/faqs')

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

  useEffect(() => {
    if (!open) {
      setServicesOpen(false)
      setLearnOpen(false)
      setActiveGroupId(null)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    if (servicesActive) {
      setServicesOpen(true)
      const match = pathname.match(/^\/services\/([^/]+)/)
      setActiveGroupId(
        (match ? getNavGroupIdForSlug(match[1]) : null) ?? 'specialty'
      )
    }
    if (learnActive) setLearnOpen(true)
  }, [open, servicesActive, learnActive, pathname])

  const linkClass = (active: boolean) =>
    cn(
      'border-b border-gray-50 py-3.5 text-base font-semibold transition-all duration-200',
      active
        ? 'text-blue border-blue/20'
        : 'text-gray-700 hover:text-blue active:text-blue'
    )

  const renderNavLink = (href: string, label: string, index: number) => {
    const active = isNavActive(pathname, href)
    return reduced ? (
      <Link
        key={href}
        href={href}
        onClick={onClose}
        className={linkClass(active)}
        aria-current={active ? 'page' : undefined}
      >
        {label}
      </Link>
    ) : (
      <motion.div
        key={href}
        custom={index}
        variants={linkVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Link
          href={href}
          onClick={onClose}
          className={cn(
            'group flex items-center justify-between border-b border-gray-50 py-3.5 text-base font-semibold transition-all duration-200',
            active
              ? 'text-blue border-blue/20'
              : 'text-gray-700 hover:text-blue active:text-blue'
          )}
          aria-current={active ? 'page' : undefined}
        >
          {label}
          <ArrowRight
            className={cn(
              'h-4 w-4 transition-all duration-200',
              active
                ? 'text-blue'
                : 'text-gray-300 group-hover:text-blue group-hover:translate-x-0.5'
            )}
          />
        </Link>
      </motion.div>
    )
  }

  const servicesSection = reduced ? (
    <div className="border-b border-gray-50">
      <button
        type="button"
        onClick={() => {
          setServicesOpen((prev) => {
            const next = !prev
            if (next && !activeGroupId) setActiveGroupId('specialty')
            return next
          })
        }}
        aria-expanded={servicesOpen}
        className={cn(
          'flex w-full items-center justify-between py-3.5 text-base font-semibold transition-colors hover:text-blue',
          servicesActive || servicesOpen ? 'text-blue' : 'text-gray-700'
        )}
      >
        Services
        <ChevronDown
          className={cn('h-4 w-4 transition-transform duration-200', servicesOpen && 'rotate-180', servicesActive || servicesOpen ? 'text-blue' : 'text-gray-400')}
        />
      </button>
      {servicesOpen && (
        <div className="pb-2 pl-1">
          {navGroups.map((group) => {
            const GroupIcon = group.icon
            const isGroupOpen = activeGroupId === group.id
            return (
              <div key={group.id} className="mb-1">
                <button
                  type="button"
                  onClick={() => setActiveGroupId(isGroupOpen ? null : group.id)}
                  aria-expanded={isGroupOpen}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-lg px-2 py-2.5 text-left transition-colors',
                    isGroupOpen ? 'bg-blue-50 text-blue' : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
                      isGroupOpen ? 'bg-blue text-white' : 'bg-gray-100 text-blue'
                    )}
                  >
                    <GroupIcon className="h-3.5 w-3.5" strokeWidth={2.25} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">{group.label}</span>
                    <span className="block text-[11px] text-gray-400">
                      {group.services.length} services
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 shrink-0 text-gray-400 transition-transform',
                      isGroupOpen && 'rotate-180 text-blue'
                    )}
                  />
                </button>
                {isGroupOpen && (
                  <div className="mt-0.5 space-y-0.5 border-l-2 border-blue/20 pl-3 ml-4">
                    {group.services.map((service) => {
                      const Icon = SERVICE_NAV_ICONS[service.slug] ?? Wrench
                      const label = SERVICE_NAV_LABELS[service.slug] ?? service.title
                      const isEmergency = service.slug === 'emergency'
                      const active = isNavActive(pathname, `/services/${service.slug}`)

                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={onClose}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors',
                            isEmergency
                              ? active
                                ? 'bg-red-50 text-red-700'
                                : 'text-red-700 hover:bg-red-50'
                              : active
                                ? 'bg-blue-50 text-blue'
                                : 'text-gray-600 hover:bg-blue-50 hover:text-blue'
                          )}
                        >
                          <span
                            className={cn(
                              'flex h-7 w-7 shrink-0 items-center justify-center rounded-md',
                              isEmergency
                                ? active
                                  ? 'bg-red-600 text-white'
                                  : 'bg-red-100 text-red-600'
                                : active
                                  ? 'bg-blue text-white'
                                  : 'bg-gray-100 text-blue'
                            )}
                          >
                            <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                          </span>
                          {label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
          <Link
            href="/services"
            onClick={onClose}
            aria-current={pathname === '/services' ? 'page' : undefined}
            className={cn(
              'mt-1 flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-bold transition-colors hover:bg-blue-50',
              pathname === '/services' ? 'bg-blue-50 text-blue' : 'text-blue'
            )}
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  ) : (
    <motion.div custom={1} variants={linkVariants} initial="hidden" animate="visible" exit="exit">
      <div className="border-b border-gray-50">
        <button
          type="button"
          onClick={() => {
            setServicesOpen((prev) => {
              const next = !prev
              if (next && !activeGroupId) setActiveGroupId('specialty')
              return next
            })
          }}
          aria-expanded={servicesOpen}
          className={cn(
            'flex w-full items-center justify-between py-3.5 text-base font-semibold transition-colors hover:text-blue',
            servicesActive || servicesOpen ? 'text-blue' : 'text-gray-700'
          )}
        >
          Services
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200', servicesOpen && 'rotate-180', servicesActive || servicesOpen ? 'text-blue' : 'text-gray-400')}
          />
        </button>
        <AnimatePresence initial={false}>
          {servicesOpen && (
            <motion.div
              variants={servicesSubmenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden"
            >
              <div className="pb-2 pl-1">
                {navGroups.map((group) => {
                  const GroupIcon = group.icon
                  const isGroupOpen = activeGroupId === group.id
                  return (
                    <div key={group.id} className="mb-1">
                      <button
                        type="button"
                        onClick={() => setActiveGroupId(isGroupOpen ? null : group.id)}
                        aria-expanded={isGroupOpen}
                        className={cn(
                          'flex w-full items-center gap-2.5 rounded-lg px-2 py-2.5 text-left transition-colors',
                          isGroupOpen ? 'bg-blue-50 text-blue' : 'text-gray-700 hover:bg-gray-50'
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
                            isGroupOpen ? 'bg-blue text-white' : 'bg-gray-100 text-blue'
                          )}
                        >
                          <GroupIcon className="h-3.5 w-3.5" strokeWidth={2.25} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold">{group.label}</span>
                          <span className="block text-[11px] text-gray-400">
                            {group.services.length} services
                          </span>
                        </span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 shrink-0 text-gray-400 transition-transform',
                            isGroupOpen && 'rotate-180 text-blue'
                          )}
                        />
                      </button>
                      {isGroupOpen && (
                        <div className="mt-0.5 space-y-0.5 border-l-2 border-blue/20 pl-3 ml-4">
                          {group.services.map((service) => {
                            const Icon = SERVICE_NAV_ICONS[service.slug] ?? Wrench
                            const label = SERVICE_NAV_LABELS[service.slug] ?? service.title
                            const isEmergency = service.slug === 'emergency'
                            const active = isNavActive(pathname, `/services/${service.slug}`)

                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={onClose}
                                aria-current={active ? 'page' : undefined}
                                className={cn(
                                  'flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors',
                                  isEmergency
                                    ? active
                                      ? 'bg-red-50 text-red-700'
                                      : 'text-red-700 hover:bg-red-50'
                                    : active
                                      ? 'bg-blue-50 text-blue'
                                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue'
                                )}
                              >
                                <span
                                  className={cn(
                                    'flex h-7 w-7 shrink-0 items-center justify-center rounded-md',
                                    isEmergency
                                      ? active
                                        ? 'bg-red-600 text-white'
                                        : 'bg-red-100 text-red-600'
                                      : active
                                        ? 'bg-blue text-white'
                                        : 'bg-gray-100 text-blue'
                                  )}
                                >
                                  <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                                </span>
                                {label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
                <Link
                  href="/services"
                  onClick={onClose}
                  aria-current={pathname === '/services' ? 'page' : undefined}
                  className={cn(
                    'mt-1 flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-bold transition-colors hover:bg-blue-50',
                    pathname === '/services' ? 'bg-blue-50 text-blue' : 'text-blue'
                  )}
                >
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )

  const learnSection = reduced ? (
    <div className="border-b border-gray-50">
      <button
        type="button"
        onClick={() => setLearnOpen((prev) => !prev)}
        aria-expanded={learnOpen}
        className={cn(
          'flex w-full items-center justify-between py-3.5 text-base font-semibold transition-colors hover:text-blue',
          learnActive || learnOpen ? 'text-blue' : 'text-gray-700'
        )}
      >
        Learn
        <ChevronDown
          className={cn('h-4 w-4 transition-transform duration-200', learnOpen && 'rotate-180', learnActive || learnOpen ? 'text-blue' : 'text-gray-400')}
        />
      </button>
      {learnOpen && (
        <div className="pb-2 pl-1">
          {learnLinks.map((link) => {
            const active = isNavActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-blue-50 text-blue'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue'
                )}
              >
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
                    active ? 'bg-blue text-white' : 'bg-gray-100 text-blue'
                  )}
                >
                  <link.icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  ) : (
    <motion.div custom={6} variants={linkVariants} initial="hidden" animate="visible" exit="exit">
      <div className="border-b border-gray-50">
        <button
          type="button"
          onClick={() => setLearnOpen((prev) => !prev)}
          aria-expanded={learnOpen}
          className={cn(
            'flex w-full items-center justify-between py-3.5 text-base font-semibold transition-colors hover:text-blue',
            learnActive || learnOpen ? 'text-blue' : 'text-gray-700'
          )}
        >
          Learn
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200', learnOpen && 'rotate-180', learnActive || learnOpen ? 'text-blue' : 'text-gray-400')}
          />
        </button>
        <AnimatePresence initial={false}>
          {learnOpen && (
            <motion.div
              variants={servicesSubmenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden"
            >
              <div className="pb-2 pl-1">
                {learnLinks.map((link) => {
                  const active = isNavActive(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors',
                        active
                          ? 'bg-blue-50 text-blue'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue'
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
                          active ? 'bg-blue text-white' : 'bg-gray-100 text-blue'
                        )}
                      >
                        <link.icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                      </span>
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )

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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden flex flex-col"
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
              {renderNavLink('/', 'Home', 0)}
              {servicesSection}
              {links.map((link, i) => renderNavLink(link.href, link.label, i + 2))}
              {learnSection}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
