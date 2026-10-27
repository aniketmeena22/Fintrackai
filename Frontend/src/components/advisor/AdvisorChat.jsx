
import { useState, useRef, useEffect } from 'react'
import {
  Bot,
  Send,
  Sparkles,
  User,
  Wallet,
  TrendingDown,
  Target,
} from 'lucide-react'

const suggestions = [
  {
    label: 'How can I save more?',
    icon: Wallet,
  },
  {
    label: 'Analyze my spending',
    icon: TrendingDown,
  },
  {
    label: 'Help me reach my goals',
    icon: Target,
  },
]

const initialMessage = {
  id: 1,
  role: 'assistant',
  text: "Hi! 👋 I'm your AI Financial Advisor. I can help you understand your finances, improve your savings habits, and work towards your financial goals. What would you like help with today?",
}

function AdvisorChat() {
  const [messages, setMessages] = useState([initialMessage])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }, [messages, isTyping])

  const handleSend = (text = input) => {
    const trimmedText = text.trim()

    if (!trimmedText || isTyping) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: trimmedText,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Demo response: connect an AI API here later.
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        role: 'assistant',
        text: "That's a great question! To give you accurate financial advice, I'll need to analyze your income, expenses, and savings. Once the AI backend is connected, I'll provide recommendations based on your actual financial data.",
      }

      setMessages((prev) => [...prev, reply])
      setIsTyping(false)
    }, 900)
  }

  return (
    <section className="flex min-h-[480px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Bot className="h-5 w-5 text-emerald-400" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              Chat with Your Advisor
            </h2>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-400">
                AI Financial Assistant
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1">
          <Sparkles className="h-3 w-3 text-emerald-400" />
          <span className="text-[10px] font-medium text-emerald-400">
            AI Advisor
          </span>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        aria-live="polite"
        className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-5"
      >
        {messages.map((message) => {
          const isUser = message.role === 'user'

          return (
            <div
              key={message.id}
              className={`flex items-start gap-2.5 ${
                isUser ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  isUser
                    ? 'bg-slate-700'
                    : 'bg-emerald-500/10'
                }`}
              >
                {isUser ? (
                  <User className="h-4 w-4 text-slate-200" />
                ) : (
                  <Bot className="h-4 w-4 text-emerald-400" />
                )}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-3 sm:max-w-[78%] ${
                  isUser
                    ? 'rounded-tr-sm bg-emerald-500/10 text-emerald-50'
                    : 'rounded-tl-sm border border-slate-800 bg-slate-950/60 text-slate-300'
                }`}
              >
                <p className="whitespace-pre-wrap text-xs leading-6 sm:text-sm">
                  {message.text}
                </p>
              </div>
            </div>
          )
        })}

        {isTyping && (
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
              <Bot className="h-4 w-4 text-emerald-400" />
            </div>

            <div
              role="status"
              aria-label="Assistant is typing"
              className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3"
            >
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts */}
      {messages.length === 1 && (
        <div className="px-4 pb-4 sm:px-5">
          <p className="mb-2.5 text-xs font-medium text-slate-400">
            Suggested questions
          </p>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => {
              const Icon = suggestion.icon

              return (
                <button
                  key={suggestion.label}
                  type="button"
                  onClick={() => handleSend(suggestion.label)}
                  disabled={isTyping}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/50 px-3 py-2 text-left text-xs text-slate-300 transition hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:text-emerald-300 disabled:opacity-50"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  {suggestion.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Message Input */}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          handleSend()
        }}
        className="border-t border-slate-800 p-3 sm:p-4"
      >
        <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 p-1.5 transition focus-within:border-emerald-500/50">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask anything about your finances..."
            aria-label="Message your financial advisor"
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
          />

          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-center text-[10px] text-slate-500">
          AI responses are for informational purposes only.
        </p>
      </form>
    </section>
  )
}

export default AdvisorChat
