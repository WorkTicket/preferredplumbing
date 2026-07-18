'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Phone, Wrench } from 'lucide-react'
import { cn, PHONE, PHONE_HREF } from '@/lib/utils'
import {
  getNavServiceGroups,
  SERVICE_NAV_ICONS,
  SERVICE_NAV_LABELS,
} from '@/lib/nav-services'

interface ServicesMegaMenuProps {
  open: boolean
  onClose: () => void
}

export default function ServicesMegaMenu({ open, onClose }: ServicesMegaMenuProps) {
  const pathname = usePathname()
  const groups = getNavServiceGroups()
  const allServicesActive = pathname === '/services'
  const emergencyGroup = groups.find((group) => group.id === 'emergency')
  const otherGroups = groups.filter((group) => group.id !== 'emergency')

  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-50 w-[52rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3',
        'transition-all duration-300 ease-out',
        open
          ? 'pointer-events-auto visible translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-2 opacity-0'
      )}
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-premium-2xl ring-1 ring-black/[0.03]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-200/80 bg-navy"
        />

        <div className="relative bg-gradient-to-r from-navy via-navy-mid to-steel px-5 py-3.5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-light/90">
                Spirit Lake, Idaho
              </p>
              <h3 className="mt-0.5 font-display text-lg font-bold uppercase tracking-wide text-white">
                Our Services
              </h3>
            </div>
            <Link
              href="/services"
              onClick={onClose}
              aria-current={allServicesActive ? 'page' : undefined}
              className={cn(
                'group inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-bold shadow-premium transition-all duration-200 active:scale-[0.98]',
                allServicesActive
                  ? 'bg-white text-blue ring-2 ring-blue-light/40'
                  : 'bg-blue text-white hover:bg-blue-dark hover:shadow-premium-lg'
              )}
            >
              View All
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {emergencyGroup?.services[0] && (() => {
          const service = emergencyGroup.services[0]
          const Icon = SERVICE_NAV_ICONS[service.slug] ?? Wrench
          const label = SERVICE_NAV_LABELS[service.slug] ?? service.title
          const active =
            pathname === `/services/${service.slug}` ||
            pathname.startsWith(`/services/${service.slug}/`)

          return (
            <div className="border-b border-red-100 bg-red-50/70 px-3 py-2">
              <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-red-700/80">
                {emergencyGroup.label}
              </p>
              <Link
                href={`/services/${service.slug}`}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group/item flex items-center gap-2.5 rounded-lg px-2 py-2.5 transition-all duration-200',
                  active ? 'bg-red-100/90 ring-1 ring-red-200' : 'hover:bg-red-100/80'
                )}
              >
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-all duration-200',
                    active
                      ? 'bg-red-600 text-white'
                      : 'bg-red-100 text-red-600 group-hover/item:bg-red-600 group-hover/item:text-white'
                  )}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
                <span
                  className={cn(
                    'min-w-0 text-[13px] font-semibold leading-tight',
                    active ? 'text-red-800' : 'text-red-700 group-hover/item:text-red-800'
                  )}
                >
                  {label}
                </span>
              </Link>
            </div>
          )
        })()}

        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3">
          {otherGroups.map((group) => (
            <div key={group.id}>
              <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                {group.label}
              </p>
              <div className="space-y-0.5">
                {group.services.map((service) => {
                  const Icon = SERVICE_NAV_ICONS[service.slug] ?? Wrench
                  const label = SERVICE_NAV_LABELS[service.slug] ?? service.title
                  const active =
                    pathname === `/services/${service.slug}` ||
                    pathname.startsWith(`/services/${service.slug}/`)

                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'group/item flex min-w-0 items-center gap-2 rounded-lg px-2 py-2 transition-all duration-200',
                        active
                          ? 'bg-blue-50/80 ring-1 ring-blue/20'
                          : 'hover:bg-blue-50/80'
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-all duration-200',
                          active
                            ? 'bg-blue text-white'
                            : 'bg-gray-100 text-blue group-hover/item:bg-blue group-hover/item:text-white'
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                      </span>
                      <span
                        className={cn(
                          'min-w-0 text-[12px] font-semibold leading-tight transition-colors duration-200',
                          active
                            ? 'text-blue-dark'
                            : 'text-gray-700 group-hover/item:text-blue-dark'
                        )}
                      >
                        {label}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50/40 px-5 py-3">
          <p className="text-xs text-gray-600">
            <span className="font-semibold text-gray-800">Need help?</span>{' '}
            Free consultation available.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue px-4 py-2 text-xs font-bold text-white shadow-premium transition-all duration-200 hover:bg-blue-dark hover:shadow-premium-lg active:scale-[0.98]"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  )
}
