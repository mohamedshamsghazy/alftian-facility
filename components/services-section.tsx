"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { Smartphone, RefreshCw, Box, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  // Map the icons to the structure
  const serviceIcons = {
    construction: Box,
    modernization: RefreshCw,
    facility: Smartphone
  }

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-emerald-dark relative overflow-hidden">
      {/* Tech Background Grid - Subtle Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-gold" />
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Our Expertise</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.services.title}
          </h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Construction */}
          <ServiceCard 
            icon={serviceIcons.construction}
            title={t.services.construction.title}
            description={t.services.construction.description}
            features={t.services.construction.features}
            delay={0}
            isInView={isInView}
          />

          {/* Service 2: Modernization */}
          <ServiceCard 
            icon={serviceIcons.modernization}
            title={t.services.modernization.title}
            description={t.services.modernization.description}
            features={t.services.modernization.features}
            delay={150}
            isInView={isInView}
          />

          {/* Service 3: Facility */}
          <ServiceCard 
            icon={serviceIcons.facility}
            title={t.services.facility.title}
            description={t.services.facility.description}
            features={t.services.facility.features}
            delay={300}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, description, features, delay, isInView }: any) {
  return (
    <div
      className={`group relative p-8 rounded-2xl bg-emerald-darker/40 border border-gold/10 hover:border-gold/40 transition-all duration-500 cursor-hover ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Icon Container */}
      <div className="relative w-16 h-16 mb-8 rounded-2xl bg-emerald-dark border border-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:border-gold/60 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
        {/* Tech Pulse Animation */}
        <div className="absolute inset-0 rounded-2xl border border-gold/30 scale-110 opacity-0 group-hover:animate-ping" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-white/60 mb-8 leading-relaxed h-24">
        {description}
      </p>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center text-sm text-white/80">
            <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Link */}
      <div className="flex items-center text-gold font-medium opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
        <span className="mr-2 text-sm uppercase tracking-wide">Explore</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  )
}