"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "./text-reveal"
import { TiltCard } from "./tilt-card"
import { MagneticButton } from "./magnetic-button"

const categories = [
  { id: "all", label: "Semua Karya", count: 6 },
  { id: "website", label: "Website", count: 2 },
  { id: "mobile", label: "Mobile App", count: 2 },
  { id: "design", label: "UI/UX Design", count: 2 },
]

const projects = [
  {
    title: "TokoBaju.id",
    category: "website",
    client: "Fashion Retail Indonesia",
    year: "2024",
    description: "E-commerce platform dengan fitur AR virtual try-on untuk fashion retail. Sistem inventory realtime, payment gateway, dan analytics dashboard yang membantu meningkatkan conversion rate hingga 180%.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "AR.js", "Vercel"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    stats: { metric: "+180%", label: "Conversion" },
    featured: true
  },
  {
    title: "SehatKu App",
    category: "mobile",
    client: "HealthTech Startup",
    year: "2024",
    description: "Aplikasi kesehatan dengan tracking vital signs, konsultasi dokter online 24/7, dan AI symptom checker yang akurat.",
    tags: ["React Native", "Firebase", "TensorFlow", "Node.js"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    stats: { metric: "50K+", label: "Active Users" },
    featured: false
  },
  {
    title: "PropertyHub Dashboard",
    category: "design",
    client: "Real Estate Corporation",
    year: "2024",
    description: "Complete redesign dashboard untuk manajemen properti dengan fokus pada data visualization yang intuitif.",
    tags: ["Figma", "Design System", "Prototyping", "User Research"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    stats: { metric: "+65%", label: "Efficiency" },
    featured: false
  },
  {
    title: "GrabFood Clone",
    category: "mobile",
    client: "F&B Startup Indonesia",
    year: "2023",
    description: "Food delivery app dengan real-time tracking, multi-vendor support, dan rider management system yang scalable untuk ribuan transaksi per hari.",
    tags: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Google Maps"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    stats: { metric: "100K+", label: "Orders/Month" },
    featured: true
  },
  {
    title: "EduPlatform LMS",
    category: "website",
    client: "EdTech Company",
    year: "2023",
    description: "Learning management system lengkap dengan video streaming, quiz engine interaktif, dan progress tracking.",
    tags: ["Next.js", "AWS", "Prisma", "WebRTC"],
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    stats: { metric: "25K+", label: "Students" },
    featured: false
  },
  {
    title: "FinanceApp Redesign",
    category: "design",
    client: "Banking Institution",
    year: "2023",
    description: "Complete redesign mobile banking app dengan fokus pada security UX dan accessibility.",
    tags: ["Figma", "User Research", "A/B Testing", "Accessibility"],
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    stats: { metric: "+45", label: "NPS Score" },
    featured: false
  }
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-28 lg:py-40 xl:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Header */}
        <FadeIn className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-10 mb-10 md:mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-sm font-medium text-primary uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Portfolio</span>
              <span className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
              Karya terbaik yang{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  membanggakan
                </span>
                <span className="absolute -inset-1 bg-primary/10 blur-xl rounded-lg -z-10" />
              </span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed lg:text-right">
            Setiap proyek adalah cerita kolaborasi dan inovasi. Kami tidak hanya membangun produk, tapi juga membangun kesuksesan bersama klien.
          </p>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={100} className="mb-14">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-500 overflow-hidden group ${
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground bg-card/50 border border-border/30 hover:border-border/60 backdrop-blur-sm"
                }`}
              >
                {activeCategory === category.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 -z-10" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category.label}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id ? "bg-white/20" : "bg-border/50"}`}>
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <FadeIn 
              key={project.title} 
              delay={index * 100}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <TiltCard intensity={3} glare={true}>
                <div
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${project.featured ? "min-h-[380px] md:h-[480px] lg:h-[600px]" : "min-h-[340px] md:h-[420px] lg:h-[500px]"}`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  
                  {/* Animated Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:30px_30px] group-hover:bg-[length:35px_35px] transition-all duration-1000" />
                  </div>

                  {/* Animated Orbs */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[10%] left-[5%] w-40 h-40 rounded-full bg-white/10 blur-3xl transition-all duration-1000 group-hover:scale-150 group-hover:translate-x-10" />
                    <div className="absolute bottom-[10%] right-[5%] w-60 h-60 rounded-full bg-black/10 blur-3xl transition-all duration-1000 group-hover:scale-150 group-hover:-translate-x-10" />
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
                    {/* Top Row */}
                    <div className="flex items-start justify-between">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl text-xs sm:text-sm font-medium text-white border border-white/10">
                          {project.year}
                        </span>
                        <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl text-xs sm:text-sm font-medium text-white border border-white/10 max-w-[180px] truncate">
                          {project.client}
                        </span>
                      </div>
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/10 transition-all duration-500 ${hoveredProject === index ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 rotate-45"}`}>
                        <ArrowUpRight className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div>
                      {/* Stats Badge */}
                      <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/10 mb-6 transition-all duration-500 ${hoveredProject === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <span className="text-3xl font-bold text-white">{project.stats.metric}</span>
                        <span className="text-white/70 text-sm">{project.stats.label}</span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                      <p className={`text-white/80 text-base lg:text-lg leading-relaxed max-w-2xl transition-all duration-500 ${hoveredProject === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 mt-6 transition-all duration-500 ${hoveredProject === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "100ms" }}>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${hoveredProject === index ? "opacity-100" : "opacity-0"}`} />
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        {/* View All CTA */}
        <FadeIn delay={400} className="mt-12 md:mt-20 text-center">
          <MagneticButton strength={0.3}>
            <Button 
              size="lg"
              variant="outline" 
              className="group gap-4 h-16 lg:h-18 px-10 lg:px-12 text-base lg:text-lg rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all backdrop-blur-sm hover:scale-105"
            >
              <span>Lihat Semua Portfolio</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <ExternalLink className="h-5 w-5 text-primary" />
              </span>
            </Button>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}
