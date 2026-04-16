"use client"

import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { FadeIn } from "./text-reveal"

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO & Founder",
    company: "TechStartup Indonesia",
    content: "webCipta mengubah cara kami berbisnis. Website e-commerce yang mereka buat tidak hanya beautiful tapi juga sangat fungsional. Conversion rate naik 200% dalam 3 bulan pertama. Tim mereka sangat responsif dan selalu memberikan solusi kreatif.",
    rating: 5,
    avatar: "BS",
    gradient: "from-cyan-500 to-blue-600",
    project: "E-Commerce Platform",
    results: "+200% Conversion"
  },
  {
    name: "Sarah Wijaya",
    role: "Founder",
    company: "FashionHub ID",
    content: "Sebagai founder non-teknis, saya butuh partner yang bisa menerjemahkan visi saya. webCipta tidak hanya membangun aplikasi, tapi juga menjadi tech advisor yang membantu kami scale dari 0 ke 50,000 monthly active users.",
    rating: 5,
    avatar: "SW",
    gradient: "from-emerald-500 to-teal-600",
    project: "Mobile App",
    results: "50K+ MAU"
  },
  {
    name: "Andi Pratama",
    role: "Chief Marketing Officer",
    company: "PropertyPro Group",
    content: "Redesign UI/UX yang dilakukan webCipta sangat impactful. Bounce rate turun 60%, average session duration naik 3x lipat. Yang lebih penting, sales team kami sekarang jauh lebih produktif dengan dashboard baru.",
    rating: 5,
    avatar: "AP",
    gradient: "from-violet-500 to-purple-600",
    project: "Dashboard Redesign",
    results: "-60% Bounce Rate"
  },
  {
    name: "Maya Kusuma",
    role: "COO",
    company: "HealthTech Solutions",
    content: "Kolaborasi dengan webCipta adalah salah satu keputusan terbaik kami. Aplikasi telemedicine yang mereka buat sekarang digunakan oleh 100+ rumah sakit. Mereka memahami kompleksitas healthcare industry dengan sangat baik.",
    rating: 5,
    avatar: "MK",
    gradient: "from-orange-500 to-amber-600",
    project: "Telemedicine App",
    results: "100+ Hospitals"
  },
  {
    name: "Rizky Hakim",
    role: "VP of Product",
    company: "EduLearn Platform",
    content: "Platform LMS yang dibangun webCipta membantu kami scale dari 1,000 ke 25,000 students tanpa masalah. Performa tetap excellent meski traffic naik 25x. Support mereka juga luar biasa, selalu ada 24/7.",
    rating: 5,
    avatar: "RH",
    gradient: "from-rose-500 to-pink-600",
    project: "Learning Platform",
    results: "25x Traffic Growth"
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonial" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest mb-6">
            <span className="w-12 h-px bg-primary" />
            Testimonial
            <span className="w-12 h-px bg-primary" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            Kata mereka tentang{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              kami
            </span>
          </h2>
        </FadeIn>

        {/* Main Testimonial */}
        <FadeIn delay={100}>
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-8 left-8 lg:left-16 h-24 w-24 text-primary/10" />
            
            <div className="relative rounded-[2.5rem] border border-border/30 bg-card/20 backdrop-blur-sm p-8 lg:p-16 overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${testimonials[activeIndex].gradient} opacity-5 blur-3xl transition-all duration-700`} />
              
              <div className="relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Content */}
                  <div className="lg:col-span-8">
                    {/* Rating */}
                    <div className="flex gap-1 mb-8">
                      {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-2xl lg:text-3xl xl:text-4xl text-foreground leading-relaxed font-light mb-10">
                      &ldquo;{testimonials[activeIndex].content}&rdquo;
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center gap-5">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].gradient} text-white text-xl font-bold shadow-xl`}>
                        {testimonials[activeIndex].avatar}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                        <p className="text-muted-foreground">
                          {testimonials[activeIndex].role} di {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Card */}
                  <div className="lg:col-span-4">
                    <div className={`rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].gradient} p-[1px]`}>
                      <div className="rounded-2xl bg-background/95 backdrop-blur-xl p-6">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Proyek</span>
                        <h5 className="text-lg font-semibold text-foreground mt-1 mb-4">{testimonials[activeIndex].project}</h5>
                        
                        <div className="pt-4 border-t border-border/30">
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Hasil</span>
                          <p className={`text-2xl font-bold bg-gradient-to-r ${testimonials[activeIndex].gradient} bg-clip-text text-transparent mt-1`}>
                            {testimonials[activeIndex].results}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-border/40 bg-card/30 hover:bg-card hover:border-primary/40 transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-border/40 bg-card/30 hover:bg-card hover:border-primary/40 transition-all"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Progress Indicators */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoPlaying(false)
                          setActiveIndex(index)
                        }}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          activeIndex === index 
                            ? "w-10 bg-primary" 
                            : "w-2 bg-border hover:bg-muted-foreground"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Client Logos */}
        <FadeIn delay={200} className="mt-20">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">Dipercaya oleh 150+ perusahaan</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "border-primary/40 bg-primary/5"
                    : "border-border/20 bg-card/10 hover:border-border/40 hover:bg-card/30"
                }`}
              >
                <div className={`flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.gradient} text-white font-bold`}>
                  {testimonial.avatar}
                </div>
                <p className="mt-3 text-sm font-medium text-foreground truncate">{testimonial.company}</p>
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
