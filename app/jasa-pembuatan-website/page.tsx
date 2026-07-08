import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Star, Clock, Shield, Zap } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional Murah | webCipta",
  description:
    "Jasa pembuatan website profesional terpercaya di Indonesia. Harga mulai Rp 3 juta. Website cepat, SEO-friendly, mobile-responsive. 150+ proyek selesai. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan website profesional",
    "jasa buat website",
    "jasa pembuatan website murah",
    "jasa pembuatan website company profile",
    "jasa pembuatan website perusahaan",
    "jasa pembuatan website seo friendly",
    "jasa pembuatan website indonesia",
    "buat website profesional",
    "harga jasa pembuatan website",
    "biaya pembuatan website",
    "jasa web developer",
    "jasa pembuatan web",
    "jasa web design",
  ],
  alternates: { canonical: `${SITE_URL}/jasa-pembuatan-website` },
  openGraph: {
    title: "Jasa Pembuatan Website Profesional Murah | webCipta",
    description: "Jasa pembuatan website profesional harga mulai Rp 3 juta. Cepat, SEO-friendly, mobile-responsive. 150+ proyek. Konsultasi gratis!",
    url: `${SITE_URL}/jasa-pembuatan-website`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/jasa-pembuatan-website/#service`,
      name: "Jasa Pembuatan Website Profesional",
      description: "Jasa pembuatan website profesional yang cepat, SEO-friendly, dan mobile-responsive. Melayani seluruh Indonesia dengan harga transparan mulai Rp 3 juta.",
      provider: { "@type": "LocalBusiness", name: "webCipta", url: SITE_URL },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: [
        { "@type": "Offer", name: "Landing Page", price: "3000000", priceCurrency: "IDR", description: "Landing page 1 halaman, SEO dasar, responsif, WhatsApp button" },
        { "@type": "Offer", name: "Company Profile", price: "5000000", priceCurrency: "IDR", description: "Website company profile 5-10 halaman, desain custom, SEO lengkap, CMS" },
        { "@type": "Offer", name: "Web App / Toko Online", price: "15000000", priceCurrency: "IDR", description: "Website toko online / web app dengan fitur lengkap, pembayaran digital, admin panel" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Pembuatan Website", item: `${SITE_URL}/jasa-pembuatan-website` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Berapa harga jasa pembuatan website profesional?", acceptedAnswer: { "@type": "Answer", text: "Harga jasa pembuatan website mulai Rp 3 juta untuk landing page, Rp 5-15 juta untuk company profile, Rp 15-50 juta untuk toko online, hingga Rp 100 juta+ untuk web app enterprise." } },
        { "@type": "Question", name: "Berapa lama jasa pembuatan website selesai?", acceptedAnswer: { "@type": "Answer", text: "Landing page 3-7 hari kerja, company profile 1-2 minggu, toko online 3-6 minggu, web app kompleks 2-4 bulan." } },
        { "@type": "Question", name: "Apakah website yang dibuat sudah SEO-friendly?", acceptedAnswer: { "@type": "Answer", text: "Ya. Setiap website kami bangun sudah dioptimasi SEO on-page — heading structure, meta tags, schema markup, sitemap, Core Web Vitals hijau, dan mobile-friendly." } },
      ],
    },
  ],
}

const packages = [
  {
    name: "Landing Page",
    price: "Rp 3 juta",
    duration: "3–7 hari",
    best: false,
    features: [
      "1 halaman responsif (mobile-friendly)",
      "Desain custom premium",
      "SEO on-page dasar",
      "Formulir kontak + WhatsApp button",
      "Loading super cepat (Core Web Vitals)",
      "Domain & hosting setup",
    ],
  },
  {
    name: "Company Profile",
    price: "Rp 5 juta",
    duration: "1–2 minggu",
    best: true,
    features: [
      "5–10 halaman lengkap",
      "Desain custom premium",
      "SEO lengkap (on-page + schema)",
      "CMS / panel admin",
      "Blog / halaman berita",
      "Google Maps & Analytics",
      "Garansi revisi bebas",
    ],
  },
  {
    name: "Web App / Custom",
    price: "Rp 15 juta+",
    duration: "3–8 minggu",
    best: false,
    features: [
      "Fitur custom sesuai kebutuhan",
      "Database & backend",
      "Sistem login & hak akses",
      "Dashboard & laporan",
      "API integration",
      "Skalabel & secure",
    ],
  },
]

const faqs = [
  { q: "Berapa biaya jasa pembuatan website profesional?", a: "Mulai Rp 3 juta untuk landing page, Rp 5–15 juta untuk company profile, Rp 15–50 juta untuk toko online, hingga Rp 100 juta+ untuk sistem enterprise. Proposal harga transparan dalam 24 jam setelah konsultasi gratis." },
  { q: "Teknologi apa yang digunakan untuk membuat website?", a: "Next.js 15, React 19, TypeScript, Node.js, TailwindCSS — teknologi terdepan yang menghasilkan website cepat, SEO-friendly, dan scalable." },
  { q: "Apakah ada garansi setelah website selesai?", a: "Ya. Garansi revisi selama pengerjaan, garansi bug-fix gratis 30 hari setelah live, dan opsi paket maintenance bulanan." },
  { q: "Apakah bisa membuat website untuk bisnis di luar Lampung?", a: "Ya. webCipta melayani jasa pembuatan website untuk seluruh Indonesia. Proses kerja 100% online via WhatsApp, email, dan video call." },
]

export default function JasaPembuatanWebsitePage() {
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
            <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">
              Konsultasi Gratis
            </a>
          </div>
        </nav>

        <main>
          {/* Hero */}
          <section className="py-16 md:py-24 lg:py-28 px-4 sm:px-8 max-w-5xl mx-auto">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-foreground">Jasa Pembuatan Website</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-6">
              {["⭐ Rating 5.0/5.0", "150+ Proyek", "Harga Transparan"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">{t}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Website</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>Profesional & Terpercaya</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              webCipta adalah <strong className="text-foreground">jasa pembuatan website profesional</strong> terpercaya di Indonesia. Kami membangun website cepat, SEO-friendly, dan mobile-responsive menggunakan teknologi terdepan. Harga mulai <strong className="text-foreground">Rp 3 juta</strong>, konsultasi gratis, proposal 24 jam!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis via WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat 150+ Portfolio
              </Link>
            </div>
          </section>

          {/* Trust signals */}
          <section className="py-8 bg-card/30 border-y border-border/15">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { icon: Star, val: "5.0/5.0", label: "Rating Klien" },
                { icon: CheckCircle2, val: "150+", label: "Proyek Selesai" },
                { icon: Clock, val: "24 Jam", label: "Respons Proposal" },
                { icon: Shield, val: "30 Hari", label: "Garansi Bug-fix" },
              ].map(({ icon: Icon, val, label }) => (
                <div key={label}>
                  <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="font-black text-foreground">{val}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Packages */}
          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">
              Harga Jasa Pembuatan Website
            </h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Harga transparan, tidak ada biaya tersembunyi. Pilih paket sesuai kebutuhan bisnis Anda.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {packages.map((pkg, i) => (
                <div key={pkg.name} className={`rounded-2xl border p-6 flex flex-col ${pkg.best ? "border-primary/40 bg-primary/5 relative" : "border-border/20 bg-card/25"}`}>
                  {pkg.best && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide">Paling Populer</span>}
                  <h3 className="font-bold text-foreground text-lg mb-1">{pkg.name}</h3>
                  <p className="text-primary font-black text-2xl mb-1">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mb-5">Estimasi selesai {pkg.duration}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website." target="_blank" rel="noopener noreferrer" className={`block text-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${pkg.best ? "bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90" : "border border-border/30 hover:border-primary/40 text-muted-foreground hover:text-foreground"}`}>
                    Mulai Sekarang
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">
              Kenapa Pilih Jasa Pembuatan Website webCipta?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Zap, title: "Website Super Cepat", desc: "Core Web Vitals hijau, Lighthouse score 90+, loading <2 detik untuk konversi optimal." },
                { icon: Star, title: "SEO-Friendly", desc: "Struktur heading benar, schema markup, sitemap, meta tags — siap ranking di Google." },
                { icon: CheckCircle2, title: "Mobile-Responsive", desc: "Tampilan sempurna di semua ukuran layar — HP, tablet, laptop, hingga desktop." },
                { icon: Shield, title: "Aman & Terpercaya", desc: "SSL gratis, proteksi dari serangan, backup otomatis, monitoring 24/7." },
                { icon: Clock, title: "Tepat Waktu", desc: "Timeline jelas di proposal, proses kerja transparan, notifikasi progress setiap hari." },
                { icon: ArrowRight, title: "Harga Transparan", desc: "No hidden fee. Harga final di proposal, tidak berubah kecuali ada tambahan fitur dari klien." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">FAQ Jasa Pembuatan Website</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.q} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{faq.q}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section className="py-10 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-lg font-bold mb-4 text-foreground">Layanan Lainnya</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Jasa Pembuatan Toko Online", href: "/jasa-pembuatan-toko-online" },
                { label: "Jasa Pembuatan Aplikasi Mobile", href: "/jasa-pembuatan-aplikasi-mobile" },
                { label: "Jasa Website di Lampung", href: "/lampung" },
                { label: "Jasa Website Bandar Lampung", href: "/bandar-lampung" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-border/25 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Siap Buat Website Profesional?</h2>
              <p className="text-muted-foreground text-sm mb-8">Konsultasi gratis sekarang. Proposal detail + estimasi harga dalam 24 jam.</p>
              <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40 px-4">
          © 2025 webCipta — Jasa Pembuatan Website Profesional di Indonesia
        </footer>
      </div>
    </>
  )
}
