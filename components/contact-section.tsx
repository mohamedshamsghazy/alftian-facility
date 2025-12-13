"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { MapPin, Phone, Mail, Send, Building2, User, AlertTriangle, ArrowRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function ContactSection() {
  // FIX: Destructure 'language' here so we can check if it is 'ar' or 'de'
  const { t, dir, language } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [userRole, setUserRole] = useState("investor")
  const [isEmergency, setIsEmergency] = useState(false)
  const [formStep, setFormStep] = useState(1)

  const roleLabels = {
    investor: { en: "Partner / Investor", de: "Partner / Investor", ar: "شريك / مستثمر" },
    tenant: { en: "Tenant / Resident", de: "Mieter / Bewohner", ar: "مستأجر / مقيم" }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep(2) // Show success state
    setTimeout(() => setFormStep(1), 3000) // Reset after 3s
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-linear-to-b from-emerald-darker to-emerald-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"/>
            <span className="text-gold text-xs uppercase tracking-widest font-bold">24/7 Digital Hub</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.contact.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          
          {/* LEFT: The Intelligent Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
            
            <div className="bg-emerald-dark/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 shadow-2xl">
              
              {formStep === 2 ? (
                // Success State
                <div className="h-[400px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6 text-gold">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-white/60">Our digital team is processing your request.</p>
                </div>
              ) : (
                // Form State
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Role Selector */}
                  <Tabs defaultValue="investor" onValueChange={setUserRole} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-emerald-darker/50 p-1 border border-white/5 h-auto">
                      <TabsTrigger value="investor" className="py-3 data-[state=active]:bg-gold data-[state=active]:text-emerald-darker transition-all">
                        <Building2 className="w-4 h-4 me-2" />
                        {/* FIX: Use 'language' variable instead of 't.locale' */}
                        {roleLabels.investor[language] || roleLabels.investor.en}
                      </TabsTrigger>
                      <TabsTrigger value="tenant" className="py-3 data-[state=active]:bg-gold data-[state=active]:text-emerald-darker transition-all">
                        <User className="w-4 h-4 me-2" />
                        {/* FIX: Use 'language' variable instead of 't.locale' */}
                        {roleLabels.tenant[language] || roleLabels.tenant.en}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  {/* Dynamic Fields */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-gold uppercase tracking-wider font-semibold ml-1">{t.contact.name}</label>
                        <input type="text" required className="w-full bg-emerald-darker/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gold uppercase tracking-wider font-semibold ml-1">{t.contact.email}</label>
                        <input type="email" required className="w-full bg-emerald-darker/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all" />
                      </div>
                    </div>

                    {/* Tenant Emergency Toggle */}
                    {userRole === 'tenant' && (
                      <div 
                        onClick={() => setIsEmergency(!isEmergency)}
                        className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 flex items-center gap-4 ${isEmergency ? 'bg-red-900/20 border-red-500/50' : 'bg-emerald-darker/30 border-white/10 hover:border-white/20'}`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isEmergency ? 'bg-red-500 text-white' : 'bg-white/5 text-white/40'}`}>
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={`font-bold ${isEmergency ? 'text-red-400' : 'text-white'}`}>
                            {isEmergency ? "Emergency Priority" : "Standard Request"}
                          </div>
                          <div className="text-xs text-white/50">
                            {isEmergency ? "24/7 Rapid Response Team will be notified." : "Click here for urgent maintenance issues."}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-xs text-gold uppercase tracking-wider font-semibold ml-1">{t.contact.message}</label>
                      <textarea rows={4} required className="w-full bg-emerald-darker/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all resize-none" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-gold text-emerald-darker font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <span>{t.contact.send}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Contact Info (Glass Cards) */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
            
            {/* Info Card 1 */}
            <div className="p-6 bg-emerald-dark/30 border border-white/5 rounded-2xl hover:bg-emerald-dark/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2">{t.contact.address}</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Alftian Facility & Bau GmbH<br/>
                Musterstraße 123<br/>
                10115 Berlin, Germany
              </p>
            </div>

            {/* Info Card 2 */}
            <div className="p-6 bg-emerald-dark/30 border border-white/5 rounded-2xl hover:bg-emerald-dark/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-gold">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2">{t.contact.phone}</h4>
              <p className="text-gold text-lg font-mono mb-1">+49 30 123 456 789</p>
              <p className="text-white/40 text-xs">24/7 Emergency Hotline Available</p>
            </div>

            {/* Info Card 3 */}
            <div className="p-6 bg-emerald-dark/30 border border-white/5 rounded-2xl hover:bg-emerald-dark/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-gold">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2">Email</h4>
              <a href="mailto:info@alftian-bau.de" className="text-white/60 hover:text-gold transition-colors">info@alftian-bau.de</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}