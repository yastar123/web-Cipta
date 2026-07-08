import type { Metadata } from "next"
import { PortfolioClient } from "./portfolio-client"

export const metadata: Metadata = {
  title: "Portfolio | webCipta — Karya Digital Terbaik Kami",
  description: "Lihat semua portfolio webCipta — website, mobile app, dan UI/UX design yang telah kami kerjakan untuk 50+ klien.",
  alternates: {
    canonical: "/portfolio",
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
