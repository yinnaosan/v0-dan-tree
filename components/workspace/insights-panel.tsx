"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Bell, 
  Eye, 
  ExternalLink, 
  ChevronRight,
  Newspaper,
  BarChart2,
  Globe
} from "lucide-react"
import { cn } from "@/lib/utils"

interface WatchlistItem {
  symbol: string
  name: string
  price: string
  change: number
  signal?: "bullish" | "bearish" | "neutral"
}

interface NewsItem {
  id: string
  title: string
  source: string
  time: string
  sentiment?: "positive" | "negative" | "neutral"
}

const watchlist: WatchlistItem[] = [
  { symbol: "AMD", name: "Advanced Micro", price: "$178.45", change: 2.3, signal: "neutral" },
  { symbol: "AVGO", name: "Broadcom", price: "$1,432.10", change: -0.8 },
  { symbol: "TSM", name: "TSMC", price: "$142.30", change: 1.5, signal: "bullish" },
  { symbol: "MSFT", name: "Microsoft", price: "$412.80", change: 0.4 },
  { symbol: "GOOGL", name: "Alphabet", price: "$155.60", change: -1.2, signal: "bearish" },
]

const news: NewsItem[] = [
  {
    id: "1",
    title: "NVIDIA 宣布下一代 Blackwell 架构 GPU 产能扩张计划",
    source: "Reuters",
    time: "2h",
    sentiment: "positive",
  },
  {
    id: "2",
    title: "微软 Azure AI 基础设施投资将在 2024 年超过 500 亿美元",
    source: "Bloomberg",
    time: "4h",
    sentiment: "positive",
  },
  {
    id: "3",
    title: "中国加速本土 AI 芯片研发，华为昇腾新品即将发布",
    source: "SCMP",
    time: "6h",
    sentiment: "negative",
  },
  {
    id: "4",
    title: "分析师上调 NVDA 目标价至 $1,000，维持买入评级",
    source: "MS Research",
    time: "1d",
    sentiment: "positive",
  },
]

const signals = [
  { label: "RSI (14)", value: "58.2", status: "neutral" as const },
  { label: "MACD", value: "Bullish", status: "positive" as const },
  { label: "成交量", value: "+15%", status: "positive" as const },
  { label: "IV Rank", value: "42%", status: "neutral" as const },
]

export function InsightsPanel() {
  return (
    <div className="w-[260px] h-full bg-surface-sunken border-l border-border flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold text-foreground">Insights</h2>
        </div>
        <button className="p-1 rounded-md hover:bg-secondary transition-colors">
          <Bell className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Watchlist */}
        <div className="p-3 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              Watchlist
            </span>
            <button className="text-[10px] text-primary hover:underline">管理</button>
          </div>
          <div className="space-y-1">
            {watchlist.map((item) => (
              <WatchlistRow key={item.symbol} item={item} />
            ))}
          </div>
        </div>

        {/* Signals */}
        <div className="p-3 border-b border-border">
          <div className="flex items-center gap-1.5 mb-3">
            <BarChart2 className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              技术信号
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {signals.map((signal) => (
              <div key={signal.label} className="p-2 bg-secondary/30 rounded">
                <div className="text-[10px] text-muted-foreground mb-1">{signal.label}</div>
                <div className={cn(
                  "text-xs font-medium",
                  signal.status === "positive" ? "text-success" :
                  signal.status === "negative" ? "text-danger" : "text-foreground"
                )}>
                  {signal.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related News */}
        <div className="p-3">
          <div className="flex items-center gap-1.5 mb-3">
            <Newspaper className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              相关资讯
            </span>
          </div>
          <div className="space-y-2">
            {news.map((item) => (
              <NewsRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <button className="w-full flex items-center justify-center gap-1.5 py-2 text-[10px] text-muted-foreground hover:text-foreground transition-colors">
          <Globe className="w-3 h-3" />
          查看更多市场数据
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}

function WatchlistRow({ item }: { item: WatchlistItem }) {
  const isPositive = item.change > 0
  const isNegative = item.change < 0

  return (
    <button className="w-full flex items-center justify-between py-1.5 px-2 rounded hover:bg-secondary/50 transition-colors group">
      <div className="flex items-center gap-2">
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-foreground">{item.symbol}</span>
            {item.signal && (
              <span className={cn(
                "w-1.5 h-1.5 rounded-full",
                item.signal === "bullish" ? "bg-success" :
                item.signal === "bearish" ? "bg-danger" : "bg-warning"
              )} />
            )}
          </div>
          <span className="text-[10px] text-muted-foreground">{item.name}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs font-medium text-foreground">{item.price}</div>
        <div className={cn(
          "text-[10px] flex items-center justify-end gap-0.5",
          isPositive ? "text-success" : isNegative ? "text-danger" : "text-muted-foreground"
        )}>
          {isPositive ? <TrendingUp className="w-2.5 h-2.5" /> :
           isNegative ? <TrendingDown className="w-2.5 h-2.5" /> :
           <Minus className="w-2.5 h-2.5" />}
          {isPositive ? "+" : ""}{item.change}%
        </div>
      </div>
    </button>
  )
}

function NewsRow({ item }: { item: NewsItem }) {
  return (
    <button className="w-full text-left p-2 rounded hover:bg-secondary/30 transition-colors group">
      <div className="flex items-start gap-2">
        {item.sentiment && (
          <div className={cn(
            "w-1 h-1 rounded-full mt-1.5 shrink-0",
            item.sentiment === "positive" ? "bg-success" :
            item.sentiment === "negative" ? "bg-danger" : "bg-muted-foreground"
          )} />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-foreground leading-relaxed line-clamp-2 group-hover:text-primary transition-colors">
            {item.title}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-muted-foreground">{item.source}</span>
            <span className="text-[10px] text-muted-foreground">·</span>
            <span className="text-[10px] text-muted-foreground">{item.time}</span>
          </div>
        </div>
        <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
      </div>
    </button>
  )
}
