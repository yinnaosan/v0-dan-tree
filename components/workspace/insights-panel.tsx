"use client"

import { 
  TrendingUp, 
  TrendingDown,
  ChevronRight,
  BarChart2,
  Newspaper
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
  { title: "NVIDIA 宣布下一代 Blackwell 架构 GPU 产能扩张计划", source: "Reuters", time: "2h", important: true },
  { title: "微软 Azure AI 基础设施投资将在 2024 年超过 500 亿美元", source: "Bloomberg", time: "4h" },
  { title: "中国加速本土 AI 芯片研发，华为昇腾新品即将发布", source: "SCMP", time: "6h" },
  { title: "分析师上调 NVDA 目标价至 $1,000，维持买入评级", source: "MS Research", time: "1d" },
]

export function InsightsPanel() {
  return (
    <aside className="w-52 h-full bg-[oklch(0.07_0.003_250)] border-l border-border/10 flex flex-col">
      {/* Header */}
      <div className="px-3.5 py-3 border-b border-border/8 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <BarChart2 className="w-3.5 h-3.5 text-muted-foreground/40" />
          <span className="text-xs font-semibold text-foreground/70">Insights</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Watchlist */}
        <div className="p-3.5 border-b border-border/6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-wider">Watchlist</span>
            <span className="text-[10px] text-muted-foreground/30">管理</span>
          </div>
          <div className="space-y-1.5">
            {watchlist.map((item) => (
              <div key={item.symbol} className="flex items-center justify-between py-1 group cursor-pointer hover:bg-secondary/10 -mx-1.5 px-1.5 rounded">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium text-foreground/75 group-hover:text-foreground">{item.symbol}</span>
                  <div className={cn("w-1 h-1 rounded-full", item.up ? "bg-success/70" : "bg-danger/70")} />
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-foreground/60">{item.price}</div>
                  <div className={cn("text-[10px]", item.up ? "text-success/60" : "text-danger/60")}>{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technicals */}
        <div className="p-3.5 border-b border-border/6">
          <span className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-wider mb-2.5 block">技术信号</span>
          <div className="grid grid-cols-2 gap-2.5">
            {technicals.map((item) => (
              <div key={item.label}>
                <div className="text-[10px] text-muted-foreground/40 mb-0.5">{item.label}</div>
                <div className={cn(
                  "text-sm font-semibold",
                  item.highlight ? "text-success/70" : "text-foreground/60"
                )}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="p-3.5">
          <div className="flex items-center gap-1 mb-2.5">
            <Newspaper className="w-3 h-3 text-muted-foreground/30" />
            <span className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-wider">相关资讯</span>
          </div>
          <div className="space-y-2.5">
            {news.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex gap-1.5">
                  <div className={cn(
                    "w-1 h-1 rounded-full mt-1.5 shrink-0",
                    item.important ? "bg-primary/60" : "bg-muted-foreground/20"
                  )} />
                  <div>
                    <p className="text-xs text-foreground/60 leading-snug group-hover:text-foreground/80 line-clamp-2">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[10px] text-muted-foreground/40">{item.source}</span>
                      <span className="text-[10px] text-muted-foreground/20">·</span>
                      <span className="text-[10px] text-muted-foreground/30">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-2.5 border-t border-border/6">
        <button className="w-full flex items-center justify-center gap-1 py-1.5 text-[10px] text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
          <span>查看更多市场数据</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  )
}
