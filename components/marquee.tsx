"use client"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden [--duration:${speed}s] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-around gap-8 animate-marquee ${
          direction === "right" ? "[animation-direction:reverse]" : ""
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
      <div
        className={`flex shrink-0 items-center justify-around gap-8 animate-marquee ${
          direction === "right" ? "[animation-direction:reverse]" : ""
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden
      >
        {children}
        {children}
      </div>
    </div>
  )
}
