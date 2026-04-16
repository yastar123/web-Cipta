"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[10001] h-[2px] pointer-events-none" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 origin-left"
        style={{ width: `${progress}%`, transition: "width 80ms linear" }}
      />
    </div>
  )
}
