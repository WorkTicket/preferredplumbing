import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { localBusinessSchema, websiteSchema, videoObjectSchema, reviewSchema, organizationSchema } from '@/lib/schema'
import { reviews } from '@/lib/data'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCtaBar from '@/components/layout/MobileCtaBar'
import FloatingActionButton from '@/components/layout/FloatingActionButton'
import AnalyticsTracker from '@/components/layout/AnalyticsTracker'
import { PageTransition } from '@/components/animations'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.preferredplumbingsolution.com'),
  title: {
    template: '%s | Preferred Plumbing Solutions | Spirit Lake, ID',
    default: 'Plumber Spirit Lake ID | Preferred Plumbing Solutions | 208-290-3889',
  },
  description:
    "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service. Call 208-290-3889.",
  keywords: [
    'plumber Spirit Lake Idaho', 'plumbing contractor North Idaho',
    'emergency plumber Coeur d\'Alene', 'radiant heat installer Idaho',
    'new construction plumber Idaho Panhandle', '24 hour plumber',
    'plumbing services near me', 'Preferred Plumbing Solutions',
    'Spirit Lake plumbing', 'Kootenai County plumber', 'North Idaho plumbing',
    'water heater repair Spirit Lake', 'septic system Idaho',
  ],
  authors: [{ name: 'Preferred Plumbing Solutions', url: 'https://www.preferredplumbingsolution.com' }],
  creator: 'Preferred Plumbing Solutions',
  publisher: 'Preferred Plumbing Solutions',
  applicationName: 'Preferred Plumbing Solutions',
  category: 'plumbing',
  classification: 'Plumbing Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.preferredplumbingsolution.com',
    siteName: 'Preferred Plumbing Solutions',
    title: 'Plumber Spirit Lake ID | Preferred Plumbing Solutions | 208-290-3889',
    description: "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service. Call 208-290-3889.",
    images: [
      { url: '/images/og-preferred-plumbing-solutions.webp', width: 1200, height: 630, alt: 'Preferred Plumbing Solutions - Spirit Lake Plumber' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@preferredplumbing',
    title: 'Plumber Spirit Lake ID | Preferred Plumbing Solutions | 208-290-3889',
    description: "Spirit Lake's trusted plumber for 38+ years. New construction, radiant heat, water heaters, emergency service.",
    images: ['/images/og-preferred-plumbing-solutions.webp'],
  },
  icons: {
    icon: '/images/preferred logo.webp',
    shortcut: '/images/preferred logo.webp',
    apple: '/images/preferred logo.webp',
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
    'theme-color': '#0D1B2A',
    'geo.region': 'US-ID',
    'geo.placename': 'Spirit Lake',
    'format-detection': 'telephone=yes',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema(reviews)) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileCtaBar />
        <FloatingActionButton />
        <AnalyticsTracker />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  )
}
