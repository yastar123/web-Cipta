import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Star, Clock, Shield } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"
const WA = "https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20dari%20Jakarta%20dan%20ingin%20konsultasi%20jasa%20pembuatan%20website."

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Jakarta Profesional Murah | webCipta",
  description:
    "Jasa pembuatan website di Jakarta profesional dan terpercaya. Harga mulai Rp 3 juta, proses 100% online. Website cepat, SEO-friendly, mobile-responsive. 150+ proyek selesai. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan website jakarta",
    "jasa website jakarta",
    "web developer jakarta",
    "jasa pembuatan website di jakarta",
    "jasa buat website jakarta",
    "digital agency jakarta",
    "jasa website jakarta murah",
    "jasa pembuatan website jakarta profesional",
    "jasa web jakarta",
    "jasa desain website jakarta",
    "jasa pembuatan aplikasi jakarta",
    "web development jakarta",
  ],
  alternates: { canonical: `${SITE_URL}/jakarta` },
  openGraph: {
    title: "Jasa Pembuatan Website Jakarta Profesional | webCipta",
    description: "Jasa pembuatan website di Jakarta mulai Rp 3 juta. Proses 100% online, cepat, SEO-friendly. 150+ proyek. Konsultasi gratis!",
    url: `${SITE_URL}/jakarta`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "webCipta — Jasa Pembuatan Website Jakarta",
      description: "Jasa pembuatan website profesional melayani klien Jakarta dan seluruh Jabodetabek secara online. Website cepat, SEO-friendly, harga transparan mulai Rp 3 juta.",
      url: SITE_URL,
      telephone: "+6285366195381",
      areaServed: [
        { "@type": "City", name: "Jakarta" },
        { "@type": "City", name: "Jakarta Selatan" },
        { "@type": "City", name: "Jakarta Barat" },
        { "@type": "City", name: "Jakarta Utara" },
        { "@type": "City", name: "Jakarta Timur" },
        { "@type": "City", name: "Jakarta Pusat" },
        { "@type": "AdministrativeArea", name: "Bodetabek" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "50", bestRating: "5" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Website Jakarta", item: `${SITE_URL}/jakarta` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Apakah webCipta bisa membuat website untuk klien di Jakarta?", acceptedAnswer: { "@type": "Answer", text: "Ya. webCipta melayani jasa pembuatan website untuk klien di seluruh Indonesia termasuk Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Proses kerja 100% online via WhatsApp, email, dan video call." } },
        { "@type": "Question", name: "Berapa harga jasa pembuatan website untuk bisnis Jakarta?", acceptedAnswer: { "@type": "Answer", text: "Harga mulai Rp 3 juta untuk landing page, Rp 5 juta untuk company profile, Rp 15 juta untuk toko online. Proposal harga transparan dalam 24 jam setelah konsultasi gratis." } },
      ],
    },
  ],
}

const services = [
  { title: "Website Company Profile", desc: "Wajah digital profesional untuk perusahaan atau startup Jakarta Anda.", price: "Mulai Rp 5 juta", href: "/jasa-pembuatan-company-profile" },
  { title: "Toko Online / E-Commerce", desc: "Platform jualan online lengkap dengan payment gateway dan manajemen stok.", price: "Mulai Rp 15 juta", href: "/jasa-pembuatan-toko-online" },
  { title: "Landing Page Iklan", desc: "Landing page high-converting untuk Google Ads, Facebook Ads, TikTok Ads.", price: "Mulai Rp 3 juta", href: "/jasa-landing-page" },
  { title: "Aplikasi Mobile", desc: "Aplikasi Android & iOS cross-platform menggunakan React Native atau Flutter.", price: "Mulai Rp 20 juta", href: "/jasa-pembuatan-aplikasi-mobile" },
  { title: "Bot & Otomasi", desc: "Bot Telegram, WhatsApp, Discord, web scraping, dan sistem otomasi bisnis.", price: "Mulai Rp 2 juta", href: "/jasa-pembuatan-bot" },
  { title: "Desain UI/UX", desc: "Wireframe, prototype Figma, dan design system untuk website atau aplikasi.", price: "Mulai Rp 3 juta", href: "/jasa-desain-ui-ux" },
]

export default function JakartaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background text-foreground">
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-emerald-500 shadow shadow-primary/30">
                <span className="text-xs font-black text-primary-foreground">W</span>
              </div>
              <span className="text-sm font-bold">web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span></span>
            </Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">Konsultasi Gratis</a>
          </div>
        </nav>

        <main>
          <section className="py-16 md:py-24 lg:py-28 px-4 sm:px-8 max-w-5xl mx-auto">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-foreground">Jakarta</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
              <MapPin className="h-3 w-3" /> Melayani Jakarta & Jabodetabek
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Website Jakarta</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>Profesional & Terpercaya</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              webCipta adalah <strong className="text-foreground">jasa pembuatan website di Jakarta</strong> yang melayani klien di seluruh Jabodetabek secara 100% online. Website cepat, SEO-friendly, dan mobile-responsive. 150+ proyek selesai, harga mulai <strong className="text-foreground">Rp 3 juta</strong>, konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis via WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat 150+ Portfolio
              </Link>
            </div>
          </section>

          <section className="py-8 bg-card/30 border-y border-border/15">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { icon: Star, val: "5.0/5.0", label: "Rating Klien" },
                { icon: CheckCircle2, val: "150+", label: "Proyek Selesai" },
                { icon: Clock, val: "24 Jam", label: "Respons Proposal" },
                { icon: Shield, val: "100%", label: "Proses Online" },
              ].map(({ icon: Icon, val, label }) => (
                <div key={label}>
                  <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="font-black text-foreground">{val}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Layanan Jasa Website Jakarta</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Solusi digital lengkap untuk bisnis Jakarta dari landing page hingga web app kompleks.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(svc => (
                <Link key={svc.title} href={svc.href} className="rounded-xl border border-border/20 bg-card/25 p-5 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm group-hover:text-primary transition-colors">{svc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{svc.desc}</p>
                  <span className="text-xs font-bold text-primary">{svc.price}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">Area yang Kami Layani di Jakarta & Sekitarnya</h2>
            <div className="flex flex-wrap gap-2">
              {["Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Timur", "Jakarta Pusat", "Bogor", "Depok", "Tangerang", "Tangerang Selatan", "Bekasi", "Serpong", "BSD", "Pondok Indah", "Kemang", "SCBD", "Sudirman", "Thamrin"].map(area => (
                <span key={area} className="px-3 py-1.5 rounded-full border border-border/20 bg-card/25 text-xs text-muted-foreground">{area}</span>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Bisnis Jakarta Siap Go Digital?</h2>
              <p className="text-muted-foreground text-sm mb-8">Konsultasi gratis via WhatsApp sekarang. Proposal + estimasi harga dalam 24 jam.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40 px-4">
          © 2025 webCipta — Jasa Pembuatan Website Jakarta & Jabodetabek
        </footer>
      </div>
    </>
  )
}
