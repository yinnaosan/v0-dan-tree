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
    <aside className="flex-1 min-w-[300px] h-full bg-[oklch(0.115_0.004_250)] flex flex-col border-l border-border/15">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border/10 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-primary/60" />
          <h2 className="text-sm font-bold text-foreground">Discussion</h2>
        </div>
        <button className="p-1.5 rounded-md hover:bg-secondary/20 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground/35" />
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
      <div className="p-4 border-t border-border/10 shrink-0">
        <div className="relative bg-secondary/15 rounded-xl border border-border/15 focus-within:border-primary/20 focus-within:bg-secondary/20 transition-all">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="讨论 Thesis、Timing 或 Risk..."
            className="w-full bg-transparent px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground/30 resize-none focus:outline-none min-h-[48px] max-h-[100px] leading-relaxed"
            rows={1}
          />
          <button
            disabled={!input.trim()}
            className={cn(
              "absolute right-2.5 bottom-2.5 p-2 rounded-lg transition-all",
              input.trim() ? "bg-primary text-primary-foreground" : "bg-secondary/25 text-muted-foreground/20"
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
      "px-5 py-4",
      !isUser && "bg-secondary/5",
      isLatest && "bg-primary/[0.03] border-l-2 border-primary/30"
    )}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className={cn(
          "w-6 h-6 rounded-md flex items-center justify-center",
          isUser ? "bg-secondary/25" : "bg-primary/10"
        )}>
          {isUser ? (
            <User className="w-3.5 h-3.5 text-foreground/50" />
          ) : (
            <Sparkles className="w-3.5 h-3.5 text-primary" />
          )}
        </div>
        <span className="text-xs font-semibold text-foreground/65">{isUser ? "你" : "助手"}</span>
        <span className="text-[10px] text-muted-foreground/30">{message.timestamp}</span>
      </div>

      {/* Content */}
      <div className="pl-8">
        <p className="text-sm text-foreground/80 leading-relaxed">{message.content}</p>
        
        {/* Key Points - Structured List */}
        {message.keyPoints && (
          <div className="mt-3 space-y-2">
            {message.keyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2.5 py-1.5 px-3 rounded-md bg-secondary/10 border border-border/8">
                <span className="text-xs font-bold text-primary/60 mt-0.5">{i + 1}.</span>
                <span className="text-sm text-foreground/75 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Suggested Next Action */}
        {message.suggestedNext && (
          <div className="mt-3 flex items-center gap-2 text-sm text-primary/70">
            <ArrowRight className="w-3.5 h-3.5" />
            <span className="font-medium">{message.suggestedNext}</span>
          </div>
        )}
      </div>
    </div>
  )
}
