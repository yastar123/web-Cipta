import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Star } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website di Lampung Terpercaya | webCipta",
  description:
    "webCipta — jasa pembuatan website profesional di Lampung. Melayani Bandar Lampung, Metro, Pringsewu, Pesawaran & seluruh Lampung. 150+ proyek selesai. Harga mulai Rp 3 juta. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan website di lampung",
    "jasa website lampung",
    "web developer lampung",
    "jasa buat website lampung",
    "pembuatan website lampung",
    "jasa website bandar lampung",
    "digital agency lampung",
    "jasa it lampung",
    "jasa pembuatan toko online lampung",
    "jasa pembuatan aplikasi mobile lampung",
  ],
  alternates: { canonical: `${SITE_URL}/lampung` },
  openGraph: {
    title: "Jasa Pembuatan Website di Lampung Terpercaya | webCipta",
    description:
      "Jasa pembuatan website profesional di Lampung — Bandar Lampung, Metro, Pringsewu & seluruh Lampung. 150+ proyek, harga transparan, konsultasi gratis.",
    url: `${SITE_URL}/lampung`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "webCipta Digital Agency Lampung",
  description:
    "Jasa pembuatan website profesional dan aplikasi mobile terpercaya di Lampung. Melayani Bandar Lampung, Metro, Pringsewu, Pesawaran, dan seluruh Lampung.",
  url: `${SITE_URL}/lampung`,
  telephone: "+6285366195381",
  email: "hello@webcipta.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandar Lampung",
    addressRegion: "Lampung",
    postalCode: "35141",
    addressCountry: "ID",
  },
  areaServed: [
    { "@type": "City", name: "Bandar Lampung" },
    { "@type": "City", name: "Metro" },
    { "@type": "City", name: "Pringsewu" },
    { "@type": "AdministrativeArea", name: "Lampung" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
  },
  priceRange: "Rp 3.000.000 - Rp 100.000.000+",
}

const services = [
  "Jasa Pembuatan Website Company Profile",
  "Jasa Pembuatan Toko Online / E-Commerce",
  "Jasa Pembuatan Landing Page",
  "Jasa Pembuatan Aplikasi Mobile (Android & iOS)",
  "Jasa Desain UI/UX Profesional",
  "Jasa SEO & Optimasi Performa Website",
  "Jasa Maintenance & Keamanan Website",
  "Konsultasi IT & Strategi Teknologi",
]

const cities = [
  "Bandar Lampung", "Metro", "Pringsewu", "Pesawaran",
  "Lampung Selatan", "Lampung Tengah", "Lampung Utara",
  "Lampung Timur", "Lampung Barat", "Tanggamus",
  "Tulang Bawang", "Way Kanan", "Mesuji", "Pesisir Barat",
]

const faqs = [
  {
    q: "Berapa biaya jasa pembuatan website di Lampung?",
    a: "Biaya jasa pembuatan website di Lampung mulai Rp 3 juta (landing page), Rp 5–15 juta (company profile), Rp 15–50 juta (toko online), hingga Rp 100 juta+ untuk sistem kompleks. Harga transparan, no hidden fee.",
  },
  {
    q: "Apakah webCipta melayani seluruh kabupaten/kota di Lampung?",
    a: "Ya. webCipta melayani jasa pembuatan website di seluruh wilayah Lampung — Bandar Lampung, Metro, Pringsewu, Pesawaran, Lampung Selatan, Lampung Tengah, Lampung Utara, Lampung Timur, dan semua kabupaten lainnya. Proses kerja bisa dilakukan 100% online.",
  },
  {
    q: "Berapa lama jasa pembuatan website di Lampung selesai?",
    a: "Landing page 3–7 hari, company profile 1–2 minggu, toko online 3–6 minggu, aplikasi mobile 2–4 bulan. Timeline pasti diberikan dalam proposal.",
  },
]

export default function LampungPage() {
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
              href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20di%20Lampung."
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
              <span className="text-foreground">Lampung</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
              <MapPin className="h-3 w-3" />
              Melayani Seluruh Lampung
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Website di Lampung
              </span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>
                Profesional & Terpercaya
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              webCipta adalah jasa pembuatan website profesional berbasis di <strong className="text-foreground">Bandar Lampung</strong> yang melayani seluruh wilayah Lampung dan Indonesia.
              150+ proyek selesai, 50+ klien puas, harga mulai <strong className="text-foreground">Rp 3 juta</strong>. Konsultasi gratis via WhatsApp!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20di%20Lampung."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
              >
                Konsultasi Gratis via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground"
              >
                Lihat Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-border/20">
              {[
                { value: "150+", label: "Proyek Selesai" },
                { value: "50+", label: "Klien Puas" },
                { value: "98%", label: "Tingkat Kepuasan" },
                { value: "5 Thn", label: "Pengalaman" },
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
            <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">5.0/5.0</strong> dari 50+ ulasan klien — jasa pembuatan website terpercaya di Lampung
              </p>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">
              Layanan Jasa Pembuatan Website di Lampung
            </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-xl">
              Solusi digital lengkap untuk bisnis dan organisasi Anda di Lampung.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-3 rounded-xl border border-border/20 bg-card/25 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Area */}
          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-2">
              Area Layanan Jasa Website di Lampung
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              webCipta melayani jasa pembuatan website di seluruh kabupaten dan kota di Provinsi Lampung.
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-border/25 bg-card/25 text-muted-foreground"
                >
                  {city}
                </span>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">
              FAQ Jasa Pembuatan Website di Lampung
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">
                Siap Buat Website Profesional di Lampung?
              </h2>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Hubungi webCipta sekarang. Konsultasi gratis, proposal dalam 24 jam, harga transparan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20di%20Lampung."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                >
                  Chat WhatsApp Sekarang
                </a>
                <a
                  href="mailto:hello@webcipta.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 transition-all text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  hello@webcipta.com
                </a>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>0853-6619-5381</span>
                <span>·</span>
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Bandar Lampung, Lampung</span>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40 px-4">
          © 2025 webCipta Digital Agency — Jasa Pembuatan Website Profesional di Lampung & Seluruh Indonesia
        </footer>
      </div>
    </>
  )
}
