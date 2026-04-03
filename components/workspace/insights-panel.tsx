"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Link2,
  Eye,
  Zap,
  Shield
} from "lucide-react"
import { cn } from "@/lib/utils"

// Curated insights that MATTER for THIS decision
interface DecisionInsight {
  id: string
  type: "supports" | "challenges" | "catalyst" | "monitor"
  title: string
  why: string
  source: string
  time: string
  priority: "critical" | "high" | "medium"
}

interface WatchItem {
  symbol: string
  name: string
  relationship: string
  status: "aligned" | "diverging" | "neutral"
  signal: string
}

const curatedInsights: DecisionInsight[] = [
  {
    id: "1",
    type: "supports",
    title: "台积电产能扩张超预期",
    why: "验证 H200 供应链可行性，支持看多论点",
    source: "供应链分析",
    time: "2h",
    priority: "critical",
  },
  {
    id: "2",
    type: "catalyst",
    title: "微软 Azure $50B+ AI 投资",
    why: "NVDA 是核心受益者，提升下季订单能见度",
    source: "Bloomberg",
    time: "4h",
    priority: "high",
  },
  {
    id: "3",
    type: "monitor",
    title: "中国出口限制不确定性",
    why: "可能影响 15% 收入，需持续监控政策",
    source: "政策追踪",
    time: "1d",
    priority: "medium",
  },
]

const watchItems: WatchItem[] = [
  { 
    symbol: "TSM", 
    name: "台积电",
    relationship: "核心供应商",
    status: "aligned",
    signal: "+1.5% 产能扩张"
  },
  { 
    symbol: "AMD", 
    name: "超威半导体",
    relationship: "竞争对手",
    status: "aligned",
    signal: "+2.3% 板块共振"
  },
  { 
    symbol: "MSFT", 
    name: "微软",
    relationship: "大客户",
    status: "aligned",
    signal: "AI CapEx 上调"
  },
]

export function InsightsPanel() {
  return (
    <aside className="w-64 h-full bg-[oklch(0.07_0.003_250)] border-l border-border/15 flex flex-col">
      {/* Header */}
      <div className="px-5 py-5 border-b border-border/15">
        <div className="flex items-center gap-2.5 mb-2">
          <Sparkles className="w-4 h-4 text-primary/60" />
          <span className="text-sm font-semibold text-foreground/80 tracking-wide">
            决策情报
          </span>
        </div>
        <p className="text-sm text-muted-foreground/60 leading-relaxed">
          针对当前 NVDA 决策预筛的相关信号
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        
        {/* Section 1: What Supports or Challenges */}
        <div className="p-5 border-b border-border/10">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-4 h-4 text-muted-foreground/50" />
            <span className="text-sm font-semibold text-foreground/70">
              论点验证
            </span>
          </div>
          <div className="space-y-4">
            {curatedInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>

        {/* Section 2: Related Assets to Watch */}
        <div className="p-5 border-b border-border/10">
          <div className="flex items-center gap-2 mb-4">
            <Link2 className="w-4 h-4 text-muted-foreground/50" />
            <span className="text-sm font-semibold text-foreground/70">
              关联监控
            </span>
          </div>
          <div className="space-y-3">
            {watchItems.map((item) => (
              <WatchItemRow key={item.symbol} item={item} />
            ))}
          </div>
        </div>

        {/* Section 3: Key Levels */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-muted-foreground/50" />
            <span className="text-sm font-semibold text-foreground/70">
              执行参考
            </span>
          </div>
          <div className="bg-secondary/15 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground/70">支撑位</span>
              <span className="text-base font-semibold text-foreground/80">$890</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground/70">阻力位</span>
              <span className="text-base font-semibold text-foreground/80">$965</span>
            </div>
            <div className="h-px bg-border/15 my-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground/70">成交量</span>
              <span className="text-sm font-medium text-success/80">高于均值</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground/70">波动率</span>
              <span className="text-sm font-medium text-muted-foreground/60">正常</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border/10">
        <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors rounded-xl hover:bg-secondary/15">
          <span>查看完整情报</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  )
}

function InsightCard({ insight }: { insight: DecisionInsight }) {
  const typeConfig = {
    supports: { 
      icon: CheckCircle2, 
      color: "text-success", 
      bgColor: "bg-success/10",
      borderColor: "border-success/25",
      label: "支持"
    },
    challenges: { 
      icon: AlertCircle, 
      color: "text-danger", 
      bgColor: "bg-danger/10",
      borderColor: "border-danger/25",
      label: "挑战"
    },
    catalyst: { 
      icon: Zap, 
      color: "text-primary", 
      bgColor: "bg-primary/10",
      borderColor: "border-primary/25",
      label: "催化"
    },
    monitor: { 
      icon: Eye, 
      color: "text-warning", 
      bgColor: "bg-warning/10",
      borderColor: "border-warning/25",
      label: "监控"
    },
  }

  const priorityConfig = {
    critical: "bg-danger/20 text-danger",
    high: "bg-warning/20 text-warning",
    medium: "bg-secondary/40 text-muted-foreground",
  }

  const config = typeConfig[insight.type]
  const Icon = config.icon

  return (
    <div className={cn(
      "p-4 rounded-xl border transition-colors cursor-pointer hover:border-opacity-50",
      config.bgColor,
      config.borderColor
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <Icon className={cn("w-4 h-4", config.color)} />
          <span className={cn("text-sm font-semibold", config.color)}>
            {config.label}
          </span>
        </div>
        {insight.priority === "critical" && (
          <span className={cn("text-xs font-semibold px-2 py-1 rounded-md", priorityConfig[insight.priority])}>
            关键
          </span>
        )}
      </div>

      {/* Title - LARGER */}
      <h4 className="text-base font-semibold text-foreground/85 leading-snug mb-2">
        {insight.title}
      </h4>

      {/* Why it matters - READABLE */}
      <p className="text-sm text-muted-foreground/70 leading-relaxed mb-3">
        {insight.why}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground/50">
        <span>{insight.source}</span>
        <span>·</span>
        <span>{insight.time}</span>
      </div>
    </div>
  )
}

function WatchItemRow({ item }: { item: WatchItem }) {
  const statusConfig = {
    aligned: { color: "bg-success/50", text: "text-success/80" },
    diverging: { color: "bg-warning/50", text: "text-warning/80" },
    neutral: { color: "bg-muted-foreground/30", text: "text-muted-foreground/60" },
  }

  const config = statusConfig[item.status]

  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/15 transition-colors cursor-pointer">
      {/* Status Indicator */}
      <div className={cn("w-1.5 h-10 rounded-full shrink-0 mt-0.5", config.color)} />
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base font-bold text-foreground/80">{item.symbol}</span>
          <span className="text-sm text-muted-foreground/50">{item.name}</span>
        </div>
        <p className="text-sm text-muted-foreground/60 mb-1">{item.relationship}</p>
        <p className={cn("text-sm font-medium", config.text)}>
          {item.signal}
        </p>
      </div>
    </div>
  )
}
