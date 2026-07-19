"use client"

import { useState } from "react"
import { Search, Lightbulb, PenTool, Code, TestTube, Rocket, ArrowRight } from "lucide-react"
import { FadeIn } from "./text-reveal"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Analisis",
    duration: "1–2 minggu",
    description: "Kami mendengarkan, memahami, dan menganalisis bisnis Anda secara mendalam. Riset pasar, kompetitor, dan user persona dilakukan untuk memastikan solusi yang tepat sasaran.",
    details: ["Stakeholder Interview", "Market & Competitor Research", "User Persona Mapping", "Tech Stack Planning"],
    gradient: "from-cyan-500 to-blue-600",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategi & Perencanaan",
    duration: "1 minggu",
    description: "Menyusun roadmap yang jelas, milestones terukur, dan strategi teknis optimal. Anda selalu tahu apa yang dikerjakan, kapan, dan berapa biayanya.",
    details: ["Project Roadmap", "Feature Prioritization", "Timeline & Milestones", "Budget Breakdown"],
    gradient: "from-emerald-500 to-teal-600",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
  },
  {
    icon: PenTool,
    number: "03",
    title: "UI/UX Design",
    duration: "2–3 minggu",
    description: "Dari wireframe hingga high-fidelity prototype yang bisa Anda rasakan sebelum satu baris kode pun ditulis.",
    details: ["Wireframing & Flow", "Visual Design", "Interactive Prototype", "User Testing"],
    gradient: "from-violet-500 to-purple-600",
    accent: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
  },
  {
    icon: Code,
    number: "04",
    title: "Development",
    duration: "4–8 minggu",
    description: "Kode yang bersih, terstruktur, dan scalable. Development iteratif dengan weekly update dan akses ke staging environment.",
    details: ["Sprint-based Dev", "Clean Code & Review", "Weekly Progress Update", "Staging Environment"],
    gradient: "from-orange-500 to-amber-600",
    accent: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
  },
  {
    icon: TestTube,
    number: "05",
    title: "Testing & QA",
    duration: "1–2 minggu",
    description: "Pengujian menyeluruh di berbagai device dan browser. Bug-free guarantee sebelum produk live.",
    details: ["Cross-browser Testing", "Performance Audit", "Security Testing", "User Acceptance Test"],
    gradient: "from-rose-500 to-pink-600",
    accent: "text-rose-400",
    border: "border-rose-500/30",
    bg: "bg-rose-500/5",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Launch & Dukungan",
    duration: "Ongoing",
    description: "Peluncuran yang mulus diikuti monitoring 24/7. Kami hadir untuk update, optimasi, dan scaling saat bisnis Anda berkembang.",
    details: ["Zero-downtime Deploy", "24/7 Monitoring", "Performance Tracking", "Ongoing Maintenance"],
    gradient: "from-blue-500 to-indigo-600",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
  },
]

export function Process() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <section id="proses" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 xl:px-20">

        <FadeIn className="mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Proses Kerja
              </div>
              <h2
                className="font-black tracking-tighter leading-[0.9]"
                style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
              >
                <span className="block text-foreground">Cara Kami</span>
                <span
                  className="block"
                  style={{ WebkitTextStroke: "1.5px oklch(0.05 0.008 240 / 0.4)", color: "transparent" }}
                >
                  Bekerja
                </span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Proses yang transparan dan terukur — Anda selalu tahu perkembangan proyek Anda.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">

          {/* Step list */}
          <div className="md:col-span-1 lg:col-span-5">
            <div className="space-y-1">
              {steps.map((s, i) => (
                <FadeIn key={i} delay={i * 50}>
                  <button
                    className={`w-full text-left group transition-all duration-300 rounded-xl px-4 py-3.5 relative overflow-hidden ${
                      active === i
                        ? `${s.bg} ${s.border} border`
                        : "hover:bg-card/30 border border-transparent"
                    }`}
                    onClick={() => setActive(i)}
                  >
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full bg-gradient-to-b ${s.gradient} transition-all duration-500 ${active === i ? "h-3/5" : "h-0"}`} />
                    <div className="flex items-center gap-4">
                      <span className={`text-[10px] font-bold tracking-widest flex-shrink-0 transition-colors ${active === i ? s.accent : "text-muted-foreground/30"}`}>
                        {s.number}
                      </span>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${s.gradient} flex-shrink-0 transition-all duration-300 ${active === i ? "opacity-100 scale-100" : "opacity-30 scale-90"}`}>
                        <s.icon className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold transition-colors ${active === i ? "text-foreground" : "text-muted-foreground/60"}`}>
                          {s.title}
                        </p>
                      </div>
                      <span className={`text-[10px] flex-shrink-0 rounded-full px-2 py-0.5 transition-all duration-300 ${
                        active === i ? `bg-gradient-to-r ${s.gradient} text-white` : "text-muted-foreground/30"
                      }`}>
                        {s.duration}
                      </span>
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="md:col-span-1 lg:col-span-7">
            <FadeIn delay={200}>
              <div
                key={active}
                className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-md p-8 relative overflow-hidden"
                style={{ animation: "scale-in 0.3s ease-out forwards" }}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${step.gradient}`} />
                <div className={`absolute -top-24 -right-24 w-48 h-48 ${step.bg} rounded-full blur-[60px] opacity-60`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-xl flex-shrink-0`}>
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5 ${step.accent}`}>
                          Langkah {step.number}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <span className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-bold bg-gradient-to-r ${step.gradient} text-white`}>
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">{step.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {step.details.map((d, j) => (
                      <div key={j} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/60 border border-border/15">
                        <div className={`flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-br ${step.gradient} flex-shrink-0 text-white text-[10px] font-bold`}>
                          {j + 1}
                        </div>
                        <span className="text-xs text-foreground/80">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/15 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {steps.map((_, j) => (
                        <button
                          key={j}
                          onClick={() => setActive(j)}
                          className={`rounded-full transition-all duration-300 ${j === active ? `w-6 h-1.5 bg-gradient-to-r ${step.gradient}` : "w-1.5 h-1.5 bg-border/40 hover:bg-border/60"}`}
                        />
                      ))}
                    </div>
                    {active < steps.length - 1 ? (
                      <button
                        onClick={() => setActive(active + 1)}
                        className="relative inline-flex items-center gap-2 rounded-full px-5 h-9 text-xs font-semibold overflow-hidden hover:scale-105 transition-all"
                      >
                        <span className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-80`} />
                        <span className="relative text-white">Berikutnya</span>
                        <ArrowRight className="relative h-3.5 w-3.5 text-white" />
                      </button>
                    ) : (
                      <a
                        href="#kontak"
                        className="relative inline-flex items-center gap-2 rounded-full px-5 h-9 text-xs font-semibold overflow-hidden hover:scale-105 transition-all"
                      >
                        <span className={`absolute inset-0 bg-gradient-to-r ${step.gradient}`} />
                        <span className="relative text-white">Mulai Proyek</span>
                        <ArrowRight className="relative h-3.5 w-3.5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
