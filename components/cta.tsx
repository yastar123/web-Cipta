"use client"

import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, Send, Sparkles, ArrowUpRight } from "lucide-react"
import { FadeIn } from "./text-reveal"

const benefits = [
  "Konsultasi awal gratis tanpa komitmen",
  "Proposal detail dalam 24 jam",
  "Harga transparan, tidak ada biaya tersembunyi",
  "Tim dedicated untuk setiap proyek",
]

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@webcipta.com", href: "mailto:hello@webcipta.com" },
  { icon: Phone, label: "WhatsApp", value: "0853-6619-5381", href: "https://wa.me/6285366195381" },
  { icon: MapPin, label: "Lokasi", value: "Bandar Lampung, Indonesia" },
  { icon: Clock, label: "Jam Kerja", value: "Senin – Jumat, 09:00–18:00" },
]

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", budget: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontak" className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-primary/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-14 xl:px-20">

        {/* Header */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-5">
            <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
            Mulai Hari Ini
            <Sparkles className="h-3 w-3 text-primary/60" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className="font-black tracking-tighter"
              style={{ fontSize: "clamp(36px, 7vw, 96px)", lineHeight: 0.88 }}
            >
              <span className="block text-foreground">Mulai Proyek</span>
              <span
                className="block"
                style={{ WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.18)", color: "transparent" }}
              >
                Impian Anda
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
              Ceritakan proyek Anda — kami jawab dengan proposal komprehensif dan harga transparan dalam 24 jam.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6">

          {/* Left column: info */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Benefits card */}
            <FadeIn>
              <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-5 sm:p-6 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Mengapa webCipta?</h3>
                </div>
                <div className="space-y-3.5">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Contact details */}
                <div className="mt-6 pt-5 border-t border-border/10 space-y-3.5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <h3 className="text-sm font-semibold text-foreground">Hubungi kami</h3>
                  </div>
                  {contactDetails.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/8 border border-primary/10 flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                        <c.icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[9px] text-muted-foreground/50 mb-0.5 uppercase tracking-widest">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-xs font-medium text-foreground/85 hover:text-primary transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-xs font-medium text-foreground/85">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column: form */}
          <FadeIn delay={120} className="lg:col-span-3">
            <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-md p-6 sm:p-7 md:p-8 h-full shadow-2xl shadow-black/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 opacity-50" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl animate-pulse-glow" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Pesan Terkirim!</h3>
                  <p className="text-sm text-muted-foreground/70 max-w-xs leading-relaxed mb-8">
                    Terima kasih telah menghubungi kami. Tim kami akan menghubungi Anda dalam 24 jam.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="group inline-flex items-center gap-2 rounded-full h-9 px-5 text-xs border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground"
                  >
                    Kirim pesan lain
                    <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Nama Lengkap *</label>
                      <input
                        required type="text" value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Budi Santoso"
                        className="w-full rounded-xl bg-background/60 border border-border/25 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15 transition-all hover:border-border/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Email *</label>
                      <input
                        required type="email" value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="budi@perusahaan.com"
                        className="w-full rounded-xl bg-background/60 border border-border/25 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15 transition-all hover:border-border/40"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Perusahaan</label>
                      <input
                        type="text" value={form.company}
                        onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                        placeholder="Nama perusahaan"
                        className="w-full rounded-xl bg-background/60 border border-border/25 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15 transition-all hover:border-border/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Anggaran</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                        className="w-full rounded-xl bg-background/60 border border-border/25 px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15 transition-all hover:border-border/40 appearance-none cursor-pointer"
                      >
                        <option value="">Pilih range anggaran</option>
                        <option value="5-15">Rp 5 – 15 juta</option>
                        <option value="15-50">Rp 15 – 50 juta</option>
                        <option value="50-100">Rp 50 – 100 juta</option>
                        <option value="100+">Rp 100 juta+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Deskripsi Proyek *</label>
                    <textarea
                      required rows={4} value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Ceritakan tentang proyek Anda — jenis aplikasi, fitur utama, dan target pengguna..."
                      className="w-full rounded-xl bg-background/60 border border-border/25 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15 transition-all hover:border-border/40 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-2.5 h-12 text-sm font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/20"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-[length:200%_100%] animate-[gradientMove_5s_ease-in-out_infinite]" />
                    <Send className="relative h-4 w-4 text-primary-foreground" />
                    <span className="relative text-primary-foreground">Kirim Pesan Sekarang</span>
                    <ArrowRight className="relative h-3.5 w-3.5 text-primary-foreground group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-center text-[10px] text-muted-foreground/35">
                    Dengan mengirim form ini, Anda menyetujui{" "}
                    <a href="#" className="text-primary/60 hover:text-primary underline underline-offset-2 transition-colors">Kebijakan Privasi</a>{" "}
                    kami
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
