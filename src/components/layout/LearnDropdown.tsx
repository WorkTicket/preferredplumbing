'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LearnDropdownProps {
  open: boolean
  onClose: () => void
}

const learnLinks = [
  {
    href: '/blog',
    label: 'Blog',
    description: 'Plumbing tips & local guides',
    icon: BookOpen,
  },
  {
    href: '/faqs',
    label: 'FAQs',
    description: 'Common questions answered',
    icon: HelpCircle,
  },
]

export default function LearnDropdown({ open, onClose }: LearnDropdownProps) {
  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-50 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3',
        'transition-all duration-300 ease-out',
        open
          ? 'pointer-events-auto visible translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-2 opacity-0'
      )}
    >
      <div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-premium-xl ring-1 ring-black/[0.03]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-200/80 bg-white"
        />
        <div className="p-2">
          {learnLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-200 hover:bg-blue-50/80"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue transition-all duration-200 group-hover:bg-blue group-hover:text-white">
                <link.icon className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-gray-900 group-hover:text-blue">
                  {link.label}
                </span>
                <span className="block text-xs text-gray-500">{link.description}</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-blue" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
