import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Building2, Globe, Star, Search } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"
const WA = "https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20company%20profile."

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Company Profile Profesional | webCipta",
  description:
    "Jasa pembuatan website company profile profesional di Indonesia. Desain elegan, SEO optimal, harga mulai Rp 5 juta. Representasikan perusahaan Anda secara digital dengan website yang berkesan. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan website company profile",
    "jasa website company profile",
    "jasa pembuatan company profile website",
    "jasa website perusahaan",
    "jasa pembuatan website perusahaan profesional",
    "biaya pembuatan website company profile",
    "harga website company profile",
    "jasa company profile",
    "jasa pembuatan website profil perusahaan",
    "jasa website company profile murah",
    "website company profile profesional",
    "jasa pembuatan website company profile indonesia",
    "jasa pembuatan web company profile lampung",
  ],
  alternates: { canonical: `${SITE_URL}/jasa-pembuatan-company-profile` },
  openGraph: {
    title: "Jasa Pembuatan Website Company Profile Profesional | webCipta",
    description: "Website company profile profesional harga mulai Rp 5 juta. Desain elegan, SEO optimal, CMS. Konsultasi gratis!",
    url: `${SITE_URL}/jasa-pembuatan-company-profile`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Pembuatan Website Company Profile",
      description: "Jasa pembuatan website company profile profesional — representasikan perusahaan Anda secara digital dengan desain elegan, SEO optimal, dan CMS mudah dikelola.",
      provider: { "@type": "LocalBusiness", name: "webCipta", url: SITE_URL },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: { "@type": "Offer", price: "5000000", priceCurrency: "IDR", description: "Website company profile mulai Rp 5 juta" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Pembuatan Website", item: `${SITE_URL}/jasa-pembuatan-website` },
        { "@type": "ListItem", position: 3, name: "Jasa Company Profile", item: `${SITE_URL}/jasa-pembuatan-company-profile` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Berapa harga jasa pembuatan website company profile?", acceptedAnswer: { "@type": "Answer", text: "Harga jasa pembuatan website company profile mulai Rp 5 juta untuk desain standar 5–8 halaman, Rp 8–15 juta untuk desain premium dengan animasi dan fitur lengkap." } },
        { "@type": "Question", name: "Apa saja yang ada di website company profile?", acceptedAnswer: { "@type": "Answer", text: "Halaman Beranda (tentang perusahaan & tagline), Tentang Kami, Layanan/Produk, Portfolio/Proyek, Tim, Testimoni Klien, Berita/Blog, dan Kontak. Semuanya bisa dikustomisasi sesuai kebutuhan." } },
      ],
    },
  ],
}

const sections = [
  { icon: Building2, title: "Tentang Kami yang Berkesan", desc: "Ceritakan visi, misi, sejarah, dan nilai perusahaan dengan narasi yang menarik dan visual yang profesional." },
  { icon: Globe, title: "Showcase Layanan & Produk", desc: "Tampilkan portfolio dan layanan perusahaan Anda dengan galeri foto HD, deskripsi detail, dan struktur yang jelas." },
  { icon: Star, title: "Testimoni & Klien", desc: "Bangun kepercayaan calon klien dengan testimoni pelanggan nyata, logo klien, dan statistik pencapaian." },
  { icon: Search, title: "SEO Optimal untuk Ditemukan", desc: "Website dioptimasi agar muncul di halaman pertama Google saat calon klien mencari bisnis atau layanan Anda." },
  { icon: CheckCircle2, title: "CMS Mudah Dikelola", desc: "Edit konten, tambah artikel blog, dan update portofolio sendiri tanpa perlu keahlian teknis — via panel admin." },
  { icon: ArrowRight, title: "Responsif di Semua Perangkat", desc: "Tampilan sempurna di HP, tablet, dan desktop. Kesan profesional dari layar apa pun." },
]

const packages = [
  { name: "Standar", price: "Rp 5 juta", duration: "1–2 minggu", features: ["5–8 halaman", "Desain custom", "SEO dasar", "Formulir kontak", "Mobile-responsive", "Google Analytics"] },
  { name: "Premium", price: "Rp 10 juta", duration: "2–3 minggu", best: true, features: ["10–15 halaman", "Desain premium + animasi", "SEO lengkap + schema", "CMS / panel admin", "Blog & berita", "Multi-bahasa (ID + EN)", "Garansi revisi bebas"] },
  { name: "Enterprise", price: "Rp 20 juta+", duration: "3–5 minggu", features: ["Halaman tak terbatas", "Desain & fitur custom", "Sistem multi-user", "Integrasi CRM/ERP", "Laporan & analitik", "Support prioritas"] },
]

const faqs = [
  { q: "Berapa biaya pembuatan website company profile profesional?", a: "Mulai Rp 5 juta untuk 5–8 halaman desain standar, Rp 10 juta untuk desain premium dengan animasi dan CMS, Rp 20 juta+ untuk enterprise dengan integrasi sistem. Harga final setelah konsultasi gratis." },
  { q: "Apa saja halaman yang ada di website company profile?", a: "Beranda, Tentang Kami, Layanan/Produk, Portfolio, Tim, Testimoni Klien, Berita/Blog, dan Kontak. Semua halaman bisa dikustomisasi sesuai kebutuhan dan branding perusahaan Anda." },
  { q: "Apakah website company profile bisa diupdate sendiri?", a: "Ya. Paket Premium dan Enterprise dilengkapi CMS (Content Management System) sehingga Anda bisa tambah/edit konten, upload foto, dan tulis artikel blog tanpa keahlian teknis." },
  { q: "Berapa lama proses pembuatan website company profile?", a: "Paket Standar 1–2 minggu, Paket Premium 2–3 minggu, Enterprise 3–5 minggu. Timeline pasti tercantum dalam proposal." },
]

export default function JasaPembuatanCompanyProfilePage() {
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
              <span className="text-foreground">Company Profile</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Website Company</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>Profile Profesional</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Wujudkan kehadiran digital perusahaan Anda dengan <strong className="text-foreground">website company profile profesional</strong> yang elegan dan meyakinkan. webCipta menghadirkan desain premium, SEO optimal, dan CMS mudah dikelola. Harga mulai <strong className="text-foreground">Rp 5 juta</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat Contoh Company Profile
              </Link>
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Apa yang Ada di Website Company Profile Kami</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Setiap detail dirancang untuk membangun kepercayaan dan mengkonversi pengunjung menjadi klien.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Paket Harga Website Company Profile</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Pilih paket sesuai skala dan kebutuhan perusahaan Anda.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {packages.map(pkg => (
                <div key={pkg.name} className={`rounded-2xl border p-6 flex flex-col relative ${(pkg as any).best ? "border-primary/40 bg-primary/5" : "border-border/20 bg-card/25"}`}>
                  {(pkg as any).best && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide">Paling Populer</span>}
                  <h3 className="font-bold text-foreground text-lg mb-1">{pkg.name}</h3>
                  <p className="text-primary font-black text-2xl mb-1">{pkg.price}</p>
                  <p className="text-xs text-muted-foreground mb-5">Estimasi {pkg.duration}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className={`block text-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${(pkg as any).best ? "bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90" : "border border-border/30 hover:border-primary/40 text-muted-foreground hover:text-foreground"}`}>
                    Mulai Sekarang
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">FAQ Jasa Website Company Profile</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.q} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{faq.q}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-10 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-lg font-bold mb-4">Layanan Lainnya</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website" },
                { label: "Jasa Landing Page", href: "/jasa-landing-page" },
                { label: "Jasa Toko Online", href: "/jasa-pembuatan-toko-online" },
                { label: "Jasa Desain UI/UX", href: "/jasa-desain-ui-ux" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-border/25 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">{l.label}</Link>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Siap Punya Website Company Profile?</h2>
              <p className="text-muted-foreground text-sm mb-8">Konsultasi gratis, proposal harga dalam 24 jam, desain yang merepresentasikan perusahaan Anda.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>
        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40">© 2025 webCipta — Jasa Pembuatan Website Company Profile Profesional</footer>
      </div>
    </>
  )
}
