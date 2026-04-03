"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, ExternalLink } from "lucide-react"

export function AssetHeader() {
  return (
    <header className="h-[72px] w-full bg-card/80 backdrop-blur-sm border-b border-border/20 flex items-center px-4 shrink-0">
      {/* Asset Identity */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
          <span className="text-base font-bold text-success">N</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-foreground">NVDA</span>
            <span className="text-[10px] text-muted-foreground/50">NASDAQ</span>
          </div>
          <span className="text-[10px] text-muted-foreground/60">NVIDIA Corporation</span>
        </div>
      </div>

      {/* Stance Badge */}
      <div className="ml-5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-success/8 border border-success/15">
        <TrendingUp className="w-3 h-3 text-success" />
        <span className="text-xs font-semibold text-success">Bullish</span>
      </div>

      {/* Thesis Label */}
      <div className="ml-3 text-xs text-muted-foreground/60">
        Thesis 立场
      </div>

      {/* Readiness Progress */}
      <div className="ml-4 flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-1 h-3.5 rounded-sm ${i <= 4 ? "bg-foreground" : "bg-muted-foreground/20"}`}
            />
          ))}
        </div>
        <span className="text-xs font-semibold text-foreground">4/5</span>
        <span className="text-[10px] text-muted-foreground/50">Readiness</span>
      </div>

      {/* Action Bias */}
      <div className="ml-4 flex items-center gap-1 px-2.5 py-1 rounded-md bg-success/10 border border-success/20">
        <Zap className="w-3 h-3 text-success" />
        <span className="text-xs font-bold text-success">+加仓</span>
      </div>

      {/* Alert Level */}
      <div className="ml-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-warning/8 border border-warning/15">
        <AlertTriangle className="w-3 h-3 text-warning" />
        <span className="text-xs font-medium text-warning">Medium</span>
      </div>

      {/* Delta */}
      <div className="ml-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-card border border-border/30">
        <ArrowUpRight className="w-3 h-3 text-success" />
        <span className="text-xs font-bold text-success">+12%</span>
        <span className="text-[10px] text-muted-foreground/50">vs 上周</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right Side - Update Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50">
          <Clock className="w-2.5 h-2.5" />
          <span>最近更新: 今天 14:32 · 由 AI 自动更新</span>
        </div>
        <button className="p-1 rounded-md hover:bg-secondary/30 transition-colors">
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40" />
        </button>
      </div>
    </header>
  )
}
