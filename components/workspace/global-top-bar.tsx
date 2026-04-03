"use client"

// Global workspace top bar
import { Settings, Bell, Search, Wifi, ChevronDown, TrendingUp } from "lucide-react"

export function GlobalTopBar() {
  return (
    <div className="h-11 w-full bg-[oklch(0.065_0.003_250)] border-b border-border/20 flex items-center justify-between px-4">
      {/* Left: Brand + Context */}
      <div className="flex items-center gap-5">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary/15 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-primary/80" />
          </div>
          <span className="text-sm font-semibold text-foreground/85 tracking-tight">DanTree</span>
        </div>
        
        <div className="w-px h-5 bg-border/20" />
        
        {/* Current Context - Minimal */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-success/12 flex items-center justify-center">
              <span className="text-[10px] font-bold text-success">N</span>
            </div>
            <span className="text-xs font-medium text-foreground/65">NVDA</span>
          </div>
          <span className="text-[10px] text-muted-foreground/35">Thesis Session</span>
        </div>
      </div>

      {/* Center: System Status - Subtle */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-success/8">
          <Wifi className="w-3 h-3 text-success/50" />
          <span className="text-[10px] text-success/60 font-medium">Live</span>
        </div>
        <span className="text-[9px] text-muted-foreground/30">Synced 2m ago</span>
      </div>

      {/* Right: Global Actions - Minimal */}
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-md hover:bg-secondary/15 transition-colors">
          <Search className="w-4 h-4 text-muted-foreground/40" />
        </button>
        <button className="p-2 rounded-md hover:bg-secondary/15 transition-colors relative">
          <Bell className="w-4 h-4 text-muted-foreground/40" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-danger" />
        </button>
        <button className="p-2 rounded-md hover:bg-secondary/15 transition-colors">
          <Settings className="w-4 h-4 text-muted-foreground/40" />
        </button>
      </div>
    </div>
  )
}
