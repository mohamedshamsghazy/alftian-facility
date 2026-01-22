"use client"

import { useEffect, useState } from "react"

const CYBERPUNK_CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?"

export const useScrambleText = (text: string, duration: number = 2000, delay: number = 0) => {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let interval: NodeJS.Timeout

    // Start after delay
    const timeout = setTimeout(() => {
      let iteration = 0

      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return letter
              }
              return CYBERPUNK_CHARS[Math.floor(Math.random() * CYBERPUNK_CHARS.length)]
            })
            .join("")
        )

        if (iteration >= text.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 30)

    }, delay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, duration, delay])

  return displayText
}