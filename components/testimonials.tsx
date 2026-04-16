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
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">
            <span className="w-4 h-px bg-primary" />
            Testimoni
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Apa kata{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              klien kami
            </span>
          </h2>
        </FadeIn>

        {/* Main card */}
        <FadeIn delay={100}>
          <div className="relative rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 md:p-10 overflow-hidden mb-4">
            <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${t.gradient} opacity-[0.06] blur-[100px] transition-all duration-1000`} />

            <div className="relative z-10 grid lg:grid-cols-5 gap-8">
              {/* Left: quote */}
              <div className="lg:col-span-3 flex flex-col">
                <Quote className="h-7 w-7 text-primary/30 mb-4 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-white text-sm font-bold flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-2 flex flex-col justify-between gap-4">
                <div className={`rounded-xl bg-gradient-to-br ${t.gradient} p-6`}>
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider mb-2">Hasil Nyata</p>
                  <p className="text-3xl font-bold text-white">{t.metric}</p>
                  <p className="text-white/70 text-xs mt-1">{t.metricLabel}</p>
                  <p className="text-white/50 text-[10px] mt-1">dalam 90 hari pertama</p>
                </div>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, j) => (
                    <button
                      key={j}
                      onClick={() => { setAuto(false); setActive(j) }}
                      className={`rounded-full transition-all duration-300 ${active === j ? "w-6 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-border/60 hover:bg-border"}`}
                    />
                  ))}
                  <div className="flex gap-1 ml-auto">
                    <button onClick={prev} className="flex h-8 w-8 items-center justify-center rounded-full border border-border/30 hover:bg-card/60 hover:border-border/60 transition-all">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button onClick={next} className="flex h-8 w-8 items-center justify-center rounded-full border border-border/30 hover:bg-card/60 hover:border-border/60 transition-all">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mini cards for other testimonials */}
        <div className="grid sm:grid-cols-3 gap-3 mb-12 md:mb-16">
          {testimonials.filter((_, i) => i !== active).map((item) => (
            <FadeIn key={item.name} delay={80}>
              <button
                onClick={() => { setAuto(false); setActive(testimonials.indexOf(item)) }}
                className="w-full text-left rounded-xl border border-border/15 bg-card/20 p-4 hover:border-primary/20 hover:bg-card/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white text-[11px] font-bold flex-shrink-0`}>
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{item.name}</p>
                    <p className="text-[10px] text-muted-foreground">{item.company}</p>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">{item.text}</p>
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Client logos */}
        <FadeIn delay={300} className="text-center">
          <p className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.25em] mb-6">Dipercaya oleh perusahaan terkemuka</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {logos.map((logo) => (
              <span key={logo} className="text-sm font-semibold text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors cursor-default tracking-wide">
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
