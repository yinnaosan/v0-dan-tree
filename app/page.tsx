"use client"

import { useState, useEffect } from "react"
import { SessionRail } from "@/components/workspace/session-rail"
import { DecisionCanvas } from "@/components/workspace/decision-canvas"
import { DiscussionPanel } from "@/components/workspace/discussion-panel"
import { InsightsPanel } from "@/components/workspace/insights-panel"

export default function WorkspacePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-screen w-full flex overflow-hidden bg-background">
        <div className="w-[220px] h-full bg-[oklch(0.08_0.005_250)] border-r border-border/50" />
        <div className="flex-1 h-full bg-background" />
        <div className="w-[300px] h-full bg-card border-l border-border/50" />
        <div className="w-[220px] h-full bg-[oklch(0.08_0.005_250)] border-l border-border/50" />
      </div>
    )
  }

  return (
    <div className="h-screen w-full flex overflow-hidden bg-background">
      <SessionRail />
      <DecisionCanvas />
      <DiscussionPanel />
      <InsightsPanel />
    </div>
  )
}
