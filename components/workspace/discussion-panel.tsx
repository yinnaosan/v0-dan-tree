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
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-white/[0.04] shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-white/70">Discussion</h2>
            <span className="text-[10px] text-white/25">AI 辅助</span>
          </div>
          <button className="p-1.5 rounded-md hover:bg-white/[0.04] transition-colors">
            <MoreHorizontal className="w-3.5 h-3.5 text-white/20" />
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

      {/* Input Area */}
      <div className="p-4 shrink-0">
        <div 
          className="relative rounded-xl border border-white/[0.06] transition-all focus-within:border-white/[0.12]"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="讨论 Thesis、Timing 或 Risk..."
            className="w-full bg-transparent px-4 py-3 pr-12 text-[14px] text-white/85 placeholder:text-white/20 resize-none focus:outline-none min-h-[48px] max-h-[120px] leading-relaxed"
            rows={1}
          />
          <button
            disabled={!input.trim()}
            className={`absolute right-3 bottom-3 p-2 rounded-lg transition-all ${
              input.trim() 
                ? "bg-emerald-500/90 text-white" 
                : "bg-white/[0.04] text-white/15"
            }`}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  )
}

function MessageItem({ message, isLatest }: { message: Message; isLatest?: boolean }) {
  const isUser = message.role === "user"

  return (
    <div className={`px-5 py-4 ${isLatest ? 'border-l-2 border-emerald-500/30' : ''}`}>
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
          isUser ? "bg-white/[0.05]" : "bg-emerald-500/10"
        }`}>
          {isUser ? (
            <User className="w-3 h-3 text-white/40" />
          ) : (
            <Sparkles className="w-3 h-3 text-emerald-400/70" />
          )}
        </div>
        <span className="text-xs font-medium text-white/50">{isUser ? "你" : "助手"}</span>
        <span className="text-[10px] text-white/20">{message.timestamp}</span>
      </div>

      <div className="pl-8">
        <p className="text-[14px] text-white/70 leading-[1.7]">{message.content}</p>
        
        {message.keyPoints && (
          <div className="mt-4 space-y-2">
            {message.keyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 px-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <span className="text-xs font-semibold text-emerald-400/60 mt-0.5">{i + 1}.</span>
                <span className="text-[13px] text-white/55 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        )}

        {message.suggestedNext && (
          <div className="mt-4 flex items-center gap-2 py-2.5 px-3 rounded-lg" style={{ background: 'rgba(16,185,129,0.04)' }}>
            <ArrowRight className="w-3 h-3 text-emerald-400/50 shrink-0" />
            <span className="text-[13px] text-emerald-400/60">{message.suggestedNext}</span>
          </div>
        )}
      </div>
    </div>
  )
}
