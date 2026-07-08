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
  'webCipta — jasa pembuatan website profesional & aplikasi mobile terpercaya di Bandar Lampung, melayani seluruh Indonesia. Spesialis Next.js, React, UI/UX Design & SEO. 150+ proyek selesai, 50+ klien puas, harga transparan. Konsultasi gratis!'
const KEYWORDS = [
  // Core service
  'jasa pembuatan website',
  'jasa pembuatan website profesional',
  'jasa buat website murah',
  'jasa pembuatan website perusahaan',
  'jasa pembuatan website company profile',
  'jasa pembuatan landing page',
  'jasa pembuatan toko online',
  'jasa pembuatan web app',
  // Location-specific
  'jasa pembuatan website lampung',
  'jasa pembuatan website di lampung',
  'jasa website lampung',
  'jasa website bandar lampung',
  'web developer lampung',
  'web developer bandar lampung',
  'digital agency lampung',
  'digital agency bandar lampung',
  'jasa it lampung',
  // Mobile & design
  'jasa pembuatan aplikasi mobile',
  'jasa pembuatan aplikasi android',
  'jasa desain UI UX',
  'jasa desain website',
  // Indonesia-wide
  'jasa pembuatan website indonesia',
  'jasa website murah indonesia',
  'web developer indonesia',
  'digital agency indonesia',
  // Long-tail & intent
  'harga jasa pembuatan website',
  'biaya pembuatan website profesional',
  'jasa website next js',
  'jasa pembuatan website react',
  'jasa pembuatan website seo friendly',
  'jasa website portfolio',
  'webcipta',
  'webcipta digital agency',
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | webCipta',
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: 'webCipta', url: SITE_URL }],
  creator: 'webCipta',
  publisher: 'webCipta',
  category: 'technology',
  alternates: {
    canonical: SITE_URL,
    languages: { 'id-ID': SITE_URL },
  },
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
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'webCipta',
      alternateName: ['webCipta Digital Agency', 'Web Cipta'],
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/og-image.jpg`,
      description: DESCRIPTION,
      email: 'hello@webcipta.com',
      telephone: '+6285366195381',
      priceRange: 'Rp 5.000.000 - Rp 100.000.000+',
      currenciesAccepted: 'IDR',
      paymentAccepted: 'Transfer Bank, QRIS, OVO, GoPay, Dana',
      openingHours: 'Mo-Fr 09:00-18:00',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bandar Lampung',
        addressRegion: 'Lampung',
        postalCode: '35141',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -5.3971,
        longitude: 105.2668,
      },
      areaServed: [
        { '@type': 'City', name: 'Bandar Lampung' },
        { '@type': 'AdministrativeArea', name: 'Lampung' },
        { '@type': 'Country', name: 'Indonesia' },
      ],
      sameAs: [
        `https://wa.me/6285366195381`,
        `https://webcipta.my.id`,
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
      knowsAbout: [
        'Jasa Pembuatan Website',
        'Pengembangan Aplikasi Mobile',
        'UI/UX Design',
        'Search Engine Optimization',
        'Next.js',
        'React',
        'Node.js',
        'Network Monitoring',
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Pembuatan Website Profesional',
            description: 'Website cepat, SEO-friendly, dan scalable menggunakan Next.js dan teknologi terdepan, dari landing page hingga web app kompleks.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Pembuatan Website Company Profile',
            description: 'Website company profile profesional yang merepresentasikan brand bisnis Anda secara online dengan desain modern dan SEO-ready.',
            areaServed: 'Bandar Lampung, Lampung, Indonesia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Pembuatan Toko Online',
            description: 'Toko online dengan sistem pemesanan, pembayaran digital, manajemen stok, dan integrasi pengiriman untuk bisnis Anda.',
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
            name: 'Optimasi Performa & SEO Website',
            description: 'Optimasi Core Web Vitals, loading super cepat, dan teknik SEO on-page yang meningkatkan ranking di Google secara signifikan.',
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
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 5 },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'id-ID',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/#portfolio` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          item: `${SITE_URL}/portfolio`,
        },
      ],
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
