"use client"

interface MarqueeBandProps {
  reverse?: boolean
  text?: string
  className?: string
}

const defaultItems = [
  "Website Development",
  "Mobile App",
  "UI/UX Design",
  "Performance",
  "Security",
  "Konsultasi",
]

export function MarqueeBand({ reverse = false, text, className = "" }: MarqueeBandProps) {
  const items = text
    ? [text]
    : defaultItems

  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className={`relative overflow-hidden border-y border-border/15 py-5 bg-card/20 backdrop-blur-sm ${className}`}>
      <div className={`flex ${reverse ? "animate-marquee-rev" : "animate-marquee"} whitespace-nowrap`}
        style={{ animationDuration: "25s" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-5">
            <span className="text-sm md:text-base font-bold tracking-[0.12em] uppercase text-muted-foreground/50 hover:text-foreground/70 transition-colors">
              {item}
            </span>
            <span className="text-primary text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function MarqueeBandLarge({ reverse = false }: { reverse?: boolean }) {
  const items = [
    "WEBSITE", "MOBILE APP", "UI/UX", "NEXT.JS", "REACT", "FLUTTER", "DESIGN", "DEVELOPMENT",
  ]
  const doubled = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-6 border-y border-border/15 bg-gradient-to-r from-background via-card/30 to-background">
      <div
        className={`flex ${reverse ? "animate-marquee-rev" : "animate-marquee"} whitespace-nowrap`}
        style={{ animationDuration: "30s" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-8">
            <span
              className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tighter leading-none text-stroke select-none"
              style={{ WebkitTextStroke: "1px oklch(0.97 0 0 / 0.12)", color: "transparent" }}
            >
              {item}
            </span>
            <span className="text-primary/40 text-3xl font-thin">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
