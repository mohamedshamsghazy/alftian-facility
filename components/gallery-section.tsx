"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Maximize2, ArrowUpRight } from "lucide-react"
import { useState } from "react"

const images = [
  {
    src: "/images/gemini-generated-image-14f7ih14f7ih14f7.jpeg",
    category: "Construction",
  },
  {
    src: "/images/gemini-generated-image-bjnhfbbjnhfbbjnh.jpeg",
    category: "Modernization",
  },
  {
    src: "/images/gemini-generated-image-d2gul3d2gul3d2gu.jpeg",
    category: "Facility Mgmt",
  },
  {
    src: "/images/gemini-generated-image-g4gt4og4gt4og4gt.jpeg",
    category: "Construction",
  },
]

export function GallerySection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [activeTab, setActiveTab] = useState("all")

  // Merge the image data with the translation data
  const projects = t.gallery.projects.map((project: any, index: number) => ({
    ...project,
    image: images[index % images.length].src
  }))

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter((p: any) => p.category.toLowerCase().includes(activeTab === "management" ? "facility" : activeTab))

  return (
    <section id="gallery" ref={ref} className="py-24 md:py-32 bg-emerald-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-gold" />
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.gallery.title}</h2>
            <p className="text-white/60 max-w-md">{t.gallery.subtitle}</p>
          </div>

          <div 
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList className="bg-emerald-dark/50 border border-gold/10 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-gold data-[state=active]:text-emerald-darker">{t.gallery.filters.all}</TabsTrigger>
                <TabsTrigger value="construction" className="data-[state=active]:bg-gold data-[state=active]:text-emerald-darker">{t.gallery.filters.construction}</TabsTrigger>
                <TabsTrigger value="modernization" className="data-[state=active]:bg-gold data-[state=active]:text-emerald-darker">{t.gallery.filters.modernization}</TabsTrigger>
                <TabsTrigger value="management" className="data-[state=active]:bg-gold data-[state=active]:text-emerald-darker">{t.gallery.filters.management}</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {filteredProjects.map((project: any, index: number) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-emerald-dark border border-white/5 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] ${
                index === 0 ? "md:col-span-2" : "md:col-span-1"
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-darker/90 via-emerald-darker/20 to-transparent" />
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-1 bg-emerald-darker/80 backdrop-blur-md border border-gold/30 text-gold text-xs font-mono uppercase tracking-wider rounded-full">
                  {project.status}
                </span>
              </div>

              {/* Hover Action Icon */}
              <div className="absolute top-6 right-6 z-20 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold text-emerald-darker flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-gold text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Maximize2 className="w-4 h-4 text-gold" />
                    <span className="text-sm">{project.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}