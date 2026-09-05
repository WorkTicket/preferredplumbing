'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Phone, Wrench } from 'lucide-react'
import { cn, PHONE_DISPLAY, PHONE_HREF } from '@/lib/utils'
import {
  getNavGroupIdForSlug,
  getNavServiceGroups,
  SERVICE_NAV_ICONS,
  SERVICE_NAV_LABELS,
} from '@/lib/nav-services'

interface ServicesMegaMenuProps {
  open: boolean
  onClose: () => void
  onKeepOpen?: () => void
}

export default function ServicesMegaMenu({ open, onClose, onKeepOpen }: ServicesMegaMenuProps) {
  const pathname = usePathname()
  const groups = getNavServiceGroups()
  const defaultGroupId = groups[0]?.id ?? 'specialty'
  const [activeGroupId, setActiveGroupId] = useState(defaultGroupId)

  const allServicesActive = pathname === '/services'
  const activeGroup = groups.find((group) => group.id === activeGroupId) ?? groups[0]
  const ActiveGroupIcon = activeGroup?.icon

  useEffect(() => {
    const match = pathname.match(/^\/services\/([^/]+)/)
    if (!match) return
    const groupId = getNavGroupIdForSlug(match[1])
    if (groupId) setActiveGroupId(groupId)
  }, [pathname])

  useEffect(() => {
    if (open) return
    const match = pathname.match(/^\/services\/([^/]+)/)
    const groupId = match ? getNavGroupIdForSlug(match[1]) : undefined
    setActiveGroupId(groupId ?? defaultGroupId)
  }, [open, pathname, defaultGroupId])

  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-50 w-[min(48rem,calc(100vw-2rem))] -translate-x-1/2 pt-3',
        'transition-all duration-300 ease-out',
        open
          ? 'pointer-events-auto visible translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-2 opacity-0'
      )}
      onMouseEnter={onKeepOpen}
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-premium-2xl ring-1 ring-black/[0.03]">
        <div className="h-1 bg-blue" />

        <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Browse by category
            </p>
            <h3 className="mt-0.5 font-display text-lg font-bold uppercase tracking-wide text-gray-900">
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
                ? 'bg-white text-blue ring-2 ring-blue/30'
                : 'bg-blue text-white hover:bg-blue-dark hover:shadow-premium-lg'
            )}
          >
            View All
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-[210px_1fr]">
          <div className="border-r border-gray-100 bg-gray-50/80 p-3">
            <ul className="space-y-1" role="tablist" aria-label="Service categories">
              {groups.map((group) => {
                const count = group.services.length
                const GroupIcon = group.icon
                const isActive = activeGroupId === group.id

                return (
                  <li key={group.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={cn(
                        'flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all duration-200',
                        isActive
                          ? 'border-gray-200 bg-white text-gray-900 shadow-sm'
                          : 'border-transparent text-gray-600 hover:border-gray-200 hover:bg-white hover:text-gray-900'
                      )}
                      onMouseEnter={() => setActiveGroupId(group.id)}
                      onFocus={() => setActiveGroupId(group.id)}
                      onClick={() => setActiveGroupId(group.id)}
                    >
                      <span
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors',
                          isActive
                            ? 'border-blue/20 bg-blue-50 text-blue'
                            : 'border-gray-200 bg-white text-gray-400'
                        )}
                      >
                        <GroupIcon className="h-4 w-4" strokeWidth={2} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight">
                          {group.label}
                        </span>
                        <span className="mt-0.5 block text-[11px] leading-snug text-gray-400">
                          {count} service{count === 1 ? '' : 's'}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex min-h-[280px] flex-col p-5" role="tabpanel">
            {activeGroup && (
              <div className="mb-4 border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  {ActiveGroupIcon && (
                    <ActiveGroupIcon className="h-4 w-4 text-blue" strokeWidth={2.25} aria-hidden />
                  )}
                  <p className="font-display text-base font-bold uppercase tracking-wide text-gray-900">
                    {activeGroup.label}
                  </p>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">{activeGroup.description}</p>
              </div>
            )}

            <ul
              className={cn(
                'grid flex-1 gap-1.5 sm:grid-cols-2',
                (activeGroup?.services.length ?? 0) > 8 &&
                  'max-h-[280px] overflow-y-auto overscroll-contain pr-0.5'
              )}
            >
              {activeGroup?.services.map((service) => {
                const Icon = SERVICE_NAV_ICONS[service.slug] ?? Wrench
                const label = SERVICE_NAV_LABELS[service.slug] ?? service.title
                const isEmergency = service.slug === 'emergency'
                const active =
                  pathname === `/services/${service.slug}` ||
                  pathname.startsWith(`/services/${service.slug}/`)

                return (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'group/item flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-all duration-200',
                        isEmergency
                          ? active
                            ? 'border-red-200 bg-red-50 shadow-sm'
                            : 'border-transparent hover:border-red-100 hover:bg-red-50/80'
                          : active
                            ? 'border-blue/25 bg-blue-50 shadow-sm'
                            : 'border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm'
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors',
                          isEmergency
                            ? active
                              ? 'border-red-200 bg-white text-red-600'
                              : 'border-red-100 bg-red-50 text-red-600 group-hover/item:bg-white'
                            : active
                              ? 'border-blue/30 bg-white text-blue'
                              : 'border-gray-200 bg-gray-50 text-blue group-hover/item:border-blue/25 group-hover/item:bg-white'
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                      </span>
                      <span
                        className={cn(
                          'text-sm leading-snug transition-colors',
                          isEmergency
                            ? active
                              ? 'font-semibold text-red-700'
                              : 'text-red-700 group-hover/item:text-red-800'
                            : active
                              ? 'font-semibold text-blue-dark'
                              : 'text-gray-700 group-hover/item:text-gray-900'
                        )}
                      >
                        {label}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50/40 px-5 py-3">
          <p className="text-xs text-gray-600">
            <span className="font-semibold text-gray-800">Need help?</span>{' '}
            Free estimates. Sun–Fri 7am–5pm.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue px-4 py-2 text-xs font-bold text-white shadow-premium transition-all duration-200 hover:bg-blue-dark hover:shadow-premium-lg active:scale-[0.98]"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  )
}
