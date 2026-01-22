"use client"

import { useLanguage } from "@/lib/language-context"

// يمكن استبدال هذه الصور بلوجوهات حقيقية لاحقاً
const partners = Array(12).fill(null).map((_, i) => ({
  id: i,
  name: `Partner ${i + 1}`,
  // سنستخدم مربعات فارغة كـ Placeholders أنيقة
}))

export function PartnersSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-emerald-darker border-y border-white/5 overflow-hidden">


      <div className="relative flex flex-wrap justify-center gap-8 px-4" dir="ltr">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="shrink-0 w-32 h-16 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-white/30 font-bold text-lg font-mono">LOGO</span>
          </div>
        ))}
      </div>
    </section>
  )
}