"use client"

import { useState } from "react"
import { Globe, Smartphone, Palette, Gauge, ShieldCheck, Headphones, ArrowUpRight, Check } from "lucide-react"
import { FadeIn } from "./text-reveal"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    subtitle: "Web App & Landing Page",
    description: "Website yang cepat, SEO-friendly, dan scalable. Dari landing page hingga web app kompleks dengan Next.js dan teknologi modern.",
    features: ["Server-side Rendering", "SEO Optimization", "Progressive Web App", "API Development"],
    gradient: "from-cyan-500 to-blue-600",
    accent: "cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    subtitle: "iOS & Android",
    description: "Aplikasi cross-platform yang powerful dengan React Native dan Flutter. Native performance di semua device.",
    features: ["Cross Platform", "Push Notifications", "Offline Mode", "In-App Payments"],
    gradient: "from-emerald-500 to-teal-600",
    accent: "emerald",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "User Experience First",
    description: "Design intuitif yang tidak hanya cantik tapi juga user-friendly berdasarkan riset mendalam.",
    features: ["User Research", "Wireframing", "High-Fidelity Design", "Design System"],
    gradient: "from-violet-500 to-purple-600",
    accent: "violet",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    subtitle: "Speed & Core Web Vitals",
    description: "Optimasi performa untuk Core Web Vitals sempurna dan loading super cepat yang meningkatkan konversi.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Lighthouse Audit"],
    gradient: "from-orange-500 to-amber-600",
    accent: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Security & Maintenance",
    subtitle: "24/7 Protection",
    description: "Pemeliharaan berkala, monitoring real-time, backup otomatis, dan perlindungan dari ancaman cyber.",
    features: ["24/7 Monitoring", "Automated Backup", "Security Patches", "DDoS Protection"],
    gradient: "from-rose-500 to-pink-600",
    accent: "rose",
  },
  {
    icon: Headphones,
    title: "IT Consultation",
    subtitle: "Strategic Planning",
    description: "Kami bantu Anda merencanakan arsitektur sistem yang scalable dan memilih tech stack optimal.",
    features: ["Tech Stack Advisory", "System Architecture", "Scalability Planning", "Budget Estimation"],
    gradient: "from-blue-500 to-indigo-600",
    accent: "blue",
  },
]

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="layanan" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">
            <span className="w-4 h-px bg-primary" />
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Solusi lengkap untuk{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              transformasi digital
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Dari konsep hingga launch, kami menangani setiap aspek pengembangan produk digital dengan standar kualitas internasional.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div
                className="group relative rounded-2xl border border-border/20 bg-card/20 backdrop-blur-sm p-6 transition-all duration-500 hover:border-border/50 hover:bg-card/40 overflow-hidden cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Subtle top glow on hover */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${service.gradient} transition-opacity duration-500 ${hovered === i ? "opacity-100" : "opacity-0"}`} />

                <div className="relative z-10">
                  {/* Icon + arrow */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-md transition-transform duration-500 group-hover:scale-105`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <ArrowUpRight className={`h-4 w-4 text-primary transition-all duration-300 ${hovered === i ? "opacity-100 translate-x-0 -translate-y-0" : "opacity-0 translate-x-1 -translate-y-1"}`} />
                  </div>

                  {/* Title */}
                  <div className="mb-3">
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">{service.subtitle}</p>
                    <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>

                  {/* Features */}
                  <div className="flex flex-col gap-1.5">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Check className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom link */}
        <FadeIn delay={400} className="mt-10 text-center">
          <a
            href="#kontak"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="relative">
              Tidak menemukan layanan yang Anda cari? Hubungi kami
              <span className="absolute -bottom-px left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
