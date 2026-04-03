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
      <div className="max-w-3xl mx-auto px-6 py-5">
        <div className="space-y-5">
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
    <section className="bg-card rounded-xl border border-border/60 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Target className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">Thesis</h2>
        </div>
        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          详细分析 <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="px-5 py-4">
        <p className="text-sm text-foreground leading-relaxed mb-5">
          NVIDIA 作为 AI 基础设施的核心供应商，在数据中心 GPU 市场占据主导地位。H100/H200 产能持续扩张，云厂商 CapEx 支出强劲支撑需求。长期看好 AI 训练与推理双轮驱动的增长逻辑。
        </p>

        <div className="grid grid-cols-4 gap-3 mb-5">
          <EvidenceCard label="Evidence" value="Strong" status="positive" detail="12/15 指标正向" />
          <EvidenceCard label="Gate" value="Passed" status="positive" detail="4/4 门槛通过" />
          <EvidenceCard label="Source" value="Verified" status="neutral" detail="8 来源确认" />
          <EvidenceCard label="Fragility" value="Low" status="positive" detail="稳定性 87%" />
        </div>

        <div className="pt-4 border-t border-border/40">
          <h3 className="text-xs font-semibold text-foreground/80 mb-2.5 uppercase tracking-wide">关键证据</h3>
          <div className="space-y-2">
            {[
              { icon: ArrowUpRight, text: "Q3 数据中心收入同比增长 279%" },
              { icon: ArrowUpRight, text: "H200 供不应求，交付周期 6-9 个月" },
              { icon: ArrowUpRight, text: "主要云厂商 2024 CapEx 指引上调" },
              { icon: Activity, text: "竞品 AMD MI300X 份额仍低于预期", muted: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <item.icon className={cn("w-3.5 h-3.5", item.muted ? "text-muted-foreground/60" : "text-success")} />
                <span className={cn("text-sm", item.muted ? "text-muted-foreground/70" : "text-foreground/90")}>{item.text}</span>
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
      "p-3 rounded-lg border",
      status === "positive" ? "bg-success/4 border-success/15" :
      status === "negative" ? "bg-danger/4 border-danger/15" :
      "bg-secondary/20 border-border/40"
    )}>
      <div className="text-[10px] text-muted-foreground/60 mb-0.5 uppercase tracking-wider">{label}</div>
      <div className={cn(
        "text-base font-bold mb-0.5",
        status === "positive" ? "text-success" :
        status === "negative" ? "text-danger" : "text-foreground"
      )}>{value}</div>
      <div className="text-[10px] text-muted-foreground/50">{detail}</div>
    </div>
  )
}

function TimingBlock() {
  return (
    <section className="bg-card rounded-xl border border-border/60 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-semibold text-foreground">Timing</h2>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-success/8 border border-success/15">
          <span className="text-xs font-semibold text-success">适合介入</span>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="p-3.5 rounded-lg bg-success/5 border border-success/15 text-center">
            <div className="text-2xl font-bold text-success mb-0.5">72</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wide">Readiness Score</div>
          </div>
          <div className="p-3.5 rounded-lg bg-secondary/20 text-center">
            <div className="text-2xl font-bold text-foreground mb-0.5">$890</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wide">Entry Zone</div>
          </div>
          <div className="p-3.5 rounded-lg bg-warning/5 border border-warning/15 text-center">
            <div className="text-2xl font-bold text-warning mb-0.5">14d</div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wide">Next Catalyst</div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-foreground/80 mb-2.5 uppercase tracking-wide">催化剂时间线</h3>
          <div className="space-y-2.5">
            {[
              { date: "2024-02-21", event: "Q4 财报发布", important: true, days: "14天" },
              { date: "2024-03-18", event: "GTC 大会", important: true, days: "39天" },
              { date: "2024-01-08", event: "CES 主题演讲", important: false, days: "已过", passed: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={cn("w-1.5 h-1.5 rounded-full", item.passed ? "bg-muted-foreground/30" : "bg-primary")} />
                <span className={cn("text-sm flex-1", item.passed ? "text-muted-foreground/50" : "text-foreground/90")}>{item.event}</span>
                {item.important && !item.passed && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-warning/12 text-warning font-medium">重要</span>
                )}
                <span className="text-xs text-muted-foreground/50 w-20">{item.date}</span>
                <span className={cn("text-sm font-medium w-10 text-right", item.passed ? "text-muted-foreground/40" : "text-primary")}>{item.days}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RiskBlock() {
  const risks = [
    { severity: "high", title: "估值风险", desc: "当前 Forward P/E 65x 处于历史 95 分位", prob: 35, action: "设置 $800 止损线" },
    { severity: "medium", title: "地缘政治", desc: "中美半导体出口管制持续升级", prob: 45, action: "关注政策进展" },
  ]

  return (
    <section className="bg-card rounded-xl border border-border/60 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Shield className="w-4 h-4 text-warning" />
          <h2 className="text-sm font-semibold text-foreground">Risk Discipline</h2>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-danger/10 text-danger font-medium">1 Critical</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-warning/10 text-warning font-medium">1 High</span>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="mb-4 p-3 rounded-lg bg-secondary/15">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-foreground/80">整体风险评估</span>
            <span className="text-base font-bold text-warning">68<span className="text-xs text-muted-foreground/50 font-normal">/100</span></span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary/40 overflow-hidden">
            <div className="h-full rounded-full bg-warning" style={{ width: "68%" }} />
          </div>
        </div>

        <div className="space-y-2.5 mb-4">
          {risks.map((risk, i) => (
            <div key={i} className={cn(
              "p-3.5 rounded-lg border",
              risk.severity === "high" ? "bg-danger/3 border-danger/15" : "bg-warning/3 border-warning/15"
            )}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className={cn("w-3.5 h-3.5", risk.severity === "high" ? "text-danger" : "text-warning")} />
                  <span className="text-sm font-semibold text-foreground">{risk.title}</span>
                </div>
                <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-medium", 
                  risk.severity === "high" ? "bg-danger/12 text-danger" : "bg-warning/12 text-warning"
                )}>P: {risk.prob}%</span>
              </div>
              <p className="text-sm text-muted-foreground/70 mb-1.5">{risk.desc}</p>
              <div className="flex items-center gap-1.5 text-sm text-primary">
                <Shield className="w-3 h-3" />
                <span>{risk.action}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border/40">
          <h3 className="text-xs font-semibold text-foreground/80 mb-2.5 uppercase tracking-wide">决策纪律检查</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "止损线已设定", checked: true, detail: "$800" },
              { label: "仓位符合预算", checked: true, detail: "5%" },
              { label: "催化剂已评估", checked: true, detail: "Q4财报前" },
              { label: "失效条件已定义", checked: false, detail: "待完善" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/15">
                {item.checked ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                )}
                <span className="text-sm text-foreground/80">{item.label}</span>
                <span className="text-[10px] text-muted-foreground/50 ml-auto">{item.detail}</span>
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
    { date: "2024-02-07", action: "上调准备度", from: "3/5", to: "4/5", reason: "Q3 业绩超预期" },
    { date: "2024-01-15", action: "新增风险点", detail: "地缘政治风险", reason: "出口管制升级" },
    { date: "2024-01-08", action: "建立 Thesis", detail: "Bullish", reason: "初始分析完成" },
  ]

  return (
    <section className="bg-card rounded-xl border border-border/60 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-muted-foreground/60" />
          <h2 className="text-sm font-semibold text-foreground">演化追踪</h2>
        </div>
        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          全部历史 <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="px-5 py-4">
        <div className="space-y-3">
          {history.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[10px] text-muted-foreground/50 w-18 pt-0.5 shrink-0">{item.date}</span>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-sm font-medium text-foreground/90">{item.action}</span>
                  {item.from && item.to && (
                    <span className="text-sm text-muted-foreground/60">
                      {item.from} → <span className="text-success">{item.to}</span>
                    </span>
                  )}
                  {item.detail && !item.from && (
                    <span className="text-sm text-primary">{item.detail}</span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground/50">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
