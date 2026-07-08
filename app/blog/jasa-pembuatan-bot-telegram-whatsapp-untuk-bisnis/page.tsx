import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Bot, CheckCircle2, Clock } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Bot Telegram & WhatsApp untuk Bisnis 2025 | webCipta",
  description:
    "Panduan lengkap jasa pembuatan bot Telegram dan WhatsApp untuk bisnis di Indonesia 2025. Fungsi bot, harga, cara kerja, dan manfaat otomasi untuk menghemat waktu dan meningkatkan penjualan.",
  keywords: [
    "jasa pembuatan bot telegram bisnis",
    "bot whatsapp untuk bisnis",
    "cara membuat bot telegram",
    "manfaat bot untuk bisnis",
    "jasa bot otomatis indonesia",
    "bot customer service otomatis",
    "bot notifikasi pesanan",
    "otomasi bisnis dengan bot",
  ],
  alternates: { canonical: `${SITE_URL}/blog/jasa-pembuatan-bot-telegram-whatsapp-untuk-bisnis` },
  openGraph: {
    title: "Jasa Pembuatan Bot Telegram & WhatsApp untuk Bisnis 2025",
    description: "Panduan lengkap bot Telegram & WhatsApp untuk bisnis — fungsi, harga, manfaat, dan kapan harus mulai menggunakan otomasi.",
    url: `${SITE_URL}/blog/jasa-pembuatan-bot-telegram-whatsapp-untuk-bisnis`,
    type: "article",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

export default function ArticleBotBisnis() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jasa Pembuatan Bot Telegram & WhatsApp untuk Bisnis: Panduan 2025",
    author: { "@type": "Organization", name: "webCipta", url: SITE_URL },
    publisher: { "@type": "Organization", name: "webCipta", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
    datePublished: "2025-06-15",
    dateModified: "2025-07-08",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/jasa-pembuatan-bot-telegram-whatsapp-untuk-bisnis` },
    image: `${SITE_URL}/og-image.jpg`,
  }

  const botUseCases = [
    { icon: Bot, title: "Bot Customer Service 24 Jam", desc: "Jawab pertanyaan umum pelanggan otomatis kapan saja — jam berapa pun — tanpa perlu staff. Bot AI bisa pahami konteks dan memberikan jawaban akurat dari knowledge base bisnis Anda." },
    { icon: Clock, title: "Bot Notifikasi Pesanan", desc: "Kirim notifikasi otomatis saat pesanan masuk, diproses, dikirim, dan diterima. Pelanggan selalu update tanpa Anda harus kirim manual satu per satu." },
    { icon: CheckCircle2, title: "Bot Konfirmasi Pembayaran", desc: "Verifikasi bukti transfer secara otomatis, update status pesanan, dan kirim invoice digital — semua tanpa campur tangan manusia." },
    { icon: ArrowRight, title: "Bot Absensi & HR", desc: "Bot absensi digital via Telegram/WhatsApp — karyawan check-in/out, rekap otomatis ke spreadsheet, dan laporan kehadiran bulanan." },
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
            <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20bot." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">Konsultasi Gratis</a>
          </div>
        </nav>

        <article className="py-12 md:py-20 px-4 sm:px-8 max-w-3xl mx-auto">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary">Beranda</Link><span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span>
            <span className="text-foreground">Bot untuk Bisnis</span>
          </nav>
          <div className="flex items-center gap-2 mb-5">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-violet-400 bg-violet-400/10">Teknologi</span>
            <span className="text-xs text-muted-foreground">15 Juni 2025 · 7 menit baca</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.0] mb-6">
            Jasa Pembuatan Bot Telegram & WhatsApp untuk Bisnis: Panduan 2025
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Bot otomatis bisa menghemat 10–20 jam kerja per minggu untuk bisnis Anda. Dari customer service 24 jam, notifikasi pesanan otomatis, hingga web scraping kompetitor — ini panduan lengkap sebelum Anda menggunakan jasa pembuatan bot.
          </p>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-5">Apa Itu Bot Bisnis dan Bagaimana Cara Kerjanya?</h2>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Bot bisnis adalah program yang berjalan di platform pesan (Telegram, WhatsApp, Discord) atau secara mandiri, yang melakukan tugas-tugas otomatis berdasarkan trigger tertentu — pesan masuk, jadwal waktu, atau event sistem. Bot tidak tidur, tidak cuti, dan tidak membuat kesalahan yang sama dua kali.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Berbeda dengan chatbot yang hanya menjawab pertanyaan, bot bisnis modern bisa terhubung ke database, payment system, spreadsheet, ERP, dan API apa pun — menjadikannya "karyawan digital" yang sesungguhnya.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-5">Use Case Bot untuk Bisnis Indonesia</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {botUseCases.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <Icon className="h-4 w-4 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter mb-5">Berapa Harga Jasa Pembuatan Bot?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-3 font-bold text-foreground">Jenis Bot</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">Harga</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">Durasi</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Bot Telegram Sederhana", price: "Rp 2–5 juta", dur: "1–5 hari" },
                    { type: "Bot WhatsApp Bisnis", price: "Rp 5–15 juta", dur: "1–2 minggu" },
                    { type: "Bot Discord", price: "Rp 2–8 juta", dur: "1–7 hari" },
                    { type: "Chatbot AI (GPT)", price: "Rp 8–25 juta", dur: "2–4 minggu" },
                    { type: "Web Scraper Otomatis", price: "Rp 3–15 juta", dur: "3–14 hari" },
                    { type: "Bot Otomasi Kompleks", price: "Rp 15–50 juta", dur: "1–3 bulan" },
                  ].map((row, i) => (
                    <tr key={row.type} className={`border-b border-border/15 ${i % 2 === 0 ? "bg-card/10" : ""}`}>
                      <td className="py-3 px-3 font-medium text-foreground">{row.type}</td>
                      <td className="py-3 px-3 font-bold text-primary">{row.price}</td>
                      <td className="py-3 px-3 text-muted-foreground">{row.dur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/20 p-6 text-center mb-10">
            <h2 className="text-lg font-black tracking-tighter mb-3">Tertarik Buat Bot untuk Bisnis Anda?</h2>
            <p className="text-muted-foreground text-xs mb-5">Konsultasi gratis. Ceritakan kebutuhan bot Anda dan kami berikan estimasi harga & timeline dalam 24 jam.</p>
            <Link href="/jasa-pembuatan-bot" className="inline-flex items-center gap-2 rounded-full px-6 h-10 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              Lihat Jasa Pembuatan Bot <ArrowRight className="h-3.5 w-3.5" />
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
