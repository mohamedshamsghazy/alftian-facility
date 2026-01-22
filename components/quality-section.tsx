"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { Counter } from "@/components/ui/counter"
import {
  Target,
  Shield,
  Clock,
  Recycle,
  ArrowRight,
  Scan,
  FileJson,
  Zap,
  ShieldCheck,
  Key,
  HeartHandshake
} from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const icons = [Target, Shield, Clock, Recycle]
const processIcons = [Scan, FileJson, Zap, ShieldCheck, Key, HeartHandshake]

export function QualitySection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="quality" ref={ref} className="py-24 md:py-32 bg-emerald-darker relative overflow-hidden">
      {/* Backgrounds */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-dark/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs uppercase tracking-widest font-semibold">{t.quality.tagline || "Performance Metrics"}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {t.quality.title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {t.quality.subtitle || "Performance measured in precision and reliability."}
          </p>
        </div>

        {/* 1. Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {t.quality.stats?.map((stat: any, index: number) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-emerald-dark/40 border border-gold/10 backdrop-blur-md hover:border-gold/30 transition-all duration-500 group ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono group-hover:text-gold transition-colors">
                <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {t.quality.items.map((item: any, index: number) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className={`group relative p-8 bg-emerald-dark/30 border border-white/5 rounded-2xl overflow-hidden hover:bg-emerald-dark/50 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold/20">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* 3. WORKFLOW (تم التعديل هنا للموبايل) */}
        <div className={`transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="flex flex-col items-center justify-center mb-8 md:mb-16 text-center">
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-white mb-2">{t.process.title}</h3>
              <p className="text-white/50">{t.process.subtitle || "From analysis to lifelong care."}</p>
            </div>
            {/* Scroll Hint for Mobile */}
            <div className="flex md:hidden items-center gap-2 text-gold/50 text-xs animate-pulse">
              <span>Swipe</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <div className="hidden md:flex items-center gap-2 text-gold text-sm font-mono">
              <span>{t.process.workflowLabel || "WORKFLOW"}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* 👇 التغيير هنا: flex + scroll للموبايل، و grid للابتوب */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {t.process.steps.map((step: any, index: number) => {
              const StepIcon = processIcons[index] || Target

              return (
                <div key={index} className="min-w-[85vw] md:min-w-0 snap-center">
                  <SpotlightCard
                    className="group p-8 h-48 flex flex-col justify-between overflow-hidden relative"
                  >
                    <div style={{ transitionDelay: `${index * 100}ms` }}>

                      <span className="absolute -right-4 -top-6 text-[120px] font-bold text-white/[0.03] font-mono group-hover:text-gold/[0.05] transition-colors duration-500 select-none">
                        {index + 1}
                      </span>

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/30 group-hover:text-gold transition-colors">
                            <StepIcon className="w-5 h-5 text-white/70 group-hover:text-gold" />
                          </div>
                          <div className="text-xs font-mono text-gold/60 bg-gold/10 px-2 py-1 rounded">
                            STEP {step.step}
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                          {step.title}
                        </h4>
                      </div>

                      {index !== t.process.steps.length - 1 && (
                        <div className="absolute bottom-8 right-0 w-8 h-px bg-white/10 hidden md:block" />
                      )}

                    </div>
                  </SpotlightCard>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}