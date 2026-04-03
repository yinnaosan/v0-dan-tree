"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function AssetHeader() {
  return (
    <header className="h-[72px] w-full bg-card/80 backdrop-blur-sm border-b border-border/20 px-5 flex items-center sticky top-0 z-50">
      {/* Asset Identity */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
          <span className="text-lg font-bold text-primary">N</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-foreground">NVDA</h1>
            <span className="text-xs text-muted-foreground/60">NASDAQ</span>
          </div>
          <p className="text-xs text-muted-foreground/50">NVIDIA Corporation</p>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex items-center gap-3 ml-8">
        {/* Stance */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/8 border border-success/15">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-sm font-semibold text-success">Bullish</span>
        </div>

        {/* Thesis Stance Label */}
        <div className="text-xs text-muted-foreground/50">
          <span>Thesis</span>
          <span className="block text-muted-foreground/40">立场</span>
        </div>

        {/* Readiness */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 h-4 rounded-sm",
                  i <= 4 ? "bg-foreground" : "bg-muted-foreground/20"
                )}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">4/5</span>
          <span className="text-xs text-muted-foreground/50">Readiness</span>
        </div>

        {/* Action Bias */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">
          <Zap className="w-4 h-4 text-success" />
          <span className="text-sm font-bold text-success">+加仓</span>
        </div>

        {/* Alert Level */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/8 border border-warning/15">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <span className="text-sm font-medium text-warning">Medium</span>
        </div>

        {/* Delta */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/8 border border-success/15">
          <ArrowUpRight className="w-4 h-4 text-success" />
          <span className="text-sm font-bold text-success">+12%</span>
          <span className="text-[10px] text-muted-foreground/50">vs 上周</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
          <Clock className="w-3.5 h-3.5" />
          <span>最近更新: 今天 14:32 · 由 AI 自动更新</span>
        </div>
        <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
          <ExternalLink className="w-4 h-4 text-muted-foreground/50" />
        </button>
      </div>
    </header>
  )
}
