"use client"

import dynamic from "next/dynamic"

const SessionRail = dynamic(() => import("@/components/workspace/session-rail").then(mod => ({ default: mod.SessionRail })), { ssr: false })
const DecisionCanvas = dynamic(() => import("@/components/workspace/decision-canvas").then(mod => ({ default: mod.DecisionCanvas })), { ssr: false })
const DiscussionPanel = dynamic(() => import("@/components/workspace/discussion-panel").then(mod => ({ default: mod.DiscussionPanel })), { ssr: false })
const InsightsPanel = dynamic(() => import("@/components/workspace/insights-panel").then(mod => ({ default: mod.InsightsPanel })), { ssr: false })

export default function WorkspacePage() {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-background">
      {/* Column 1: Session Rail - Narrow control rail */}
      <SessionRail />
      
      {/* Column 2: Decision Canvas - Main dominant column */}
      <DecisionCanvas />
      
      {/* Column 3: Discussion - Supporting panel */}
      <DiscussionPanel />
      
      {/* Column 4: Insights - Narrowest, secondary */}
      <InsightsPanel />
    </div>
  )
}
