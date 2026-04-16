"use client"

import { useState } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { FadeIn } from "./text-reveal"

const categories = [
  { id: "all", label: "Semua" },
  { id: "website", label: "Website" },
  { id: "mobile", label: "Mobile App" },
  { id: "design", label: "UI/UX Design" },
]

const projects = [
  {
    title: "TokoBaju.id",
    category: "website",
    client: "Fashion Retail",
    year: "2024",
    description: "E-commerce platform dengan AR virtual try-on, inventory realtime, dan analytics dashboard yang meningkatkan conversion rate hingga 180%.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "AR.js"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    metric: "+180%", metricLabel: "Conversion",
    featured: true,
  },
  {
    title: "SehatKu App",
    category: "mobile",
    client: "HealthTech Startup",
    year: "2024",
    description: "Aplikasi kesehatan dengan tracking vital signs dan konsultasi dokter online 24/7.",
    tags: ["React Native", "Firebase", "TensorFlow"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    metric: "50K+", metricLabel: "Active Users",
    featured: false,
  },
  {
    title: "PropertyHub Dashboard",
    category: "design",
    client: "Real Estate Corp",
    year: "2024",
    description: "Redesign dashboard untuk manajemen properti dengan data visualization yang intuitif.",
    tags: ["Figma", "Design System", "Prototyping"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    metric: "+65%", metricLabel: "Efficiency",
    featured: false,
  },
  {
    title: "GrabFood Clone",
    category: "mobile",
    client: "F&B Startup",
    year: "2023",
    description: "Food delivery app dengan real-time tracking, multi-vendor support, dan rider management system.",
    tags: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    metric: "100K+", metricLabel: "Orders/Month",
    featured: true,
  },
  {
    title: "EduPlatform LMS",
    category: "website",
    client: "EdTech Company",
    year: "2023",
    description: "Learning management system dengan video streaming, quiz engine, dan progress tracking.",
    tags: ["Next.js", "AWS", "Prisma", "WebRTC"],
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    metric: "25K+", metricLabel: "Students",
    featured: false,
  },
  {
    title: "FinanceApp Redesign",
    category: "design",
    client: "Banking Institution",
    year: "2023",
    description: "Redesign mobile banking app dengan fokus pada security UX dan accessibility.",
    tags: ["Figma", "User Research", "A/B Testing"],
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    metric: "+45", metricLabel: "NPS Score",
    featured: false,
  },
]

export function Portfolio() {
  const [active, setActive] = useState("all")
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">
              <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Karya terbaik yang{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                membanggakan
              </span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Setiap proyek adalah kisah kolaborasi dan inovasi bersama klien kami.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={80} className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                active === cat.id
                  ? "text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card/40 text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-foreground hover:bg-card/60"
              } relative overflow-hidden`}
            >
              {active === cat.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500" />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80} className={project.featured ? "md:col-span-2" : ""}>
              <div
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.featured ? "h-72 md:h-96" : "h-60 md:h-72"}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
                {/* Dot pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                {/* Shimmer on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent transition-opacity duration-500 ${hovered === i ? "opacity-100" : "opacity-0"}`} />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/90 text-[11px] font-medium border border-white/10">{project.year}</span>
                      <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/90 text-[11px] font-medium max-w-[140px] truncate border border-white/10">{project.client}</span>
                    </div>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-500 ${hovered === i ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"}`}>
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    {/* Metric */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/15 mb-3 transition-all duration-500 ${hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                      <span className="text-xl font-bold text-white">{project.metric}</span>
                      <span className="text-white/60 text-xs">{project.metricLabel}</span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 transition-transform duration-500 ${hovered === i ? "translate-x-1" : "translate-x-0"}`}>{project.title}</h3>
                    <p className={`text-white/70 text-sm leading-relaxed mb-3 line-clamp-2 transition-all duration-500 ${hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                      {project.description}
                    </p>
                    <div className={`flex flex-wrap gap-1.5 transition-all duration-500 ${hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-black/30 border border-white/15 text-white text-[11px] font-medium backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={400} className="mt-10 text-center">
          <button
            className="group relative inline-flex items-center gap-2.5 h-10 px-6 text-sm rounded-full border border-border/40 hover:border-primary/40 bg-card/20 hover:bg-primary/5 transition-all overflow-hidden"
          >
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Lihat Semua Portfolio</span>
            <ExternalLink className="h-3.5 w-3.5 text-primary" />
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
