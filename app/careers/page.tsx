"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { Briefcase, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Careers",
      title: "Coming Soon",
      subtitle: "We're building something exciting. Our careers page will be available soon. Stay tuned for opportunities to join our team.",
      cta: "In the meantime, feel free to reach out to us directly.",
      button: "Contact Us"
    },
    de: {
      badge: "Karriere",
      title: "Demnächst Verfügbar",
      subtitle: "Wir arbeiten an etwas Aufregendem. Unsere Karriereseite wird bald verfügbar sein. Bleiben Sie dran für Möglichkeiten, unserem Team beizutreten.",
      cta: "In der Zwischenzeit können Sie sich gerne direkt an uns wenden.",
      button: "Kontakt"
    },
    ar: {
      badge: "الوظائف",
      title: "قريباً",
      subtitle: "نحن نعمل على شيء مثير. ستكون صفحة الوظائف متاحة قريباً. ترقبوا الفرص للانضمام إلى فريقنا.",
      cta: "في هذه الأثناء، لا تتردد في التواصل معنا مباشرة.",
      button: "اتصل بنا"
    }
  }

  const t = content[language as keyof typeof content]

  return (
    <main className="min-h-screen bg-emerald-darker pt-24 pb-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 animate-pulse">
          <Briefcase className="w-5 h-5 text-gold" />
          <span className="text-gold text-sm uppercase tracking-widest font-bold">{t.badge}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-3 h-3 rotate-45 border border-gold" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Contact CTA */}
        <p className="text-white/50 mb-6">
          {t.cta}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gold text-emerald-950 px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          <span>{t.button}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>

      </div>
    </main>
  )
}