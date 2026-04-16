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
    color: "oklch(0.72 0.18 195)",
  },
  {
    name: "dr. Sari Dewi",
    role: "Founder",
    company: "SehatKu App",
    avatar: "SD",
    rating: 5,
    text: "Sebagai startup healthtech, kami butuh partner yang benar-benar mengerti kebutuhan kami. webCipta tidak hanya deliver on-time, tapi juga memberikan saran strategic yang sangat valuable.",
    metric: "50K+", metricLabel: "Active Users",
    gradient: "from-emerald-500 to-teal-600",
    color: "oklch(0.65 0.18 160)",
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
    color: "oklch(0.55 0.22 290)",
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
    color: "oklch(0.72 0.18 50)",
  },
]

const logos = ["Tokopedia", "Gojek", "Traveloka", "Bukalapak", "OVO", "GoPay", "Livin'", "Dana"]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActive((p) => (p + 1) % testimonials.length)
        setIsAnimating(false)
      }, 200)
    }, 5500)
    return () => clearInterval(t)
  }, [auto])

  const goTo = (i: number) => {
    setAuto(false)
    setIsAnimating(true)
    setTimeout(() => { setActive(i); setIsAnimating(false) }, 200)
  }
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((active + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section id="testimonial" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/25 via-background to-card/25" />

      {/* Large decorative quote mark */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 font-black text-foreground/[0.02] select-none pointer-events-none leading-none hidden lg:block"
        style={{ fontSize: "clamp(200px, 25vw, 380px)" }}
        aria-hidden
      >
        "
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-14 xl:px-20">

        {/* Header */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Testimoni
              </div>
              <h2
                className="font-black tracking-tighter"
                style={{ fontSize: "clamp(36px, 7vw, 96px)", lineHeight: 0.88 }}
              >
                <span className="block text-foreground">Apa Kata</span>
                <span
                  className="block"
                  style={{ WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.18)", color: "transparent" }}
                >
                  Klien Kami
                </span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Kepercayaan klien adalah aset terbesar kami — dengan angka nyata di baliknya.
            </p>
          </div>
        </FadeIn>

        {/* Main testimonial */}
        <FadeIn delay={80}>
          <div className="relative rounded-2xl sm:rounded-3xl border border-border/20 bg-card/30 backdrop-blur-md overflow-hidden mb-4 shadow-2xl shadow-black/20">
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-700"
              style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
            />
            {/* Ambient glow */}
            <div
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px] transition-all duration-700 opacity-20 pointer-events-none"
              style={{ background: t.color }}
            />

            <div
              className={`relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
            >
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Quote side */}
                <div className="lg:col-span-3 flex flex-col">
                  {/* Stars + badge */}
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} opacity-70 flex-shrink-0`}>
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <p
                    className="text-foreground/90 leading-relaxed flex-1 mb-8 italic font-light"
                    style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-white text-sm font-bold flex-shrink-0 shadow-lg`}
                      style={{ width: 44, height: 44 }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground/60">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>

                {/* Metric side */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  {/* Metric card */}
                  <div className={`relative rounded-2xl bg-gradient-to-br ${t.gradient} p-6 sm:p-7 overflow-hidden flex-1 flex flex-col justify-between`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
                    <div className="relative z-10">
                      <p className="text-white/60 text-[9px] font-bold uppercase tracking-[0.25em] mb-3">Hasil Nyata</p>
                      <p
                        className="text-white font-black tracking-tighter leading-none mb-1"
                        style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                      >
                        {t.metric}
                      </p>
                      <p className="text-white/75 text-sm font-medium">{t.metricLabel}</p>
                      <div className="mt-4 pt-4 border-t border-white/15">
                        <p className="text-white/40 text-[10px]">dalam 90 hari pertama</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {testimonials.map((_, j) => (
                        <button
                          key={j}
                          onClick={() => goTo(j)}
                          className={`rounded-full transition-all duration-400 ${j === active ? "w-6 h-2 bg-primary shadow-sm shadow-primary/30" : "w-2 h-2 bg-border/60 hover:bg-border"}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={prev}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/25 bg-card/40 hover:bg-card/80 hover:border-primary/30 transition-all group"
                      >
                        <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </button>
                      <button
                        onClick={next}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/25 bg-card/40 hover:bg-card/80 hover:border-primary/30 transition-all group"
                      >
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12 md:mb-16">
          {testimonials
            .filter((_, i) => i !== active)
            .map((item) => (
              <FadeIn key={item.name} delay={90}>
                <button
                  onClick={() => goTo(testimonials.indexOf(item))}
                  className="w-full text-left rounded-xl border border-border/15 bg-card/20 p-4 hover:border-primary/20 hover:bg-card/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`flex items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white text-[10px] font-bold flex-shrink-0 shadow-md`}
                      style={{ width: 32, height: 32 }}
                    >
                      {item.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-foreground/80 truncate">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground/50 truncate">{item.role} · {item.company}</p>
                    </div>
                    <span className={`flex-shrink-0 text-xs font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground/55 line-clamp-2 leading-relaxed italic">
                    &ldquo;{item.text.slice(0, 80)}...&rdquo;
                  </p>
                </button>
              </FadeIn>
            ))}
        </div>

        {/* Logos */}
        <FadeIn delay={200}>
          <div className="rounded-2xl border border-border/10 bg-card/15 backdrop-blur-sm p-6 md:p-8">
            <p className="text-center text-[9px] font-bold text-muted-foreground/30 uppercase tracking-[0.3em] mb-6">
              Dipercaya oleh perusahaan terkemuka
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="text-xs sm:text-sm font-black text-muted-foreground/15 hover:text-muted-foreground/45 transition-all duration-300 cursor-default tracking-wide hover:scale-105"
                >
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
