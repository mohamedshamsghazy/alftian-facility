"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "contact", href: "/contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-emerald-950 border-t border-gold/20 overflow-hidden pt-12 md:pt-16">
      {/* Golden Line Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center md:text-left">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <Link href="/" onClick={scrollToTop} className="block w-fit mx-auto">
              <Image
                src="/images/FullLogo_Transparent.png"
                alt="Alftian Facility & Bau GmbH"
                width={0}
                height={0}
                sizes="100vw"
                // Logo Size adjusted for mobile (h-24) and desktop (h-32)
                className="h-24 md:h-32 w-auto mb-6 object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
              {t.footer.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-gold font-bold mb-6 text-sm uppercase tracking-widest">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 w-full flex flex-col items-center">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm block w-fit capitalize"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}

              {/* Hiring & Legal */}
              <li className="pt-4 border-t border-white/5 mt-4 space-y-3 w-full flex flex-col items-center">
                <Link
                  href="/careers"
                  className="text-white/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 w-fit"
                >
                  <span>{t.common.careers}</span>
                  <span className="text-[10px] bg-gold/20 text-gold px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wider">{t.common.hiring}</span>
                </Link>

                <Link href="/impressum" className="text-white/60 hover:text-gold transition-colors duration-300 text-sm block w-fit">
                  {t.common.impressum}
                </Link>
                <Link href="/privacy" className="text-white/60 hover:text-gold transition-colors duration-300 text-sm block w-fit">
                  {t.common.privacy}
                </Link>
                <Link href="/cookies" className="text-white/60 hover:text-gold transition-colors duration-300 text-sm block w-fit">
                  {t.common.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center">
            <h4 className="text-gold font-bold mb-6 text-sm uppercase tracking-widest">{t.footer.contact}</h4>
            <ul className="space-y-4 w-full flex flex-col items-center">
              <li className="flex flex-col items-center gap-2 text-center">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-white/60 text-sm leading-relaxed">
                  {t.company.name}<br />
                  {t.company.address}
                </span>
              </li>
              <li className="flex flex-col items-center gap-2">
                <Phone className="w-5 h-5 text-gold" />
                <a
                  href={`tel:${t.company.phone}`}
                  className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                >
                  {t.company.phone}
                </a>
              </li>
              <li className="flex flex-col items-center gap-2">
                <Mail className="w-5 h-5 text-gold" />
                <a
                  href={`mailto:${t.company.email}`}
                  className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                >
                  {t.company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col items-center">
            <h4 className="text-gold font-bold mb-6 text-sm uppercase tracking-widest">{t.footer.followUs}</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.instagram.com/alftian.bau/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-emerald-950 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586739460931"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-emerald-950 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Rights */}
      <div className="border-t border-white/5 bg-emerald-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <p className="text-white/40 text-xs text-center w-full">
              © {new Date().getFullYear()} {t.company.name}. {t.footer.rights}
            </p>
            <div className="flex items-center gap-2 opacity-30">
              <div className="h-px w-8 bg-gold" />
              <div className="w-2 h-2 rotate-45 border border-gold" />
              <div className="h-px w-8 bg-gold" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}