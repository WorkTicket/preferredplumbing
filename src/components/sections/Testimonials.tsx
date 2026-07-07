'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import ReviewCard from '@/components/ui/ReviewCard'
import { StaggerChildren } from '@/components/animations'
import { reviews } from '@/lib/data'
import Link from 'next/link'

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel text="Real Reviews" />
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
            Trusted by<br />
            <span className="text-blue">North Idaho Homeowners</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            What our customers say matters more than what we tell you.
          </p>
        </div>
        <StaggerChildren
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-medium">Satisfied with our services? Let us know on Google!</p>
          <a
            href="https://maps.app.goo.gl/ne3NdeDCnQqC3Zni7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3 inline-block"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  )
}
