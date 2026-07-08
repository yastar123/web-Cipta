import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Harga Jasa Pembuatan Website 2025: Panduan Lengkap | webCipta",
  description:
    "Berapa harga jasa pembuatan website profesional di 2025? Panduan lengkap breakdown harga: landing page Rp 3 juta, company profile Rp 5-15 juta, toko online Rp 15-50 juta, web app Rp 50-100 juta+.",
  keywords: [
    "harga jasa pembuatan website 2025",
    "biaya pembuatan website",
    "harga website profesional indonesia",
    "berapa biaya buat website",
    "harga pembuatan website company profile",
    "harga pembuatan toko online",
    "harga pembuatan landing page",
    "biaya web developer indonesia",
  ],
  alternates: { canonical: `${SITE_URL}/blog/harga-jasa-pembuatan-website-2025` },
  openGraph: {
    title: "Harga Jasa Pembuatan Website 2025: Panduan Lengkap",
    description: "Panduan harga jasa pembuatan website di Indonesia 2025 — landing page hingga enterprise. Harga transparan tanpa hidden fee.",
    url: `${SITE_URL}/blog/harga-jasa-pembuatan-website-2025`,
    type: "article",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const priceTable = [
  { type: "Landing Page", range: "Rp 3–8 juta", duration: "3–7 hari", desc: "1 halaman, CTA, form kontak, SEO dasar, mobile-responsive", href: "/jasa-landing-page" },
  { type: "Website Company Profile", range: "Rp 5–20 juta", duration: "1–3 minggu", desc: "5–15 halaman, CMS, blog, SEO lengkap, desain custom", href: "/jasa-pembuatan-company-profile" },
  { type: "Toko Online / E-Commerce", range: "Rp 15–60 juta", duration: "3–8 minggu", desc: "Produk, keranjang, payment gateway, manajemen stok, admin panel", href: "/jasa-pembuatan-toko-online" },
  { type: "Aplikasi Mobile", range: "Rp 20–100 juta", duration: "1–6 bulan", desc: "Android & iOS, React Native/Flutter, publish ke store", href: "/jasa-pembuatan-aplikasi-mobile" },
  { type: "Bot & Otomasi", range: "Rp 2–30 juta", duration: "1–30 hari", desc: "Bot Telegram/WA/Discord, scraper, RPA, chatbot AI", href: "/jasa-pembuatan-bot" },
  { type: "Web App / SaaS", range: "Rp 50–500 juta", duration: "2–12 bulan", desc: "Multi-user, dashboard, sistem kompleks, integrasi enterprise", href: "/jasa-pembuatan-website" },
]

export default function ArticleHargaWebsite2025() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Harga Jasa Pembuatan Website 2025: Panduan Lengkap untuk Bisnis Indonesia",
    description: "Panduan lengkap harga jasa pembuatan website profesional di Indonesia 2025.",
    author: { "@type": "Organization", name: "webCipta", url: SITE_URL },
    publisher: { "@type": "Organization", name: "webCipta", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
    datePublished: "2025-07-01",
    dateModified: "2025-07-08",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/harga-jasa-pembuatan-website-2025` },
    image: `${SITE_URL}/og-image.jpg`,
  }

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
            <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20harga%20pembuatan%20website." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">
              Konsultasi Gratis
            </a>
          </div>
        </nav>

        <article className="py-12 md:py-20 px-4 sm:px-8 max-w-3xl mx-auto">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Harga Website 2025</span>
          </nav>

          <div className="flex items-center gap-2 mb-5">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-cyan-400 bg-cyan-400/10">Panduan</span>
            <span className="text-xs text-muted-foreground">1 Juli 2025 · 8 menit baca</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.0] mb-6">
            Harga Jasa Pembuatan Website 2025: Panduan Lengkap untuk Bisnis Indonesia
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Salah satu pertanyaan paling sering yang kami terima: <em>"Berapa biaya pembuatan website profesional?"</em> Jawabannya tergantung banyak faktor — jenis website, kompleksitas fitur, dan kualitas pengerjaan. Artikel ini memberikan breakdown harga yang transparan dan realistis.
          </p>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-6">Tabel Harga Jasa Pembuatan Website 2025</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-3 font-bold text-foreground">Jenis Website</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">Harga</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">Durasi</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row, i) => (
                    <tr key={row.type} className={`border-b border-border/15 ${i % 2 === 0 ? "bg-card/10" : ""}`}>
                      <td className="py-3 px-3">
                        <Link href={row.href} className="font-semibold text-foreground hover:text-primary transition-colors">{row.type}</Link>
                        <p className="text-muted-foreground mt-0.5">{row.desc}</p>
                      </td>
                      <td className="py-3 px-3 font-bold text-primary whitespace-nowrap">{row.range}</td>
                      <td className="py-3 px-3 text-muted-foreground whitespace-nowrap">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-4">Faktor yang Mempengaruhi Harga Website</h2>
            <div className="space-y-4">
              {[
                { title: "1. Jumlah dan Kompleksitas Halaman", body: "Website 1 halaman jauh lebih murah dibanding 20 halaman. Semakin banyak halaman dan konten yang perlu didesain dan dikode, semakin tinggi biayanya." },
                { title: "2. Fitur Khusus", body: "Fitur seperti payment gateway, sistem login, dashboard analitik, booking system, atau integrasi API pihak ketiga menambah waktu pengerjaan dan biaya secara signifikan." },
                { title: "3. Desain Custom vs Template", body: "Website dengan desain 100% custom (dibuat dari nol sesuai brand) lebih mahal dibanding yang menggunakan template jadi. Namun desain custom menghasilkan website yang lebih unik dan berkesan." },
                { title: "4. Pengalaman & Reputasi Developer", body: "Developer berpengalaman dengan portofolio terbukti wajar mengenakan harga lebih tinggi. Namun jangan tergiur harga murah tanpa melihat kualitas karya nyatanya." },
                { title: "5. SEO & Performa", body: "Website yang dioptimasi untuk SEO, Core Web Vitals, dan kecepatan loading membutuhkan pengetahuan teknis lebih — dan sepadan karena langsung berdampak pada traffic organik Anda." },
              ].map(item => (
                <div key={item.title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-4">Tips Memilih Jasa Pembuatan Website Berdasarkan Anggaran</h2>
            <div className="space-y-3">
              {[
                { budget: "Anggaran Rp 3–5 juta", rec: "Landing page atau company profile sederhana. Fokus pada desain bersih, kontak jelas, dan SEO dasar. Cocok untuk UMKM yang baru go-digital." },
                { budget: "Anggaran Rp 10–20 juta", rec: "Website company profile premium atau toko online kecil. Sudah bisa dapat desain custom, CMS, blog, dan SEO lengkap." },
                { budget: "Anggaran Rp 30–100 juta", rec: "Toko online skala menengah, marketplace niche, atau web app internal. Bisa integrasi payment gateway, sistem manajemen, dan API pihak ketiga." },
                { budget: "Anggaran Rp 100 juta+", rec: "Platform SaaS, marketplace besar, atau sistem enterprise. Tim dedicated, arsitektur scalable, dan dukungan jangka panjang." },
              ].map(item => (
                <div key={item.budget} className="flex gap-3 rounded-xl border border-border/20 bg-card/25 p-4">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground text-xs">{item.budget}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.rec}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/20 p-6 md:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-3">Butuh Estimasi Harga Website Anda?</h2>
            <p className="text-muted-foreground text-sm mb-6">Ceritakan kebutuhan Anda via WhatsApp — kami kirim proposal harga transparan dalam 24 jam.</p>
            <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20harga%20pembuatan%20website." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 h-11 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              Konsultasi Gratis Sekarang <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          <div className="mt-10 pt-8 border-t border-border/15">
            <p className="text-xs text-muted-foreground mb-4">Artikel terkait:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Cara Memilih Jasa Website Terpercaya", href: "/blog/cara-memilih-jasa-pembuatan-website-terpercaya" },
                { label: "Bot Telegram & WhatsApp untuk Bisnis", href: "/blog/jasa-pembuatan-bot-telegram-whatsapp-untuk-bisnis" },
                { label: "Tips Meningkatkan SEO Website", href: "/blog/cara-meningkatkan-seo-website-indonesia" },
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
