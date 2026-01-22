"use client"

import { useLanguage } from "@/lib/language-context"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Zap, ShieldCheck, Leaf, Globe } from "lucide-react"

export function BentoFeatures() {
  const { t } = useLanguage()

  // بيانات التنسيق والأيقونات (ثابتة)
  const staticData = [
    {
      icon: Zap,
      size: "md:col-span-2",
      bg: "bg-gradient-to-br from-emerald-900/50 to-emerald-950/20"
    },
    {
      icon: Leaf,
      size: "md:col-span-1",
      bg: "bg-emerald-900/30"
    },
    {
      icon: Globe,
      size: "md:col-span-1",
      bg: "bg-emerald-900/30"
    },
    {
      icon: ShieldCheck,
      size: "md:col-span-2",
      bg: "bg-gradient-to-bl from-gold/10 to-transparent"
    }
  ]

  // دمج النصوص المترجمة مع البيانات الثابتة
  // تأكد أن ملف الترجمة يحتوي على 4 عناصر في المصفوفة
  const features = t.bentoFeatures.items.map((item: any, index: number) => ({
    ...item,
    ...(staticData[index] || staticData[0]) // Fallback to avoid errors
  }))

  return (
    <section className="py-20 md:py-32 bg-emerald-950 relative overflow-hidden">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 md:mb-16 text-center leading-tight">
            {t.bentoFeatures.title} <br className="md:hidden" />
            <span className="text-gold">{t.bentoFeatures.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item: any, i: number) => (
            <div key={i} className={`${item.size} h-full w-full`}>
              <ScrollReveal delay={i * 0.1} className="h-full">

                <SpotlightCard className={`min-h-[300px] md:min-h-[320px] h-full p-8 flex flex-col justify-between group ${item.bg} border-white/10`}>

                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-gold group-hover:text-emerald-950 transition-all duration-500 mb-6">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                </SpotlightCard>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}