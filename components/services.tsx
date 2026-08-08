"use client";

import { useState } from "react";
import { FadeIn } from "./text-reveal";

const testimonials = [
  {
    image: "/testimoni-1.png",
    label: "Review Klien #1",
    caption:
      "Testimoni nyata untuk hasil desain interior profesional dari tim kami.",
  },
  {
    image: "/testimoni-2.png",
    label: "Review Klien #2",
    caption:
      "Kesan dan pesan langsung dari klien yang puas bekerja sama dengan kami.",
  },
  {
    image: "/testimoni-3.png",
    label: "Review Klien #3",
    caption:
      "Visual testimoni yang menonjolkan kualitas layanan dan hasil akhir.",
  },
  {
    image: "/testimoni-4.png",
    label: "Review Klien #4",
    caption:
      "Testimoni sebagai bukti bahwa klien kami mendapatkan pengalaman terbaik.",
  },
];

export function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimoni"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-14 xl:px-20">
        <FadeIn className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Testimoni
              </div>
              <h2
                className="font-black tracking-tighter"
                style={{
                  fontSize: "clamp(34px, 6.5vw, 90px)",
                  lineHeight: 0.88,
                }}
              >
                <span className="block text-foreground">Galeri</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: "1.5px oklch(0.05 0.008 240 / 0.4)",
                    color: "transparent",
                  }}
                >
                  Testimoni Klien
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground/80 leading-relaxed">
                Kumpulan testimoni visual klien kami sebagai bukti pengalaman
                kerjasama yang memuaskan.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((item, index) => (
            <FadeIn key={item.image} delay={index * 60}>
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setIsOpen(true);
                }}
                className="overflow-hidden rounded-[32px] bg-transparent transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <div className="relative h-72 w-full">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        {isOpen ? (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-[100000] inline-flex h-10 w-10 items-center justify-center text-white text-3xl leading-none transition hover:text-primary"
              aria-label="Tutup galeri testimoni"
            >
              ×
            </button>
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].label}
              className="max-h-[calc(100vh-4rem)] max-w-[calc(100vw-4rem)] object-contain"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
