"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, ExternalLink } from "lucide-react"

export function AssetHeader() {
  return (
    <header className="sticky top-0 z-50 h-[72px] w-full bg-card/95 backdrop-blur-sm border-b border-border/20 flex items-center px-5">
      {/* Asset Identity */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-success/15 flex items-center justify-center">
          <span className="text-lg font-bold text-success">N</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">NVDA</span>
            <span className="text-xs text-muted-foreground">NASDAQ</span>
          </div>
          <span className="text-xs text-muted-foreground/70">NVIDIA Corporation</span>
        </div>
      </div>

      {/* Status Indicators - Dashboard Style */}
      <div className="flex items-center gap-3 ml-8">
        {/* Stance */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">
          <TrendingUp className="w-3.5 h-3.5 text-success" />
          <span className="text-sm font-semibold text-success">Bullish</span>
        </div>

        {/* Thesis Label */}
        <div className="text-xs text-muted-foreground/60">
          <div>Thesis</div>
          <div>立场</div>
        </div>

        {/* Readiness */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className={`w-1.5 h-4 rounded-sm ${i <= 4 ? 'bg-success' : 'bg-muted/30'}`} />
            ))}
          </div>
          <span className="text-sm font-bold text-foreground">4/5</span>
          <span className="text-xs text-muted-foreground">Readiness</span>
        </div>

        {/* Action Bias */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 border border-success/25">
          <Zap className="w-3.5 h-3.5 text-success" />
          <span className="text-sm font-bold text-success">+加仓</span>
        </div>

        {/* Alert Level */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/10 border border-warning/20">
          <AlertTriangle className="w-3.5 h-3.5 text-warning" />
          <span className="text-sm font-semibold text-warning">Medium</span>
        </div>

        {/* Delta */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border/30">
          <ArrowUpRight className="w-3.5 h-3.5 text-success" />
          <span className="text-sm font-bold text-success">+12%</span>
          <span className="text-[10px] text-muted-foreground">vs 上周</span>
        </div>

        {/* External Link */}
        <button className="p-1.5 rounded-md hover:bg-secondary/30 transition-colors ml-1">
          <ExternalLink className="w-4 h-4 text-muted-foreground/50" />
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Last Update */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
        <Clock className="w-3 h-3" />
        <span>最近更新: 今天 14:32 · 由 AI 自动更新</span>
      </div>
    </header>
  )
}
