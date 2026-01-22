"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight, MoveRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState("all")

  const filteredProjects = t.gallery.projects.filter(
    (project: any) => filter === "all" || project.category.toLowerCase().includes(filter)
  )

  const categories = ["all", "construction", "modernization", "management"]

  return (
    <main className="min-h-screen bg-emerald-950 pt-24 pb-20 md:pt-32 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-10" />
        <div className="absolute top-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-900/30 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <ScrollReveal>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              {t.gallery.title}
            </h1>
            <p className="text-white/60 text-base md:text-xl leading-relaxed px-2">
              {t.gallery.subtitle}
            </p>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-nowrap overflow-x-auto pb-4 justify-start md:justify-center gap-2 mt-8 px-2 snap-x scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`snap-center shrink-0 px-5 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${
                    filter === cat
                      ? "bg-gold text-emerald-950 border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {t.gallery.filters[cat as keyof typeof t.gallery.filters]}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileTap={{ scale: 0.98 }} // 👈 تأثير اللمس للموبايل (Touch Feedback)
                transition={{ duration: 0.4 }}
                className="group relative min-h-[450px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-emerald-900/20 shadow-2xl"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* تدرج لوني أقوى للموبايل لتوضيح الكلام */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent opacity-95 md:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 md:top-10 md:left-10">
                    <span className="bg-emerald-950/90 backdrop-blur-xl text-gold px-3 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border border-gold/30 shadow-lg">
                      {project.status}
                    </span>
                  </div>

                  {/* 👇 التغيير الجوهري هنا:
                      md:translate-y-8  -> على اللابتوب النص نازل تحت
                      translate-y-0     -> على الموبايل النص مكانه طبيعي (ظاهر)
                  */}
                  <div className="relative z-10 transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                    
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 text-white/70 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      <span>{project.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* 👇 الوصف:
                        opacity-100 -> ظاهر دائماً على الموبايل
                        md:opacity-0 -> مخفي على اللابتوب ويظهر بالهوفر
                    */}
                    <p className="text-white/80 text-sm md:text-lg leading-relaxed mb-6 border-l-2 border-gold/50 pl-3 md:pl-4 max-w-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>

                    {/* Button */}
                    <div className="flex items-center gap-3 text-white font-bold text-xs md:text-sm uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span className="border-b border-gold text-gold pb-1">
                        {t.common.explore}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-emerald-950">
                        <MoveRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-32 text-center px-4">
          <p className="text-white/50 mb-6 text-sm md:text-base">Looking for a specific solution?</p>
          <Link 
            href="/contact"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-4 bg-gold text-emerald-950 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            Start a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </main>
  )
}