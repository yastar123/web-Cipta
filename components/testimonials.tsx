"use client"

import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { FadeIn } from "./text-reveal"

const testimonials = [
  {
    name: "Ahmad Rizki Pratama",
    role: "CEO",
    company: "TokoBaju.id",
    avatar: "AR",
    rating: 5,
    text: "webCipta benar-benar mengubah bisnis kami. Conversion rate naik 180% dalam 3 bulan pertama. Tim mereka responsif, profesional, dan selalu memberikan hasil terbaik.",
    metric: "+180%", metricLabel: "Conversion Rate",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "dr. Sari Dewi",
    role: "Founder",
    company: "SehatKu App",
    avatar: "SD",
    rating: 5,
    text: "Sebagai startup healthtech, kami butuh partner yang benar-benar mengerti kebutuhan kami. webCipta tidak hanya deliver on-time, tapi juga memberikan saran-saran strategic yang sangat valuable.",
    metric: "50K+", metricLabel: "Active Users",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Budi Santoso",
    role: "Head of Digital",
    company: "PropertyHub",
    avatar: "BS",
    rating: 5,
    text: "UI/UX design dari webCipta benar-benar kelas dunia. Tim kami yang awalnya skeptis sekarang malah jadi yang paling antusias menggunakan dashboard baru tersebut.",
    metric: "+65%", metricLabel: "Team Efficiency",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Rini Kusumawati",
    role: "Product Manager",
    company: "EduPlatform",
    avatar: "RK",
    rating: 5,
    text: "Proses kerja mereka sangat transparan. Setiap sprint ada demo, setiap issue langsung di-handle. Produk yang dihasilkan melebihi ekspektasi kami.",
    metric: "25K+", metricLabel: "Students",
    gradient: "from-orange-500 to-amber-600",
  },
]

const logos = ["Tokopedia", "Gojek", "Traveloka", "Bukalapak", "OVO", "GoPay", "Livin'", "Dana"]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [auto])

  const prev = () => { setAuto(false); setActive(p => (p - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setAuto(false); setActive(p => (p + 1) % testimonials.length) }

  const t = testimonials[active]

  return (
    <section id="testimonial" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* ── Header ── */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-5">
            <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
            Testimoni
          </div>
          <h2
            className="font-black tracking-tighter leading-[0.9]"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            <span className="block text-foreground">Apa Kata</span>
            <span
              className="block"
              style={{ WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.2)", color: "transparent" }}
            >
              Klien Kami
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            Kepercayaan klien adalah aset terbesar kami — dengan angka nyata di baliknya.
          </p>
        </FadeIn>

        {/* ── Main testimonial card ── */}
        <FadeIn delay={100}>
          <div
            key={active}
            className="relative rounded-2xl border border-border/25 bg-card/40 backdrop-blur-md p-6 md:p-10 overflow-hidden mb-4 shadow-xl shadow-background/30"
            style={{ animation: "scale-in 0.35s ease-out forwards" }}
          >
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${t.gradient} opacity-75`} />
            <div className={`absolute -top-1/2 -right-1/4 w-3/4 h-full bg-gradient-to-br ${t.gradient} opacity-[0.04] blur-[100px]`} />

            <div className="relative z-10 grid lg:grid-cols-5 gap-6 md:gap-8">
              {/* Quote side */}
              <div className="lg:col-span-3 flex flex-col">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} opacity-60 flex-shrink-0`}>
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed flex-1 mb-6 md:mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-white text-xs md:text-sm font-bold flex-shrink-0 shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>

              {/* Metric side */}
              <div className="lg:col-span-2 flex flex-col justify-between gap-4">
                <div className={`rounded-xl bg-gradient-to-br ${t.gradient} p-5 md:p-6 shadow-xl`}>
                  <p className="text-white/60 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-2 md:mb-3">Hasil Nyata</p>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{t.metric}</p>
                  <p className="text-white/80 text-sm font-medium">{t.metricLabel}</p>
                  <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-white/20">
                    <p className="text-white/50 text-[10px] md:text-[11px]">dalam 90 hari pertama</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {testimonials.map((_, j) => (
                    <button
                      key={j}
                      onClick={() => { setAuto(false); setActive(j) }}
                      className={`rounded-full transition-all duration-300 ${active === j ? "w-7 h-2 bg-primary shadow-sm shadow-primary/30" : "w-2 h-2 bg-border/60 hover:bg-border"}`}
                    />
                  ))}
                  <div className="flex gap-1.5 ml-auto">
                    <button onClick={prev} className="flex h-8 w-8 items-center justify-center rounded-full border border-border/30 bg-card/40 hover:bg-card/80 hover:border-primary/30 transition-all">
                      <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button onClick={next} className="flex h-8 w-8 items-center justify-center rounded-full border border-border/30 bg-card/40 hover:bg-card/80 hover:border-primary/30 transition-all">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Mini cards for other testimonials ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12 md:mb-16">
          {testimonials.filter((_, i) => i !== active).map((item) => (
            <FadeIn key={item.name} delay={80}>
              <button
                onClick={() => { setAuto(false); setActive(testimonials.indexOf(item)) }}
                className="w-full text-left rounded-xl border border-border/20 bg-card/25 p-4 hover:border-primary/25 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white text-[10px] font-bold flex-shrink-0 shadow-md`}>
                    {item.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground truncate">{item.name}</p>
                    <p className="text-[10px] text-muted-foreground/70 truncate">{item.role} · {item.company}</p>
                  </div>
                  <div className={`flex-shrink-0 text-xs font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.metric}</div>
                </div>
                <p className="text-[11px] text-muted-foreground/65 line-clamp-2 leading-relaxed">{item.text}</p>
              </button>
            </FadeIn>
          ))}
        </div>

        {/* ── Client logos ── */}
        <FadeIn delay={300}>
          <div className="rounded-2xl border border-border/15 bg-card/20 backdrop-blur-sm p-5 md:p-8">
            <p className="text-center text-[9px] md:text-[10px] font-bold text-muted-foreground/35 uppercase tracking-[0.3em] mb-5 md:mb-6">Dipercaya oleh perusahaan terkemuka</p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
              {logos.map((logo) => (
                <span key={logo} className="text-xs sm:text-sm font-bold text-muted-foreground/20 hover:text-muted-foreground/50 transition-all duration-300 cursor-default tracking-wide hover:scale-105">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
