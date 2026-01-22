"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/ui/scroll-reveal" // عدنا لاستخدام المكون الموحد
import { MapPin, Phone, Mail, Building2, User, AlertTriangle, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatePresence, motion } from "framer-motion"

export function ContactSection() {
  const { t, language } = useLanguage()

  const [userRole, setUserRole] = useState("investor")
  const [isEmergency, setIsEmergency] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  // نصوص التبويبات (يفضل نقلها لملف الترجمة لاحقاً)
  const roleLabels = {
    investor: { en: "Client", de: "Auftraggeber", ar: "عميل" },
    tenant: { en: "General Inquiry", de: "Allgemeine Anfrage", ar: "استفسار عام" }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      role: userRole,
      isEmergency: isEmergency
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSuccess(true)
        // إعادة تعيين النموذج بعد 5 ثواني
        setTimeout(() => {
          setSuccess(false)
          setIsSubmitting(false)
        }, 5000)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || "Something went wrong")
      }
    } catch (error: any) {
      console.error("Submission error:", error)
      alert("Error: " + error.message) // يمكن استبدالها بـ Toast لاحقاً
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-emerald-950 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-900/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal width="100%" className="w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs uppercase tracking-widest font-bold">24/7 Digital Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.contact.title}</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* LEFT: The Intelligent Form */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <ScrollReveal delay={0.1} width="100%" className="w-full">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-gold/30 transition-all duration-500 shadow-2xl relative overflow-hidden">

                {/* Success Overlay */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-emerald-950/95 flex flex-col items-center justify-center text-center p-8"
                    >
                      <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 text-gold">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{t.common.success || "Message Received"}</h3>
                      <p className="text-white/60 mb-6">Our digital team is processing your request.</p>
                      <button
                        onClick={() => setSuccess(false)}
                        className="text-gold hover:text-white text-sm underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">

                  {/* Role Selector Tabs */}
                  <Tabs defaultValue="investor" onValueChange={setUserRole} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-emerald-900/40 p-1 border border-white/5 h-auto rounded-xl">
                      <TabsTrigger
                        value="investor"
                        className="py-3 rounded-lg data-[state=active]:bg-gold data-[state=active]:text-emerald-950 font-bold transition-all duration-300"
                      >
                        <Building2 className="w-4 h-4 me-2" />
                        <span className="text-xs md:text-sm">{roleLabels.investor[language] || roleLabels.investor.en}</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="tenant"
                        className="py-3 rounded-lg data-[state=active]:bg-gold data-[state=active]:text-emerald-950 font-bold transition-all duration-300"
                      >
                        <User className="w-4 h-4 me-2" />
                        <span className="text-xs md:text-sm">{roleLabels.tenant[language] || roleLabels.tenant.en}</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  {/* Fields */}
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs text-gold uppercase tracking-wider font-bold ml-1">{t.contact.name}</label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Full Name"
                          className="w-full h-12 md:h-14 bg-emerald-900/30 border border-white/10 rounded-xl px-4 text-white text-base focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all placeholder:text-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gold uppercase tracking-wider font-bold ml-1">{t.contact.email}</label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full h-12 md:h-14 bg-emerald-900/30 border border-white/10 rounded-xl px-4 text-white text-base focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    {/* Tenant Emergency Toggle */}
                    {userRole === 'tenant' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        onClick={() => setIsEmergency(!isEmergency)}
                        className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${isEmergency ? 'bg-red-900/20 border-red-500/50' : 'bg-emerald-900/30 border-white/10 hover:border-white/20'}`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isEmergency ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'bg-white/5 text-white/40'}`}>
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={`font-bold text-sm md:text-base ${isEmergency ? 'text-red-400' : 'text-white'}`}>
                            {isEmergency ? "Emergency Priority (High)" : "Standard Request"}
                          </div>
                          <div className="text-xs text-white/50 leading-tight mt-0.5">
                            {isEmergency ? "24/7 Rapid Response Team will be notified immediately." : "Click here for urgent maintenance issues."}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <label className="text-xs text-gold uppercase tracking-wider font-bold ml-1">{t.contact.message}</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="How can we help you?"
                        className="w-full bg-emerald-900/30 border border-white/10 rounded-xl px-4 py-4 text-white text-base focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all resize-none placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gold text-emerald-950 font-bold rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.send}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Contact Info (Glass Cards) */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6 order-1 lg:order-2">

            {/* Address */}
            <ScrollReveal delay={0.2} width="100%" className="w-full">
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/10 transition-all group cursor-default min-h-[200px] flex items-center">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0 border border-gold/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{t.contact.address}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {t.company.name}<br />
                      {t.company.address}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone */}
            <ScrollReveal delay={0.3} width="100%" className="w-full">
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/10 transition-all group min-h-[200px] flex items-center">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0 border border-gold/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{t.contact.phone}</h4>
                    <a href={`tel:${t.company.phone}`} className="text-gold text-lg font-mono font-bold hover:underline block mb-1">
                      {t.company.phone}
                    </a>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wide">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={0.4} width="100%" className="w-full">
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/10 transition-all group min-h-[200px] flex items-center">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0 border border-gold/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <a href={`mailto:${t.company.email}`} className="text-white/60 hover:text-gold transition-colors block break-all">
                      {t.company.email}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  )
}