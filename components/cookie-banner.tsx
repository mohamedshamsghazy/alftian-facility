"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("alftian-cookie-consent")
    if (!consent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("alftian-cookie-consent", "true")
    window.dispatchEvent(new Event("cookie-consent-updated"))
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("alftian-cookie-consent", "false")
    window.dispatchEvent(new Event("cookie-consent-updated"))
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-emerald-950/95 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6">

            {/* Icon & Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="p-3 bg-gold/10 rounded-full text-gold shrink-0 animate-pulse">
                <Cookie className="w-6 h-6" />
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                {t.cookieBanner.text}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-white/60 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
              >
                {t.common.decline}
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2 text-xs font-bold bg-gold text-emerald-950 rounded-lg hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              >
                {t.common.accept}
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}