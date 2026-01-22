"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Shield, Users, Leaf, Target, Award, Gem, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const valueIcons = [Shield, Target, Leaf, Users]

  return (
    <main className="min-h-screen bg-emerald-950 overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center bg-emerald-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="/images/gemini-generated-image-14f7ih14f7ih14f7.jpeg"
            alt="About Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-transparent" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6">
              <span className="text-gold text-xs font-mono uppercase tracking-[0.2em]">{t.aboutPage.since}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              {t.aboutPage.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              {t.aboutPage.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. STORY SECTION */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <h2 className="text-gold text-sm font-mono uppercase tracking-widest mb-4">{t.aboutPage.story.originTitle}</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">{t.aboutPage.story.title}</h3>
                <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                  <p>{t.aboutPage.story.content}</p>
                  <p>
                    {t.aboutPage.story.extraContent}
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-8">
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-4xl font-bold text-white">{t.aboutPage.locations.merseburg}</span>
                    <span className="text-xs sm:text-sm text-white/40 uppercase tracking-widest">{t.aboutPage.locations.hq}</span>
                  </div>
                  <div className="w-px h-8 sm:h-12 bg-white/10 hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-4xl font-bold text-white">{t.aboutPage.locations.germany}</span>
                    <span className="text-xs sm:text-sm text-white/40 uppercase tracking-widest">{t.aboutPage.locations.ops}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Image/Visual */}
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold/10 rounded-2xl transform translate-x-4 translate-y-4" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[500px]">
                  <img
                    src="/images/gemini-generated-image-bjnhfbbjnhfbbjnh.jpeg"
                    alt="Our Office"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 bg-emerald-950/90 backdrop-blur-md p-4 rounded-xl border border-gold/20 flex items-center gap-4">
                    <Award className="w-8 h-8 text-gold" />
                    <div>
                      <div className="text-white font-bold">{t.aboutPage.badges.certified}</div>
                      <div className="text-white/50 text-xs">{t.aboutPage.badges.iso}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. VALUES GRID */}
      <section className="py-32 bg-emerald-900/30 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.aboutPage.values.title}</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.aboutPage.values.items.map((item: any, idx: number) => {
              const Icon = valueIcons[idx]
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="group bg-emerald-950 border border-white/5 p-8 rounded-2xl hover:bg-emerald-900 hover:border-gold/30 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-emerald-950 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gold group-hover:text-emerald-950" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. STATS STRIP */}
      <section className="py-20 border-y border-white/5 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.aboutPage.stats.items.map((stat: any, idx: number) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="space-y-2">
                  <div className="text-4xl md:text-6xl font-bold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-gold text-xs uppercase tracking-widest font-semibold">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM TEASER */}
      <section className="py-32 text-center mx-auto">
        <ScrollReveal width="100%" className="w-full">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto">
            <Gem className="w-6 h-6 text-gold animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.aboutPage.join.title}
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10">
            {t.aboutPage.join.desc}
          </p>
          <a href="/careers" className="inline-flex items-center gap-2 text-gold font-bold hover:text-white transition-colors border-b border-gold pb-1 hover:border-white">
            <span>{t.aboutPage.join.button}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </section>

    </main>
  )
}