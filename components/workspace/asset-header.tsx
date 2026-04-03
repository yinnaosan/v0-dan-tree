"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, Leaf } from "lucide-react"

export function AssetHeader() {
  return (
    <header 
      className="h-14 shrink-0 w-full flex items-center justify-between px-5 sticky top-0 z-50 border-b border-white/[0.06]"
      style={{ background: 'linear-gradient(180deg, rgba(18,22,28,0.98) 0%, rgba(14,17,23,0.98) 100%)', backdropFilter: 'blur(12px)' }}
    >
      {/* Left: Brand + Asset */}
      <div className="flex items-center gap-5">
        {/* Brand Mark - Subtle */}
        <div className="flex items-center gap-2.5">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.15)' }}
          >
            <Leaf className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-[15px] font-bold text-white/80 tracking-tight">DanTree</span>
        </div>

        <div className="w-px h-7 bg-white/[0.08]" />

        {/* Current Asset - Clear anchor */}
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.12)' }}
          >
            <span className="text-sm font-bold text-emerald-400">N</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-bold text-white/90">NVDA</span>
              <span className="text-[11px] text-white/30">NASDAQ</span>
            </div>
            <span className="text-[11px] text-white/25 -mt-0.5">NVIDIA Corporation</span>
          </div>
        </div>
      </div>

      {/* Center: Decision Control Strip - Calm, stable, always visible */}
      <div className="flex items-center gap-4">
        {/* Stance Badge */}
        <div 
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
          style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}
        >
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[13px] font-semibold text-emerald-400">Bullish</span>
        </div>

        {/* Thesis */}
        <div className="flex flex-col items-center px-2">
          <span className="text-[10px] text-white/30 uppercase tracking-wide">Thesis</span>
          <span className="text-[13px] font-bold text-white/70">强看多</span>
        </div>

        {/* Readiness */}
        <div className="flex items-center gap-2.5 px-2">
          <div className="flex gap-[3px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-1.5 h-4 rounded-sm"
                style={{ background: i <= 4 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.12)' }}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-white/80 tabular-nums">4/5</span>
            <span className="text-[9px] text-white/25 -mt-0.5 uppercase">Ready</span>
          </div>
        </div>

        {/* Action Bias */}
        <div 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
          style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[13px] font-bold text-emerald-400">+加仓</span>
        </div>

        {/* Alert Level */}
        <div 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
          style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.12)' }}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400/80" />
          <span className="text-[13px] font-semibold text-amber-400/80">Medium</span>
        </div>

        {/* Delta */}
        <div 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
          style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.1)' }}
        >
          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400/70" />
          <span className="text-[13px] font-bold text-emerald-400/80 tabular-nums">+12%</span>
          <span className="text-[10px] text-white/25">vs 上周</span>
        </div>

        {/* Entry Zone */}
        <div className="flex flex-col items-center px-2">
          <span className="text-[10px] text-white/30 uppercase tracking-wide">Entry</span>
          <span className="text-[13px] font-bold text-white/70 tabular-nums">$880-900</span>
        </div>
      </div>

      {/* Right: Meta - Subtle timestamp */}
      <div className="flex items-center gap-2 text-white/25">
        <Clock className="w-3.5 h-3.5" />
        <span className="text-[11px]">今天 14:32 更新</span>
      </div>
    </header>
  )
}
