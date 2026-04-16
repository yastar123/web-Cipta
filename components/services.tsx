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
    description: "Website yang cepat, SEO-friendly, dan scalable. Dari landing page hingga web app kompleks dengan Next.js dan teknologi terdepan.",
    features: ["Server-side Rendering", "SEO Optimization", "Progressive Web App", "API Development"],
    gradient: "from-cyan-500 to-blue-600",
    glow: "oklch(0.72 0.18 195 / 0.12)",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    span: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile App",
    subtitle: "iOS & Android",
    description: "Aplikasi cross-platform yang powerful dengan React Native dan Flutter. Native performance di semua device.",
    features: ["Cross Platform", "Push Notifications", "Offline Mode", "In-App Payments"],
    gradient: "from-emerald-500 to-teal-600",
    glow: "oklch(0.65 0.18 160 / 0.12)",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    span: "lg:col-span-1 lg:row-span-2",
    large: false,
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    subtitle: "User Experience First",
    description: "Design intuitif yang tidak hanya cantik tapi juga user-friendly berdasarkan riset mendalam.",
    features: ["User Research", "Wireframing", "High-Fidelity", "Design System"],
    gradient: "from-violet-500 to-purple-600",
    glow: "oklch(0.55 0.22 290 / 0.12)",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    span: "lg:col-span-1",
    large: false,
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance",
    subtitle: "Core Web Vitals",
    description: "Optimasi performa untuk loading super cepat yang meningkatkan konversi dan ranking SEO.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Lighthouse Audit"],
    gradient: "from-orange-500 to-amber-600",
    glow: "oklch(0.72 0.18 50 / 0.12)",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    span: "lg:col-span-1",
    large: false,
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Security & Maintenance",
    subtitle: "24/7 Protection",
    description: "Pemeliharaan berkala, monitoring real-time, dan perlindungan dari ancaman cyber.",
    features: ["24/7 Monitoring", "Automated Backup", "Security Patches", "DDoS Protection"],
    gradient: "from-rose-500 to-pink-600",
    glow: "oklch(0.6 0.22 10 / 0.12)",
    accent: "text-rose-400",
    border: "border-rose-500/20",
    span: "lg:col-span-1",
    large: false,
  },
  {
    icon: Headphones,
    number: "06",
    title: "IT Consultation",
    subtitle: "Strategic Planning",
    description: "Kami bantu Anda merencanakan arsitektur sistem yang scalable dan memilih tech stack optimal.",
    features: ["Tech Stack Advisory", "System Architecture", "Scalability Planning", "Budget Estimation"],
    gradient: "from-blue-500 to-indigo-600",
    glow: "oklch(0.55 0.18 240 / 0.12)",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    span: "lg:col-span-1",
    large: false,
  },
]

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="layanan" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-14 xl:px-20">

        {/* Header */}
        <FadeIn className="mb-14 md:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Layanan Kami
              </div>
              <h2
                className="font-black tracking-tighter"
                style={{ fontSize: "clamp(36px, 7vw, 96px)", lineHeight: 0.88 }}
              >
                <span className="block text-foreground">Solusi Digital</span>
                <span
                  className="block"
                  style={{ WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.18)", color: "transparent" }}
                >
                  Lengkap
                </span>
              </h2>
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
            return (
              <FadeIn
                key={i}
                delay={i * 55}
                className={service.span}
              >
                <div
                  className={`relative rounded-2xl border ${service.border} bg-card/25 backdrop-blur-sm overflow-hidden cursor-default group transition-all duration-500 ${
                    isHovered ? "shadow-2xl scale-[1.01]" : "hover:border-opacity-40"
                  } ${service.large ? "min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] p-6 sm:p-8" : "min-h-[180px] sm:min-h-[200px] p-5 sm:p-6"}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    boxShadow: isHovered ? `0 25px 60px -15px ${service.glow}` : "none",
                  }}
                >
                  {/* Hover gradient fill */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 ${isHovered ? "opacity-[0.08]" : "opacity-0"}`}
                  />
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                  />
                  {/* Large decorative number */}
                  <span
                    className="absolute right-4 bottom-3 font-black text-muted-foreground/[0.04] select-none pointer-events-none leading-none transition-all duration-500"
                    style={{ fontSize: service.large ? "clamp(80px, 12vw, 160px)" : "clamp(60px, 8vw, 100px)" }}
                  >
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg flex-shrink-0 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100 opacity-70"}`}
                        style={{ width: service.large ? 48 : 38, height: service.large ? 48 : 38 }}
                      >
                        <service.icon
                          className="text-white"
                          style={{ width: service.large ? 22 : 17, height: service.large ? 22 : 17 }}
                        />
                      </div>
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full border border-border/20 transition-all duration-500 ${isHovered ? "opacity-100 border-primary/30 rotate-0" : "opacity-0 rotate-45"}`}>
                        <ArrowUpRight className={`h-3 w-3 ${service.accent}`} />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-1 sm:mb-1.5 transition-colors duration-300 ${isHovered ? service.accent : "text-muted-foreground/40"}`}>
                        {service.subtitle}
                      </p>
                      <h3 className={`font-bold text-foreground mb-2 sm:mb-3 transition-all duration-300 ${service.large ? "text-lg sm:text-xl md:text-2xl" : "text-sm sm:text-base"}`}>
                        {service.title}
                      </h3>
                      <p className={`text-muted-foreground/70 leading-relaxed mb-4 transition-all duration-300 ${service.large ? "text-sm md:text-[15px]" : "text-xs"} ${isHovered ? "text-muted-foreground/90" : ""}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className={`grid gap-1.5 transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-50"} ${service.large ? "grid-cols-2" : "grid-cols-1"}`}>
                      {service.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className={`flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-md bg-gradient-to-br ${service.gradient}`}>
                            <Check className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span className="text-[10px] sm:text-xs text-muted-foreground/70 font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
