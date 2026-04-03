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
    <div className="w-[220px] h-full bg-[oklch(0.08_0.005_250)] border-l border-border/50 flex flex-col">
      {/* Header */}
      <div className="px-3 py-2 border-b border-border/30 flex items-center justify-between">
        <span className="text-[10px] font-medium text-muted-foreground/70 uppercase tracking-wider">Insights</span>
        <button className="p-1 rounded-md hover:bg-secondary/30 transition-colors">
          <Bell className="w-3 h-3 text-muted-foreground/50" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Watchlist */}
        <div className="p-2.5 border-b border-border/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-medium text-muted-foreground/50 uppercase tracking-wider">
              Watchlist
            </span>
          </div>
          <div className="space-y-0.5">
            {watchlist.slice(0, 4).map((item) => (
              <WatchlistRow key={item.symbol} item={item} />
            ))}
          </div>
        </div>

        {/* Signals */}
        <div className="p-2.5 border-b border-border/20">
          <div className="flex items-center gap-1 mb-2">
            <BarChart2 className="w-2.5 h-2.5 text-muted-foreground/40" />
            <span className="text-[9px] font-medium text-muted-foreground/50 uppercase tracking-wider">
              Signals
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {signals.map((signal) => (
              <div key={signal.label} className="p-1.5 bg-secondary/15 rounded">
                <div className="text-[8px] text-muted-foreground/50 mb-0.5">{signal.label}</div>
                <div className={cn(
                  "text-[10px] font-medium",
                  signal.status === "positive" ? "text-success/70" :
                  signal.status === "negative" ? "text-danger/70" : "text-foreground/60"
                )}>
                  {signal.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related News */}
        <div className="p-2.5">
          <div className="flex items-center gap-1 mb-2">
            <Newspaper className="w-2.5 h-2.5 text-muted-foreground/40" />
            <span className="text-[9px] font-medium text-muted-foreground/50 uppercase tracking-wider">
              News
            </span>
          </div>
          <div className="space-y-1.5">
            {news.slice(0, 3).map((item) => (
              <NewsRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-border/20">
        <button className="w-full flex items-center justify-center gap-1 py-1.5 text-[9px] text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          <Globe className="w-2.5 h-2.5" />
          更多
        </button>
      </div>
    </div>
  )
}

function WatchlistRow({ item }: { item: WatchlistItem }) {
  const isPositive = item.change > 0
  const isNegative = item.change < 0

  return (
    <button className="w-full flex items-center justify-between py-1 px-1.5 rounded hover:bg-secondary/20 transition-colors group">
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] font-medium text-foreground/70">{item.symbol}</span>
        {item.signal && (
          <span className={cn(
            "w-1 h-1 rounded-full",
            item.signal === "bullish" ? "bg-success/60" :
            item.signal === "bearish" ? "bg-danger/60" : "bg-warning/60"
          )} />
        )}
      </div>
      <div className={cn(
        "text-[9px] font-medium",
        isPositive ? "text-success/60" : isNegative ? "text-danger/60" : "text-muted-foreground/50"
      )}>
        {isPositive ? "+" : ""}{item.change}%
      </div>
    </button>
  )
}

function NewsRow({ item }: { item: NewsItem }) {
  return (
    <button className="w-full text-left p-1.5 rounded hover:bg-secondary/15 transition-colors group">
      <div className="flex items-start gap-1.5">
        {item.sentiment && (
          <div className={cn(
            "w-1 h-1 rounded-full mt-1 shrink-0",
            item.sentiment === "positive" ? "bg-success/50" :
            item.sentiment === "negative" ? "bg-danger/50" : "bg-muted-foreground/30"
          )} />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-foreground/60 leading-relaxed line-clamp-2">
            {item.title}
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[8px] text-muted-foreground/40">{item.source}</span>
            <span className="text-[8px] text-muted-foreground/30">·</span>
            <span className="text-[8px] text-muted-foreground/40">{item.time}</span>
          </div>
        </div>
      </div>
    </button>
  )
}
