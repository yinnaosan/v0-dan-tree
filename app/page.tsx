"use client"

import { SessionRail } from "@/components/workspace/session-rail"
import { DecisionCanvas } from "@/components/workspace/decision-canvas"
import { DiscussionPanel } from "@/components/workspace/discussion-panel"
import { InsightsPanel } from "@/components/workspace/insights-panel"

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
