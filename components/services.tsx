"use client"

import { useState } from "react"
import { Globe, Smartphone, Palette, Gauge, ShieldCheck, Headphones, ArrowUpRight, Check } from "lucide-react"
import { FadeIn } from "./text-reveal"

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Website Development",
    subtitle: "Web App & Landing Page",
    description: "Website yang cepat, SEO-friendly, dan scalable. Dari landing page hingga web app kompleks dengan Next.js dan teknologi modern.",
    features: ["Server-side Rendering", "SEO Optimization", "Progressive Web App", "API Development"],
    gradient: "from-cyan-500 to-blue-600",
    accent: "text-cyan-400",
    glow: "bg-cyan-500/10",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile App",
    subtitle: "iOS & Android",
    description: "Aplikasi cross-platform yang powerful dengan React Native dan Flutter. Native performance di semua device.",
    features: ["Cross Platform", "Push Notifications", "Offline Mode", "In-App Payments"],
    gradient: "from-emerald-500 to-teal-600",
    accent: "text-emerald-400",
    glow: "bg-emerald-500/10",
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    subtitle: "User Experience First",
    description: "Design intuitif yang tidak hanya cantik tapi juga user-friendly berdasarkan riset mendalam.",
    features: ["User Research", "Wireframing", "High-Fidelity Design", "Design System"],
    gradient: "from-violet-500 to-purple-600",
    accent: "text-violet-400",
    glow: "bg-violet-500/10",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance Optimization",
    subtitle: "Speed & Core Web Vitals",
    description: "Optimasi performa untuk Core Web Vitals sempurna dan loading super cepat yang meningkatkan konversi.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Lighthouse Audit"],
    gradient: "from-orange-500 to-amber-600",
    accent: "text-orange-400",
    glow: "bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Security & Maintenance",
    subtitle: "24/7 Protection",
    description: "Pemeliharaan berkala, monitoring real-time, backup otomatis, dan perlindungan dari ancaman cyber.",
    features: ["24/7 Monitoring", "Automated Backup", "Security Patches", "DDoS Protection"],
    gradient: "from-rose-500 to-pink-600",
    accent: "text-rose-400",
    glow: "bg-rose-500/10",
  },
  {
    icon: Headphones,
    number: "06",
    title: "IT Consultation",
    subtitle: "Strategic Planning",
    description: "Kami bantu Anda merencanakan arsitektur sistem yang scalable dan memilih tech stack optimal.",
    features: ["Tech Stack Advisory", "System Architecture", "Scalability Planning", "Budget Estimation"],
    gradient: "from-blue-500 to-indigo-600",
    accent: "text-blue-400",
    glow: "bg-blue-500/10",
  },
]

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [expanded, setExpanded] = useState<number | null>(null)

  const active = hovered !== null ? hovered : expanded

  return (
    <section id="layanan" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* ── Header ── */}
        <FadeIn className="mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Layanan Kami
              </div>
              <h2
                className="font-black tracking-tighter leading-[0.9]"
                style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
              >
                <span className="block text-foreground">Solusi Digital</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.2)",
                    color: "transparent",
                  }}
                >
                  Lengkap
                </span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs lg:text-right">
              Dari konsep hingga launch — standar kualitas internasional untuk setiap proyek.
            </p>
          </div>
        </FadeIn>

        {/* ── Two-column layout: list + detail ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: numbered list */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="divide-y divide-border/10">
              {services.map((service, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div
                    className="group cursor-default"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <div className={`flex items-center gap-5 py-5 transition-all duration-300 ${active === i ? "pl-3" : "pl-0"}`}>
                      {/* Number */}
                      <span className={`text-[11px] font-bold tracking-widest transition-colors duration-300 flex-shrink-0 ${active === i ? "text-primary" : "text-muted-foreground/30"}`}>
                        {service.number}
                      </span>

                      {/* Icon */}
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} flex-shrink-0 shadow-md transition-all duration-400 ${active === i ? "scale-100 opacity-100" : "scale-90 opacity-40"}`}>
                        <service.icon className="h-4.5 w-4.5 text-white" style={{ width: 18, height: 18 }} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-[10px] uppercase tracking-[0.15em] mb-0.5 transition-colors duration-300 ${active === i ? "text-primary/70" : "text-muted-foreground/40"}`}>
                          {service.subtitle}
                        </p>
                        <h3 className={`font-bold transition-all duration-300 text-sm md:text-base ${active === i ? "text-foreground" : "text-muted-foreground/70"}`}>
                          {service.title}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <div className={`flex-shrink-0 transition-all duration-300 ${active === i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>
                        <ArrowUpRight className={`h-4 w-4 ${service.accent}`} />
                      </div>
                    </div>

                    {/* Mobile expand: show description inline */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-500 ${active === i ? "max-h-[500px] pb-5 pl-14" : "max-h-0"}`}>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((f, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-[10px] text-muted-foreground/70">
                            <Check className="h-3 w-3 text-primary flex-shrink-0" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400} className="mt-8">
              <a
                href="#kontak"
                className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="relative">
                  Butuh layanan lain? Diskusikan dengan kami
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </FadeIn>
          </div>

          {/* Right: sticky detail panel — desktop only */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7">
            <div className="sticky top-28">
              <FadeIn delay={200}>
                {active !== null ? (
                  <div
                    key={active}
                    className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-md p-8 overflow-hidden relative"
                    style={{ animation: "scale-in 0.3s ease-out forwards" }}
                  >
                    {/* Gradient glow */}
                    <div className={`absolute -inset-1/2 ${services[active].glow} blur-[80px] opacity-60`} />
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${services[active].gradient} opacity-80`} />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${services[active].gradient} shadow-xl flex-shrink-0`}>
                          {(() => { const Icon = services[active].icon; return <Icon className="h-7 w-7 text-white" /> })()}
                        </div>
                        <div>
                          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${services[active].accent}`}>
                            {services[active].subtitle}
                          </p>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{services[active].title}</h3>
                        </div>
                        <span className="ml-auto text-6xl font-black text-muted-foreground/5">{services[active].number}</span>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                        {services[active].description}
                      </p>

                      <div className="grid grid-cols-2 gap-2.5">
                        {services[active].features.map((f, j) => (
                          <div key={j} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/60 border border-border/15 hover:border-primary/20 transition-colors">
                            <div className={`flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-br ${services[active].gradient} flex-shrink-0`}>
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-foreground/90">{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-5 border-t border-border/15 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground/60">Tertarik dengan layanan ini?</p>
                        <a
                          href="#kontak"
                          className="relative inline-flex items-center gap-2 rounded-full px-5 h-9 text-xs font-semibold overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all"
                        >
                          <span className={`absolute inset-0 bg-gradient-to-r ${services[active].gradient}`} />
                          <span className="relative text-white">Konsultasi Gratis</span>
                          <ArrowUpRight className="relative h-3.5 w-3.5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-border/10 bg-card/15 p-8 h-72 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        {[...Array(6)].map((_, j) => (
                          <div key={j} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${services[j].gradient} opacity-40`} />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground/40 tracking-widest uppercase">Arahkan kursor ke layanan</p>
                    </div>
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
