"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileDigit, Server } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function PrivacyPage() {
  const { t } = useLanguage()

  // Icons for visual variety in sections
  const icons = [Shield, FileDigit, Lock, Server, Eye]

  return (
    <main className="min-h-screen bg-emerald-darker pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Eye className="w-6 h-6 text-emerald-950" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t.privacyPage.title}</h1>
            <p className="text-white/50 text-sm mt-1">{t.privacyPage.subtitle}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6">
          {t.privacyPage.sections.map((section: any, idx: number) => {
            const Icon = icons[idx % icons.length]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-8 h-full bg-emerald-dark/50 hover:bg-emerald-dark/80 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/5 text-gold border border-white/10 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">{section.title}</h3>
                      <div className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>

        {/* Data Officer Contact - NOW TRANSLATED */}
        <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-white font-bold mb-4">{t.privacyPage.contactBox.title}</h3>
          <p className="text-white/60 text-sm mb-4">
            {t.privacyPage.contactBox.text}
          </p>
          <a href="mailto:info@alftian-bau.com" className="text-gold hover:text-white transition-colors text-sm font-mono border-b border-gold/30 hover:border-white pb-0.5">
            info@alftian-bau.com
          </a>
        </div>

      </div>
    </main>
  )
}