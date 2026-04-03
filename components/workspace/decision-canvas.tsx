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
  const alerts = [
    {
      severity: "critical" as const,
      title: "估值风险",
      category: "Valuation",
      description: "当前 Forward P/E 65x 处于历史 95 分位，隐含增长预期极高",
      impact: "下行空间 20-30%，若增速放缓",
      probability: 35,
      mitigation: "设置 $800 止损线，分批建仓降低成本基础",
      triggers: ["Q4 收入增速 < 80%", "2024 指引不及预期"],
      lastUpdated: "2h ago",
    },
    {
      severity: "high" as const,
      title: "地缘政治风险",
      category: "Geopolitical",
      description: "中美半导体出口管制持续升级，H20 芯片面临潜在禁令",
      impact: "中国区收入占比 20%，约 $10B 收入面临风险",
      probability: 45,
      mitigation: "关注政策进展，设置地缘事件触发的仓位调整规则",
      triggers: ["新一轮出口管制", "中国客户订单取消"],
      lastUpdated: "1d ago",
    },
    {
      severity: "medium" as const,
      title: "竞争格局变化",
      category: "Competition",
      description: "AMD MI300X 开始获得云厂商订单，长期份额存在被蚕食风险",
      impact: "市场份额可能从 90% 下降至 70-80%",
      probability: 25,
      mitigation: "跟踪 AMD 季度出货量和客户反馈",
      triggers: ["AMD 大单公告", "客户公开切换供应商"],
      lastUpdated: "3d ago",
    },
    {
      severity: "low" as const,
      title: "供应链集中度",
      category: "Supply Chain",
      description: "台积电 CoWoS 产能瓶颈，单一供应商依赖",
      impact: "产能受限可能影响交付节奏",
      probability: 15,
      mitigation: "关注台积电产能扩张计划",
      triggers: ["台积电产能公告", "交付周期延长"],
      lastUpdated: "1w ago",
    },
  ]

  const severityConfig = {
    critical: {
      bg: "bg-danger/8",
      border: "border-danger",
      text: "text-danger",
      badge: "bg-danger/15 text-danger",
      icon: "bg-danger/20",
    },
    high: {
      bg: "bg-warning/8",
      border: "border-warning",
      text: "text-warning",
      badge: "bg-warning/15 text-warning",
      icon: "bg-warning/20",
    },
    medium: {
      bg: "bg-accent/5",
      border: "border-accent/50",
      text: "text-accent",
      badge: "bg-accent/10 text-accent",
      icon: "bg-accent/15",
    },
    low: {
      bg: "bg-secondary/30",
      border: "border-border",
      text: "text-muted-foreground",
      badge: "bg-secondary text-muted-foreground",
      icon: "bg-secondary",
    },
  }

  const criticalCount = alerts.filter(a => a.severity === "critical").length
  const highCount = alerts.filter(a => a.severity === "high").length

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-warning" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Risk Control</h2>
              <p className="text-[10px] text-muted-foreground">风险纪律与预警管理</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {criticalCount > 0 && (
              <span className="text-[10px] px-2 py-1 rounded-md bg-danger/15 text-danger font-semibold">
                {criticalCount} Critical
              </span>
            )}
            {highCount > 0 && (
              <span className="text-[10px] px-2 py-1 rounded-md bg-warning/15 text-warning font-semibold">
                {highCount} High
              </span>
            )}
            <span className="text-[10px] px-2 py-1 rounded-md bg-secondary text-muted-foreground font-medium">
              {alerts.length} Total
            </span>
          </div>
        </div>

        {/* Risk Summary Bar */}
        <div className="flex gap-1 h-1.5 rounded-full overflow-hidden bg-secondary/50">
          <div className="bg-danger h-full" style={{ width: `${criticalCount / alerts.length * 100}%` }} />
          <div className="bg-warning h-full" style={{ width: `${highCount / alerts.length * 100}%` }} />
          <div className="bg-accent h-full" style={{ width: `${alerts.filter(a => a.severity === "medium").length / alerts.length * 100}%` }} />
          <div className="bg-muted-foreground/30 h-full flex-1" />
        </div>
      </div>

      {/* Risk Matrix Overview */}
      <div className="px-5 py-4 border-b border-border bg-secondary/10">
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="text-xl font-bold text-foreground mb-0.5">68</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">综合风险分</div>
          </div>
          <div className="text-center border-l border-border">
            <div className="text-xl font-bold text-danger mb-0.5">$180</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">最大损失</div>
          </div>
          <div className="text-center border-l border-border">
            <div className="text-xl font-bold text-warning mb-0.5">3</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">待观察</div>
          </div>
          <div className="text-center border-l border-border">
            <div className="text-xl font-bold text-success mb-0.5">2</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">已缓解</div>
          </div>
        </div>
      </div>

      {/* Alert Cards */}
      <div className="p-5 space-y-4">
        {alerts.map((alert, i) => {
          const config = severityConfig[alert.severity]
          return (
            <div
              key={i}
              className={cn(
                "rounded-lg border-l-3 p-4 transition-all hover:translate-x-0.5",
                config.bg,
                `border-l-[3px]`,
                config.border
              )}
            >
              {/* Alert Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={cn("w-7 h-7 rounded-md flex items-center justify-center shrink-0", config.icon)}>
                    <AlertTriangle className={cn("w-3.5 h-3.5", config.text)} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={cn("text-[9px] font-bold uppercase tracking-wider", config.text)}>
                        {alert.severity}
                      </span>
                      <span className="text-[9px] text-muted-foreground">·</span>
                      <span className="text-[9px] text-muted-foreground">{alert.category}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{alert.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className={cn("text-sm font-bold", config.text)}>{alert.probability}%</div>
                    <div className="text-[9px] text-muted-foreground">概率</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-secondary-foreground mb-3 leading-relaxed pl-10">
                {alert.description}
              </p>

              {/* Impact & Mitigation */}
              <div className="pl-10 grid grid-cols-2 gap-3 mb-3">
                <div className="p-2.5 bg-background/50 rounded-md">
                  <div className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1">潜在影响</div>
                  <p className="text-[11px] text-foreground font-medium">{alert.impact}</p>
                </div>
                <div className="p-2.5 bg-background/50 rounded-md">
                  <div className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1">应对策略</div>
                  <p className="text-[11px] text-foreground font-medium">{alert.mitigation}</p>
                </div>
              </div>

              {/* Triggers */}
              <div className="pl-10 flex items-center gap-2 flex-wrap">
                <span className="text-[9px] text-muted-foreground">触发条件:</span>
                {alert.triggers.map((trigger, j) => (
                  <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-background/80 text-secondary-foreground border border-border">
                    {trigger}
                  </span>
                ))}
                <span className="text-[9px] text-muted-foreground ml-auto">更新: {alert.lastUpdated}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer Actions */}
      <div className="px-5 py-3 border-t border-border bg-secondary/10 flex items-center justify-between">
        <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          <Shield className="w-3 h-3" />
          风险设置
        </button>
        <button className="text-[10px] text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium">
          生成风险报告
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}

function HistoryBlock() {
  const snapshots = [
    {
      id: "current",
      label: "当前",
      date: "2024-01-15",
      stance: "Bullish",
      readiness: 4,
      actionBias: "加仓",
      alertLevel: "Medium",
      evidenceScore: 12,
      totalEvidence: 15,
      isCurrent: true,
    },
    {
      id: "prev",
      label: "上周",
      date: "2024-01-08",
      stance: "Bullish",
      readiness: 3,
      actionBias: "观望",
      alertLevel: "High",
      evidenceScore: 8,
      totalEvidence: 15,
      isCurrent: false,
    },
    {
      id: "month",
      label: "30天前",
      date: "2023-12-15",
      stance: "Neutral",
      readiness: 2,
      actionBias: "观察",
      alertLevel: "High",
      evidenceScore: 5,
      totalEvidence: 12,
      isCurrent: false,
    },
  ]

  const evolutionEvents = [
    {
      date: "2024-01-14",
      type: "evidence" as const,
      title: "新增看涨证据",
      description: "AMD MI300X 首季出货量低于预期，验证 NVIDIA 护城河",
      impact: "+2 Evidence",
      positive: true,
    },
    {
      date: "2024-01-12",
      type: "risk" as const,
      title: "风险等级下调",
      description: "估值担忧部分消化，股价回调至合理区间",
      impact: "High → Medium",
      positive: true,
    },
    {
      date: "2024-01-10",
      type: "action" as const,
      title: "行动建议升级",
      description: "Readiness 达到 4/5，建议开始分批建仓",
      impact: "观望 → 加仓",
      positive: true,
    },
    {
      date: "2024-01-08",
      type: "catalyst" as const,
      title: "催化剂确认",
      description: "CES 发布 RTX 50 系列，AI PC 主题强化",
      impact: "+1 Readiness",
      positive: true,
    },
    {
      date: "2024-01-05",
      type: "thesis" as const,
      title: "Thesis 立场变化",
      description: "从 Neutral 上调至 Bullish，核心逻辑得到验证",
      impact: "Neutral → Bullish",
      positive: true,
    },
    {
      date: "2023-12-28",
      type: "evidence" as const,
      title: "新增看涨证据",
      description: "微软 Azure 确认增加 H200 采购，需求信号强劲",
      impact: "+3 Evidence",
      positive: true,
    },
  ]

  const eventTypeConfig = {
    evidence: { icon: CheckCircle2, color: "text-primary", bg: "bg-primary/10" },
    risk: { icon: Shield, color: "text-warning", bg: "bg-warning/10" },
    action: { icon: Zap, color: "text-success", bg: "bg-success/10" },
    catalyst: { icon: Target, color: "text-accent", bg: "bg-accent/10" },
    thesis: { icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" },
  }

  const deltaMetrics = [
    { label: "Stance", prev: "Neutral", current: "Bullish", change: "升级", positive: true },
    { label: "Readiness", prev: "2/5", current: "4/5", change: "+2", positive: true },
    { label: "Evidence", prev: "5/12", current: "12/15", change: "+7", positive: true },
    { label: "Alert Level", prev: "High", current: "Medium", change: "改善", positive: true },
    { label: "Action Bias", prev: "观察", current: "加仓", change: "升级", positive: true },
  ]

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Decision Evolution</h2>
              <p className="text-[10px] text-muted-foreground">决策演化与变更追踪</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-1 rounded-md bg-success/15 text-success font-semibold">
              +7 正向变化
            </span>
            <span className="text-[10px] px-2 py-1 rounded-md bg-secondary text-muted-foreground font-medium">
              30 天周期
            </span>
          </div>
        </div>

        {/* Evolution Summary */}
        <div className="flex items-center gap-2">
          {[
            { label: "Neutral", active: false },
            { label: "观察", active: false },
            { label: "Bullish", active: false },
            { label: "观望", active: false },
            { label: "加仓", active: true },
          ].map((step, i, arr) => (
            <div key={i} className="flex items-center gap-2">
              <div className={cn(
                "px-2 py-1 rounded-md text-[10px] font-medium transition-colors",
                step.active ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground"
              )}>
                {step.label}
              </div>
              {i < arr.length - 1 && (
                <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Snapshot Comparison */}
      <div className="px-5 py-4 border-b border-border bg-secondary/10">
        <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-3">
          时点对比
        </div>
        <div className="grid grid-cols-3 gap-3">
          {snapshots.map((snapshot) => (
            <div
              key={snapshot.id}
              className={cn(
                "p-3 rounded-lg transition-all",
                snapshot.isCurrent
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-background/50 border border-border"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "text-[10px] font-semibold",
                  snapshot.isCurrent ? "text-primary" : "text-muted-foreground"
                )}>
                  {snapshot.label}
                </span>
                <span className="text-[9px] text-muted-foreground">{snapshot.date}</span>
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                {snapshot.stance === "Bullish" ? (
                  <TrendingUp className="w-3.5 h-3.5 text-success" />
                ) : snapshot.stance === "Bearish" ? (
                  <TrendingDown className="w-3.5 h-3.5 text-danger" />
                ) : (
                  <Minus className="w-3.5 h-3.5 text-muted-foreground" />
                )}
                <span className="text-xs font-medium text-foreground">{snapshot.stance}</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-muted-foreground">Readiness</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-1 h-2.5 rounded-sm",
                          i <= snapshot.readiness ? "bg-primary" : "bg-secondary"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-muted-foreground">Evidence</span>
                  <span className="text-[10px] font-medium text-foreground">
                    {snapshot.evidenceScore}/{snapshot.totalEvidence}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-muted-foreground">Action</span>
                  <span className={cn(
                    "text-[10px] font-medium",
                    snapshot.actionBias === "加仓" ? "text-success" : "text-muted-foreground"
                  )}>
                    {snapshot.actionBias}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delta Changes Table */}
      <div className="px-5 py-4 border-b border-border">
        <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-3">
          30 天变化总览
        </div>
        <div className="space-y-2">
          {deltaMetrics.map((metric, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
              <span className="text-xs text-secondary-foreground w-24">{metric.label}</span>
              <div className="flex items-center gap-3 flex-1 justify-end">
                <div className="flex items-center gap-2 min-w-[80px] justify-end">
                  <span className="text-[10px] text-muted-foreground line-through">{metric.prev}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className={cn(
                    "w-3 h-3",
                    metric.positive ? "text-success" : "text-danger"
                  )} />
                </div>
                <div className="flex items-center gap-2 min-w-[80px]">
                  <span className="text-xs font-semibold text-foreground">{metric.current}</span>
                </div>
                <span className={cn(
                  "text-[10px] font-semibold px-2 py-0.5 rounded min-w-[50px] text-center",
                  metric.positive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                )}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evolution Timeline */}
      <div className="p-5">
        <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-4">
          变更时间线
        </div>
        <div className="relative">
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border" />
          <div className="space-y-4">
            {evolutionEvents.map((event, i) => {
              const config = eventTypeConfig[event.type]
              const EventIcon = config.icon
              return (
                <div key={i} className="flex items-start gap-3 relative group">
                  <div className={cn(
                    "w-[23px] h-[23px] rounded-full flex items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-110",
                    config.bg
                  )}>
                    <EventIcon className={cn("w-3 h-3", config.color)} />
                  </div>
                  <div className="flex-1 -mt-0.5 pb-3 border-b border-border/30 last:border-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <span className="text-xs font-medium text-foreground">{event.title}</span>
                        <span className="text-[9px] text-muted-foreground ml-2">{event.date}</span>
                      </div>
                      <span className={cn(
                        "text-[9px] font-semibold px-1.5 py-0.5 rounded",
                        event.positive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                      )}>
                        {event.impact}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-5 py-3 border-t border-border bg-secondary/10 flex items-center justify-between">
        <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          <BarChart3 className="w-3 h-3" />
          完整历史
        </button>
        <button className="text-[10px] text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium">
          导出演化报告
          <ChevronRight className="w-3 h-3" />
        </button>
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
