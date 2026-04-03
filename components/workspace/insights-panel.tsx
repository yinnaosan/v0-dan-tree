"use client"

import { Eye, CheckCircle2, Zap, AlertCircle, TrendingUp, ArrowRight, Target } from "lucide-react"

export function InsightsPanel() {
  return (
    <aside className="w-56 shrink-0 h-full bg-gradient-to-b from-[#0d1117] to-[#080b0f] border-l border-white/5 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3.5 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-bold text-gray-300">决策情报</span>
        </div>
        <p className="text-[10px] text-gray-600 mt-0.5">NVDA 相关信号</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Now Section */}
        <div className="px-4 py-4 border-b border-white/5">
          <div className="flex items-center gap-1.5 mb-3">
            <Target className="w-3 h-3 text-emerald-500/60" />
            <span className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-wider">Now</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-500/5">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500/70" />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-gray-300 leading-snug">台积电 CoWoS 扩产</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[10px] text-gray-500">验证 H200 供应链</span>
                  <span className="text-[10px] text-gray-600">·</span>
                  <span className="text-[10px] text-gray-600">2h</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-amber-500/5">
              <Zap className="w-4 h-4 mt-0.5 shrink-0 text-amber-500/70" />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-gray-300 leading-snug">微软 AI CapEx $50B+</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[10px] text-gray-500">提升订单能见度</span>
                  <span className="text-[10px] text-gray-600">·</span>
                  <span className="text-[10px] text-gray-600">4h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitor Section */}
        <div className="px-4 py-4 border-b border-white/5">
          <div className="flex items-center gap-1.5 mb-3">
            <Eye className="w-3 h-3 text-amber-500/50" />
            <span className="text-[10px] font-bold text-amber-500/60 uppercase tracking-wider">Monitor</span>
          </div>
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02]">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-gray-400 leading-snug">出口管制不确定性</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[10px] text-gray-500">影响 ~15% 收入</span>
                <span className="text-[10px] text-gray-600">·</span>
                <span className="text-[10px] text-gray-600">1d</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Section */}
        <div className="px-4 py-4 border-b border-white/5">
          <div className="flex items-center gap-1.5 mb-3">
            <TrendingUp className="w-3 h-3 text-gray-500" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Related</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-4 rounded-sm bg-emerald-500/50" />
                <span className="text-[13px] font-bold text-gray-400">TSM</span>
              </div>
              <span className="text-[13px] font-semibold tabular-nums text-emerald-500/75">+1.5%</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-4 rounded-sm bg-emerald-500/50" />
                <span className="text-[13px] font-bold text-gray-400">AMD</span>
              </div>
              <span className="text-[13px] font-semibold tabular-nums text-emerald-500/75">+2.3%</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-4 rounded-sm bg-emerald-500/50" />
                <span className="text-[13px] font-bold text-gray-400">MSFT</span>
              </div>
              <span className="text-[13px] font-semibold text-emerald-500/75">CapEx↑</span>
            </div>
          </div>
        </div>

        {/* Levels Section */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-1.5 mb-3">
            <Target className="w-3 h-3 text-gray-600" />
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Levels</span>
          </div>
          <div className="space-y-2 p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between py-0.5">
              <span className="text-[11px] text-gray-500">支撑</span>
              <span className="text-[13px] font-bold tabular-nums text-gray-300">$890</span>
            </div>
            <div className="flex items-center justify-between py-0.5">
              <span className="text-[11px] text-gray-500">阻力</span>
              <span className="text-[13px] font-bold tabular-nums text-gray-300">$965</span>
            </div>
            <div className="flex items-center justify-between py-0.5">
              <span className="text-[11px] text-gray-500">止损</span>
              <span className="text-[13px] font-bold tabular-nums text-red-500/75">$800</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/5 shrink-0">
        <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-gray-500 hover:text-gray-400 hover:bg-white/[0.03] transition-all">
          <span>完整情报</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  )
}
