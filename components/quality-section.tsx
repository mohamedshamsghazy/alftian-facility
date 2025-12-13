"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { Counter } from "@/components/ui/counter"
import { Target, Shield, Clock, Recycle, ArrowRight } from "lucide-react"

const icons = [Target, Shield, Clock, Recycle]

export function QualitySection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="quality" ref={ref} className="py-24 md:py-32 bg-emerald-darker relative overflow-hidden">
      {/* High-Tech Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Glowing Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-dark/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"/>
            <span className="text-gold text-xs uppercase tracking-widest font-semibold">Performance Metrics</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {t.quality.title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {t.quality.subtitle || "Performance measured in precision and reliability."}
          </p>
        </div>

        {/* 1. THE LIVE DASHBOARD (Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {t.quality.stats?.map((stat: any, index: number) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl bg-emerald-dark/40 border border-gold/10 backdrop-blur-md hover:border-gold/30 transition-all duration-500 group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono group-hover:text-gold transition-colors">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix} 
                />
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2. QUALITY PILLARS (Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {t.quality.items.map((item: any, index: number) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className={`group relative p-8 bg-emerald-dark/30 border border-white/5 rounded-2xl overflow-hidden hover:bg-emerald-dark/50 transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                {/* Hover Gradient */}
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

        {/* 3. THE TECH TIMELINE (Process) */}
        <div className={`transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-white">{t.process.title}</h3>
            <div className="hidden md:flex items-center gap-2 text-gold text-sm font-mono">
              <span>SCROLL TO EXPLORE</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
              {t.process.steps.map((step: any, index: number) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step Dot */}
                  <div className="w-4 h-4 rounded-full bg-emerald-dark border-2 border-gold/50 mx-auto mb-6 relative z-20 group-hover:bg-gold group-hover:scale-125 transition-all duration-300 hidden md:block">
                    <div className="absolute inset-0 bg-gold blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Card */}
                  <div className="p-6 bg-emerald-darker border border-white/5 rounded-xl hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 h-full flex flex-col justify-center text-center">
                    <span className="text-gold/30 font-mono text-4xl font-bold absolute top-2 right-4 select-none opacity-20 group-hover:opacity-40 transition-opacity">
                      {index + 1}
                    </span>
                    <div className="text-xs text-gold uppercase tracking-wider mb-2 font-semibold">
                      Step {step.step}
                    </div>
                    <div className="text-white font-medium">
                      {step.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}