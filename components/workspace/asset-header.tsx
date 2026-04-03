"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, ExternalLink } from "lucide-react"

export function AssetHeader() {
  return (
    <header className="h-[72px] w-full bg-card/80 backdrop-blur-sm border-b border-border/20 sticky top-0 z-50 flex items-center px-5">
      {/* Asset Identity */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">
          <span className="text-lg font-bold text-success">N</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">NVDA</span>
            <span className="text-xs text-muted-foreground/50">NASDAQ</span>
          </div>
          <span className="text-xs text-muted-foreground/60">NVIDIA Corporation</span>
        </div>
      </div>

      {/* Stance Badge */}
      <div className="ml-6 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/8 border border-success/15">
        <TrendingUp className="w-3.5 h-3.5 text-success" />
        <span className="text-sm font-semibold text-success">Bullish</span>
      </div>

      {/* Thesis Label */}
      <div className="ml-4 text-sm text-muted-foreground/60">
        Thesis 立场
      </div>

      {/* Readiness Progress */}
      <div className="ml-6 flex items-center gap-3">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-1.5 h-4 rounded-sm ${i <= 4 ? "bg-foreground" : "bg-muted-foreground/20"}`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-foreground">4/5</span>
        <span className="text-xs text-muted-foreground/50">Readiness</span>
      </div>

      {/* Action Bias */}
      <div className="ml-6 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">
        <Zap className="w-3.5 h-3.5 text-success" />
        <span className="text-sm font-bold text-success">+加仓</span>
      </div>

      {/* Alert Level */}
      <div className="ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/8 border border-warning/15">
        <AlertTriangle className="w-3.5 h-3.5 text-warning" />
        <span className="text-sm font-medium text-warning">Medium</span>
      </div>

      {/* Delta */}
      <div className="ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border/30">
        <ArrowUpRight className="w-3.5 h-3.5 text-success" />
        <span className="text-sm font-bold text-success">+12%</span>
        <span className="text-xs text-muted-foreground/50">vs 上周</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right Side - Update Info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
          <Clock className="w-3 h-3" />
          <span>最近更新: 今天 14:32 · 由 AI 自动更新</span>
        </div>
        <button className="p-1.5 rounded-md hover:bg-secondary/30 transition-colors">
          <ExternalLink className="w-4 h-4 text-muted-foreground/40" />
        </button>
      </div>
    </header>
  )
}
