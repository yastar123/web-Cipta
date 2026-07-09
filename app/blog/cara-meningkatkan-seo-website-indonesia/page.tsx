import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Search, TrendingUp, CheckCircle2, Zap } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Cara Meningkatkan SEO Website Indonesia 2025",
  description:
    "Panduan SEO praktis untuk website Indonesia 2025. Riset keyword berbahasa Indonesia, optimasi on-page, local SEO Google Maps, backlink building, Core Web Vitals — semua lengkap dalam satu panduan.",
  keywords: [
    "cara meningkatkan seo website",
    "tips seo indonesia 2025",
    "panduan seo untuk pemula",
    "cara ranking halaman 1 google",
    "local seo indonesia",
    "cara optimasi website seo",
    "belajar seo indonesia",
    "tips seo website bisnis",
  ],
  alternates: { canonical: `${SITE_URL}/blog/cara-meningkatkan-seo-website-indonesia` },
  openGraph: {
    title: "Cara Meningkatkan SEO Website agar Halaman 1 Google (2025)",
    description: "Panduan SEO praktis website Indonesia — riset keyword, on-page, local SEO, backlink, Core Web Vitals. Lengkap dalam satu artikel.",
    url: `${SITE_URL}/blog/cara-meningkatkan-seo-website-indonesia`,
    type: "article",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function ArticleSEOIndonesia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cara Meningkatkan SEO Website agar Muncul di Halaman 1 Google Indonesia (2025)",
    author: { "@type": "Organization", name: "webCipta", url: SITE_URL },
    publisher: { "@type": "Organization", name: "webCipta", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
    datePublished: "2025-06-05",
    dateModified: "2025-07-08",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/cara-meningkatkan-seo-website-indonesia` },
    image: `${SITE_URL}/og-image.jpg`,
  }

  const tips = [
    {
      icon: Search,
      step: "01",
      title: "Riset Keyword Berbahasa Indonesia",
      body: "Gunakan Google Keyword Planner, Ubersuggest, atau Ahrefs Free untuk temukan keyword yang dicari orang Indonesia. Prioritaskan long-tail keyword (3+ kata) dengan volume medium tapi persaingan rendah. Contoh: 'jasa buat website murah Lampung' lebih mudah ranking daripada 'website'.",
    },
    {
      icon: CheckCircle2,
      step: "02",
      title: "Optimasi On-Page yang Benar",
      body: "Setiap halaman harus punya: H1 yang mengandung keyword utama, meta title <60 karakter, meta description 150–160 karakter, URL slug pendek dan deskriptif, alt text pada semua gambar, dan internal link ke halaman relevan lainnya di website Anda.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Buat Halaman Khusus per Keyword",
      body: "Jangan targetkan semua keyword di satu halaman. Buat halaman terpisah untuk setiap layanan atau lokasi — 'Jasa Website Jakarta', 'Jasa Toko Online', 'Jasa Bot Telegram' — masing-masing dengan konten 500+ kata yang relevan.",
    },
    {
      icon: Zap,
      step: "04",
      title: "Core Web Vitals & Kecepatan Loading",
      body: "Google secara resmi menggunakan kecepatan sebagai faktor ranking. Target: LCP <2.5 detik, FID <100ms, CLS <0.1. Gunakan Next.js atau Astro, kompres gambar (pakai WebP), dan aktifkan caching. Cek score di PageSpeed Insights.",
    },
    {
      icon: Search,
      step: "05",
      title: "Local SEO: Google Business Profile",
      body: "Untuk bisnis lokal, daftar di Google Business Profile (Google Maps) adalah WAJIB. Lengkapi nama bisnis, kategori, foto, jam operasional, dan nomor telepon. Minta klien beri review bintang 5. Ini faktor ranking lokal terkuat.",
    },
    {
      icon: TrendingUp,
      step: "06",
      title: "Bangun Backlink Berkualitas",
      body: "Backlink (link dari website lain ke website Anda) adalah sinyal otoritas. Cara mendapatkannya: daftar di direktori bisnis (Clutch, GoodFirms, Qerja), guest posting di blog industri, dan minta klien yang punya website untuk pasang link ke Anda.",
    },
    {
      icon: CheckCircle2,
      step: "07",
      title: "Konten Blog Rutin",
      body: "Artikel blog bertarget keyword informatif ('cara memilih website profesional', 'harga website 2025') mendatangkan traffic organik dan membangun otoritas domain. Target 2–4 artikel per bulan, masing-masing 800–2000 kata.",
    },
    {
      icon: Zap,
      step: "08",
      title: "Schema Markup & Rich Results",
      body: "Tambahkan schema markup (JSON-LD) untuk LocalBusiness, FAQPage, Review, Article, dan BreadcrumbList. Website dengan schema lebih sering tampil sebagai rich results di Google — meningkatkan CTR tanpa perlu naik ranking.",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background text-foreground">
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-emerald-500 shadow shadow-primary/30">
                <span className="text-xs font-black text-primary-foreground">W</span>
              </div>
              <span className="text-sm font-bold">web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span></span>
            </Link>
            <a href="https://wa.me/6285366195381" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">Konsultasi Gratis</a>
          </div>
        </nav>

        <article className="py-12 md:py-20 px-4 sm:px-8 max-w-3xl mx-auto">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary">Beranda</Link><span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span>
            <span className="text-foreground">Tips SEO Indonesia</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-rose-400 bg-rose-400/10">SEO</span>
            <span className="text-xs text-muted-foreground">5 Juni 2025 · 10 menit baca</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.0] mb-6">
            Cara Meningkatkan SEO Website agar Halaman 1 Google (2025)
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            90% klik Google jatuh ke halaman pertama. Jika website Anda tidak ada di sana, Anda kehilangan pelanggan setiap hari kepada kompetitor. Berikut 8 strategi SEO praktis yang terbukti bekerja untuk website bisnis Indonesia.
          </p>

          <section className="mb-12 space-y-5">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter">8 Strategi SEO untuk Website Bisnis Indonesia</h2>
            {tips.map(({ icon: Icon, step, title, body }) => (
              <div key={step} className="rounded-xl border border-border/20 bg-card/25 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-black text-primary/60 mt-0.5 flex-shrink-0">{step}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <h3 className="font-bold text-foreground text-sm">{title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/20 p-6 text-center mb-10">
            <h2 className="text-lg font-black tracking-tighter mb-3">Mau Website Anda Ranking #1 Google?</h2>
            <p className="text-muted-foreground text-xs mb-5">webCipta membangun website dengan SEO optimal sejak hari pertama — schema markup, Core Web Vitals, dan struktur halaman yang tepat.</p>
            <Link href="/jasa-pembuatan-website" className="inline-flex items-center gap-2 rounded-full px-6 h-10 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              Lihat Jasa Pembuatan Website <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </section>

          <div className="pt-6 border-t border-border/15">
            <p className="text-xs text-muted-foreground mb-4">Artikel terkait:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Harga Jasa Website 2025", href: "/blog/harga-jasa-pembuatan-website-2025" },
                { label: "Cara Memilih Jasa Website Terpercaya", href: "/blog/cara-memilih-jasa-pembuatan-website-terpercaya" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="px-3 py-1.5 rounded-full border border-border/25 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
