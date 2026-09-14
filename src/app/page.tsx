import type { Metadata } from 'next'
import HeroImagePreload from '@/components/ui/HeroImagePreload'
import HeroSection from '@/components/sections/HeroSection'
import EmergencyBand from '@/components/sections/EmergencyBand'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutSection from '@/components/sections/AboutSection'
import WorkGallery from '@/components/sections/WorkGallery'
import LatestArticles from '@/components/sections/LatestArticles'
import ServiceAreas from '@/components/sections/ServiceAreas'
import FAQAccordion from '@/components/sections/FAQAccordion'
import FindUsSection from '@/components/sections/FindUsSection'
import ContactSection from '@/components/sections/ContactSection'
import Testimonials from '@/components/sections/Testimonials'
import { webpageSchema, reviewSchema, videoObjectSchema, featuredServicesItemList, organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/schema'
import { reviews } from '@/lib/data'
import { generateMetadata as genMeta, siteUrl } from '@/lib/seo'
import { SHOW_GOOGLE_REVIEWS } from '@/lib/feature-flags'
import { combinedExperiencePhrase } from '@/lib/company-stats'

export const metadata: Metadata = genMeta({
  title: 'Spirit Lake Plumber | Same-Day Service',
  description:
    'Plumbing services near Spirit Lake and North Idaho. Family-owned, 38+ years. Water heaters, radiant heat, emergency plumber. Call 208-290-3889.',
  slug: '',
  keywords: [
    'plumber',
    'plumbing services',
    'plumbing services near me',
    'plumber Spirit Lake Idaho',
    'plumber Coeur d\'Alene',
    'plumber Post Falls',
    'plumber Rathdrum',
    'emergency plumber near me',
    'water heater repair near me',
  ],
})

export default function HomePage() {
  return (
    <>
      <HeroImagePreload src="/images/preferred-plumbing-hero-poster.webp" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(webpageSchema('Spirit Lake Plumber | Same-Day Service', `Plumbing services near Spirit Lake and North Idaho. Family-owned with ${combinedExperiencePhrase()}. Water heaters, radiant heat, and emergency plumber.`, '')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema()) }}
      />
      {SHOW_GOOGLE_REVIEWS && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema(reviews.slice(0, 3))),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            featuredServicesItemList([
              { name: 'Emergency Plumbing', url: `${siteUrl}/services/emergency` },
              { name: 'Water Heater Repair & Installation', url: `${siteUrl}/services/water-heaters` },
              { name: 'Heated Driveway Installation', url: `${siteUrl}/services/heated-driveways` },
              { name: 'Radiant Floor Heating', url: `${siteUrl}/services/radiant-heat` },
              { name: 'New Construction Plumbing', url: `${siteUrl}/services/new-construction` },
              { name: 'Commercial Plumbing', url: `${siteUrl}/services/commercial` },
            ]),
          ),
        }}
      />
      <div className="hero-fold flex flex-col">
        <HeroSection />
        <EmergencyBand />
      </div>
      <div className="below-fold bg-gray-50">
        <WhyChooseUs />
      </div>
      <div className="below-fold">
        <ServicesGrid />
      </div>
      <div className="below-fold">
        <AboutSection />
      </div>
      <div className="below-fold">
        <WorkGallery />
      </div>
      {SHOW_GOOGLE_REVIEWS && (
        <div className="below-fold">
          <Testimonials />
        </div>
      )}
      <div className="below-fold">
        <LatestArticles />
      </div>
      <div className="below-fold">
        <ServiceAreas />
      </div>
      <div className="below-fold">
        <FAQAccordion />
      </div>
      <div className="below-fold">
        <FindUsSection />
      </div>
      <div className="below-fold">
        <ContactSection />
      </div>
    </>
  )
}
