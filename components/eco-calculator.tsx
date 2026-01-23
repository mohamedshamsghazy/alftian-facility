"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Slider } from "@/components/ui/slider"
import { Leaf, Trees, Building } from "lucide-react"

export function EcoCalculator() {
  const { t, dir } = useLanguage() // Get direction for layout
  const [area, setArea] = useState([5000])

  const co2Saved = Math.round(area[0] * 0.8)
  const treesEquiv = Math.round(co2Saved * 45)

  return (
    <div className="w-full max-w-4xl mx-auto p-1 bg-linear-to-br from-gold/30 via-white/10 to-transparent rounded-3xl mt-24">
      <div className="bg-emerald-950/90 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-white/5 relative overflow-hidden" dir={dir}>

        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t.calculator.title}</h3>
          </div>

          <p className="text-white/60 mb-12">
            {t.calculator.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Controls */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gold font-mono">
                  <span>{t.calculator.labelSize}</span>
                  <span className="tabular-nums" dir="ltr">{area[0].toLocaleString()} m²</span>
                </div>
                <Slider
                  defaultValue={[5000]}
                  max={20000}
                  step={500}
                  onValueChange={setArea}
                  className="py-4 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-white/30 font-mono">
                  <span>{t.calculator.labelSmall}</span>
                  <span>{t.calculator.labelMega}</span>
                </div>
              </div>

              <div className="p-4 bg-emerald-900/30 rounded-xl border border-white/5 flex gap-4 items-center">
                <Building className="w-8 h-8 text-white/20 shrink-0" />
                <div className="text-sm text-white/50">
                  <span className="text-white font-bold block mb-1">{t.calculator.basisTitle}</span>
                  {t.calculator.basisText}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 relative group hover:bg-white/10 transition-colors">
                <div className="text-sm text-white/50 uppercase tracking-widest mb-2">{t.calculator.co2Label}</div>
                <div className="text-5xl font-bold text-white font-mono group-hover:text-green-400 transition-colors flex items-baseline gap-2">
                  <span dir="ltr">{co2Saved.toLocaleString()}</span>
                  <span className="text-lg text-white/40">{t.calculator.co2Unit}</span>
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 relative group hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 text-sm text-white/50 uppercase tracking-widest mb-2">
                  <Trees className="w-4 h-4" />
                  <span>{t.calculator.treeLabel}</span>
                </div>
                <div className="text-3xl font-bold text-white font-mono group-hover:text-green-400 transition-colors flex items-baseline gap-2">
                  <span dir="ltr">{treesEquiv.toLocaleString()}</span>
                  <span className="text-sm text-white/40">{t.calculator.treeUnit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}