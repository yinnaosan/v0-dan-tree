"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight,
  Shield,
  Target,
  Zap,
  BarChart3,
  FileText,
  ExternalLink,
  ChevronRight,
  MoreHorizontal
} from "lucide-react"
import { cn } from "@/lib/utils"

export function DecisionCanvas() {
  return (
    <div className="flex-1 min-w-0 h-full bg-background overflow-y-auto">
      <div className="max-w-4xl mx-auto px-8 py-6">
        {/* Decision Header */}
        <DecisionHeader />
        
        {/* Main Content Cards */}
        <div className="mt-6 space-y-4">
          <ThesisBlock />
          <TimingBlock />
          <AlertBlock />
          <HistoryBlock />
        </div>
      </div>
    </div>
  )
}

function DecisionHeader() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Asset Badge */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <span className="text-lg font-bold text-success">N</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-foreground">NVDA</h1>
                <span className="text-xs text-muted-foreground">NASDAQ</span>
              </div>
              <p className="text-xs text-muted-foreground">NVIDIA Corporation</p>
            </div>
          </div>
          
          {/* Session Type */}
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-foreground">Thesis 会话</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md hover:bg-secondary transition-colors">
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-1.5 rounded-md hover:bg-secondary transition-colors">
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Status Row */}
      <div className="mt-5 flex items-center gap-6">
        {/* Thesis Stance */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-success/10">
            <TrendingUp className="w-3.5 h-3.5 text-success" />
            <span className="text-xs font-semibold text-success">Bullish</span>
          </div>
          <span className="text-[10px] text-muted-foreground">Thesis 立场</span>
        </div>

        {/* Readiness */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "w-1.5 h-4 rounded-sm",
                    i <= 4 ? "bg-primary" : "bg-secondary"
                  )}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-foreground">4/5</span>
          </div>
          <span className="text-[10px] text-muted-foreground">Readiness</span>
        </div>

        {/* Action Bias */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">加仓</span>
          </div>
          <span className="text-[10px] text-muted-foreground">Action Bias</span>
        </div>

        {/* Alert Level */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-warning/10">
            <AlertTriangle className="w-3.5 h-3.5 text-warning" />
            <span className="text-xs font-medium text-warning">Medium</span>
          </div>
          <span className="text-[10px] text-muted-foreground">Alert</span>
        </div>

        {/* Change Marker */}
        <div className="flex items-center gap-2 ml-auto">
          <div className="flex items-center gap-1 text-success">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">+12%</span>
          </div>
          <span className="text-[10px] text-muted-foreground">vs 上周</span>
        </div>
      </div>

      {/* Last Updated */}
      <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-muted-foreground">
        <Clock className="w-3 h-3" />
        <span className="text-[10px]">最近更新: 今天 14:32 · 由 AI 自动更新</span>
      </div>
    </div>
  )
}

function ThesisBlock() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">Thesis</h2>
        </div>
        <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          详细分析
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Key Thesis Summary */}
        <div className="mb-5">
          <p className="text-sm text-foreground leading-relaxed">
            NVIDIA 作为 AI 基础设施的核心供应商，在数据中心 GPU 市场占据主导地位。
            H100/H200 产能持续扩张，云厂商 CapEx 支出强劲支撑需求。
            长期看好 AI 训练与推理双轮驱动的增长逻辑。
          </p>
        </div>

        {/* Evidence Units */}
        <div className="grid grid-cols-4 gap-3">
          <StatusUnit
            label="Evidence"
            value="Strong"
            status="positive"
            icon={CheckCircle2}
            detail="12/15 指标正向"
          />
          <StatusUnit
            label="Gate"
            value="Passed"
            status="positive"
            icon={Shield}
            detail="4/4 门槛通过"
          />
          <StatusUnit
            label="Source"
            value="Verified"
            status="neutral"
            icon={FileText}
            detail="8 来源确认"
          />
          <StatusUnit
            label="Fragility"
            value="Low"
            status="positive"
            icon={BarChart3}
            detail="稳定性 87%"
          />
        </div>

        {/* Key Evidence Points */}
        <div className="mt-5 pt-4 border-t border-border">
          <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
            关键证据
          </div>
          <div className="space-y-2">
            {[
              { text: "Q3 数据中心收入同比增长 279%", trend: "up" },
              { text: "H200 供不应求，交付周期 6-9 个月", trend: "up" },
              { text: "主要云厂商 2024 CapEx 指引上调", trend: "up" },
              { text: "竞品 AMD MI300X 份额仍低于预期", trend: "neutral" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.trend === "up" ? (
                  <ArrowUpRight className="w-3 h-3 text-success shrink-0" />
                ) : (
                  <Minus className="w-3 h-3 text-muted-foreground shrink-0" />
                )}
                <span className="text-xs text-secondary-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TimingBlock() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">Timing</h2>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-success/10">
          <span className="text-[10px] font-semibold text-success">适合介入</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Timing Indicators */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="text-center p-3 bg-secondary/30 rounded-lg">
            <div className="text-2xl font-bold text-success mb-1">72</div>
            <div className="text-[10px] text-muted-foreground">Readiness Score</div>
          </div>
          <div className="text-center p-3 bg-secondary/30 rounded-lg">
            <div className="text-2xl font-bold text-foreground mb-1">$890</div>
            <div className="text-[10px] text-muted-foreground">Entry Zone</div>
          </div>
          <div className="text-center p-3 bg-secondary/30 rounded-lg">
            <div className="text-2xl font-bold text-warning mb-1">14d</div>
            <div className="text-[10px] text-muted-foreground">Next Catalyst</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-4">
            {[
              { date: "2024-02-21", event: "Q4 财报发布", status: "upcoming", importance: "high" },
              { date: "2024-03-18", event: "GTC 大会", status: "upcoming", importance: "high" },
              { date: "2024-01-08", event: "CES 主题演讲", status: "passed", importance: "medium" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 relative">
                <div className={cn(
                  "w-[15px] h-[15px] rounded-full border-2 shrink-0 z-10",
                  item.status === "upcoming" 
                    ? "bg-primary/20 border-primary" 
                    : "bg-secondary border-border"
                )} />
                <div className="flex-1 -mt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground">{item.event}</span>
                    {item.importance === "high" && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-warning/10 text-warning font-medium">
                        重要
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AlertBlock() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <h2 className="text-sm font-semibold text-foreground">Alert</h2>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-warning/10 text-warning font-medium">
            2 Active
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {[
          {
            severity: "medium",
            title: "估值压力",
            description: "当前 P/E 65x 高于历史均值，市场预期充分",
            impact: "可能限制短期上行空间",
          },
          {
            severity: "low",
            title: "地缘风险",
            description: "中美半导体出口管制持续收紧",
            impact: "中国市场收入可能承压",
          },
        ].map((alert, i) => (
          <div
            key={i}
            className={cn(
              "p-3 rounded-lg border-l-2",
              alert.severity === "medium"
                ? "bg-warning/5 border-warning"
                : "bg-secondary/30 border-muted-foreground"
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "text-[9px] font-semibold uppercase tracking-wider",
                    alert.severity === "medium" ? "text-warning" : "text-muted-foreground"
                  )}>
                    {alert.severity}
                  </span>
                  <span className="text-xs font-medium text-foreground">{alert.title}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{alert.description}</p>
                <p className="text-[10px] text-secondary-foreground">影响: {alert.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HistoryBlock() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">History</h2>
        </div>
        <span className="text-[10px] text-muted-foreground">过去 30 天变化</span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Comparison */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-secondary/30 rounded-lg">
            <div className="text-[10px] text-muted-foreground mb-2">上期 Thesis</div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-success" />
              <span className="text-sm font-medium text-foreground">Bullish</span>
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">Readiness 3/5</div>
          </div>
          <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-[10px] text-muted-foreground mb-2">当前 Thesis</div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-success" />
              <span className="text-sm font-medium text-foreground">Bullish</span>
            </div>
            <div className="text-[10px] text-primary mt-1">Readiness 4/5 ↑</div>
          </div>
        </div>

        {/* Delta Changes */}
        <div className="space-y-2">
          <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
            关键变化
          </div>
          {[
            { label: "Evidence 强度", prev: "8/15", current: "12/15", change: "+4", positive: true },
            { label: "风险等级", prev: "High", current: "Medium", change: "↓", positive: true },
            { label: "行动建议", prev: "观望", current: "加仓", change: "升级", positive: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
              <span className="text-xs text-secondary-foreground">{item.label}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{item.prev}</span>
                <ChevronRight className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs font-medium text-foreground">{item.current}</span>
                <span className={cn(
                  "text-[10px] font-medium px-1.5 py-0.5 rounded",
                  item.positive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                )}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatusUnit({
  label,
  value,
  status,
  icon: Icon,
  detail,
}: {
  label: string
  value: string
  status: "positive" | "negative" | "neutral"
  icon: React.ElementType
  detail: string
}) {
  const statusColors = {
    positive: "text-success bg-success/10",
    negative: "text-danger bg-danger/10",
    neutral: "text-muted-foreground bg-secondary/50",
  }

  return (
    <div className="p-3 bg-secondary/30 rounded-lg">
      <div className="flex items-center gap-1.5 mb-2">
        <Icon className={cn("w-3.5 h-3.5", status === "positive" ? "text-success" : status === "negative" ? "text-danger" : "text-muted-foreground")} />
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</span>
      </div>
      <div className={cn("text-xs font-semibold px-2 py-0.5 rounded inline-block", statusColors[status])}>
        {value}
      </div>
      <div className="text-[10px] text-muted-foreground mt-1.5">{detail}</div>
    </div>
  )
}
