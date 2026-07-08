import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "7 Cara Memilih Jasa Pembuatan Website Terpercaya | webCipta",
  description:
    "Jangan sampai tertipu! Pelajari 7 kriteria penting memilih jasa pembuatan website terpercaya di Indonesia — dari portofolio nyata, kontrak, hingga red flag yang harus dihindari.",
  keywords: [
    "cara memilih jasa pembuatan website",
    "tips memilih web developer",
    "jasa website terpercaya",
    "cara memilih developer website",
    "rekomendasi jasa website indonesia",
    "ciri jasa website scam",
    "tips memilih digital agency",
  ],
  alternates: { canonical: `${SITE_URL}/blog/cara-memilih-jasa-pembuatan-website-terpercaya` },
  openGraph: {
    title: "7 Cara Memilih Jasa Pembuatan Website Terpercaya (Agar Tidak Tertipu)",
    description: "7 kriteria penting sebelum mempercayakan pembuatan website kepada jasa apapun. Termasuk red flag yang harus dihindari.",
    url: `${SITE_URL}/blog/cara-memilih-jasa-pembuatan-website-terpercaya`,
    type: "article",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function ArticleCaraMemilihJasaWebsite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 Cara Memilih Jasa Pembuatan Website Terpercaya (Agar Tidak Tertipu)",
    author: { "@type": "Organization", name: "webCipta", url: SITE_URL },
    publisher: { "@type": "Organization", name: "webCipta", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
    datePublished: "2025-06-20",
    dateModified: "2025-07-08",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/cara-memilih-jasa-pembuatan-website-terpercaya` },
    image: `${SITE_URL}/og-image.jpg`,
  }

  const criteria = [
    { num: "01", title: "Lihat Portfolio Nyata, Bukan Mockup", body: "Minta URL website yang sudah live dan bisa diakses. Jika hanya ada gambar mockup atau screenshot, itu red flag besar. Kunjungi website portofolio mereka, cek kecepatan loading, tampilan di HP, dan apakah website tersebut masih aktif." },
    { num: "02", title: "Cek Review & Testimoni Klien", body: "Cari review di Google Business Profile, media sosial, atau minta kontak klien sebelumnya untuk konfirmasi langsung. Testimoni di website sendiri mudah dipalsukan — cari yang ada di platform independen." },
    { num: "03", title: "Pastikan Ada Kontrak Tertulis", body: "Jasa website profesional selalu memberikan kontrak atau perjanjian kerja yang mencantumkan: scope of work, timeline, harga, jumlah revisi, dan kepemilikan kode/desain. Hindari yang hanya deal via chat tanpa dokumen apapun." },
    { num: "04", title: "Tanya Teknologi yang Digunakan", body: "Developer yang kompeten bisa jelaskan kenapa mereka memilih teknologi tertentu. Waspada jika semua website dibuat dengan WordPress plugin berat tanpa pertimbangan performa, atau menggunakan teknologi lawas yang tidak scalable." },
    { num: "05", title: "Evaluasi Respons & Komunikasi", body: "Sebelum deal, coba kirim pertanyaan teknis. Apakah dijawab dengan jelas dan cepat? Kualitas komunikasi sebelum proyek mencerminkan pengalaman kerja yang akan Anda dapatkan selama proyek berjalan." },
    { num: "06", title: "Perhatikan Harga yang Terlalu Murah", body: "Website 'profesional' seharga Rp 500ribu–1 juta hampir pasti menggunakan template bajakan, tidak ada SEO, dan tidak ada maintenance. Harga yang sangat murah = kualitas rendah, atau proyek mangkrak. Harga wajar untuk website profesional mulai Rp 3 juta." },
    { num: "07", title: "Tanya Soal After-Sales & Maintenance", body: "Setelah website live, apa yang terjadi jika ada bug? Apakah ada garansi perbaikan? Berapa biaya maintenance? Jasa yang profesional menawarkan paket maintenance dan garansi bug-fix setelah delivery." },
  ]

  const redFlags = [
    "Tidak ada portfolio atau hanya ada gambar/mockup",
    "Harga sangat murah (di bawah Rp 1 juta untuk 'website profesional')",
    "Tidak mau memberikan kontrak tertulis",
    "Respons lambat atau tidak konsisten",
    "Tidak bisa jelaskan teknologi yang digunakan",
    "Minta pembayaran 100% di muka",
    "Tidak ada garansi setelah delivery",
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
            <span className="text-foreground">Cara Memilih Jasa Website</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-emerald-400 bg-emerald-400/10">Tips</span>
            <span className="text-xs text-muted-foreground">20 Juni 2025 · 6 menit baca</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.0] mb-6">
            7 Cara Memilih Jasa Pembuatan Website Terpercaya (Agar Tidak Tertipu)
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Banyak kasus di Indonesia: proyek website dibayar lunas, lalu developer menghilang. Atau website jadi tapi tidak sesuai ekspektasi, lambat, dan tidak SEO-friendly. Dengan checklist berikut, Anda bisa menghindari jebakan tersebut.
          </p>

          <section className="mb-12 space-y-5">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter">7 Kriteria Jasa Website Terpercaya</h2>
            {criteria.map(item => (
              <div key={item.num} className="rounded-xl border border-border/20 bg-card/25 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-black text-primary/60 mt-0.5 flex-shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-5">🚩 Red Flag yang Harus Dihindari</h2>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 space-y-2">
              {redFlags.map(flag => (
                <div key={flag} className="flex items-start gap-2">
                  <XCircle className="h-3.5 w-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{flag}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/20 p-6 md:p-8 text-center mb-10">
            <h2 className="text-xl font-black tracking-tighter mb-3">webCipta: Jasa Website dengan 150+ Portfolio Nyata</h2>
            <p className="text-muted-foreground text-sm mb-5">Semua kriteria di atas kami penuhi — portfolio live, kontrak tertulis, garansi 30 hari, harga transparan.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-5 h-10 text-xs font-semibold border border-border/30 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
                Lihat 150+ Portfolio
              </Link>
              <a href="https://wa.me/6285366195381" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 h-10 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all">
                Konsultasi Gratis <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          <div className="pt-6 border-t border-border/15">
            <p className="text-xs text-muted-foreground mb-4">Artikel terkait:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Harga Jasa Website 2025", href: "/blog/harga-jasa-pembuatan-website-2025" },
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
