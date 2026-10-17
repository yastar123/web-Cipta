"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, TrendingUp } from "lucide-react";
import { FadeIn } from "./text-reveal";
import { projects } from "@/lib/portfolio-data";

const homepageProjectImages = [
  "/portofolio-36.jpg",
  "/portofolio-37.png",
  "/portofolio-38.png",
  "/portofolio-40.png",
  "/portofolio-41.png",
  "/portofolio-42.png",
];
const homepageProjects = projects.filter((project) =>
  homepageProjectImages.includes(project.image ?? ""),
);

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 lg:py-36 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-14 xl:px-20">
        {/* ── Header ── */}
        <FadeIn className="mb-10 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-4 sm:mb-5">
                <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                Portfolio
              </div>
              <h2
                className="font-black tracking-tighter leading-[0.9]"
                style={{ fontSize: "clamp(36px, 7vw, 96px)" }}
              >
                <span className="block text-foreground">Karya</span>
                <span className="block text-primary">Terbaik Kami</span>
              </h2>
            </div>
            <p className="text-sm text-foreground max-w-xs leading-relaxed">
              Setiap proyek adalah kisah kolaborasi dan inovasi yang
              menghasilkan dampak nyata.
            </p>
          </div>
        </FadeIn>

        {/* ── Masonry-style grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {homepageProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 70}>
              <article className="group overflow-hidden rounded-2xl border border-border/20 bg-card/70 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.client}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lihat ${project.title}`}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-foreground">
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-black leading-tight tracking-tight text-foreground sm:text-xl">
                    {project.title}
                  </h3>

                  <div className="mb-3 flex items-center gap-2 text-foreground">
                    <TrendingUp className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-base font-black">{project.metric}</span>
                    <span className="text-sm text-foreground">
                      {project.metricLabel}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* ── CTA ── */}
        <FadeIn
          delay={500}
          className="mt-10 sm:mt-12 flex items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 h-11 px-6 sm:px-7 text-sm font-medium rounded-full border border-border/30 bg-card/20 hover:border-primary/35 hover:bg-primary/5 transition-all backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
          >
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              Lihat Semua Portfolio
            </span>
            <ExternalLink className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
