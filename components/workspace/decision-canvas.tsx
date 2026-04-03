"use client"

import { TrendingUp, AlertTriangle, CheckCircle2, Clock, ArrowUpRight, Shield, Target, Zap, ChevronRight, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

export function DecisionCanvas() {
  return (
    <main className="flex-1 min-w-0 max-w-[680px] h-full bg-background overflow-y-auto">
      <div className="px-5 py-4">
        <div className="space-y-4">
          <ThesisBlock />
          <TimingBlock />
          <RiskBlock />
          <HistoryBlock />
        </div>
      </div>
    </main>
  )
}

/* ============================================
   THESIS BLOCK - Core Investment Argument
   ============================================ */
function ThesisBlock() {
  return (
    <section className="bg-card rounded-lg border border-border/40">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/25 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
            <Target className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-[15px] font-bold text-foreground tracking-tight">Thesis</h2>
        </div>
        <button className="flex items-center gap-1 text-[12px] text-muted-foreground/60 hover:text-foreground transition-colors">
          详细分析 <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {/* Main Thesis Statement */}
        <p className="text-[14px] text-foreground/90 leading-[1.7] mb-4">
          NVIDIA 作为 AI 基础设施的核心供应商，在数据中心 GPU 市场占据主导地位。H100/H200 产能持续扩张，云厂商 CapEx 支出强劲支撑需求。长期看好 AI 训练与推理双轮驱动的增长逻辑。
        </p>

        {/* Evidence Cards */}
        <div className="grid grid-cols-4 gap-2.5 mb-4">
          <EvidenceCard label="EVIDENCE" value="Strong" status="positive" detail="12/15 指标正向" />
          <EvidenceCard label="GATE" value="Passed" status="positive" detail="4/4 门槛通过" />
          <EvidenceCard label="SOURCE" value="Verified" status="neutral" detail="8 来源确认" />
          <EvidenceCard label="FRAGILITY" value="Low" status="positive" detail="稳定性 87%" />
        </div>

        {/* Key Evidence */}
        <div className="pt-4 border-t border-border/20">
          <h3 className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-wider mb-3">关键证据</h3>
          <div className="space-y-2.5">
            {[
              { icon: ArrowUpRight, text: "Q3 数据中心收入同比增长 279%", positive: true },
              { icon: ArrowUpRight, text: "H200 供不应求，交付周期 6-9 个月", positive: true },
              { icon: ArrowUpRight, text: "主要云厂商 2024 CapEx 指引上调", positive: true },
              { icon: Activity, text: "竞品 AMD MI300X 份额仍低于预期", positive: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <item.icon className={cn("w-4 h-4", item.positive ? "text-success" : "text-muted-foreground/50")} />
                <span className={cn("text-[13px] leading-relaxed", item.positive ? "text-foreground/85" : "text-muted-foreground/60")}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EvidenceCard({ label, value, status, detail }: { label: string; value: string; status: "positive" | "neutral" | "negative"; detail: string }) {
  return (
    <div className={cn(
      "p-2.5 rounded-md border",
      status === "positive" ? "bg-success/5 border-success/15" : status === "negative" ? "bg-danger/5 border-danger/15" : "bg-secondary/20 border-border/30"
    )}>
      <div className="text-[9px] font-semibold text-muted-foreground/50 uppercase tracking-wider mb-1">{label}</div>
      <div className={cn("text-[14px] font-bold", status === "positive" ? "text-success" : status === "negative" ? "text-danger" : "text-foreground")}>{value}</div>
      <div className="text-[10px] text-muted-foreground/45 mt-0.5">{detail}</div>
    </div>
  )
}

/* ============================================
   TIMING BLOCK - Entry & Catalyst
   ============================================ */
function TimingBlock() {
  return (
    <section className="bg-card rounded-lg border border-border/40">
      <div className="px-4 py-3 border-b border-border/25 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center">
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <h2 className="text-[15px] font-bold text-foreground tracking-tight">Timing</h2>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-success/8 border border-success/15">
          <span className="text-[12px] font-bold text-success">适合介入</span>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <div className="p-3 rounded-md bg-success/6 border border-success/12 text-center">
            <div className="text-2xl font-bold text-success tabular-nums">72</div>
            <div className="text-[10px] font-medium text-muted-foreground/50 uppercase tracking-wide mt-0.5">Readiness</div>
          </div>
          <div className="p-3 rounded-md bg-secondary/15 text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">$890</div>
            <div className="text-[10px] font-medium text-muted-foreground/50 uppercase tracking-wide mt-0.5">Entry Zone</div>
          </div>
          <div className="p-3 rounded-md bg-warning/6 border border-warning/12 text-center">
            <div className="text-2xl font-bold text-warning tabular-nums">14d</div>
            <div className="text-[10px] font-medium text-muted-foreground/50 uppercase tracking-wide mt-0.5">Catalyst</div>
          </div>
        </div>

        {/* Catalyst Timeline */}
        <div>
          <h3 className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-wider mb-3">催化剂时间线</h3>
          <div className="space-y-2">
            {[
              { date: "2024-02-21", event: "Q4 财报发布", important: true, days: "14天" },
              { date: "2024-03-18", event: "GTC 大会", important: true, days: "39天" },
              { date: "2024-01-08", event: "CES 主题演讲", important: false, days: "已过", passed: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-1">
                <div className={cn("w-2 h-2 rounded-full shrink-0", item.passed ? "bg-muted-foreground/20" : "bg-primary")} />
                <span className={cn("text-[13px] flex-1", item.passed ? "text-muted-foreground/40" : "text-foreground/85")}>{item.event}</span>
                {item.important && !item.passed && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-warning/12 text-warning font-semibold">重要</span>
                )}
                <span className="text-[11px] text-muted-foreground/40 w-20">{item.date}</span>
                <span className={cn("text-[13px] font-semibold w-12 text-right tabular-nums", item.passed ? "text-muted-foreground/30" : "text-primary")}>{item.days}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   RISK BLOCK - Discipline & Control
   ============================================ */
function RiskBlock() {
  const risks = [
    { severity: "high", title: "估值风险", desc: "当前 Forward P/E 65x 处于历史 95 分位", prob: 35, action: "设置 $800 止损线" },
    { severity: "medium", title: "地缘政治", desc: "中美半导体出口管制持续升级", prob: 45, action: "关注政策进展" },
  ]

  return (
    <section className="bg-card rounded-lg border border-border/40">
      <div className="px-4 py-3 border-b border-border/25 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-warning/10 flex items-center justify-center">
            <Shield className="w-4 h-4 text-warning" />
          </div>
          <h2 className="text-[15px] font-bold text-foreground tracking-tight">Risk</h2>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-danger/12 text-danger font-semibold">1 Critical</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-warning/12 text-warning font-semibold">1 High</span>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Risk Score */}
        <div className="mb-4 p-3 rounded-md bg-secondary/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-medium text-foreground/75">整体风险评估</span>
            <span className="text-lg font-bold text-warning tabular-nums">68<span className="text-[11px] text-muted-foreground/45 font-normal">/100</span></span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary/30 overflow-hidden">
            <div className="h-full rounded-full bg-warning" style={{ width: "68%" }} />
          </div>
        </div>

        {/* Risk Items */}
        <div className="space-y-2.5 mb-4">
          {risks.map((risk, i) => (
            <div key={i} className={cn("p-3 rounded-md border", risk.severity === "high" ? "bg-danger/4 border-danger/15" : "bg-warning/4 border-warning/15")}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className={cn("w-4 h-4", risk.severity === "high" ? "text-danger" : "text-warning")} />
                  <span className="text-[13px] font-bold text-foreground">{risk.title}</span>
                </div>
                <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-semibold", risk.severity === "high" ? "bg-danger/12 text-danger" : "bg-warning/12 text-warning")}>P: {risk.prob}%</span>
              </div>
              <p className="text-[12px] text-muted-foreground/65 mb-2 leading-relaxed">{risk.desc}</p>
              <div className="flex items-center gap-1.5 text-[12px] text-primary">
                <Shield className="w-3.5 h-3.5" />
                <span className="font-medium">{risk.action}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Discipline Checklist */}
        <div className="pt-3 border-t border-border/20">
          <h3 className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-wider mb-2.5">决策纪律</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "止损线已设定", checked: true, detail: "$800" },
              { label: "仓位符合预算", checked: true, detail: "5%" },
              { label: "催化剂已评估", checked: true, detail: "Q4财报前" },
              { label: "失效条件已定义", checked: false, detail: "待完善" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-md bg-secondary/10">
                {item.checked ? <CheckCircle2 className="w-4 h-4 text-success shrink-0" /> : <AlertTriangle className="w-4 h-4 text-warning shrink-0" />}
                <span className="text-[12px] text-foreground/80">{item.label}</span>
                <span className="text-[10px] text-muted-foreground/40 ml-auto">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   HISTORY BLOCK - Evolution Track
   ============================================ */
function HistoryBlock() {
  const history = [
    { date: "2024-02-07", action: "上调准备度", from: "3/5", to: "4/5", reason: "Q3 业绩超预期" },
    { date: "2024-01-15", action: "新增风险点", detail: "地缘政治风险", reason: "出口管制升级" },
    { date: "2024-01-08", action: "建立 Thesis", detail: "Bullish", reason: "初始分析完成" },
  ]

  return (
    <section className="bg-card rounded-lg border border-border/40">
      <div className="px-4 py-3 border-b border-border/25 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-secondary/20 flex items-center justify-center">
            <Clock className="w-4 h-4 text-muted-foreground/60" />
          </div>
          <h2 className="text-[15px] font-bold text-foreground tracking-tight">演化追踪</h2>
        </div>
        <button className="flex items-center gap-1 text-[12px] text-muted-foreground/60 hover:text-foreground transition-colors">
          全部历史 <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="px-4 py-4">
        <div className="space-y-3">
          {history.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[10px] text-muted-foreground/40 w-20 pt-0.5 shrink-0 tabular-nums">{item.date}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[13px] font-semibold text-foreground/85">{item.action}</span>
                  {item.from && item.to && (
                    <span className="text-[13px] text-muted-foreground/55">{item.from} → <span className="text-success font-medium">{item.to}</span></span>
                  )}
                  {item.detail && !item.from && (
                    <span className="text-[13px] text-primary font-medium">{item.detail}</span>
                  )}
                </div>
                <span className="text-[11px] text-muted-foreground/45">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
