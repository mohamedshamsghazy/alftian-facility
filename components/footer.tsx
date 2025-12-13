"use client"

import { useLanguage } from "@/lib/language-context"
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const navItems = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "gallery", href: "#gallery" },
    { key: "quality", href: "#quality" },
    { key: "contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-emerald-darker border-t border-gold/20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            {/* FIX: Updated filename case */}
            <img
              src="/images/fulllogo-transparent.png"
              alt="Alftian Facility & Bau GmbH"
              className="h-20 w-auto mb-6 object-contain"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              German precision in facility management and construction. Building excellence since day one.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Alftian Facility & Bau GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin, Germany
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="tel:+493012345678"
                  className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                >
                  +49 30 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a
                  href="mailto:info@alftian-bau.de"
                  className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                >
                  info@alftian-bau.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Alftian Facility & Bau GmbH. {t.footer.rights}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gold/30" />
              <div className="w-2 h-2 rotate-45 border border-gold/30" />
              <div className="h-px w-8 bg-gold/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}