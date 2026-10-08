"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, TrendingUp, Filter } from "lucide-react";
import { projects, categories } from "@/lib/portfolio-data";

export function PortfolioClient() {
  const [active, setActive] = useState("all");
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    setPage(1);
  }, [active]);

  // Scroll to top when page changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const startIndex = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,oklch(0.14_0.06_200)_0%,transparent_65%)]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Sticky Header */}
      <header className="relative z-10 border-b border-border/10 bg-background/70 backdrop-blur-xl sticky top-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/30 bg-card/40 group-hover:border-primary/30 group-hover:bg-card/60 transition-all">
                <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <span className="text-xs font-medium hidden sm:block">
                Kembali
              </span>
            </Link>
            <div className="w-px h-5 bg-border/30" />
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-cyan-500 to-emerald-500 shadow-md shadow-primary/20">
                <span className="text-[10px] font-black text-primary-foreground">
                  W
                </span>
              </div>
              <span className="text-sm font-black tracking-tight text-foreground">
                web
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  Cipta
                </span>
              </span>
            </Link>
            <div className="ml-auto">
              <Link
                href="/#kontak"
                className="relative inline-flex items-center gap-1.5 rounded-full px-3 sm:px-4 h-8 text-xs font-bold overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500" />
                <span className="relative text-primary-foreground hidden sm:inline">
                  Konsultasi Gratis
                </span>
                <span className="relative text-primary-foreground sm:hidden">
                  Kontak
                </span>
                <ArrowUpRight className="relative h-3 w-3 text-primary-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.25em]">
              <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
              Portfolio
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
              <div>
                <h1
                  className="font-black tracking-tighter leading-[0.88] mb-4"
                  style={{ fontSize: "clamp(32px, 6vw, 90px)" }}
                >
                  <span className="block text-foreground">Semua</span>
                  <span className="block text-primary">Karya Kami</span>
                </h1>
                <p className="text-sm md:text-base text-foreground leading-relaxed max-w-md">
                  Karya-karya terbaik kami — dari startup hingga enterprise,
                  dengan standar kualitas internasional di setiap lini.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                {[
                  { value: "150+", label: "Proyek" },
                  { value: "50+", label: "Klien" },
                  { value: "5 Thn", label: "Pengalaman" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center px-4 py-3 rounded-xl border border-border/20 bg-card/20 backdrop-blur-sm"
                  >
                    <div className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 overflow-hidden ${
                    active === cat.id
                      ? "text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                      : "bg-card/30 text-muted-foreground border border-border/20 hover:border-primary/30 hover:text-foreground backdrop-blur-sm"
                  }`}
                >
                  {active === cat.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500" />
                  )}
                  <span className="relative">{cat.label}</span>
                </button>
              ))}
              <div className="flex items-center gap-1.5 ml-auto text-xs text-muted-foreground/50">
                <Filter className="h-3 w-3 flex-shrink-0" />
                <span className="whitespace-nowrap">
                  {filtered.length} proyek
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {paginated.map((project, i) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-border/20 bg-card/70 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{
                    animation: `fade-up 0.5s ease-out ${Math.min(i, 5) * 60}ms both`,
                  }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.client}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading={i < 3 ? "eager" : "lazy"}
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
                      <span className="text-base font-black">
                        {project.metric}
                      </span>
                      <span className="text-sm text-foreground">
                        {project.metricLabel}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-foreground">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination controls */}
            {filtered.length > itemsPerPage && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Menampilkan {Math.min(startIndex + 1, filtered.length)}–
                  {Math.min(startIndex + paginated.length, filtered.length)}{" "}
                  dari {filtered.length} proyek
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className={`px-3 py-1 rounded-full border border-border/20 bg-card/20 text-sm ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/5"}`}
                  >
                    Sebelumnya
                  </button>
                  <div className="inline-flex items-center gap-1">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPage(idx + 1)}
                        className={`px-3 py-1 rounded-full text-sm border ${page === idx + 1 ? "bg-primary text-primary-foreground border-primary" : "bg-card/20 border-border/20"}`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className={`px-3 py-1 rounded-full border border-border/20 bg-card/20 text-sm ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/5"}`}
                  >
                    Berikutnya
                  </button>
                </div>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground/50 text-sm">
                  Tidak ada proyek dalam kategori ini.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl sm:rounded-3xl border border-border/25 bg-card/30 backdrop-blur-md overflow-hidden p-8 sm:p-10 md:p-14 text-center">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-5">
                  <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
                  Mulai Proyek Anda
                </div>
                <h2
                  className="font-black tracking-tighter leading-[0.9] mb-5"
                  style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
                >
                  <span className="text-foreground">Proyek Selanjutnya</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Milik Anda
                  </span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                  Mari wujudkan ide Anda menjadi produk digital yang luar biasa.
                  Konsultasi gratis, proposal dalam 24 jam.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/#kontak"
                    className="group relative inline-flex items-center gap-2 rounded-full overflow-hidden px-7 h-12 text-sm font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-500" />
                    <span className="relative text-primary-foreground">
                      Mulai Sekarang
                    </span>
                    <ArrowUpRight className="relative h-4 w-4 text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-border/30 bg-card/20 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all w-full sm:w-auto"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
