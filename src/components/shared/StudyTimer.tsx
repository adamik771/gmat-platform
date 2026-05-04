"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { Play, Pause, RotateCcw, Timer } from "lucide-react"

const WORK_MS = 25 * 60_000
const BREAK_MS = 5 * 60_000
const LONG_BREAK_MS = 15 * 60_000
const LONG_BREAK_AFTER = 4

type Phase = "idle" | "work" | "break"
const STORAGE_KEY = "study-timer-state"

interface StoredState {
  phase: Phase
  /** Absolute epoch ms when the current phase ends. Null when idle. */
  endsAt: number | null
  /** Cycles of work completed; resets every long break. */
  cyclesCompleted: number
  /** True iff the timer was paused. Stores remaining ms instead of endsAt. */
  pausedRemainingMs: number | null
}

const EMPTY_STATE: StoredState = {
  phase: "idle",
  endsAt: null,
  cyclesCompleted: 0,
  pausedRemainingMs: null,
}

function loadState(): StoredState {
  if (typeof window === "undefined") return EMPTY_STATE
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY_STATE
    const parsed = JSON.parse(raw) as StoredState
    return {
      phase: parsed.phase ?? "idle",
      endsAt: parsed.endsAt ?? null,
      cyclesCompleted: parsed.cyclesCompleted ?? 0,
      pausedRemainingMs: parsed.pausedRemainingMs ?? null,
    }
  } catch {
    return EMPTY_STATE
  }
}

function persist(s: StoredState) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  } catch {
    // ignore
  }
}

// ===== External store =====
// localStorage is the canonical source of truth. Component state syncs
// via useSyncExternalStore — this avoids the "setState in useEffect for
// hydration" pattern that produces cascading renders. The store is
// process-singleton (one StudyTimer in the top bar) so module-level
// caching is safe.

let snapshot: StoredState = EMPTY_STATE
let snapshotInitialized = false
const subscribers = new Set<() => void>()

function subscribe(cb: () => void): () => void {
  subscribers.add(cb)
  // Cross-tab sync: another tab editing the same key fires a storage
  // event in this tab. Re-read and notify.
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return
    snapshot = loadState()
    for (const s of subscribers) s()
  }
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage)
  }
  return () => {
    subscribers.delete(cb)
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage)
    }
  }
}

function getSnapshot(): StoredState {
  // First call lazily hydrates from localStorage. Subsequent calls
  // return the cached object so useSyncExternalStore doesn't re-render
  // on every check.
  if (!snapshotInitialized) {
    snapshot = loadState()
    snapshotInitialized = true
  }
  return snapshot
}

function getServerSnapshot(): StoredState {
  return EMPTY_STATE
}

function commit(next: StoredState) {
  snapshot = next
  snapshotInitialized = true
  persist(next)
  for (const s of subscribers) s()
}

function formatTime(ms: number): string {
  const safe = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

/**
 * Compact study-session timer that lives in the (app) top bar. Idle state
 * is a single icon button; running state expands to a pill showing the
 * remaining MM:SS plus pause / reset controls. Survives page reloads via
 * localStorage — the timer is anchored to wall-clock so the displayed
 * remaining time stays accurate across navigation.
 *
 * Cadence: 25-min work blocks alternated with 5-min breaks; every fourth
 * work block is followed by a 15-min long break. No audio, no browser
 * notifications — minimal interruption matches the premium aesthetic.
 */
export default function StudyTimer() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [now, setNow] = useState(() => Date.now())

  // Single effect drives both the visible MM:SS tick and auto-advance
  // when the wall-clock crosses endsAt. setState calls live inside the
  // setInterval callback — never in the effect body — which keeps us
  // out of the cascading-render anti-pattern the lint rule guards
  // against.
  useEffect(() => {
    if (state.phase === "idle" || state.endsAt === null) return

    const id = window.setInterval(() => {
      const nowMs = Date.now()
      setNow(nowMs)

      // Re-read the canonical snapshot (avoids stale closure on
      // state.endsAt across rapid mutations).
      const cur = getSnapshot()
      if (cur.phase === "idle" || cur.endsAt === null) return
      if (nowMs < cur.endsAt) return

      // Auto-advance phase.
      if (cur.phase === "work") {
        const cycles = cur.cyclesCompleted + 1
        const useLong = cycles % LONG_BREAK_AFTER === 0
        commit({
          phase: "break",
          endsAt: Date.now() + (useLong ? LONG_BREAK_MS : BREAK_MS),
          cyclesCompleted: cycles,
          pausedRemainingMs: null,
        })
      } else {
        // break → idle (student decides whether to start the next block)
        commit({
          phase: "idle",
          endsAt: null,
          cyclesCompleted: cur.cyclesCompleted,
          pausedRemainingMs: null,
        })
      }
    }, 1000)

    return () => window.clearInterval(id)
  }, [state.phase, state.endsAt])

  function startWork() {
    commit({
      phase: "work",
      endsAt: Date.now() + WORK_MS,
      cyclesCompleted: state.cyclesCompleted,
      pausedRemainingMs: null,
    })
  }

  function togglePause() {
    const prev = getSnapshot()
    // Pause → store remaining ms, drop endsAt.
    if (prev.endsAt !== null && prev.pausedRemainingMs === null) {
      commit({
        phase: prev.phase,
        endsAt: null,
        cyclesCompleted: prev.cyclesCompleted,
        pausedRemainingMs: Math.max(0, prev.endsAt - Date.now()),
      })
      return
    }
    // Resume → re-anchor endsAt to now + remaining.
    if (prev.pausedRemainingMs !== null) {
      commit({
        phase: prev.phase,
        endsAt: Date.now() + prev.pausedRemainingMs,
        cyclesCompleted: prev.cyclesCompleted,
        pausedRemainingMs: null,
      })
    }
  }

  function reset() {
    commit(EMPTY_STATE)
  }

  // Idle UI — single button.
  if (state.phase === "idle") {
    return (
      <button
        type="button"
        onClick={startWork}
        aria-label="Start a 25-minute focus block"
        title="Start a 25-minute focus block"
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors"
        style={{
          color: "#888888",
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "transparent",
        }}
      >
        <Timer className="w-3.5 h-3.5" aria-hidden />
        Focus 25
      </button>
    )
  }

  const remaining =
    state.pausedRemainingMs !== null
      ? state.pausedRemainingMs
      : state.endsAt !== null
        ? state.endsAt - now
        : 0
  const isPaused = state.pausedRemainingMs !== null
  const isBreak = state.phase === "break"

  return (
    <div
      className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 rounded-md"
      style={{
        backgroundColor: isBreak
          ? "rgba(62,207,142,0.08)"
          : "rgba(201,168,76,0.08)",
        border: `1px solid ${
          isBreak ? "rgba(62,207,142,0.25)" : "rgba(201,168,76,0.25)"
        }`,
      }}
    >
      <span
        className="text-[10px] uppercase tracking-[0.18em] font-semibold"
        style={{ color: isBreak ? "#3ECF8E" : "#C9A84C" }}
      >
        {isBreak ? "Break" : "Focus"}
      </span>
      <span
        className="font-display tabular-nums text-[13px] font-semibold leading-none ml-0.5"
        style={{ color: isBreak ? "#3ECF8E" : "#F0F0F0" }}
      >
        {formatTime(remaining)}
      </span>
      <button
        type="button"
        onClick={togglePause}
        aria-label={isPaused ? "Resume timer" : "Pause timer"}
        title={isPaused ? "Resume timer" : "Pause timer"}
        className="inline-flex items-center justify-center w-6 h-6 rounded transition-colors hover:bg-white/[0.08]"
        style={{ color: "#888888" }}
      >
        {isPaused ? (
          <Play className="w-3 h-3" />
        ) : (
          <Pause className="w-3 h-3" />
        )}
      </button>
      <button
        type="button"
        onClick={reset}
        aria-label="Reset timer"
        title="Reset timer"
        className="inline-flex items-center justify-center w-6 h-6 rounded transition-colors hover:bg-white/[0.08]"
        style={{ color: "#888888" }}
      >
        <RotateCcw className="w-3 h-3" />
      </button>
    </div>
  )
}
