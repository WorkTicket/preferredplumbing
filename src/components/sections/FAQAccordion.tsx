'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqItems } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-page">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="FAQ" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Common<br />
            <span className="text-blue">Questions</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Quick answers to the things customers ask us most.
          </p>
        </div>
        <div className="mt-8 sm:mt-10 mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white shadow-premium overflow-hidden">
          {faqItems.slice(0, 5).map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition hover:bg-gray-50 touch-target"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-gray-400 transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'accordion-panel grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-5 sm:px-6 pb-4 sm:pb-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 text-center">
          <Link href="/faqs" className="font-semibold text-blue transition hover:text-blue-dark">
            View All FAQs &rarr;
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions?{' '}
            <a href="tel:12082903889" className="text-blue font-bold hover:text-blue-dark transition">
              Call (208) 290-3889
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
