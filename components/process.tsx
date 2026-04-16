"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Lightbulb, Code2, Rocket, Check, ArrowRight } from "lucide-react"
import { FadeIn } from "./text-reveal"
import { Button } from "./ui/button"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Research",
    subtitle: "Memahami Visi Anda",
    description: "Deep-dive session untuk memahami bisnis Anda — goals, target audience, hingga pain points. Riset kompetitor dan market analysis untuk positioning yang tepat.",
    duration: "1–2 Minggu",
    deliverables: ["Business Requirements", "Competitor Analysis", "User Persona & Journey", "Project Scope"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Design & Prototype",
    subtitle: "Visualisasi Konsep",
    description: "Tim designer kami mengubah requirements menjadi wireframe, mockup high-fidelity, dan prototype interaktif — Anda merasakan produk sebelum satu baris kode ditulis.",
    duration: "2–3 Minggu",
    deliverables: ["Wireframes & Sitemap", "High-Fidelity UI Design", "Interactive Prototype", "Design System"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    subtitle: "Membangun Impian",
    description: "Implementasi dengan teknologi modern dan best practices. Agile methodology dengan sprint reviews reguler — Anda selalu tahu progress dan bisa memberi feedback.",
    duration: "4–8 Minggu",
    deliverables: ["Fully Functional App", "Clean Documented Code", "API Documentation", "QA Test Reports"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Growth",
    subtitle: "Go Live & Beyond",
    description: "Zero-downtime deployment, monitoring tools, dan training untuk tim Anda. Kami tetap support untuk memastikan produk terus berkembang bersama bisnis Anda.",
    duration: "Ongoing",
    deliverables: ["Live Production App", "Deployment Docs", "Team Training", "24/7 Support"],
    gradient: "from-orange-500 to-amber-600",
  },
]

export function Process() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActive(current => (current + 1) % steps.length)
          return 0
        }
        return prev + 0.6
      })
    }, 50)
    return () => clearInterval(interval)
  }, [active])

  return (
    <section id="proses" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">
            <span className="w-4 h-px bg-primary" />
            Cara Kami Bekerja
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Proses yang{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              transparan
            </span>{" "}
            dan terstruktur
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Metodologi yang teruji untuk hasil maksimal. Anda selalu tahu progress dan terlibat dalam setiap keputusan.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left nav */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-2">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <button
                    onClick={() => { setActive(i); setProgress(0) }}
                    className={`group w-full text-left px-5 py-4 rounded-xl border transition-all duration-500 relative overflow-hidden ${
                      active === i
                        ? "bg-card/50 border-primary/20 backdrop-blur-sm"
                        : "bg-transparent border-border/15 hover:border-border/30 hover:bg-card/20"
                    }`}
                  >
                    {active === i && (
                      <div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} transition-all duration-500 flex-shrink-0 ${active === i ? "shadow-md" : "opacity-50 scale-90"}`}>
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[10px] font-bold tracking-wider ${active === i ? "text-primary" : "text-muted-foreground"}`}>{step.number}</span>
                          <span className="text-[10px] text-muted-foreground/60 px-1.5 py-0.5 rounded-full bg-muted/40">{step.duration}</span>
                        </div>
                        <h3 className={`text-sm font-semibold transition-colors ${active === i ? "text-foreground" : "text-muted-foreground"}`}>{step.title}</h3>
                      </div>
                      <ArrowRight className={`h-3.5 w-3.5 flex-shrink-0 transition-all duration-300 ${active === i ? "opacity-100 text-primary" : "opacity-0"}`} />
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right detail */}
          <div className="lg:col-span-7">
            <FadeIn delay={200}>
              <div className="relative rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 md:p-8 overflow-hidden">
                <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${steps[active].gradient} opacity-[0.04] blur-[80px] transition-all duration-1000`} />
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${steps[active].gradient} shadow-lg flex-shrink-0`}>
                      {(() => { const Icon = steps[active].icon; return <Icon className="h-6 w-6 text-white" /> })()}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{steps[active].subtitle}</p>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{steps[active].title}</h3>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {steps[active].description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Yang Akan Anda Dapatkan</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {steps[active].deliverables.map((d, j) => (
                        <div key={j} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/50 border border-border/20 hover:border-primary/20 transition-colors group">
                          <div className={`flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br ${steps[active].gradient} flex-shrink-0`}>
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-xs font-medium text-foreground">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-5 border-t border-border/20 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Estimasi Waktu</p>
                      <p className={`text-2xl font-bold bg-gradient-to-r ${steps[active].gradient} bg-clip-text text-transparent`}>{steps[active].duration}</p>
                    </div>
                    <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 h-10 text-sm font-medium">
                      Mulai Proyek
                      <ArrowRight className="h-3.5 w-3.5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats banner */}
        <FadeIn delay={400} className="mt-12 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/20 rounded-2xl border border-border/20 bg-card/20 backdrop-blur-sm overflow-hidden">
            {[
              { val: "2–4", unit: "Minggu", desc: "Rata-rata MVP" },
              { val: "100%", unit: "Transparan", desc: "Update rutin" },
              { val: "∞", unit: "Revisi", desc: "Unlimited" },
              { val: "24/7", unit: "Support", desc: "Setelah launch" },
            ].map((s, i) => (
              <div key={i} className="p-5 md:p-6 text-center">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">{s.val}</p>
                <p className="text-xs font-semibold text-foreground mt-1">{s.unit}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
