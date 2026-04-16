"use client"

import { useState, useRef } from "react"
import { Globe, Smartphone, Palette, Gauge, ShieldCheck, Headphones, ArrowUpRight, Check, Sparkles } from "lucide-react"
import { FadeIn } from "./text-reveal"
import { TiltCard } from "./tilt-card"
import { AnimatedCounter } from "./animated-counter"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    subtitle: "Web App & Landing Page",
    description: "Kami membangun website yang tidak hanya indah, tapi juga cepat dan SEO-friendly. Dari landing page hingga web aplikasi kompleks dengan Next.js, React, dan teknologi modern lainnya.",
    features: ["Server-side Rendering", "SEO Optimization", "Progressive Web App", "CMS Integration", "API Development"],
    stats: { projects: 80, satisfaction: 99 },
    gradient: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/30",
    accentColor: "cyan"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android Apps",
    description: "Aplikasi mobile cross-platform yang powerful dengan React Native dan Flutter. Native performance, integrasi hardware, dan pengalaman pengguna yang seamless di semua device.",
    features: ["Cross Platform", "Push Notifications", "Offline Mode", "In-App Payments", "Analytics Integration"],
    stats: { projects: 40, satisfaction: 98 },
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/30",
    accentColor: "emerald"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "User Experience First",
    description: "Design yang tidak hanya cantik, tapi juga intuitif dan user-friendly. Kami melakukan riset mendalam untuk memahami user Anda dan menciptakan pengalaman digital yang memorable.",
    features: ["User Research", "Wireframing", "High-Fidelity Design", "Interactive Prototype", "Design System"],
    stats: { projects: 100, satisfaction: 99 },
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/30",
    accentColor: "violet"
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    subtitle: "Speed & Core Web Vitals",
    description: "Website lambat = kehilangan pelanggan. Kami optimasi performa website Anda untuk Core Web Vitals sempurna, loading super cepat, dan pengalaman user yang mulus.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Setup", "Lighthouse Audit"],
    stats: { projects: 50, satisfaction: 100 },
    gradient: "from-orange-500 to-amber-600",
    bgGlow: "bg-orange-500/30",
    accentColor: "orange"
  },
  {
    icon: ShieldCheck,
    title: "Security & Maintenance",
    subtitle: "24/7 Protection",
    description: "Keamanan website adalah prioritas. Layanan pemeliharaan berkala, monitoring real-time, backup otomatis, dan perlindungan dari ancaman cyber untuk ketenangan pikiran Anda.",
    features: ["24/7 Monitoring", "Automated Backup", "Security Patches", "SSL Management", "DDoS Protection"],
    stats: { projects: 60, satisfaction: 100 },
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "bg-rose-500/30",
    accentColor: "rose"
  },
  {
    icon: Headphones,
    title: "IT Consultation",
    subtitle: "Strategic Planning",
    description: "Bingung memilih teknologi yang tepat? Kami bantu Anda merencanakan arsitektur sistem yang scalable, memilih tech stack optimal, dan membuat roadmap pengembangan yang jelas.",
    features: ["Tech Stack Advisory", "System Architecture", "Scalability Planning", "Budget Estimation", "Timeline Planning"],
    stats: { projects: 70, satisfaction: 98 },
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "bg-blue-500/30",
    accentColor: "blue"
  }
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeService, setActiveService] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="layanan" className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Header */}
        <FadeIn className="max-w-4xl mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-3 text-sm font-medium text-primary uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Layanan Kami</span>
            <span className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
            Solusi lengkap untuk{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                transformasi digital
              </span>
              <span className="absolute -inset-1 bg-primary/10 blur-xl rounded-lg -z-10" />
            </span>{" "}
            bisnis Anda
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Dari konsep hingga launch, kami menangani setiap aspek pengembangan produk digital dengan standar kualitas internasional dan hasil yang terukur.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn 
              key={index} 
              delay={index * 80}
              className={index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <TiltCard intensity={5} glare={true}>
                <div
                  className="group relative h-full rounded-3xl border border-border/30 bg-card/30 backdrop-blur-xl p-8 lg:p-10 transition-all duration-700 hover:border-border/60 hover:bg-card/50 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Glow */}
                  <div className={`absolute -top-1/2 -right-1/2 w-full h-full ${service.bgGlow} rounded-full blur-[100px] opacity-0 group-hover:opacity-60 transition-all duration-1000`} />
                  
                  {/* Gradient line at top */}
                  <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-8">
                      <div className={`flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl shadow-${service.accentColor}-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <service.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                      </div>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/50 transition-all duration-500 ${hoveredIndex === index ? "opacity-100 translate-x-0 rotate-0 border-primary/50" : "opacity-0 translate-x-4 -rotate-12"}`}>
                        <ArrowUpRight className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em]">{service.subtitle}</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mt-2 group-hover:text-foreground transition-colors">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {service.features.slice(0, index === 0 || index === 3 ? 5 : 3).map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-background/80 text-foreground/80 border border-border/40 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <Check className={`h-3.5 w-3.5 text-${service.accentColor}-400`} />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-8 pt-8 border-t border-border/30">
                      <div>
                        <span className="text-3xl lg:text-4xl font-bold text-foreground">
                          <AnimatedCounter value={service.stats.projects} suffix="+" />
                        </span>
                        <span className="block text-sm text-muted-foreground mt-1">Proyek Selesai</span>
                      </div>
                      <div className="w-px h-12 bg-border/30" />
                      <div>
                        <span className="text-3xl lg:text-4xl font-bold text-foreground">
                          <AnimatedCounter value={service.stats.satisfaction} suffix="%" />
                        </span>
                        <span className="block text-sm text-muted-foreground mt-1">Kepuasan Klien</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={600} className="mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Tidak menemukan layanan yang Anda cari?
          </p>
          <a 
            href="#kontak" 
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            <span className="relative">
              Hubungi kami untuk konsultasi gratis
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
