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
  Activity,
  ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"

export function DecisionCanvas() {
  return (
    <main className="flex-1 min-w-0 h-full bg-background overflow-y-auto">
      {/* Asset Header - Like screenshot */}
      <div className="px-8 py-5 border-b border-border/30 bg-card/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center border border-success/30">
              <span className="text-lg font-bold text-success">N</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-foreground">NVDA</h1>
                <span className="text-sm text-muted-foreground">NASDAQ</span>
              </div>
              <span className="text-sm text-muted-foreground">NVIDIA Corporation</span>
            </div>
          </div>
          
          {/* Status Strip - Dashboard style */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/12 border border-success/25">
              <TrendingUp className="w-3.5 h-3.5 text-success" />
              <span className="text-sm font-bold text-success">Bullish</span>
            </div>
            <span className="text-sm text-muted-foreground">Thesis 立场</span>
            
            <div className="flex gap-0.5 mx-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={cn("w-1 h-3 rounded-sm", i <= 4 ? "bg-primary" : "bg-secondary/50")} />
              ))}
            </div>
            <span className="text-sm font-semibold">4/5</span>
            <span className="text-sm text-muted-foreground">Readiness</span>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary">+加仓</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/10 border border-warning/20">
              <AlertTriangle className="w-3.5 h-3.5 text-warning" />
              <span className="text-sm font-semibold text-warning">Medium</span>
            </div>

            <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-success/8">
              <ArrowUpRight className="w-3.5 h-3.5 text-success" />
              <span className="text-sm font-bold text-success">+12%</span>
              <span className="text-xs text-muted-foreground">vs 上周</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-secondary/40 transition-colors">
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>最近更新: 今天 14:32 · 由 AI 自动更新</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-6">
        <div className="space-y-6">
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
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-primary" />
          <h2 className="text-base font-semibold text-foreground">Thesis</h2>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          详细分析 <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="px-6 py-5">
        <p className="text-base text-foreground leading-relaxed mb-6">
          NVIDIA 作为 AI 基础设施的核心供应商，在数据中心 GPU 市场占据主导地位。H100/H200 产能持续扩张，云厂商 CapEx 支出强劲支撑需求。长期看好 AI 训练与推理双轮驱动的增长逻辑。
        </p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <EvidenceCard label="Evidence" value="Strong" status="positive" detail="12/15 指标正向" />
          <EvidenceCard label="Gate" value="Passed" status="positive" detail="4/4 门槛通过" />
          <EvidenceCard label="Source" value="Verified" status="neutral" detail="8 来源确认" />
          <EvidenceCard label="Fragility" value="Low" status="positive" detail="稳定性 87%" />
        </div>

        <div className="pt-5 border-t border-border/50">
          <h3 className="text-sm font-semibold text-foreground mb-3">关键证据</h3>
          <div className="space-y-2">
            {[
              { icon: ArrowUpRight, text: "Q3 数据中心收入同比增长 279%" },
              { icon: ArrowUpRight, text: "H200 供不应求，交付周期 6-9 个月" },
              { icon: ArrowUpRight, text: "主要云厂商 2024 CapEx 指引上调" },
              { icon: Activity, text: "竞品 AMD MI300X 份额仍低于预期", muted: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className={cn("w-4 h-4", item.muted ? "text-muted-foreground" : "text-success")} />
                <span className={cn("text-sm", item.muted ? "text-muted-foreground" : "text-foreground")}>{item.text}</span>
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
      "p-4 rounded-lg border",
      status === "positive" ? "bg-success/5 border-success/20" :
      status === "negative" ? "bg-danger/5 border-danger/20" :
      "bg-secondary/30 border-border/50"
    )}>
      <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{label}</div>
      <div className={cn(
        "text-lg font-bold mb-0.5",
        status === "positive" ? "text-success" :
        status === "negative" ? "text-danger" : "text-foreground"
      )}>{value}</div>
      <div className="text-xs text-muted-foreground">{detail}</div>
    </div>
  )
}

function TimingBlock() {
  return (
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-accent" />
          <h2 className="text-base font-semibold text-foreground">Timing</h2>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-success/10 border border-success/20">
          <span className="text-sm font-semibold text-success">适合介入</span>
        </div>
      </div>

      <div className="px-6 py-5">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-success/8 border border-success/20 text-center">
            <div className="text-3xl font-bold text-success mb-1">72</div>
            <div className="text-xs text-muted-foreground uppercase">Readiness Score</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary/30 text-center">
            <div className="text-3xl font-bold text-foreground mb-1">$890</div>
            <div className="text-xs text-muted-foreground uppercase">Entry Zone</div>
          </div>
          <div className="p-4 rounded-lg bg-warning/8 border border-warning/20 text-center">
            <div className="text-3xl font-bold text-warning mb-1">14d</div>
            <div className="text-xs text-muted-foreground uppercase">Next Catalyst</div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">催化剂时间线</h3>
          <div className="space-y-3">
            {[
              { date: "2024-02-21", event: "Q4 财报发布", important: true, days: "14天" },
              { date: "2024-03-18", event: "GTC 大会", important: true, days: "39天" },
              { date: "2024-01-08", event: "CES 主题演讲", important: false, days: "已过", passed: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  item.passed ? "bg-muted-foreground/30" : "bg-primary"
                )} />
                <span className={cn("text-sm font-medium flex-1", item.passed ? "text-muted-foreground" : "text-foreground")}>
                  {item.event}
                </span>
                {item.important && !item.passed && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-warning/15 text-warning font-medium">重要</span>
                )}
                <span className="text-xs text-muted-foreground w-16">{item.date}</span>
                <span className={cn("text-sm font-medium w-12 text-right", item.passed ? "text-muted-foreground/50" : "text-primary")}>
                  {item.days}
                </span>
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
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-warning" />
          <h2 className="text-base font-semibold text-foreground">Risk Discipline</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded bg-danger/10 text-danger font-medium">1 Critical</span>
          <span className="text-xs px-2 py-1 rounded bg-warning/10 text-warning font-medium">1 High</span>
        </div>
      </div>

      <div className="px-6 py-5">
        <div className="mb-5 p-4 rounded-lg bg-secondary/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">整体风险评估</span>
            <span className="text-lg font-bold text-warning">68<span className="text-sm text-muted-foreground font-normal">/100</span></span>
          </div>
          <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
            <div className="h-full rounded-full bg-warning" style={{ width: "68%" }} />
          </div>
        </div>

        <div className="space-y-3 mb-5">
          {risks.map((risk, i) => (
            <div key={i} className={cn(
              "p-4 rounded-lg border",
              risk.severity === "high" ? "bg-danger/5 border-danger/20" : "bg-warning/5 border-warning/20"
            )}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className={cn("w-4 h-4", risk.severity === "high" ? "text-danger" : "text-warning")} />
                  <span className="text-sm font-semibold text-foreground">{risk.title}</span>
                </div>
                <span className={cn("text-xs px-1.5 py-0.5 rounded font-medium", 
                  risk.severity === "high" ? "bg-danger/15 text-danger" : "bg-warning/15 text-warning"
                )}>P: {risk.prob}%</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{risk.desc}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Shield className="w-3.5 h-3.5" />
                <span>{risk.action}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-5 border-t border-border/50">
          <h3 className="text-sm font-semibold text-foreground mb-3">决策纪律检查</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "止损线已设定", checked: true, detail: "$800" },
              { label: "仓位符合预算", checked: true, detail: "5%" },
              { label: "催化剂已评估", checked: true, detail: "Q4财报前" },
              { label: "失效条件已定义", checked: false, detail: "待完善" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                {item.checked ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-warning" />
                )}
                <span className="text-sm text-foreground">{item.label}</span>
                <span className="text-xs text-muted-foreground ml-auto">{item.detail}</span>
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
    <section className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-base font-semibold text-foreground">演化追踪</h2>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          全部历史 <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="px-6 py-5">
        <div className="space-y-4">
          {history.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-xs text-muted-foreground w-20 pt-0.5 shrink-0">{item.date}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-medium text-foreground">{item.action}</span>
                  {item.from && item.to && (
                    <span className="text-sm text-muted-foreground">
                      {item.from} → <span className="text-success">{item.to}</span>
                    </span>
                  )}
                  {item.detail && !item.from && (
                    <span className="text-sm text-primary">{item.detail}</span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{item.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
