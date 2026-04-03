"use client"

// DanTree Investment Decision Workspace - Fxology Glass Style
import { useState, useEffect } from "react"
import { AssetHeader } from "@/components/workspace/asset-header"
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
      <div className="h-screen w-full flex flex-col overflow-hidden" style={{ background: '#0a0d11' }}>
        <div className="h-10 w-full border-b border-white/[0.03] shrink-0" style={{ background: '#090c10' }} />
        <div className="flex-1 flex overflow-hidden">
          <div className="w-52 h-full border-r border-white/[0.03]" style={{ background: '#070a0d' }} />
          <div className="flex-1 max-w-[680px] h-full" style={{ background: '#0c0f14' }} />
          <div className="flex-1 min-w-[320px] h-full border-l border-white/[0.03]" style={{ background: '#0f1218' }} />
          <div className="w-48 h-full border-l border-white/[0.03] shrink-0" style={{ background: '#070a0d' }} />
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden" style={{ background: '#0a0d11' }}>
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
