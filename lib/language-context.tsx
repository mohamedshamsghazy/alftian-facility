"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === "ar" ? "rtl" : ("ltr" as "ltr" | "rtl"),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
