export interface Service {
  slug: string
  title: string
  shortTitle?: string
  description: string
  longDescription?: string
  image: string
  features?: string[]
  faqs?: FAQ[]
  relatedServices?: string[]
}

export interface SubService {
  title: string
  description: string
}

export interface Benefit {
  title: string
  description: string
}

export interface RichServiceContent {
  introHeading: string
  introParagraphs: string[]
  subServices: SubService[]
  photos?: string[]
  summaryHeading: string
  summaryParagraphs: string[]
  benefits: Benefit[]
  benefitsHeading: string
  closingHeading: string
  closingParagraphs: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Review {
  id: string
  name: string
  location?: string
  rating: number
  text: string
  date?: string
}

export interface AreaPage {
  city: string
  state: string
  slug: string
  fullName: string
  description: string
  latitude: number
  longitude: number
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content?: string
  publishedAt: string
  coverImage?: string
  category?: string
  seoTitle?: string
  seoDescription?: string
}

export interface PortfolioItem {
  title: string
  slug: string
  location: string
  serviceType: string
  description: string
  beforeImages?: string[]
  afterImages?: string[]
  completionDate?: string
  featured?: boolean
}

export interface ContactFormData {
  name: string
  phone: string
  email?: string
  city: string
  service: string
  message: string
  referral?: string
}
