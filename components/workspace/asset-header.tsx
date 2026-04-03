"use client"

import { TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function AssetHeader() {
  return (
    <header className="h-14 shrink-0 bg-[oklch(0.11_0.004_250)] border-b border-border/15 flex items-center px-5">
      {/* Asset Identity */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-success/12 flex items-center justify-center">
          <span className="text-base font-bold text-success">N</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-foreground tracking-tight">NVDA</span>
            <span className="text-[11px] text-muted-foreground/40 font-medium">NASDAQ</span>
          </div>
          <span className="text-[11px] text-muted-foreground/50">NVIDIA Corporation</span>
        </div>
      </div>

      {/* Decision Control Strip - Core Status */}
      <div className="flex items-center gap-5 ml-8">
        {/* Stance */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-success/8 border border-success/15">
          <TrendingUp className="w-3.5 h-3.5 text-success" />
          <span className="text-[13px] font-semibold text-success">Bullish</span>
        </div>

        {/* Thesis Label */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-muted-foreground/50 font-medium">Thesis</span>
          <span className="text-[11px] text-muted-foreground/35">立场</span>
        </div>

        {/* Readiness Bar */}
        <div className="flex items-center gap-2.5">
          <div className="flex gap-[3px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={cn(
                  "w-[5px] h-[14px] rounded-sm",
                  i <= 4 ? "bg-foreground/90" : "bg-muted-foreground/20"
                )}
              />
            ))}
          </div>
          <span className="text-[13px] font-bold text-foreground tabular-nums">4/5</span>
          <span className="text-[11px] text-muted-foreground/45">Readiness</span>
        </div>

        {/* Action Bias */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-success/10 border border-success/20">
          <Zap className="w-3.5 h-3.5 text-success" />
          <span className="text-[13px] font-bold text-success">+加仓</span>
        </div>

        {/* Alert Level */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-warning/6 border border-warning/15">
          <AlertTriangle className="w-3.5 h-3.5 text-warning" />
          <span className="text-[13px] font-semibold text-warning">Medium</span>
        </div>

        {/* Weekly Delta */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-success/6 border border-success/12">
          <ArrowUpRight className="w-3.5 h-3.5 text-success" />
          <span className="text-[13px] font-bold text-success tabular-nums">+12%</span>
          <span className="text-[10px] text-muted-foreground/40">vs 上周</span>
        </div>
      </div>

      {/* Right Side - Meta */}
      <div className="flex items-center gap-3 ml-auto">
        <div className="flex items-center gap-1.5 text-muted-foreground/40">
          <Clock className="w-3 h-3" />
          <span className="text-[11px]">最近更新: 今天 14:32 · 由 AI 自动更新</span>
        </div>
        <button className="p-1.5 rounded-md hover:bg-secondary/25 transition-colors">
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/35" />
        </button>
      </div>
    </header>
  )
}
