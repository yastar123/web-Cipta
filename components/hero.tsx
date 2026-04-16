"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react"
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
  { value: 98, suffix: "%", label: "Kepuasan" },
  { value: 5, suffix: " Thn", label: "Pengalaman" },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [scrollY, setScrollY] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll) }
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
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,oklch(0.14_0.06_200)_0%,transparent_65%)]" />
        {/* Mouse-follow glow — only on devices that support hover */}
        <div
          className="absolute rounded-full opacity-15 transition-[left,top] duration-[2500ms] ease-out hidden md:block"
          style={{
            width: 800, height: 800,
            left: `calc(${mousePos.x * 100}% - 400px)`,
            top: `calc(${mousePos.y * 100}% - 400px)`,
            background: "radial-gradient(circle, oklch(0.72 0.18 195 / 0.55) 0%, transparent 60%)",
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px]"
          style={{ transform: `translate(30%, -30%) translateY(${scrollY * 0.08}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]"
          style={{ transform: `translate(-20%, 20%) translateY(${scrollY * -0.04}px)` }}
        />
        {/* Subtle grid — masked radially */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)",
          }}
        />
      </div>

      {/* ── Main layout ── */}
      <div className="relative z-10 flex flex-col flex-1 px-5 sm:px-8 lg:px-14 xl:px-20 pt-24 sm:pt-28 md:pt-32 pb-0 max-w-[100vw]">

        {/* ── Top bar ── */}
        <div
          className={`flex items-center justify-between mb-8 sm:mb-10 md:mb-14 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-muted-foreground/60">
              <span className="text-primary">01</span> — Digital Agency
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase text-muted-foreground/35">
            <span>Jakarta, Indonesia</span>
            <span className="w-6 h-px bg-border/40" />
            <span>Est. 2020</span>
          </div>
        </div>

        {/* ── Headline ── */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <h1
            className="font-black tracking-tighter mb-8 sm:mb-10 md:mb-12"
            style={{ lineHeight: 0.88 }}
          >
            {/* Line 1: Kami — ghost/outline */}
            <div className="overflow-hidden">
              <span
                className="block"
                style={{
                  fontSize: "clamp(38px, 10vw, 165px)",
                  WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.22)",
                  color: "transparent",
                  transform: loaded ? "translateY(0)" : "translateY(110%)",
                  transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.08s",
                  display: "block",
                }}
              >
                Kami
              </span>
            </div>

            {/* Line 2: Ciptakan — solid white */}
            <div className="overflow-hidden">
              <span
                className="block text-foreground"
                style={{
                  fontSize: "clamp(38px, 10vw, 165px)",
                  transform: loaded ? "translateY(0)" : "translateY(110%)",
                  transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
                  display: "block",
                }}
              >
                Ciptakan
              </span>
            </div>

            {/* Line 3+4: Digital Experience — gradient (wraps naturally to 2 lines) */}
            <div className="overflow-hidden">
              <span
                className="block bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradientMove_6s_ease-in-out_infinite]"
                style={{
                  fontSize: "clamp(38px, 10vw, 165px)",
                  transform: loaded ? "translateY(0)" : "translateY(110%)",
                  transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.32s",
                  display: "block",
                }}
              >
                Digital Experience
              </span>
            </div>
          </h1>

          {/* ── Bottom row: description + stats ── */}
          <div
            className={`flex flex-col lg:flex-row lg:items-end gap-7 sm:gap-8 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {/* Left: description + CTA */}
            <div className="flex flex-col gap-5 w-full max-w-xs sm:max-w-sm">
              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                Kami membangun{" "}
                <span className="text-foreground/90 font-medium">website</span>,{" "}
                <span className="text-foreground/90 font-medium">aplikasi mobile</span>, dan{" "}
                <span className="text-foreground/90 font-medium">UI/UX design</span>{" "}
                yang membantu bisnis Anda tumbuh di era digital.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#kontak"
                  data-cursor-label="MULAI"
                  className="group relative inline-flex items-center gap-2 rounded-full overflow-hidden px-6 h-11 text-sm font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex-shrink-0"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-500 bg-[length:200%_100%] animate-[gradientMove_4s_ease-in-out_infinite]" />
                  <span className="relative text-primary-foreground">Mulai Proyek</span>
                  <ArrowRight className="relative h-3.5 w-3.5 text-primary-foreground group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </a>
                <a
                  href="#portfolio"
                  data-cursor-label="LIHAT"
                  className="group inline-flex items-center gap-1.5 h-11 px-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="relative">
                    Lihat Karya
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-500" />
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                </a>
              </div>
            </div>

            {/* Right: stats — 2-col grid on mobile, flex row on sm+ */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-8 lg:gap-10 lg:ml-auto">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col group">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1800 + i * 200} />
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground/55 mt-1.5 tracking-[0.1em] uppercase">{stat.label}</span>
                  <div className="w-0 h-px bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-500 mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className={`flex flex-col items-center gap-2 py-6 transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/30">Scroll</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-border/25 pt-1.5">
            <div className="w-1 h-1.5 rounded-full bg-primary animate-bounce" />
          </div>
        </div>

        {/* ── Tech Marquee strip ── */}
        <div
          className={`-mx-5 sm:-mx-8 lg:-mx-14 xl:-mx-20 border-t border-border/10 bg-card/25 backdrop-blur-xl h-11 sm:h-12 flex items-center overflow-hidden transition-all duration-700 delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <Marquee speed={35} className="py-0">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-2.5 px-4 sm:px-5 text-[10px] sm:text-[11px] font-medium text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                {tech.name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
