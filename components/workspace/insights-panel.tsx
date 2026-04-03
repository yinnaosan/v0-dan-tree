"use client"

import { Eye, CheckCircle2, Zap, AlertCircle, TrendingUp, ArrowRight, Target } from "lucide-react"
import { cn } from "@/lib/utils"

export function InsightsPanel() {
  return (
    <aside className="w-56 shrink-0 h-full bg-gradient-to-b from-[oklch(0.055_0.004_260)] to-[oklch(0.045_0.003_260)] border-l border-white/[0.03] flex flex-col">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-white/[0.03] shrink-0">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-muted-foreground/35" />
          <span className="text-[14px] font-bold text-foreground/70">决策情报</span>
        </div>
        <p className="text-[10px] text-muted-foreground/25 mt-0.5">NVDA 相关信号</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* What Matters Now */}
        <div className="px-4 py-4 border-b border-white/[0.02]">
          <div className="flex items-center gap-1.5 mb-3">
            <Target className="w-3 h-3 text-primary/50" />
            <span className="text-[10px] font-bold text-primary/60 uppercase tracking-wider">Now</span>
          </div>
          <div className="space-y-3">
            <InsightItem 
              type="confirm" 
              title="台积电 CoWoS 扩产" 
              detail="验证 H200 供应链"
              time="2h"
            />
            <InsightItem 
              type="catalyst" 
              title="微软 AI CapEx $50B+" 
              detail="提升订单能见度"
              time="4h"
            />
          </div>
        </div>

        {/* What to Monitor */}
        <div className="px-4 py-4 border-b border-white/[0.02]">
          <div className="flex items-center gap-1.5 mb-3">
            <Eye className="w-3 h-3 text-warning/50" />
            <span className="text-[10px] font-bold text-warning/60 uppercase tracking-wider">Monitor</span>
          </div>
          <InsightItem 
            type="watch" 
            title="出口管制不确定性" 
            detail="影响 ~15% 收入"
            time="1d"
          />
        </div>

        {/* Related Dependencies */}
        <div className="px-4 py-4 border-b border-white/[0.02]">
          <div className="flex items-center gap-1.5 mb-3">
            <TrendingUp className="w-3 h-3 text-muted-foreground/35" />
            <span className="text-[10px] font-bold text-muted-foreground/35 uppercase tracking-wider">Related</span>
          </div>
          <div className="space-y-2">
            <RelatedSignal symbol="TSM" change="+1.5%" aligned />
            <RelatedSignal symbol="AMD" change="+2.3%" aligned />
            <RelatedSignal symbol="MSFT" label="CapEx↑" aligned />
          </div>
        </div>

        {/* Key Execution Levels */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-1.5 mb-3">
            <Target className="w-3 h-3 text-muted-foreground/30" />
            <span className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-wider">Levels</span>
          </div>
          <div className="space-y-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <LevelRow label="支撑" value="$890" />
            <LevelRow label="阻力" value="$965" />
            <LevelRow label="止损" value="$800" danger />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/[0.02] shrink-0">
        <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-muted-foreground/35 hover:text-muted-foreground/50 hover:bg-white/[0.03] transition-all">
          <span>完整情报</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  )
}

function InsightItem({ type, title, detail, time }: { type: "confirm" | "catalyst" | "watch"; title: string; detail: string; time: string }) {
  const Icon = type === "confirm" ? CheckCircle2 : type === "catalyst" ? Zap : AlertCircle
  const iconColor = type === "confirm" ? "text-success/70" : type === "catalyst" ? "text-warning/70" : "text-muted-foreground/45"
  const bgGlow = type === "confirm" ? "from-success/8 to-success/2" : type === "catalyst" ? "from-warning/8 to-warning/2" : "from-white/[0.03] to-transparent"
  
  return (
    <div className={cn("flex items-start gap-2.5 p-2.5 rounded-lg bg-gradient-to-r", bgGlow)}>
      <Icon className={cn("w-4 h-4 mt-0.5 shrink-0", iconColor)} />
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold text-foreground/75 leading-snug">{title}</div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[10px] text-muted-foreground/35">{detail}</span>
          <span className="text-[10px] text-muted-foreground/15">·</span>
          <span className="text-[10px] text-muted-foreground/20">{time}</span>
        </div>
      </div>
    </div>
  )
}

function RelatedSignal({ symbol, change, label, aligned }: { symbol: string; change?: string; label?: string; aligned?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-2.5">
        <div className={cn("w-1 h-4 rounded-sm", aligned ? "bg-success/50" : "bg-danger/50")} />
        <span className="text-[13px] font-bold text-foreground/60">{symbol}</span>
      </div>
      <span className={cn("text-[13px] font-semibold tabular-nums", aligned ? "text-success/75" : "text-danger/75")}>
        {change || label}
      </span>
    </div>
  )
}

function LevelRow({ label, value, danger }: { label: string; value: string; danger?: boolean }) {
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className="text-[11px] text-muted-foreground/35">{label}</span>
      <span className={cn("text-[13px] font-bold tabular-nums", danger ? "text-danger/75" : "text-foreground/65")}>{value}</span>
    </div>
  )
}
