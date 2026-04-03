"use client"

import { 
  TrendingUp, 
  TrendingDown, 
  ExternalLink, 
  Newspaper,
  BarChart2,
  Eye,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"

interface WatchlistItem {
  symbol: string
  change: number
  signal?: "bullish" | "bearish"
  relevance?: string
}

interface NewsItem {
  id: string
  title: string
  source: string
  time: string
  sentiment?: "positive" | "negative" | "neutral"
  relevance: "high" | "medium" | "low"
}

const watchlist: WatchlistItem[] = [
  { symbol: "AMD", change: 2.3, signal: "bullish", relevance: "竞争对手" },
  { symbol: "TSM", change: 1.5, signal: "bullish", relevance: "供应商" },
  { symbol: "MSFT", change: 0.4, relevance: "大客户" },
  { symbol: "AVGO", change: -0.8, relevance: "同业" },
]

const news: NewsItem[] = [
  {
    id: "1",
    title: "NVIDIA Blackwell 架构 GPU 产能扩张计划公布",
    source: "Reuters",
    time: "2h",
    sentiment: "positive",
    relevance: "high",
  },
  {
    id: "2",
    title: "微软 Azure AI 基础设施投资超 500 亿美元",
    source: "Bloomberg",
    time: "4h",
    sentiment: "positive",
    relevance: "high",
  },
  {
    id: "3",
    title: "分析师上调 NVDA 目标价至 $1,000",
    source: "MS Research",
    time: "1d",
    sentiment: "positive",
    relevance: "medium",
  },
]

const signals = [
  { label: "RSI (14)", value: "58.2", status: "neutral" as const, note: "中性区间" },
  { label: "MACD", value: "Bullish", status: "positive" as const, note: "金叉确认" },
  { label: "成交量", value: "+15%", status: "positive" as const, note: "放量上行" },
]

export function InsightsPanel() {
  return (
    <aside className="w-52 h-full bg-[oklch(0.065_0.002_250)] border-l border-border/15 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/15 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-muted-foreground/50" />
          <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Intelligence</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Related Tickers */}
        <div className="p-4 border-b border-border/10">
          <div className="flex items-center gap-1.5 mb-3">
            <Eye className="w-3 h-3 text-muted-foreground/40" />
            <span className="text-xs font-medium text-muted-foreground/50 uppercase tracking-wider">
              Related
            </span>
          </div>
          <div className="space-y-2">
            {watchlist.map((item) => (
              <WatchlistRow key={item.symbol} item={item} />
            ))}
          </div>
        </div>

        {/* Technical Signals */}
        <div className="p-4 border-b border-border/10">
          <div className="flex items-center gap-1.5 mb-3">
            <BarChart2 className="w-3 h-3 text-muted-foreground/40" />
            <span className="text-xs font-medium text-muted-foreground/50 uppercase tracking-wider">
              Signals
            </span>
          </div>
          <div className="space-y-2.5">
            {signals.map((signal) => (
              <div key={signal.label} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground/60">{signal.label}</span>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-xs font-medium",
                    signal.status === "positive" ? "text-success/70" :
                    signal.status === "negative" ? "text-danger/70" : "text-foreground/60"
                  )}>
                    {signal.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curated News */}
        <div className="p-4">
          <div className="flex items-center gap-1.5 mb-3">
            <Newspaper className="w-3 h-3 text-muted-foreground/40" />
            <span className="text-xs font-medium text-muted-foreground/50 uppercase tracking-wider">
              News
            </span>
          </div>
          <div className="space-y-3">
            {news.map((item) => (
              <NewsRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border/10">
        <button className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors rounded-md hover:bg-secondary/15">
          <ExternalLink className="w-3 h-3" />
          更多情报
        </button>
      </div>
    </aside>
  )
}

function WatchlistRow({ item }: { item: WatchlistItem }) {
  const isPositive = item.change > 0
  const isNegative = item.change < 0

  return (
    <div className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-secondary/15 transition-colors cursor-pointer group">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground/70">{item.symbol}</span>
        {item.signal && (
          <span className={cn(
            "w-1.5 h-1.5 rounded-full",
            item.signal === "bullish" ? "bg-success/60" : "bg-danger/60"
          )} />
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-xs font-medium",
          isPositive ? "text-success/70" : isNegative ? "text-danger/70" : "text-muted-foreground/50"
        )}>
          {isPositive ? "+" : ""}{item.change}%
        </span>
      </div>
    </div>
  )
}

function NewsRow({ item }: { item: NewsItem }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex items-start gap-2">
        {item.relevance === "high" && (
          <div className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors">
            {item.title}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] text-muted-foreground/40">{item.source}</span>
            <span className="text-[10px] text-muted-foreground/30">·</span>
            <span className="text-[10px] text-muted-foreground/40">{item.time}</span>
            {item.sentiment === "positive" && (
              <TrendingUp className="w-2.5 h-2.5 text-success/50 ml-auto" />
            )}
            {item.sentiment === "negative" && (
              <TrendingDown className="w-2.5 h-2.5 text-danger/50 ml-auto" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
