import type { Metadata } from "next"
import { PortfolioClient } from "./portfolio-client"

export const metadata: Metadata = {
  title: "Portfolio Jasa Pembuatan Website & Aplikasi — 150+ Proyek",
  description:
    "Portfolio lengkap webCipta — 150+ proyek jasa pembuatan website, toko online, aplikasi mobile, dan UI/UX design untuk 50+ klien di seluruh Indonesia. Lihat karya nyata kami!",
  keywords: [
    "portfolio jasa pembuatan website",
    "contoh website buatan webcipta",
    "portofolio web developer lampung",
    "portfolio digital agency indonesia",
  ],
  alternates: { canonical: "https://webcipta.my.id/portfolio" },
  openGraph: {
    title: "Portfolio Jasa Pembuatan Website & Aplikasi | webCipta — 150+ Proyek",
    description: "150+ proyek website, toko online, aplikasi mobile & UI/UX dari webCipta. Lihat portfolio lengkap kami.",
    url: "https://webcipta.my.id/portfolio",
    images: [{ url: "https://webcipta.my.id/og-image.jpg", width: 1200, height: 630 }],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://webcipta.my.id/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Portfolio",
      item: "https://webcipta.my.id/portfolio",
    },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PortfolioClient />
    </>
  )
}
