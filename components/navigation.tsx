"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Menu, X, ChevronDown } from "lucide-react"
import type { Language } from "@/lib/translations"

const languageLabels: Record<Language, string> = {
  en: "EN",
  de: "DE",
  ar: "عربي",
}

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "gallery", href: "/projects" },
    { key: "contact", href: "/contact" },
  ]

  const languages: Language[] = ["en", "de", "ar"]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-emerald-dark/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* increased height from h-24 to h-28 */}
        <div className="flex items-center justify-between h-24 md:h-28 transition-all duration-300">
          <div className="shrink-0">
            <Link href="/">
              <img 
                src="/images/FullLogo_Transparent.png" 
                alt="Alftian Facility & Bau GmbH" 
                // Increased logo size: h-20 (mobile) to h-24 (desktop)
                className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-white/80 hover:text-gold transition-all duration-300 text-sm font-medium tracking-wide relative group"
              >
                {t.nav[item.key as keyof typeof t.nav]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full text-gold hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <span className="text-sm font-medium">{languageLabels[language]}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 end-0 bg-emerald-dark/95 backdrop-blur-md border border-gold/20 rounded-lg overflow-hidden shadow-xl">
                  {languages
                    .filter((l) => l !== language)
                    .map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setIsLangMenuOpen(false)
                        }}
                        className="block w-full px-6 py-3 text-sm text-white/80 hover:text-gold hover:bg-gold/10 transition-all duration-300 text-start"
                      >
                        {languageLabels[lang]}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-24 left-0 right-0 bg-emerald-dark/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-start text-white/80 hover:text-gold transition-colors duration-300 py-3 border-b border-gold/10"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </Link>
          ))}
          
          <div className="flex gap-2 pt-4">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang)
                  setIsMobileMenuOpen(false)
                }}
                className={`flex-1 px-4 py-3 border rounded-lg transition-all duration-300 ${
                  language === lang
                    ? "border-gold bg-gold/20 text-gold"
                    : "border-gold/30 text-white/60 hover:border-gold/60 hover:text-gold"
                }`}
              >
                {languageLabels[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}