"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrambleText } from "@/hooks/use-scramble-text"
import { ChevronDown, ArrowRight } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()
  const { ref: titleRef, text: titleText } = useScrambleText(t.hero.title)

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src="/images/hero.mp4"
      >
      </video>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-emerald-950/90 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none" />

      {/* Tech Grid Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        

        {/* Scrambled Headline */}
        <h1
          ref={titleRef as any}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white max-w-5xl leading-tight tracking-tight font-sans"
          style={{ textShadow: "0 0 40px rgba(212,175,55,0.2)" }}
        >
          {titleText}
        </h1>

        <p
          className="mt-8 text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl animate-fade-in-up animation-delay-200 font-light"
        >
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gold text-emerald-950 font-bold text-lg rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            Explore System
          </button>
        </div>

        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </button>
      </div>
    </section>
  )
}