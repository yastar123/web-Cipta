"use client"

import { useState } from "react"
import { ArrowUpRight, ExternalLink, TrendingUp } from "lucide-react"
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
    metric: "+180%", metricLabel: "Conversion Rate",
    featured: true,
    size: "large",
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
    size: "small",
  },
  {
    title: "PropertyHub Dashboard",
    category: "design",
    client: "Real Estate Corp",
    year: "2024",
    description: "Redesign dashboard manajemen properti dengan data visualization yang intuitif.",
    tags: ["Figma", "Design System", "Prototyping"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    metric: "+65%", metricLabel: "Efficiency",
    featured: false,
    size: "small",
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
    size: "large",
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
    size: "small",
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
    size: "small",
  },
]

export function Portfolio() {
  const [active, setActive] = useState("all")
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* ── Header ── */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Portfolio
              </div>
              <h2
                className="font-black tracking-tighter leading-[0.9]"
                style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
              >
                <span className="block text-foreground">Karya</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.2)",
                    color: "transparent",
                  }}
                >
                  Terbaik Kami
                </span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Setiap proyek adalah kisah kolaborasi dan inovasi yang menghasilkan dampak nyata.
            </p>
          </div>
        </FadeIn>

        {/* ── Filters ── */}
        <FadeIn delay={80} className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 overflow-hidden ${
                active === cat.id
                  ? "text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card/30 text-muted-foreground border border-border/20 hover:border-primary/30 hover:text-foreground backdrop-blur-sm"
              }`}
            >
              {active === cat.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500" />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </FadeIn>

        {/* ── Masonry-style grid ── */}
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {filtered.map((project, i) => (
            <FadeIn key={project.title} delay={i * 70} className="break-inside-avoid mb-4">
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: project.featured ? "clamp(280px, 38vw, 440px)" : "clamp(220px, 28vw, 320px)" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                data-cursor-label="VIEW"
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-[1.06]`} />

                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30" />

                {/* Progressive dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Hover shimmer */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent transition-opacity duration-500 ${hovered === i ? "opacity-100" : "opacity-0"}`} />

                {/* ── Content ── */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">

                  {/* Top: year + client + arrow */}
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-[10px] font-semibold tracking-wide border border-white/10">
                        {project.year}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-[10px] font-semibold max-w-[140px] truncate border border-white/10">
                        {project.client}
                      </span>
                    </div>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20 transition-all duration-500 ${hovered === i ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"}`}>
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom: title + metric + tags */}
                  <div>
                    {/* Metric badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 mb-3 transition-all duration-500 ${hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                      <TrendingUp className="h-3.5 w-3.5 text-white/70" />
                      <span className="text-base font-black text-white">{project.metric}</span>
                      <span className="text-white/50 text-[10px] font-medium">{project.metricLabel}</span>
                    </div>

                    <h3
                      className={`font-black text-white tracking-tight leading-tight mb-2 transition-transform duration-500 ${hovered === i ? "translate-x-1" : "translate-x-0"}`}
                      style={{ fontSize: project.featured ? "clamp(22px, 3vw, 36px)" : "clamp(18px, 2.5vw, 26px)" }}
                    >
                      {project.title}
                    </h3>

                    <p className={`text-white/65 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 transition-all duration-500 ${hovered === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                      {project.description}
                    </p>

                    <div className={`flex flex-wrap gap-1.5 transition-all duration-500 ${hovered === i ? "opacity-100" : "opacity-0"}`}>
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-black/40 text-white text-[10px] font-medium border border-white/10 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── CTA ── */}
        <FadeIn delay={500} className="mt-12 flex items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2.5 h-11 px-7 text-sm font-medium rounded-full border border-border/30 bg-card/20 hover:border-primary/35 hover:bg-primary/5 transition-all backdrop-blur-sm">
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Lihat Semua Portfolio</span>
            <ExternalLink className="h-3.5 w-3.5 text-primary" />
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
