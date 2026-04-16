"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "./magnetic-button"

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
      
      // Update active section
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
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "py-4" : "py-6"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex h-16 lg:h-18 items-center justify-between px-6 lg:px-8 rounded-2xl transition-all duration-700 ${
            scrolled 
              ? "bg-background/60 backdrop-blur-2xl border border-border/30 shadow-2xl shadow-background/20" 
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 relative z-10">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-emerald-500 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all group-hover:scale-105 overflow-hidden">
              <span className="text-xl font-bold text-primary-foreground relative z-10">W</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none tracking-tight">
                web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-0.5">Digital Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-card/40 backdrop-blur-xl rounded-full px-2 py-1.5 border border-border/20">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-500 overflow-hidden ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 -z-10 animate-in fade-in duration-300" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <MagneticButton strength={0.2}>
              <Button 
                className="group relative bg-foreground text-background hover:bg-foreground gap-2 rounded-full px-7 h-12 font-medium overflow-hidden transition-all hover:scale-105 shadow-lg shadow-foreground/10"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative flex h-12 w-12 items-center justify-center rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-foreground transform transition-all duration-500 ease-out ${isOpen ? "top-2.5 rotate-45" : "top-1"}`} />
              <span className={`absolute left-0 top-2.5 block h-0.5 bg-foreground transform transition-all duration-500 ease-out ${isOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-foreground transform transition-all duration-500 ease-out ${isOpen ? "top-2.5 -rotate-45" : "top-4"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/98 backdrop-blur-3xl"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative h-full flex flex-col items-center justify-center gap-4 p-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-5xl sm:text-6xl font-bold transition-all duration-700 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                } ${activeSection === link.href.replace("#", "") ? "text-primary" : "text-foreground hover:text-primary"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div 
              className={`mt-8 transition-all duration-700 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${navLinks.length * 80}ms` }}
            >
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full px-12 h-16 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Gratis
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Contact Info in Mobile Menu */}
            <div 
              className={`absolute bottom-12 left-0 right-0 flex justify-center gap-8 text-sm text-muted-foreground transition-all duration-700 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(navLinks.length + 1) * 80}ms` }}
            >
              <span>hello@webcipta.id</span>
              <span>+62 812 3456 7890</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
