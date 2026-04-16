"use client"

import { useEffect, useRef, ReactNode } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollingContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let current = 0
    let target = 0
    const ease = 0.075

    const smoothScroll = () => {
      target = window.scrollY
      current += (target - current) * ease
      
      if (scrollingContainerRef.current) {
        scrollingContainerRef.current.style.transform = `translateY(-${current}px)`
      }
      
      requestAnimationFrame(smoothScroll)
    }

    // Only enable smooth scroll on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      const scrollContainer = scrollingContainerRef.current
      if (scrollContainer) {
        document.body.style.height = `${scrollContainer.getBoundingClientRect().height}px`
      }
      smoothScroll()
    }

    return () => {
      document.body.style.height = ""
    }
  }, [])

  return (
    <div ref={scrollingContainerRef} className="will-change-transform">
      {children}
    </div>
  )
}
