"use client"

import { useState } from "react"
import { Send, Bot, User, Paperclip, MoreHorizontal, Copy, RefreshCw } from "lucide-react"
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
    content: "从几个角度来看当前估值的合理性：\n\n**增长率支撑**\n- 数据中心业务 YoY 279% 增长\n- 预计 FY25 仍有 50%+ 增速\n- PEG 约 1.1x，增长调整后并不离谱\n\n**市场地位溢价**\n- AI 训练市场 >80% 份额\n- CUDA 生态护城河深厚\n- 领先竞品 12-18 个月\n\n**但需要注意**\n- 估值已 price in 完美执行\n- 任何增速放缓都会带来多杀多\n- 建议关注每季度 guidance 的边际变化\n\n我的建议是：估值虽高但有基本面支撑，关键是要设置好风控边界。",
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
    <div className="w-[300px] h-full bg-card/80 border-l border-border flex flex-col">
      {/* Header */}
      <div className="px-4 py-2.5 border-b border-border/70 flex items-center justify-between bg-background/30">
        <div className="flex items-center gap-2">
          <Bot className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">Discussion</span>
        </div>
        <button className="p-1 rounded-md hover:bg-secondary/50 transition-colors">
          <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      {/* Input */}
      <div className="p-2.5 border-t border-border/70">
        <div className="bg-secondary/30 rounded-md p-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="讨论..."
            className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none min-h-[48px]"
            rows={2}
          />
          <div className="flex items-center justify-between mt-1.5">
            <button className="p-1 rounded hover:bg-secondary/50 transition-colors">
              <Paperclip className="w-3.5 h-3.5 text-muted-foreground/60" />
            </button>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-medium transition-colors",
                input.trim()
                  ? "bg-primary/80 text-primary-foreground hover:bg-primary"
                  : "bg-secondary/50 text-muted-foreground/50 cursor-not-allowed"
              )}
            >
              <Send className="w-3 h-3" />
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex gap-2.5", isUser && "flex-row-reverse")}>
      {/* Avatar */}
      <div className={cn(
        "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
        isUser ? "bg-secondary" : "bg-primary/10"
      )}>
        {isUser ? (
          <User className="w-3.5 h-3.5 text-secondary-foreground" />
        ) : (
          <Bot className="w-3.5 h-3.5 text-primary" />
        )}
      </div>

      {/* Content */}
      <div className={cn("flex-1 min-w-0", isUser && "flex flex-col items-end")}>
        <div className={cn(
          "px-3 py-2.5 rounded-lg max-w-[calc(100%-24px)]",
          isUser
            ? "bg-primary/10 text-foreground"
            : "bg-secondary/50 text-foreground"
        )}>
          <div className="text-xs leading-relaxed whitespace-pre-wrap">
            {message.content.split("\n").map((line, i) => {
              // Handle bold text
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
        
        {/* Meta */}
        <div className={cn(
          "flex items-center gap-2 mt-1.5",
          isUser && "flex-row-reverse"
        )}>
          <span className="text-[10px] text-muted-foreground">{message.timestamp}</span>
          {!isUser && (
            <div className="flex items-center gap-1">
              <button className="p-1 rounded hover:bg-secondary transition-colors">
                <Copy className="w-3 h-3 text-muted-foreground" />
              </button>
              <button className="p-1 rounded hover:bg-secondary transition-colors">
                <RefreshCw className="w-3 h-3 text-muted-foreground" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
