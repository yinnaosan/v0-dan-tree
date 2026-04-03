"use client"

import { useState } from "react"
import { Send, Sparkles, User, MoreHorizontal, Copy, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: string
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "基于当前 NVDA 的 Thesis 分析，我注意到几个关键点需要讨论：\n\n1. **H200 产能** - 虽然需求强劲，但台积电 CoWoS 产能是否能跟上？\n\n2. **竞争格局** - AMD MI300X 和 Intel Gaudi3 的威胁程度如何评估？\n\n3. **估值锚定** - 当前 65x P/E 的合理性需要重新审视。\n\n您希望先深入讨论哪个方向？",
    timestamp: "14:28",
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
    content: "从几个角度来看当前估值的合理性：\n\n**增长率支撑**\n- 数据中心业务 YoY 279% 增长\n- 预计 FY25 仍有 50%+ 增速\n- PEG 约 1.1x，增长调整后并不离谱\n\n**市场地位溢价**\n- AI 训练市场 >80% 份额\n- CUDA 生态护城河深厚\n- 领先竞品 12-18 个月\n\n**但需要注意**\n- 估值已 price in 完美执行\n- 任何增速放缓都会带来多杀多\n- 建议关注每季度 guidance 的边际变化",
    timestamp: "14:32",
  },
]

export function DiscussionPanel() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
    }
    setMessages([...messages, newMessage])
    setInput("")
  }

  return (
    <aside className="flex-1 min-w-[300px] h-full bg-[oklch(0.115_0.004_250)] flex flex-col border-l border-border/15">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-border/10 flex items-center justify-between">
        <div>
          <h2 className="text-[14px] font-bold text-foreground tracking-tight">Discussion</h2>
          <p className="text-[11px] text-muted-foreground/45 mt-0.5">AI 辅助决策讨论</p>
        </div>
        <button className="p-1.5 rounded-md hover:bg-secondary/25 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground/40" />
        </button>
      </div>

      {/* Messages - Premium Spacing */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-5">
          {messages.map((message, index) => (
            <MessageItem key={message.id} message={message} isLatest={index === messages.length - 1 && message.role === "assistant"} />
          ))}
        </div>
      </div>

      {/* Input - ChatGPT-like Premium Feel */}
      <div className="p-4 border-t border-border/10">
        <div className="relative bg-secondary/20 rounded-2xl border border-border/20 focus-within:border-primary/25 focus-within:bg-secondary/25 transition-all">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="讨论 Thesis、Timing 或 Risk..."
            className="w-full bg-transparent px-4 py-3.5 pr-12 text-[14px] text-foreground placeholder:text-muted-foreground/35 resize-none focus:outline-none min-h-[52px] max-h-[120px] leading-relaxed"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={cn(
              "absolute right-3 bottom-3 p-2 rounded-xl transition-all",
              input.trim() ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary/30 text-muted-foreground/25"
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
  const [showActions, setShowActions] = useState(false)

  return (
    <div
      className={cn("px-5 py-4 transition-colors", !isUser && "bg-secondary/8", isLatest && !isUser && "bg-primary/4")}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center", isUser ? "bg-secondary/30" : "bg-primary/12")}>
          {isUser ? <User className="w-3.5 h-3.5 text-foreground/60" /> : <Sparkles className="w-3.5 h-3.5 text-primary" />}
        </div>
        <span className="text-[12px] font-semibold text-foreground/70">{isUser ? "你" : "助手"}</span>
        <span className="text-[11px] text-muted-foreground/35">{message.timestamp}</span>

        {/* Actions */}
        {!isUser && showActions && (
          <div className="ml-auto flex items-center gap-1">
            <button className="p-1.5 rounded-md hover:bg-secondary/25 transition-colors">
              <Copy className="w-3.5 h-3.5 text-muted-foreground/40" />
            </button>
            <button className="p-1.5 rounded-md hover:bg-secondary/25 transition-colors">
              <RefreshCw className="w-3.5 h-3.5 text-muted-foreground/40" />
            </button>
          </div>
        )}
      </div>

      {/* Content - Premium Typography */}
      <div className="pl-[34px]">
        <div className="text-[14px] leading-[1.8] text-foreground/85">
          {message.content.split("\n").map((line, i) => {
            const parts = line.split(/(\*\*[^*]+\*\*)/)
            return (
              <span key={i}>
                {parts.map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <span key={j} className="font-semibold text-foreground">{part.slice(2, -2)}</span>
                    )
                  }
                  return part
                })}
                {i < message.content.split("\n").length - 1 && <br />}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
