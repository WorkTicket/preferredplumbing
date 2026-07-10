'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import ReviewCard from '@/components/ui/ReviewCard'
import { StaggerChildren } from '@/components/animations'
import { reviews } from '@/lib/data'
import { GBP_URL } from '@/lib/utils'
import { Star, ExternalLink } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,_rgba(14,165,233,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel text="Real Reviews" centered />
          <h2 className="section-heading">
            What Our Customers<br />
            <span className="text-accent">Are Saying</span>
          </h2>
          <p className="section-subtitle-center">
            What our customers say matters more than what we tell you.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-gray-50/80 px-6 py-4 shadow-premium transition-shadow duration-300 hover:border-blue-light/30 hover:shadow-premium-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-premium">
              <Star className="h-6 w-6 fill-gold text-gold" />
            </div>
            <div className="text-left">
              <p className="font-display text-2xl font-black text-gray-900">5.0</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Google Rating</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-gray-200" />
            <p className="hidden sm:block text-sm text-gray-500 max-w-[200px]">
              Trusted by homeowners across North Idaho
            </p>
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </a>
        </div>

        <StaggerChildren
          className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
          variant="fadeUp"
        >
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              location={review.location}
              rating={review.rating}
              text={review.text}
            />
          ))}
        </StaggerChildren>

        <div className="mt-10 text-center">
          <p className="text-gray-600 font-medium">Satisfied with our services? Let us know on Google!</p>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 inline-flex"
          >
            <Star className="h-4 w-4 fill-white" /> Leave a Review
          </a>
        </div>
      </div>
    </section>
  )
}
