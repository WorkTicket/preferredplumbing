'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqItems } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden mesh-bg-warm">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          <div>
            <SectionLabel text="FAQ" />
            <h2 className="section-heading">
              Common<br />
              <span className="text-blue">Questions</span>
            </h2>
            <p className="section-subtitle mt-4">
              Quick answers to the things customers ask us most. Can&apos;t find what you need? Give us a call.
            </p>
            <div className="mt-8 hidden lg:block premium-card-dark p-6">
              <p className="font-display text-lg font-black uppercase text-white">Still have questions?</p>
              <p className="mt-2 text-sm text-gray-300">We&apos;re happy to talk through your project.</p>
              <a href="tel:12082903889" className="mt-4 inline-flex items-center gap-2 font-bold text-blue-light hover:text-white transition-colors">
                Call (208) 290-3889 &rarr;
              </a>
            </div>
          </div>

          <div className="premium-card shadow-premium-xl overflow-hidden">
            {faqItems.slice(0, 5).map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left touch-target transition-colors duration-300',
                      isOpen && 'bg-blue/[0.03]'
                    )}
                  >
                    <span className={cn(
                      'font-bold text-sm sm:text-base leading-snug pr-2',
                      isOpen ? 'text-blue' : 'text-gray-900'
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300',
                      isOpen
                        ? 'border-blue/20 bg-blue/10 text-blue'
                        : 'border-gray-200 bg-gray-50 text-gray-400'
                    )}>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </div>
                  </button>
                  <div
                    className={cn(
                      'accordion-panel grid transition-[grid-template-rows] duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
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
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/faqs" className="font-bold text-blue hover:text-blue-dark transition-colors">
            View All FAQs &rarr;
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <p className="text-gray-500 text-sm lg:hidden">
            Still have questions?{' '}
            <a href="tel:12082903889" className="text-blue font-bold">
              Call (208) 290-3889
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
