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

const typeLabels = {
  thesis: "论点",
  timing: "时机",
  risk: "风控",
  research: "研究",
}

export function SessionRail() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSession, setActiveSession] = useState("1")

  return (
    <aside className="w-56 h-full bg-sidebar border-r border-border/20 flex flex-col">
      {/* Search + New */}
      <div className="px-3 py-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/40" />
          <input
            type="text"
            placeholder="搜索会话..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8 pl-8 pr-3 text-sm bg-secondary/25 border border-border/25 rounded-md text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 transition-colors"
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center bg-primary/10 hover:bg-primary/15 text-primary/70 rounded-md transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Sessions List */}
      <div className="flex-1 overflow-y-auto px-2">
        {/* Pinned Sessions */}
        <div className="py-2">
          <div className="flex items-center gap-1.5 px-2 mb-2">
            <Pin className="w-3 h-3 text-muted-foreground/40" />
            <span className="text-xs font-medium text-muted-foreground/50 uppercase tracking-wider">Pinned</span>
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
        <div className="py-2">
          <div className="flex items-center gap-1.5 px-2 mb-2">
            <Clock className="w-3 h-3 text-muted-foreground/40" />
            <span className="text-xs font-medium text-muted-foreground/50 uppercase tracking-wider">Recent</span>
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
      <div className="px-3 py-3 border-t border-border/15">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-md hover:bg-secondary/20 transition-colors cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-secondary/50 flex items-center justify-center">
            <span className="text-xs font-semibold text-foreground/70">D</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-sm font-medium text-foreground/80 block truncate">David Chen</span>
            <span className="text-xs text-muted-foreground/50">Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
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
        "w-full px-2.5 py-2.5 rounded-md text-left transition-all group",
        isActive
          ? "bg-primary/10 border-l-2 border-primary/70"
          : "hover:bg-secondary/25 border-l-2 border-transparent"
      )}
    >
      <div className="flex items-start gap-2.5">
        {/* Type Icon */}
        <div className={cn(
          "w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5",
          isActive ? "bg-primary/15" : "bg-secondary/30"
        )}>
          <TypeIcon className={cn(
            "w-3.5 h-3.5",
            isActive ? "text-primary/80" : "text-muted-foreground/50"
          )} />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className={cn(
              "text-sm font-medium truncate",
              isActive ? "text-foreground" : "text-foreground/75"
            )}>
              {session.title}
            </span>
            {session.hasAlert && (
              <span className="w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground/50">{typeLabels[session.type]}</span>
            {session.stance && (
              <span className={cn(
                "text-xs font-medium",
                session.stance === "bullish" ? "text-success/70" : 
                session.stance === "bearish" ? "text-danger/70" : "text-warning/70"
              )}>
                {session.stance === "bullish" ? "看多" : session.stance === "bearish" ? "看空" : "中性"}
              </span>
            )}
            <span className="text-xs text-muted-foreground/35 ml-auto">{session.updatedAt}</span>
          </div>
        </div>
      </div>
    </button>
  )
}
