"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUpRight, Send, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "./text-reveal"
import { useState } from "react"

const footerLinks = {
  layanan: [
    { label: "Website Development", href: "#" },
    { label: "Mobile App", href: "#" },
    { label: "UI/UX Design", href: "#" },
    { label: "Performance Optimization", href: "#" },
    { label: "IT Consultation", href: "#" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog & Artikel", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Kontak", href: "#kontak" },
  ],
  teknologi: [
    { label: "Next.js & React", href: "#" },
    { label: "React Native", href: "#" },
    { label: "Flutter", href: "#" },
    { label: "Node.js", href: "#" },
    { label: "Cloud & DevOps", href: "#" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="relative border-t border-border/15 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top: brand + newsletter */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16 border-b border-border/15">
          {/* Brand */}
          <FadeIn>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-500 shadow-md shadow-primary/20">
                <span className="text-sm font-black text-primary-foreground">W</span>
              </div>
              <div>
                <span className="text-base font-bold text-foreground">
                  web<span className="text-primary">Cipta</span>
                </span>
                <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-muted-foreground/50">Digital Agency</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-5">
              Kami membangun produk digital yang tidak hanya tampak indah, tetapi juga memberikan hasil nyata untuk bisnis Anda.
            </p>
            <div className="space-y-2">
              {[
                { icon: Mail, text: "hello@webcipta.com" },
                { icon: Phone, text: "+62 812-3456-7890" },
                { icon: MapPin, text: "Jakarta, Indonesia" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <item.icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Newsletter */}
          <FadeIn delay={100}>
            <div className="rounded-2xl border border-border/20 bg-card/20 p-6">
              <h3 className="text-sm font-semibold text-foreground mb-1">Tetap Terupdate</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Dapatkan tips, tren tech terbaru, dan case study eksklusif langsung ke inbox Anda.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 py-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="h-3 w-3 text-primary" />
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
                    className="flex-1 rounded-xl bg-background/50 border border-border/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                  <Button type="submit" size="sm" className="bg-foreground text-background hover:bg-foreground/90 h-[42px] px-4 rounded-xl text-xs flex-shrink-0">
                    <Send className="h-3.5 w-3.5" />
                  </Button>
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
                <h4 className="text-[10px] font-bold text-foreground uppercase tracking-[0.2em] mb-4">
                  {title === "layanan" ? "Layanan" : title === "perusahaan" ? "Perusahaan" : "Teknologi"}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-px left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground/40 order-2 sm:order-1">
            © 2024 webCipta. Semua hak dilindungi.{" "}
            <Link href="#" className="hover:text-muted-foreground/70 transition-colors">Kebijakan Privasi</Link>
            {" · "}
            <Link href="#" className="hover:text-muted-foreground/70 transition-colors">Syarat & Ketentuan</Link>
          </p>
          <div className="flex items-center gap-4 order-1 sm:order-2">
            {["Instagram", "LinkedIn", "GitHub", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[11px] font-medium text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors flex items-center gap-0.5"
              >
                {social}
                <ArrowUpRight className="h-2.5 w-2.5" />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/30 hover:bg-card/60 hover:border-border/60 transition-all ml-2"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
