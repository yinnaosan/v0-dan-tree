"use client"

// Global top bar component for workspace navigation and status
import { Settings, Bell, Search, Wifi, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function GlobalTopBar() {
  return (
    <div className="h-10 w-full bg-[oklch(0.07_0.003_250)] border-b border-border/30 flex items-center justify-between px-4">
      {/* Left: Global Context */}
      <div className="flex items-center gap-4">
        {/* Current Workspace */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">Workspace</span>
          <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-secondary/20 transition-colors">
            <span className="text-xs font-medium text-foreground/80">Investment Research</span>
            <ChevronDown className="w-3 h-3 text-muted-foreground/50" />
          </button>
        </div>
        
        <div className="w-px h-4 bg-border/30" />
        
        {/* Current Object Anchor */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-success/15 flex items-center justify-center">
            <span className="text-[10px] font-bold text-success">N</span>
          </div>
          <span className="text-xs font-medium text-foreground/70">NVDA</span>
          <span className="text-[9px] text-muted-foreground/40">Thesis Session</span>
        </div>
      </div>

      {/* Center: Light System Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-success/8">
          <Wifi className="w-3 h-3 text-success/60" />
          <span className="text-[10px] text-success/70">Live</span>
        </div>
        <span className="text-[9px] text-muted-foreground/40">Last sync: 2 min ago</span>
      </div>

      {/* Right: Global Controls */}
      <div className="flex items-center gap-2">
        <button className="p-1.5 rounded hover:bg-secondary/20 transition-colors">
          <Search className="w-3.5 h-3.5 text-muted-foreground/50" />
        </button>
        <button className="p-1.5 rounded hover:bg-secondary/20 transition-colors relative">
          <Bell className="w-3.5 h-3.5 text-muted-foreground/50" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-danger" />
        </button>
        <button className="p-1.5 rounded hover:bg-secondary/20 transition-colors">
          <Settings className="w-3.5 h-3.5 text-muted-foreground/50" />
        </button>
      </div>
    </div>
  )
}
