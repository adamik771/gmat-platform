"use client"

import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import { ArrowUp, MessageCircle, Sparkles, X } from "lucide-react"

/**
 * Slide-in tutor drawer. Mounts on any page that wants per-question
 * AI tutoring; the parent passes the current `questionId` and toggles
 * `open`. The drawer manages its own conversation state, so closing
 * and reopening for the same question keeps the conversation; switching
 * questions resets it.
 */
export interface TutorDrawerProps {
  questionId: string | null
  open: boolean
  onClose: () => void
}

interface Message {
  role: "user" | "assistant"
  content: string
}

const PRESET_PROMPTS = [
  "Why is the right answer right?",
  "Explain why each wrong choice is a trap.",
  "What's the fastest path on test day?",
  "What pattern should I recognize next time?",
]

export default function TutorDrawer({
  questionId,
  open,
  onClose,
}: TutorDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const lastQuestionRef = useRef<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Reset conversation when the question changes. Tutor is per-question;
  // carrying chat across questions would feed misleading context.
  useEffect(() => {
    if (questionId !== lastQuestionRef.current) {
      lastQuestionRef.current = questionId
      setMessages([])
      setInput("")
      setError(null)
    }
  }, [questionId])

  // Auto-scroll to the bottom on new messages.
  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, pending])

  // Focus the input when the drawer opens — keeps the interaction one
  // keystroke away from "Drill it" → "Ask" — and return focus to the
  // trigger on close (closing used to strand keyboard focus inside the
  // hidden drawer).
  const triggerRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement | null
      // Delay slightly so the slide-in animation doesn't fight focus.
      const t = setTimeout(() => inputRef.current?.focus(), 80)
      return () => clearTimeout(t)
    }
    triggerRef.current?.focus?.()
    triggerRef.current = null
  }, [open])

  // Esc closes; nothing else captures it on the practice page.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  async function send(text: string) {
    if (!questionId) return
    const trimmed = text.trim()
    if (!trimmed || pending) return
    setError(null)
    const next: Message[] = [...messages, { role: "user", content: trimmed }]
    setMessages(next)
    setInput("")
    setPending(true)
    // Capture the question this send belongs to: if the student advances
    // mid-reply, the response must not land on (or roll back) the NEXT
    // question's transcript.
    const askedFor = questionId
    const stillCurrent = () => lastQuestionRef.current === askedFor
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId, messages: next }),
      })
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(j.error || `Tutor error (${res.status})`)
      }
      const j = (await res.json()) as { reply: string }
      if (!stillCurrent()) return
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: j.reply || "(no response)" },
      ])
    } catch (e) {
      if (!stillCurrent()) return
      // Roll back the optimistic user message so the student can edit
      // and retry without a duplicated turn in the transcript.
      setMessages((prev) => prev.slice(0, -1))
      setInput(trimmed)
      setError(e instanceof Error ? e.message : "Tutor unavailable")
    } finally {
      setPending(false)
    }
  }

  return (
    <>
      {/* Scrim — clicking outside closes. Pointer-events disabled when
          shut so the drawer doesn't block clicks on the practice page. */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${
          open
            ? "bg-black/40 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden
      />
      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 bottom-0 z-50 flex flex-col transition-transform duration-300 ease-out w-full sm:max-w-md`}
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          backgroundColor: "#0A0A0A",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
        }}
        role="dialog"
        aria-label="GMAT tutor"
        aria-hidden={!open}
        /* inert removes the CLOSED drawer from the tab order — aria-hidden
           alone left 7 focusable ghost stops (close, presets, textarea,
           send) that keyboard users tabbed through invisibly on every
           question. */
        inert={!open}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3.5 flex-shrink-0"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#0D0D0D",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
              style={{ backgroundColor: "rgba(201,168,76,0.14)" }}
            >
              <Sparkles
                className="w-3.5 h-3.5"
                style={{ color: "#C9A84C" }}
              />
            </span>
            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A84C" }}
              >
                Tutor
              </p>
              <p className="text-[12px] text-[#888888] -mt-0.5">
                Per-question explainer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors text-[#888888] hover:text-[#F0F0F0]"
            aria-label="Close tutor"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Conversation */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          {messages.length === 0 && (
            <div className="text-center pt-4">
              <div
                className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "rgba(201,168,76,0.10)",
                  border: "1px solid rgba(201,168,76,0.22)",
                }}
              >
                <MessageCircle
                  className="w-5 h-5"
                  style={{ color: "#C9A84C" }}
                />
              </div>
              <h2 className="font-display text-lg font-semibold text-[#F0F0F0] tracking-tight mb-1.5">
                Ask anything about this question.
              </h2>
              <p className="text-[12px] text-[#888888] leading-relaxed max-w-xs mx-auto">
                The tutor sees the full prompt, choices, correct answer,
                and authored explanation. Responses are cached per
                question so follow-ups are fast.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {PRESET_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => send(p)}
                    disabled={pending || !questionId}
                    className="text-[12px] text-left px-3 py-2 rounded-lg border transition-colors hover:bg-white/[0.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      color: "#C0C0C0",
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <MessageBubble key={i} message={m} />
          ))}

          {pending && (
            <div className="flex items-start gap-2.5">
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(201,168,76,0.14)" }}
                aria-hidden
              >
                <Sparkles className="w-3 h-3" style={{ color: "#C9A84C" }} />
              </span>
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"
                    style={{
                      animation: "tutor-pulse 1.2s ease-in-out infinite",
                      animationDelay: `${d}ms`,
                      opacity: 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <div
              className="text-[12px] p-3 rounded-lg border"
              style={{
                borderColor: "rgba(255,68,68,0.25)",
                backgroundColor: "rgba(255,68,68,0.06)",
                color: "#FF8A8A",
              }}
            >
              {error}
            </div>
          )}
        </div>

        {/* Composer */}
        <div
          className="px-4 py-3 flex-shrink-0"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#0D0D0D",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-end gap-2"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  send(input)
                }
              }}
              placeholder={
                questionId
                  ? "Ask about this question…"
                  : "Open a question to start"
              }
              disabled={pending || !questionId}
              rows={1}
              className="flex-1 resize-none rounded-lg px-3 py-2.5 text-[13px] text-[#F0F0F0] placeholder-[#555555] outline-none transition-colors"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                maxHeight: 120,
              }}
            />
            <button
              type="submit"
              disabled={pending || !input.trim() || !questionId}
              className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
              aria-label="Send to tutor"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </form>
          <p className="text-[10px] text-[#888888] mt-2 leading-snug">
            Press Enter to send · Shift+Enter for newline · Tutor stays in scope
            for this question.
          </p>
        </div>
      </aside>
      <style jsx global>{`
        @keyframes tutor-pulse {
          0%,
          80%,
          100% {
            opacity: 0.3;
            transform: scale(0.85);
          }
          40% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user"
  return (
    <div className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
        style={{
          backgroundColor: isUser
            ? "rgba(255,255,255,0.06)"
            : "rgba(201,168,76,0.14)",
        }}
        aria-hidden
      >
        {isUser ? (
          <span
            className="text-[10px] font-semibold tracking-tight"
            style={{ color: "#C0C0C0" }}
          >
            You
          </span>
        ) : (
          <Sparkles className="w-3 h-3" style={{ color: "#C9A84C" }} />
        )}
      </span>
      <div
        className={`max-w-[88%] rounded-xl px-3.5 py-2.5 text-[13px] leading-[1.65]`}
        style={{
          backgroundColor: isUser
            ? "rgba(201,168,76,0.06)"
            : "rgba(255,255,255,0.025)",
          border: `1px solid ${
            isUser ? "rgba(201,168,76,0.18)" : "rgba(255,255,255,0.05)"
          }`,
          color: "#F0F0F0",
        }}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="tutor-md">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
      <style jsx global>{`
        .tutor-md p {
          margin: 0;
          margin-bottom: 8px;
        }
        .tutor-md p:last-child {
          margin-bottom: 0;
        }
        .tutor-md ul,
        .tutor-md ol {
          margin: 6px 0 8px 0;
          padding-left: 20px;
        }
        .tutor-md li {
          margin-bottom: 3px;
        }
        .tutor-md code {
          background: rgba(255, 255, 255, 0.06);
          padding: 1px 5px;
          border-radius: 4px;
          font-size: 0.92em;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }
        .tutor-md strong {
          color: #f0f0f0;
          font-weight: 600;
        }
        .tutor-md em {
          color: #c9a84c;
          font-style: italic;
        }
        .tutor-md a {
          color: #c9a84c;
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
