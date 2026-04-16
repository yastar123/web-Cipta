"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function Parallax({ 
  children, 
  className = "", 
  speed = 0.5,
  direction = "up"
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      const multiplier = direction === "up" ? -1 : 1
      
      setOffset(scrolled * speed * multiplier * 0.1)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}

interface ParallaxLayerProps {
  children: ReactNode
  className?: string
  depth?: number
}

export function ParallaxLayer({ children, className = "", depth = 1 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * depth * 0.02
      const y = (e.clientY - window.innerHeight / 2) * depth * 0.02
      setTransform({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [depth])

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-transform duration-500 ease-out ${className}`}
      style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}
    >
      {children}
    </div>
  )
}
