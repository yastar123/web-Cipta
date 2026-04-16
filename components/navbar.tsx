"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proses", href: "#proses" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Kontak", href: "#kontak" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      setHidden(currentScrollY > lastScrollY && currentScrollY > 500)
      setLastScrollY(currentScrollY)

      const sections = navLinks.map(link => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"} ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex h-14 items-center justify-between px-5 lg:px-6 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-background/70 backdrop-blur-2xl border border-border/25 shadow-xl shadow-background/20"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 relative z-10">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-emerald-500 shadow-md shadow-primary/20 group-hover:shadow-primary/40 transition-all group-hover:scale-105">
              <span className="text-sm font-bold text-primary-foreground">W</span>
            </div>
            <div>
              <span className="text-base font-bold text-foreground leading-none tracking-tight">
                web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
              </span>
              <div className="text-[9px] text-muted-foreground/50 uppercase tracking-[0.18em]">Digital Agency</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 bg-card/30 backdrop-blur-xl rounded-full px-1.5 py-1.5 border border-border/20">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-emerald-500 -z-10" />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Button
              className="group bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full px-5 h-9 text-xs font-medium transition-all hover:scale-105 shadow-md shadow-foreground/10"
            >
              Konsultasi Gratis
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-card/50 backdrop-blur-sm border border-border/25 hover:bg-card transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-4 h-3.5">
              <span className={`absolute left-0 block h-px w-4 bg-foreground transform transition-all duration-400 ${isOpen ? "top-[7px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[7px] block h-px bg-foreground transform transition-all duration-400 ${isOpen ? "w-0 opacity-0" : "w-3 opacity-100"}`} />
              <span className={`absolute left-0 block h-px w-4 bg-foreground transform transition-all duration-400 ${isOpen ? "top-[7px] -rotate-45" : "top-3.5"}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl" onClick={() => setIsOpen(false)} />
          <div className="relative h-full flex flex-col items-center justify-center gap-2 p-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-3xl sm:text-4xl font-bold transition-all duration-500 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${activeSection === link.href.replace("#", "") ? "text-primary" : "text-foreground hover:text-primary"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div
              className={`mt-6 transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${navLinks.length * 60}ms` }}
            >
              <Button
                className="bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full px-8 h-12 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Gratis
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <div
              className={`absolute bottom-10 flex gap-6 text-xs text-muted-foreground/50 transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${(navLinks.length + 1) * 60}ms` }}
            >
              <span>hello@webcipta.com</span>
              <span>+62 812-3456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
