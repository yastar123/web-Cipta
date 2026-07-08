import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Target, Zap, MousePointer } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"
const WA = "https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20landing%20page."

export const metadata: Metadata = {
  title: "Jasa Pembuatan Landing Page Profesional High-Converting | webCipta",
  description:
    "Jasa pembuatan landing page profesional high-converting di Indonesia. Desain persuasif, CRO-optimized, loading super cepat. Harga mulai Rp 3 juta. Tingkatkan konversi iklan Anda. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan landing page",
    "jasa landing page",
    "jasa buat landing page",
    "jasa landing page profesional",
    "jasa landing page murah",
    "jasa landing page high converting",
    "jasa pembuatan landing page indonesia",
    "jasa landing page iklan google",
    "jasa landing page facebook ads",
    "harga jasa pembuatan landing page",
    "biaya landing page",
    "jasa landing page untuk iklan",
    "jasa web landing page",
  ],
  alternates: { canonical: `${SITE_URL}/jasa-landing-page` },
  openGraph: {
    title: "Jasa Pembuatan Landing Page High-Converting | webCipta",
    description: "Landing page profesional yang mengkonversi pengunjung iklan jadi pelanggan. Mulai Rp 3 juta. Konsultasi gratis!",
    url: `${SITE_URL}/jasa-landing-page`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Pembuatan Landing Page Profesional",
      description: "Jasa pembuatan landing page high-converting untuk iklan Google Ads, Facebook Ads, TikTok Ads. Desain persuasif, CRO-optimized, loading cepat.",
      provider: { "@type": "LocalBusiness", name: "webCipta", url: SITE_URL },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: { "@type": "Offer", price: "3000000", priceCurrency: "IDR", description: "Landing page mulai Rp 3 juta" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Pembuatan Website", item: `${SITE_URL}/jasa-pembuatan-website` },
        { "@type": "ListItem", position: 3, name: "Jasa Landing Page", item: `${SITE_URL}/jasa-landing-page` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Berapa harga jasa pembuatan landing page?", acceptedAnswer: { "@type": "Answer", text: "Harga jasa pembuatan landing page mulai Rp 3 juta untuk landing page dasar 1 halaman, Rp 5–8 juta untuk landing page premium dengan A/B testing, countdown timer, dan integrasi CRM." } },
        { "@type": "Question", name: "Berapa lama landing page selesai dibuat?", acceptedAnswer: { "@type": "Answer", text: "Landing page standar selesai dalam 3–7 hari kerja. Landing page premium dengan fitur kompleks 1–2 minggu." } },
      ],
    },
  ],
}

const features = [
  { icon: Target, title: "CRO-Optimized Design", desc: "Setiap elemen dirancang untuk memaksimalkan konversi — headline kuat, CTA menonjol, social proof, dan flow yang memandu pengunjung." },
  { icon: Zap, title: "Loading Super Cepat", desc: "Lighthouse score 90+, loading <2 detik. Setiap detik delay = 7% penurunan konversi. Landing page kami dioptimasi untuk kecepatan maksimal." },
  { icon: MousePointer, title: "Mobile-First", desc: "70%+ traffic iklan datang dari HP. Landing page kami didesain mobile-first sehingga konversi optimal di semua perangkat." },
  { icon: TrendingUp, title: "Tracking & Analitik", desc: "Integrasi Google Tag Manager, Facebook Pixel, TikTok Pixel, dan Google Analytics — lacak setiap konversi dan optimasi iklan Anda." },
  { icon: CheckCircle2, title: "A/B Testing Ready", desc: "Struktur yang memudahkan A/B testing — uji headline, CTA, dan gambar untuk menemukan kombinasi dengan konversi tertinggi." },
  { icon: ArrowRight, title: "Integrasi Form & CRM", desc: "Form dengan validasi, integrasi WhatsApp/Telegram notifikasi, dan koneksi ke CRM pilihan Anda (HubSpot, Zoho, Bitrix24)." },
]

export default function JasaLandingPagePage() {
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
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/jasa-pembuatan-website" className="hover:text-primary transition-colors">Jasa Website</Link>
              <span>/</span>
              <span className="text-foreground">Landing Page</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-6">
              {["⚡ Loading <2 Detik", "📈 High-Converting", "📱 Mobile-First"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">{t}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Landing Page</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>High-Converting & Profesional</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Ubah pengunjung iklan jadi pelanggan dengan <strong className="text-foreground">landing page high-converting</strong> dari webCipta. Desain persuasif, loading <strong className="text-foreground">&lt;2 detik</strong>, mobile-first, dan dioptimasi untuk Google Ads, Facebook Ads, dan TikTok Ads. Harga mulai <strong className="text-foreground">Rp 3 juta</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat Contoh Landing Page
              </Link>
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Kenapa Landing Page webCipta Mengkonversi?</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Setiap elemen dioptimasi berdasarkan prinsip CRO (Conversion Rate Optimization) yang telah terbukti.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Paket Harga Landing Page</h2>
            <p className="text-muted-foreground text-sm mb-10">Pilih paket sesuai kebutuhan iklan Anda.</p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { name: "Landing Page Standar", price: "Rp 3 juta", duration: "3–7 hari", features: ["1 halaman penuh", "Desain custom", "Form + WA notifikasi", "Google Analytics", "Mobile-responsive", "Loading cepat"], best: false },
                { name: "Landing Page Premium", price: "Rp 7 juta", duration: "1–2 minggu", features: ["1 halaman + thank you page", "Desain premium + animasi", "Countdown timer", "A/B testing ready", "Pixel tracking lengkap", "CRM integration", "Garansi revisi"], best: true },
              ].map(pkg => (
                <div key={pkg.name} className={`rounded-2xl border p-6 flex flex-col relative ${pkg.best ? "border-primary/40 bg-primary/5" : "border-border/20 bg-card/25"}`}>
                  {pkg.best && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide">Direkomendasikan</span>}
                  <h3 className="font-bold text-foreground text-lg mb-1">{pkg.name}</h3>
                  <p className="text-primary font-black text-2xl mb-1">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mb-5">Selesai {pkg.duration}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className={`block text-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${pkg.best ? "bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90" : "border border-border/30 hover:border-primary/40 text-muted-foreground hover:text-foreground"}`}>
                    Mulai Sekarang
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="py-10 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-lg font-bold mb-4">Layanan Lainnya</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website" },
                { label: "Jasa Company Profile", href: "/jasa-pembuatan-company-profile" },
                { label: "Jasa Toko Online", href: "/jasa-pembuatan-toko-online" },
                { label: "Jasa Desain UI/UX", href: "/jasa-desain-ui-ux" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-border/25 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">{l.label}</Link>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Siap Tingkatkan Konversi Iklan Anda?</h2>
              <p className="text-muted-foreground text-sm mb-8">Konsultasi gratis. Kami analisis kebutuhan iklan Anda dan rekomendasikan strategi landing page terbaik.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>
        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40">© 2025 webCipta — Jasa Pembuatan Landing Page High-Converting di Indonesia</footer>
      </div>
    </>
  )
}
