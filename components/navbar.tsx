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

      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(s)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      {/* Main nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-6xl mt-3 mx-4 sm:mx-6 lg:mx-auto rounded-2xl bg-background/85 backdrop-blur-2xl border border-border/25 shadow-2xl shadow-black/40"
              : "max-w-none bg-background/40 backdrop-blur-md border-b border-border/10"
          }`}
        >
          <div className="flex h-[60px] items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 relative z-10 flex-shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-emerald-500 shadow-lg shadow-primary/30 group-hover:shadow-primary/60 transition-all duration-300 group-hover:scale-110">
                <span className="text-xs font-black text-primary-foreground">W</span>
              </div>
              <div>
                <span className="text-sm font-black text-foreground tracking-tight">
                  web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
                </span>
                <div className="text-[8px] text-muted-foreground/35 uppercase tracking-[0.22em] leading-none mt-0.5">
                  Digital Agency
                </div>
              </div>
            </Link>

            {/* Desktop nav — centered */}
            <div className="hidden lg:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-2.5 text-xs font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
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
                href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20gratis."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1.5 rounded-full px-5 h-9 text-xs font-bold overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 bg-[length:200%_100%] animate-[gradientMove_5s_ease-in-out_infinite]" />
                <span className="relative text-primary-foreground">Konsultasi Gratis</span>
                <ArrowUpRight className="relative h-3.5 w-3.5 text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden relative z-10 flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                isOpen
                  ? "border border-primary/30 bg-primary/10"
                  : "border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/25 hover:bg-card"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              >
                <X className="h-4 w-4 text-primary" />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                }`}
              >
                <Menu className="h-4 w-4 text-foreground" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay — separate from nav so it can be z-[55] */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-3xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/4 rounded-full blur-[100px] pointer-events-none" />

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Spacer for nav bar height */}
          <div className="h-[60px] flex-shrink-0" />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-6" />

          {/* Nav links — vertically centered in remaining space */}
          <div className="flex-1 flex flex-col items-start justify-center px-8 py-8 gap-2 min-h-0">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group flex items-center gap-3 w-full py-3 transition-all duration-500 ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${80 + i * 55}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  <span
                    className={`text-[11px] font-bold tracking-widest flex-shrink-0 w-6 transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-muted-foreground/30"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`font-black tracking-tight transition-all duration-300 group-hover:translate-x-1 ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent"
                        : "text-foreground/80 group-hover:text-foreground"
                    }`}
                    style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
                  >
                    {link.label}
                  </span>
                  <ArrowUpRight
                    className={`ml-auto h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                      isActive ? "text-primary opacity-100" : "text-muted-foreground/20 group-hover:text-muted-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Bottom area */}
          <div
            className={`px-8 pb-10 flex flex-col gap-5 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${80 + navLinks.length * 55 + 40}ms` }}
          >
            <div className="h-px bg-border/15" />
            <a
              href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-2xl h-13 px-8 text-sm font-bold overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/20"
              style={{ height: 52 }}
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-500" />
              <span className="relative text-primary-foreground">Konsultasi Gratis</span>
              <ArrowUpRight className="relative h-4 w-4 text-primary-foreground" />
            </a>
            <div className="flex items-center justify-between text-[11px] text-muted-foreground/40">
              <span>hello@webcipta.com</span>
              <span>0853-6619-5381</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
