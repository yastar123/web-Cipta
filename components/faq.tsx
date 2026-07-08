"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { FadeIn } from "./text-reveal"
import { faqs } from "@/lib/faq-data"

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-8 lg:px-14 xl:px-20">
        <FadeIn className="mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-5">
            <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
            FAQ
            <span className="w-5 h-px bg-gradient-to-l from-primary to-transparent" />
          </div>
          <h2
            className="font-black tracking-tighter text-foreground mx-auto"
            style={{ fontSize: "clamp(30px, 5.5vw, 64px)", lineHeight: 0.95 }}
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Seputar jasa pembuatan website di Lampung dan seluruh Indonesia bersama webCipta.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <FadeIn key={item.q} delay={i * 50}>
                <div
                  className={`rounded-2xl border bg-card/25 backdrop-blur-sm overflow-hidden transition-colors duration-300 ${
                    isOpen ? "border-primary/30" : "border-border/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-foreground">{item.q}</span>
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen ? "rotate-45 border-primary/40 bg-primary/10" : "border-border/30"
                      }`}
                    >
                      <Plus className="h-3.5 w-3.5 text-primary" />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
