"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

export function AssetHeader() {
  return (
    <header className="h-12 shrink-0 w-full bg-[oklch(0.095_0.004_250)] border-b border-border/10 flex items-center justify-between px-4 sticky top-0 z-50">
      {/* Left: Brand + Asset */}
      <div className="flex items-center gap-5">
        {/* Brand Mark */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-bold text-foreground/90 tracking-tight">DanTree</span>
        </div>

        <div className="w-px h-6 bg-border/15" />

        {/* Current Asset */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-success/10 flex items-center justify-center">
            <span className="text-sm font-bold text-success">N</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-foreground">NVDA</span>
              <span className="text-[10px] text-muted-foreground/40">NASDAQ</span>
            </div>
            <span className="text-[10px] text-muted-foreground/35 -mt-0.5">NVIDIA Corporation</span>
          </div>
        </div>
      </div>

      {/* Center: Decision Control Strip */}
      <div className="flex items-center gap-4">
        {/* Stance */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-success/8 border border-success/12">
          <TrendingUp className="w-3.5 h-3.5 text-success" />
          <span className="text-xs font-semibold text-success">Bullish</span>
        </div>

        {/* Readiness */}
        <div className="flex items-center gap-2">
          <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={cn("w-1 h-3 rounded-sm", i <= 4 ? "bg-foreground/80" : "bg-muted-foreground/15")} />
            ))}
          </div>
          <span className="text-xs font-bold text-foreground tabular-nums">4/5</span>
          <span className="text-[10px] text-muted-foreground/40">Readiness</span>
        </div>

        {/* Action Bias */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-success/10 border border-success/15">
          <Zap className="w-3 h-3 text-success" />
          <span className="text-xs font-bold text-success">+加仓</span>
        </div>

        {/* Alert */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-warning/6 border border-warning/12">
          <AlertTriangle className="w-3 h-3 text-warning" />
          <span className="text-xs font-semibold text-warning">Medium</span>
        </div>

        {/* Delta */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-success/5 border border-success/10">
          <ArrowUpRight className="w-3 h-3 text-success" />
          <span className="text-xs font-bold text-success tabular-nums">+12%</span>
          <span className="text-[9px] text-muted-foreground/35">vs 上周</span>
        </div>
      </div>

      {/* Right: Meta */}
      <div className="flex items-center gap-1.5 text-muted-foreground/35">
        <Clock className="w-3 h-3" />
        <span className="text-[10px]">今天 14:32 更新</span>
      </div>
    </header>
  )
}
