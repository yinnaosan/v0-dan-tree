"use client"

// DanTree Workspace - Investment Decision Platform
import { useState, useEffect } from "react"
import { SessionRail } from "@/components/workspace/session-rail"
import { DecisionCanvas } from "@/components/workspace/decision-canvas"
import { DiscussionPanel } from "@/components/workspace/discussion-panel"
import { InsightsPanel } from "@/components/workspace/insights-panel"
import { GlobalTopBar } from "@/components/workspace/global-top-bar"

export default function WorkspacePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-screen w-full flex flex-col overflow-hidden bg-background">
        <div className="h-11 w-full bg-[oklch(0.065_0.003_250)] border-b border-border/20" />
        <div className="flex-1 flex overflow-hidden">
          <div className="w-[200px] h-full bg-[oklch(0.055_0.003_250)] border-r border-border/20" />
          <div className="flex-1 h-full bg-background" />
          <div className="w-[320px] h-full bg-[oklch(0.095_0.003_250)] border-l border-border/20" />
          <div className="w-[180px] h-full bg-[oklch(0.045_0.002_250)] border-l border-border/10" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-background">
      <GlobalTopBar />
      <div className="flex-1 flex overflow-hidden">
        <SessionRail />
        <DecisionCanvas />
        <DiscussionPanel />
        <InsightsPanel />
      </div>
    </div>
  )
}
