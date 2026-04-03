"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight,
  Shield,
  Target,
  Zap,
  ChevronRight,
  MoreHorizontal,
  Activity
} from "lucide-react"
import { cn } from "@/lib/utils"

export function DecisionCanvas() {
  return (
    <main className="flex-1 min-w-0 h-full bg-background overflow-y-auto">
      <div className="max-w-4xl mx-auto px-10 py-8">
        {/* Primary Decision Header - THE FOCAL POINT */}
        <DecisionHeader />
        
        {/* Decision Spine - Guided Flow */}
        <div className="mt-8 space-y-6">
          <ThesisBlock />
          <TimingBlock />
          <RiskBlock />
          <HistoryBlock />
        </div>
      </div>
    </main>
  )
}

function DecisionHeader() {
  return (
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Primary Decision Strip - What matters most */}
      <div className="px-8 py-6 bg-gradient-to-r from-card to-secondary/10">
        <div className="flex items-start justify-between">
          {/* Left: Asset Identity */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-success/12 flex items-center justify-center border border-success/25">
              <span className="text-2xl font-bold text-success">N</span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-foreground tracking-tight">NVIDIA</h1>
                <span className="text-sm text-muted-foreground/60">NVDA · NASDAQ</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary/70" />
                <span className="text-sm text-muted-foreground">Thesis Session · 活跃</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-muted-foreground/60" />
            </button>
          </div>
        </div>
      </div>

      {/* System Judgment Strip - THE ANSWER */}
      <div className="px-8 py-5 border-t border-border/50 bg-secondary/5">
        <div className="flex items-center justify-between">
          {/* Stance - Primary Signal */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-success/12 border border-success/25">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-lg font-bold text-success">Bullish</span>
            </div>
            
            {/* Readiness Meter */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-2 h-6 rounded-sm transition-colors",
                      i <= 4 ? "bg-primary" : "bg-secondary/40"
                    )}
                  />
                ))}
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">4/5</span>
                <span className="text-sm text-muted-foreground ml-1.5">准备度</span>
              </div>
            </div>
          </div>

          {/* Action + Risk */}
          <div className="flex items-center gap-4">
            {/* Recommended Action */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-base font-semibold text-primary">可加仓</span>
            </div>
            
            {/* Alert Level */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-warning/10 border border-warning/20">
              <AlertTriangle className="w-4 h-4 text-warning" />
              <span className="text-base font-semibold text-warning">中风险</span>
            </div>

            {/* Delta */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-success/8">
              <ArrowUpRight className="w-4 h-4 text-success" />
              <span className="text-base font-semibold text-success">+12%</span>
              <span className="text-xs text-muted-foreground">vs 上周</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="px-8 py-2 bg-muted/30 flex items-center gap-2 text-muted-foreground/60">
        <Clock className="w-3 h-3" />
        <span className="text-xs">更新: 今天 14:32 · AI 自动同步</span>
      </div>
    </section>
  )
}

function ThesisBlock() {
  return (
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">核心论点</h2>
            <span className="text-sm text-muted-foreground">为什么看好这个标的</span>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          详细
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Main Thesis */}
        <p className="text-lg text-foreground leading-loose mb-8">
          NVIDIA 作为 AI 基础设施的核心供应商，在数据中心 GPU 市场占据主导地位。
          H100/H200 产能持续扩张，云厂商 CapEx 支出强劲支撑需求。
          长期看好 AI 训练与推理双轮驱动的增长逻辑。
        </p>

        {/* Evidence Grid */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          <EvidenceCard
            label="Evidence"
            value="Strong"
            status="positive"
            detail="12/15 指标正向"
          />
          <EvidenceCard
            label="Gate"
            value="Passed"
            status="positive"
            detail="4/4 门槛通过"
          />
          <EvidenceCard
            label="Sources"
            value="Verified"
            status="neutral"
            detail="8 来源确认"
          />
          <EvidenceCard
            label="Stability"
            value="High"
            status="positive"
            detail="稳定性 87%"
          />
        </div>

        {/* Key Evidence Points */}
        <div className="pt-6 border-t border-border/50">
          <h3 className="text-base font-semibold text-foreground mb-4">关键证据</h3>
          <div className="space-y-4">
            {[
              { text: "Q3 数据中心收入同比增长 279%，超预期", trend: "up" },
              { text: "H200 供不应求，交付周期 6-9 个月", trend: "up" },
              { text: "主要云厂商 2024 CapEx 指引上调 15%", trend: "up" },
              { text: "竞品 AMD MI300X 份额仍低于预期", trend: "neutral" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                {item.trend === "up" ? (
                  <ArrowUpRight className="w-5 h-5 text-success shrink-0" />
                ) : (
                  <Activity className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
                <span className="text-base text-foreground/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EvidenceCard({ label, value, status, detail }: {
  label: string
  value: string
  status: "positive" | "neutral" | "negative"
  detail: string
}) {
  return (
    <div className={cn(
      "p-5 rounded-xl border",
      status === "positive" ? "bg-success/5 border-success/20" :
      status === "negative" ? "bg-danger/5 border-danger/20" :
      "bg-secondary/30 border-border/50"
    )}>
      <div className="text-sm text-muted-foreground mb-1.5">{label}</div>
      <div className={cn(
        "text-xl font-bold mb-1",
        status === "positive" ? "text-success" :
        status === "negative" ? "text-danger" : "text-foreground"
      )}>
        {value}
      </div>
      <div className="text-sm text-muted-foreground/80">{detail}</div>
    </div>
  )
}

function TimingBlock() {
  return (
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">时机与行动</h2>
            <span className="text-sm text-muted-foreground">何时以及如何操作</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-success/10 border border-success/20">
          <Zap className="w-4 h-4 text-success" />
          <span className="text-base font-semibold text-success">适合介入</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          <MetricCard label="Readiness" value="72" unit="/100" highlight />
          <MetricCard label="Entry Zone" value="$890" unit="" />
          <MetricCard label="Target" value="$1,050" unit="" />
          <MetricCard label="Next Catalyst" value="14" unit="天" warning />
        </div>

        {/* Action Recommendation */}
        <div className="p-5 mb-8 rounded-xl bg-primary/8 border border-primary/20">
          <div className="flex items-center gap-4">
            <Zap className="w-6 h-6 text-primary" />
            <div>
              <span className="text-base font-medium text-foreground">建议操作：</span>
              <span className="text-lg font-bold text-primary ml-2">分 3 批在 $880-900 区间建仓</span>
            </div>
          </div>
        </div>

        {/* Catalyst Timeline */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-5">催化剂时间线</h3>
          <div className="relative">
            <div className="absolute left-3 top-3 bottom-3 w-px bg-border/50" />
            <div className="space-y-4">
              {[
                { date: "2024-02-21", event: "Q4 财报发布", status: "upcoming", importance: "high", daysAway: "14天" },
                { date: "2024-03-18", event: "GTC 大会", status: "upcoming", importance: "high", daysAway: "39天" },
                { date: "2024-01-08", event: "CES 主题演讲", status: "passed", importance: "medium", daysAway: "已过" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 relative pl-6">
                  <div className={cn(
                    "absolute left-0 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10",
                    item.status === "upcoming" 
                      ? "bg-primary/15 border-primary" 
                      : "bg-secondary/40 border-border/50"
                  )}>
                    {item.status === "upcoming" && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <div className="flex-1 flex items-center justify-between py-1">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "text-base font-medium",
                          item.status === "upcoming" ? "text-foreground" : "text-muted-foreground"
                        )}>{item.event}</span>
                        {item.importance === "high" && item.status === "upcoming" && (
                          <span className="text-sm px-2 py-1 rounded-md bg-warning/15 text-warning font-semibold">重要</span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <span className={cn(
                      "text-base font-semibold",
                      item.status === "upcoming" ? "text-primary" : "text-muted-foreground/50"
                    )}>{item.daysAway}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({ label, value, unit, highlight, warning }: {
  label: string
  value: string
  unit: string
  highlight?: boolean
  warning?: boolean
}) {
  return (
    <div className={cn(
      "p-5 rounded-xl text-center",
      highlight ? "bg-success/8 border border-success/20" :
      warning ? "bg-warning/8 border border-warning/20" :
      "bg-secondary/30"
    )}>
      <div className={cn(
        "text-3xl font-bold mb-1.5",
        highlight ? "text-success" : warning ? "text-warning" : "text-foreground"
      )}>
        {value}<span className="text-base font-medium text-muted-foreground">{unit}</span>
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  )
}

function RiskBlock() {
  const risks = [
    {
      severity: "high",
      title: "估值风险",
      description: "当前 Forward P/E 65x 处于历史 95 分位，隐含增长预期极高",
      probability: 35,
      mitigation: "设置 $800 止损线，分批建仓"
    },
    {
      severity: "medium",
      title: "地缘政治",
      description: "中美半导体出口管制持续升级，H20 芯片面临潜在禁令",
      probability: 45,
      mitigation: "关注政策进展，设置触发规则"
    },
  ]

  const disciplineChecklist = [
    { label: "止损线已设定", checked: true, detail: "$800 (-10%)" },
    { label: "仓位符合预算", checked: true, detail: "5% 组合占比" },
    { label: "催化剂已评估", checked: true, detail: "Q4 财报前" },
    { label: "失效条件已定义", checked: false, detail: "待完善" },
  ]

  return (
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center relative">
            <Shield className="w-5 h-5 text-warning" />
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-danger flex items-center justify-center">
              <span className="text-xs font-bold text-white">2</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">风险纪律</h2>
            <span className="text-sm text-muted-foreground">必须遵守的边界</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm px-3 py-1.5 rounded-lg bg-danger/10 text-danger font-semibold">1 Critical</span>
          <span className="text-sm px-3 py-1.5 rounded-lg bg-warning/10 text-warning font-semibold">1 High</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Risk Score Bar */}
        <div className="mb-8 p-5 rounded-xl bg-secondary/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-medium text-foreground">整体风险评估</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-warning">68</span>
              <span className="text-base text-muted-foreground">/100 中等偏高</span>
            </div>
          </div>
          <div className="h-3 rounded-full bg-secondary/50 overflow-hidden">
            <div className="h-full rounded-full bg-warning" style={{ width: "68%" }} />
          </div>
        </div>

        {/* Risk Items */}
        <div className="space-y-4 mb-8">
          {risks.map((risk, i) => (
            <div key={i} className={cn(
              "p-5 rounded-xl border",
              risk.severity === "high" ? "bg-danger/5 border-danger/20" : "bg-warning/5 border-warning/20"
            )}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={cn(
                    "w-5 h-5",
                    risk.severity === "high" ? "text-danger" : "text-warning"
                  )} />
                  <span className="text-base font-bold text-foreground">{risk.title}</span>
                </div>
                <span className={cn(
                  "text-sm px-2.5 py-1 rounded-lg font-semibold",
                  risk.severity === "high" ? "bg-danger/15 text-danger" : "bg-warning/15 text-warning"
                )}>
                  P: {risk.probability}%
                </span>
              </div>
              <p className="text-base text-muted-foreground mb-3 leading-relaxed">{risk.description}</p>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-base text-primary">{risk.mitigation}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Discipline Checklist */}
        <div className="pt-6 border-t border-border/50">
          <h3 className="text-base font-semibold text-foreground mb-4">决策纪律检查</h3>
          <div className="grid grid-cols-2 gap-4">
            {disciplineChecklist.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center",
                  item.checked ? "bg-success/20" : "bg-warning/20"
                )}>
                  {item.checked ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-warning" />
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-base text-foreground">{item.label}</span>
                  <span className="text-sm text-muted-foreground ml-2">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HistoryBlock() {
  const history = [
    { date: "2024-02-07", action: "上调准备度", from: "3/5", to: "4/5", reason: "Q3 业绩超预期确认" },
    { date: "2024-01-15", action: "新增风险点", detail: "地缘政治风险", reason: "出口管制升级" },
    { date: "2024-01-08", action: "建立 Thesis", detail: "Bullish", reason: "初始分析完成" },
  ]

  return (
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-6 py-5 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/30 flex items-center justify-center">
            <Clock className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">演化追踪</h2>
            <span className="text-sm text-muted-foreground">判断如何变化</span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors">
          全部历史
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="space-y-5">
          {history.map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="text-sm text-muted-foreground/70 w-24 pt-0.5 shrink-0">{item.date}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-base font-medium text-foreground">{item.action}</span>
                  {item.from && item.to && (
                    <span className="text-base text-muted-foreground">
                      {item.from} → <span className="text-success font-medium">{item.to}</span>
                    </span>
                  )}
                  {item.detail && !item.from && (
                    <span className="text-base text-primary font-medium">{item.detail}</span>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
