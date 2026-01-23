"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import {
  Building2,
  Phone,
  Mail,
  User,
  FileText,
  Scale,
  MapPin,
  CreditCard,
  ShieldCheck
} from "lucide-react"

export default function ImpressumPage() {
  const { t } = useLanguage()

  // تكوين البيانات للعرض
  const sections = [
    {
      key: "company",
      title: t.impressumPage?.tmg || "Angaben gemäß § 5 TMG",
      icon: Building2,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{t.company.name}</h3>
            <div className="flex items-start gap-2 text-white/60">
              <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
              <span>{t.company.address}</span>
            </div>
          </div>
        </div>
      ),
      colSpan: "md:col-span-2"
    },
    {
      key: "contact",
      title: t.impressumPage?.contact || "Kontakt",
      icon: Phone,
      content: (
        <div className="space-y-3">
          <a href={`tel:${t.company.phone}`} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-gold/10 hover:border-gold/30 border border-transparent transition-all group">
            <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-white/80 group-hover:text-white transition-colors">{t.company.phone}</span>
          </a>
          <a href={`mailto:${t.company.email}`} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-gold/10 hover:border-gold/30 border border-transparent transition-all group">
            <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-white/80 group-hover:text-white transition-colors">{t.company.email}</span>
          </a>
        </div>
      ),
      colSpan: "md:col-span-1"
    },
    {
      key: "management",
      title: t.impressumPage?.representedBy || "Vertreten durch",
      icon: User,
      content: (
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
            <User className="w-6 h-6 text-gold" />
          </div>
          <div>
            <div className="text-xs text-gold uppercase tracking-wider font-bold mb-1">CEO / Geschäftsführer</div>
            <div className="text-white font-medium text-lg">{t.company.ceo}</div>
          </div>
        </div>
      ),
      colSpan: "md:col-span-1"
    },
    {
      key: "registry",
      title: t.impressumPage?.registry || "Registereintrag",
      icon: FileText,
      content: (
        <div className="space-y-2">
          <div className="text-sm text-white/50">{t.impressumPage?.registryText || "Eintragung im Handelsregister"}</div>
          <div className="font-mono text-lg text-white border-l-2 border-gold pl-3">
            {t.company.registry}
          </div>
        </div>
      ),
      colSpan: "md:col-span-1"
    },
    {
      key: "tax",
      title: t.impressumPage?.vatId || "Umsatzsteuer-ID",
      icon: CreditCard,
      content: (
        <div className="space-y-2">
          <div className="text-sm text-white/50">{t.impressumPage?.vatText || "gemäß § 27 a Umsatzsteuergesetz"}</div>
          <div className="font-mono text-lg text-white border-l-2 border-gold pl-3">
            {t.company.vatId || "DE459485701"}
          </div>
        </div>
      ),
      colSpan: "md:col-span-1"
    }
  ]

  return (
    <main className="min-h-screen bg-emerald-darker pt-32 pb-20 relative overflow-hidden">

      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Scale className="w-6 h-6 text-emerald-950" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t.impressumPage?.title || t.common.impressum}</h1>
            <p className="text-white/50 text-sm mt-1">{t.impressumPage?.subtitle || "Legal Information & Transparency"}</p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${section.colSpan} group relative p-8 bg-emerald-dark/50 border border-white/5 rounded-2xl hover:border-gold/30 hover:bg-emerald-dark/80 transition-all duration-300 backdrop-blur-sm overflow-hidden`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <section.icon className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors" />
                  <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                    {section.title}
                  </h2>
                </div>

                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer / Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4"
        >
          <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold text-sm mb-1">{t.impressumPage?.verifiedEntity || "Verified Entity"}</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              {t.impressumPage?.disclaimer}
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  )
}