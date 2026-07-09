"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Send, ArrowUp, Facebook } from "lucide-react"
import { FadeIn } from "./text-reveal"
import { useState } from "react"

const footerLinks = {
  layanan: [
    { label: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website" },
    { label: "Jasa Toko Online", href: "/jasa-pembuatan-toko-online" },
    { label: "Jasa Aplikasi Mobile", href: "/jasa-pembuatan-aplikasi-mobile" },
    { label: "Jasa Pembuatan Bot", href: "/jasa-pembuatan-bot" },
    { label: "Jasa Company Profile", href: "/jasa-pembuatan-company-profile" },
    { label: "Jasa Landing Page", href: "/jasa-landing-page" },
    { label: "Jasa Desain UI/UX", href: "/jasa-desain-ui-ux" },
  ],
  perusahaan: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog & Tips", href: "/blog" },
    { label: "Proses Kerja", href: "#proses" },
    { label: "Testimoni", href: "#testimonial" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ],
}

const techStack = ["Next.js & React", "React Native", "Flutter", "Node.js", "Cloud & DevOps"]

const socials = [
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581944171394" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="relative border-t border-border/15 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Top: brand + newsletter */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16 border-b border-border/15">
          {/* Brand */}
          <FadeIn>
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-500 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all group-hover:scale-105">
                <span className="text-sm font-black text-primary-foreground">W</span>
              </div>
              <div>
                <span className="text-base font-bold text-foreground">
                  web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
                </span>
                <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-muted-foreground/40">Digital Agency</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              <strong className="text-foreground/70">Jasa pembuatan website profesional</strong> di Bandar Lampung &amp; seluruh Indonesia. Website cepat, SEO-friendly, dan memberikan hasil nyata untuk bisnis Anda.
            </p>
            <div className="space-y-2.5 mb-6">
              {[
                { icon: Mail, text: "hello@webcipta.com", href: "mailto:hello@webcipta.com" },
                { icon: Phone, text: "0853-6619-5381", href: "https://wa.me/6285366195381" },
                { icon: MapPin, text: "Jatimulyo, Kec. Jati Agung, Lampung Selatan, Lampung" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-3 w-3 text-primary flex-shrink-0" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">{item.text}</a>
                  ) : (
                    <span className="text-xs text-muted-foreground">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Newsletter */}
          <FadeIn delay={100}>
            <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <h3 className="text-sm font-semibold text-foreground mb-1">Tetap Terupdate</h3>
              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                Dapatkan tips, tren tech terbaru, dan case study eksklusif langsung ke inbox Anda.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <Send className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Berhasil berlangganan!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Anda"
                    required
                    className="flex-1 rounded-xl bg-background/70 border border-border/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all hover:border-border/50"
                  />
                  <button
                    type="submit"
                    className="relative flex-shrink-0 h-[42px] px-4 rounded-xl overflow-hidden hover:scale-105 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500" />
                    <Send className="relative h-3.5 w-3.5 text-primary-foreground" />
                  </button>
                </form>
              )}
              <p className="text-[10px] text-muted-foreground/40 mt-3">No spam, unsubscribe kapan saja.</p>
            </div>
          </FadeIn>
        </div>

        {/* Links grid */}
        <div className="py-10 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-8 border-b border-border/15">
          {Object.entries(footerLinks).map(([title, links], i) => (
            <FadeIn key={title} delay={i * 60}>
              <div>
                <h4 className="text-[10px] font-bold text-foreground/70 uppercase tracking-[0.2em] mb-4">
                  {title === "layanan" ? "Layanan" : "Perusahaan"}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group text-xs text-muted-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={120}>
            <div>
              <h4 className="text-[10px] font-bold text-foreground/70 uppercase tracking-[0.2em] mb-4">
                Teknologi
              </h4>
              <ul className="space-y-2.5">
                {techStack.map((tech) => (
                  <li key={tech} className="text-xs text-muted-foreground/60">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground/35 order-2 sm:order-1">
            © 2025 webCipta — Jasa Pembuatan Website Profesional di Lampung &amp; Indonesia.{" "}
            <Link href="/jasa-pembuatan-website" className="hover:text-muted-foreground/60 transition-colors">Jasa Website</Link>
            {" · "}
            <Link href="/jasa-pembuatan-toko-online" className="hover:text-muted-foreground/60 transition-colors">Toko Online</Link>
            {" · "}
            <Link href="/lampung" className="hover:text-muted-foreground/60 transition-colors">Lampung</Link>
            {" · "}
            <Link href="/bandar-lampung" className="hover:text-muted-foreground/60 transition-colors">Bandar Lampung</Link>
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/20 bg-card/30 text-muted-foreground/50 hover:text-foreground hover:border-border/50 hover:bg-card/60 transition-all duration-300 hover:scale-105"
              >
                <s.icon className="h-3.5 w-3.5" />
              </a>
            ))}
            <div className="w-px h-5 bg-border/30 mx-1" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/20 bg-card/30 text-muted-foreground/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
