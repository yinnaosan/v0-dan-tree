"use client"

import { Eye, CheckCircle2, Zap, AlertCircle, TrendingUp, ArrowRight, Target } from "lucide-react"

export function InsightsPanel() {
  return (
    <aside 
      className="w-52 shrink-0 h-full flex flex-col border-l border-white/[0.04]"
      style={{ background: '#080a0e' }}
    >
      <div className="px-4 py-3 border-b border-white/[0.04] shrink-0">
        <div className="flex items-center gap-2">
          <Eye className="w-3.5 h-3.5 text-white/20" />
          <span className="text-xs font-semibold text-white/50">决策情报</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-4 border-b border-white/[0.04]">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
            <span className="text-[10px] font-semibold text-emerald-400/50 uppercase tracking-wide">Now</span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(16,185,129,0.04)' }}>
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400/50" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white/60 leading-snug">台积电 CoWoS 扩产</div>
                <span className="text-[10px] text-white/25">2h</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(251,191,36,0.03)' }}>
              <Zap className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-400/50" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white/60 leading-snug">微软 AI CapEx $50B+</div>
                <span className="text-[10px] text-white/25">4h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 border-b border-white/[0.04]">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-1 h-1 rounded-full bg-amber-400/40" />
            <span className="text-[10px] font-semibold text-amber-400/40 uppercase tracking-wide">Monitor</span>
          </div>
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.015)' }}>
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/25" />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white/45 leading-snug">出口管制不确定性</div>
              <span className="text-[10px] text-white/20">~15% 收入影响</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 border-b border-white/[0.04]">
          <div className="flex items-center gap-1.5 mb-3">
            <TrendingUp className="w-2.5 h-2.5 text-white/15" />
            <span className="text-[10px] font-semibold text-white/25 uppercase tracking-wide">Related</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between py-1">
              <span className="text-xs font-semibold text-white/40">TSM</span>
              <span className="text-xs font-semibold tabular-nums text-emerald-400/50">+1.5%</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-xs font-semibold text-white/40">AMD</span>
              <span className="text-xs font-semibold tabular-nums text-emerald-400/50">+2.3%</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-xs font-semibold text-white/40">MSFT</span>
              <span className="text-xs font-semibold text-emerald-400/50">CapEx↑</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="flex items-center gap-1.5 mb-3">
            <Target className="w-2.5 h-2.5 text-white/15" />
            <span className="text-[10px] font-semibold text-white/25 uppercase tracking-wide">Levels</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/25">支撑</span>
              <span className="text-xs font-semibold tabular-nums text-white/50">$890</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/25">阻力</span>
              <span className="text-xs font-semibold tabular-nums text-white/50">$965</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/25">止损</span>
              <span className="text-xs font-semibold tabular-nums text-red-400/60">$800</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-white/[0.04] shrink-0">
        <button className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-[10px] text-white/25 hover:text-white/40 hover:bg-white/[0.02] transition-all">
          <span>完整情报</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  )
}
