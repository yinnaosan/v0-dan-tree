"use client"

import { useState } from "react"
import { Send, Bot, User, Paperclip, MoreHorizontal, Copy, RefreshCw, Sparkles, ChevronDown } from "lucide-react"
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
    <aside className="w-[420px] h-full bg-card flex flex-col border-l border-border/40">
      {/* Header - Clean and minimal */}
      <div className="px-7 py-6 border-b border-border/30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-primary/12 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Co-Pilot</h2>
            <p className="text-sm text-muted-foreground">决策讨论区</p>
          </div>
        </div>
        <button className="p-2.5 rounded-xl hover:bg-secondary/40 transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Messages Area - Premium reading experience */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-7 py-10 space-y-12">
          {messages.map((message, index) => (
            <MessageBubble 
              key={message.id} 
              message={message} 
              isLatest={index === messages.length - 1 && message.role === "assistant"}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="px-7 py-2 border-t border-border/20 flex justify-center">
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          <ChevronDown className="w-4 h-4" />
          <span>继续对话</span>
        </button>
      </div>

      {/* Input Area - Spacious and comfortable like ChatGPT */}
      <div className="p-6 bg-card border-t border-border/30">
        <div className="bg-secondary/25 rounded-3xl p-6 shadow-sm">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="输入您的问题或想法..."
            className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none min-h-[100px] leading-relaxed"
            rows={4}
          />
          <div className="flex items-center justify-between mt-5 pt-5 border-t border-border/20">
            <div className="flex items-center gap-2">
              <button className="p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                <Paperclip className="w-5 h-5 text-muted-foreground/60" />
              </button>
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-2xl text-base font-semibold transition-all",
                input.trim()
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                  : "bg-secondary/50 text-muted-foreground/50 cursor-not-allowed"
              )}
            >
              <Send className="w-5 h-5" />
              发送
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

function MessageBubble({ message, isLatest }: { message: Message; isLatest?: boolean }) {
  const isUser = message.role === "user"

  return (
    <div className={cn(
      "relative",
      message.isKeyPoint && !isUser && "pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:rounded-full before:bg-primary/50",
      isLatest && !isUser && "ring-2 ring-primary/20 rounded-3xl -mx-2 px-2 py-4 bg-primary/5"
    )}>
      <div className={cn("flex gap-5", isUser && "flex-row-reverse")}>
        {/* Avatar - Larger */}
        <div className={cn(
          "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0",
          isUser ? "bg-secondary/50" : "bg-primary/15"
        )}>
          {isUser ? (
            <User className="w-5 h-5 text-foreground/70" />
          ) : (
            <Bot className="w-5 h-5 text-primary" />
          )}
        </div>

        {/* Content */}
        <div className={cn("flex-1 min-w-0", isUser && "flex flex-col items-end")}>
          {/* Role Label */}
          <div className={cn("mb-2", isUser && "text-right")}>
            <span className="text-sm font-medium text-muted-foreground">
              {isUser ? "你" : "Co-Pilot"}
            </span>
            <span className="text-sm text-muted-foreground/50 ml-2">{message.timestamp}</span>
          </div>

          {/* Message Content - MUCH LARGER TEXT */}
          <div className={cn(
            "px-6 py-5 rounded-3xl",
            isUser
              ? "bg-primary/10 rounded-tr-lg max-w-[95%]"
              : "bg-secondary/30 rounded-tl-lg"
          )}>
            <div className="text-[16px] leading-[2] whitespace-pre-wrap text-foreground/90">
              {message.content.split("\n").map((line, i) => {
                const parts = line.split(/(\*\*[^*]+\*\*)/)
                return (
                  <span key={i}>
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <span key={j} className="font-bold text-foreground">
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
          
          {/* Actions - More visible */}
          {!isUser && (
            <div className="flex items-center gap-2 mt-4">
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-secondary/40 transition-colors text-sm text-muted-foreground/60 hover:text-muted-foreground">
                <Copy className="w-4 h-4" />
                复制
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-secondary/40 transition-colors text-sm text-muted-foreground/60 hover:text-muted-foreground">
                <RefreshCw className="w-4 h-4" />
                重新生成
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
