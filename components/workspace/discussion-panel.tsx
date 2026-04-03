"use client"

import { useState } from "react"
import { Send, Sparkles, User, MoreHorizontal, MessageCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <aside className="flex-1 min-w-[300px] h-full bg-gradient-to-b from-[oklch(0.10_0.008_260)] to-[oklch(0.085_0.006_260)] flex flex-col border-l border-white/[0.04]">
      {/* Header */}
      <div className="px-5 py-3.5 glass-subtle border-b border-white/[0.03] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-[15px] font-bold text-foreground">Discussion</h2>
        </div>
        <button className="p-2 rounded-lg hover:bg-white/[0.04] transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground/30" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-4 space-y-1">
          {messages.map((message, index) => (
            <MessageItem 
              key={message.id} 
              message={message} 
              isLatest={index === messages.length - 1 && message.role === "assistant"} 
            />
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/[0.03] shrink-0">
        <div className="relative glass-card rounded-2xl focus-within:shadow-[0_0_0_1px] focus-within:shadow-primary/20 transition-all">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="讨论 Thesis、Timing 或 Risk..."
            className="w-full bg-transparent px-5 py-4 pr-14 text-[14px] text-foreground placeholder:text-muted-foreground/25 resize-none focus:outline-none min-h-[56px] max-h-[120px] leading-relaxed"
            rows={1}
          />
          <button
            disabled={!input.trim()}
            className={cn(
              "absolute right-3 bottom-3 p-2.5 rounded-xl transition-all",
              input.trim() ? "bg-primary text-primary-foreground shadow-[0_0_20px_-4px] shadow-primary/40" : "bg-white/[0.04] text-muted-foreground/20"
            )}
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
    <div className={cn(
      "px-5 py-4 transition-all",
      !isUser && "bg-white/[0.015]",
      isLatest && "bg-gradient-to-r from-primary/[0.04] to-transparent border-l-2 border-primary/40"
    )}>
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className={cn(
          "w-7 h-7 rounded-lg flex items-center justify-center transition-all",
          isUser ? "bg-white/[0.05] border border-white/[0.06]" : "bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/15"
        )}>
          {isUser ? (
            <User className="w-4 h-4 text-foreground/45" />
          ) : (
            <Sparkles className="w-4 h-4 text-primary" />
          )}
        </div>
        <span className="text-[13px] font-semibold text-foreground/65">{isUser ? "你" : "助手"}</span>
        <span className="text-[11px] text-muted-foreground/25">{message.timestamp}</span>
      </div>

      {/* Content */}
      <div className="pl-9">
        <p className="text-[14px] text-foreground/80 leading-[1.7]">{message.content}</p>
        
        {/* Key Points - Structured List */}
        {message.keyPoints && (
          <div className="mt-4 space-y-2.5">
            {message.keyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 px-3.5 rounded-lg glass-subtle">
                <span className="text-[12px] font-bold text-primary/70 mt-0.5 w-5">{i + 1}.</span>
                <span className="text-[13px] text-foreground/75 leading-relaxed flex-1">{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Suggested Next Action */}
        {message.suggestedNext && (
          <div className="mt-4 flex items-center gap-2.5 text-[13px] text-primary/80">
            <ArrowRight className="w-4 h-4" />
            <span className="font-semibold">{message.suggestedNext}</span>
          </div>
        )}
      </div>
    </div>
  )
}
