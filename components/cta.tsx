"use client"

import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, Send, Sparkles } from "lucide-react"
import { FadeIn } from "./text-reveal"

const benefits = [
  "Konsultasi awal gratis tanpa komitmen",
  "Proposal detail dalam 24 jam",
  "Harga transparan, tidak ada biaya tersembunyi",
  "Tim dedicated untuk setiap proyek",
]

const contactDetails = [
  { icon: Mail, label: "Email kami", value: "hello@webcipta.com", href: "mailto:hello@webcipta.com" },
  { icon: Phone, label: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
  { icon: MapPin, label: "Kantor", value: "Jakarta, Indonesia" },
  { icon: Clock, label: "Jam kerja", value: "Senin – Jumat, 09:00 – 18:00" },
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Header */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-5">
            <span className="w-5 h-px bg-gradient-to-r from-primary to-transparent" />
            Mulai Hari Ini
            <Sparkles className="h-3 w-3 text-primary/60" />
          </div>
          <h2
            className="font-black tracking-tighter leading-[0.9] mb-4"
            style={{ fontSize: "clamp(38px, 7vw, 96px)" }}
          >
            <span className="block text-foreground">Mulai Proyek</span>
            <span
              className="block"
              style={{ WebkitTextStroke: "1.5px oklch(0.97 0 0 / 0.2)", color: "transparent" }}
            >
              Impian Anda
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            Ceritakan proyek Anda — kami jawab dengan proposal komprehensif dan harga transparan dalam 24 jam.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Benefits */}
            <FadeIn>
              <div className="rounded-2xl border border-border/25 bg-card/40 backdrop-blur-sm p-6 shadow-lg shadow-background/20">
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Mengapa webCipta?</h3>
                </div>
                <div className="space-y-3.5">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 border border-primary/25 flex-shrink-0 mt-0.5 group-hover:bg-primary/25 transition-colors">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={80}>
              <div className="rounded-2xl border border-border/25 bg-card/40 backdrop-blur-sm p-6 shadow-lg shadow-background/20">
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <h3 className="text-sm font-semibold text-foreground">Hubungi kami</h3>
                </div>
                <div className="space-y-4">
                  {contactDetails.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/15 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <c.icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground/60 mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-xs font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-xs font-medium text-foreground/90">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={150} className="lg:col-span-3">
            <div className="rounded-2xl border border-border/25 bg-card/40 backdrop-blur-md p-6 md:p-8 h-full shadow-xl shadow-background/30 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 opacity-60" />

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Pesan Terkirim!</h3>
                  <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-8">
                    Terima kasih telah menghubungi kami. Tim kami akan menghubungi Anda dalam 24 jam.
                  </p>
                  <button
                    className="inline-flex items-center gap-2 rounded-full h-9 px-5 text-xs border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground"
                    onClick={() => setSubmitted(false)}
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">Nama Lengkap *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Budi Santoso"
                        className="w-full rounded-xl bg-background/70 border border-border/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all hover:border-border/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="budi@perusahaan.com"
                        className="w-full rounded-xl bg-background/70 border border-border/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all hover:border-border/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">Perusahaan</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                        placeholder="Nama perusahaan Anda"
                        className="w-full rounded-xl bg-background/70 border border-border/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all hover:border-border/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">Anggaran</label>
                      <select
                        value={form.budget}
                        onChange={e => setForm(p => ({ ...p, budget: e.target.value }))}
                        className="w-full rounded-xl bg-background/70 border border-border/30 px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all hover:border-border/50 appearance-none cursor-pointer"
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
                    <label className="block text-xs font-medium text-foreground/80 mb-2">Deskripsi Proyek *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Ceritakan tentang proyek Anda — jenis aplikasi, fitur utama, dan target pengguna..."
                      className="w-full rounded-xl bg-background/70 border border-border/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all hover:border-border/50 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-2.5 h-12 text-sm font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/25"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 bg-[length:200%_100%] animate-[gradientMove_4s_ease-in-out_infinite]" />
                    <Send className="relative h-4 w-4 text-primary-foreground" />
                    <span className="relative text-primary-foreground">Kirim Pesan Sekarang</span>
                    <ArrowRight className="relative h-3.5 w-3.5 text-primary-foreground group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-center text-[10px] text-muted-foreground/40">
                    Dengan mengirim form ini, Anda menyetujui{" "}
                    <a href="#" className="text-primary/70 hover:text-primary underline underline-offset-2 transition-colors">Kebijakan Privasi</a> kami
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
