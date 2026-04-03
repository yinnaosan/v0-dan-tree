"use client"

// DanTree Investment Decision Workspace - Fxology glass style
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
      <div className="h-screen w-full flex flex-col overflow-hidden bg-[oklch(0.08_0.008_260)]">
        <div className="h-16 w-full bg-[oklch(0.09_0.01_260)/80] backdrop-blur-xl border-b border-white/[0.04] shrink-0" />
        <div className="flex-1 flex overflow-hidden">
          <div className="w-52 h-full bg-gradient-to-b from-[oklch(0.055_0.006_260)] to-[oklch(0.045_0.005_260)] border-r border-white/[0.04]" />
          <div className="flex-1 max-w-[680px] h-full bg-gradient-to-b from-[oklch(0.08_0.008_260)] to-[oklch(0.07_0.006_260)]" />
          <div className="flex-1 min-w-[300px] h-full bg-gradient-to-b from-[oklch(0.10_0.008_260)] to-[oklch(0.085_0.006_260)] border-l border-white/[0.04]" />
          <div className="w-56 h-full bg-gradient-to-b from-[oklch(0.055_0.004_260)] to-[oklch(0.045_0.003_260)] border-l border-white/[0.03] shrink-0" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[oklch(0.08_0.008_260)]">
      <AssetHeader />
      <div className="flex-1 flex overflow-hidden">
        <SessionRail />
        <DecisionCanvas />
        <DiscussionPanel />
        <InsightsPanel />
      </div>
    </div>
  )
}
