"use client"

import { CheckCircle2, Zap, AlertCircle, ArrowRight, TrendingUp, Calendar, Target, BarChart3, ExternalLink } from "lucide-react"

export function InsightsPanel() {
  return (
    <aside 
      className="w-64 shrink-0 h-full flex flex-col border-l border-white/[0.06]"
      style={{ background: '#0c1015' }}
    >
      <div className="px-4 py-3 border-b border-white/[0.06] shrink-0">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white/70">决策情报</span>
          <span className="text-[10px] text-white/30">NVDA</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-semibold text-emerald-400/80 uppercase tracking-wide">Now</span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(16,185,129,0.08)' }}>
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400" />
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/80 leading-snug">台积电 CoWoS 扩产确认</div>
                <div className="text-[11px] text-white/40 mt-0.5">验证 H200 供应链 · 2h</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(251,191,36,0.06)' }}>
              <Zap className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-400" />
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/80 leading-snug">微软 AI CapEx $50B+</div>
                <div className="text-[11px] text-white/40 mt-0.5">提升订单能见度 · 4h</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(16,185,129,0.05)' }}>
              <TrendingUp className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400/70" />
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/75 leading-snug">分析师上调目标价</div>
                <div className="text-[11px] text-white/40 mt-0.5">Goldman $1100 · 6h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
            <span className="text-[11px] font-semibold text-amber-400/70 uppercase tracking-wide">Monitor</span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-400/70" />
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/65 leading-snug">出口限制不确定性</div>
                <div className="text-[11px] text-white/35 mt-0.5">影响 ~15% 收入 · 1d</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <Calendar className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/40" />
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white/60 leading-snug">Q2 财报 5月22日</div>
                <div className="text-[11px] text-white/35 mt-0.5">预期 EPS $5.50 · 49d</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-3 h-3 text-white/40" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wide">Related</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/[0.03] transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-sm bg-emerald-400/60" />
                <span className="text-[12px] font-semibold text-white/70">TSM</span>
              </div>
              <span className="text-[12px] font-semibold tabular-nums text-emerald-400">+1.5%</span>
            </div>
            <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/[0.03] transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-sm bg-emerald-400/60" />
                <span className="text-[12px] font-semibold text-white/70">AMD</span>
              </div>
              <span className="text-[12px] font-semibold tabular-nums text-emerald-400">+2.3%</span>
            </div>
            <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/[0.03] transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-sm bg-emerald-400/60" />
                <span className="text-[12px] font-semibold text-white/70">MSFT</span>
              </div>
              <span className="text-[12px] font-semibold text-emerald-400">CapEx↑</span>
            </div>
            <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/[0.03] transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-sm bg-red-400/50" />
                <span className="text-[12px] font-semibold text-white/70">INTC</span>
              </div>
              <span className="text-[12px] font-semibold tabular-nums text-red-400">-0.8%</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-3 h-3 text-white/40" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wide">Key Levels</span>
          </div>
          <div className="p-3 rounded-lg space-y-2.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/50">Entry Zone</span>
              <span className="text-[13px] font-bold tabular-nums text-emerald-400">$880-900</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/50">支撑位</span>
              <span className="text-[13px] font-bold tabular-nums text-white/80">$890</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/50">阻力位</span>
              <span className="text-[13px] font-bold tabular-nums text-white/80">$965</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/50">止损位</span>
              <span className="text-[13px] font-bold tabular-nums text-red-400">$800</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/[0.05]">
              <span className="text-[11px] text-white/50">目标位</span>
              <span className="text-[13px] font-bold tabular-nums text-emerald-400">$1050</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-white/[0.06] shrink-0">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-[11px] font-medium text-white/50 hover:text-white/70 hover:bg-white/[0.04] border border-white/[0.06] transition-all">
          <span>完整情报</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </aside>
  )
}
