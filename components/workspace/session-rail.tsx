"use client"

import { useState } from "react"
import { Search, Plus, Pin, Clock, TrendingUp, AlertTriangle, Target, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

interface Session {
  id: string
  title: string
  type: "thesis" | "timing" | "risk" | "research"
  updatedAt: string
  stance?: "bullish" | "bearish" | "neutral"
  hasAlert?: boolean
  isPinned?: boolean
}

const pinnedSessions: Session[] = [
  {
    id: "1",
    title: "NVDA 长期持仓",
    type: "thesis",
    updatedAt: "2h",
    stance: "bullish",
    isPinned: true,
  },
  {
    id: "2",
    title: "BTC 周期分析",
    type: "timing",
    updatedAt: "5h",
    stance: "neutral",
    hasAlert: true,
    isPinned: true,
  },
]

const recentSessions: Session[] = [
  {
    id: "3",
    title: "TSLA 财报前瞻",
    type: "research",
    updatedAt: "1d",
    stance: "bearish",
  },
  {
    id: "4",
    title: "美债利率风险",
    type: "risk",
    updatedAt: "2d",
    hasAlert: true,
  },
  {
    id: "5",
    title: "AI 芯片赛道",
    type: "thesis",
    updatedAt: "3d",
    stance: "bullish",
  },
  {
    id: "6",
    title: "港股科技配置",
    type: "research",
    updatedAt: "5d",
  },
]

const typeIcons = {
  thesis: Target,
  timing: Clock,
  risk: AlertTriangle,
  research: Lightbulb,
}

const stanceColors = {
  bullish: "bg-success/20 text-success",
  bearish: "bg-danger/20 text-danger",
  neutral: "bg-warning/20 text-warning",
}

export function SessionRail() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSession, setActiveSession] = useState("1")

  return (
    <div className="w-[220px] h-full bg-[oklch(0.08_0.005_250)] border-r border-border/50 flex flex-col">
      {/* Logo */}
      <div className="px-3 py-3 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-foreground/90 tracking-tight">DanTree</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-2.5 py-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground/50" />
          <input
            type="text"
            placeholder="搜索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-7 pl-7 pr-2 text-[11px] bg-secondary/30 border border-border/30 rounded text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/30"
          />
        </div>
      </div>

      {/* New Session Button */}
      <div className="px-2.5 pb-2">
        <button className="w-full h-7 flex items-center justify-center gap-1 text-[11px] font-medium bg-primary/8 hover:bg-primary/15 text-primary/80 rounded transition-colors">
          <Plus className="w-3 h-3" />
          新建
        </button>
      </div>

      {/* Sessions List */}
      <div className="flex-1 overflow-y-auto">
        {/* Pinned Sessions */}
        <div className="px-2.5 py-2">
          <div className="flex items-center gap-1 px-1 mb-1.5">
            <Pin className="w-2.5 h-2.5 text-muted-foreground/50" />
            <span className="text-[9px] font-medium text-muted-foreground/60 uppercase tracking-wider">已固定</span>
          </div>
          <div className="space-y-0.5">
            {pinnedSessions.map((session) => (
              <SessionItem
                key={session.id}
                session={session}
                isActive={activeSession === session.id}
                onClick={() => setActiveSession(session.id)}
              />
            ))}
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="px-2.5 py-2">
          <div className="flex items-center gap-1 px-1 mb-1.5">
            <Clock className="w-2.5 h-2.5 text-muted-foreground/50" />
            <span className="text-[9px] font-medium text-muted-foreground/60 uppercase tracking-wider">最近</span>
          </div>
          <div className="space-y-0.5">
            {recentSessions.map((session) => (
              <SessionItem
                key={session.id}
                session={session}
                isActive={activeSession === session.id}
                onClick={() => setActiveSession(session.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-2.5 py-2 border-t border-border/30">
        <div className="flex items-center gap-2 px-1.5 py-1 rounded hover:bg-secondary/20 transition-colors cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-secondary/50 flex items-center justify-center">
            <span className="text-[10px] font-medium text-muted-foreground">D</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-foreground/80 truncate">David Chen</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SessionItem({
  session,
  isActive,
  onClick,
}: {
  session: Session
  isActive: boolean
  onClick: () => void
}) {
  const TypeIcon = typeIcons[session.type]

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full px-2 py-1.5 rounded text-left transition-all group",
        isActive
          ? "bg-primary/10 border-l-2 border-primary"
          : "hover:bg-secondary/30 border-l-2 border-transparent"
      )}
    >
      <div className="flex items-start gap-1.5">
        <TypeIcon className={cn(
          "w-3 h-3 mt-0.5 shrink-0",
          isActive ? "text-primary" : "text-muted-foreground/60"
        )} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className={cn(
              "text-[11px] font-medium truncate",
              isActive ? "text-foreground" : "text-foreground/70"
            )}>
              {session.title}
            </span>
            {session.hasAlert && (
              <span className="w-1.5 h-1.5 rounded-full bg-danger shrink-0 animate-pulse" />
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] text-muted-foreground/60">
              {session.updatedAt}
            </span>
            {session.stance && (
              <span className={cn(
                "text-[8px] px-1 py-0.5 rounded font-semibold uppercase tracking-wider",
                session.stance === "bullish" ? "text-success/80" : 
                session.stance === "bearish" ? "text-danger/80" : "text-warning/80"
              )}>
                {session.stance === "bullish" ? "Long" : session.stance === "bearish" ? "Short" : "Neutral"}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
