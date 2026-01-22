"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  className?: string // 👈 أضفنا هذا السطر
}

export const ScrollReveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  className = "" // 👈 وقيمة افتراضية هنا
}: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div 
      ref={ref} 
      style={{ position: "relative", width }} 
      className={className} // 👈 مررنا الكلاس هنا
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}