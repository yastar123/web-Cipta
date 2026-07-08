import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Bot, Zap, MessageSquare, Clock } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"
const WA = "https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20bot."

export const metadata: Metadata = {
  title: "Jasa Pembuatan Bot Telegram, WhatsApp & Discord Profesional | webCipta",
  description:
    "Jasa pembuatan bot Telegram, WhatsApp, Discord, dan web scraping profesional di Indonesia. Bot otomatis untuk bisnis, customer service, notifikasi, dan otomasi. Harga mulai Rp 2 juta. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan bot",
    "jasa pembuatan bot telegram",
    "jasa pembuatan bot whatsapp",
    "jasa pembuatan bot discord",
    "jasa bot telegram",
    "jasa bot whatsapp",
    "jasa bot indonesia",
    "jasa chatbot",
    "jasa pembuatan chatbot",
    "jasa otomasi",
    "jasa automation",
    "jasa web scraping",
    "jasa web scraper",
    "jasa pembuatan bot python",
    "jasa pembuatan bot murah",
    "jasa bot untuk bisnis",
    "jasa pembuatan bot indonesia",
    "bot telegram bisnis",
    "bot whatsapp bisnis",
    "jasa pembuatan aplikasi otomasi",
  ],
  alternates: { canonical: `${SITE_URL}/jasa-pembuatan-bot` },
  openGraph: {
    title: "Jasa Pembuatan Bot Telegram, WhatsApp & Discord | webCipta",
    description: "Bot otomatis untuk bisnis — Telegram, WhatsApp, Discord, web scraping. Harga mulai Rp 2 juta. Konsultasi gratis!",
    url: `${SITE_URL}/jasa-pembuatan-bot`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Pembuatan Bot & Otomasi",
      description: "Jasa pembuatan bot Telegram, WhatsApp, Discord, dan sistem otomasi/web scraping profesional untuk kebutuhan bisnis di Indonesia.",
      provider: { "@type": "LocalBusiness", name: "webCipta", url: SITE_URL },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: [
        { "@type": "Offer", name: "Bot Telegram / Discord", price: "2000000", priceCurrency: "IDR" },
        { "@type": "Offer", name: "Bot WhatsApp Bisnis", price: "5000000", priceCurrency: "IDR" },
        { "@type": "Offer", name: "Web Scraping / Otomasi", price: "3000000", priceCurrency: "IDR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Pembuatan Bot", item: `${SITE_URL}/jasa-pembuatan-bot` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Berapa harga jasa pembuatan bot Telegram?", acceptedAnswer: { "@type": "Answer", text: "Bot Telegram sederhana mulai Rp 2 juta (notifikasi, auto-reply, command). Bot kompleks dengan database, payment, atau AI mulai Rp 5–15 juta." } },
        { "@type": "Question", name: "Apa saja fungsi bot yang bisa dibuat?", acceptedAnswer: { "@type": "Answer", text: "Bot customer service otomatis, bot notifikasi pesanan, bot absensi, bot voting/polling, bot download, bot konversi file, bot monitoring server, web scraper otomatis, bot posting media sosial, dan banyak lagi." } },
        { "@type": "Question", name: "Berapa lama pembuatan bot selesai?", acceptedAnswer: { "@type": "Answer", text: "Bot sederhana 1–5 hari kerja. Bot kompleks dengan integrasi database, API eksternal, atau AI 1–4 minggu." } },
      ],
    },
  ],
}

const botTypes = [
  { icon: MessageSquare, title: "Bot Telegram", desc: "Bot notifikasi, auto-reply, manajemen grup, polling, bot download, bot konversi file, hingga bot dengan AI/ChatGPT." },
  { icon: MessageSquare, title: "Bot WhatsApp", desc: "Bot customer service otomatis, bot OTP, bot konfirmasi pesanan, bot katalog produk, terintegrasi WhatsApp Business API." },
  { icon: MessageSquare, title: "Bot Discord", desc: "Bot moderasi komunitas, bot musik, bot permainan, bot ekonomi virtual, bot role management, dan bot custom command." },
  { icon: Zap, title: "Web Scraping / Crawler", desc: "Ambil data otomatis dari website apapun — harga produk kompetitor, data listing properti, berita, lowongan kerja, dll." },
  { icon: Bot, title: "Otomasi & RPA", desc: "Otomasi pekerjaan repetitif — auto posting media sosial, auto form filling, otomasi laporan, sinkronisasi data antar sistem." },
  { icon: Clock, title: "Chatbot AI", desc: "Chatbot dengan kecerdasan buatan menggunakan OpenAI/Gemini — menjawab pertanyaan pelanggan 24 jam otomatis." },
]

const packages = [
  { name: "Bot Dasar", price: "Rp 2 juta", duration: "1–3 hari", features: ["Bot Telegram / Discord", "Command & auto-reply", "Sampai 10 fitur", "Deploy di server"] },
  { name: "Bot Bisnis", price: "Rp 5 juta", duration: "1–2 minggu", best: true, features: ["Bot WhatsApp / Telegram", "Integrasi database", "Dashboard admin", "Payment gateway", "Notifikasi real-time", "Garansi 30 hari"] },
  { name: "Bot Enterprise", price: "Rp 15 juta+", duration: "2–6 minggu", features: ["Multi-platform bot", "Integrasi AI/ChatGPT", "Scraping & otomasi", "Multi-user & role", "API custom", "Support prioritas"] },
]

const faqs = [
  { q: "Jenis bot apa saja yang bisa dibuat?", a: "Kami membuat bot Telegram, WhatsApp (via WA Business API / Baileys), Discord, bot web scraping/crawler, bot otomasi media sosial, bot monitoring, chatbot AI dengan OpenAI/Gemini, dan sistem RPA (Robotic Process Automation) untuk kebutuhan bisnis apa pun." },
  { q: "Berapa biaya jasa pembuatan bot Telegram, WhatsApp, atau Discord?", a: "Bot Telegram/Discord sederhana mulai Rp 2 juta (1–3 hari). Bot WhatsApp bisnis mulai Rp 5 juta. Bot kompleks dengan AI, database, dan dashboard mulai Rp 15 juta. Estimasi final setelah konsultasi gratis." },
  { q: "Apakah bot bisa berjalan 24 jam nonstop?", a: "Ya. Kami deploy bot di server VPS yang berjalan 24/7. Bot akan otomatis restart jika ada crash, dan kami monitoring uptime-nya." },
  { q: "Apakah bisa request fitur web scraping untuk kompetitor monitoring?", a: "Ya. Kami membangun web scraper yang mengambil data dari website target (harga produk, stok, rating, dll) secara otomatis sesuai jadwal, dengan output ke spreadsheet, database, atau notifikasi langsung." },
  { q: "Apakah bot yang dibuat bisa diintegrasikan dengan sistem yang sudah ada?", a: "Ya. Bot bisa diintegrasikan dengan sistem ERP, CRM, toko online (WooCommerce, Shopify), Google Sheets, database MySQL/PostgreSQL, REST API, dan layanan pihak ketiga apa pun." },
]

export default function JasaPembuatanBotPage() {
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
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">
              Konsultasi Gratis
            </a>
          </div>
        </nav>

        <main>
          <section className="py-16 md:py-24 lg:py-28 px-4 sm:px-8 max-w-5xl mx-auto">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-foreground">Jasa Pembuatan Bot</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-6">
              {["🤖 Telegram · WhatsApp · Discord", "⚡ Web Scraping & Otomasi", "🧠 AI & ChatGPT"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">{t}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Bot & Otomasi</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>Telegram · WhatsApp · Discord · AI</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              webCipta adalah <strong className="text-foreground">jasa pembuatan bot profesional</strong> — bot Telegram, WhatsApp, Discord, web scraping, chatbot AI, dan otomasi sistem untuk bisnis Anda. Berjalan <strong className="text-foreground">24 jam nonstop</strong>, harga mulai <strong className="text-foreground">Rp 2 juta</strong>, konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis via WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat Portfolio
              </Link>
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Jenis Bot yang Kami Kerjakan</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Dari bot sederhana hingga sistem otomasi enterprise yang kompleks.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {botTypes.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Harga Jasa Pembuatan Bot</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Harga transparan, estimasi final setelah konsultasi gratis.</p>
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
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">FAQ Jasa Pembuatan Bot</h2>
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
                { label: "Jasa Toko Online", href: "/jasa-pembuatan-toko-online" },
                { label: "Jasa Aplikasi Mobile", href: "/jasa-pembuatan-aplikasi-mobile" },
                { label: "Jasa Desain UI/UX", href: "/jasa-desain-ui-ux" },
                { label: "Jasa Company Profile", href: "/jasa-pembuatan-company-profile" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-border/25 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">{l.label}</Link>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Siap Buat Bot Otomatis?</h2>
              <p className="text-muted-foreground text-sm mb-8">Ceritakan kebutuhan Anda, kami siapkan solusi bot yang tepat dalam 24 jam.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>
        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40">© 2025 webCipta — Jasa Pembuatan Bot Telegram, WhatsApp, Discord & Otomasi</footer>
      </div>
    </>
  )
}
