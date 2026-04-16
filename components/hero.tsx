"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.15_0.02_195)_0%,transparent_70%)]" />
        <div
          className="absolute rounded-full opacity-30 transition-all duration-[2000ms] ease-out"
          style={{
            width: 700, height: 700,
            left: `calc(${mousePos.x * 100}% - 350px)`,
            top: `calc(${mousePos.y * 100}% - 350px)`,
            background: "radial-gradient(circle, oklch(0.75 0.15 195 / 0.35) 0%, transparent 65%)",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]"
          style={{ transform: `translate(20%, -20%) translateY(${scrollY * 0.12}px)` }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black 20%, transparent 100%)"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-32 md:pt-32 md:pb-36">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-xs font-medium tracking-widest uppercase mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="text-foreground/70">Menerima Proyek Baru 2024</span>
        </div>

        {/* Heading */}
        <h1
          className={`max-w-4xl transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-2">
            Kami Ciptakan
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradientMove_5s_ease-in-out_infinite]">
            Digital Experience
          </span>
        </h1>

        {/* Thin divider */}
        <div
          className={`mt-8 mb-8 flex items-center gap-4 transition-all duration-700 delay-150 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="w-12 h-px bg-border/50" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/60">Digital Agency</span>
          <span className="w-12 h-px bg-border/50" />
        </div>

        {/* Subtitle */}
        <p
          className={`max-w-xl text-base text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Kami membangun <span className="text-foreground/80">website</span>, <span className="text-foreground/80">aplikasi mobile</span>, dan <span className="text-foreground/80">UI/UX design</span> yang membantu bisnis Anda tumbuh di era digital.
        </p>

        {/* CTAs */}
        <div
          className={`mt-8 flex flex-col sm:flex-row items-center gap-3 transition-all duration-700 delay-[250ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Button
            size="default"
            className="group w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 gap-2.5 px-7 h-11 text-sm font-medium rounded-full shadow-lg shadow-foreground/10 hover:shadow-foreground/20 transition-all hover:scale-[1.02]"
          >
            Mulai Proyek Anda
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button
            size="default"
            variant="outline"
            className="group w-full sm:w-auto gap-2.5 h-11 px-6 text-sm rounded-full border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all backdrop-blur-sm"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Play className="h-3 w-3 text-primary ml-px" />
            </span>
            Lihat Showreel
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`mt-14 md:mt-16 w-full max-w-2xl transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="grid grid-cols-4 divide-x divide-border/20 rounded-2xl border border-border/15 bg-card/20 backdrop-blur-sm overflow-hidden">
            {stats.map((stat, i) => (
              <div key={i} className="py-4 px-3 sm:px-5 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1800 + i * 150} />
                </span>
                <span className="block text-[10px] sm:text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <ArrowDown className="h-4 w-4 text-muted-foreground/40 animate-bounce" />
      </div>

      {/* Tech Marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-14 border-t border-border/15 bg-background/60 backdrop-blur-xl flex items-center">
        <Marquee speed={40} className="py-0">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-default mx-1"
            >
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              {tech.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
