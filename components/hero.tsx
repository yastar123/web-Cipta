"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "React Native",
  "Flutter", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Figma", "TailwindCSS",
]

const stats = [
  { value: 150, suffix: "+", label: "Proyek" },
  { value: 50, suffix: "+", label: "Klien" },
  { value: 98, suffix: "%", label: "Kepuasan" },
  { value: 5, suffix: "", label: "Tahun" },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [scrollY, setScrollY] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 60)
    const t2 = setTimeout(() => setPhase(1), 200)
    const t3 = setTimeout(() => setPhase(2), 800)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      window.removeEventListener("scroll", onScroll)
    }
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

  const lineStyle = (delay: number) => ({
    transform: loaded ? "translateY(0)" : "translateY(105%)",
    transition: `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    display: "block",
  })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* ─── Layered background ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,oklch(0.13_0.07_200)_0%,transparent_60%)]" />
        {/* Mouse-tracked glow */}
        <div
          className="absolute rounded-full hidden md:block"
          style={{
            width: 1000, height: 1000,
            left: `calc(${mousePos.x * 100}% - 500px)`,
            top: `calc(${mousePos.y * 100}% - 500px)`,
            background: "radial-gradient(circle, oklch(0.72 0.18 195 / 0.09) 0%, transparent 55%)",
            transform: `translateY(${scrollY * 0.04}px)`,
            transition: "left 3s ease-out, top 3s ease-out",
          }}
        />
        {/* Corner glows */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[160px]"
          style={{ transform: `translate(30%, -40%) translateY(${scrollY * 0.07}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[130px]"
          style={{ transform: `translate(-25%, 30%) translateY(${scrollY * -0.03}px)` }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          }}
        />
        {/* Horizontal accent lines */}
        <div
          className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ top: "30%" }}
        />
      </div>

      {/* ─── Main content ─── */}
      <div
        className="relative z-10 flex flex-col flex-1 px-4 sm:px-8 lg:px-14 xl:px-20"
        style={{ transform: `translateY(${scrollY * -0.04}px)` }}
      >
        {/* ─── Top meta bar ─── */}
        <div
          className={`flex items-center justify-between pt-28 sm:pt-32 md:pt-36 mb-8 sm:mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.32em] uppercase text-muted-foreground/50">
              <span className="text-primary font-semibold">01</span> — Digital Agency
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-[9px] tracking-[0.22em] uppercase text-muted-foreground/30">
            <span>Jakarta, Indonesia</span>
            <span className="w-5 h-px bg-border/30" />
            <span>Est. 2020</span>
          </div>
        </div>

        {/* ─── Hero headline — alternating alignment ─── */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <div className="relative mb-10 sm:mb-12 md:mb-14">
            {/* KAMI — left, outline */}
            <div className="overflow-hidden">
              <span
                className="block text-left leading-[0.85]"
                style={{
                  ...lineStyle(0.05),
                  fontSize: "clamp(52px, 14.5vw, 210px)",
                  WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.18)",
                  color: "transparent",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                KAMI
              </span>
            </div>

            {/* CIPTAKAN — right, solid white */}
            <div className="overflow-hidden">
              <span
                className="block text-right text-foreground leading-[0.85]"
                style={{
                  ...lineStyle(0.18),
                  fontSize: "clamp(52px, 14.5vw, 210px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                CIPTAKAN
              </span>
            </div>

            {/* DIGITAL — left, gradient */}
            <div className="overflow-hidden">
              <span
                className="block text-left leading-[0.85] bg-gradient-to-r from-primary via-cyan-400 to-emerald-300 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradientMove_8s_ease-in-out_infinite]"
                style={{
                  ...lineStyle(0.32),
                  fontSize: "clamp(52px, 14.5vw, 210px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                DIGITAL
              </span>
            </div>

            {/* EXPERIENCE — right, gradient muted */}
            <div className="overflow-hidden">
              <span
                className="block text-right leading-[0.85]"
                style={{
                  ...lineStyle(0.44),
                  fontSize: "clamp(36px, 10vw, 145px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  WebkitTextStroke: "1.5px oklch(0.72 0.18 195 / 0.35)",
                  color: "transparent",
                }}
              >
                EXPERIENCE
              </span>
            </div>

            {/* Decorative horizontal rule with stats */}
            <div
              className={`flex items-center gap-5 sm:gap-8 mt-8 sm:mt-10 transition-all duration-700 delay-700 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
              <div className="flex items-center gap-6 sm:gap-10">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <span className="text-lg sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-none">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000 + i * 150} />
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-muted-foreground/40 tracking-[0.18em] uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-border/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* ─── Bottom action row ─── */}
          <div
            className={`flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-8 transition-all duration-700 delay-[900ms] ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {/* Description */}
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-sm sm:max-w-xs">
              Kami membangun{" "}
              <span className="text-foreground/85 font-medium">website</span>,{" "}
              <span className="text-foreground/85 font-medium">aplikasi mobile</span>, dan{" "}
              <span className="text-foreground/85 font-medium">UI/UX design</span>{" "}
              yang menghasilkan dampak nyata.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
              <a
                href="#kontak"
                data-cursor-label="MULAI"
                className="group relative inline-flex items-center gap-2 rounded-full overflow-hidden px-6 h-11 text-sm font-semibold hover:scale-[1.04] hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex-shrink-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-500 bg-[length:200%_100%] animate-[gradientMove_5s_ease-in-out_infinite]" />
                <span className="relative text-primary-foreground font-bold">Mulai Proyek</span>
                <ArrowRight className="relative h-3.5 w-3.5 text-primary-foreground group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </a>
              <a
                href="#portfolio"
                data-cursor-label="LIHAT"
                className="group inline-flex items-center gap-1.5 h-11 px-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="relative">
                  Lihat Karya
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ─── Scroll indicator ─── */}
        <div
          className={`flex items-center gap-3 py-6 transition-all duration-700 delay-[1100ms] ${phase >= 2 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex h-7 w-4 items-start justify-center rounded-full border border-border/20 pt-1.5 flex-shrink-0">
            <div className="w-0.5 h-1.5 rounded-full bg-primary animate-bounce" />
          </div>
          <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/25">Scroll untuk explore</span>
        </div>

        {/* ─── Tech strip ─── */}
        <div
          className={`-mx-4 sm:-mx-8 lg:-mx-14 xl:-mx-20 border-t border-border/10 bg-card/20 backdrop-blur-xl h-10 sm:h-11 flex items-center overflow-hidden transition-all duration-700 delay-[1000ms] ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{ animationDuration: "35s" }}
          >
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 px-4 sm:px-5 text-[10px] sm:text-[11px] font-medium text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors cursor-default whitespace-nowrap"
              >
                <span className="w-0.5 h-0.5 rounded-full bg-primary/40 flex-shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
