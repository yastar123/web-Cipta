import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Blog Tips Website, SEO & Digital Marketing",
  description:
    "Artikel tips dan panduan seputar jasa pembuatan website, SEO, digital marketing, harga website, dan teknologi dari tim webCipta — digital agency profesional di Lampung & Indonesia.",
  keywords: ["blog website", "tips pembuatan website", "panduan seo indonesia", "harga jasa website 2025", "tips digital marketing"],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog Tips Website, SEO & Digital Marketing | webCipta",
    description: "Artikel tips dan panduan seputar jasa pembuatan website, SEO, digital marketing dari tim webCipta.",
    url: `${SITE_URL}/blog`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const articles = [
  {
    slug: "harga-jasa-pembuatan-website-2025",
    title: "Harga Jasa Pembuatan Website 2025: Panduan Lengkap untuk Bisnis Indonesia",
    excerpt: "Berapa biaya sebenarnya untuk membuat website profesional di 2025? Dari landing page Rp 3 juta hingga web app enterprise — breakdown harga transparan beserta faktor yang mempengaruhinya.",
    date: "2025-07-01",
    readTime: "8 menit",
    category: "Panduan",
  },
  {
    slug: "cara-memilih-jasa-pembuatan-website-terpercaya",
    title: "7 Cara Memilih Jasa Pembuatan Website Terpercaya (Agar Tidak Tertipu)",
    excerpt: "Banyak kasus proyek website mangkrak atau tidak sesuai ekspektasi. Pelajari 7 kriteria penting yang harus Anda cek sebelum mempercayakan pembuatan website kepada jasa atau developer manapun.",
    date: "2025-06-20",
    readTime: "6 menit",
    category: "Tips",
  },
  {
    slug: "jasa-pembuatan-bot-telegram-whatsapp-untuk-bisnis",
    title: "Jasa Pembuatan Bot Telegram & WhatsApp untuk Bisnis: Panduan 2025",
    excerpt: "Bot otomatis bisa menghemat 10+ jam kerja per minggu. Pelajari jenis-jenis bot untuk bisnis, harga pembuatan bot, dan kapan Anda sebaiknya mulai menggunakan otomasi.",
    date: "2025-06-15",
    readTime: "7 menit",
    category: "Teknologi",
  },
  {
    slug: "website-company-profile-untuk-bisnis",
    title: "Kenapa Bisnis Anda WAJIB Punya Website Company Profile di 2025",
    excerpt: "Riset menunjukkan 81% konsumen riset online sebelum membeli. Tanpa website company profile profesional, Anda kehilangan kepercayaan — dan pelanggan — setiap hari.",
    date: "2025-06-10",
    readTime: "5 menit",
    category: "Bisnis",
  },
  {
    slug: "cara-meningkatkan-seo-website-indonesia",
    title: "Cara Meningkatkan SEO Website agar Muncul di Halaman 1 Google (2025)",
    excerpt: "Panduan SEO praktis khusus website Indonesia: riset keyword berbahasa Indonesia, optimasi on-page, local SEO, backlink building, dan Core Web Vitals — semua dalam satu artikel.",
    date: "2025-06-05",
    readTime: "10 menit",
    category: "SEO",
  },
]

const categoryColors: Record<string, string> = {
  Panduan: "text-cyan-400 bg-cyan-400/10",
  Tips: "text-emerald-400 bg-emerald-400/10",
  Teknologi: "text-violet-400 bg-violet-400/10",
  Bisnis: "text-amber-400 bg-amber-400/10",
  SEO: "text-rose-400 bg-rose-400/10",
}

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog webCipta",
    url: `${SITE_URL}/blog`,
    description: "Artikel tips dan panduan seputar jasa pembuatan website, SEO, digital marketing, dan teknologi dari tim webCipta.",
    publisher: { "@type": "Organization", name: "webCipta", url: SITE_URL },
  }

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
            <a href="https://wa.me/6285366195381" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">
              Konsultasi Gratis
            </a>
          </div>
        </nav>

        <main className="py-16 md:py-24 px-4 sm:px-8 max-w-5xl mx-auto">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-3">
            Blog <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">webCipta</span>
          </h1>
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl leading-relaxed">
            Tips, panduan, dan insight seputar jasa pembuatan website, SEO, digital marketing, dan teknologi — dari tim webCipta untuk bisnis Indonesia.
            Setiap artikel ditulis berdasarkan pengalaman kami mengerjakan 150+ proyek website, toko online, dan aplikasi mobile untuk klien di Lampung dan seluruh Indonesia.
            Tidak ada teori kosong — semua tips di sini bisa langsung Anda praktikkan, baik Anda pemilik bisnis yang baru mau punya website pertama, maupun yang sedang mempertimbangkan redesain atau migrasi platform.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {[
              { label: "Panduan", desc: "Langkah demi langkah membangun aset digital, dari perencanaan hingga peluncuran." },
              { label: "Tips", desc: "Cara memilih vendor, menghindari jebakan proyek mangkrak, dan negosiasi harga yang wajar." },
              { label: "SEO", desc: "Strategi agar website Anda ditemukan calon pelanggan di halaman pertama Google." },
              { label: "Teknologi", desc: "Pembahasan tools dan otomasi — bot, integrasi, dan stack modern untuk bisnis." },
              { label: "Bisnis", desc: "Dampak kehadiran digital terhadap kepercayaan, penjualan, dan pertumbuhan brand." },
            ].map((c) => (
              <div key={c.label} className="rounded-xl border border-border/15 bg-card/20 p-4">
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-2 ${categoryColors[c.label] ?? "text-primary bg-primary/10"}`}>{c.label}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {articles.map(article => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group rounded-2xl border border-border/20 bg-card/25 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${categoryColors[article.category] ?? "text-primary bg-primary/10"}`}>
                    {article.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {article.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors">{article.title}</h2>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground/60">{new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="flex items-center gap-1 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Baca <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <footer className="border-t border-border/15 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/40">© 2025 webCipta — Blog Tips Website & Digital Marketing</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "Jasa Website", href: "/jasa-pembuatan-website" },
                { label: "Jasa Toko Online", href: "/jasa-pembuatan-toko-online" },
                { label: "Jasa Bot", href: "/jasa-pembuatan-bot" },
                { label: "Portfolio", href: "/portfolio" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="text-xs text-muted-foreground/50 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
