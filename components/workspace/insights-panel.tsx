"use client"

import { 
  Eye,
  CheckCircle2,
  Zap,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const thesisValidations = [
  { 
    icon: CheckCircle2, 
    iconColor: "text-success", 
    title: "台积电产能扩张", 
    detail: "验证 H200 供应链",
    time: "2h"
  },
  { 
    icon: Zap, 
    iconColor: "text-warning", 
    title: "微软 AI 投资 $50B+", 
    detail: "提升订单能见度",
    time: "4h"
  },
  { 
    icon: Eye, 
    iconColor: "text-muted-foreground", 
    title: "出口限制不确定性", 
    detail: "影响 15% 收入",
    time: "1d"
  },
]

const relatedSignals = [
  { symbol: "TSM", change: "+1.5%", up: true },
  { symbol: "AMD", change: "+2.3%", up: true },
  { symbol: "MSFT", change: "CapEx↑", up: true, text: true },
]

const keyLevels = [
  { label: "支撑", value: "$890", color: "text-foreground" },
  { label: "阻力", value: "$965", color: "text-foreground" },
  { label: "止损", value: "$800", color: "text-danger" },
]

export function InsightsPanel() {
  return (
    <aside className="w-56 shrink-0 h-full bg-[oklch(0.065_0.003_250)] border-l border-border/8 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-border/6">
        <div className="flex items-center gap-2 mb-0.5">
          <Eye className="w-4 h-4 text-muted-foreground/50" />
          <span className="text-sm font-semibold text-foreground/80">决策情报</span>
        </div>
        <p className="text-xs text-muted-foreground/40">NVDA 相关信号</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* 论点验证 */}
        <div className="px-4 py-4 border-b border-border/5">
          <span className="text-xs font-medium text-muted-foreground/50 mb-3 block">论点验证</span>
          <div className="space-y-3.5">
            {thesisValidations.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <item.icon className={cn("w-4 h-4 mt-0.5 shrink-0", item.iconColor)} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground/85 leading-snug">{item.title}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-muted-foreground/45">{item.detail}</span>
                    <span className="text-xs text-muted-foreground/30">·</span>
                    <span className="text-xs text-muted-foreground/35">{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 关联信号 */}
        <div className="px-4 py-4 border-b border-border/5">
          <span className="text-xs font-medium text-muted-foreground/50 mb-3 block">关联信号</span>
          <div className="space-y-2.5">
            {relatedSignals.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-1 h-4 rounded-sm",
                    item.up ? "bg-success/70" : "bg-danger/70"
                  )} />
                  <span className="text-sm font-semibold text-foreground/80">{item.symbol}</span>
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  item.up ? "text-success" : "text-danger"
                )}>{item.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 关键价位 */}
        <div className="px-4 py-4">
          <span className="text-xs font-medium text-muted-foreground/50 mb-3 block">关键价位</span>
          <div className="space-y-2.5">
            {keyLevels.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground/60">{item.label}</span>
                <span className={cn("text-sm font-semibold", item.color)}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border/5">
        <button className="w-full flex items-center justify-center gap-1 py-2 text-xs text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors">
          <span>完整情报</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  )
}
