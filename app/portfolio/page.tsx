import type { Metadata } from "next"
import { PortfolioClient } from "./portfolio-client"

export const metadata: Metadata = {
  title: "Portfolio | webCipta — Karya Digital Terbaik Kami",
  description: "Lihat semua portfolio webCipta — website, mobile app, dan UI/UX design yang telah kami kerjakan untuk 50+ klien.",
  alternates: {
    canonical: "/portfolio",
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
