"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { Target, Eye } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-emerald-dark overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="hexPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Gold Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rotate-45 border border-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold text-center mb-8">{t.about.title}</h2>

          <p className="text-lg md:text-xl text-white/80 text-center max-w-4xl mx-auto leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="group p-8 bg-emerald-darker/50 border border-gold/20 rounded-lg hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-all duration-300">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gold mb-3">{t.about.vision}</h3>
              <p className="text-white/70 leading-relaxed">{t.about.visionText}</p>
            </div>
            <div className="group p-8 bg-emerald-darker/50 border border-gold/20 rounded-lg hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-all duration-300">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gold mb-3">{t.about.mission}</h3>
              <p className="text-white/70 leading-relaxed">{t.about.missionText}</p>
            </div>
          </div>

          {/* Decorative Image */}
          <div className="mt-16 relative group">
            <div className="absolute -inset-4 border border-gold/20 rounded-lg group-hover:border-gold/40 transition-colors duration-500" />
            <Image
              src="/images/gemini-generated-image-kvcwlukvcwlukvcw.jpeg"
              alt="Modern Architecture"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl group-hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
