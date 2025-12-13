"use client"

import { useLanguage } from "@/lib/language-context"
import { Activity, Server, ShieldCheck, Zap } from "lucide-react"

export function LiveTicker() {
  const { t, dir } = useLanguage()

  // Use translations for the text items
  const items = [
    { icon: Activity, text: t.ticker.items[0], color: "text-green-400" },
    { icon: Server, text: t.ticker.items[1], color: "text-blue-400" },
    { icon: ShieldCheck, text: t.ticker.items[2], color: "text-gold" },
    { icon: Zap, text: t.ticker.items[3], color: "text-yellow-400" },
    { icon: Activity, text: t.ticker.items[4], color: "text-white" },
  ]

  return (
    <div className="w-full bg-emerald-950/80 backdrop-blur-md border-y border-white/5 overflow-hidden py-3 relative z-30" dir={dir}>
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-linear-to-r from-emerald-950 to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-linear-to-l from-emerald-950 to-transparent z-10" />
      
      <div className="flex animate-infinite-scroll w-max gap-16 px-4">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')} animate-pulse`} />
            <item.icon className={`w-4 h-4 ${item.color} opacity-80`} />
            <span className="text-xs font-mono text-white/70 tracking-wider uppercase">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}