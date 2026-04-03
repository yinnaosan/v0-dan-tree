"use client"

import { useState } from "react"
import { Send, Bot, User, Paperclip, MoreHorizontal, Copy, RefreshCw, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: string
  isKeyPoint?: boolean
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "基于当前 NVDA 的 Thesis 分析，我注意到几个关键点需要讨论：\n\n1. **H200 产能** - 虽然需求强劲，但台积电 CoWoS 产能是否能跟上？\n\n2. **竞争格局** - AMD MI300X 和 Intel Gaudi3 的威胁程度如何评估？\n\n3. **估值锚定** - 当前 65x P/E 的合理性需要重新审视。\n\n您希望先深入讨论哪个方向？",
    timestamp: "14:28",
    isKeyPoint: true,
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
    content: "从几个角度来看当前估值的合理性：\n\n**增长率支撑**\n- 数据中心业务 YoY 279% 增长\n- 预计 FY25 仍有 50%+ 增速\n- PEG 约 1.1x，增长调整后并不离谱\n\n**市场地位溢价**\n- AI 训练市场 >80% 份额\n- CUDA 生态护城河深厚\n- 领先竞品 12-18 个月\n\n**但需要注意**\n- 估值已 price in 完美执行\n- 任何增速放缓都会带来多杀多\n- 建议关注每季度 guidance 的边际变化\n\n我的建议是：估值虽高但有基本面支撑，关键是要设置好风控边界。",
    timestamp: "14:32",
    isKeyPoint: true,
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
    <aside className="w-[380px] h-full bg-card border-l border-border/30 flex flex-col">
      {/* Header - More breathing room */}
      <div className="px-6 py-5 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary/80" />
          </div>
          <div>
            <span className="text-base font-semibold text-foreground">Co-Pilot</span>
            <span className="text-sm text-muted-foreground/70 ml-2.5">讨论区</span>
          </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Messages - Much more generous spacing */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="space-y-10">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      </div>

      {/* Input - Spacious and comfortable */}
      <div className="p-5 border-t border-border/40">
        <div className="bg-secondary/20 rounded-2xl p-5">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="输入问题或想法..."
            className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground/40 resize-none focus:outline-none min-h-[80px] leading-loose"
            rows={3}
          />
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/25">
            <button className="p-2.5 rounded-xl hover:bg-secondary/40 transition-colors">
              <Paperclip className="w-4.5 h-4.5 text-muted-foreground/50" />
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={cn(
                "flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors",
                input.trim()
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary/40 text-muted-foreground/40 cursor-not-allowed"
              )}
            >
              <Send className="w-4 h-4" />
              发送
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user"

  return (
    <div className={cn(
      "relative",
      message.isKeyPoint && !isUser && "pl-5 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-primary/40"
    )}>
      <div className={cn("flex gap-4", isUser && "flex-row-reverse")}>
        {/* Avatar */}
        <div className={cn(
          "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
          isUser ? "bg-secondary/40" : "bg-primary/10"
        )}>
          {isUser ? (
            <User className="w-4.5 h-4.5 text-foreground/60" />
          ) : (
            <Bot className="w-4.5 h-4.5 text-primary/70" />
          )}
        </div>

        {/* Content */}
        <div className={cn("flex-1 min-w-0", isUser && "flex flex-col items-end")}>
          <div className={cn(
            "px-5 py-4 rounded-2xl",
            isUser
              ? "bg-primary/8 text-foreground rounded-tr-lg max-w-[90%]"
              : "bg-secondary/25 text-foreground rounded-tl-lg"
          )}>
            <div className="text-[15px] leading-[1.85] whitespace-pre-wrap tracking-wide">
              {message.content.split("\n").map((line, i) => {
                const parts = line.split(/(\*\*[^*]+\*\*)/)
                return (
                  <span key={i}>
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <span key={j} className="font-semibold text-foreground">
                            {part.slice(2, -2)}
                          </span>
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
          
          {/* Meta - More breathing room */}
          <div className={cn(
            "flex items-center gap-4 mt-3",
            isUser && "flex-row-reverse"
          )}>
            <span className="text-xs text-muted-foreground/50">{message.timestamp}</span>
            {!isUser && (
              <div className="flex items-center gap-1.5">
                <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                  <Copy className="w-3.5 h-3.5 text-muted-foreground/40" />
                </button>
                <button className="p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                  <RefreshCw className="w-3.5 h-3.5 text-muted-foreground/40" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
