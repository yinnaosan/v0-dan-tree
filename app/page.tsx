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
        <div className="h-14 w-full border-b border-white/[0.06] shrink-0" style={{ background: 'linear-gradient(180deg, rgba(18,22,28,0.98) 0%, rgba(14,17,23,0.98) 100%)' }} />
        <div className="flex-1 flex overflow-hidden">
          <div className="w-52 h-full border-r border-white/[0.04]" style={{ background: 'linear-gradient(180deg, #0a0d11 0%, #070a0d 100%)' }} />
          <div className="flex-1 max-w-[680px] h-full" style={{ background: 'linear-gradient(180deg, #0e1117 0%, #0a0d11 100%)' }} />
          <div className="flex-1 min-w-[320px] h-full border-l border-white/[0.04]" style={{ background: 'linear-gradient(180deg, #12161c 0%, #0e1117 100%)' }} />
          <div className="w-60 h-full border-l border-white/[0.04] shrink-0" style={{ background: 'linear-gradient(180deg, #0a0d11 0%, #070a0d 100%)' }} />
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
