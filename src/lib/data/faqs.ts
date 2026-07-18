import type { FAQ, Service } from '@/types'
import { SERVICE_NAV_ORDER } from '@/lib/service-slugs'
import { services } from './services'

export const faqItems = [
  { question: 'Do you offer emergency plumbing services in Spirit Lake?', answer: 'Yes. We provide emergency plumbing throughout Spirit Lake and the surrounding areas Sunday through Friday, 7am to 5pm. We are closed Saturday.' },
  { question: 'How soon can you start a new construction plumbing project?', answer: 'We can usually start within a week or two after the plans and permits are done.' },
  { question: 'Are your plumbers licensed and insured?', answer: 'Absolutely. Every one of our technicians is fully licensed, insured, and background checked.' },
  { question: 'What\'s included in a plumbing remodel?', answer: 'We swap out old plumbing, put in new fixtures, move things around as needed, and make sure everything is up to code.' },
  { question: 'Do you install energy-efficient radiant floor heating?', answer: 'Yes, we specialize in radiant in-floor systems for new builds and remodels.' },
  {
    question: 'Do you install heated driveways?',
    answer: 'Yes. We install hydronic heated driveway and snow-melt systems using the same radiant heat expertise we use for in-floor heating.',
    href: '/services/heated-driveways',
    linkLabel: 'Learn about heated driveways →',
  },
  {
    question: 'Do you install tankless water heaters?',
    answer: 'Yes. We install, repair, and replace tankless water heaters across North Idaho. We can help you decide between tank and tankless based on your household usage.',
    href: '/services/tankless-water-heaters',
    linkLabel: 'See tankless water heater services →',
  },
  { question: 'Can I get an estimate before scheduling service?', answer: 'Of course. We give free estimates with no strings attached.' },
  { question: 'Do you work with general contractors on construction projects?', answer: 'Yes, we work alongside builders, architects, and general contractors all the time.' },
  { question: 'What areas besides Spirit Lake do you serve?', answer: 'We cover Spirit Lake and 15 other communities across northern Idaho and eastern Washington.' },
]


export interface FaqSection {
  id: string
  title: string
  href?: string
  items: FAQ[]
}


export function getFaqSections(): FaqSection[] {
  const bySlug = new Map(services.map((service) => [service.slug, service]))

  const serviceSections: FaqSection[] = SERVICE_NAV_ORDER.map((slug) => bySlug.get(slug))
    .filter((service): service is Service => Boolean(service?.faqs?.length))
    .map((service) => ({
      id: service.slug,
      title: service.title,
      href: `/services/${service.slug}`,
      items: service.faqs!,
    }))

  return [
    { id: 'general', title: 'General Questions', items: faqItems },
    ...serviceSections,
  ]
}


export function getAllFaqItems(): FAQ[] {
  return getFaqSections().flatMap((section) => section.items)
}
