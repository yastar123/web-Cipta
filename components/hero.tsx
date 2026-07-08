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
  { value: 50,  suffix: "+", label: "Klien" },
  { value: 98,  suffix: "%", label: "Kepuasan" },
  { value: 5,   suffix: "",  label: "Tahun" },
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
    const t3 = setTimeout(() => setPhase(2), 900)
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
    transition: `transform 1.0s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    display: "block",
  })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* ─── Layered background ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,oklch(0.13_0.07_200)_0%,transparent_60%)]" />
        <div
          className="absolute rounded-full hidden md:block"
          style={{
            width: 900, height: 900,
            left: `calc(${mousePos.x * 100}% - 450px)`,
            top: `calc(${mousePos.y * 100}% - 450px)`,
            background: "radial-gradient(circle, oklch(0.72 0.18 195 / 0.07) 0%, transparent 55%)",
            transform: `translateY(${scrollY * 0.04}px)`,
            transition: "left 3s ease-out, top 3s ease-out",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[150px]"
          style={{ transform: `translate(30%, -40%) translateY(${scrollY * 0.07}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-primary/[0.04] rounded-full blur-[120px]"
          style={{ transform: `translate(-25%, 30%) translateY(${scrollY * -0.03}px)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent)",
          }}
        />
      </div>

      {/* ─── Main content ─── */}
      <div
        className="relative z-10 flex flex-col flex-1 px-4 sm:px-8 lg:px-14 xl:px-20"
        style={{ transform: `translateY(${scrollY * -0.03}px)` }}
      >
        {/* ─── Top meta bar ─── */}
        <div
          className={`flex items-center justify-between pt-24 sm:pt-28 md:pt-32 mb-6 sm:mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-muted-foreground/50">
              <span className="text-primary font-semibold">01</span>
              <span className="hidden xs:inline"> — Digital Agency</span>
              <span className="xs:hidden"> — Agency</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase text-muted-foreground/30">
            <span>Lampung</span>
            <span className="w-4 h-px bg-border/25" />
            <span>Est. 2020</span>
          </div>
        </div>

        {/* ─── Hero headline ─── */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <h1 className="relative mb-6 sm:mb-8 md:mb-10">
            <span className="sr-only">
              Jasa Pembuatan Website Profesional di Lampung &amp; Seluruh Indonesia — webCipta Digital Agency
            </span>

            {/* KAMI — left, outline */}
            <span className="block overflow-hidden leading-none">
              <span
                className="block text-left"
                style={{
                  ...lineStyle(0.05),
                  fontSize: "clamp(48px, 11.5vw, 168px)",
                  WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.18)",
                  color: "transparent",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                }}
              >
                KAMI
              </span>
            </span>

            {/* CIPTAKAN — right, solid white */}
            <span className="block overflow-hidden leading-none">
              <span
                className="block text-right text-foreground"
                style={{
                  ...lineStyle(0.17),
                  fontSize: "clamp(48px, 11.5vw, 168px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                }}
              >
                CIPTAKAN
              </span>
            </span>

            {/* DIGITAL — left, gradient */}
            <span className="block overflow-hidden leading-none">
              <span
                className="block text-left bg-gradient-to-r from-primary via-cyan-400 to-emerald-300 bg-clip-text text-transparent"
                style={{
                  ...lineStyle(0.3),
                  fontSize: "clamp(48px, 11.5vw, 168px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                }}
              >
                DIGITAL
              </span>
            </span>

            {/* EXPERIENCE — right, outline accent */}
            <span className="block overflow-hidden leading-none">
              <span
                className="block text-right"
                style={{
                  ...lineStyle(0.42),
                  fontSize: "clamp(34px, 8vw, 116px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                  WebkitTextStroke: "1.5px oklch(0.72 0.18 195 / 0.32)",
                  color: "transparent",
                }}
              >
                EXPERIENCE
              </span>
            </span>
          </h1>

          {/* Stats row */}
          <div
            className={`flex items-center gap-3 sm:gap-6 mt-7 sm:mt-9 transition-all duration-700 delay-700 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            <div className="flex items-center gap-4 sm:gap-7">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span className="text-base sm:text-xl md:text-2xl font-black text-foreground tracking-tight leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000 + i * 150} />
                  </span>
                  <span className="text-[7px] sm:text-[9px] text-muted-foreground/40 tracking-[0.15em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border/30 to-transparent" />
          </div>

          {/* ─── Action row ─── */}
          <div
            className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 transition-all duration-700 delay-[850ms] ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              Jasa pembuatan{" "}
              <span className="text-foreground/85 font-medium">website</span>,{" "}
              <span className="text-foreground/85 font-medium">mobile app</span>{" "}
              &amp;{" "}
              <span className="text-foreground/85 font-medium">UI/UX</span>{" "}
              di Lampung &amp; seluruh Indonesia yang memberikan hasil nyata.
            </p>

            <div className="flex items-center gap-3 sm:ml-auto flex-shrink-0">
              <a
                href="#kontak"
                className="group relative inline-flex items-center gap-2 rounded-full overflow-hidden px-5 sm:px-6 h-10 sm:h-11 text-xs sm:text-sm font-semibold hover:scale-[1.04] hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex-shrink-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-500" />
                <span className="relative text-primary-foreground font-bold">Mulai Proyek</span>
                <ArrowRight className="relative h-3.5 w-3.5 text-primary-foreground group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-1.5 h-10 sm:h-11 px-2 text-xs sm:text-sm text-muted-foreground/60 hover:text-foreground transition-colors flex-shrink-0"
              >
                <span className="relative">
                  Lihat Karya
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ─── Scroll indicator ─── */}
        <div
          className={`flex items-center gap-3 py-4 sm:py-5 transition-all duration-700 delay-[1050ms] ${phase >= 2 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex h-6 w-3.5 items-start justify-center rounded-full border border-border/20 pt-1 flex-shrink-0">
            <div className="w-px h-1.5 rounded-full bg-primary animate-bounce" />
          </div>
          <span className="text-[9px] tracking-[0.28em] uppercase text-muted-foreground/25">Scroll</span>
        </div>

        {/* ─── Tech strip ─── */}
        <div
          className={`-mx-4 sm:-mx-8 lg:-mx-14 xl:-mx-20 border-t border-border/10 bg-card/20 backdrop-blur-xl h-9 sm:h-10 flex items-center overflow-hidden transition-all duration-700 delay-[950ms] ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="flex animate-marquee whitespace-nowrap"
            style={{ animationDuration: "35s" }}
          >
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-4 text-[9px] sm:text-[10px] font-medium text-muted-foreground/30 hover:text-muted-foreground/55 transition-colors cursor-default whitespace-nowrap"
              >
                <span className="w-0.5 h-0.5 rounded-full bg-primary/35 flex-shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
