'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQ } from '@/types'

interface FaqAccordionListProps {
  items: FAQ[]
  idPrefix?: string
  /** Index open on mount; `null` keeps all closed. Default: 0 */
  defaultOpenIndex?: number | null
  className?: string
}

export default function FaqAccordionList({
  items,
  idPrefix = 'faq',
  defaultOpenIndex = 0,
  className,
}: FaqAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <div className={cn('premium-card shadow-premium-xl overflow-hidden', className)}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={`${idPrefix}-${index}`}
            id={`${idPrefix}-faq-${index}`}
            className="border-b border-gray-100 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className={cn(
                'flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left touch-target transition-colors duration-300',
                isOpen && 'bg-blue/[0.03]'
              )}
            >
              <span
                className={cn(
                  'font-bold text-sm sm:text-base leading-snug pr-2',
                  isOpen ? 'text-blue' : 'text-gray-900'
                )}
              >
                {faq.question}
              </span>
              <div
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300',
                  isOpen
                    ? 'border-blue/20 bg-blue/10 text-blue'
                    : 'border-gray-200 bg-gray-50 text-gray-400'
                )}
              >
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-300',
                    isOpen && 'rotate-180'
                  )}
                />
              </div>
            </button>
            <div
              className={cn(
                'accordion-panel grid transition-[grid-template-rows] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px] px-5 sm:px-7 pb-5 sm:pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
