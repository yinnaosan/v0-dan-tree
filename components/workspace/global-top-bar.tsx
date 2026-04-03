"use client"

// Premium decision control strip - always visible
import { Settings, Bell, Wifi, TrendingUp, AlertTriangle, Zap, ArrowUpRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function GlobalTopBar() {
  return (
    <header className="h-14 w-full bg-[oklch(0.06_0.003_250)] border-b border-border/20 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Left: Brand + Current Object */}
      <div className="flex items-center gap-5">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <span className="text-base font-bold text-foreground tracking-tight">DanTree</span>
        </div>
        
        <div className="w-px h-6 bg-border/25" />
        
        {/* Current Object Anchor */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center border border-success/30">
            <span className="text-sm font-bold text-success">N</span>
          </div>
          <div>
            <span className="text-base font-bold text-foreground">NVDA</span>
            <span className="text-sm text-muted-foreground ml-2">Thesis Session</span>
          </div>
        </div>
      </div>

      {/* Center: Decision State Strip - THE MOST IMPORTANT INFO */}
      <div className="flex items-center gap-4">
        {/* Stance */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success/12 border border-success/25">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-base font-bold text-success">Bullish</span>
        </div>

        {/* Readiness */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/30">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 h-4 rounded-sm",
                  i <= 4 ? "bg-primary" : "bg-secondary/50"
                )}
              />
            ))}
          </div>
          <span className="text-base font-bold text-foreground">4/5</span>
          <span className="text-sm text-muted-foreground">准备度</span>
        </div>

        {/* Action Bias */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-base font-semibold text-primary">可加仓</span>
        </div>

        {/* Alert Severity */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-warning/10 border border-warning/20">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <span className="text-base font-semibold text-warning">中风险</span>
        </div>

        {/* Delta */}
        <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-success/8">
          <ArrowUpRight className="w-4 h-4 text-success" />
          <span className="text-base font-bold text-success">+12%</span>
          <span className="text-xs text-muted-foreground">周</span>
        </div>
      </div>

      {/* Right: System Status + Controls */}
      <div className="flex items-center gap-4">
        {/* Last Update */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm">更新 14:32</span>
        </div>

        {/* Sync Status */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-success/10 border border-success/20">
          <Wifi className="w-3.5 h-3.5 text-success" />
          <span className="text-sm font-medium text-success">Live</span>
        </div>

        <div className="w-px h-5 bg-border/20" />

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors relative">
            <Bell className="w-4.5 h-4.5 text-muted-foreground/60" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger" />
          </button>
          <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
            <Settings className="w-4.5 h-4.5 text-muted-foreground/60" />
          </button>
        </div>
      </div>
    </header>
  )
}
