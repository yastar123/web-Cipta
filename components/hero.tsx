"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Play, Code2, Layers, Zap, Sparkles, Globe, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Marquee } from "./marquee"
import { MagneticButton } from "./magnetic-button"
import { ParallaxLayer } from "./parallax"
import { AnimatedCounter } from "./animated-counter"
import { TextScramble } from "./text-scramble"

const techStack = [
  { name: "React", color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", color: "from-white to-gray-400" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "React Native", color: "from-cyan-400 to-blue-500" },
  { name: "Flutter", color: "from-sky-400 to-blue-600" },
  { name: "PostgreSQL", color: "from-blue-400 to-indigo-600" },
  { name: "MongoDB", color: "from-green-400 to-emerald-600" },
  { name: "AWS", color: "from-orange-400 to-amber-600" },
  { name: "Vercel", color: "from-white to-gray-400" },
  { name: "Figma", color: "from-pink-400 to-purple-600" },
  { name: "TailwindCSS", color: "from-cyan-400 to-teal-600" },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Layered Background Effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card via-background to-background" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
        
        {/* Primary animated orb */}
        <div 
          className="absolute w-[1200px] h-[1200px] rounded-full transition-all duration-[3000ms] ease-out opacity-40"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.15 195 / 0.4) 0%, oklch(0.6 0.2 160 / 0.2) 30%, transparent 60%)",
            left: `calc(${mousePosition.x * 100}% - 600px)`,
            top: `calc(${mousePosition.y * 100}% - 600px)`,
            transform: `translateY(${scrollY * 0.1}px) scale(${1 + mousePosition.x * 0.1})`,
          }}
        />
        
        {/* Secondary orbs */}
        <div 
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px]"
          style={{ transform: `translate(30%, -30%) translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[180px]"
          style={{ transform: `translate(-30%, 30%) translateY(${scrollY * 0.2}px)` }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_30%,transparent_100%)]"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxLayer depth={2}>
          <div 
            className={`absolute top-[15%] left-[8%] p-5 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-primary/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <Code2 className="w-10 h-10 text-primary" />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer depth={3}>
          <div 
            className={`absolute top-[25%] right-[12%] p-5 rounded-2xl border border-emerald-500/20 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-emerald-500/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.7s" }}
          >
            <Layers className="w-10 h-10 text-emerald-400" />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer depth={1.5}>
          <div 
            className={`absolute bottom-[30%] left-[15%] p-5 rounded-2xl border border-amber-500/20 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-amber-500/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.9s" }}
          >
            <Zap className="w-10 h-10 text-amber-400" />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer depth={2.5}>
          <div 
            className={`absolute top-[40%] right-[8%] p-5 rounded-2xl border border-violet-500/20 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-violet-500/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "1.1s" }}
          >
            <Sparkles className="w-10 h-10 text-violet-400" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer depth={1}>
          <div 
            className={`absolute bottom-[25%] right-[20%] p-5 rounded-2xl border border-rose-500/20 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-rose-500/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "1.3s" }}
          >
            <Globe className="w-10 h-10 text-rose-400" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer depth={2}>
          <div 
            className={`absolute top-[60%] left-[5%] p-5 rounded-2xl border border-blue-500/20 bg-card/60 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "1.5s" }}
          >
            <Smartphone className="w-10 h-10 text-blue-400" />
          </div>
        </ParallaxLayer>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Badge */}
          <div 
            className={`group relative inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm mb-12 backdrop-blur-xl overflow-hidden cursor-default transition-all duration-1000 hover:border-primary/50 hover:bg-primary/15 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="relative text-foreground font-medium tracking-wide">
              <TextScramble text="Menerima Proyek Baru 2024" trigger="visible" />
            </span>
            <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main Heading */}
          <h1 
            className={`max-w-6xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-[0.85] transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="block overflow-hidden mb-2 lg:mb-4">
              <span className="block">Kami Ciptakan</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradientMove_4s_ease-in-out_infinite]">
                    Digital
                  </span>
                  <span className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full -z-10" />
                </span>
                <span className="text-muted-foreground/30 mx-4 lg:mx-8">/</span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradientMove_4s_ease-in-out_infinite_0.5s]">
                    Experience
                  </span>
                  <span className="absolute -inset-2 bg-emerald-500/20 blur-2xl rounded-full -z-10" />
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`mt-10 lg:mt-14 max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed font-light transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            webCipta adalah <span className="text-foreground font-medium">digital agency</span> yang mengkhususkan diri dalam pembuatan{" "}
            <span className="text-foreground font-medium">website</span>,{" "}
            <span className="text-foreground font-medium">aplikasi mobile</span>, dan{" "}
            <span className="text-foreground font-medium">UI/UX design</span>{" "}
            yang membantu bisnis Anda meraih kesuksesan di era digital.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`mt-14 lg:mt-16 flex flex-col sm:flex-row items-center gap-5 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <MagneticButton strength={0.3}>
              <Button 
                size="lg" 
                className="group relative bg-foreground text-background hover:bg-foreground gap-3 px-10 h-16 lg:h-18 text-base lg:text-lg font-medium rounded-full overflow-hidden shadow-2xl shadow-foreground/20 transition-all hover:shadow-foreground/30 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-3">
                  Mulai Proyek Anda
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/20 group-hover:bg-background/30 transition-colors">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </span>
              </Button>
            </MagneticButton>
            
            <MagneticButton strength={0.3}>
              <Button 
                size="lg" 
                variant="outline" 
                className="group gap-4 h-16 lg:h-18 px-8 text-base lg:text-lg rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all backdrop-blur-sm hover:scale-[1.02]"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors overflow-hidden">
                  <span className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
                  <Play className="h-5 w-5 text-primary ml-0.5 relative z-10" />
                </span>
                Lihat Showreel
              </Button>
            </MagneticButton>
          </div>

          {/* Stats Row */}
          <div 
            className={`mt-24 lg:mt-32 w-full transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 rounded-3xl overflow-hidden border border-border/20">
              {[
                { value: 150, suffix: "+", label: "Proyek Selesai", sublabel: "Website & Mobile App" },
                { value: 50, suffix: "+", label: "Klien Aktif", sublabel: "Startup hingga Enterprise" },
                { value: 98, suffix: "%", label: "Tingkat Kepuasan", sublabel: "Rating 5 Bintang" },
                { value: 5, suffix: " Tahun", label: "Pengalaman", sublabel: "Sejak 2019" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-8 lg:p-12 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:bg-card/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative block text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
                  </span>
                  <span className="relative block text-base lg:text-lg text-foreground mt-3 font-medium">{stat.label}</span>
                  <span className="relative block text-sm text-muted-foreground mt-1">{stat.sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-border/20 bg-background/80 backdrop-blur-2xl">
        <Marquee speed={50} className="py-2">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-full border border-border/30 bg-card/30 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/60 transition-all cursor-default mx-2 backdrop-blur-sm"
            >
              <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${tech.color}`} />
              {tech.name}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "1.2s" }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
