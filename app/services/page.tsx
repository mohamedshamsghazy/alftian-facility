"use client"

import { useLanguage } from "@/lib/language-context"
import {
  Hammer, Droplet, Zap, Wind, Home, Layers,
  Paintbrush, Grid3x3, Building2, Wrench
} from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  // Icons for each service (matching the order in translations)
  const icons: any = {
    technical: [Hammer, Droplet, Zap, Wind, Home, Layers],
    infrastructural: [Paintbrush, Grid3x3, Building2, Wrench]
  }

  // Categories array
  const categories = ['technical', 'infrastructural'] as const

  return (
    <main className="pt-32 pb-20 bg-emerald-950 min-h-screen bg-[url('/images/noise.png')]">

      {/* 1. Page Header */}
      <section className="text-center px-4 mb-24 relative z-10">
        <ScrollReveal width="100%" className="w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs uppercase tracking-widest font-semibold">Comprehensive Solutions</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t.services.title}
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </ScrollReveal>
      </section>

      {/* 2. Vertical List of All Services (Ta7t Ba3d) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">

        {/* Loop through categories */}
        {categories.map((category, idx) => (
          <section key={category} className="relative">

            {/* Decorative Line */}
            <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-px bg-linear-to-b from-gold/50 to-transparent hidden md:block" />

            {/* Category Header */}
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center text-center mb-12 border-b border-white/10 pb-8 gap-6">
                <div>
                  <div className="text-gold text-sm font-mono uppercase tracking-widest mb-2 opacity-80">
                    Department 0{idx + 1}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    {t.services.categories[category]}
                  </h2>
                </div>
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl text-white font-semibold mb-1">{t.services[category].title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {t.services[category].description}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Services Grid for this Category */}
            <div className="flex flex-wrap justify-center gap-6">
              {t.services[category].items.map((item: any, i: number) => {
                const Icon = icons[category][i]
                return (
                  <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-gold/30 transition-all duration-500 group h-full flex flex-col w-full max-w-[350px] min-h-[240px] mx-auto">
                      <div className="w-14 h-14 rounded-xl bg-emerald-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-gold border border-white/5 shadow-lg group-hover:shadow-gold/10">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>

          </section>
        ))}
      </div>

      {/* 3. Bottom CTA */}
      <section className="mt-32 text-center px-4">
        <ScrollReveal width="100%" className="w-full">
          <div className="bg-gradient-to-br from-emerald-900/80 to-emerald-950 p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              {t.contact.title}
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">
              {t.services.cta || "Ready to upgrade your facility management? Our team is ready to analyze your needs."}
            </p>
            <Link href="/contact" className="relative z-10">
              <Button size="lg" className="bg-gold text-emerald-950 hover:bg-white font-bold px-10 py-7 rounded-full text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                {t.hero.cta}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </main>
  )
}