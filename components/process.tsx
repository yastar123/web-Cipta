"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Lightbulb, Code2, Rocket, Check, ArrowRight, Sparkles, Play } from "lucide-react"
import { FadeIn } from "./text-reveal"
import { Button } from "./ui/button"
import { MagneticButton } from "./magnetic-button"
import { AnimatedCounter } from "./animated-counter"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Research",
    subtitle: "Memahami Visi Anda",
    description: "Semuanya dimulai dengan mendengarkan. Kami melakukan deep-dive session untuk memahami bisnis Anda secara mendalam - mulai dari goals, target audience, hingga pain points yang ingin diselesaikan. Riset kompetitor dan market analysis untuk positioning yang tepat.",
    duration: "1-2 Minggu",
    deliverables: ["Business Requirements Document", "Competitor Analysis Report", "User Persona & Journey", "Project Scope & Timeline"],
    gradient: "from-cyan-500 to-blue-600",
    color: "cyan"
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Design & Prototype",
    subtitle: "Visualisasi Konsep",
    description: "Ide brilliant membutuhkan visualisasi yang tepat. Tim designer kami mengubah requirements menjadi wireframe, mockup high-fidelity, dan prototype interaktif. Anda bisa merasakan produk sebelum satu baris kode pun ditulis.",
    duration: "2-3 Minggu",
    deliverables: ["Wireframes & Sitemap", "High-Fidelity UI Design", "Interactive Prototype (Figma)", "Design System & Style Guide"],
    gradient: "from-emerald-500 to-teal-600",
    color: "emerald"
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    subtitle: "Membangun Impian",
    description: "Ini saatnya magic terjadi. Tim developer kami mengimplementasikan desain dengan teknologi modern dan best practices. Agile methodology dengan sprint reviews reguler - Anda selalu tahu progress dan bisa memberikan feedback.",
    duration: "4-8 Minggu",
    deliverables: ["Fully Functional Application", "Clean & Documented Code", "API Documentation", "QA Test Reports"],
    gradient: "from-violet-500 to-purple-600",
    color: "violet"
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Growth",
    subtitle: "Go Live & Beyond",
    description: "Launching bukan akhir, tapi awal perjalanan. Zero-downtime deployment, monitoring tools, dan comprehensive training untuk tim Anda. Kami tetap support untuk memastikan produk terus berkembang bersama bisnis Anda.",
    duration: "Ongoing",
    deliverables: ["Live Production App", "Deployment Documentation", "Team Training Session", "24/7 Support & Maintenance"],
    gradient: "from-orange-500 to-amber-600",
    color: "orange"
  }
]

export function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Auto progress through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveStep(current => (current + 1) % steps.length)
          return 0
        }
        return prev + 0.5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [activeStep])

  return (
    <section id="proses" className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-4xl mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-3 text-sm font-medium text-primary uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Cara Kami Bekerja</span>
            <span className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
            Proses yang{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                transparan
              </span>
              <span className="absolute -inset-1 bg-primary/10 blur-xl rounded-lg -z-10" />
            </span>{" "}
            dan terstruktur
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Metodologi yang teruji untuk hasil maksimal. Anda akan selalu tahu progress proyek dan terlibat dalam setiap keputusan penting.
          </p>
        </FadeIn>

        {/* Steps Timeline */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - Step Navigation */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-4" ref={timelineRef}>
              {steps.map((step, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <button
                    onClick={() => {
                      setActiveStep(index)
                      setProgress(0)
                    }}
                    className={`group w-full text-left p-6 lg:p-8 rounded-2xl border transition-all duration-700 overflow-hidden relative ${
                      activeStep === index
                        ? "bg-card/60 border-primary/30 shadow-xl shadow-primary/5 backdrop-blur-xl"
                        : "bg-transparent border-border/20 hover:border-border/40 hover:bg-card/30"
                    }`}
                  >
                    {/* Progress Bar for Active Step */}
                    {activeStep === index && (
                      <div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                    
                    <div className="flex items-center gap-5 relative z-10">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg transition-all duration-500 ${activeStep === index ? "scale-100 shadow-xl" : "scale-90 opacity-60"}`}>
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-bold transition-colors ${activeStep === index ? "text-primary" : "text-muted-foreground"}`}>{step.number}</span>
                          <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted/50">{step.duration}</span>
                        </div>
                        <h3 className={`text-lg lg:text-xl font-bold mt-1 transition-colors ${activeStep === index ? "text-foreground" : "text-muted-foreground"}`}>
                          {step.title}
                        </h3>
                      </div>
                      <ArrowRight className={`h-5 w-5 flex-shrink-0 transition-all duration-500 ${activeStep === index ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-4"}`} />
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right - Step Details */}
          <div className="lg:col-span-7">
            <FadeIn delay={200}>
              <div className="relative rounded-3xl border border-border/30 bg-card/40 backdrop-blur-xl p-8 lg:p-12 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${steps[activeStep].gradient} opacity-5 blur-[100px] transition-all duration-1000`} />
                
                <div className="relative z-10">
                  {/* Step Header */}
                  <div className="flex items-start gap-6 mb-10">
                    <div className={`flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} shadow-2xl transition-all duration-500`}>
                      {(() => {
                        const StepIcon = steps[activeStep].icon
                        return <StepIcon className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                      })()}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">{steps[activeStep].subtitle}</span>
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mt-2">{steps[activeStep].title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
                    {steps[activeStep].description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-10">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Yang Akan Anda Dapatkan</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {steps[activeStep].deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-5 rounded-2xl bg-background/60 border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${steps[activeStep].gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                            <Check className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-sm lg:text-base font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration Badge & CTA */}
                  <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <span className="text-sm text-muted-foreground">Estimasi Waktu</span>
                      <span className={`block text-3xl lg:text-4xl font-bold bg-gradient-to-r ${steps[activeStep].gradient} bg-clip-text text-transparent mt-1`}>
                        {steps[activeStep].duration}
                      </span>
                    </div>
                    <MagneticButton strength={0.3}>
                      <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                        <span>Mulai Proyek</span>
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats Banner */}
        <FadeIn delay={400} className="mt-24 lg:mt-32">
          <div className="rounded-3xl border border-border/30 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl p-10 lg:p-16 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px]" />
            
            <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: 2, suffix: "-4", label: "Minggu", sublabel: "Rata-rata waktu MVP" },
                { value: 100, suffix: "%", label: "Transparansi", sublabel: "Update progress rutin" },
                { value: 999, suffix: "", label: "Revisi", sublabel: "Unlimited hingga puas" },
                { value: 24, suffix: "/7", label: "Support", sublabel: "Setelah launch" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <span className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {stat.value === 999 ? (
                      <span>&infin;</span>
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </span>
                  <p className="text-lg font-semibold text-foreground mt-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
