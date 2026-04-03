"use client"

import { 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Eye,
  Zap,
  Link2
} from "lucide-react"
import { cn } from "@/lib/utils"

// Curated insights that MATTER for THIS decision
interface DecisionInsight {
  id: string
  type: "supports" | "challenges" | "catalyst" | "monitor"
  title: string
  why: string
  time: string
}

interface WatchItem {
  symbol: string
  status: "aligned" | "diverging" | "neutral"
  signal: string
}

const curatedInsights: DecisionInsight[] = [
  {
    id: "1",
    type: "supports",
    title: "台积电产能扩张",
    why: "验证 H200 供应链",
    time: "2h",
  },
  {
    id: "2",
    type: "catalyst",
    title: "微软 AI 投资 $50B+",
    why: "提升订单能见度",
    time: "4h",
  },
  {
    id: "3",
    type: "monitor",
    title: "出口限制不确定性",
    why: "影响 15% 收入",
    time: "1d",
  },
]

const watchItems: WatchItem[] = [
  { symbol: "TSM", status: "aligned", signal: "+1.5%" },
  { symbol: "AMD", status: "aligned", signal: "+2.3%" },
  { symbol: "MSFT", status: "aligned", signal: "CapEx↑" },
]

export function InsightsPanel() {
  return (
    <aside className="w-52 h-full bg-[oklch(0.075_0.003_250)] border-l border-border/12 flex flex-col">
      {/* Header - Quiet and minimal */}
      <div className="px-4 py-5 border-b border-border/10">
        <div className="flex items-center gap-2 mb-1">
          <Eye className="w-4 h-4 text-muted-foreground/50" />
          <span className="text-sm font-semibold text-foreground/70">
            决策情报
          </span>
        </div>
        <p className="text-sm text-muted-foreground/50">
          NVDA 相关信号
        </p>
      </div>

      {/* Main Content - Curated, not stacked */}
      <div className="flex-1 overflow-y-auto">
        
        {/* Section 1: Thesis Check */}
        <div className="p-4 border-b border-border/8">
          <span className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider mb-3 block">
            论点验证
          </span>
          <div className="space-y-3">
            {curatedInsights.map((insight) => (
              <InsightRow key={insight.id} insight={insight} />
            ))}
          </div>
        </div>

        {/* Section 2: Related Watch */}
        <div className="p-4 border-b border-border/8">
          <span className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider mb-3 block">
            关联信号
          </span>
          <div className="space-y-2">
            {watchItems.map((item) => (
              <WatchRow key={item.symbol} item={item} />
            ))}
          </div>
        </div>

        {/* Section 3: Key Levels - Minimal */}
        <div className="p-4">
          <span className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider mb-3 block">
            关键价位
          </span>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground/60">支撑</span>
              <span className="text-sm font-semibold text-foreground/70">$890</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground/60">阻力</span>
              <span className="text-sm font-semibold text-foreground/70">$965</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground/60">止损</span>
              <span className="text-sm font-semibold text-danger/70">$800</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border/8">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors rounded-lg hover:bg-secondary/10">
          <span>完整情报</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  )
}

function InsightRow({ insight }: { insight: DecisionInsight }) {
  const typeConfig = {
    supports: { icon: CheckCircle2, color: "text-success/70" },
    challenges: { icon: AlertCircle, color: "text-danger/70" },
    catalyst: { icon: Zap, color: "text-primary/70" },
    monitor: { icon: Eye, color: "text-warning/70" },
  }

  const config = typeConfig[insight.type]
  const Icon = config.icon

  return (
    <div className="group cursor-pointer">
      <div className="flex items-start gap-2.5">
        <Icon className={cn("w-4 h-4 mt-0.5 shrink-0", config.color)} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground/75 leading-snug mb-0.5 group-hover:text-foreground/90 transition-colors">
            {insight.title}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground/50">{insight.why}</span>
            <span className="text-xs text-muted-foreground/40">·</span>
            <span className="text-xs text-muted-foreground/40">{insight.time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function WatchRow({ item }: { item: WatchItem }) {
  const statusColor = {
    aligned: "bg-success/50",
    diverging: "bg-warning/50",
    neutral: "bg-muted-foreground/30",
  }

  return (
    <div className="flex items-center gap-2.5 py-1.5 group cursor-pointer">
      <div className={cn("w-1 h-4 rounded-full shrink-0", statusColor[item.status])} />
      <span className="text-sm font-semibold text-foreground/70 group-hover:text-foreground/90 transition-colors">
        {item.symbol}
      </span>
      <span className="text-sm text-success/60 ml-auto">{item.signal}</span>
    </div>
  )
}
