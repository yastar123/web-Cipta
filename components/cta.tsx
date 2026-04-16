"use client"

import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">
            <span className="w-4 h-px bg-primary" />
            Mulai Hari Ini
            <span className="w-4 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            Siap membangun{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              produk impian Anda?
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Ceritakan proyek Anda, kami akan menjawab dengan proposal yang komprehensif dan harga yang transparan.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Benefits */}
            <FadeIn>
              <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Mengapa webCipta?</h3>
                <div className="space-y-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={80}>
              <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Hubungi kami</h3>
                <div className="space-y-3">
                  {contactDetails.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <c.icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-xs font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-xs font-medium text-foreground">{c.value}</p>
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
            <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6 md:p-8 h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-5">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Pesan Terkirim!</h3>
                  <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
                    Terima kasih telah menghubungi kami. Tim kami akan menghubungi Anda dalam 24 jam.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full h-9 px-5 text-xs border-border/40"
                    onClick={() => setSubmitted(false)}
                  >
                    Kirim pesan lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Nama Lengkap *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Budi Santoso"
                        className="w-full rounded-xl bg-background/50 border border-border/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="budi@perusahaan.com"
                        className="w-full rounded-xl bg-background/50 border border-border/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Perusahaan</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                        placeholder="Nama perusahaan Anda"
                        className="w-full rounded-xl bg-background/50 border border-border/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Anggaran</label>
                      <select
                        value={form.budget}
                        onChange={e => setForm(p => ({ ...p, budget: e.target.value }))}
                        className="w-full rounded-xl bg-background/50 border border-border/30 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
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
                    <label className="block text-xs font-medium text-foreground mb-2">Deskripsi Proyek *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Ceritakan tentang proyek Anda — jenis aplikasi, fitur utama, dan target pengguna..."
                      className="w-full rounded-xl bg-background/50 border border-border/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2.5 h-11 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 rounded-xl transition-all hover:scale-[1.01] hover:shadow-lg shadow-foreground/10"
                  >
                    <Send className="h-4 w-4" />
                    Kirim Pesan Sekarang
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>

                  <p className="text-center text-[10px] text-muted-foreground/50">
                    Dengan mengirim form ini, Anda menyetujui{" "}
                    <a href="#" className="text-primary hover:underline">Kebijakan Privasi</a> kami
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
