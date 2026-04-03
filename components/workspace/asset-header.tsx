"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

export function AssetHeader() {
  return (
    <header className="h-16 shrink-0 w-full bg-[oklch(0.085_0.004_250)] border-b border-border/15 flex items-center justify-between px-5 sticky top-0 z-50">
      {/* Left: Brand + Asset */}
      <div className="flex items-center gap-6">
        {/* Brand Mark */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/12 flex items-center justify-center">
            <Leaf className="w-4.5 h-4.5 text-primary" />
          </div>
          <span className="text-[15px] font-bold text-foreground tracking-tight">DanTree</span>
        </div>

        <div className="w-px h-8 bg-border/20" />

        {/* Current Asset */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
            <span className="text-base font-bold text-success">N</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-foreground">NVDA</span>
              <span className="text-xs text-muted-foreground/50">NASDAQ</span>
            </div>
            <span className="text-xs text-muted-foreground/40">NVIDIA Corporation</span>
          </div>
        </div>
      </div>

      {/* Center: Decision Control Strip */}
      <div className="flex items-center gap-5">
        {/* Stance */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/8 border border-success/15">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-sm font-semibold text-success">Bullish</span>
        </div>

        {/* Thesis Stance */}
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground/50">Thesis 立场</span>
          <span className="text-sm font-bold text-foreground">强看多</span>
        </div>

        {/* Readiness */}
        <div className="flex items-center gap-2.5">
          <div className="flex gap-[3px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={cn("w-1.5 h-4 rounded-sm", i <= 4 ? "bg-foreground/80" : "bg-muted-foreground/20")} />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground tabular-nums">4/5</span>
            <span className="text-[10px] text-muted-foreground/40 -mt-0.5">Readiness</span>
          </div>
        </div>

        {/* Action Bias */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/12 border border-success/20">
          <Zap className="w-4 h-4 text-success" />
          <span className="text-sm font-bold text-success">+加仓</span>
        </div>

        {/* Alert */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/8 border border-warning/15">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <span className="text-sm font-semibold text-warning">Medium</span>
        </div>

        {/* Delta */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/6 border border-success/12">
          <ArrowUpRight className="w-4 h-4 text-success" />
          <span className="text-sm font-bold text-success tabular-nums">+12%</span>
          <span className="text-xs text-muted-foreground/40">vs 上周</span>
        </div>

        {/* Entry Zone */}
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground/50">Entry Zone</span>
          <span className="text-sm font-bold text-foreground tabular-nums">$880-900</span>
        </div>
      </div>

      {/* Right: Meta */}
      <div className="flex items-center gap-2 text-muted-foreground/40">
        <Clock className="w-3.5 h-3.5" />
        <span className="text-xs">今天 14:32 更新</span>
      </div>
    </header>
  )
}
