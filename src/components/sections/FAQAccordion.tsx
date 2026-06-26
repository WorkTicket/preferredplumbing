'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqItems } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

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
          {faqItems.slice(0, 5).map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition hover:bg-gray-50 touch-target"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-gray-400 transition-transform duration-300',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {reduced ? (
                openIndex === index && (
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-5 sm:px-6 pb-4 sm:pb-5">{faq.answer}</p>
                  </div>
                )
              ) : (
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-5 sm:px-6 pb-4 sm:pb-5">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
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
