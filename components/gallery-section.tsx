"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function GallerySection() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState("all")

  const filteredProjects = t.gallery.projects.filter(
    (project: any) => filter === "all" || project.category.toLowerCase().includes(filter)
  )

  const categories = ["all", "construction", "modernization", "management"]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-emerald-950 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-emerald-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header - Centered */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                {t.gallery.title}
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                {t.gallery.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Scrollable Filters - Centered */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${filter === cat
                    ? "bg-gold text-emerald-950 border-gold"
                    : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
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
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project: any, index: number) => (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileTap={{ scale: 0.98 }} // 👈 Touch Feedback
                transition={{ duration: 0.3 }}
                className="group relative h-[450px] md:h-[500px] w-full md:w-[calc(50%-1.5rem)] rounded-3xl overflow-hidden cursor-pointer bg-emerald-900/30"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* تدرج لوني أقوى للموبايل */}
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-emerald-950/60 to-transparent opacity-90 md:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">

                  <div className="absolute top-6 left-6 md:top-8 md:left-8">
                    <span className="bg-emerald-950/80 backdrop-blur-md text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-gold/20">
                      {project.status}
                    </span>
                  </div>

                  {/* 👇 التعديلات هنا:
                      جعلنا النصوص تظهر دائماً على الموبايل (بدون translate أو opacity)
                      وتختفي وتظهر بالأنيميشن فقط على الشاشات الكبيرة (md:)
                  */}
                  <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-white/50 text-xs font-mono uppercase tracking-widest">{project.year}</span>
                      <span className="w-8 h-px bg-white/20" />
                      <span className="text-white/50 text-xs font-mono uppercase tracking-widest">{project.location}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>

                    {/* الوصف ظاهر دائماً على الموبايل */}
                    <p className="text-white/80 text-sm leading-relaxed mb-4 md:mb-6 max-w-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-white font-bold text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span>{t.common.explore}</span>
                      <ArrowRight className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}