"use client"

// Fixed asset dashboard header - always visible
import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, ExternalLink, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

export function AssetHeader() {
  return (
    <header className="h-[72px] w-full bg-card/90 backdrop-blur-sm border-b border-border/25 px-6 flex items-center sticky top-0 z-50">
      {/* Left: Session Rail placeholder space */}
      <div className="w-52 shrink-0" />
      
      {/* Center: Asset Info + Dashboard Indicators */}
      <div className="flex-1 flex items-center gap-8">
        {/* Asset Identity */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-success/12 flex items-center justify-center border border-success/25">
            <span className="text-base font-bold text-success">N</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-foreground tracking-tight">NVDA</h1>
              <span className="text-sm text-muted-foreground/70">NASDAQ</span>
            </div>
            <span className="text-xs text-muted-foreground/60">NVIDIA Corporation</span>
          </div>
        </div>

        {/* Dashboard Indicators Strip */}
        <div className="flex items-center gap-6">
          {/* Stance */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">
              <TrendingUp className="w-3.5 h-3.5 text-success" />
              <span className="text-sm font-semibold text-success">Bullish</span>
            </div>
            <span className="text-xs text-muted-foreground/50">Thesis 立场</span>
          </div>

          {/* Readiness */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={cn("w-1.5 h-4 rounded-sm", i <= 4 ? "bg-primary" : "bg-secondary/40")} />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4/5</span>
            <span className="text-xs text-muted-foreground/50">Readiness</span>
          </div>

          {/* Action Bias */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/8 border border-primary/15">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-semibold text-primary">+加仓</span>
          </div>

          {/* Alert Level */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/8 border border-warning/15">
            <AlertTriangle className="w-3.5 h-3.5 text-warning" />
            <span className="text-sm font-semibold text-warning">Medium</span>
          </div>

          {/* Delta */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-success/6">
            <ArrowUpRight className="w-3.5 h-3.5 text-success" />
            <span className="text-sm font-bold text-success">+12%</span>
            <span className="text-xs text-muted-foreground/50">vs 上周</span>
          </div>
        </div>
      </div>

      {/* Right: Meta + Actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
          <Clock className="w-3 h-3" />
          <span>14:32 更新</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
            <ExternalLink className="w-4 h-4 text-muted-foreground/50" />
          </button>
          <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
            <MoreHorizontal className="w-4 h-4 text-muted-foreground/50" />
          </button>
        </div>
      </div>
    </header>
  )
}
