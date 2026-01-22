"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function Counter({ end, duration = 2000, suffix = "", prefix = "", className = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView({ threshold: 0.5 })
  const countRef = useRef(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      countRef.current = Math.floor(easeOutQuart * end)
      setCount(countRef.current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span 
      ref={ref} 
      className={`tabular-nums relative inline-block ${className}`}
      // هنا أضفنا تأثير التوهج الذهبي
      style={{
        textShadow: "0 0 15px rgba(212, 175, 55, 0.5), 0 0 30px rgba(212, 175, 55, 0.2)" 
      }}
    >
      {prefix}{count}{suffix}
    </span>
  )
}