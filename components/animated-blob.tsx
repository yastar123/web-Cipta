"use client"

import { useEffect, useRef } from "react"

interface AnimatedBlobProps {
  className?: string
  color?: string
}

export function AnimatedBlob({ className = "", color = "oklch(0.75 0.15 195 / 0.3)" }: AnimatedBlobProps) {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.005
      
      const x1 = 30 + Math.sin(time) * 20
      const y1 = 30 + Math.cos(time * 0.8) * 20
      const x2 = 70 + Math.sin(time * 1.2) * 20
      const y2 = 70 + Math.cos(time) * 20
      const x3 = 30 + Math.sin(time * 0.9) * 20
      const y3 = 70 + Math.cos(time * 1.1) * 20
      const x4 = 70 + Math.sin(time * 1.1) * 20
      const y4 = 30 + Math.cos(time * 0.9) * 20

      blob.style.borderRadius = `${x1}% ${100-x1}% ${x2}% ${100-x2}% / ${y1}% ${y2}% ${100-y2}% ${100-y1}%`
      
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      ref={blobRef}
      className={`transition-all duration-1000 ${className}`}
      style={{
        background: color,
        filter: "blur(60px)",
      }}
    />
  )
}
