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
  const items = text ? [text] : defaultItems
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className={`relative overflow-hidden border-y border-border/15 py-4 sm:py-5 bg-card/20 backdrop-blur-sm ${className}`}>
      <div
        className={`flex ${reverse ? "animate-marquee-rev" : "animate-marquee"} whitespace-nowrap`}
        style={{ animationDuration: "28s" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-5 px-4 sm:px-5 flex-shrink-0">
            <span className="text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-muted-foreground/45 hover:text-foreground/65 transition-colors">
              {item}
            </span>
            <span className="text-primary text-xs flex-shrink-0">✦</span>
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
    <div className="relative overflow-hidden py-5 sm:py-6 border-y border-border/15 bg-gradient-to-r from-background via-card/30 to-background">
      <div
        className={`flex ${reverse ? "animate-marquee-rev" : "animate-marquee"} whitespace-nowrap`}
        style={{ animationDuration: "32s" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-8 px-6 sm:px-8 flex-shrink-0">
            <span
              className="font-black tracking-tighter leading-none select-none whitespace-nowrap"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 4rem)",
                WebkitTextStroke: "1px oklch(0.97 0 0 / 0.13)",
                color: "transparent",
              }}
            >
              {item}
            </span>
            <span className="text-primary/35 text-2xl sm:text-3xl font-thin flex-shrink-0">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
