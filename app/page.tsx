import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { faqs as faqData } from "@/lib/faq-data"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { MarqueeBand, MarqueeBandLarge } from "@/components/marquee-band"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <Hero />
        <MarqueeBandLarge />
        <Services />
        <MarqueeBand />
        <Portfolio />
        <Process />
        <MarqueeBand reverse text="150+ Proyek · 50+ Klien · 98% Kepuasan · 5 Tahun Pengalaman" />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </>
  )
}
