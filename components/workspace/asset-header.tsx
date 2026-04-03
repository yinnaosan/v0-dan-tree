"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, Leaf } from "lucide-react"

export function AssetHeader() {
  return (
    <header 
      className="h-10 shrink-0 w-full flex items-center justify-between px-4 sticky top-0 z-50 border-b border-white/[0.03]"
      style={{ background: '#090c10' }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Leaf className="w-3.5 h-3.5 text-emerald-500/50" />
          <span className="text-[11px] font-medium text-white/45">DanTree</span>
        </div>

        <div className="w-px h-4 bg-white/[0.04]" />

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.06)' }}>
            <span className="text-[10px] font-bold text-emerald-400/70">N</span>
          </div>
          <span className="text-[12px] font-semibold text-white/75">NVDA</span>
          <span className="text-[9px] text-white/20">NASDAQ</span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(16,185,129,0.06)' }}>
          <TrendingUp className="w-2.5 h-2.5 text-emerald-400/70" />
          <span className="text-[10px] font-medium text-emerald-400/80">Bullish</span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex gap-px">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-0.5 h-2.5 rounded-sm" style={{ background: i <= 4 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.08)' }} />
            ))}
          </div>
          <span className="text-[10px] font-semibold text-white/60 tabular-nums">4/5</span>
        </div>

        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(16,185,129,0.08)' }}>
          <Zap className="w-2.5 h-2.5 text-emerald-400/70" />
          <span className="text-[10px] font-semibold text-emerald-400/80">+加仓</span>
        </div>

        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(251,191,36,0.04)' }}>
          <AlertTriangle className="w-2.5 h-2.5 text-amber-400/60" />
          <span className="text-[10px] font-medium text-amber-400/60">Medium</span>
        </div>

        <div className="flex items-center gap-0.5 text-[10px]">
          <ArrowUpRight className="w-2.5 h-2.5 text-emerald-400/50" />
          <span className="font-semibold text-emerald-400/60 tabular-nums">+12%</span>
          <span className="text-white/15">周</span>
        </div>

        <span className="text-[10px] font-medium text-white/40 tabular-nums">$880-900</span>
      </div>

      <div className="flex items-center gap-1 text-white/15">
        <Clock className="w-2.5 h-2.5" />
        <span className="text-[9px]">14:32</span>
      </div>
    </header>
  )
}
