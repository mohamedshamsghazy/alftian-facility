"use client"

import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  /* Optimization: Only load video on desktop to save bandwidth */
  const [videoSource, setVideoSource] = useState<string | null>(null)

  useEffect(() => {
    // Smart Loading: Check for "Data Saver" mode or slow connection
    // Note: This API is mainly supported on Chrome/Android. iOS will default to loading the video.
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

    if (connection && (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      // Slow connection? Keep existing poster, do not load video
      console.log("Slow connection detected, skipping video load")
      setVideoSource(null)
    } else {
      // Good connection? Load full video
      setVideoSource("/images/hero.mp4")
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover min-w-full min-h-full scale-110 filter brightness-50"
        >
          {videoSource && <source src={videoSource} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>

        {/* Overlay Effects */}
        <div className="absolute inset-0 bg-emerald-950/60" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      {/* 2. Content - رجعنا العرض max-w-7xl عشان اللابتوب */}
      <div className="relative z-10 text-center w-full max-w-7xl px-4 sm:px-6 mt-0 md:mt-0">
        <ScrollReveal width="100%" className="w-full">

          {/* Badge */}


          {/* Title - كبرنا الخطوط جداً للابتوب lg:text-9xl */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 md:mb-10 tracking-tighter drop-shadow-2xl leading-[1.1]">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-3xl text-white/90 mb-10 md:mb-14 leading-relaxed max-w-4xl mx-auto font-light drop-shadow-lg px-2">
            {t.hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gold text-emerald-950 hover:bg-white font-bold px-10 py-7 rounded-full text-base md:text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all active:scale-95 duration-300">
                {t.hero.cta}
              </Button>
            </Link>
          </div>

        </ScrollReveal>
      </div>

      {/* 3. Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-bounce pointer-events-none">
        <span className="text-white/50 text-xs uppercase tracking-[0.3em] hidden md:block">Scroll to Explore</span>
        <ArrowDown className="w-6 h-6 text-white" />
      </div>

    </section>
  )
}