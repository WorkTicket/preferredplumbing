'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Phone, ArrowRight, ChevronDown, Wrench, BookOpen, HelpCircle } from 'lucide-react'
import { cn, PHONE, PHONE_HREF } from '@/lib/utils'
import { isNavActive } from '@/lib/nav-active'
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

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  const pathname = usePathname()
  const servicesActive = isNavActive(pathname, '/services')
  const learnActive =
    isNavActive(pathname, '/blog') || isNavActive(pathname, '/faqs')
  const [servicesOpen, setServicesOpen] = useState(servicesActive)
  const [learnOpen, setLearnOpen] = useState(learnActive)
  const [activeGroupId, setActiveGroupId] = useState<string | null>(() => {
    if (!servicesActive) return null
    const match = pathname.match(/^\/services\/([^/]+)/)
    return (match ? getNavGroupIdForSlug(match[1]) : null) ?? 'specialty'
  })
  const navGroups = getNavServiceGroups()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      document.body.dataset.mobileOverlay = 'true'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      delete document.body.dataset.mobileOverlay
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div
        className="nav-drawer-backdrop fixed inset-0 z-[60] bg-black/60 xl:hidden"
        onClick={onClose}
      />
      <div className="nav-drawer-panel fixed top-0 right-0 z-[60] flex h-full w-80 max-w-[85vw] flex-col border-l border-gray-100 bg-white shadow-premium-2xl xl:hidden">
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

        <div className="border-b border-gray-100 px-4 py-4 space-y-2">
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
        </div>

        <nav className="flex flex-col px-4 py-2 flex-1 overflow-y-auto">
          <NavLink href="/" label="Home" pathname={pathname} onClose={onClose} />

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

          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} onClose={onClose} />
          ))}

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
        </nav>
      </div>
    </>
  )
}

function NavLink({
  href,
  label,
  pathname,
  onClose,
}: {
  href: string
  label: string
  pathname: string
  onClose: () => void
}) {
  const active = isNavActive(pathname, href)
  return (
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
  )
}
