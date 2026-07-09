import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Smartphone, Bell, Wifi, Store } from "lucide-react"

const SITE_URL = "https://webcipta.my.id"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Mobile Android iOS",
  description:
    "Jasa pembuatan aplikasi mobile Android dan iOS profesional. React Native & Flutter cross-platform. Harga mulai Rp 20 juta. Publish ke Play Store & App Store. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan aplikasi mobile",
    "jasa pembuatan aplikasi android",
    "jasa pembuatan aplikasi ios",
    "jasa buat aplikasi android",
    "jasa pembuatan app mobile",
    "jasa pembuatan aplikasi mobile profesional",
    "jasa pembuatan aplikasi mobile indonesia",
    "jasa pembuatan aplikasi mobile lampung",
    "biaya pembuatan aplikasi mobile",
    "harga jasa pembuatan aplikasi android",
    "jasa flutter developer",
    "jasa react native developer",
  ],
  alternates: { canonical: `${SITE_URL}/jasa-pembuatan-aplikasi-mobile` },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Mobile Android iOS Profesional | webCipta",
    description: "Jasa pembuatan aplikasi mobile Android & iOS. React Native & Flutter. Mulai Rp 20 juta. Publish Play Store & App Store. Konsultasi gratis!",
    url: `${SITE_URL}/jasa-pembuatan-aplikasi-mobile`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Jasa Pembuatan Aplikasi Mobile Android & iOS",
      description: "Jasa pembuatan aplikasi mobile cross-platform Android dan iOS menggunakan React Native dan Flutter. Termasuk publish ke Google Play Store dan Apple App Store.",
      provider: { "@type": "LocalBusiness", name: "webCipta", url: SITE_URL },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: { "@type": "Offer", price: "20000000", priceCurrency: "IDR", description: "Aplikasi mobile mulai Rp 20 juta" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Jasa Pembuatan Website", item: `${SITE_URL}/jasa-pembuatan-website` },
        { "@type": "ListItem", position: 3, name: "Jasa Pembuatan Aplikasi Mobile", item: `${SITE_URL}/jasa-pembuatan-aplikasi-mobile` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Berapa harga jasa pembuatan aplikasi mobile?", acceptedAnswer: { "@type": "Answer", text: "Harga jasa pembuatan aplikasi mobile mulai Rp 20 juta untuk aplikasi sederhana, Rp 30-60 juta untuk aplikasi medium, hingga Rp 100 juta+ untuk aplikasi kompleks. Harga mencakup Android dan iOS sekaligus." } },
        { "@type": "Question", name: "Apa bedanya React Native dan Flutter?", acceptedAnswer: { "@type": "Answer", text: "Keduanya cross-platform (satu kode untuk Android & iOS). React Native berbasis JavaScript/TypeScript (cocok jika sudah ada tim web), Flutter berbasis Dart (performa lebih native). Kami rekomendasikan berdasarkan kebutuhan proyek Anda." } },
      ],
    },
  ],
}

const features = [
  { icon: Smartphone, title: "Android & iOS Sekaligus", desc: "Satu kode, dua platform. Lebih hemat biaya dan waktu dibanding native development terpisah." },
  { icon: Bell, title: "Push Notification", desc: "Kirim notifikasi langsung ke HP pengguna — promosi, reminder, update status pesanan, dll." },
  { icon: Wifi, title: "Offline Mode", desc: "Aplikasi tetap berfungsi tanpa internet untuk fitur-fitur tertentu, data tersinkron saat online kembali." },
  { icon: Store, title: "Publish ke Play Store & App Store", desc: "Kami urus seluruh proses submission ke Google Play Store dan Apple App Store hingga live." },
  { icon: CheckCircle2, title: "Integrasi API & Backend", desc: "Terhubung dengan server, database, payment gateway, maps, dan third-party service apa pun." },
  { icon: ArrowRight, title: "UI/UX Mobile-First", desc: "Desain intuitif mengikuti guideline Material Design (Android) dan Human Interface Guidelines (iOS)." },
]

const faqs = [
  { q: "Berapa biaya jasa pembuatan aplikasi mobile Android dan iOS?", a: "Mulai Rp 20 juta untuk aplikasi sederhana (1-2 fitur utama), Rp 30–60 juta untuk aplikasi medium, hingga Rp 100 juta+ untuk aplikasi kompleks (marketplace, fintech, healthcare). Harga sudah mencakup Android DAN iOS sekaligus." },
  { q: "Berapa lama pembuatan aplikasi mobile selesai?", a: "Aplikasi sederhana 4–8 minggu, aplikasi medium 2–4 bulan, aplikasi kompleks 4–6 bulan. Timeline dan milestone jelas di proposal." },
  { q: "Apakah webCipta bisa membantu publish ke Google Play Store dan App Store?", a: "Ya. Kami menangani seluruh proses: persiapan asset, submission, review, hingga aplikasi live di Play Store dan App Store. Kami juga membantu setup developer account jika belum ada." },
  { q: "Apakah bisa request fitur seperti payment, GPS, atau kamera?", a: "Ya. Kami mengintegrasikan fitur apa pun yang dibutuhkan: payment gateway (Midtrans/Xendit), real-time GPS tracking, kamera dan upload foto, QR code scanner, face recognition, dan lainnya." },
]

export default function JasaPembuatanAplikasiMobilePage() {
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
            <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20aplikasi%20mobile." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 h-8 text-xs font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-opacity">
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
              <span className="text-foreground">Aplikasi Mobile</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Aplikasi Mobile</span>
              <span className="block text-foreground/80" style={{ fontSize: "0.72em" }}>Android & iOS Profesional</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              webCipta membangun <strong className="text-foreground">aplikasi mobile Android dan iOS</strong> berkualitas tinggi menggunakan React Native dan Flutter. Satu kode, dua platform — lebih hemat biaya. Harga mulai <strong className="text-foreground">Rp 20 juta</strong>, termasuk publish ke Play Store dan App Store.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20aplikasi%20mobile." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                Konsultasi Gratis <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground">
                Lihat Portfolio App
              </Link>
            </div>
          </section>

          <section className="py-16 md:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-2">Fitur Aplikasi Mobile yang Kami Kerjakan</h2>
            <p className="text-muted-foreground text-sm mb-10 max-w-xl">Dari aplikasi bisnis sederhana hingga platform mobile kompleks.</p>
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
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter mb-8">FAQ Jasa Pembuatan Aplikasi Mobile</h2>
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
                { label: "Jasa Pembuatan Toko Online", href: "/jasa-pembuatan-toko-online" },
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
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">Siap Buat Aplikasi Mobile?</h2>
              <p className="text-muted-foreground text-sm mb-8">Konsultasi gratis, proposal dalam 24 jam, pengerjaan oleh tim profesional berpengalaman.</p>
              <a href="https://wa.me/6285366195381?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20aplikasi%20mobile." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 h-12 text-sm font-bold bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Chat WhatsApp 0853-6619-5381
              </a>
            </div>
          </section>
        </main>
        <footer className="border-t border-border/15 py-6 text-center text-xs text-muted-foreground/40 px-4">
          © 2025 webCipta — Jasa Pembuatan Aplikasi Mobile Android & iOS di Indonesia
        </footer>
      </div>
    </>
  )
}
