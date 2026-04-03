"use client"

import { useState } from "react"
import { Send, Sparkles, User, MoreHorizontal, ArrowRight } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: string
  keyPoints?: string[]
  suggestedNext?: string
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "基于当前 NVDA 的 Thesis 分析，我注意到几个关键点需要讨论：",
    timestamp: "14:28",
    keyPoints: [
      "H200 产能 - 虽然需求强劲，但台积电 CoWoS 产能是否能跟上？",
      "竞争格局 - AMD MI300X 和 Intel Gaudi3 的威胁程度如何评估？",
      "估值锚定 - 当前 65x P/E 的合理性需要重新审视。"
    ],
    suggestedNext: "您希望先深入讨论哪个方向？"
  },
  {
    id: "2",
    role: "user",
    content: "先聊聊估值的问题，65x 确实看起来很高。有没有什么角度可以 justify 这个估值？",
    timestamp: "14:30",
  },
  {
    id: "3",
    role: "assistant",
    content: "从几个角度来看当前估值的合理性：",
    timestamp: "14:32",
    keyPoints: [
      "增长率支撑 - 数据中心 YoY 279%，PEG 约 1.1x",
      "市场地位溢价 - AI 训练市场 >80% 份额，CUDA 护城河深厚",
      "但需注意 - 估值已 price in 完美执行，任何放缓都会多杀多"
    ],
    suggestedNext: "建议关注每季度 guidance 的边际变化"
  },
]

export function DiscussionPanel() {
  const [messages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  return (
    <aside className="flex-1 min-w-[320px] h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #12161c 0%, #0e1117 100%)' }}>
      {/* Header - Clean and minimal */}
      <div className="px-6 py-4 border-b border-white/[0.06] shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-white/90">Discussion</h2>
            <p className="text-xs text-white/30 mt-0.5">AI 辅助决策讨论</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-white/[0.04] transition-colors">
            <MoreHorizontal className="w-4 h-4 text-white/25" />
          </button>
        </div>
      </div>

      {/* Messages - Generous spacing, clear hierarchy */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 space-y-6">
          {messages.map((message, index) => (
            <MessageItem 
              key={message.id} 
              message={message} 
              isLatest={index === messages.length - 1 && message.role === "assistant"} 
            />
          ))}
        </div>
      </div>

      {/* Input Area - ChatGPT-like ergonomics: large, calm, breathable */}
      <div className="p-5 shrink-0">
        <div 
          className="relative rounded-2xl border border-white/[0.08] transition-all focus-within:border-emerald-500/30 focus-within:shadow-[0_0_20px_-8px_rgba(16,185,129,0.2)]"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="讨论 Thesis、Timing 或 Risk..."
            className="w-full bg-transparent px-5 py-4 pr-14 text-[15px] text-white/90 placeholder:text-white/20 resize-none focus:outline-none min-h-[60px] max-h-[140px] leading-relaxed"
            rows={1}
          />
          <button
            disabled={!input.trim()}
            className={`absolute right-3.5 bottom-3.5 p-3 rounded-xl transition-all ${
              input.trim() 
                ? "bg-emerald-500 text-white shadow-[0_0_24px_-4px_rgba(16,185,129,0.5)]" 
                : "bg-white/[0.04] text-white/15"
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}

function MessageItem({ message, isLatest }: { message: Message; isLatest?: boolean }) {
  const isUser = message.role === "user"

  return (
    <div className={`px-6 py-5 ${isLatest ? 'bg-emerald-500/[0.03] border-l-2 border-emerald-500/50' : ''}`}>
      {/* Header - Clear role identification */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
          isUser 
            ? "bg-white/[0.06] border border-white/[0.08]" 
            : "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20"
        }`}>
          {isUser ? (
            <User className="w-4 h-4 text-white/50" />
          ) : (
            <Sparkles className="w-4 h-4 text-emerald-400" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white/70">{isUser ? "你" : "助手"}</span>
          <span className="text-xs text-white/20">{message.timestamp}</span>
        </div>
      </div>

      {/* Content - Improved readability */}
      <div className="pl-11">
        <p className="text-[15px] text-white/75 leading-[1.75]">{message.content}</p>
        
        {/* Key Points - Structured, scannable */}
        {message.keyPoints && (
          <div className="mt-5 space-y-3">
            {message.keyPoints.map((point, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 py-3 px-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <span className="text-sm font-bold text-emerald-400/80 mt-0.5 w-5 shrink-0">{i + 1}.</span>
                <span className="text-[14px] text-white/65 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Suggested Next - Clear call to action */}
        {message.suggestedNext && (
          <div className="mt-5 flex items-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/10">
            <ArrowRight className="w-4 h-4 text-emerald-400/70 shrink-0" />
            <span className="text-[14px] font-medium text-emerald-400/80">{message.suggestedNext}</span>
          </div>
        )}
      </div>
    </div>
  )
}
