"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = "unset"
    }, 1500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] h-[100dvh] bg-emerald-950 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
              <Image
                src="/images/FullLogo_Transparent.png"
                alt="Alftian Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-32 md:h-40 w-auto object-contain relative z-10 animate-pulse"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}