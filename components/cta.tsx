"use client"

import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "./text-reveal"

const benefits = [
  "Konsultasi awal gratis tanpa komitmen",
  "Proposal detail dalam 24 jam",
  "Harga transparan, tidak ada biaya tersembunyi",
  "Revisi unlimited hingga puas"
]

export function CTA() {
  return (
    <section id="kontak" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-border/30 bg-card/20 backdrop-blur-sm">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
          
          <div className="relative z-10 p-10 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Content */}
              <FadeIn>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest mb-6">
                  <span className="w-12 h-px bg-primary" />
                  Mari Berdiskusi
                </span>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
                  Siap wujudkan{" "}
                  <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    ide Anda?
                  </span>
                </h2>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
                  Ceritakan tentang proyek impian Anda. Tim kami siap membantu dari tahap ideation hingga launch. Tidak ada pertanyaan yang terlalu kecil.
                </p>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-6">
                  <a href="mailto:hello@webcipta.id" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/40 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground">Email</span>
                      <span className="block text-sm font-medium text-foreground">hello@webcipta.id</span>
                    </div>
                  </a>
                  <a href="tel:+6281234567890" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/40 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground">WhatsApp</span>
                      <span className="block text-sm font-medium text-foreground">+62 812 3456 7890</span>
                    </div>
                  </a>
                </div>
              </FadeIn>
              
              {/* Form Card */}
              <FadeIn delay={200}>
                <div className="rounded-3xl bg-background/80 backdrop-blur-2xl border border-border/30 p-8 lg:p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Mulai Proyek Baru
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Isi form singkat ini dan kami akan menghubungi Anda segera.
                  </p>
                  
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="John Doe"
                          className="w-full h-12 px-4 rounded-xl bg-card/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="john@company.com"
                          className="w-full h-12 px-4 rounded-xl bg-card/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                        Jenis Proyek
                      </label>
                      <select
                        id="project"
                        className="w-full h-12 px-4 rounded-xl bg-card/50 border border-border/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Pilih jenis proyek</option>
                        <option value="website">Website Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="design">UI/UX Design</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        className="w-full h-12 px-4 rounded-xl bg-card/50 border border-border/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Pilih range budget</option>
                        <option value="10-25">Rp 10-25 Juta</option>
                        <option value="25-50">Rp 25-50 Juta</option>
                        <option value="50-100">Rp 50-100 Juta</option>
                        <option value="100+">Rp 100 Juta+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Ceritakan Proyek Anda
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Deskripsikan ide dan kebutuhan proyek Anda..."
                        className="w-full px-4 py-3 rounded-xl bg-card/50 border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full group bg-foreground text-background hover:bg-foreground/90 gap-3 h-14 text-base font-medium rounded-xl"
                    >
                      Kirim Pesan
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-8 border-t border-border/30">
                    <div className="flex items-center justify-center gap-6 text-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        Respons dalam 24 jam
                      </div>
                      <div className="w-px h-4 bg-border/40" />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        Jakarta, Indonesia
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
