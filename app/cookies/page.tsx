"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Cookie, Server, ShieldCheck, BarChart3, Settings } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function CookiePolicyPage() {
  const { t } = useLanguage()

  const cookieTypes = [
    { key: "essential", icon: ShieldCheck, color: "text-green-400" },
    { key: "analytics", icon: BarChart3, color: "text-blue-400" },
    { key: "marketing", icon: Server, color: "text-purple-400" },
  ]

  // وظيفة لإعادة فتح شريط الكوكيز
  const openCookieSettings = () => {
    localStorage.removeItem("alftian-cookie-consent")
    window.location.reload()
  }

  return (
    <main className="min-h-screen bg-emerald-darker pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Cookie className="w-6 h-6 text-emerald-950" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t.cookiePage.title}</h1>
            <p className="text-white/50 text-sm mt-1">{t.cookiePage.subtitle}</p>
          </div>
        </div>

        {/* Intro Card */}
        <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-white font-bold mb-2 flex items-center gap-2">
            <Cookie className="w-4 h-4 text-gold" />
            {t.cookiePage.whatAreCookies.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {t.cookiePage.whatAreCookies.content}
          </p>
        </div>

        {/* Cookie Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cookieTypes.map((type, idx) => {
             const content = t.cookiePage.types[type.key as keyof typeof t.cookiePage.types]
             return (
              <motion.div
                key={type.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-6 h-full bg-emerald-dark/50">
                  <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 ${type.color}`}>
                    <type.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{content.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {content.content}
                  </p>
                </SpotlightCard>
              </motion.div>
             )
          })}
        </div>

        {/* Manage Settings Button */}
        <div className="flex justify-center">
          <button
            onClick={openCookieSettings}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-gold/30 text-gold hover:bg-gold hover:text-emerald-950 transition-all duration-300"
          >
            <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-bold text-sm">{t.cookiePage.manage}</span>
          </button>
        </div>

      </div>
    </main>
  )
}