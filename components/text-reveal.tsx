"use client"

import { useEffect, useRef, useState } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <span
        className={`inline-block transition-transform duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {children}
      </span>
    </span>
  )
}

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function SplitText({ children, className = "", delay = 0, staggerDelay = 30 }: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const words = children.split(" ")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <span
            className={`inline-block transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: `${index * staggerDelay}ms` }}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </span>
        </span>
      ))}
    </span>
  )
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const directionClasses = {
    up: isVisible ? "translate-y-0" : "translate-y-8",
    down: isVisible ? "translate-y-0" : "-translate-y-8",
    left: isVisible ? "translate-x-0" : "translate-x-8",
    right: isVisible ? "translate-x-0" : "-translate-x-8",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${directionClasses[direction]} ${className}`}
    >
      {children}
    </div>
  )
}

interface StaggerChildrenProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggerChildren({ children, className = "", staggerDelay = 100 }: StaggerChildrenProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
