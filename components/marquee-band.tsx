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
  const doubled = [...items, ...items, ...items, ...items, ...items]

  return (
    <div className={`relative overflow-hidden border-y border-border/10 py-4 sm:py-5 bg-card/15 backdrop-blur-sm ${className}`}>
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className={`flex ${reverse ? "animate-marquee-rev" : "animate-marquee"} whitespace-nowrap`}
        style={{ animationDuration: "32s" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-5 px-4 sm:px-5 flex-shrink-0">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground/35 hover:text-foreground/55 transition-colors duration-300">
              {item}
            </span>
            <span className="text-primary/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function MarqueeBandLarge({ reverse = false }: { reverse?: boolean }) {
  const items = [
    "WEBSITE", "MOBILE APP", "UI/UX", "NEXT.JS",
    "REACT", "FLUTTER", "DESIGN", "DEVELOPMENT",
  ]
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-6 sm:py-8 border-y border-border/10 bg-gradient-to-r from-background via-card/15 to-background">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className={`flex ${reverse ? "animate-marquee-rev" : "animate-marquee"} whitespace-nowrap`}
        style={{ animationDuration: "40s" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-10 px-6 sm:px-10 flex-shrink-0">
            <span
              className="font-black tracking-tighter leading-none select-none whitespace-nowrap hover:opacity-60 transition-opacity duration-500"
              style={{
                fontSize: "clamp(1.8rem, 5.5vw, 4.5rem)",
                WebkitTextStroke: "1px oklch(0.97 0 0 / 0.1)",
                color: "transparent",
              }}
            >
              {item}
            </span>
            <span className="text-primary/20 font-light flex-shrink-0" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
