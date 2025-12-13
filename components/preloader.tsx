"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Cpu, Wifi, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(0)
  const { t } = useLanguage()

  const steps = [
    { text: t.preloader?.init || "INITIALIZING...", icon: Cpu },
    { text: t.preloader?.connect || "CONNECTING...", icon: Wifi },
    { text: t.preloader?.verify || "VERIFYING...", icon: Shield },
    { text: t.preloader?.online || "ONLINE", icon: CheckCircle },
  ]

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden"

    // Timings cut by ~50% for a faster, snappier feel
    const timer1 = setTimeout(() => setStep(1), 400)
    const timer2 = setTimeout(() => setStep(2), 800)
    const timer3 = setTimeout(() => setStep(3), 1200)
    const timer4 = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = "unset"
    }, 1800) 

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center text-gold font-mono"
        >
          <div className="w-80 relative flex flex-col items-center">
            
            {/* LOGO & NAME SECTION */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-8 gap-4"
            >
              <img 
                src="/images/FullLogo_Transparent.png" 
                alt="Alftian Logo" 
                className="h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              />
              <h1 className="text-white font-sans text-xl font-bold tracking-[0.2em] uppercase text-center">
                Alftian Facility <span className="text-gold">&</span> Bau
              </h1>
            </motion.div>

            {/* Progress Bar */}
            <div className="h-1 bg-emerald-900 w-full mb-4 rounded-full overflow-hidden border border-white/10">
              <motion.div 
                className="h-full bg-gold shadow-[0_0_10px_#D4AF37]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {/* Status Text */}
            <div className="h-8 flex items-center justify-center gap-2">
              {steps.map((s, i) => (
                i === step && (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-xs tracking-widest text-emerald-100/70"
                  >
                    <s.icon className="w-3 h-3 text-gold animate-pulse" />
                    {s.text}
                  </motion.div>
                )
              ))}
            </div>
          </div>
          
          {/* Background Grid & Glow */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ 
              backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}