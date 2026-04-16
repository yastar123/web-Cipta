import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/cursor"
import { MarqueeBand, MarqueeBandLarge } from "@/components/marquee-band"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <Hero />
        {/* Bold scrolling band between hero and services */}
        <MarqueeBandLarge />
        <Services />
        {/* Subtle services-to-portfolio band */}
        <MarqueeBand />
        <Portfolio />
        <Process />
        {/* Stat-highlight band */}
        <MarqueeBand reverse text="150+ Proyek · 50+ Klien · 98% Kepuasan · 5 Tahun Pengalaman · 24/7 Support" />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
