import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { localBusinessSchema, websiteSchema, organizationSchema } from '@/lib/schema'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCtaBar from '@/components/layout/MobileCtaBar'
import FloatingActionButton from '@/components/layout/FloatingActionButton'
import AnalyticsTracker from '@/components/layout/AnalyticsTracker'
import CookieConsentBanner from '@/components/layout/CookieConsentBanner'
import { defaultDescription, defaultTitle, siteName, siteUrl } from '@/lib/seo'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | Preferred Plumbing`,
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    'plumber Spirit Lake Idaho', 'plumbing services near me',
    'plumber Coeur d\'Alene', 'plumber Post Falls', 'plumber Rathdrum',
    'emergency plumber North Idaho', 'water heater repair near me',
    'heated driveway Coeur d\'Alene', 'new construction plumber Rathdrum',
    'Preferred Plumbing Solutions', 'Kootenai County plumber',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  category: 'plumbing',
  classification: 'Plumbing Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      { url: '/images/og-preferred-plumbing-solutions.webp', width: 1200, height: 630, alt: 'Preferred Plumbing Solutions - Spirit Lake Plumber' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@preferredplumbing',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/og-preferred-plumbing-solutions.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/preferred-logo.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'XT0FWUcWxSnGoN04Hg-n1T4eVmj7sc8cLUWuXSjpBWk',
  },
  other: {
    'geo.region': 'US-ID',
    'geo.placename': 'Spirit Lake',
    'format-detection': 'telephone=yes',
  },
}

export const viewport: Viewport = {
  themeColor: '#081525',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${dmSerif.variable}`}>
      <head>
        {/* GA4 loads only after cookie consent — see loadGoogleAnalytics() */}
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
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main
          id="main-content"
          className="min-h-screen pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pb-0"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <FloatingActionButton />
        <AnalyticsTracker />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
