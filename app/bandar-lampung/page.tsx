import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Star } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Bandar Lampung Profesional | webCipta",
  description:
    "Jasa pembuatan website profesional di Bandar Lampung — webCipta. Company profile, toko online, landing page, aplikasi mobile. Harga mulai Rp 3 juta, konsultasi gratis, pengerjaan cepat!",
  keywords: [
    "jasa pembuatan website bandar lampung",
    "jasa website bandar lampung",
    "web developer bandar lampung",
    "pembuatan website bandar lampung",
    "jasa buat website bandar lampung",
    "digital agency bandar lampung",
    "jasa it bandar lampung",
    "jasa pembuatan toko online bandar lampung",
    "website company profile bandar lampung",
  ],
  alternates: { canonical: `${SITE_URL}/bandar-lampung` },
  openGraph: {
    title: "Jasa Pembuatan Website Bandar Lampung Profesional | webCipta",
    description:
      "Jasa pembuatan website profesional di Bandar Lampung. Company profile, toko online, landing page. Harga mulai Rp 3 juta, konsultasi gratis.",
    url: `${SITE_URL}/bandar-lampung`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "webCipta — Jasa Pembuatan Website Bandar Lampung",
  description:
    "Jasa pembuatan website profesional di Bandar Lampung. Company profile, toko online, landing page, aplikasi mobile.",
  url: `${SITE_URL}/bandar-lampung`,
  telephone: "+6285366195381",
  email: "hello@webcipta.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandar Lampung",
    addressRegion: "Lampung",
    postalCode: "35141",
    addressCountry: "ID",
  },
  areaServed: { "@type": "City", name: "Bandar Lampung" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
  },
  priceRange: "Rp 3.000.000 - Rp 100.000.000+",
}

const packages = [
  {
    name: "Landing Page",
    price: "Mulai Rp 3 juta",
    duration: "3–7 hari",
    features: ["1 halaman responsif", "SEO on-page dasar", "Formulir kontak", "WhatsApp button", "Domain + hosting 1 tahun*"],
  },
  {
    name: "Company Profile",
    price: "Mulai Rp 5 juta",
    duration: "1–2 minggu",
    features: ["5–10 halaman", "Desain custom premium", "SEO lengkap", "CMS / admin panel", "Blog / berita", "Google Maps"],
  },
  {
    name: "Toko Online",
    price: "Mulai Rp 15 juta",
    duration: "3–6 minggu",
    features: ["Katalog produk unlimited", "Checkout & pembayaran digital", "Manajemen stok", "Laporan penjualan", "Integrasi pengiriman"],
  },
]

export default function BandarLampungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Nav */}
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-emerald-500 shadow shadow-primary/30">
                <span className="text-xs font-black text-primary-foreground">W</span>
              </div>
              <span className="text-sm font-bold">
                web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
              </span>
            </Link>
            <a
              href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20di%20Bandar%20Lampung."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Konsultasi Gratis
            </a>
          </div>
        </nav>

        <main>
          {/* Hero */}
          <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/lampung" className="hover:text-primary transition-colors">Lampung</Link>
              <span>/</span>
              <span className="text-foreground">Bandar Lampung</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
              <MapPin className="h-3 w-3" />
              Bandar Lampung, Lampung
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Website Bandar
              </span>
              <span className="block text-foreground">Lampung</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              webCipta adalah jasa pembuatan website profesional #1 di <strong className="text-foreground">Bandar Lampung</strong>.
              Kami membangun website company profile, toko online, landing page, dan aplikasi mobile yang cepat, modern, dan SEO-friendly.
              Harga mulai <strong className="text-foreground">Rp 3 juta</strong>, konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20di%20Bandar%20Lampung."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
              >
                Chat WhatsApp Sekarang
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground"
              >
                Lihat 150+ Portfolio
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-border/20">
              {[
                { value: "150+", label: "Proyek Selesai" },
                { value: "50+", label: "Klien Puas" },
                { value: "5 Thn", label: "Pengalaman" },
                { value: "24 Jam", label: "Respons Proposal" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Rating */}
          <section className="py-8 bg-card/30 border-y border-border/15">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center gap-4 justify-center text-center">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">5.0/5.0</strong> — jasa pembuatan website terpercaya di Bandar Lampung
              </p>
            </div>
          </section>

          {/* Packages */}
          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">
              Paket Jasa Pembuatan Website di Bandar Lampung
            </h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">
              Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {packages.map((pkg, i) => (
                <div key={pkg.name} className={`rounded-2xl border p-6 ${i === 1 ? "border-primary/40 bg-primary/5" : "border-border/20 bg-card/25"}`}>
                  {i === 1 && (
                    <span className="inline-block px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider mb-3">
                      Populer
                    </span>
                  )}
                  <h3 className="font-bold text-foreground text-lg mb-1">{pkg.name}</h3>
                  <p className="text-primary font-black text-xl mb-1">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mb-4">Selesai {pkg.duration}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20di%20Bandar%20Lampung."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                      i === 1
                        ? "bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90"
                        : "border border-border/30 hover:border-primary/40 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Mulai Sekarang
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">
                Mau Website Profesional di Bandar Lampung?
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Hubungi kami sekarang. Konsultasi gratis, proposal dalam 24 jam.
              </p>
              <a
                href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20di%20Bandar%20Lampung."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Chat WhatsApp 0853-6619-5381
              </a>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <a href="mailto:hello@webcipta.com" className="hover:text-primary transition-colors">hello@webcipta.com</a>
                <span>·</span>
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Bandar Lampung</span>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40 px-4">
          © 2025 webCipta — Jasa Pembuatan Website Bandar Lampung & Seluruh Indonesia
        </footer>
      </div>
    </>
  )
}
