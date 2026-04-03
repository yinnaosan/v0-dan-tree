"use client"

import { Settings, Bell, Search, Wifi, Activity } from "lucide-react"


export function GlobalTopBar() {
  return (
    <header className="h-10 w-full bg-[oklch(0.055_0.002_250)] border-b border-border/15 flex items-center justify-between px-4">
      {/* Left: Workspace Anchor */}
      <div className="flex items-center gap-4">
        {/* Brand - Minimal */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-primary/12 flex items-center justify-center">
            <Activity className="w-3 h-3 text-primary/70" />
          </div>
          <span className="text-sm font-semibold text-foreground/80 tracking-tight">DanTree</span>
        </div>
        
        <div className="w-px h-4 bg-border/20" />
        
        {/* Current Object - Clear anchor */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-success/10 flex items-center justify-center border border-success/20">
            <span className="text-xs font-bold text-success">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground/90">NVDA</span>
          </div>
          <span className="text-xs text-muted-foreground/50 ml-1">Thesis Session</span>
        </div>
      </div>

      {/* Center: System Status - Operational */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-success/8 border border-success/15">
          <Wifi className="w-3 h-3 text-success/60" />
          <span className="text-xs text-success/70 font-medium">Live</span>
        </div>
        <span className="text-xs text-muted-foreground/40">Synced 2m ago</span>
      </div>

      {/* Right: Global Controls - Minimal */}
      <div className="flex items-center gap-0.5">
        <button className="p-2 rounded hover:bg-secondary/20 transition-colors">
          <Search className="w-4 h-4 text-muted-foreground/50" />
        </button>
        <button className="p-2 rounded hover:bg-secondary/20 transition-colors relative">
          <Bell className="w-4 h-4 text-muted-foreground/50" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-danger" />
        </button>
        <button className="p-2 rounded hover:bg-secondary/20 transition-colors">
          <Settings className="w-4 h-4 text-muted-foreground/50" />
        </button>
      </div>
    </header>
  )
}
