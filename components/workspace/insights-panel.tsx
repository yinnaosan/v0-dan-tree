"use client"

import { 
  TrendingUp, 
  TrendingDown,
  ExternalLink,
  BarChart2,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const watchlist = [
  { symbol: "AMD", name: "Advanced Micro", price: "$178.45", change: "+2.3%", up: true },
  { symbol: "AVGO", name: "Broadcom", price: "$1,432.10", change: "-0.8%", up: false },
  { symbol: "TSM", name: "TSMC", price: "$142.30", change: "+1.5%", up: true },
  { symbol: "MSFT", name: "Microsoft", price: "$412.80", change: "+0.4%", up: true },
  { symbol: "GOOGL", name: "Alphabet", price: "$155.60", change: "-1.2%", up: false },
]

const technicals = [
  { label: "RSI (14)", value: "58.2" },
  { label: "MACD", value: "Bullish", highlight: true },
  { label: "成交量", value: "+15%", highlight: true },
  { label: "IV Rank", value: "42%" },
]

const news = [
  { title: "NVIDIA 宣布下一代 Blackwell 架构 GPU 产能扩张计划", source: "Reuters", time: "2h" },
  { title: "微软 Azure AI 基础设施投资将在 2024 年超过 500 亿美元", source: "Bloomberg", time: "4h" },
  { title: "中国加速本土 AI 芯片研发，华为昇腾新品即将发布", source: "SCMP", time: "6h" },
  { title: "分析师上调 NVDA 目标价至 $1,000，维持买入评级", source: "MS Research", time: "1d" },
]

export function InsightsPanel() {
  return (
    <aside className="w-56 h-full bg-[oklch(0.075_0.003_250)] border-l border-border/12 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-muted-foreground/50" />
          <span className="text-sm font-semibold text-foreground/80">Insights</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Watchlist Section */}
        <div className="p-4 border-b border-border/8">
          <span className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider mb-3 block">
            Watchlist
          </span>
          <div className="space-y-2">
            {watchlist.map((item) => (
              <div key={item.symbol} className="flex items-center justify-between py-1 group cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground">{item.symbol}</span>
                  <div className={cn("w-1.5 h-1.5 rounded-full", item.up ? "bg-success" : "bg-danger")} />
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground/70">{item.price}</div>
                  <div className={cn("text-xs", item.up ? "text-success/70" : "text-danger/70")}>{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Signals */}
        <div className="p-4 border-b border-border/8">
          <span className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider mb-3 block">
            技术信号
          </span>
          <div className="grid grid-cols-2 gap-3">
            {technicals.map((item) => (
              <div key={item.label}>
                <div className="text-xs text-muted-foreground/50 mb-0.5">{item.label}</div>
                <div className={cn(
                  "text-sm font-semibold",
                  item.highlight ? "text-success/80" : "text-foreground/70"
                )}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related News */}
        <div className="p-4">
          <span className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider mb-3 block">
            相关资讯
          </span>
          <div className="space-y-3">
            {news.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/70 leading-snug group-hover:text-foreground/90 line-clamp-2">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-xs text-muted-foreground/50">{item.source}</span>
                      <span className="text-xs text-muted-foreground/30">·</span>
                      <span className="text-xs text-muted-foreground/40">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border/8">
        <button className="w-full flex items-center justify-center gap-1 py-2 text-xs text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors">
          <span>查看更多市场数据</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  )
}
