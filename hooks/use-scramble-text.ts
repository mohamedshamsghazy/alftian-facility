"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

export function useScrambleText(text: string, duration: number = 2000) {
  const [scrambledText, setScrambledText] = useState(text)
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [hasAnimated, setHasAnimated] = useState(false)

  // FIX: Reset animation when the input text (language) changes
  useEffect(() => {
    setHasAnimated(false)
    setScrambledText(text)
  }, [text])

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let interval: NodeJS.Timeout
    let iteration = 0
    
    const scramble = () => {
      interval = setInterval(() => {
        setScrambledText((prev) => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join("")
        )

        if (iteration >= text.length) {
          clearInterval(interval)
          setHasAnimated(true)
        }

        iteration += 1 / 3
      }, 30)
    }

    scramble()

    return () => clearInterval(interval)
  }, [isInView, text, hasAnimated])

  return { ref, text: scrambledText }
}