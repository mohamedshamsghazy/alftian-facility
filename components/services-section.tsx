"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { motion, AnimatePresence } from "framer-motion"
import {
  Wrench, BarChart,
  ShieldCheck, Leaf, Sparkles,
  ArrowRight
} from "lucide-react"

export function ServicesSection() {
  const { t } = useLanguage()
  const { ref } = useInView({ threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<'technical' | 'infrastructural'>('technical')

  // Icon mapping helper
  const icons = {
    technical: [Wrench, BarChart],
    infrastructural: [Sparkles, ShieldCheck, Leaf]
  }

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-emerald-950 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* TABS CONTROLLER */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(['technical', 'infrastructural'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${activeTab === category
                ? "bg-gold text-emerald-950 border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
              {t.services.categories[category]}
            </button>
          ))}
        </div>

        {/* CONTENT DISPLAY */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >

              {/* Left: Featured Description */}
              <div className="lg:col-span-1 bg-emerald-darker/50 border border-white/10 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
                  {t.services[activeTab].title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-8 relative z-10">
                  {t.services[activeTab].description}
                </p>
                <div className="mt-auto relative z-10">
                  <span className="text-gold text-sm font-mono flex items-center gap-2">
                    GERMAN STANDARD <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Right: Service Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.services[activeTab].items.map((item: any, index: number) => {
                  const Icon = icons[activeTab][index]
                  return (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-emerald-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-gold border border-white/5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  )
                })}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}