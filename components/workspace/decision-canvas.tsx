"use client"

import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  Shield,
  Target,
  Zap,
  ChevronRight,
  Activity
} from "lucide-react"
import { cn } from "@/lib/utils"

export function DecisionCanvas() {
  return (
    <main className="flex-1 min-w-0 h-full bg-background overflow-y-auto">
      <div className="max-w-4xl mx-auto px-10 py-8">
        {/* Decision Spine - Guided Flow */}
        <div className="space-y-8">
          <ThesisBlock />
          <TimingBlock />
          <RiskBlock />
          <HistoryBlock />
        </div>
      </div>
    </main>
  )
}

function ThesisBlock() {
  return (
    <section className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-8 py-6 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">核心论点</h2>
            <span className="text-base text-muted-foreground">为什么看好这个标的</span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors">
          详细
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        {/* Main Thesis - LARGE READABLE TEXT */}
        <p className="text-xl text-foreground leading-loose mb-10">
          NVIDIA 作为 AI 基础设施的核心供应商，在数据中心 GPU 市场占据主导地位。
          H100/H200 产能持续扩张，云厂商 CapEx 支出强劲支撑需求。
          长期看好 AI 训练与推理双轮驱动的增长逻辑。
        </p>

        {/* Evidence Grid */}
        <div className="grid grid-cols-4 gap-6 mb-10">
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
        <div className="pt-8 border-t border-border/50">
          <h3 className="text-lg font-bold text-foreground mb-6">关键证据</h3>
          <div className="space-y-5">
            {[
              { text: "Q3 数据中心收入同比增长 279%，超预期", trend: "up" },
              { text: "H200 供不应求，交付周期 6-9 个月", trend: "up" },
              { text: "主要云厂商 2024 CapEx 指引上调 15%", trend: "up" },
              { text: "竞品 AMD MI300X 份额仍低于预期", trend: "neutral" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                {item.trend === "up" ? (
                  <ArrowUpRight className="w-6 h-6 text-success shrink-0" />
                ) : (
                  <Activity className="w-6 h-6 text-muted-foreground shrink-0" />
                )}
                <span className="text-lg text-foreground/90">{item.text}</span>
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
      "p-6 rounded-xl border",
      status === "positive" ? "bg-success/5 border-success/20" :
      status === "negative" ? "bg-danger/5 border-danger/20" :
      "bg-secondary/30 border-border/50"
    )}>
      <div className="text-base text-muted-foreground mb-2">{label}</div>
      <div className={cn(
        "text-2xl font-bold mb-1",
        status === "positive" ? "text-success" :
        status === "negative" ? "text-danger" : "text-foreground"
      )}>
        {value}
      </div>
      <div className="text-base text-muted-foreground/80">{detail}</div>
    </div>
  )
}

function TimingBlock() {
  return (
    <section className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-8 py-6 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">时机与行动</h2>
            <span className="text-base text-muted-foreground">何时以及如何操作</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-success/10 border border-success/20">
          <Zap className="w-5 h-5 text-success" />
          <span className="text-lg font-bold text-success">适合介入</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <MetricCard label="Readiness" value="72" unit="/100" highlight />
          <MetricCard label="Entry Zone" value="$890" unit="" />
          <MetricCard label="Target" value="$1,050" unit="" />
          <MetricCard label="Next Catalyst" value="14" unit="天" warning />
        </div>

        {/* Action Recommendation */}
        <div className="p-6 mb-10 rounded-xl bg-primary/8 border border-primary/20">
          <div className="flex items-center gap-5">
            <Zap className="w-7 h-7 text-primary" />
            <div>
              <span className="text-lg font-semibold text-foreground">建议操作：</span>
              <span className="text-xl font-bold text-primary ml-3">分 3 批在 $880-900 区间建仓</span>
            </div>
          </div>
        </div>

        {/* Catalyst Timeline */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-6">催化剂时间线</h3>
          <div className="relative">
            <div className="absolute left-3.5 top-4 bottom-4 w-px bg-border/50" />
            <div className="space-y-5">
              {[
                { date: "2024-02-21", event: "Q4 财报发布", status: "upcoming", importance: "high", daysAway: "14天" },
                { date: "2024-03-18", event: "GTC 大会", status: "upcoming", importance: "high", daysAway: "39天" },
                { date: "2024-01-08", event: "CES 主题演讲", status: "passed", importance: "medium", daysAway: "已过" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 relative pl-8">
                  <div className={cn(
                    "absolute left-0 w-7 h-7 rounded-full border-2 flex items-center justify-center z-10",
                    item.status === "upcoming" 
                      ? "bg-primary/15 border-primary" 
                      : "bg-secondary/40 border-border/50"
                  )}>
                    {item.status === "upcoming" && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                  </div>
                  <div className="flex-1 flex items-center justify-between py-1">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "text-lg font-semibold",
                          item.status === "upcoming" ? "text-foreground" : "text-muted-foreground"
                        )}>{item.event}</span>
                        {item.importance === "high" && item.status === "upcoming" && (
                          <span className="text-sm px-2.5 py-1 rounded-lg bg-warning/15 text-warning font-bold">重要</span>
                        )}
                      </div>
                      <span className="text-base text-muted-foreground">{item.date}</span>
                    </div>
                    <span className={cn(
                      "text-lg font-bold",
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
      "p-6 rounded-xl text-center",
      highlight ? "bg-success/8 border border-success/20" :
      warning ? "bg-warning/8 border border-warning/20" :
      "bg-secondary/30"
    )}>
      <div className={cn(
        "text-4xl font-bold mb-2",
        highlight ? "text-success" : warning ? "text-warning" : "text-foreground"
      )}>
        {value}<span className="text-lg font-semibold text-muted-foreground">{unit}</span>
      </div>
      <div className="text-base text-muted-foreground uppercase tracking-wider">{label}</div>
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
    <section className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-8 py-6 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center relative">
            <Shield className="w-6 h-6 text-warning" />
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-danger flex items-center justify-center">
              <span className="text-sm font-bold text-white">2</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">风险纪律</h2>
            <span className="text-base text-muted-foreground">必须遵守的边界</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-base px-4 py-2 rounded-lg bg-danger/10 text-danger font-bold">1 Critical</span>
          <span className="text-base px-4 py-2 rounded-lg bg-warning/10 text-warning font-bold">1 High</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        {/* Risk Score Bar */}
        <div className="mb-10 p-6 rounded-xl bg-secondary/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-foreground">整体风险评估</span>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-warning">68</span>
              <span className="text-lg text-muted-foreground">/100 中等偏高</span>
            </div>
          </div>
          <div className="h-4 rounded-full bg-secondary/50 overflow-hidden">
            <div className="h-full rounded-full bg-warning" style={{ width: "68%" }} />
          </div>
        </div>

        {/* Risk Items */}
        <div className="space-y-5 mb-10">
          {risks.map((risk, i) => (
            <div key={i} className={cn(
              "p-6 rounded-xl border",
              risk.severity === "high" ? "bg-danger/5 border-danger/20" : "bg-warning/5 border-warning/20"
            )}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <AlertTriangle className={cn(
                    "w-6 h-6",
                    risk.severity === "high" ? "text-danger" : "text-warning"
                  )} />
                  <span className="text-lg font-bold text-foreground">{risk.title}</span>
                </div>
                <span className={cn(
                  "text-base px-3 py-1.5 rounded-lg font-bold",
                  risk.severity === "high" ? "bg-danger/15 text-danger" : "bg-warning/15 text-warning"
                )}>
                  P: {risk.probability}%
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{risk.description}</p>
              <div className="flex items-center gap-4">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-lg text-primary font-medium">{risk.mitigation}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Discipline Checklist */}
        <div className="pt-8 border-t border-border/50">
          <h3 className="text-lg font-bold text-foreground mb-6">决策纪律检查</h3>
          <div className="grid grid-cols-2 gap-5">
            {disciplineChecklist.map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-xl bg-secondary/20">
                <div className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center",
                  item.checked ? "bg-success/20" : "bg-warning/20"
                )}>
                  {item.checked ? (
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-warning" />
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-lg text-foreground font-medium">{item.label}</span>
                  <span className="text-base text-muted-foreground ml-3">{item.detail}</span>
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
    <section className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Section Header */}
      <div className="px-8 py-6 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center">
            <Clock className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">演化追踪</h2>
            <span className="text-base text-muted-foreground">判断如何变化</span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors">
          全部历史
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        <div className="space-y-6">
          {history.map((item, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="text-base text-muted-foreground/70 w-28 pt-0.5 shrink-0">{item.date}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg font-semibold text-foreground">{item.action}</span>
                  {item.from && item.to && (
                    <span className="text-lg text-muted-foreground">
                      {item.from} → <span className="text-success font-semibold">{item.to}</span>
                    </span>
                  )}
                  {item.detail && !item.from && (
                    <span className="text-lg text-primary font-semibold">{item.detail}</span>
                  )}
                </div>
                <span className="text-base text-muted-foreground">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
