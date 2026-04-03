"use client"

import { useState, useEffect } from "react"
import { SessionRail } from "@/components/workspace/session-rail"
import { DecisionCanvas } from "@/components/workspace/decision-canvas"
import { DiscussionPanel } from "@/components/workspace/discussion-panel"
import { InsightsPanel } from "@/components/workspace/insights-panel"
import { AssetHeader } from "@/components/workspace/asset-header"

export default function WorkspacePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-screen w-full flex flex-col overflow-hidden bg-background">
        <div className="h-16 w-full bg-[oklch(0.085_0.004_250)] border-b border-border/15 shrink-0" />
        <div className="flex-1 flex overflow-hidden">
          <div className="w-52 h-full bg-sidebar border-r border-sidebar-border/40" />
          <div className="flex-1 max-w-[680px] h-full bg-background" />
          <div className="flex-1 min-w-[300px] h-full bg-[oklch(0.115_0.004_250)] border-l border-border/15" />
          <div className="w-56 h-full bg-[oklch(0.062_0.002_250)] border-l border-border/6 shrink-0" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-background">
      {/* Fixed Full-Width Global Decision Control Strip */}
      <AssetHeader />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        <SessionRail />
        <DecisionCanvas />
        <DiscussionPanel />
        <InsightsPanel />
      </div>
    </div>
  )
}
