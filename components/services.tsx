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
    description: "Website cepat, SEO-friendly, dan scalable. Dari landing page hingga web app kompleks menggunakan Next.js dan teknologi terdepan.",
    features: ["Server-side Rendering", "SEO Optimization", "Progressive Web App", "API Integration"],
    gradient: "from-cyan-500 to-blue-600",
    glow: "oklch(0.72 0.18 195 / 0.12)",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    span: "lg:col-span-2 lg:row-span-2",
    size: "large",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile App",
    subtitle: "iOS & Android",
    description: "Aplikasi cross-platform powerful dengan React Native dan Flutter. Native performance di semua perangkat.",
    features: ["Cross Platform", "Push Notifications", "Offline Mode", "In-App Payments"],
    gradient: "from-emerald-500 to-teal-600",
    glow: "oklch(0.65 0.18 160 / 0.12)",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    span: "lg:col-span-1 lg:row-span-2",
    size: "medium",
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    subtitle: "User Experience First",
    description: "Design intuitif yang cantik sekaligus fungsional, berdasarkan riset user yang mendalam.",
    features: ["User Research", "Wireframing", "High-Fidelity", "Design System"],
    gradient: "from-violet-500 to-purple-600",
    glow: "oklch(0.55 0.22 290 / 0.12)",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    span: "lg:col-span-1",
    size: "small",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance",
    subtitle: "Core Web Vitals",
    description: "Optimasi loading super cepat yang meningkatkan konversi dan ranking SEO secara signifikan.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Lighthouse Audit"],
    gradient: "from-orange-500 to-amber-600",
    glow: "oklch(0.72 0.18 50 / 0.12)",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    span: "lg:col-span-1",
    size: "small",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Security & Maintenance",
    subtitle: "24/7 Protection",
    description: "Pemeliharaan berkala, monitoring real-time, dan proteksi terhadap ancaman cyber.",
    features: ["24/7 Monitoring", "Automated Backup", "Security Patches", "DDoS Protection"],
    gradient: "from-rose-500 to-pink-600",
    glow: "oklch(0.6 0.22 10 / 0.12)",
    accent: "text-rose-400",
    border: "border-rose-500/20",
    span: "lg:col-span-1",
    size: "small",
  },
  {
    icon: Headphones,
    number: "06",
    title: "IT Consultation",
    subtitle: "Strategic Technology Planning",
    description: "Kami bantu Anda merencanakan arsitektur sistem yang scalable, memilih tech stack yang tepat, dan membuat roadmap digital yang realistis sesuai anggaran dan tujuan bisnis Anda.",
    features: ["Tech Stack Advisory", "System Architecture", "Scalability Planning", "Budget Estimation"],
    gradient: "from-blue-500 to-indigo-600",
    glow: "oklch(0.55 0.18 240 / 0.12)",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    span: "lg:col-span-3",
    size: "wide",
  },
]

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="layanan" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-14 xl:px-20">

        {/* Header */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Layanan Kami
              </div>
              <h2
                className="font-black tracking-tighter"
                style={{ fontSize: "clamp(34px, 6.5vw, 90px)", lineHeight: 0.88 }}
              >
                <span className="block text-foreground">Jasa Pembuatan</span>
                <span
                  className="block"
                  style={{ WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.18)", color: "transparent" }}
                >
                  Website & App
                </span>
              </h2>
              <p className="sr-only">
                Layanan jasa pembuatan website profesional, aplikasi mobile, UI/UX design, optimasi performa, dan konsultasi IT di Bandar Lampung & seluruh Indonesia.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:text-right">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Dari konsep hingga launch — standar kualitas internasional untuk setiap proyek.
              </p>
              <a
                href="#kontak"
                className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-foreground transition-colors lg:self-end"
              >
                <span className="relative">
                  Butuh layanan custom?
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, i) => {
            const isHovered = hovered === i
            const isLarge = service.size === "large"
            const isWide = service.size === "wide"

            return (
              <FadeIn key={i} delay={i * 55} className={service.span}>
                <div
                  className={`relative rounded-2xl border ${service.border} bg-card/25 backdrop-blur-sm overflow-hidden cursor-default h-full transition-all duration-500 ${
                    isHovered ? "shadow-2xl scale-[1.008]" : ""
                  } ${
                    isLarge
                      ? "min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] p-5 sm:p-7"
                      : isWide
                      ? "min-h-[140px] p-5 sm:p-6"
                      : "min-h-[160px] sm:min-h-[185px] p-4 sm:p-5"
                  }`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    boxShadow: isHovered ? `0 20px 50px -12px ${service.glow}` : "none",
                  }}
                >
                  {/* Hover gradient fill */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 ${isHovered ? "opacity-[0.08]" : "opacity-0"}`} />
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
                  {/* Decorative number */}
                  <span
                    className="absolute right-3 bottom-2 font-black text-muted-foreground/[0.04] select-none pointer-events-none leading-none"
                    style={{ fontSize: isLarge ? "clamp(70px, 10vw, 140px)" : isWide ? "clamp(50px, 7vw, 90px)" : "clamp(50px, 6vw, 80px)" }}
                  >
                    {service.number}
                  </span>

                  {/* ── WIDE layout (horizontal) for IT Consultation ── */}
                  {isWide ? (
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 h-full">
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div
                          className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transition-all duration-500 ${isHovered ? "scale-110" : "opacity-70"}`}
                          style={{ width: 40, height: 40, minWidth: 40 }}
                        >
                          <service.icon className="h-[18px] w-[18px] text-white" />
                        </div>
                        <div>
                          <p className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 transition-colors ${isHovered ? service.accent : "text-muted-foreground/40"}`}>
                            {service.subtitle}
                          </p>
                          <h3 className="text-sm sm:text-base font-bold text-foreground whitespace-nowrap">{service.title}</h3>
                        </div>
                      </div>
                      <div className="hidden sm:block w-px h-10 bg-border/20 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground/70 leading-relaxed flex-1">{service.description}</p>
                      <div className="flex flex-wrap gap-2 sm:flex-col sm:gap-1.5 flex-shrink-0">
                        {service.features.slice(0, 4).map((f, j) => (
                          <div key={j} className="flex items-center gap-1.5">
                            <div className={`flex-shrink-0 flex h-3.5 w-3.5 items-center justify-center rounded bg-gradient-to-br ${service.gradient}`}>
                              <Check className="h-2 w-2 text-white" />
                            </div>
                            <span className="text-[10px] text-muted-foreground/60 font-medium whitespace-nowrap">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* ── NORMAL (vertical) layout ── */
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon row */}
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div
                          className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg flex-shrink-0 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100 opacity-70"}`}
                          style={{ width: isLarge ? 44 : 36, height: isLarge ? 44 : 36 }}
                        >
                          <service.icon
                            className="text-white"
                            style={{ width: isLarge ? 20 : 16, height: isLarge ? 20 : 16 }}
                          />
                        </div>
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full border border-border/20 transition-all duration-500 ${isHovered ? "opacity-100 border-primary/30 rotate-0" : "opacity-0 rotate-45"}`}>
                          <ArrowUpRight className={`h-3 w-3 ${service.accent}`} />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-h-0">
                        <p className={`text-[9px] font-bold uppercase tracking-[0.18em] mb-1 transition-colors ${isHovered ? service.accent : "text-muted-foreground/40"}`}>
                          {service.subtitle}
                        </p>
                        <h3 className={`font-bold text-foreground mb-2 ${isLarge ? "text-base sm:text-xl" : "text-sm"}`}>
                          {service.title}
                        </h3>
                        <p className={`text-muted-foreground/65 leading-relaxed mb-3 ${isLarge ? "text-sm" : "text-xs"}`}>
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className={`grid gap-1 sm:gap-1.5 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-45"} ${isLarge ? "grid-cols-2" : "grid-cols-1"}`}>
                        {service.features.map((f, j) => (
                          <div key={j} className="flex items-center gap-1.5">
                            <div className={`flex-shrink-0 flex h-3.5 w-3.5 items-center justify-center rounded bg-gradient-to-br ${service.gradient}`}>
                              <Check className="h-2 w-2 text-white" />
                            </div>
                            <span className="text-[10px] text-muted-foreground/65 font-medium">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
