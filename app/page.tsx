import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/cursor"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
