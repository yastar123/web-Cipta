"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Marquee } from "./marquee"
import { AnimatedCounter } from "./animated-counter"

const techStack = [
  { name: "React" }, { name: "Next.js" }, { name: "TypeScript" },
  { name: "Node.js" }, { name: "React Native" }, { name: "Flutter" },
  { name: "PostgreSQL" }, { name: "MongoDB" }, { name: "AWS" },
  { name: "Vercel" }, { name: "Figma" }, { name: "TailwindCSS" },
]

const stats = [
  { value: 150, suffix: "+", label: "Proyek Selesai" },
  { value: 50, suffix: "+", label: "Klien Aktif" },
  { value: 98, suffix: "%", label: "Kepuasan Klien" },
  { value: 5, suffix: " Thn", label: "Pengalaman" },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [scrollY, setScrollY] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,oklch(0.14_0.04_195)_0%,transparent_65%)]" />
        <div
          className="absolute rounded-full opacity-25 transition-all duration-[2500ms] ease-out"
          style={{
            width: 800, height: 800,
            left: `calc(${mousePos.x * 100}% - 400px)`,
            top: `calc(${mousePos.y * 100}% - 400px)`,
            background: "radial-gradient(circle, oklch(0.72 0.17 195 / 0.4) 0%, transparent 60%)",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[140px]"
          style={{ transform: `translate(25%, -20%) translateY(${scrollY * 0.12}px)` }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px]"
          style={{ transform: `translate(-20%, 20%) translateY(${scrollY * -0.06}px)` }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 10%, transparent 100%)"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-32 md:pt-32 md:pb-36">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-medium tracking-widest uppercase mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="text-primary/90">Menerima Proyek Baru 2025</span>
          <Sparkles className="h-3 w-3 text-primary/60" />
        </div>

        {/* Heading */}
        <h1
          className={`max-w-4xl transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-foreground leading-[1.03] mb-3">
            Kami Ciptakan
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight leading-[1.03] bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradientMove_5s_ease-in-out_infinite]">
            Digital Experience
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`mt-8 mb-8 flex items-center gap-4 transition-all duration-700 delay-150 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-border/60" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50">Digital Agency</span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-border/60" />
        </div>

        {/* Subtitle */}
        <p
          className={`max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Kami membangun{" "}
          <span className="text-foreground/90 font-medium">website</span>,{" "}
          <span className="text-foreground/90 font-medium">aplikasi mobile</span>, dan{" "}
          <span className="text-foreground/90 font-medium">UI/UX design</span>{" "}
          yang membantu bisnis Anda tumbuh di era digital.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center gap-3 transition-all duration-700 delay-[250ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <a
            href="#kontak"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-12 text-sm font-semibold rounded-full overflow-hidden transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-[length:200%_100%] animate-[gradientMove_4s_ease-in-out_infinite]" />
            <span className="relative text-primary-foreground">Mulai Proyek Anda</span>
            <ArrowRight className="relative h-4 w-4 text-primary-foreground group-hover:translate-x-0.5 transition-transform" />
          </a>
          <button
            className="group w-full sm:w-auto gap-2.5 h-12 px-7 text-sm rounded-full border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all backdrop-blur-sm flex items-center justify-center"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 group-hover:bg-primary/25 transition-colors border border-primary/20">
              <Play className="h-3 w-3 text-primary ml-0.5" />
            </span>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">Lihat Showreel</span>
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-14 md:mt-16 w-full max-w-2xl transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="grid grid-cols-4 divide-x divide-border/20 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-md overflow-hidden shadow-xl shadow-background/40">
            {stats.map((stat, i) => (
              <div key={i} className="py-5 px-3 sm:px-5 text-center relative group hover:bg-primary/5 transition-colors">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="block text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1800 + i * 150} />
                </span>
                <span className="block text-[10px] sm:text-xs text-muted-foreground/70 mt-1.5 tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-14 border-t border-border/10 bg-card/40 backdrop-blur-xl flex items-center">
        <Marquee speed={40} className="py-0">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-2 px-5 py-1.5 text-xs font-medium text-muted-foreground/50 hover:text-primary/80 transition-colors cursor-default mx-1"
            >
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              {tech.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
