import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { MarqueeBand, MarqueeBandLarge } from "@/components/marquee-band"

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
        <CTA />
        <Footer />
      </main>
    </>
  )
}
