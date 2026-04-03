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
    <div className="w-[200px] h-full bg-[oklch(0.06_0.003_250)] border-r border-border/30 flex flex-col">
      {/* Search + New */}
      <div className="px-2.5 py-2.5 flex items-center gap-1.5">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-muted-foreground/40" />
          <input
            type="text"
            placeholder="搜索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-6 pl-6 pr-2 text-[10px] bg-secondary/20 border border-border/20 rounded text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/20"
          />
        </div>
        <button className="w-6 h-6 flex items-center justify-center bg-primary/8 hover:bg-primary/12 text-primary/60 rounded transition-colors">
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Sessions List */}
      <div className="flex-1 overflow-y-auto">
        {/* Pinned Sessions */}
        <div className="px-2 py-2">
          <div className="flex items-center gap-1 px-1.5 mb-1">
            <Pin className="w-2 h-2 text-muted-foreground/40" />
            <span className="text-[8px] font-medium text-muted-foreground/40 uppercase tracking-wider">Pinned</span>
          </div>
          <div className="space-y-px">
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
        <div className="px-2 py-2">
          <div className="flex items-center gap-1 px-1.5 mb-1">
            <Clock className="w-2 h-2 text-muted-foreground/40" />
            <span className="text-[8px] font-medium text-muted-foreground/40 uppercase tracking-wider">Recent</span>
          </div>
          <div className="space-y-px">
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

      {/* User Profile - Minimal */}
      <div className="px-2 py-2 border-t border-border/20">
        <div className="flex items-center gap-2 px-1.5 py-1 rounded hover:bg-secondary/15 transition-colors cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-secondary/40 flex items-center justify-center">
            <span className="text-[9px] font-medium text-muted-foreground/60">D</span>
          </div>
          <span className="text-[10px] text-foreground/60 truncate">David</span>
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
        "w-full px-1.5 py-1.5 rounded text-left transition-all group",
        isActive
          ? "bg-primary/8 border-l-[2px] border-primary/60"
          : "hover:bg-secondary/20 border-l-[2px] border-transparent"
      )}
    >
      <div className="flex items-center gap-1.5">
        <TypeIcon className={cn(
          "w-2.5 h-2.5 shrink-0",
          isActive ? "text-primary/70" : "text-muted-foreground/40"
        )} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className={cn(
              "text-[10px] font-medium truncate",
              isActive ? "text-foreground/90" : "text-foreground/60"
            )}>
              {session.title}
            </span>
            {session.hasAlert && (
              <span className="w-1 h-1 rounded-full bg-warning/70 shrink-0" />
            )}
            {session.stance && (
              <span className={cn(
                "w-1 h-1 rounded-full shrink-0",
                session.stance === "bullish" ? "bg-success/50" : 
                session.stance === "bearish" ? "bg-danger/50" : "bg-warning/50"
              )} />
            )}
          </div>
        </div>
        <span className="text-[8px] text-muted-foreground/30">{session.updatedAt}</span>
      </div>
    </button>
  )
}
