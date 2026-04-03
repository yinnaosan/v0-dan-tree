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
        
        {/* Decision Spine - 5-Part Workflow */}
        <div className="mt-6 space-y-4">
          {/* 1. Thesis - Core investment logic */}
          <ThesisBlock />
          {/* 2. Timing - When to act */}
          <TimingBlock />
          {/* 3. Alert - Risk discipline */}
          <AlertBlock />
          {/* 4. History - Decision evolution */}
          <HistoryBlock />
        </div>
      </div>
    </div>
  )
}

function DecisionHeader() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Compact Control Bar */}
      <div className="px-5 py-4 flex items-center justify-between">
        {/* Left: Asset + Session Type */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-success/15 flex items-center justify-center border border-success/20">
              <span className="text-base font-bold text-success">N</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base font-semibold text-foreground">NVDA</h1>
                <span className="text-[10px] text-muted-foreground/70">NASDAQ</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Target className="w-3 h-3 text-primary/70" />
                <span className="text-[10px] text-muted-foreground">Thesis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Key Decision Signals */}
        <div className="flex items-center gap-5">
          {/* Stance */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-success/10 border border-success/20">
            <TrendingUp className="w-3.5 h-3.5 text-success" />
            <span className="text-xs font-bold text-success">Bullish</span>
          </div>

          {/* Readiness */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "w-1.5 h-4 rounded-sm transition-colors",
                    i <= 4 ? "bg-primary" : "bg-secondary/50"
                  )}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-foreground">4/5</span>
          </div>

          {/* Action Bias */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-primary/10 border border-primary/20">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">加仓</span>
          </div>

          {/* Alert */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-warning/10 border border-warning/20">
            <AlertTriangle className="w-3.5 h-3.5 text-warning" />
            <span className="text-xs font-semibold text-warning">Medium</span>
          </div>
        </div>

        {/* Right: Delta + Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-success/5">
            <ArrowUpRight className="w-3.5 h-3.5 text-success" />
            <span className="text-xs font-semibold text-success">+12%</span>
            <span className="text-[9px] text-muted-foreground">vs 上周</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-md hover:bg-secondary/50 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-secondary/50 transition-colors">
              <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Footer */}
      <div className="px-5 py-2 bg-secondary/20 border-t border-border/50 flex items-center gap-1.5 text-muted-foreground/70">
        <Clock className="w-2.5 h-2.5" />
        <span className="text-[9px]">更新: 今天 14:32 · AI 自动同步</span>
      </div>
    </div>
  )
}

function ThesisBlock() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-secondary/5">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
            <Target className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-foreground">Thesis</h2>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-success/10 text-success font-medium">核心逻辑</span>
          </div>
        </div>
        <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          详细
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
      <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-secondary/5">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
            <Clock className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-foreground">Timing</h2>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-warning/10 text-warning font-medium">时机</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-success/15 border border-success/20">
          <Zap className="w-3 h-3 text-success" />
          <span className="text-[10px] font-bold text-success">适合介入</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Action-Oriented Timing Metrics */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          <div className="p-3 bg-success/5 border border-success/20 rounded-lg text-center">
            <div className="text-xl font-bold text-success mb-0.5">72</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Readiness</div>
          </div>
          <div className="p-3 bg-secondary/30 rounded-lg text-center">
            <div className="text-xl font-bold text-foreground mb-0.5">$890</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Entry Zone</div>
          </div>
          <div className="p-3 bg-secondary/30 rounded-lg text-center">
            <div className="text-xl font-bold text-foreground mb-0.5">$1,050</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Target</div>
          </div>
          <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg text-center">
            <div className="text-xl font-bold text-warning mb-0.5">14d</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Catalyst</div>
          </div>
        </div>

        {/* Action Recommendation */}
        <div className="p-3 mb-5 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-foreground">建议操作</span>
            </div>
            <span className="text-xs font-bold text-primary">分 3 批在 $880-900 区间建仓</span>
          </div>
        </div>

        {/* Catalyst Timeline */}
        <div className="relative">
          <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-3">催化剂时间线</div>
          <div className="absolute left-[7px] top-8 bottom-2 w-px bg-border/50" />
          <div className="space-y-3">
            {[
              { date: "2024-02-21", event: "Q4 财报发布", status: "upcoming", importance: "high", daysAway: "14d" },
              { date: "2024-03-18", event: "GTC 大会", status: "upcoming", importance: "high", daysAway: "39d" },
              { date: "2024-01-08", event: "CES 主题演讲", status: "passed", importance: "medium", daysAway: "已过" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 relative">
                <div className={cn(
                  "w-[14px] h-[14px] rounded-full border-2 shrink-0 z-10 mt-0.5",
                  item.status === "upcoming" 
                    ? "bg-primary/20 border-primary" 
                    : "bg-secondary/50 border-border/50"
                )} />
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-xs font-medium",
                        item.status === "upcoming" ? "text-foreground" : "text-muted-foreground"
                      )}>{item.event}</span>
                      {item.importance === "high" && item.status === "upcoming" && (
                        <span className="text-[8px] px-1 py-0.5 rounded bg-warning/10 text-warning font-semibold uppercase">重要</span>
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground">{item.date}</span>
                  </div>
                  <span className={cn(
                    "text-[10px] font-medium",
                    item.status === "upcoming" ? "text-primary" : "text-muted-foreground"
                  )}>{item.daysAway}</span>
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

  // Decision discipline checklist
  const disciplineChecklist = [
    { id: "stop_loss", label: "止损线已设定", checked: true, detail: "$800 (-10%)" },
    { id: "position_size", label: "仓位符合风险预算", checked: true, detail: "5% 组合占比" },
    { id: "catalyst_aware", label: "催化剂风险已评估", checked: true, detail: "Q4 财报前" },
    { id: "thesis_invalidation", label: "论点失效条件已定义", checked: false, detail: "待完善" },
  ]

  // Risk-adjusted position guidance
  const positionGuidance = {
    riskScore: 68,
    maxPosition: "5%",
    suggestedEntry: "分 3 批建仓",
    riskRewardRatio: "1:2.5",
    confidenceLevel: "中高",
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header - Consistent with Decision Spine */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-secondary/5">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-warning/15 flex items-center justify-center relative">
            <Shield className="w-3.5 h-3.5 text-warning" />
            {criticalCount > 0 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-danger flex items-center justify-center">
                <span className="text-[7px] font-bold text-white">{criticalCount}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-foreground">Risk Control</h2>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-warning/10 text-warning font-medium">风险纪律</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {criticalCount > 0 && (
            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-danger/15 text-danger font-semibold">
              {criticalCount} Critical
            </span>
          )}
          {highCount > 0 && (
            <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-warning/15 text-warning font-semibold">
              {highCount} High
            </span>
          )}
          <span className="text-[9px] text-muted-foreground">{alerts.length} 项</span>
        </div>
      </div>

      {/* Risk Assessment Bar */}
      <div className="px-5 py-3 border-b border-border/50">

        {/* Overall Risk Assessment Bar */}
        <div className="bg-secondary/30 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">整体风险评估</span>
            <div className="flex items-center gap-2">
              <span className={cn(
                "text-xs font-bold",
                positionGuidance.riskScore >= 70 ? "text-warning" : positionGuidance.riskScore >= 50 ? "text-accent" : "text-success"
              )}>
                {positionGuidance.riskScore}/100
              </span>
              <span className="text-[10px] text-muted-foreground">中等偏高</span>
            </div>
          </div>
          <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all",
                positionGuidance.riskScore >= 70 ? "bg-warning" : positionGuidance.riskScore >= 50 ? "bg-accent" : "bg-success"
              )}
              style={{ width: `${positionGuidance.riskScore}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[9px] text-success">低风险</span>
            <span className="text-[9px] text-warning">中风险</span>
            <span className="text-[9px] text-danger">高风险</span>
          </div>
        </div>
      </div>

      {/* Risk Matrix Overview - Redesigned */}
      <div className="px-5 py-4 border-b border-border">
        <div className="grid grid-cols-2 gap-4">
          {/* Risk Metrics */}
          <div className="space-y-3">
            <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">风险指标</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="text-lg font-bold text-danger mb-0.5">$180</div>
                <div className="text-[9px] text-muted-foreground">最大损失预估</div>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="text-lg font-bold text-foreground mb-0.5">1:2.5</div>
                <div className="text-[9px] text-muted-foreground">风险回报比</div>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="text-lg font-bold text-warning mb-0.5">3</div>
                <div className="text-[9px] text-muted-foreground">待观察风险</div>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <div className="text-lg font-bold text-success mb-0.5">2</div>
                <div className="text-[9px] text-muted-foreground">已缓解风险</div>
              </div>
            </div>
          </div>

          {/* Position Guidance */}
          <div className="space-y-3">
            <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">仓位指导</div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-muted-foreground">建议仓位</span>
                <span className="text-sm font-bold text-primary">{positionGuidance.maxPosition}</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-muted-foreground">建仓策略</span>
                <span className="text-xs font-medium text-foreground">{positionGuidance.suggestedEntry}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">置信水平</span>
                <span className="text-xs font-medium text-success">{positionGuidance.confidenceLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Discipline Checklist */}
      <div className="px-5 py-4 border-b border-border bg-secondary/5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">决策纪律检查</div>
          <span className="text-[10px] text-success font-medium">
            {disciplineChecklist.filter(c => c.checked).length}/{disciplineChecklist.length} 已确认
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {disciplineChecklist.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-lg border transition-all",
                item.checked 
                  ? "bg-success/5 border-success/20" 
                  : "bg-warning/5 border-warning/20"
              )}
            >
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                item.checked ? "bg-success/20" : "bg-warning/20"
              )}>
                {item.checked ? (
                  <CheckCircle2 className="w-3 h-3 text-success" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-warning" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-foreground truncate">{item.label}</div>
                <div className={cn(
                  "text-[9px]",
                  item.checked ? "text-success" : "text-warning"
                )}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Severity Distribution */}
      <div className="px-5 py-3 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-danger" />
            <span className="text-[9px] text-muted-foreground">Critical ({criticalCount})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-warning" />
            <span className="text-[9px] text-muted-foreground">High ({highCount})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-accent" />
            <span className="text-[9px] text-muted-foreground">Medium ({alerts.filter(a => a.severity === "medium").length})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-muted-foreground/30" />
            <span className="text-[9px] text-muted-foreground">Low ({alerts.filter(a => a.severity === "low").length})</span>
          </div>
        </div>
      </div>

      {/* Alert Cards */}
      <div className="p-5 space-y-4">
        <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
          风险明细
        </div>
        {alerts.map((alert, i) => {
          const config = severityConfig[alert.severity]
          return (
            <div
              key={i}
              className={cn(
                "rounded-lg p-4 transition-all hover:translate-x-0.5 border-l-[3px]",
                config.bg,
                config.border
              )}
            >
              {/* Alert Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", config.icon)}>
                    <AlertTriangle className={cn("w-4 h-4", config.text)} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn("text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded", config.badge)}>
                        {alert.severity}
                      </span>
                      <span className="text-[9px] text-muted-foreground">{alert.category}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{alert.title}</h3>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className={cn("text-lg font-bold", config.text)}>{alert.probability}%</div>
                  <div className="text-[9px] text-muted-foreground">发生概率</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-secondary-foreground mb-4 leading-relaxed pl-11">
                {alert.description}
              </p>

              {/* Impact & Mitigation */}
              <div className="pl-11 grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-background/60 rounded-lg border border-border/50">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <ArrowDownRight className="w-3 h-3 text-danger" />
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider">潜在影响</span>
                  </div>
                  <p className="text-[11px] text-foreground font-medium leading-relaxed">{alert.impact}</p>
                </div>
                <div className="p-3 bg-background/60 rounded-lg border border-border/50">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Shield className="w-3 h-3 text-primary" />
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider">应对策略</span>
                  </div>
                  <p className="text-[11px] text-foreground font-medium leading-relaxed">{alert.mitigation}</p>
                </div>
              </div>

              {/* Triggers */}
              <div className="pl-11 flex items-center gap-2 flex-wrap">
                <span className="text-[9px] text-muted-foreground font-medium">触发条件:</span>
                {alert.triggers.map((trigger, j) => (
                  <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-background/80 text-secondary-foreground border border-border">
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
      <div className="px-5 py-4 border-t border-border bg-secondary/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            风险设置
          </button>
          <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" />
            设置预警
          </button>
        </div>
        <button className="text-[10px] text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 font-semibold px-3 py-1.5 bg-primary/10 rounded-md">
          生成风险报告
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}

function HistoryBlock() {
  // Thesis evolution data showing progression over time
  const thesisEvolution = {
    stages: [
      { date: "2023-12-01", stance: "Neutral", confidence: 45 },
      { date: "2023-12-15", stance: "Neutral", confidence: 55 },
      { date: "2024-01-05", stance: "Bullish", confidence: 68 },
      { date: "2024-01-15", stance: "Bullish", confidence: 82 },
    ],
    reason: "核心逻辑: AI 需求验证 → 竞争格局确认 → 产能扩张可见性",
  }

  // Previous vs Current comparison - the core comparison view
  const comparison = {
    previous: {
      label: "30 天前",
      date: "2023-12-15",
      stance: "Neutral",
      readiness: 2,
      alertLevel: "High",
      evidenceScore: 5,
      evidenceTotal: 12,
      actionBias: "观察",
      keyThesis: "AI 需求可持续性存疑，估值过高",
      mainRisks: ["估值风险", "需求可持续性", "竞争加剧"],
    },
    current: {
      label: "当前",
      date: "2024-01-15",
      stance: "Bullish",
      readiness: 4,
      alertLevel: "Medium",
      evidenceScore: 12,
      evidenceTotal: 15,
      actionBias: "加仓",
      keyThesis: "AI 基础设施核心供应商，护城河验证",
      mainRisks: ["估值风险", "地缘政治"],
    },
  }

  // State evolution tracking - shows how each metric changed
  const stateEvolution = [
    {
      metric: "Thesis Stance",
      icon: Target,
      history: [
        { date: "12-01", value: "Neutral", color: "text-muted-foreground" },
        { date: "12-15", value: "Neutral", color: "text-muted-foreground" },
        { date: "01-05", value: "Bullish", color: "text-success", isChange: true },
        { date: "01-15", value: "Bullish", color: "text-success" },
      ],
    },
    {
      metric: "Readiness",
      icon: Zap,
      history: [
        { date: "12-01", value: "1/5", color: "text-muted-foreground" },
        { date: "12-15", value: "2/5", color: "text-muted-foreground", isChange: true },
        { date: "01-05", value: "3/5", color: "text-foreground", isChange: true },
        { date: "01-15", value: "4/5", color: "text-primary", isChange: true },
      ],
    },
    {
      metric: "Alert Level",
      icon: AlertTriangle,
      history: [
        { date: "12-01", value: "High", color: "text-danger" },
        { date: "12-15", value: "High", color: "text-danger" },
        { date: "01-05", value: "High", color: "text-danger" },
        { date: "01-15", value: "Medium", color: "text-warning", isChange: true },
      ],
    },
    {
      metric: "Action Bias",
      icon: ArrowUpRight,
      history: [
        { date: "12-01", value: "回避", color: "text-danger" },
        { date: "12-15", value: "观察", color: "text-muted-foreground", isChange: true },
        { date: "01-05", value: "观望", color: "text-foreground", isChange: true },
        { date: "01-15", value: "加仓", color: "text-success", isChange: true },
      ],
    },
  ]

  // Key decision change markers
  const changeMarkers = [
    {
      date: "2024-01-05",
      type: "thesis_upgrade" as const,
      title: "Thesis 立场升级",
      from: "Neutral",
      to: "Bullish",
      trigger: "Q3 财报超预期 + 云厂商 CapEx 指引上调",
      rationale: "数据中心需求可持续性得到验证，AI 训练需求远超市场预期",
      confidence: "+23%",
    },
    {
      date: "2024-01-12",
      type: "alert_downgrade" as const,
      title: "风险等级下调",
      from: "High",
      to: "Medium",
      trigger: "估值回调至合理区间 + 竞品威胁减弱",
      rationale: "股价回调 12% 后估值压力缓解，AMD MI300X 首季出货低于预期",
      confidence: "风险降低",
    },
    {
      date: "2024-01-10",
      type: "action_upgrade" as const,
      title: "行动建议升级",
      from: "观望",
      to: "加仓",
      trigger: "Readiness 达到 4/5 + 时机窗口确认",
      rationale: "Q4 财报前窗口期，技术面支撑位确认，建议开始分批建仓",
      confidence: "执行就绪",
    },
  ]

  const changeTypeConfig = {
    thesis_upgrade: { icon: TrendingUp, color: "text-success", bg: "bg-success/10", border: "border-success/30" },
    thesis_downgrade: { icon: TrendingDown, color: "text-danger", bg: "bg-danger/10", border: "border-danger/30" },
    alert_downgrade: { icon: Shield, color: "text-success", bg: "bg-success/10", border: "border-success/30" },
    alert_upgrade: { icon: Shield, color: "text-danger", bg: "bg-danger/10", border: "border-danger/30" },
    action_upgrade: { icon: Zap, color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
    action_downgrade: { icon: Zap, color: "text-warning", bg: "bg-warning/10", border: "border-warning/30" },
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header - Consistent with Decision Spine */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-secondary/5">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
            <Clock className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-foreground">History</h2>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">演化追踪</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-success/15 text-success font-semibold">
            3 变更
          </span>
          <span className="text-[9px] text-muted-foreground">45d</span>
        </div>
      </div>

      {/* Thesis Evolution Bar */}
      <div className="px-5 py-3 border-b border-border/50 bg-secondary/20">
        <div className="bg-secondary/30 rounded p-2.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Thesis 置信度演化</span>
            <span className="text-[10px] text-primary font-semibold">
              {thesisEvolution.stages[0].confidence}% → {thesisEvolution.stages[thesisEvolution.stages.length - 1].confidence}%
            </span>
          </div>
          <div className="flex items-end gap-1 h-8 mb-2">
            {thesisEvolution.stages.map((stage, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className={cn(
                    "w-full rounded-sm transition-all",
                    stage.stance === "Bullish" ? "bg-success" : stage.stance === "Bearish" ? "bg-danger" : "bg-muted-foreground/50"
                  )}
                  style={{ height: `${stage.confidence * 0.35}px` }}
                />
                <span className="text-[8px] text-muted-foreground">{stage.date.slice(5)}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-secondary-foreground">{thesisEvolution.reason}</p>
        </div>
      </div>

      {/* Previous vs Current - Main Comparison */}
      <div className="px-5 py-4 border-b border-border">
        <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Previous vs Current
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Previous State */}
          <div className="p-4 bg-secondary/20 rounded-lg border border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-muted-foreground">{comparison.previous.label}</span>
              <span className="text-[9px] text-muted-foreground">{comparison.previous.date}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Minus className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">{comparison.previous.stance}</span>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Readiness</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={cn("w-1.5 h-3 rounded-sm", i <= comparison.previous.readiness ? "bg-muted-foreground" : "bg-secondary")} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Alert</span>
                <span className="text-[10px] font-medium text-danger">{comparison.previous.alertLevel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Evidence</span>
                <span className="text-[10px] font-medium text-foreground">{comparison.previous.evidenceScore}/{comparison.previous.evidenceTotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Action</span>
                <span className="text-[10px] font-medium text-muted-foreground">{comparison.previous.actionBias}</span>
              </div>
            </div>
            <div className="pt-3 border-t border-border">
              <p className="text-[10px] text-muted-foreground leading-relaxed">{comparison.previous.keyThesis}</p>
            </div>
          </div>

          {/* Current State */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-primary">{comparison.current.label}</span>
              <span className="text-[9px] text-muted-foreground">{comparison.current.date}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm font-semibold text-foreground">{comparison.current.stance}</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-success/15 text-success font-medium">升级</span>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Readiness</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={cn("w-1.5 h-3 rounded-sm", i <= comparison.current.readiness ? "bg-primary" : "bg-secondary")} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Alert</span>
                <span className="text-[10px] font-medium text-warning">{comparison.current.alertLevel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Evidence</span>
                <span className="text-[10px] font-medium text-foreground">{comparison.current.evidenceScore}/{comparison.current.evidenceTotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-muted-foreground">Action</span>
                <span className="text-[10px] font-medium text-success">{comparison.current.actionBias}</span>
              </div>
            </div>
            <div className="pt-3 border-t border-primary/20">
              <p className="text-[10px] text-foreground leading-relaxed">{comparison.current.keyThesis}</p>
            </div>
          </div>
        </div>
      </div>

      {/* State Evolution Matrix */}
      <div className="px-5 py-4 border-b border-border bg-secondary/5">
        <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-4">
          状态演化矩阵
        </div>
        <div className="space-y-3">
          {stateEvolution.map((row, idx) => {
            const MetricIcon = row.icon
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-24 flex items-center gap-2 shrink-0">
                  <MetricIcon className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] text-secondary-foreground">{row.metric}</span>
                </div>
                <div className="flex-1 flex items-center">
                  {row.history.map((point, i, arr) => (
                    <div key={i} className="flex items-center flex-1">
                      <div className={cn(
                        "flex-1 flex flex-col items-center gap-1 py-1.5 px-2 rounded-md transition-all",
                        point.isChange ? "bg-primary/10" : "bg-transparent"
                      )}>
                        <span className={cn("text-[10px] font-semibold", point.color)}>{point.value}</span>
                        <span className="text-[8px] text-muted-foreground">{point.date}</span>
                      </div>
                      {i < arr.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-muted-foreground/30 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key Decision Change Markers */}
      <div className="p-5">
        <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider mb-4">
          关键决策变更
        </div>
        <div className="space-y-4">
          {changeMarkers.map((marker, i) => {
            const config = changeTypeConfig[marker.type]
            const MarkerIcon = config.icon
            return (
              <div key={i} className={cn("p-4 rounded-lg border", config.bg, config.border)}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", config.bg)}>
                      <MarkerIcon className={cn("w-4 h-4", config.color)} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-foreground">{marker.title}</span>
                        <span className="text-[9px] text-muted-foreground">{marker.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground line-through">{marker.from}</span>
                        <ArrowUpRight className={cn("w-3 h-3", config.color)} />
                        <span className={cn("text-[10px] font-semibold", config.color)}>{marker.to}</span>
                      </div>
                    </div>
                  </div>
                  <span className={cn("text-[10px] font-semibold px-2 py-1 rounded-md", config.bg, config.color)}>
                    {marker.confidence}
                  </span>
                </div>
                <div className="pl-11 space-y-2">
                  <div>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider">触发因素</span>
                    <p className="text-[11px] text-foreground mt-0.5">{marker.trigger}</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider">决策依据</span>
                    <p className="text-[11px] text-secondary-foreground mt-0.5 leading-relaxed">{marker.rationale}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-5 py-3 border-t border-border bg-secondary/10 flex items-center justify-between">
        <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          <BarChart3 className="w-3 h-3" />
          完整历史记录
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
