"use client"

import Link from "next/link"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  RotateCcw,
  WifiOff,
  XCircle,
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import QuestionChart from "@/components/shared/QuestionChart"
import { createSupabaseBrowser } from "@/lib/supabase/browser"
import {
  loadReviewQueue,
  type CachedQuestion,
} from "@/lib/offline/review-cache"
import { idbGet } from "@/lib/offline/indexed-db"
import {
  appendPendingAttempt,
  newAttemptId,
} from "@/lib/offline/pending-attempts"
import { drainPendingAttempts } from "@/lib/offline/sync"
import { useOnline } from "@/lib/offline/use-online"

/**
 * Offline drill runner. Renders a simplified question-by-question
 * flow that the user can run with no network: read prompt + choices,
 * pick an answer, see the explanation, mark next.
 *
 * Submissions queue in IndexedDB and replay to /api/practice-sessions
 * via OfflineSyncTrigger when the network returns. Until then, no
 * Supabase writes happen — this page works entirely from the cache
 * primed on the last online /review visit.
 *
 * This is the simpler runner — not a full SessionClient. No two-part
 * grids, no hint reveals, no confidence ratings, no per-question
 * timers in the UI. The pedagogical goal is retrieval practice; the
 * mechanics support that without rebuilding every advanced feature.
 */
type Status = "loading" | "no-cache" | "ready" | "done"

interface QueueItem {
  questionId: string
}

export default function OfflineDrillClient() {
  const online = useOnline()
  const [status, setStatus] = useState<Status>("loading")
  const [userId, setUserId] = useState<string>("")
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [cachedAt, setCachedAt] = useState<number | null>(null)
  // Captured once at the moment the queue loads — using Date.now()
  // during render is flagged as impure by react-hooks/purity. Used
  // only for the "Cached Nh ago" label in the header.
  const [loadedAt, setLoadedAt] = useState<number | null>(null)
  const [questions, setQuestions] = useState<Record<string, CachedQuestion>>({})
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [drilledCount, setDrilledCount] = useState(0)
  // 0 means "not yet timed". Set to Date.now() inside the question-load
  // effect so render stays pure (no Date.now() in initial render path).
  const startedAtRef = useRef<number>(0)

  // Resolve the current user from the LOCALLY-stored session.
  // getSession() reads the stashed auth state without a network call —
  // getUser() is a round-trip to the Auth server, which made this page
  // show "No cached drills yet" precisely when the student was offline
  // (the feature's headline scenario). A possibly-stale local session is
  // fine here: the id only selects a user-scoped IndexedDB key whose
  // data already lives on this device.
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const supabase = createSupabaseBrowser()
        const { data } = await supabase.auth.getSession()
        if (!cancelled) setUserId(data.session?.user?.id ?? "")
      } catch {
        if (!cancelled) setUserId("")
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  // Once we know the user, load queue + question payloads from IDB.
  useEffect(() => {
    if (!userId) {
      // Wait — userId may resolve in the next tick. The user-resolve
      // effect above sets it; if it stays empty we'll show no-cache.
      const t = setTimeout(() => {
        // After 1s with no userId, fall through to no-cache.
        setStatus((prev) => (prev === "loading" ? "no-cache" : prev))
      }, 1000)
      return () => clearTimeout(t)
    }
    let cancelled = false
    ;(async () => {
      const cached = await loadReviewQueue(userId)
      if (cancelled) return
      if (!cached || cached.items.length === 0) {
        setStatus("no-cache")
        return
      }
      // Resolve question payloads. Any item missing its payload (e.g.
      // primer ran with a different scope) is dropped — only items
      // we can actually present go into the runner.
      const items: QueueItem[] = []
      const map: Record<string, CachedQuestion> = {}
      for (const c of cached.items) {
        const q = await idbGet<CachedQuestion>(
          "review-questions",
          `${userId}:${c.questionId}`
        )
        if (q) {
          items.push({ questionId: c.questionId })
          map[c.questionId] = q
        }
      }
      if (cancelled) return
      if (items.length === 0) {
        setStatus("no-cache")
        return
      }
      setQueue(items)
      setQuestions(map)
      setCachedAt(cached.cachedAt)
      setLoadedAt(Date.now())
      startedAtRef.current = Date.now()
      setStatus("ready")
    })()
    return () => {
      cancelled = true
    }
  }, [userId])

  const current = useMemo(() => {
    const item = queue[idx]
    return item ? questions[item.questionId] : null
  }, [queue, questions, idx])

  const handleSubmit = useCallback(async () => {
    if (!current) return
    if (selected === null) return
    if (submitted) return
    setSubmitted(true)

    const isCorrect = selected === current.correctAnswer
    const elapsedMs = Math.max(1000, Date.now() - startedAtRef.current)
    setCorrectCount((n) => n + (isCorrect ? 1 : 0))
    setDrilledCount((n) => n + 1)

    if (userId) {
      // Queue the attempt. drainPendingAttempts will flush this
      // (and any others) when the network returns.
      await appendPendingAttempt(userId, {
        v: 1,
        id: newAttemptId(),
        questionId: current.id,
        section: current.section,
        topic: current.topic,
        subtopic: current.subtopic,
        difficulty: current.difficulty,
        questionType: current.type,
        selectedAnswer: selected,
        isCorrect,
        timeSpentMs: elapsedMs,
        submittedAt: Date.now(),
      })
      // If we happen to be online (e.g. user opened /offline/drill
      // proactively), drain immediately so the attempt syncs.
      if (online) {
        void drainPendingAttempts(userId)
      }
    }
  }, [current, selected, submitted, userId, online])

  const handleNext = useCallback(() => {
    if (idx + 1 >= queue.length) {
      setStatus("done")
      return
    }
    setIdx((n) => n + 1)
    setSelected(null)
    setSubmitted(false)
    startedAtRef.current = Date.now()
  }, [idx, queue.length])

  if (status === "loading") {
    return (
      <Frame>
        <p className="text-[14px] text-[#888888]">Loading cached queue…</p>
      </Frame>
    )
  }

  if (status === "no-cache") {
    return (
      <Frame>
        <h1 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-tight mb-3">
          No cached drills{" "}
          <span className="font-display-italic" style={{ color: "#C9A84C" }}>
            yet.
          </span>
        </h1>
        <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-6">
          Visit <code className="text-[#C9A84C]">/review</code> while online
          at least once. The queue + question content writes to your
          device, then this page becomes available offline.
        </p>
        <Link
          href="/review"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Go to review
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Frame>
    )
  }

  if (status === "done") {
    const accuracy =
      drilledCount === 0
        ? 0
        : Math.round((correctCount / drilledCount) * 100)
    return (
      <Frame>
        <h1 className="font-display text-3xl font-semibold text-[#F0F0F0] tracking-tight mb-3">
          Drill complete.
        </h1>
        <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-6">
          {correctCount} / {drilledCount} correct ({accuracy}%).
          {online
            ? " Attempts synced to your account."
            : " Attempts queued — they'll sync the next time you're online."}
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              setIdx(0)
              setSelected(null)
              setSubmitted(false)
              setCorrectCount(0)
              setDrilledCount(0)
              setStatus("ready")
              startedAtRef.current = Date.now()
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            <RotateCcw className="w-4 h-4" />
            Run again
          </button>
          <Link
            href="/review"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
            style={{
              borderColor: "rgba(255,255,255,0.10)",
              color: "#C0C0C0",
            }}
          >
            Back to review
          </Link>
        </div>
      </Frame>
    )
  }

  // status === "ready"
  if (!current) {
    return (
      <Frame>
        <p className="text-[14px] text-[#888888]">Question payload missing.</p>
      </Frame>
    )
  }

  const isCorrect = submitted && selected === current.correctAnswer
  // Computed against `loadedAt` (captured once on queue load) rather
  // than Date.now() to keep render pure — the label is "approximately
  // how stale was the cache when the user started this drill," which
  // is the right thing to surface anyway.
  const cachedHoursAgo =
    cachedAt !== null && loadedAt !== null
      ? Math.max(0, Math.round((loadedAt - cachedAt) / 3_600_000))
      : null

  return (
    <Frame wide>
      <header className="flex items-center justify-between mb-6">
        <Link
          href="/review"
          className="inline-flex items-center gap-1.5 text-[12px] text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Exit drill
        </Link>
        <div className="flex items-center gap-3 text-[11px] text-[#666666]">
          {!online && (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded uppercase tracking-[0.18em] font-semibold"
              style={{
                backgroundColor: "rgba(201,168,76,0.10)",
                color: "#C9A84C",
              }}
            >
              <WifiOff className="w-3 h-3" /> Offline
            </span>
          )}
          {cachedHoursAgo !== null && (
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Cached {cachedHoursAgo === 0
                ? "just now"
                : cachedHoursAgo === 1
                  ? "1h ago"
                  : `${cachedHoursAgo}h ago`}
            </span>
          )}
          <span className="tabular-nums">
            {idx + 1} / {queue.length}
          </span>
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] uppercase tracking-[0.22em] font-semibold">
        <span style={{ color: "#C9A84C" }}>{current.section}</span>
        <span className="text-[#444444]">·</span>
        <span className="text-[#888888]">{current.topic}</span>
        <span className="text-[#444444]">·</span>
        <span className="text-[#888888]">{current.difficulty}</span>
      </div>

      {current.context && (
        <div
          className="mb-5 p-4 rounded-xl border text-[13px] leading-[1.7]"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.012)",
            color: "#C0C0C0",
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
            {current.context}
          </ReactMarkdown>
        </div>
      )}

      {current.chartSpec && <QuestionChart spec={current.chartSpec} />}

      <div className="mb-5 text-[15px] leading-[1.7] text-[#F0F0F0]">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
          {current.prompt}
        </ReactMarkdown>
      </div>

      <ol className="space-y-2 mb-5">
        {current.options.map((opt, i) => {
          const letter = String.fromCharCode(65 + i)
          const isSelected = selected === i
          const isAnswer = submitted && i === current.correctAnswer
          const isWrongChoice = submitted && isSelected && !isCorrect

          let borderColor = "rgba(255,255,255,0.08)"
          let backgroundColor = "rgba(255,255,255,0.012)"
          if (isAnswer) {
            borderColor = "rgba(62,207,142,0.45)"
            backgroundColor = "rgba(62,207,142,0.08)"
          } else if (isWrongChoice) {
            borderColor = "rgba(255,68,68,0.45)"
            backgroundColor = "rgba(255,68,68,0.08)"
          } else if (isSelected) {
            borderColor = "rgba(201,168,76,0.45)"
            backgroundColor = "rgba(201,168,76,0.08)"
          }

          return (
            <li key={i}>
              <button
                type="button"
                disabled={submitted}
                onClick={() => setSelected(i)}
                className="w-full text-left flex gap-3 px-4 py-3 rounded-lg border text-[14px] transition-colors disabled:cursor-default"
                style={{ borderColor, backgroundColor }}
              >
                <span
                  className="font-display text-[12px] font-semibold tabular-nums w-5 flex-shrink-0 mt-0.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {letter}
                </span>
                <span className="flex-1 text-[#F0F0F0] leading-snug">
                  {opt}
                </span>
                {isAnswer && (
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#3ECF8E" }}
                  />
                )}
                {isWrongChoice && (
                  <XCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#FF4444" }}
                  />
                )}
              </button>
            </li>
          )
        })}
      </ol>

      {submitted && current.explanation && (
        <div
          className="p-4 rounded-xl border mb-5 text-[13px] leading-[1.7]"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.012)",
            color: "#C0C0C0",
          }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
            style={{ color: "#C9A84C" }}
          >
            Explanation
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
            {current.explanation}
          </ReactMarkdown>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] text-[#666666] tabular-nums">
          {drilledCount > 0 && `${correctCount}/${drilledCount} correct so far`}
        </p>
        {submitted ? (
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            {idx + 1 < queue.length ? "Next" : "Finish"}
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Submit
          </button>
        )}
      </div>
    </Frame>
  )
}

function Frame({
  children,
  wide,
}: {
  children: React.ReactNode
  wide?: boolean
}) {
  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className={wide ? "max-w-3xl mx-auto" : "max-w-md mx-auto text-center"}>
        {children}
      </div>
    </div>
  )
}
