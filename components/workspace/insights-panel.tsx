"use client"

import { Eye, CheckCircle2, Zap, AlertCircle, TrendingUp, ArrowRight, Target } from "lucide-react"

export function InsightsPanel() {
  return (
    <aside 
      className="w-60 shrink-0 h-full flex flex-col border-l border-white/5"
      style={{ background: 'linear-gradient(180deg, #0a0d11 0%, #070a0d 100%)' }}
    >
      <div className="px-5 py-4 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-2.5">
          <Eye className="w-4 h-4 text-white/25" />
          <span className="text-sm font-semibold text-white/60">决策情报</span>
        </div>
        <p className="text-xs text-white/25 mt-1">NVDA 相关信号</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-5 py-5 border-b border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
            <span className="text-xs font-bold text-emerald-400/60 uppercase tracking-wider">Now</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-500/5">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400/60" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white/70 leading-snug">台积电 CoWoS 扩产</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-white/35">验证 H200 供应链</span>
                  <span className="text-xs text-white/20">2h</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/5">
              <Zap className="w-4 h-4 mt-0.5 shrink-0 text-amber-400/60" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white/70 leading-snug">微软 AI CapEx $50B+</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-white/35">提升订单能见度</span>
                  <span className="text-xs text-white/20">4h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 border-b border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
            <span className="text-xs font-bold text-amber-400/50 uppercase tracking-wider">Monitor</span>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02]">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-white/30" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white/50 leading-snug">出口管制不确定性</div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs text-white/35">影响 ~15% 收入</span>
                <span className="text-xs text-white/20">1d</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 border-b border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-3 h-3 text-white/20" />
            <span className="text-xs font-bold text-white/30 uppercase tracking-wider">Related</span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-3">
                <div className="w-1 h-4 rounded-sm bg-emerald-400/40" />
                <span className="text-sm font-bold text-white/50">TSM</span>
              </div>
              <span className="text-sm font-semibold tabular-nums text-emerald-400/60">+1.5%</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-3">
                <div className="w-1 h-4 rounded-sm bg-emerald-400/40" />
                <span className="text-sm font-bold text-white/50">AMD</span>
              </div>
              <span className="text-sm font-semibold tabular-nums text-emerald-400/60">+2.3%</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-3">
                <div className="w-1 h-4 rounded-sm bg-emerald-400/40" />
                <span className="text-sm font-bold text-white/50">MSFT</span>
              </div>
              <span className="text-sm font-semibold text-emerald-400/60">CapEx↑</span>
            </div>
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-3 h-3 text-white/20" />
            <span className="text-xs font-bold text-white/30 uppercase tracking-wider">Levels</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/30">支撑</span>
              <span className="text-sm font-bold tabular-nums text-white/60">$890</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/30">阻力</span>
              <span className="text-sm font-bold tabular-nums text-white/60">$965</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/30">止损</span>
              <span className="text-sm font-bold tabular-nums text-red-400/70">$800</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 shrink-0">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs text-white/30 hover:text-white/50 hover:bg-white/[0.02] border border-white/5 transition-all">
          <span>完整情报</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  )
}
