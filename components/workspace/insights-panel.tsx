"use client"

import { CheckCircle2, Zap, AlertCircle, ArrowRight } from "lucide-react"

export function InsightsPanel() {
  return (
    <aside 
      className="w-48 shrink-0 h-full flex flex-col border-l border-white/[0.03]"
      style={{ background: '#070a0d' }}
    >
      <div className="px-3 py-2.5 border-b border-white/[0.03] shrink-0">
        <span className="text-[10px] font-medium text-white/30">Insights</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2.5 border-b border-white/[0.02]">
          <div className="text-[9px] text-white/20 uppercase tracking-wide mb-1.5">Now</div>
          <div className="space-y-1.5">
            <div className="flex items-start gap-1.5 p-1.5 rounded" style={{ background: 'rgba(255,255,255,0.015)' }}>
              <CheckCircle2 className="w-2.5 h-2.5 mt-0.5 shrink-0 text-emerald-400/35" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-white/45 leading-snug">台积电 CoWoS 扩产</div>
                <span className="text-[9px] text-white/15">2h</span>
              </div>
            </div>
            <div className="flex items-start gap-1.5 p-1.5 rounded" style={{ background: 'rgba(255,255,255,0.015)' }}>
              <Zap className="w-2.5 h-2.5 mt-0.5 shrink-0 text-amber-400/35" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-white/45 leading-snug">微软 CapEx $50B+</div>
                <span className="text-[9px] text-white/15">4h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-2.5 border-b border-white/[0.02]">
          <div className="text-[9px] text-white/15 uppercase tracking-wide mb-1.5">Monitor</div>
          <div className="flex items-start gap-1.5 p-1.5 rounded" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <AlertCircle className="w-2.5 h-2.5 mt-0.5 shrink-0 text-white/15" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-white/35 leading-snug">出口管制</div>
              <span className="text-[9px] text-white/12">~15% 收入</span>
            </div>
          </div>
        </div>

        <div className="px-3 py-2.5 border-b border-white/[0.02]">
          <div className="text-[9px] text-white/15 uppercase tracking-wide mb-1.5">Related</div>
          <div className="space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/30">TSM</span>
              <span className="text-[10px] tabular-nums text-emerald-400/30">+1.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/30">AMD</span>
              <span className="text-[10px] tabular-nums text-emerald-400/30">+2.3%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/30">MSFT</span>
              <span className="text-[10px] text-emerald-400/30">CapEx↑</span>
            </div>
          </div>
        </div>

        <div className="px-3 py-2.5">
          <div className="text-[9px] text-white/15 uppercase tracking-wide mb-1.5">Levels</div>
          <div className="space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-white/20">支撑</span>
              <span className="text-[10px] tabular-nums text-white/40">$890</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-white/20">阻力</span>
              <span className="text-[10px] tabular-nums text-white/40">$965</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-white/20">止损</span>
              <span className="text-[10px] tabular-nums text-red-400/50">$800</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2.5 border-t border-white/[0.03] shrink-0">
        <button className="w-full flex items-center justify-center gap-1 py-1.5 rounded text-[9px] text-white/20 hover:text-white/30 hover:bg-white/[0.02] transition-all">
          <span>完整情报</span>
          <ArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>
    </aside>
  )
}
