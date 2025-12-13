"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"
import { Scan, Cpu, Zap, Wifi, Activity, Crosshair } from "lucide-react"

export function DigitalTwinSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  // Hotspots with added "scanned" state logic (handled in render)
  const hotspots = [
    { x: 25, y: 40, icon: Wifi, label: "IoT Mesh V6", value: "98% Signal" },
    { x: 58, y: 30, icon: Zap, label: "Smart Grid", value: "4.2 MW" },
    { x: 82, y: 65, icon: Cpu, label: "HVAC AI", value: "Optimized" },
  ]

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scan className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-gold text-sm font-mono uppercase tracking-widest">Alftian Digital Twin™</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.digitalTwin?.title || "See Beyond the Surface"}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t.digitalTwin?.subtitle || "Move the laser scanner to reveal the digital infrastructure layer."}
          </p>
        </div>

        {/* THE SCANNER CONTAINER */}
        <div 
          ref={containerRef}
          // FIX: Updated `md:aspect-[21/9]` to canonical `md:aspect-21/9`
          className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden cursor-crosshair border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          
          {/* LAYER 1: REALITY (Standard Photo) */}
          <div className="absolute inset-0">
            <img 
              src="/images/gemini-generated-image-14f7ih14f7ih14f7.jpeg" 
              alt="Reality Layer" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Reality Label */}
            <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white/50" />
              <span className="text-white font-mono text-xs font-bold tracking-wider">OPTICAL FEED</span>
            </div>
          </div>

          {/* LAYER 2: DIGITAL TWIN (Revealed by ClipPath) */}
          <div 
            className="absolute inset-0 overflow-hidden bg-black"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="relative w-full h-full">
              {/* Filtered Image for Blueprint Look */}
              {/* FIX: Updated `hue-rotate-[120deg]` to canonical `hue-rotate-120` */}
              <img 
                src="/images/gemini-generated-image-14f7ih14f7ih14f7.jpeg" 
                alt="Digital Layer" 
                className="w-full h-full object-cover filter grayscale contrast-[1.5] brightness-50 sepia-[1] hue-rotate-120 saturate-[3]"
              />
              
              {/* Tech Overlays */}
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-color-dodge" />
              <div className="absolute inset-0 bg-size-[40px_40px] bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)]" />
              
              {/* Digital Noise / Scanlines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_3px)] opacity-20 pointer-events-none" />

              {/* HOTSPOTS (Only visible when scanned) */}
              {hotspots.map((spot, index) => {
                // Logic: Only show hotspot if the scanner has passed it
                const isRevealed = sliderPosition > spot.x;
                
                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ${isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                    style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2 group/spot">
                      {/* Ping Animation */}
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                      
                      {/* Icon Button */}
                      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-950 border border-green-500/50 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:bg-green-500 hover:text-black transition-colors cursor-pointer">
                        <spot.icon className="w-5 h-5" />
                      </div>
                      
                      {/* Data Pop-up (The "Fantastic" detail) */}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-black/90 border border-green-500/30 p-3 rounded-lg min-w-[140px] backdrop-blur-xl hidden group-hover/spot:block z-50">
                        <div className="text-[10px] text-green-500/60 font-mono uppercase mb-1">DATA POINT #{index + 10}</div>
                        <div className="text-white font-bold text-sm mb-0.5">{spot.label}</div>
                        <div className="text-green-400 font-mono text-xs flex items-center gap-2">
                          <Activity className="w-3 h-3" /> {spot.value}
                        </div>
                        {/* Connector Line */}
                        <div className="absolute right-full top-1/2 w-4 h-px bg-green-500/30" />
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Digital Label */}
              <div className="absolute bottom-8 right-8 bg-emerald-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-green-500/30 flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="text-green-400 font-mono text-xs font-bold tracking-wider">LIVE INFRASTRUCTURE</span>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-green-500 animate-pulse" />
                  <div className="w-1 h-3 bg-green-500/50 animate-pulse delay-75" />
                  <div className="w-1 h-3 bg-green-500/20 animate-pulse delay-150" />
                </div>
              </div>
            </div>
          </div>

          {/* THE QUANTUM LASER (Slider Handle) */}
          <div 
            className="absolute top-0 bottom-0 w-px z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* The Beam */}
            {/* FIX: Updated `-left-[1px]` to canonical `-left-px` */}
            <div className="absolute inset-y-0 -left-px w-[3px] bg-green-400 shadow-[0_0_20px_2px_rgba(74,222,128,0.8)]" />
            
            {/* The Handle / HUD */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              
              {/* Top Grip */}
              <div className="w-8 h-12 bg-black/90 border border-green-500/50 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                <Crosshair className="w-4 h-4 text-green-400 animate-spin-slow" />
              </div>

              {/* Data HUD (Only visible on dragging/hover) */}
              <div className={`bg-black/80 border border-green-500/30 p-3 rounded-lg backdrop-blur-xl min-w-[120px] transition-opacity duration-300 ${isDragging ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}>
                <div className="flex justify-between items-center text-[10px] text-green-500/70 font-mono mb-1">
                  <span>SCANNING</span>
                  <span className="animate-pulse">● REC</span>
                </div>
                <div className="text-white font-mono text-lg font-bold">
                  {Math.round(sliderPosition)}<span className="text-xs text-green-500">%</span>
                </div>
                <div className="h-1 w-full bg-green-900/50 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-green-500 w-[60%] animate-progress" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}