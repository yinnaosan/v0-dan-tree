"use client"

import { Eye, CheckCircle2, Zap, ChevronRight, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

const thesisValidations = [
  { type: "confirm", icon: CheckCircle2, title: "台积电产能扩张", detail: "验证 H200 供应链", time: "2h" },
  { type: "catalyst", icon: Zap, title: "微软 AI 投资 $50B+", detail: "提升订单能见度", time: "4h" },
  { type: "watch", icon: Eye, title: "出口限制不确定性", detail: "影响 15% 收入", time: "1d" },
]

const relatedSignals = [
  { symbol: "TSM", change: "+1.5%", positive: true },
  { symbol: "AMD", change: "+2.3%", positive: true },
  { symbol: "MSFT", label: "CapEx↑", positive: true },
]

const keyLevels = [
  { label: "支撑", value: "$890" },
  { label: "阻力", value: "$965" },
  { label: "止损", value: "$800", danger: true },
]

export function InsightsPanel() {
  return (
    <aside className="w-52 shrink-0 h-full bg-[oklch(0.062_0.002_250)] border-l border-border/6 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-border/5">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-muted-foreground/40" />
          <span className="text-[13px] font-bold text-foreground/75 tracking-tight">决策情报</span>
        </div>
        <p className="text-[10px] text-muted-foreground/35 mt-0.5">NVDA 相关信号</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* 论点验证 */}
        <div className="px-4 py-4 border-b border-border/4">
          <span className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-wider block mb-3">论点验证</span>
          <div className="space-y-3.5">
            {thesisValidations.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <item.icon className={cn(
                  "w-4 h-4 mt-0.5 shrink-0",
                  item.type === "confirm" ? "text-success/80" : item.type === "catalyst" ? "text-warning/80" : "text-muted-foreground/50"
                )} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium text-foreground/80 leading-snug">{item.title}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] text-muted-foreground/40">{item.detail}</span>
                    <span className="text-[10px] text-muted-foreground/25">·</span>
                    <span className="text-[10px] text-muted-foreground/30">{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 关联信号 */}
        <div className="px-4 py-4 border-b border-border/4">
          <span className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-wider block mb-3">关联信号</span>
          <div className="space-y-2.5">
            {relatedSignals.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("w-1 h-4 rounded-sm", item.positive ? "bg-success/60" : "bg-danger/60")} />
                  <span className="text-[13px] font-semibold text-foreground/75">{item.symbol}</span>
                </div>
                <span className={cn("text-[13px] font-medium tabular-nums", item.positive ? "text-success" : "text-danger")}>
                  {item.change || item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 关键价位 */}
        <div className="px-4 py-4">
          <span className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-wider block mb-3">关键价位</span>
          <div className="space-y-2">
            {keyLevels.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[12px] text-muted-foreground/50">{item.label}</span>
                <span className={cn("text-[13px] font-bold tabular-nums", item.danger ? "text-danger" : "text-foreground/80")}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border/4">
        <button className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
          <span>完整情报</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  )
}
