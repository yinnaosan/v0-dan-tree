"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  ExternalLink, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Link2
} from "lucide-react"
import { cn } from "@/lib/utils"

// Curated context that matters for THIS decision, not generic info
interface ContextualInsight {
  id: string
  type: "confirmation" | "contradiction" | "catalyst" | "risk"
  headline: string
  explanation: string
  source: string
  time: string
  impact: "high" | "medium"
}

interface LinkedSignal {
  symbol: string
  relationship: string
  direction: "aligned" | "divergent"
  detail: string
}

// Pre-filtered, decision-relevant insights
const contextualInsights: ContextualInsight[] = [
  {
    id: "1",
    type: "confirmation",
    headline: "Blackwell 供应链信号强劲",
    explanation: "TSM 产能预订超出预期，验证 NVDA 需求预测。这支持当前看多论点。",
    source: "Supply Chain Analysis",
    time: "2h",
    impact: "high",
  },
  {
    id: "2",
    type: "catalyst",
    headline: "Azure AI 基础设施投资",
    explanation: "微软确认 $50B+ AI 基础设施投资，NVDA 是主要受益者。下季度订单能见度提升。",
    source: "Bloomberg",
    time: "4h",
    impact: "high",
  },
  {
    id: "3",
    type: "risk",
    headline: "中国市场准入不确定性",
    explanation: "新出口限制可能影响 15% 收入。需要监控政策动向。",
    source: "Policy Watch",
    time: "1d",
    impact: "medium",
  },
]

// Signals from related assets that confirm or challenge the thesis
const linkedSignals: LinkedSignal[] = [
  { 
    symbol: "TSM", 
    relationship: "核心供应商",
    direction: "aligned",
    detail: "+1.5% — 产能扩张预期"
  },
  { 
    symbol: "AMD", 
    relationship: "竞争对手",
    direction: "aligned",
    detail: "+2.3% — AI GPU 板块共振"
  },
  { 
    symbol: "SMCI", 
    relationship: "服务器合作伙伴",
    direction: "divergent",
    detail: "-1.2% — 财报审计延迟"
  },
]

// Key technical levels that matter for execution
const executionContext = {
  support: "$890",
  resistance: "$965",
  volumeProfile: "Above average",
  volatility: "Normal",
}

export function InsightsPanel() {
  return (
    <aside className="w-56 h-full bg-[oklch(0.055_0.002_250)] border-l border-border/10 flex flex-col">
      {/* Header - Purpose Statement */}
      <div className="px-4 py-4 border-b border-border/10">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-primary/50" />
          <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
            Decision Context
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground/50 leading-relaxed">
          Pre-filtered signals relevant to your current NVDA decision
        </p>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        
        {/* Section 1: What Confirms or Challenges the Thesis */}
        <div className="p-4 border-b border-border/8">
          <div className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-widest mb-3">
            Thesis Check
          </div>
          <div className="space-y-3">
            {contextualInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>

        {/* Section 2: Linked Asset Signals */}
        <div className="p-4 border-b border-border/8">
          <div className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-widest mb-3">
            Related Signals
          </div>
          <div className="space-y-2">
            {linkedSignals.map((signal) => (
              <LinkedSignalRow key={signal.symbol} signal={signal} />
            ))}
          </div>
        </div>

        {/* Section 3: Execution Context */}
        <div className="p-4">
          <div className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-widest mb-3">
            Execution Levels
          </div>
          <div className="bg-secondary/8 rounded-lg p-3 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-muted-foreground/50">Support</span>
              <span className="text-xs font-medium text-foreground/60">{executionContext.support}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-muted-foreground/50">Resistance</span>
              <span className="text-xs font-medium text-foreground/60">{executionContext.resistance}</span>
            </div>
            <div className="h-px bg-border/8 my-1" />
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-muted-foreground/50">Volume</span>
              <span className="text-[11px] text-success/60">{executionContext.volumeProfile}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-muted-foreground/50">Volatility</span>
              <span className="text-[11px] text-muted-foreground/50">{executionContext.volatility}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Expand Action */}
      <div className="p-3 border-t border-border/8">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors rounded-lg hover:bg-secondary/10">
          <span>Full Intelligence View</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  )
}

function InsightCard({ insight }: { insight: ContextualInsight }) {
  const typeConfig = {
    confirmation: { 
      icon: CheckCircle2, 
      color: "text-success/70", 
      bgColor: "bg-success/8",
      borderColor: "border-success/20",
      label: "Confirms"
    },
    contradiction: { 
      icon: AlertCircle, 
      color: "text-danger/70", 
      bgColor: "bg-danger/8",
      borderColor: "border-danger/20",
      label: "Contradicts"
    },
    catalyst: { 
      icon: TrendingUp, 
      color: "text-primary/70", 
      bgColor: "bg-primary/8",
      borderColor: "border-primary/20",
      label: "Catalyst"
    },
    risk: { 
      icon: AlertCircle, 
      color: "text-warning/70", 
      bgColor: "bg-warning/8",
      borderColor: "border-warning/20",
      label: "Risk"
    },
  }

  const config = typeConfig[insight.type]
  const Icon = config.icon

  return (
    <div className={cn(
      "p-3 rounded-lg border transition-colors cursor-pointer",
      config.bgColor,
      config.borderColor,
      "hover:border-opacity-40"
    )}>
      {/* Type Badge */}
      <div className="flex items-center gap-1.5 mb-2">
        <Icon className={cn("w-3 h-3", config.color)} />
        <span className={cn("text-[10px] font-semibold uppercase tracking-wider", config.color)}>
          {config.label}
        </span>
        {insight.impact === "high" && (
          <span className="ml-auto text-[9px] font-medium text-foreground/40 bg-foreground/5 px-1.5 py-0.5 rounded">
            High Impact
          </span>
        )}
      </div>

      {/* Headline */}
      <h4 className="text-xs font-medium text-foreground/75 leading-snug mb-1.5">
        {insight.headline}
      </h4>

      {/* Explanation - Why it matters */}
      <p className="text-[11px] text-muted-foreground/55 leading-relaxed mb-2">
        {insight.explanation}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/35">
        <span>{insight.source}</span>
        <span>·</span>
        <span>{insight.time}</span>
      </div>
    </div>
  )
}

function LinkedSignalRow({ signal }: { signal: LinkedSignal }) {
  const isAligned = signal.direction === "aligned"

  return (
    <div className="flex items-start gap-2.5 p-2 rounded-md hover:bg-secondary/8 transition-colors cursor-pointer group">
      {/* Alignment Indicator */}
      <div className={cn(
        "w-1 h-8 rounded-full shrink-0 mt-0.5",
        isAligned ? "bg-success/40" : "bg-warning/40"
      )} />
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-sm font-semibold text-foreground/70">{signal.symbol}</span>
          <Link2 className="w-2.5 h-2.5 text-muted-foreground/30" />
          <span className="text-[10px] text-muted-foreground/45">{signal.relationship}</span>
        </div>
        <p className={cn(
          "text-[11px] leading-snug",
          isAligned ? "text-success/60" : "text-warning/60"
        )}>
          {signal.detail}
        </p>
      </div>
    </div>
  )
}
