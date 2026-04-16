"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverLabel, setHoverLabel] = useState("")
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      if (interactive) {
        setIsHovering(true)
        const label = (target.closest("[data-cursor-label]") as HTMLElement)?.dataset.cursorLabel || ""
        setHoverLabel(label)
      }
    }

    const onLeave = () => {
      setIsHovering(false)
      setHoverLabel("")
    }

    const onDocLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onEnter)
    document.addEventListener("mouseout", onLeave)
    document.addEventListener("mouseleave", onDocLeave)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onEnter)
      document.removeEventListener("mouseout", onLeave)
      document.removeEventListener("mouseleave", onDocLeave)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9999] hidden lg:block transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`rounded-full bg-primary transition-all duration-200 ${isHovering ? "w-1.5 h-1.5 opacity-0" : "w-1.5 h-1.5"}`}
        />
      </div>

      {/* Ring — lagging follow via rAF */}
      <div
        ref={ringRef}
        className={`fixed pointer-events-none z-[9998] hidden lg:flex items-center justify-center transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: "translate(-50%, -50%)",
          width: isHovering ? 64 : 36,
          height: isHovering ? 64 : 36,
          transition: "width 0.3s ease, height 0.3s ease",
          borderRadius: "50%",
          border: isHovering ? "1.5px solid oklch(0.72 0.18 195 / 0.7)" : "1px solid oklch(0.97 0 0 / 0.3)",
          background: isHovering ? "oklch(0.72 0.18 195 / 0.08)" : "transparent",
        }}
      >
        {hoverLabel && (
          <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-primary leading-none text-center">
            {hoverLabel}
          </span>
        )}
      </div>
    </>
  )
}
