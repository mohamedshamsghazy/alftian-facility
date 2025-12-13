"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // FIX: Add mount state

  useEffect(() => {
    setIsMounted(true) // FIX: Set to true only after loading in browser

    const hasMouse = window.matchMedia("(pointer: fine)").matches
    if (!hasMouse) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-hover")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  // FIX: Don't render anything on the server to prevent Hydration Mismatch
  if (!isMounted) return null

  return (
    <>
      <div
        className={`fixed pointer-events-none transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          zIndex: 9999,
        }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full transition-all duration-300 ease-out ${
            isHovering
              ? "w-10 h-10 bg-gold/30 border-2 border-gold shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              : "w-4 h-4 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          }`}
        />
      </div>
      <div
        className={`fixed pointer-events-none transition-all duration-500 ease-out ${
          isVisible ? "opacity-60" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          zIndex: 9998,
        }}
        aria-hidden="true"
      >
        <div className="w-8 h-8 rounded-full bg-gold/20 blur-md" />
      </div>
    </>
  )
}