"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUpRight, Send, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "./text-reveal"

const footerLinks = {
  layanan: [
    { label: "Website Development", href: "#" },
    { label: "Mobile App Development", href: "#" },
    { label: "UI/UX Design", href: "#" },
    { label: "Performance Optimization", href: "#" },
    { label: "Maintenance & Support", href: "#" }
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Proses Kerja", href: "#proses" },
    { label: "Karir", href: "#" },
    { label: "Blog & Insights", href: "#" }
  ],
  resources: [
    { label: "Dokumentasi API", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ]
}

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    label: "Twitter/X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
      </svg>
    )
  }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border/30 bg-background">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <FadeIn className="py-20 border-b border-border/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Dapatkan Insight Terbaru
              </h3>
              <p className="text-muted-foreground text-lg">
                Tips, tren, dan best practices seputar web development dan digital product langsung ke inbox Anda.
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full h-14 px-5 rounded-xl bg-card/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-base"
                  />
                </div>
                <Button className="h-14 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-xl gap-2 font-medium">
                  Subscribe
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center lg:text-left">
                Bergabung dengan 5,000+ subscriber. Unsubscribe kapan saja.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Main Footer Content */}
        <div className="py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-emerald-500 shadow-lg shadow-primary/20">
                <span className="text-xl font-bold text-primary-foreground">W</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">
                  web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Digital agency yang berfokus pada pembuatan website dan aplikasi mobile berkualitas tinggi dengan UI/UX modern. Dari startup hingga enterprise.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a href="mailto:hello@webcipta.id" className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/40 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">Email</span>
                  <span className="block text-sm font-medium text-foreground">hello@webcipta.id</span>
                </div>
              </a>
              <a href="tel:+6281234567890" className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/40 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">WhatsApp</span>
                  <span className="block text-sm font-medium text-foreground">+62 812 3456 7890</span>
                </div>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/40">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">Lokasi</span>
                  <span className="block text-sm font-medium text-foreground">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Layanan</h4>
            <ul className="space-y-4">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Ikuti Kami</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Awards/Badges */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Penghargaan</p>
              <div className="flex gap-3">
                <div className="px-4 py-2 rounded-lg bg-card/50 border border-border/30 text-xs text-muted-foreground">
                  Awwwards SOTD
                </div>
                <div className="px-4 py-2 rounded-lg bg-card/50 border border-border/30 text-xs text-muted-foreground">
                  CSS Design
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} webCipta. Crafted with passion in Jakarta.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
