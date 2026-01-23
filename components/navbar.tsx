"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.contact, href: "/contact" },
  ]

  const handleLangSelect = (lang: "en" | "de" | "ar") => {
    setLanguage(lang)
    setIsLangOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-emerald-950/90 backdrop-blur-md py-3 border-b border-white/10"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* 1. Logo (تم استرجاع الصورة هنا) */}
            <Link href="/" className="relative z-50">
              <Image
                src="/images/FullLogo_Transparent.png"
                alt="Alftian Logo"
                width={0}
                height={0}
                sizes="100vw"
                className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-16" : "h-24 md:h-32"
                  }`}
              />
            </Link>

            {/* 2. Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-gold transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 border-l border-white/20 pl-6 ml-2">
                {(["en", "de", "ar"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-xs font-bold uppercase transition-colors ${language === lang ? "text-gold" : "text-white/40 hover:text-white"
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Mobile Actions (كرة أرضية + زر القائمة) */}
            <div className="flex items-center gap-3 md:hidden relative z-[100]">

              {/* Globe Icon */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  aria-label="Change Language"
                  className="w-10 h-10 rounded-full bg-emerald-950/50 border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-950 transition-all active:scale-95"
                >
                  <Globe className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-12 w-32 bg-emerald-950 border border-gold/20 rounded-xl shadow-2xl overflow-hidden flex flex-col z-[101]"
                    >
                      {(["en", "de", "ar"] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => handleLangSelect(lang)}
                          className={`px-4 py-3 text-sm font-bold uppercase text-left hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5 last:border-0 ${language === lang ? "text-gold bg-white/5" : "text-white/70"
                            }`}
                        >
                          <span>{lang}</span>
                          {language === lang && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                className="w-10 h-10 rounded-full bg-emerald-950/50 border border-white/10 flex items-center justify-center text-white hover:text-gold transition-colors active:scale-95"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-emerald-950 flex flex-col justify-center items-center md:hidden"
          >
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none" />

            <div className="flex flex-col items-center gap-8 w-full px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-3xl font-bold text-white text-center hover:text-gold transition-colors py-2 border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}