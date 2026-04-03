"use client"

import { Settings, Bell, Wifi, TrendingUp, Clock } from "lucide-react"

export function GlobalTopBar() {
  return (
    <header className="h-11 w-full bg-[oklch(0.06_0.003_250)] border-b border-border/20 flex items-center justify-between px-5 sticky top-0 z-50">
      {/* Left: Brand */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-sm font-bold text-foreground tracking-tight">DanTree</span>
        </div>
      </div>

      {/* Center: Minimal - Asset info is now in DecisionCanvas header */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>Thesis 会话</span>
      </div>

      {/* Right: System Status + Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>14:32</span>
        </div>

        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-success/10 border border-success/20">
          <Wifi className="w-3 h-3 text-success" />
          <span className="text-xs font-medium text-success">Live</span>
        </div>

        <div className="w-px h-4 bg-border/20" />

        <div className="flex items-center gap-0.5">
          <button className="p-1.5 rounded-md hover:bg-secondary/30 transition-colors relative">
            <Bell className="w-4 h-4 text-muted-foreground/60" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-danger" />
          </button>
          <button className="p-1.5 rounded-md hover:bg-secondary/30 transition-colors">
            <Settings className="w-4 h-4 text-muted-foreground/60" />
          </button>
        </div>
      </div>
    </header>
  )
}
