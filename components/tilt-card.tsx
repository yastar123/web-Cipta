"use client"

import { useRef, useState, ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  perspective?: number
  scale?: number
  glare?: boolean
}

export function TiltCard({ 
  children, 
  className = "", 
  intensity = 10,
  perspective = 1000,
  scale = 1.02,
  glare = true
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 })
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity
    
    setTransform({ rotateX, rotateY, scale })
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 })
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-300 ease-out ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
        {glare && (
          <div
            className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  )
}
