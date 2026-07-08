import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Layers, Monitor, Smartphone, Eye } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"
const WA = "https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20desain%20UI%20UX."

export const metadata: Metadata = {
  title: "Jasa Desain UI/UX Profesional Website & Aplikasi | webCipta",
  description:
    "Jasa desain UI/UX profesional untuk website dan aplikasi mobile di Indonesia. Figma design system, user research, wireframe, prototyping, dan usability testing. Harga mulai Rp 3 juta. Konsultasi gratis!",
  keywords: [
    "jasa desain ui ux",
    "jasa ui ux design",
    "jasa desain ui ux profesional",
    "jasa desain website",
    "jasa desain aplikasi",
    "jasa desain ui ux indonesia",
    "jasa ui ux figma",
    "jasa desain ui ux murah",
    "harga jasa desain ui ux",
    "jasa desain ui ux lampung",
    "jasa ux design",
    "jasa wireframe",
    "jasa prototype",
    "jasa desain mobile app",
    "jasa ui designer",
  ],
  alternates: { canonical: `${SITE_URL}/jasa-desain-ui-ux` },
  openGraph: {
    title: "Jasa Desain UI/UX Profesional Website & Aplikasi | webCipta",
    description: "Desain UI/UX yang intuitif dan indah untuk website dan aplikasi. Figma, wireframe, prototyping. Mulai Rp 3 juta. Konsultasi gratis!",
    url: `${SITE_URL}/jasa-desain-ui-ux`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Desain UI/UX",
      description: "Jasa desain UI/UX profesional untuk website dan aplikasi mobile — user research, wireframe, Figma design system, prototyping, dan usability testing.",
      provider: { "@type": "LocalBusiness", name: "webCipta", url: SITE_URL },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: { "@type": "Offer", price: "3000000", priceCurrency: "IDR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Desain UI/UX", item: `${SITE_URL}/jasa-desain-ui-ux` },
      ],
    },
  ],
}

const process = [
  { step: "01", title: "User Research & Discovery", desc: "Pahami target pengguna, kebutuhan, pain point, dan perilaku mereka melalui interview, survey, dan analisis kompetitor." },
  { step: "02", title: "Information Architecture", desc: "Rancang struktur navigasi dan alur informasi yang logis sehingga pengguna mudah menemukan apa yang mereka cari." },
  { step: "03", title: "Wireframe & Prototype", desc: "Buat wireframe low-fidelity lalu prototype interaktif di Figma untuk validasi sebelum masuk ke desain visual." },
  { step: "04", title: "UI Design & Design System", desc: "Desain visual pixel-perfect dengan design system yang konsisten — warna, tipografi, komponen, dan spacing yang terstandarisasi." },
  { step: "05", title: "Usability Testing", desc: "Uji desain dengan pengguna nyata untuk menemukan masalah dan area perbaikan sebelum diimplementasikan." },
  { step: "06", title: "Developer Handoff", desc: "Serahkan file Figma lengkap dengan spec, aset, dan dokumentasi desain sehingga developer bisa implementasi dengan presisi." },
]

const faqs = [
  { q: "Berapa harga jasa desain UI/UX profesional?", a: "Desain landing page/halaman tunggal mulai Rp 3 juta. Desain aplikasi mobile (10–20 screen) Rp 8–20 juta. Desain website lengkap Rp 5–15 juta. Design system enterprise Rp 20 juta+. Estimasi final setelah konsultasi." },
  { q: "Tools apa yang digunakan untuk desain UI/UX?", a: "Kami menggunakan Figma sebagai tool utama — industry standard yang memudahkan kolaborasi dan developer handoff. Output berupa file Figma, prototype interaktif, dan export aset siap pakai." },
  { q: "Berapa lama proses desain UI/UX selesai?", a: "Desain 1 halaman 2–5 hari. Aplikasi 10–20 screen 2–4 minggu. Design system lengkap 4–8 minggu. Tergantung kompleksitas dan jumlah iterasi revisi." },
  { q: "Apakah desain langsung bisa diimplementasikan ke kode?", a: "Ya. File Figma yang kami berikan dilengkapi spec lengkap, aset export, dan dokumentasi desain sehingga developer bisa langsung implementasi. Jika Anda juga membutuhkan pengembangan, kami bisa kerjakan full-stack (desain + coding)." },
]

export default function JasaDesainUiUxPage() {
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
              <span className="text-foreground">Jasa Desain UI/UX</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Desain</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">UI/UX</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>Website & Aplikasi Profesional</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              webCipta menghadirkan <strong className="text-foreground">jasa desain UI/UX profesional</strong> yang menggabungkan estetika dan fungsionalitas. Dari wireframe hingga prototype Figma siap coding — user research, design system, dan developer handoff yang presisi. Mulai <strong className="text-foreground">Rp 3 juta</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat Portfolio Desain
              </Link>
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Proses Desain UI/UX kami</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Metodologi desain terstruktur yang menghasilkan produk yang disukai pengguna dan mudah dikembangkan.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <span className="text-xs font-black text-primary/60 mb-3 block">{step}</span>
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">FAQ Jasa Desain UI/UX</h2>
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
                { label: "Jasa Aplikasi Mobile", href: "/jasa-pembuatan-aplikasi-mobile" },
                { label: "Jasa Pembuatan Bot", href: "/jasa-pembuatan-bot" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-border/25 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">{l.label}</Link>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Siap Buat Desain yang Memukau?</h2>
              <p className="text-muted-foreground text-sm mb-8">Konsultasi gratis. Kami analisis kebutuhan desain Anda dan beri rekomendasi approach terbaik.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>
        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40">© 2025 webCipta — Jasa Desain UI/UX Profesional untuk Website & Aplikasi</footer>
      </div>
    </>
  )
}
