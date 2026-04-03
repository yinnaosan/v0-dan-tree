"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, Leaf } from "lucide-react"

export function AssetHeader() {
  return (
    <header 
      className="h-12 shrink-0 w-full flex items-center justify-between px-5 sticky top-0 z-50 border-b border-white/[0.04]"
      style={{ background: 'rgba(10,13,17,0.95)', backdropFilter: 'blur(16px)' }}
    >
      {/* Left: Brand + Asset */}
      <div className="flex items-center gap-5">
        {/* Brand Mark */}
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-emerald-500/70" />
          <span className="text-[13px] font-semibold text-white/60 tracking-tight">DanTree</span>
        </div>

        <div className="w-px h-5 bg-white/[0.06]" />

        {/* Current Asset */}
        <div className="flex items-center gap-2.5">
          <div 
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: 'rgba(16,185,129,0.08)' }}
          >
            <span className="text-xs font-bold text-emerald-400/80">N</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-bold text-white/85">NVDA</span>
            <span className="text-[10px] text-white/25">NASDAQ</span>
          </div>
        </div>
      </div>

      {/* Center: Decision Control Strip */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ background: 'rgba(16,185,129,0.08)' }}>
          <TrendingUp className="w-3 h-3 text-emerald-400/80" />
          <span className="text-xs font-semibold text-emerald-400/90">Bullish</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-1 h-3 rounded-sm" style={{ background: i <= 4 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
          <span className="text-xs font-bold text-white/70 tabular-nums">4/5</span>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ background: 'rgba(16,185,129,0.1)' }}>
          <Zap className="w-3 h-3 text-emerald-400/80" />
          <span className="text-xs font-bold text-emerald-400/90">+加仓</span>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ background: 'rgba(251,191,36,0.05)' }}>
          <AlertTriangle className="w-3 h-3 text-amber-400/70" />
          <span className="text-xs font-semibold text-amber-400/70">Medium</span>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <ArrowUpRight className="w-3 h-3 text-emerald-400/60" />
          <span className="font-bold text-emerald-400/70 tabular-nums">+12%</span>
          <span className="text-white/20">周</span>
        </div>

        <span className="text-xs font-semibold text-white/50 tabular-nums">$880-900</span>
      </div>

      {/* Right: Meta */}
      <div className="flex items-center gap-1.5 text-white/20">
        <Clock className="w-3 h-3" />
        <span className="text-[10px]">14:32</span>
      </div>
    </header>
  )
}
