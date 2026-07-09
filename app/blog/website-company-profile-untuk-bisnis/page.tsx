import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Users, Globe, Star } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Kenapa Bisnis Wajib Punya Website Company Profile",
  description:
    "81% konsumen riset online sebelum membeli. Tanpa website company profile profesional, bisnis Anda kehilangan kepercayaan dan pelanggan setiap hari. Pelajari manfaat, isi, dan harga website company profile.",
  keywords: [
    "website company profile untuk bisnis",
    "manfaat website company profile",
    "kenapa bisnis perlu website",
    "website company profile profesional",
    "contoh website company profile",
    "harga website company profile",
    "isi website company profile",
    "website perusahaan indonesia",
  ],
  alternates: { canonical: `${SITE_URL}/blog/website-company-profile-untuk-bisnis` },
  openGraph: {
    title: "Kenapa Bisnis Wajib Punya Website Company Profile di 2025",
    description: "81% konsumen riset online sebelum membeli. Tanpa website company profile, Anda kehilangan pelanggan setiap hari.",
    url: `${SITE_URL}/blog/website-company-profile-untuk-bisnis`,
    type: "article",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function ArticleCompanyProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kenapa Bisnis Anda WAJIB Punya Website Company Profile di 2025",
    author: { "@type": "Organization", name: "webCipta", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "webCipta",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
    datePublished: "2025-06-10",
    dateModified: "2025-07-08",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/website-company-profile-untuk-bisnis`,
    },
    image: `${SITE_URL}/og-image.jpg`,
  }

  const reasons = [
    {
      icon: Globe,
      title: "Calon Klien Mencari Anda di Google",
      body: "Setiap hari, ratusan orang di kota Anda mencari layanan yang Anda tawarkan di Google. Tanpa website, Anda tidak ada di sana — dan kompetitor yang punya website yang akan mendapatkan klien tersebut.",
    },
    {
      icon: Star,
      title: "Bangun Kepercayaan Sebelum Pertemuan Pertama",
      body: "81% konsumen melakukan riset online sebelum membeli atau menghubungi bisnis. Website company profile yang profesional meyakinkan calon klien bahwa Anda serius dan dapat dipercaya — bahkan sebelum mereka berbicara dengan Anda.",
    },
    {
      icon: Users,
      title: "Showcase Portofolio & Testimoni Klien",
      body: "Foto tim, daftar klien, testimoni, dan portofolio proyek yang ditampilkan di website jauh lebih meyakinkan daripada brosur atau WhatsApp. Social proof adalah faktor keputusan terkuat dalam pembelian B2B.",
    },
    {
      icon: TrendingUp,
      title: "Aset Bisnis yang Bekerja 24 Jam",
      body: "Website tidak tidur. Saat Anda rapat atau tidur, website Anda tetap menerima pengunjung, menjawab pertanyaan umum, dan mengumpulkan lead — tanpa biaya tambahan per interaksi.",
    },
    {
      icon: CheckCircle2,
      title: "Fondasi untuk Semua Strategi Digital Marketing",
      body: "Google Ads, Instagram Ads, email marketing — semua strategi digital perlu 'tempat tujuan' yang profesional. Website company profile adalah fondasi wajib sebelum Anda investasi di channel marketing manapun.",
    },
    {
      icon: ArrowRight,
      title: "Kompetitor Anda Sudah Punya",
      body: "Di 2025, bisnis tanpa website dianggap tidak profesional. Jika kompetitor Anda punya website yang bagus dan Anda tidak, pilihan calon klien sudah jelas — mereka akan memilih yang lebih terlihat profesional.",
    },
  ]

  const mustHavePages = [
    { page: "Beranda (Home)", desc: "Tagline kuat, ringkasan layanan, CTA yang jelas. Kesan pertama yang menentukan." },
    { page: "Tentang Kami", desc: "Cerita perusahaan, visi/misi, nilai, dan foto tim — membangun kedekatan dan kepercayaan." },
    { page: "Layanan / Produk", desc: "Deskripsi detail setiap layanan, manfaat, dan proses kerja — menjawab 'apakah ini yang saya butuhkan?'" },
    { page: "Portfolio / Proyek", desc: "Galeri hasil kerja nyata — bukti kemampuan yang lebih meyakinkan dari kata-kata apapun." },
    { page: "Testimoni Klien", desc: "Review dan cerita sukses klien — social proof paling kuat untuk keputusan pembelian B2B." },
    { page: "Blog / Artikel", desc: "Konten informatif yang membangun otoritas dan mendatangkan traffic organik dari Google secara gratis." },
    { page: "Kontak", desc: "Formulir kontak, nomor WhatsApp, alamat, Google Maps — semua cara untuk dihubungi dalam satu halaman." },
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
              <span className="text-sm font-bold">
                web<span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Cipta</span>
              </span>
            </Link>
            <a
              href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20website%20company%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity"
            >
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
            <span className="text-foreground">Website Company Profile</span>
          </nav>

          <div className="flex items-center gap-2 mb-5">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-400 bg-amber-400/10">Bisnis</span>
            <span className="text-xs text-muted-foreground">10 Juni 2025 · 5 menit baca</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.0] mb-6">
            Kenapa Bisnis Anda WAJIB Punya Website Company Profile di 2025
          </h1>

          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            Riset Google menunjukkan <strong className="text-foreground">81% konsumen melakukan riset online</strong> sebelum menghubungi atau membeli dari sebuah bisnis. Artinya, jika bisnis Anda tidak ditemukan secara online — atau ditemukan tapi terlihat tidak profesional — Anda kehilangan 8 dari 10 calon pelanggan potensial setiap hari.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Website company profile bukan lagi "nice to have" di 2025. Ini adalah kebutuhan dasar, seperti kartu nama — tapi yang bekerja 24 jam, menjangkau seluruh Indonesia, dan mengonversi pengunjung menjadi pelanggan.
          </p>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-6">
              6 Alasan Bisnis Anda Wajib Punya Website Company Profile
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <Icon className="h-4 w-4 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-5">
              Halaman Apa Saja yang Wajib Ada di Website Company Profile?
            </h2>
            <div className="space-y-3">
              {mustHavePages.map((item) => (
                <div key={item.page} className="flex gap-3 rounded-xl border border-border/20 bg-card/25 p-4">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground text-xs">{item.page}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-5">
              Berapa Harga Website Company Profile?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-3 font-bold text-foreground">Paket</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">Harga</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">Yang Didapat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pkg: "Standar", price: "Rp 5 juta", desc: "5–8 halaman, desain custom, SEO dasar, formulir kontak, Google Analytics" },
                    { pkg: "Premium", price: "Rp 10 juta", desc: "10–15 halaman, animasi, CMS/panel admin, blog, multi-bahasa, garansi revisi" },
                    { pkg: "Enterprise", price: "Rp 20 juta+", desc: "Fitur tak terbatas, integrasi CRM/ERP, multi-user, support prioritas" },
                  ].map((row, i) => (
                    <tr key={row.pkg} className={`border-b border-border/15 ${i % 2 === 0 ? "bg-card/10" : ""}`}>
                      <td className="py-3 px-3 font-semibold text-foreground">{row.pkg}</td>
                      <td className="py-3 px-3 font-bold text-primary whitespace-nowrap">{row.price}</td>
                      <td className="py-3 px-3 text-muted-foreground">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/20 p-6 md:p-8 text-center mb-10">
            <h2 className="text-xl font-black tracking-tighter mb-3">
              Siap Buat Website Company Profile Profesional?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Konsultasi gratis. Kami bantu Anda menentukan paket yang tepat dan kirim proposal harga dalam 24 jam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/jasa-pembuatan-company-profile"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 h-10 text-xs font-semibold border border-border/30 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
              >
                Lihat Paket & Harga
              </Link>
              <a
                href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20website%20company%20profile."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 h-10 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all"
              >
                Konsultasi Gratis <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          <div className="pt-6 border-t border-border/15">
            <p className="text-xs text-muted-foreground mb-4">Artikel terkait:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Harga Jasa Website 2025", href: "/blog/harga-jasa-pembuatan-website-2025" },
                { label: "Cara Memilih Jasa Website Terpercaya", href: "/blog/cara-memilih-jasa-pembuatan-website-terpercaya" },
                { label: "Tips SEO Website Indonesia", href: "/blog/cara-meningkatkan-seo-website-indonesia" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-1.5 rounded-full border border-border/25 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
