"use client"

import { useEffect, useState, useRef } from "react"

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  trigger?: "hover" | "visible" | "always"
}

const chars = "!<>-_\\/[]{}—=+*^?#________"

export function TextScramble({ 
  text, 
  className = "", 
  speed = 30,
  trigger = "visible"
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef(0)
  const resolveRef = useRef(0)

  const scramble = () => {
    if (isScrambling) return
    setIsScrambling(true)
    
    let iteration = 0
    const maxIterations = text.length

    const animate = () => {
      const newText = text
        .split("")
        .map((char, index) => {
          if (index < iteration) {
            return text[index]
          }
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join("")

      setDisplayText(newText)

      if (iteration < maxIterations) {
        iteration += 1/3
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayText(text)
        setIsScrambling(false)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (trigger === "visible") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(scramble, 200)
            observer.disconnect()
          }
        },
        { threshold: 0.5 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    }

    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [trigger, text])

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      scramble()
    }
  }

  return (
    <span 
      ref={ref}
      className={`font-mono ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  )
}
