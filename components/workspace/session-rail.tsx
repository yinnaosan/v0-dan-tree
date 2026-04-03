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
    <div className="w-[240px] h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-semibold text-foreground tracking-tight">DanTree</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索会话..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8 pl-8 pr-3 text-xs bg-sidebar-accent border border-sidebar-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
      </div>

      {/* New Session Button */}
      <div className="px-3 pb-3">
        <button className="w-full h-8 flex items-center justify-center gap-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors">
          <Plus className="w-3.5 h-3.5" />
          新建会话
        </button>
      </div>

      {/* Sessions List */}
      <div className="flex-1 overflow-y-auto">
        {/* Pinned Sessions */}
        <div className="px-3 py-2">
          <div className="flex items-center gap-1.5 px-1 mb-2">
            <Pin className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">已固定</span>
          </div>
          <div className="space-y-1">
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
        <div className="px-3 py-2">
          <div className="flex items-center gap-1.5 px-1 mb-2">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">最近</span>
          </div>
          <div className="space-y-1">
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
      <div className="px-3 py-3 border-t border-sidebar-border">
        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-sidebar-accent transition-colors cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs font-medium text-secondary-foreground">D</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">David Chen</p>
            <p className="text-[10px] text-muted-foreground">Pro Plan</p>
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
        "w-full px-2.5 py-2 rounded-md text-left transition-colors group",
        isActive
          ? "bg-sidebar-accent"
          : "hover:bg-sidebar-accent/50"
      )}
    >
      <div className="flex items-start gap-2">
        <TypeIcon className={cn(
          "w-3.5 h-3.5 mt-0.5 shrink-0",
          isActive ? "text-primary" : "text-muted-foreground"
        )} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className={cn(
              "text-xs font-medium truncate",
              isActive ? "text-foreground" : "text-sidebar-foreground"
            )}>
              {session.title}
            </span>
            {session.hasAlert && (
              <span className="w-1.5 h-1.5 rounded-full bg-danger shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-muted-foreground">
              {session.updatedAt}
            </span>
            {session.stance && (
              <span className={cn(
                "text-[9px] px-1.5 py-0.5 rounded font-medium",
                stanceColors[session.stance]
              )}>
                {session.stance === "bullish" ? "看多" : session.stance === "bearish" ? "看空" : "中性"}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
