import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Package, BarChart3 } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Toko Online Profesional Murah | webCipta",
  description:
    "Jasa pembuatan toko online profesional di Indonesia. E-commerce lengkap: produk, keranjang, pembayaran digital (QRIS, GoPay, OVO), manajemen stok. Harga mulai Rp 15 juta. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan toko online",
    "jasa pembuatan toko online profesional",
    "jasa buat toko online",
    "jasa pembuatan ecommerce",
    "jasa buat website toko online",
    "jasa pembuatan toko online murah",
    "jasa pembuatan toko online indonesia",
    "jasa toko online lampung",
    "biaya pembuatan toko online",
    "harga jasa pembuatan toko online",
    "jasa ecommerce indonesia",
    "jasa website jualan online",
  ],
  alternates: { canonical: `${SITE_URL}/jasa-pembuatan-toko-online` },
  openGraph: {
    title: "Jasa Pembuatan Toko Online Profesional Murah | webCipta",
    description: "Jasa pembuatan toko online e-commerce lengkap. Produk, pembayaran digital, manajemen stok. Harga mulai Rp 15 juta. Konsultasi gratis!",
    url: `${SITE_URL}/jasa-pembuatan-toko-online`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Pembuatan Toko Online / E-Commerce",
      description: "Jasa pembuatan toko online profesional lengkap dengan katalog produk, keranjang belanja, pembayaran digital, manajemen stok, dan laporan penjualan.",
      provider: { "@type": "LocalBusiness", name: "webCipta", url: SITE_URL },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: { "@type": "Offer", price: "15000000", priceCurrency: "IDR", description: "Toko online lengkap mulai Rp 15 juta" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Pembuatan Website", item: `${SITE_URL}/jasa-pembuatan-website` },
        { "@type": "ListItem", position: 3, name: "Jasa Pembuatan Toko Online", item: `${SITE_URL}/jasa-pembuatan-toko-online` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Berapa harga jasa pembuatan toko online?", acceptedAnswer: { "@type": "Answer", text: "Harga jasa pembuatan toko online mulai Rp 15 juta untuk toko online standar, Rp 30–50 juta untuk marketplace custom, hingga Rp 100 juta+ untuk platform e-commerce enterprise." } },
        { "@type": "Question", name: "Payment gateway apa yang bisa diintegrasikan?", acceptedAnswer: { "@type": "Answer", text: "Kami mengintegrasikan Midtrans, Xendit, atau payment gateway pilihan Anda — mendukung transfer bank, QRIS, GoPay, OVO, Dana, ShopeePay, kartu kredit, dan COD." } },
      ],
    },
  ],
}

const features = [
  { icon: ShoppingCart, title: "Katalog Produk Unlimited", desc: "Upload produk tanpa batas, variasi ukuran/warna, foto multiple, deskripsi lengkap, dan kategori terorganisir." },
  { icon: CreditCard, title: "Pembayaran Digital Lengkap", desc: "Midtrans / Xendit: transfer bank, QRIS, GoPay, OVO, Dana, ShopeePay, kartu kredit, dan bayar di tempat (COD)." },
  { icon: Package, title: "Manajemen Stok Real-time", desc: "Stok otomatis berkurang saat pesanan masuk, notifikasi stok menipis, dan laporan inventory harian." },
  { icon: BarChart3, title: "Dashboard & Laporan", desc: "Laporan penjualan harian/bulanan, produk terlaris, grafik pendapatan, dan export ke Excel/PDF." },
  { icon: ArrowRight, title: "Integrasi Pengiriman", desc: "JNE, JNT, SiCepat, Anteraja, Pos Indonesia — cek ongkos kirim otomatis berdasarkan lokasi pembeli." },
  { icon: CheckCircle2, title: "Admin Panel Mudah", desc: "Dashboard admin simpel untuk kelola produk, pesanan, pelanggan, dan promosi tanpa perlu skill teknis." },
]

const faqs = [
  { q: "Berapa harga jasa pembuatan toko online profesional?", a: "Mulai Rp 15 juta untuk toko online standar (produk, keranjang, checkout, pembayaran digital, manajemen stok). Rp 30–50 juta untuk fitur lebih kompleks seperti multi-seller, loyalty program, atau marketplace." },
  { q: "Apa saja payment gateway yang bisa diintegrasikan?", a: "Kami mengintegrasikan Midtrans atau Xendit yang mendukung transfer bank, QRIS, GoPay, OVO, Dana, ShopeePay, kartu kredit, dan COD. Bisa disesuaikan dengan kebutuhan bisnis Anda." },
  { q: "Apakah toko online bisa dikelola sendiri tanpa keahlian teknis?", a: "Ya. Kami menyediakan panel admin yang mudah digunakan — tambah/edit produk, proses pesanan, kelola promosi — semua bisa dilakukan tanpa coding. Kami juga memberikan training penggunaan." },
  { q: "Berapa lama pembuatan toko online selesai?", a: "Toko online standar 3–6 minggu. Semakin kompleks fitur yang dibutuhkan, semakin lama waktu pengerjaan. Timeline pasti diberikan dalam proposal." },
]

export default function JasaPembuatanTokoOnlinePage() {
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
            <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20toko%20online." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">
              Konsultasi Gratis
            </a>
          </div>
        </nav>

        <main>
          <section className="py-16 md:py-24 lg:py-28 px-4 sm:px-8 max-w-5xl mx-auto">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/jasa-pembuatan-website" className="hover:text-primary transition-colors">Jasa Pembuatan Website</Link>
              <span>/</span>
              <span className="text-foreground">Toko Online</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Toko Online</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>E-Commerce Profesional</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Buka toko online profesional bersama webCipta. Kami bangun <strong className="text-foreground">toko online lengkap</strong> — katalog produk, keranjang belanja, pembayaran digital (QRIS, GoPay, OVO, Dana), manajemen stok, dan laporan penjualan. Mulai dari <strong className="text-foreground">Rp 15 juta</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20toko%20online." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat Portfolio Toko Online
              </Link>
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Fitur Toko Online yang Kami Bangun</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Semua yang dibutuhkan untuk bisnis online yang sukses, siap pakai dari hari pertama.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/20 bg-card/25 p-5">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">FAQ Jasa Pembuatan Toko Online</h2>
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
            <h2 className="text-lg font-bold mb-4 text-foreground">Layanan Lainnya</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website" },
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

          <section className="py-16 md:py-24 px-4 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Siap Buka Toko Online?</h2>
              <p className="text-muted-foreground text-sm mb-8">Konsultasi gratis, proposal harga dalam 24 jam, pengerjaan tepat waktu.</p>
              <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20toko%20online." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>
        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40 px-4">
          © 2025 webCipta — Jasa Pembuatan Toko Online Profesional di Indonesia
        </footer>
      </div>
    </>
  )
}
