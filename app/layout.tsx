import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = 'https://webcipta.my.id'
const SITE_NAME = 'webCipta'
const TITLE = 'Jasa Pembuatan Website Profesional di Lampung & Seluruh Indonesia | webCipta'
const DESCRIPTION =
  'webCipta adalah jasa pembuatan website & aplikasi mobile terpercaya di Bandar Lampung, melayani seluruh Indonesia. 150+ proyek, 50+ klien puas, harga transparan. Konsultasi gratis!'
const KEYWORDS = [
  'jasa pembuatan website',
  'jasa pembuatan website lampung',
  'jasa pembuatan website di lampung',
  'jasa website lampung',
  'jasa buat website murah',
  'jasa pembuatan website profesional',
  'jasa pembuatan aplikasi mobile',
  'digital agency lampung',
  'web developer lampung',
  'jasa pembuatan toko online',
  'jasa desain UI UX',
  'jasa pembuatan website perusahaan',
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | webCipta',
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  generator: 'v0.app',
  applicationName: SITE_NAME,
  authors: [{ name: 'webCipta' }],
  creator: 'webCipta',
  publisher: 'webCipta',
  category: 'technology',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  verification: {
    google: '5l0MswU8NoIeMXs_vN7IjPTf2eY1s6wq63dT-B5o6lA',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'webCipta — Jasa Pembuatan Website & Aplikasi Mobile di Lampung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'webCipta',
      alternateName: 'webCipta Digital Agency',
      url: SITE_URL,
      description: DESCRIPTION,
      email: 'hello@webcipta.com',
      telephone: '+6285366195381',
      priceRange: 'Rp 5.000.000 - Rp 100.000.000+',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bandar Lampung',
        addressRegion: 'Lampung',
        addressCountry: 'ID',
      },
      areaServed: [
        { '@type': 'City', name: 'Bandar Lampung' },
        { '@type': 'AdministrativeArea', name: 'Lampung' },
        { '@type': 'Country', name: 'Indonesia' },
      ],
      knowsAbout: [
        'Jasa Pembuatan Website',
        'Pengembangan Aplikasi Mobile',
        'UI/UX Design',
        'Search Engine Optimization',
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Pembuatan Website',
            description: 'Website cepat, SEO-friendly, dan scalable menggunakan Next.js dan teknologi terdepan, dari landing page hingga web app kompleks.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Pembuatan Aplikasi Mobile',
            description: 'Aplikasi cross-platform iOS & Android dengan React Native dan Flutter, native performance di semua perangkat.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa UI/UX Design',
            description: 'Design intuitif yang cantik sekaligus fungsional, berdasarkan riset user yang mendalam.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Optimasi Performa Website (Core Web Vitals)',
            description: 'Optimasi loading super cepat yang meningkatkan konversi dan ranking SEO secara signifikan.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance & Keamanan Website',
            description: 'Pemeliharaan berkala, monitoring real-time, dan proteksi terhadap ancaman cyber.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Konsultasi IT & Strategi Teknologi',
            description: 'Bantuan merencanakan arsitektur sistem yang scalable, memilih tech stack yang tepat, dan roadmap digital sesuai anggaran dan tujuan bisnis.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
      ],
      foundingDate: '2020',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'id-ID',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Film grain / noise overlay — gives premium texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
