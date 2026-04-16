"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, X, Menu } from "lucide-react"

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
      const cur = window.scrollY
      setScrolled(cur > 50)
      setHidden(cur > lastScrollY && cur > 500)
      setLastScrollY(cur)

      const sections = navLinks.map(l => l.href.replace("#", ""))
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(s); break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      {/* Glass bar */}
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "max-w-6xl mt-3 mx-4 sm:mx-6 lg:mx-8 rounded-2xl bg-background/80 backdrop-blur-2xl border border-border/25 shadow-2xl shadow-black/40"
            : "max-w-none bg-transparent"
        }`}
      >
        <div className="flex h-[60px] items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 relative z-10 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-emerald-500 shadow-lg shadow-primary/30 group-hover:shadow-primary/60 transition-all duration-300 group-hover:scale-110">
              <span className="text-xs font-black text-primary-foreground">W</span>
            </div>
            <div>
              <span className="text-sm font-black text-foreground tracking-tight">
                web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
              </span>
              <div className="text-[8px] text-muted-foreground/35 uppercase tracking-[0.22em] leading-none mt-0.5">Digital Agency</div>
            </div>
          </Link>

          {/* Desktop nav — centered pill */}
          <div className="hidden lg:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-emerald-500 -z-10 shadow-md shadow-primary/25" />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="#kontak"
              data-cursor-label="GO"
              className="group relative inline-flex items-center gap-1.5 rounded-full px-5 h-9 text-xs font-bold overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 bg-[length:200%_100%] animate-[gradientMove_5s_ease-in-out_infinite]" />
              <span className="relative text-primary-foreground">Konsultasi Gratis</span>
              <ArrowUpRight className="relative h-3.5 w-3.5 text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-border/25 bg-card/50 backdrop-blur-sm hover:border-primary/25 hover:bg-card transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen
              ? <X className="h-4 w-4 text-foreground" />
              : <Menu className="h-4 w-4 text-foreground" />
            }
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-background/97 backdrop-blur-3xl" onClick={() => setIsOpen(false)} />

        {/* Decorative gradient in background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative h-full flex flex-col items-center justify-center gap-4 p-8">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-black tracking-tighter transition-all duration-700 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  fontSize: "clamp(36px, 8vw, 60px)",
                  transitionDelay: `${i * 60}ms`,
                  WebkitTextStroke: isActive ? undefined : "1px oklch(0.97 0 0 / 0.15)",
                  color: isActive ? undefined : "transparent",
                }}
                onClick={() => setIsOpen(false)}
              >
                {isActive
                  ? <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">{link.label}</span>
                  : link.label
                }
              </Link>
            )
          })}

          <div
            className={`mt-8 transition-all duration-700 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: `${navLinks.length * 60}ms` }}
          >
            <a
              href="#kontak"
              className="relative inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold overflow-hidden"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500" />
              <span className="relative text-primary-foreground">Konsultasi Gratis</span>
              <ArrowUpRight className="relative h-4 w-4 text-primary-foreground" />
            </a>
          </div>

          <div
            className={`absolute bottom-10 flex gap-6 text-xs text-muted-foreground/40 transition-all duration-700 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: `${(navLinks.length + 1) * 60}ms` }}
          >
            <span>hello@webcipta.com</span>
            <span>·</span>
            <span>+62 812-3456-7890</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
