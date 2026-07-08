"use client"

import Link from "next/link"
import { Children, useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react"
import {
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Award,
  BookOpen,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronDown,
  FlaskConical,
  Lightbulb,
  Maximize2,
  Minimize2,
  Sparkles,
  X,
} from "lucide-react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import { REVEAL_SENTINEL, transformRecallChecks } from "@/lib/recall-reveal"
import { mergeProgress, progressContentSig } from "@/lib/chapter-progress-merge"
import { selectChapterCoachingState } from "@/lib/chapter-coaching"
import { cn } from "@/lib/utils"
import MixedReviewCard from "@/components/shared/MixedReviewCard"
import QuestionChart from "@/components/shared/QuestionChart"
import type { ChartSpec } from "@/lib/chart-spec"
import ReaderThemeToggle, { useReadingTheme } from "@/components/shared/ReaderThemeToggle"
import ChapterSidebarNav from "./ChapterSidebarNav"
import ChapterRightPanel from "./ChapterRightPanel"
import ChapterMobileTOC from "./ChapterMobileTOC"
import type { Difficulty, Section } from "@/types"

/**
 * Client-safe copy of the same helper in `src/lib/content.ts`. Can't
 * import from content.ts here because that module touches `node:fs`
 * and can't cross the server-client boundary.
 */
function resolveAccuracyTarget(
  targetAccuracyByScore: Record<string, number>,
  targetScore: number | null
): number {
  const tiers = Object.keys(targetAccuracyByScore)
    .map(Number)
    .sort((a, b) => a - b)
  if (tiers.length === 0) return 70
  if (targetScore === null) return targetAccuracyByScore[String(tiers[0])]
  let matched = tiers[0]
  for (const t of tiers) {
    if (targetScore >= t) matched = t
  }
  return targetAccuracyByScore[String(matched)]
}

export interface ReaderQuestion {
  id: string
  section: Section
  topic: string
  subtopic: string
  difficulty: Difficulty
  prompt: string
  options: string[]
  correctAnswer: number
  correctAnswerLetter: string
  explanation: string
  /** Shared passage / set / source text (RC passages, MSR sets). Rendered above
   *  the prompt so a question about "the passage" actually shows the passage. */
  context?: string
  /** Graphics Interpretation: structured chart rendered by QuestionChart.
   *  Without it a GI question's "the graph shows..." had no graph. */
  chartSpec?: ChartSpec
  /** Two-Part Analysis: column headers (the two "roles"). Present only for TPA
   *  questions — `options` then holds the row labels, `correctAnswer` is -1. */
  twoPartColumns?: string[]
  /** Two-Part Analysis: the correct row index per column. Same length as twoPartColumns. */
  twoPartCorrectAnswers?: number[]
}

export interface ReaderSection {
  id: string
  type: "pretest" | "reading" | "summary"
  title: string
  intro?: string
  body: string
  pretestQuestions: ReaderQuestion[]
  checkQuestions: ReaderQuestion[]
}

export interface ReaderProblemSet {
  difficulty: "easy" | "medium" | "hard"
  targetAccuracyByScore: Record<string, number>
  questions: ReaderQuestion[]
}

type Confidence = "low" | "med" | "high"

interface QuestionProgress {
  /** Index the user picked (0-based). null = not yet answered. */
  selected: number | null
  /** Submitted and revealed the answer. */
  submitted: boolean
  confidence: Confidence | null
  /** Free-text self-explanation (generation effect). Optional. */
  selfExplanation: string
  /** Whether the user asked to skip / continue without answering. */
  skipped?: boolean
  /** Two-Part Analysis: one row selection per column (parallel to
   *  twoPartColumns). Single-select questions never set it; `selected`
   *  stays null for TPA. */
  twoPartSelections?: (number | null)[]
}

interface ChapterProgress {
  /** Map of section id → whether the reading was marked read. */
  sectionsRead: Record<string, boolean>
  /** Map of question id → per-question state. */
  questions: Record<string, QuestionProgress>
  /** Difficulty → { correct, total } for end-of-chapter problem set attempts. */
  problemSetResults: Record<
    "easy" | "medium" | "hard",
    { correct: number; total: number } | undefined
  >
  /** Free-text per-section notes the student writes while reading. Keyed
   *  by section id; empty entries are pruned by the UI. */
  notes?: Record<string, string>
  /** Last time the student touched this chapter (ms epoch). Powers the
   *  "Resume" widget on the dashboard — picks the chapter with the
   *  highest lastSeenAt across all chapter_progress entries. */
  lastSeenAt?: number
  /** First time the student touched this chapter (ms epoch), set once. The
   *  spaced-review engine anchors drill + recall-checkpoint scheduling on this
   *  "concept install date". */
  firstSeenAt?: number
}

const EMPTY_PROGRESS: ChapterProgress = {
  sectionsRead: {},
  questions: {},
  problemSetResults: {
    easy: undefined,
    medium: undefined,
    hard: undefined,
  },
}

/** localStorage key for this chapter's progress. Client-only.
 *  Scoped by user id so a shared browser doesn't bleed one account's progress
 *  into another's (and so the merge-on-load doesn't push it to the server). */
function storageKey(userId: string | null, slug: string) {
  return `chapter-progress:${userId ?? "anon"}:${slug}`
}

/** Safe-read from localStorage. Returns EMPTY_PROGRESS during SSR or on bad JSON. */
function loadProgress(userId: string | null, slug: string): ChapterProgress {
  if (typeof window === "undefined") return EMPTY_PROGRESS
  try {
    const raw = window.localStorage.getItem(storageKey(userId, slug))
    if (!raw) return EMPTY_PROGRESS
    const parsed = JSON.parse(raw) as ChapterProgress
    // Defensive: backfill missing keys if the shape evolves.
    return {
      sectionsRead: parsed.sectionsRead ?? {},
      questions: parsed.questions ?? {},
      problemSetResults: parsed.problemSetResults ?? EMPTY_PROGRESS.problemSetResults,
      notes: parsed.notes ?? {},
      lastSeenAt: parsed.lastSeenAt,
    }
  } catch {
    return EMPTY_PROGRESS
  }
}

function saveProgress(userId: string | null, slug: string, progress: ChapterProgress) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(storageKey(userId, slug), JSON.stringify(progress))
  } catch {
    // Quota exceeded or private mode — silently ignore; progress just doesn't persist.
  }
}

/**
 * Shape-defensive merge of a serialized `initialProgress` from the server
 * with the EMPTY_PROGRESS template, so stale user_metadata from a prior
 * chapter-progress schema still renders without crashing.
 */
function normalizeServerProgress(input: unknown): ChapterProgress {
  if (!input || typeof input !== "object") return EMPTY_PROGRESS
  const source = input as Partial<ChapterProgress>
  return {
    sectionsRead: source.sectionsRead ?? {},
    questions: source.questions ?? {},
    problemSetResults: source.problemSetResults ?? EMPTY_PROGRESS.problemSetResults,
    notes: source.notes ?? {},
    lastSeenAt: source.lastSeenAt,
  }
}

/**
 * Fire-and-forget POST to /api/chapter-progress. Debounced by the caller.
 * Failures are silent — localStorage is still the source of truth for the
 * current session, so the user never sees a data-loss toast.
 */
async function pushProgress(slug: string, progress: ChapterProgress) {
  if (typeof window === "undefined") return
  try {
    await fetch("/api/chapter-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, progress }),
    })
  } catch {
    // Offline or auth expired — try again on the next update.
  }
}

// ----- Shared markdown styling for reading bodies -----

// Detects worked-solution paragraphs and re-renders them vertically.
//
// Two patterns trigger a vertical layout:
//   1. Arrow chains — "X → Y → Z" with 2+ standalone "→" text nodes.
//   2. Math-heavy multi-sentence paragraphs — "Add: A, so B. Subtract: C,
//      so D." with 3+ inline elements (code pills, strong, em) and a
//      sentence boundary inside the prose.
//
// The arrow check fires first for pure chain paragraphs. The sentence
// check catches the broader "worked solution" pattern Adam flagged.
function splitParagraph(children: ReactNode): ReactNode[][] | null {
  const arr = Children.toArray(children)

  const arrowGroups = splitArrowChain(arr)
  if (arrowGroups) return arrowGroups

  const sentenceGroups = splitWorkedSolution(arr)
  if (sentenceGroups) return sentenceGroups

  return null
}

function splitArrowChain(arr: ReactNode[]): ReactNode[][] | null {
  const arrowIdxs: number[] = []
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i]
    if (typeof c === "string" && /^\s*→\s*$/.test(c)) {
      arrowIdxs.push(i)
    }
  }
  if (arrowIdxs.length < 2) return null

  const groups: ReactNode[][] = []
  let start = 0
  for (const idx of arrowIdxs) {
    groups.push(arr.slice(start, idx))
    start = idx + 1
  }
  groups.push(arr.slice(start))
  return groups
}

// Splits a paragraph at ". " sentence boundaries (period + space + capital
// letter) only if the paragraph carries 3+ inline elements — the signature
// of a worked solution rather than ordinary prose.
function splitWorkedSolution(arr: ReactNode[]): ReactNode[][] | null {
  const inlineElementCount = arr.filter((c) => typeof c !== "string").length
  if (inlineElementCount < 3) return null

  const groups: ReactNode[][] = [[]]
  for (const c of arr) {
    if (typeof c === "string") {
      // Split AFTER ". " using lookbehind, so the period stays with the
      // previous chunk. Lookahead requires the next char to be a capital
      // letter — keeps "Mr. Smith" / "e.g." / "Q.E.D." from triggering.
      const parts = c.split(/(?<=\. )(?=[A-Z])/g)
      groups[groups.length - 1].push(parts[0])
      for (let i = 1; i < parts.length; i++) {
        groups.push([parts[i]])
      }
    } else {
      groups[groups.length - 1].push(c)
    }
  }
  if (groups.length < 2) return null
  // Only verticalize if at least one resulting group still carries an
  // inline element — otherwise the split is between trailing prose and
  // not a real solution chain.
  const groupsWithInline = groups.filter((g) =>
    g.some((c) => typeof c !== "string")
  )
  if (groupsWithInline.length < 2) return null
  return groups
}

function ArrowChainBlock({ steps }: { steps: ReactNode[][] }) {
  return (
    <div
      className="my-5 pl-4 border-l-2 space-y-2 text-[17px] leading-[1.75]"
      style={{
        color: "var(--read-text-body)",
        borderColor: "var(--read-gold-soft)",
      }}
    >
      {steps.map((step, i) => (
        <div key={i}>{step}</div>
      ))}
    </div>
  )
}

// ---------- Authored callout detection ----------
//
// When a chapter author writes a paragraph that opens with a known bold
// label like "**Trap to watch.**" or "**Mental model.**", we elevate
// the whole paragraph into a styled callout block. Lets authors mark
// pedagogical patterns with a tiny syntactic convention rather than a
// custom markdown extension.

type CalloutKind = "trap" | "mental-model" | "tip" | "takeaway" | "example"

interface CalloutMeta {
  label: string
  border: string
  bg: string
  iconColor: string
  Icon: typeof Lightbulb
}

const CALLOUT_META: Record<CalloutKind, CalloutMeta> = {
  trap: {
    label: "Trap",
    border: "rgba(255,153,51,0.45)",
    bg: "rgba(255,153,51,0.06)",
    iconColor: "#FF9933",
    Icon: AlertTriangle,
  },
  "mental-model": {
    label: "Mental model",
    border: "var(--read-gold-strong)",
    bg: "var(--read-gold-soft)",
    iconColor: "var(--read-gold)",
    Icon: BrainCircuit,
  },
  tip: {
    label: "Pro tip",
    border: "rgba(95,168,255,0.45)",
    bg: "rgba(95,168,255,0.06)",
    iconColor: "#5FA8FF",
    Icon: Lightbulb,
  },
  takeaway: {
    label: "Takeaway",
    border: "rgba(62,207,142,0.4)",
    bg: "rgba(62,207,142,0.06)",
    iconColor: "#3ECF8E",
    Icon: CheckCircle2,
  },
  example: {
    label: "Worked example",
    border: "rgba(176,136,255,0.4)",
    bg: "rgba(176,136,255,0.06)",
    iconColor: "#B088FF",
    Icon: Sparkles,
  },
}

// Patterns that flip a bold-led paragraph into a callout. The match is
// case-insensitive; trailing punctuation in the bold prefix (period,
// colon) is stripped before testing. Only standalone callout-flavored
// labels fire — bare "Example." / "Step 1." / "Why this matters." stay
// inline so the existing chapter prose isn't over-formatted.
const CALLOUT_PATTERNS: Array<[RegExp, CalloutKind]> = [
  [/^(trap to watch|common trap|trap pattern|trap)$/i, "trap"],
  [/^(mental model|the mental model|core idea)$/i, "mental-model"],
  [/^(pro tip|high.?scorer note|elite tip|speed tip)$/i, "tip"],
  [/^(key takeaway|takeaway)$/i, "takeaway"],
  [/^(worked example|illustrated example)$/i, "example"],
]

/** True iff `node` is a `<strong>` React element wrapping a single text
 *  child — the markdown-rendered shape of "**Bold prefix.**". */
function getStrongText(node: ReactNode): string | null {
  if (
    typeof node !== "object" ||
    node === null ||
    !("type" in node) ||
    !("props" in node)
  ) {
    return null
  }
  // Strong override returns a <strong> element; ReactMarkdown also calls
  // through our component map. Type comparison via element name fails
  // because the component is our function — match by the rendered
  // children shape: a function whose first arg has children string.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = (node as any).props
  // Some renderers nest the text inside a wrapping element; only accept
  // the simple case where children is a single string.
  if (typeof props?.children !== "string") return null
  // Heuristic: our `strong` override component sets a known className
  // that includes "font-semibold". Use that as the type marker.
  const className = props?.className ?? ""
  if (!className.includes("font-semibold")) return null
  return props.children as string
}

function detectCallout(
  children: ReactNode
): { kind: CalloutKind; rest: ReactNode[] } | null {
  const arr = Children.toArray(children)
  if (arr.length === 0) return null
  const text = getStrongText(arr[0])
  if (!text) return null
  // Strip trailing period / colon for pattern matching.
  const stripped = text.trim().replace(/[.:]+$/, "").trim()
  for (const [pattern, kind] of CALLOUT_PATTERNS) {
    if (pattern.test(stripped)) {
      // Drop the bold prefix and the leading separator (" ", ". ", ": ").
      const remaining = arr.slice(1)
      if (remaining.length > 0 && typeof remaining[0] === "string") {
        remaining[0] = (remaining[0] as string).replace(/^[\s.:—–-]+/, "")
      }
      return { kind, rest: remaining }
    }
  }
  return null
}

function CalloutBlock({
  kind,
  children,
}: {
  kind: CalloutKind
  children: ReactNode
}) {
  const meta = CALLOUT_META[kind]
  const Icon = meta.Icon
  return (
    <aside
      className="my-6 rounded-xl border p-5"
      style={{ borderColor: meta.border, backgroundColor: meta.bg }}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <Icon
          className="w-3.5 h-3.5 flex-shrink-0"
          style={{ color: meta.iconColor }}
          aria-hidden
        />
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: meta.iconColor }}
        >
          {meta.label}
        </p>
      </div>
      <div
        className="text-[15px] leading-[1.75]"
        style={{ color: "var(--read-text-body)" }}
      >
        {children}
      </div>
    </aside>
  )
}

// ---------- Recall-check answer reveal ----------
//
// Recall checks are authored inline as `> **Recall check.** Q (A) {coaching}`.
// Showing the answer next to the question defeats retrieval practice (the whole
// point is to answer from memory first), so at render time we split off the
// parenthetical answer and hide it behind a "Reveal answer" toggle; any coaching
// that followed the answer stays visible with the question. See
// `transformRecallChecks` for which parenthetical counts as the answer (and the
// citation / list-label guards). Self-tests with no answer paren are left inline.

/** A paragraph the preprocess marked as a hidden recall-check answer. Strips
 *  the sentinel and returns the answer nodes for the reveal toggle. */
function detectReveal(children: ReactNode): ReactNode[] | null {
  const arr = Children.toArray(children)
  const first = arr[0]
  if (typeof first !== "string" || !first.startsWith(REVEAL_SENTINEL)) return null
  const rest = [...arr]
  rest[0] = first.slice(REVEAL_SENTINEL.length)
  return rest
}

function RevealBlock({ children }: { children: ReactNode }) {
  const [shown, setShown] = useState(false)
  if (shown) {
    return (
      <div
        className="mt-2 text-[15px] leading-[1.75] not-italic"
        style={{ color: "var(--read-text-body)" }}
      >
        {children}
      </div>
    )
  }
  return (
    <button
      type="button"
      onClick={() => setShown(true)}
      className="mt-2 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] not-italic transition-opacity hover:opacity-80"
      style={{ borderColor: "var(--read-gold-strong)", color: "var(--read-gold)" }}
    >
      Reveal answer
    </button>
  )
}

const mdComponents: Components = {
  p: ({ children, ...rest }) => {
    const reveal = detectReveal(children)
    if (reveal) {
      return <RevealBlock>{reveal}</RevealBlock>
    }
    const callout = detectCallout(children)
    if (callout) {
      return <CalloutBlock kind={callout.kind}>{callout.rest}</CalloutBlock>
    }
    const groups = splitParagraph(children)
    if (groups) return <ArrowChainBlock steps={groups} />
    return (
      <p
        {...rest}
        className="text-[17px] leading-[1.75] my-5 first:mt-0 last:mb-0"
        style={{ color: "var(--read-text-body)" }}
      >
        {children}
      </p>
    )
  },
  h2: (p) => <h2 {...p} className="font-display text-2xl font-semibold tracking-[-0.01em] mt-10 mb-4 first:mt-0" style={{ color: "var(--read-text)" }} />,
  h3: (p) => <h3 {...p} className="font-display text-lg font-semibold tracking-tight mt-8 mb-2" style={{ color: "var(--read-text)" }} />,
  ul: (p) => <ul {...p} className="list-disc pl-6 my-5 space-y-2 text-[17px] leading-[1.75]" style={{ color: "var(--read-text-body)" }} />,
  ol: (p) => <ol {...p} className="list-decimal pl-6 my-5 space-y-2 text-[17px] leading-[1.75]" style={{ color: "var(--read-text-body)" }} />,
  li: (p) => <li {...p} className="leading-[1.75]" style={{ color: "var(--read-text-body)" }} />,
  strong: (p) => <strong {...p} className="font-semibold" style={{ color: "var(--read-text)" }} />,
  em: (p) => <em {...p} className="font-display-italic" style={{ color: "var(--read-gold)" }} />,
  blockquote: ({ children, ...rest }) => {
    // Auto-upgrade: when a blockquote contains exactly one paragraph and
    // that paragraph already rendered as a CalloutBlock (because the
    // child <p> override detected a callout-led bold prefix), unwrap and
    // return the callout — the blockquote chrome would just double-frame
    // the callout. Lets authors keep the existing `> **Trap to watch.**`
    // markdown form and still get the new colored callout treatment.
    const arr = Children.toArray(children).filter(
      (c) => !(typeof c === "string" && c.trim().length === 0)
    )
    if (arr.length === 1) {
      const only = arr[0]
      if (
        typeof only === "object" &&
        only !== null &&
        "type" in only &&
        only.type === CalloutBlock
      ) {
        return only
      }
    }
    return (
      <blockquote
        {...rest}
        className="my-6 border-l-2 pl-5 font-display-italic text-[15px] leading-[1.75]"
        style={{ borderColor: "var(--read-gold)", color: "var(--read-text-body)" }}
      >
        {children}
      </blockquote>
    )
  },
  code: ({ className, ...p }) => {
    const isBlock = className?.startsWith("language-")
    if (isBlock) {
      return <code {...p} className="font-mono text-xs whitespace-pre-wrap" style={{ color: "var(--read-text)" }} />
    }
    return (
      <code
        {...p}
        className="font-mono text-[13px] px-1.5 py-0.5 rounded"
        style={{ color: "var(--read-gold)", backgroundColor: "var(--read-gold-soft)" }}
      />
    )
  },
  pre: (p) => (
    <pre
      {...p}
      className="my-5 p-4 rounded-lg border overflow-x-auto"
      style={{ backgroundColor: "var(--read-bg-inset)", borderColor: "var(--read-border)" }}
    />
  ),
  table: (p) => (
    <div className="my-5 overflow-x-auto rounded-lg border" style={{ borderColor: "var(--read-border-strong)" }}>
      <table {...p} className="w-full border-collapse text-sm" />
    </div>
  ),
  thead: (p) => <thead {...p} style={{ backgroundColor: "var(--read-bg-inset)" }} />,
  th: (p) => (
    <th
      {...p}
      className="text-left py-2 px-3 text-xs font-semibold uppercase tracking-wide border-b"
      style={{ color: "var(--read-text-muted)", borderColor: "var(--read-border-strong)" }}
    />
  ),
  td: (p) => (
    <td
      {...p}
      className="py-2 px-3 text-[14px] border-b"
      style={{ color: "var(--read-text-body)", borderColor: "var(--read-border)" }}
    />
  ),
  hr: () => <hr className="my-8 border-0 border-t" style={{ borderColor: "var(--read-border-strong)" }} />,
}

// ===== Focus-mode store =====
// Persisted in localStorage and read via useSyncExternalStore so the
// hydration step doesn't trigger setState-in-effect (which would be a
// cascading-render anti-pattern). The store is process-scoped — every
// ChapterReader instance reads the same value.
const FOCUS_KEY = "chapter-focus-mode"
let focusSnapshot: boolean | null = null
const focusSubscribers = new Set<() => void>()

function readFocus(): boolean {
  if (typeof window === "undefined") return false
  try {
    return window.localStorage.getItem(FOCUS_KEY) === "true"
  } catch {
    return false
  }
}

function focusSubscribe(cb: () => void): () => void {
  focusSubscribers.add(cb)
  const onStorage = (e: StorageEvent) => {
    if (e.key !== FOCUS_KEY) return
    focusSnapshot = readFocus()
    for (const s of focusSubscribers) s()
  }
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage)
  }
  return () => {
    focusSubscribers.delete(cb)
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage)
    }
  }
}

function focusGetSnapshot(): boolean {
  if (focusSnapshot === null) focusSnapshot = readFocus()
  return focusSnapshot
}

function focusGetServerSnapshot(): boolean {
  return false
}

function setFocusModeStore(next: boolean) {
  focusSnapshot = next
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(FOCUS_KEY, next ? "true" : "false")
    } catch {
      // ignore
    }
  }
  for (const s of focusSubscribers) s()
}

export default function ChapterReader({
  slug,
  title,
  section,
  estimatedPages,
  summary,
  sections,
  problemSets,
  targetScore,
  initialProgress,
  weakestSection,
  firstPracticeTestSlug,
  prevChapter,
  nextChapter,
  userId,
}: {
  slug: string
  title: string
  section: Section | "General"
  estimatedPages: number
  summary: string | null
  sections: ReaderSection[]
  problemSets: ReaderProblemSet[]
  targetScore: number | null
  initialProgress?: unknown
  /** Adjacent chapters in guided-path order, for the end-of-chapter
   *  "Previous / Next chapter" navigation. Null at the path ends. */
  prevChapter?: { slug: string; title: string } | null
  nextChapter?: { slug: string; title: string } | null
  /** Signed-in user id — scopes the localStorage progress cache per account. */
  userId?: string | null
  /** Session slug of this chapter's first practice test (`ch-<slug>-t1`), or
   *  null when the chapter has no bank yet. Drives the "Practice" CTA; null
   *  falls back to the /practice hub so the link never 404s. */
  firstPracticeTestSlug?: string | null
  /** Server-derived hint for returning students with practice history:
   *  the section in this chapter where their accuracy is meaningfully
   *  below the chapter's section-average. Null when the data is too
   *  sparse / balanced to surface a useful recommendation. */
  weakestSection?: {
    id: string
    title: string
    accuracyPct: number
    attempts: number
  } | null
}) {
  // The chapter's anchor concept for the reference rail: its authored
  // "Mental model." callout, else a trimmed summary. No per-chapter work.
  const bigIdea = useMemo(() => {
    const body = sections.map((s) => s.body || "").join("\n")
    const mm = body.match(/\*\*Mental model\.?\*\*\s*([^\n]+)/i)
    let raw = (mm ? mm[1] : summary) || ""
    raw = raw.replace(/\*\*/g, "").replace(/\*/g, "").replace(/`/g, "").trim()
    if (!raw) return null
    if (raw.length > 240) {
      const cut = raw.slice(0, 240)
      const stop = Math.max(
        cut.lastIndexOf(". "),
        cut.lastIndexOf("— "),
        cut.lastIndexOf("? "),
      )
      raw = (stop > 120 ? cut.slice(0, stop + 1) : cut).trim()
      if (!/[.!?…]$/.test(raw)) raw += "…"
    }
    return raw
  }, [sections, summary])

  // Hydrate progress from localStorage after mount. SSR renders an empty
  // state (every question pristine, no sections marked read), then the
  // client useEffect fills it in with whichever source is more complete.
  // Avoids a hydration mismatch by never touching browser APIs during SSR.
  const [progress, setProgress] = useState<ChapterProgress>(EMPTY_PROGRESS)
  const [hydrated, setHydrated] = useState(false)
  const [theme, setTheme] = useReadingTheme()
  // Focus mode — collapses the 3-col grid (sidebar nav + right panel)
  // and centers the reading column for distraction-free study sessions.
  // Persisted in localStorage so the choice survives reloads.
  // Focus mode lives in the module-level store above so the hydration
  // step doesn't trigger setState-in-effect. localStorage is the durable
  // backing; useSyncExternalStore subscribes us to it.
  const focusMode = useSyncExternalStore(
    focusSubscribe,
    focusGetSnapshot,
    focusGetServerSnapshot
  )
  function toggleFocusMode() {
    setFocusModeStore(!focusMode)
  }
  useEffect(() => {
    const local = loadProgress(userId ?? null, slug)
    const server = normalizeServerProgress(initialProgress)
    // Union both sources so nothing is lost: a graded set saved locally but not
    // yet synced to the server, or progress from another device, both survive.
    // (The old "pick the bigger snapshot" heuristic discarded the other side and
    // never counted problemSetResults, so a just-finished test could vanish.)
    const merged = mergeProgress(local, server)
    // Reads localStorage (browser-only) — required to run in the effect
    // rather than during render to avoid SSR hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(merged)
    setHydrated(true)
    // Heal drift: persist the union locally, and push to the server only when
    // the union adds something the server didn't already have (so this doesn't
    // write on every open) — this makes a locally-saved-but-unsynced result stick.
    saveProgress(userId ?? null, slug, merged)
    if (progressContentSig(merged) !== progressContentSig(server)) {
      void pushProgress(slug, merged)
    }
  }, [slug, initialProgress, userId])

  // Debounce server pushes so free-text self-explanation typing doesn't
  // hammer the API once per keystroke. 800ms covers a typical typing burst
  // without making the cross-device sync feel laggy.
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const queueServerPush = useCallback(
    (next: ChapterProgress) => {
      if (pushTimer.current) clearTimeout(pushTimer.current)
      pushTimer.current = setTimeout(() => {
        void pushProgress(slug, next)
      }, 800)
    },
    [slug]
  )

  const update = useCallback(
    (updater: (prev: ChapterProgress) => ChapterProgress) => {
      setProgress((prev) => {
        const next: ChapterProgress = {
          ...updater(prev),
          // Stamp every progress modification with the current timestamp.
          // Powers the "Resume" widget on the dashboard, which picks the
          // chapter with the highest lastSeenAt across all chapter_progress
          // entries to surface "continue where you left off."
          lastSeenAt: Date.now(),
          // Install date — set once on the first write. Anchors the
          // spaced-review drill/checkpoint schedule.
          firstSeenAt: prev.firstSeenAt ?? Date.now(),
        }
        saveProgress(userId ?? null, slug, next)
        queueServerPush(next)
        return next
      })
    },
    [slug, queueServerPush, userId]
  )

  // Flush a pending debounced push when the tab is hidden or the user
  // navigates away — otherwise the last ~800ms of edits could be lost on
  // navigation.
  useEffect(() => {
    function flushIfPending() {
      if (pushTimer.current) {
        clearTimeout(pushTimer.current)
        pushTimer.current = null
        void pushProgress(slug, progress)
      }
    }
    window.addEventListener("pagehide", flushIfPending)
    return () => {
      window.removeEventListener("pagehide", flushIfPending)
      flushIfPending()
    }
  }, [slug, progress])

  const totalSections = sections.length
  const completedSections = sections.filter(
    (s) => progress.sectionsRead[s.id]
  ).length
  const percentComplete =
    totalSections > 0
      ? Math.round((completedSections / totalSections) * 100)
      : 0

  return (
    <div
      className="reader-themed space-y-10 rounded-2xl p-4 sm:p-6 -m-4 sm:-m-6"
      data-reading-theme={theme}
      style={{ backgroundColor: "var(--read-bg)", color: "var(--read-text)" }}
    >
      {/* Header */}
      <div
        className="relative overflow-hidden rounded-2xl border px-6 py-10 sm:px-10 sm:py-12"
        style={{ borderColor: "var(--read-border)", backgroundColor: "var(--read-bg-inset)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, var(--read-gold-soft) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.025] mix-blend-overlay"
          aria-hidden
        />
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleFocusMode}
            aria-label={focusMode ? "Exit focus mode" : "Enter focus mode"}
            title={focusMode ? "Exit focus mode" : "Enter focus mode"}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-150 hover:scale-[1.04] active:scale-[0.96]"
            style={{
              borderColor: focusMode
                ? "var(--read-gold-strong)"
                : "var(--read-border-strong)",
              backgroundColor: focusMode
                ? "var(--read-gold-soft)"
                : "var(--read-bg-elevated)",
              color: focusMode
                ? "var(--read-gold)"
                : "var(--read-text-muted)",
            }}
          >
            {focusMode ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <ReaderThemeToggle theme={theme} onChange={setTheme} />
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--read-gold)" }}
            >
              {section} · Chapter
            </span>
            <span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, var(--read-gold-strong), transparent)",
              }}
              aria-hidden
            />
            <span
              className="flex items-center gap-1.5 text-[11px] tracking-wide"
              style={{ color: "var(--read-text-faint)" }}
            >
              <BookOpen className="w-3 h-3" />
              {estimatedPages} pages
              {totalSections > 0 && (
                <span style={{ color: "var(--read-text-faint)" }}>
                  {" "}· {totalSections} sections
                </span>
              )}
            </span>
          </div>
          <h1
            className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]"
            style={{ color: "var(--read-text)" }}
          >
            {title}
          </h1>
          {summary && (
            <p
              className="text-[16px] sm:text-[17px] mt-5 leading-[1.75] max-w-2xl"
              style={{ color: "var(--read-text-body)" }}
            >
              {summary}
            </p>
          )}
          {/* Hero CTA — Start / Continue / Problem sets / Review.
              The label + scroll target depend on chapter progress. */}
          {hydrated && sections.length > 0 && (
            <HeroCta
              completedSections={completedSections}
              totalSections={totalSections}
              firstSectionId={sections[0].id}
              firstUnreadId={
                sections.find((s) => !progress.sectionsRead[s.id])?.id ?? null
              }
              hasProblemSets={problemSets.length > 0}
              hasProblemSetAttempts={hasAnyProblemSetResult(progress)}
            />
          )}
          {/* Weakest-section hint — server-derived from practice_attempts.
              Renders only when the student has enough data and one section
              is meaningfully below the chapter's average. Secondary to the
              primary CTA above; preserves the decisive "what to do next"
              while giving returning students a smart re-entry point. */}
          {weakestSection && (
            <a
              href={`#${weakestSection.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(weakestSection.id)
                if (!el) return
                el.scrollIntoView({ behavior: "smooth", block: "start" })
                if (typeof window !== "undefined") {
                  window.history.replaceState(null, "", `#${weakestSection.id}`)
                }
              }}
              className="group inline-flex items-start gap-2 mt-4 max-w-xl text-[13px] leading-snug px-3.5 py-2.5 rounded-lg border transition-colors"
              style={{
                borderColor: "var(--read-border-strong)",
                color: "var(--read-text-body)",
                backgroundColor: "var(--read-bg-elevated)",
              }}
            >
              <BrainCircuit
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: "var(--read-gold)" }}
                aria-hidden
              />
              <span>
                Practice data suggests your weakest section here:{" "}
                <span
                  className="font-semibold underline underline-offset-2"
                  style={{ color: "var(--read-text)" }}
                >
                  {weakestSection.title}
                </span>{" "}
                <span style={{ color: "var(--read-text-muted)" }}>
                  ({weakestSection.accuracyPct}% on {weakestSection.attempts}{" "}
                  attempt{weakestSection.attempts === 1 ? "" : "s"})
                </span>{" "}
                — jump there.
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Inline progress bar — shown on smaller screens where the
          sticky sidebar isn't visible. Hidden on lg+ since the rail
          carries the same data. Also gated to once the student has
          read at least one section. */}
      {completedSections > 0 && (
        <div className="lg:hidden">
          <div
            className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-semibold mb-2.5"
            style={{ color: "var(--read-text-faint)" }}
          >
            <span>
              {completedSections} of {totalSections} sections complete
            </span>
            <span
              className="font-display tabular-nums normal-case tracking-normal text-[13px]"
              style={{ color: "var(--read-text-body)" }}
            >
              {percentComplete}%
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--read-bg-inset)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${percentComplete}%`,
                backgroundColor: "var(--read-gold)",
              }}
            />
          </div>
        </div>
      )}

      {/* Three-column reading layout on lg+:
            left rail  — sticky chapter contents nav
            center     — the section cards + end-of-chapter problem sets
            right rail — sticky learning panel (progress + next action)
          On <lg this collapses to a single column (the center). */}
      {(() => {
        const sidebarItems = sections.map((s) => ({
          id: s.id,
          type: s.type,
          title: s.title,
          read: !!progress.sectionsRead[s.id],
        }))
        const nextUnread = sections.find((s) => !progress.sectionsRead[s.id])
        return (
          <div
            className={
              focusMode
                ? "max-w-4xl mx-auto"
                : "lg:grid lg:grid-cols-[210px_minmax(0,1fr)_290px] lg:gap-x-8 lg:items-start"
            }
          >
            {!focusMode && (
              <aside className="hidden lg:block sticky top-6 self-start">
                <ChapterSidebarNav
                  sections={sidebarItems}
                  hasProblemSets={problemSets.length > 0}
                  problemSetsAnchorId="chapter-problem-sets"
                />
              </aside>
            )}

            {!focusMode && (
              <ChapterMobileTOC
                sections={sidebarItems}
                hasProblemSets={problemSets.length > 0}
                problemSetsAnchorId="chapter-problem-sets"
              />
            )}

            <div className="space-y-10 min-w-0">
              {sections.map((s, i) => {
                const next = sections[i + 1] ?? null
                return (
                  <SectionCard
                    key={s.id}
                    section={s}
                    hydrated={hydrated}
                    progress={progress}
                    update={update}
                    nextSectionId={next?.id ?? null}
                    nextSectionTitle={next?.title ?? null}
                    hasProblemSets={problemSets.length > 0}
                  />
                )
              })}

              {problemSets.length > 0 && (
                <div id="chapter-problem-sets" className="scroll-mt-6">
                  <ProblemSetsBlock
                    slug={slug}
                    sets={problemSets}
                    targetScore={targetScore}
                    progress={progress}
                    update={update}
                  />
                </div>
              )}

              {hydrated &&
                completedSections === totalSections &&
                totalSections > 0 && (
                  <ChapterCompletionCard
                    section={section}
                    title={title}
                    totalSections={totalSections}
                    problemSetCount={problemSets.length}
                    attemptedProblemSetCount={countAttemptedProblemSets(progress)}
                    problemSetResults={progress.problemSetResults}
                    sets={problemSets}
                    targetScore={targetScore}
                    firstPracticeTestSlug={firstPracticeTestSlug ?? null}
                    prevChapter={prevChapter ?? null}
                    nextChapter={nextChapter ?? null}
                  />
                )}
            </div>

            {!focusMode && (
              <aside className="hidden lg:block sticky top-6 self-start">
                <ChapterRightPanel
                  section={section}
                  estimatedPages={estimatedPages}
                  totalSections={totalSections}
                  completedSections={completedSections}
                  hasProblemSets={problemSets.length > 0}
                  nextUnreadTitle={nextUnread?.title ?? null}
                  nextUnreadAnchorId={nextUnread?.id ?? null}
                  bigIdea={bigIdea}
                  firstPracticeTestSlug={firstPracticeTestSlug ?? null}
                />
              </aside>
            )}
          </div>
        )
      })()}
    </div>
  )
}

// ---------- Hero CTA + completion card ----------

/**
 * Decisive call-to-action below the chapter summary. Label + scroll
 * target adapt to chapter progress so the student always sees a single
 * confident "what to do next" rather than a stack of options.
 */
function HeroCta({
  completedSections,
  totalSections,
  firstSectionId,
  firstUnreadId,
  hasProblemSets,
  hasProblemSetAttempts,
}: {
  completedSections: number
  totalSections: number
  firstSectionId: string
  firstUnreadId: string | null
  hasProblemSets: boolean
  hasProblemSetAttempts: boolean
}) {
  const allSectionsRead = completedSections >= totalSections && totalSections > 0
  let label: string
  let href: string

  if (completedSections === 0) {
    label = "Start chapter"
    href = `#${firstSectionId}`
  } else if (allSectionsRead && hasProblemSets && !hasProblemSetAttempts) {
    label = "Try the problem sets"
    href = "#chapter-problem-sets"
  } else if (allSectionsRead) {
    label = "Review chapter"
    href = `#${firstSectionId}`
  } else {
    label = "Continue chapter"
    href = `#${firstUnreadId ?? firstSectionId}`
  }

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const targetId = href.startsWith("#") ? href.slice(1) : href
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", href)
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      style={{
        backgroundColor: "var(--read-gold)",
        color: "var(--read-bg-inset)",
        boxShadow:
          "0 4px 14px -4px rgba(201,168,76,0.45), 0 0 0 1px rgba(201,168,76,0.3)",
      }}
    >
      {label}
      <ArrowRight className="w-3.5 h-3.5" aria-hidden />
    </a>
  )
}

/**
 * Completion block surfaced at the bottom of the chapter once every
 * section has been read. Shows per-difficulty problem-set scores against
 * the student's accuracy target, plus adaptive coaching copy and CTAs.
 */
function ChapterCompletionCard({
  section,
  title,
  totalSections,
  problemSetCount,
  attemptedProblemSetCount,
  problemSetResults,
  sets,
  targetScore,
  firstPracticeTestSlug,
  prevChapter,
  nextChapter,
}: {
  section: Section | "General"
  title: string
  totalSections: number
  problemSetCount: number
  attemptedProblemSetCount: number
  problemSetResults: ChapterProgress["problemSetResults"]
  sets: ReaderProblemSet[]
  targetScore: number | null
  firstPracticeTestSlug: string | null
  prevChapter: { slug: string; title: string } | null
  nextChapter: { slug: string; title: string } | null
}) {
  // Deep-link to this chapter's first practice test; fall back to the
  // Practice hub when the chapter has no bank yet (so the CTA never 404s).
  const practiceHref = firstPracticeTestSlug
    ? `/practice/session/${firstPracticeTestSlug}`
    : "/practice"
  const hasProblemSets = problemSetCount > 0
  const allSetsDone = hasProblemSets && attemptedProblemSetCount >= problemSetCount
  const noneAttempted = hasProblemSets && attemptedProblemSetCount === 0

  // Build a score row per difficulty that exists in this chapter.
  const setMap = new Map(sets.map((s) => [s.difficulty, s]))
  type ScoreRow = {
    difficulty: "easy" | "medium" | "hard"
    accuracy: number | null
    target: number
    metTarget: boolean | null
  }
  const scoreRows: ScoreRow[] = (["easy", "medium", "hard"] as const)
    .filter((d) => setMap.has(d))
    .map((d) => {
      const result = problemSetResults[d]
      const ps = setMap.get(d)!
      const target = resolveAccuracyTarget(ps.targetAccuracyByScore, targetScore)
      const accuracy =
        result && result.total > 0
          ? Math.round((result.correct / result.total) * 100)
          : null
      return {
        difficulty: d,
        accuracy,
        target,
        metTarget: accuracy !== null ? accuracy >= target : null,
      }
    })

  const attemptedRows = scoreRows.filter((r) => r.accuracy !== null)
  const belowTargetRows = attemptedRows.filter((r) => r.metTarget === false)

  // Coaching copy keyed to problem-set performance. The state is chosen by a
  // pure, tested helper so the "no problem sets / no matching rows" cases resolve
  // to a safe generic message instead of reducing an empty array — the bug that
  // crashed the completion card for the welcome + section-intro chapters.
  const coachingState = selectChapterCoachingState({
    hasProblemSets,
    noneAttempted,
    attemptedCount: attemptedRows.length,
    belowTargetCount: belowTargetRows.length,
  })
  let coachingCopy: React.ReactNode
  if (coachingState === "none_attempted") {
    coachingCopy = (
      <>
        The reading is the easy part — retrieval is what locks it in.
        Try a graded problem set next.
      </>
    )
  } else if (coachingState === "all_above_target") {
    coachingCopy = (
      <>
        Problem set performance is on target. Independent timed practice
        is the highest-leverage next step — the patterns need to hold under
        time pressure, not just in deliberate study.
      </>
    )
  } else if (coachingState === "has_weakest") {
    const weakest = belowTargetRows.reduce((min, r) =>
      (r.accuracy ?? 100) < (min.accuracy ?? 100) ? r : min
    )
    const gap = weakest.target - (weakest.accuracy ?? 0)
    coachingCopy = (
      <>
        The {weakest.difficulty} set is {gap}% below target. One more
        focused session before moving on will compound better than advancing
        with gaps at that difficulty.
      </>
    )
  } else {
    coachingCopy = (
      <>
        Chapter complete. Keep the momentum going — move on to the next
        chapter in your path, or put these ideas under time pressure with a
        practice set.
      </>
    )
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl border px-7 sm:px-10 py-9 sm:py-11"
      style={{
        backgroundColor: "var(--read-bg-elevated)",
        borderColor: "var(--read-gold-strong)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% -10%, var(--read-gold-soft) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center gap-2.5 mb-4">
          <CheckCircle2
            className="w-5 h-5"
            style={{ color: "var(--read-success)" }}
          />
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--read-gold)" }}
          >
            Chapter complete
          </p>
        </div>
        <h2
          className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.01em] leading-[1.15]"
          style={{ color: "var(--read-text)" }}
        >
          {title}
        </h2>
        <p
          className="text-[13px] mt-3 leading-[1.6]"
          style={{ color: "var(--read-text-muted)" }}
        >
          {totalSections} section{totalSections === 1 ? "" : "s"} read
          {hasProblemSets
            ? noneAttempted
              ? ` · ${problemSetCount} graded problem set${
                  problemSetCount === 1 ? "" : "s"
                } waiting`
              : allSetsDone
              ? ` · all ${problemSetCount} graded problem set${
                  problemSetCount === 1 ? "" : "s"
                } attempted`
              : ` · ${attemptedProblemSetCount} of ${problemSetCount} graded problem sets attempted`
            : ""}
        </p>

        {/* Per-difficulty score grid — only visible when at least one set has been attempted */}
        {hasProblemSets && attemptedRows.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {scoreRows.map(({ difficulty, accuracy, target, metTarget }) => (
              <div
                key={difficulty}
                className="flex flex-col gap-1.5 px-4 py-3 rounded-xl border min-w-[88px]"
                style={{
                  backgroundColor: "var(--read-bg-inset)",
                  borderColor:
                    metTarget === true
                      ? "rgba(62,207,142,0.22)"
                      : metTarget === false
                      ? "rgba(255,68,68,0.18)"
                      : "var(--read-border)",
                }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.18em] font-semibold"
                  style={{ color: "var(--read-text-faint)" }}
                >
                  {difficulty}
                </span>
                {accuracy !== null ? (
                  <>
                    <span
                      className="text-[22px] font-semibold leading-none tracking-tight tabular-nums"
                      style={{
                        color:
                          metTarget === true
                            ? "var(--read-success)"
                            : metTarget === false
                            ? "#E07070"
                            : "var(--read-text)",
                      }}
                    >
                      {accuracy}%
                    </span>
                    <span
                      className="text-[11px] leading-none"
                      style={{ color: "var(--read-text-faint)" }}
                    >
                      target {target}%{metTarget === true ? " ✓" : ""}
                    </span>
                  </>
                ) : (
                  <span
                    className="text-[20px] font-semibold leading-none"
                    style={{ color: "var(--read-text-faint)" }}
                  >
                    —
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        <p
          className="text-[14px] mt-5 leading-[1.6] max-w-xl"
          style={{ color: "var(--read-text-body)" }}
        >
          {coachingCopy}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {noneAttempted ? (
            <a
              href="#chapter-problem-sets"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById("chapter-problem-sets")
                if (!el) return
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--read-gold)",
                color: "var(--read-bg-inset)",
              }}
            >
              Try the problem sets
              <ArrowRight className="w-3.5 h-3.5" aria-hidden />
            </a>
          ) : (
            <Link
              href={practiceHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--read-gold)",
                color: "var(--read-bg-inset)",
              }}
            >
              {section === "General" ? "Start practicing" : `Practice ${section}`}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          )}
          <Link
            href="/review/all"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold border transition-colors"
            style={{
              borderColor: "var(--read-border-strong)",
              color: "var(--read-text)",
              backgroundColor: "transparent",
            }}
          >
            Review queue
          </Link>
          <Link
            href="/chapters"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-colors"
            style={{ color: "var(--read-text-muted)" }}
          >
            All chapters
          </Link>
        </div>

        {(prevChapter || nextChapter) && (
          <div
            className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5"
            style={{ borderTop: "1px solid var(--read-border)" }}
          >
            {prevChapter ? (
              <Link
                href={`/chapters/${prevChapter.slug}`}
                className="inline-flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-80"
                style={{ color: "var(--read-text-muted)" }}
              >
                <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
                <span className="truncate max-w-[42vw] sm:max-w-xs">
                  Previous: {prevChapter.title}
                </span>
              </Link>
            ) : (
              <span aria-hidden />
            )}
            {nextChapter && (
              <Link
                href={`/chapters/${nextChapter.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--read-gold)",
                  color: "var(--read-gold)",
                  backgroundColor: "transparent",
                }}
              >
                <span className="truncate max-w-[52vw] sm:max-w-sm">
                  Next chapter: {nextChapter.title}
                </span>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ---------- Section notes ----------

/**
 * Inline note-taking block at the bottom of each section card. Notes
 * persist to ChapterProgress.notes (keyed by section id) and ride the
 * existing localStorage + debounced server-push pipeline. Collapsed by
 * default so the reading flow stays clean; the "Add note" affordance
 * expands the editor on click and stays expanded if the note is non-empty.
 */
function SectionNotes({
  sectionId,
  notes,
  update,
}: {
  sectionId: string
  notes: Record<string, string>
  update: (u: (prev: ChapterProgress) => ChapterProgress) => void
}) {
  const value = notes[sectionId] ?? ""
  const hasNote = value.trim().length > 0
  const [open, setOpen] = useState(hasNote)

  function setNote(next: string) {
    update((prev) => ({
      ...prev,
      notes: { ...(prev.notes ?? {}), [sectionId]: next },
    }))
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors"
        style={{ color: "var(--read-text-faint)" }}
      >
        <Lightbulb className="w-3 h-3" />
        Add a note
      </button>
    )
  }

  return (
    <div
      className="rounded-xl border p-4"
      style={{
        borderColor: "var(--read-border)",
        backgroundColor: "var(--read-bg-inset)",
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "var(--read-gold)" }}
        >
          Your note
        </p>
        {!hasNote && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-[10px] uppercase tracking-[0.18em]"
            style={{ color: "var(--read-text-faint)" }}
          >
            Cancel
          </button>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => setNote(e.target.value)}
        placeholder="What clicked? Where did you struggle? Notes save automatically."
        rows={3}
        className="w-full bg-transparent border-0 outline-none resize-y text-[14px] leading-[1.6]"
        style={{ color: "var(--read-text-body)" }}
      />
    </div>
  )
}

// ---------- Section card ----------

function SectionCard({
  section: s,
  hydrated,
  progress,
  update,
  nextSectionId,
  nextSectionTitle,
  hasProblemSets,
}: {
  section: ReaderSection
  hydrated: boolean
  progress: ChapterProgress
  update: (u: (prev: ChapterProgress) => ChapterProgress) => void
  nextSectionId: string | null
  nextSectionTitle: string | null
  hasProblemSets: boolean
}) {
  const read = !!progress.sectionsRead[s.id]

  // Where the "Continue" CTA sends the student once this section is read:
  // the next section if there is one, otherwise the problem sets (the
  // natural next step after the last reading section). Null only on the
  // final section of a chapter with no problem sets — nothing follows.
  const continueTarget = nextSectionId
    ? { id: nextSectionId, label: nextSectionTitle ?? "the next section" }
    : hasProblemSets
      ? { id: "chapter-problem-sets", label: "the problem sets" }
      : null

  function handleContinue(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    if (!continueTarget) return
    const el = document.getElementById(continueTarget.id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${continueTarget.id}`)
    }
  }

  const icon =
    s.type === "pretest" ? (
      <FlaskConical className="w-5 h-5" style={{ color: "var(--read-gold)" }} />
    ) : s.type === "summary" ? (
      <Award className="w-5 h-5" style={{ color: "var(--read-gold)" }} />
    ) : (
      <BookOpen className="w-5 h-5" style={{ color: "var(--read-gold)" }} />
    )

  return (
    <article
      id={s.id}
      className="rounded-2xl border transition-colors scroll-mt-6"
      style={{
        backgroundColor: "var(--read-bg-elevated)",
        borderColor: read ? "var(--read-border)" : "var(--read-border-strong)",
      }}
    >
      <header
        className="flex items-start gap-4 px-6 sm:px-8 py-6 border-b"
        style={{ borderColor: "var(--read-border)" }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: "var(--read-gold-soft)" }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--read-gold)" }}
          >
            {s.type === "pretest"
              ? "Pretest"
              : s.type === "summary"
              ? "Summary"
              : "Reading"}
          </p>
          <h2
            className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.01em] mt-1 leading-[1.2]"
            style={{ color: "var(--read-text)" }}
          >
            {s.title}
          </h2>
        </div>
        {hydrated && read && (
          <span
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.22em] flex-shrink-0 mt-1"
            style={{ color: "var(--read-success)" }}
          >
            <CheckCircle2 className="w-3 h-3" />
            Read
          </span>
        )}
      </header>

      <div className="px-6 sm:px-8 py-7 space-y-6">
        {s.intro && (
          <div
            className="p-5 rounded-xl border text-[14px] leading-[1.75]"
            style={{
              borderColor: "var(--read-gold-strong)",
              backgroundColor: "var(--read-gold-soft)",
              color: "var(--read-text-body)",
            }}
          >
            <div className="flex items-start gap-3">
              <Sparkles
                className="w-4 h-4 flex-shrink-0 mt-1"
                style={{ color: "var(--read-gold)" }}
              />
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
                {s.intro}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {s.pretestQuestions.map((q) => (
          <InlineQuestion
            key={q.id}
            question={q}
            label="Pretest"
            progress={progress}
            update={update}
          />
        ))}

        {s.body && (
          <div className="prose-chapter prose-chapter-dropcap">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
              {transformRecallChecks(s.body)}
            </ReactMarkdown>
          </div>
        )}

        {s.checkQuestions.length > 0 && (
          <div className="pt-2 space-y-5">
            <div className="flex items-center gap-3">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--read-gold)" }}
              >
                Recall Check
              </p>
              <span
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, var(--read-gold-strong), transparent)",
                }}
                aria-hidden
              />
            </div>
            {s.checkQuestions.map((q) => (
              <InlineQuestion
                key={q.id}
                question={q}
                label="Check your understanding"
                progress={progress}
                update={update}
              />
            ))}
          </div>
        )}

        {hydrated && (
          <SectionNotes
            sectionId={s.id}
            notes={progress.notes ?? {}}
            update={update}
          />
        )}

        {!read && hydrated && (
          <button
            onClick={() =>
              update((prev) => ({
                ...prev,
                sectionsRead: { ...prev.sectionsRead, [s.id]: true },
              }))
            }
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            style={{ backgroundColor: "var(--read-gold)", color: "var(--read-bg-inset)" }}
          >
            <Check className="w-3.5 h-3.5" />
            Mark section complete
          </button>
        )}

        {/* Once read, replace the dead-end button with a forward CTA so the
            student keeps moving through the chapter instead of navigating
            back to the table of contents by hand. */}
        {read && hydrated && continueTarget && (
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--read-success)" }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Section complete
            </span>
            <a
              href={`#${continueTarget.id}`}
              onClick={handleContinue}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              style={{ backgroundColor: "var(--read-gold)", color: "var(--read-bg-inset)" }}
            >
              Continue to {continueTarget.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

// ---------- Inline question (pretest or check-your-understanding) ----------

/**
 * Renders a question's shared passage / set / source text above its prompt.
 * RC questions (and MSR sets) ask about "the passage" — without this block the
 * question is unanswerable. Styled as a distinct inset panel.
 */
function PassageContext({ text }: { text: string }) {
  return (
    <div
      className="rounded-xl border px-4 py-3.5"
      style={{
        borderColor: "var(--read-border)",
        backgroundColor: "var(--read-bg-inset)",
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-2"
        style={{ color: "var(--read-text-faint)" }}
      >
        Passage
      </p>
      <div
        className="text-[14px] leading-relaxed space-y-3"
        style={{ color: "var(--read-text-body)" }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeCaretSup]}
          components={mdComponents}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  )
}

/** Grades a reader question. TPA is correct only when every column's row
 *  selection matches; single-select falls back to the picked index. Mirrors
 *  SessionClient's isAnswerCorrect so the two surfaces never disagree. */
function isReaderAnswerCorrect(
  q: ReaderQuestion,
  selected: number | null,
  twoPartSelections: (number | null)[] | undefined
): boolean {
  if (q.twoPartCorrectAnswers && twoPartSelections) {
    return q.twoPartCorrectAnswers.every((ans, i) => twoPartSelections[i] === ans)
  }
  return selected === q.correctAnswer
}

/** Two-Part Analysis answer grid — one selection per column. Reader-themed
 *  sibling of SessionClient's TwoPartGrid (CSS vars instead of fixed hex so
 *  it follows the reading-theme toggle). */
function ReaderTwoPartGrid({
  question: q,
  selections,
  submitted,
  onSelect,
}: {
  question: ReaderQuestion
  selections: (number | null)[]
  submitted: boolean
  onSelect: (colIdx: number, rowIdx: number) => void
}) {
  const cols = q.twoPartColumns ?? []
  const rows = q.options
  const correctAnswers = q.twoPartCorrectAnswers

  return (
    <div
      className="overflow-x-auto rounded-lg border"
      style={{ borderColor: "var(--read-border-strong)" }}
    >
      <table className="w-full border-collapse text-sm">
        <thead style={{ backgroundColor: "var(--read-bg-elevated)" }}>
          <tr>
            <th
              className="text-left py-3 px-4 border-b w-1/2"
              style={{ borderColor: "var(--read-border)" }}
            />
            {cols.map((col) => (
              <th
                key={col}
                className="py-3 px-4 text-center text-[11px] font-semibold uppercase tracking-wide border-b"
                style={{ color: "var(--read-gold)", borderColor: "var(--read-border)" }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b"
              style={{ borderColor: "var(--read-border)" }}
            >
              <td
                className="py-3 px-4 text-[13px]"
                style={{ color: "var(--read-text-body)" }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}
                  components={mdComponents}
                >
                  {row}
                </ReactMarkdown>
              </td>
              {cols.map((_, ci) => {
                const isSelected = selections[ci] === ri
                const isCorrectCell = correctAnswers?.[ci] === ri

                let borderColor = "var(--read-border-strong)"
                let backgroundColor = "transparent"
                if (submitted && isSelected && isCorrectCell) {
                  borderColor = "var(--read-success)"
                  backgroundColor = "var(--read-success-soft)"
                } else if (submitted && isSelected) {
                  borderColor = "var(--read-error)"
                  backgroundColor = "var(--read-error-soft)"
                } else if (submitted && isCorrectCell) {
                  borderColor = "var(--read-success)"
                } else if (isSelected) {
                  borderColor = "var(--read-gold-strong)"
                  backgroundColor = "var(--read-gold-soft)"
                }

                return (
                  <td key={ci} className="py-3 px-4 text-center">
                    <button
                      type="button"
                      onClick={() => onSelect(ci, ri)}
                      disabled={submitted}
                      className="w-6 h-6 rounded-full border-2 mx-auto flex items-center justify-center transition-colors disabled:cursor-default"
                      style={{ borderColor, backgroundColor }}
                    >
                      {isSelected && (
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor: submitted
                              ? isCorrectCell
                                ? "var(--read-success)"
                                : "var(--read-error)"
                              : "var(--read-gold)",
                          }}
                        />
                      )}
                      {submitted && isCorrectCell && !isSelected && (
                        <Check
                          className="w-3 h-3"
                          style={{ color: "var(--read-success)" }}
                        />
                      )}
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function InlineQuestion({
  question: q,
  label,
  progress,
  update,
}: {
  question: ReaderQuestion
  label: string
  progress: ChapterProgress
  update: (u: (prev: ChapterProgress) => ChapterProgress) => void
}) {
  // Memoized so `state`'s identity is stable across renders when the
  // underlying progress entry hasn't changed. Without this, every
  // render produced a new object literal, defeating the useCallback on
  // `patch` (lint flagged it as react-hooks/exhaustive-deps).
  const state: QuestionProgress = useMemo(
    () =>
      progress.questions[q.id] ?? {
        selected: null,
        submitted: false,
        confidence: null,
        selfExplanation: "",
      },
    [progress.questions, q.id]
  )

  const patch = useCallback(
    (fields: Partial<QuestionProgress>) => {
      update((prev) => ({
        ...prev,
        questions: {
          ...prev.questions,
          [q.id]: { ...state, ...fields },
        },
      }))
    },
    [q.id, state, update]
  )

  const isTwoPart = !!q.twoPartColumns?.length
  // Normalize to one slot per column so a partially-answered TPA (or a stale
  // save with a different column count) renders without index drift.
  const twoPartSelections = isTwoPart
    ? q.twoPartColumns!.map((_, i) => state.twoPartSelections?.[i] ?? null)
    : undefined
  const hasAnswer = isTwoPart
    ? twoPartSelections!.every((s) => s !== null)
    : state.selected !== null
  const canSubmit = hasAnswer && !state.submitted && state.confidence !== null
  const isCorrect = isReaderAnswerCorrect(q, state.selected, twoPartSelections)

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        borderColor: state.submitted
          ? isCorrect
            ? "var(--read-success-soft)"
            : "var(--read-error-soft)"
          : "var(--read-border-strong)",
        backgroundColor: "var(--read-bg-inset)",
      }}
    >
      <div
        className="px-5 py-4 border-b flex items-center gap-2.5"
        style={{ borderColor: "var(--read-border)" }}
      >
        <BrainCircuit className="w-3.5 h-3.5" style={{ color: "var(--read-gold)" }} />
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "var(--read-gold)" }}
        >
          {label}
        </p>
        <span
          className="text-[10px] ml-auto tracking-wide"
          style={{ color: "var(--read-text-faint)" }}
        >
          {q.subtopic} · {q.difficulty}
        </span>
      </div>

      <div className="px-5 py-5 space-y-4">
        {q.context && <PassageContext text={q.context} />}
        {/* Graphics Interpretation: the chart the prompt refers to. Without
            this the reader showed "the graph shows..." with no graph. */}
        {q.chartSpec && <QuestionChart spec={q.chartSpec} />}
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
            {q.prompt}
          </ReactMarkdown>
        </div>

        {/* Answer input — TPA selection grid, or the single-select options list */}
        {isTwoPart ? (
          <ReaderTwoPartGrid
            question={q}
            selections={twoPartSelections!}
            submitted={state.submitted}
            onSelect={(ci, ri) => {
              if (state.submitted) return
              const next = [...twoPartSelections!]
              next[ci] = ri
              patch({ twoPartSelections: next })
            }}
          />
        ) : (
        <div className="space-y-2">
          {q.options.map((opt, idx) => {
            const isChosen = state.selected === idx
            const isCorrectOpt = q.correctAnswer === idx
            const showResult = state.submitted
            const border = showResult
              ? isCorrectOpt
                ? "var(--read-success)"
                : isChosen
                ? "var(--read-error)"
                : "var(--read-border)"
              : isChosen
              ? "var(--read-gold-strong)"
              : "var(--read-border-strong)"
            const bg = showResult
              ? isCorrectOpt
                ? "var(--read-success-soft)"
                : isChosen
                ? "var(--read-error-soft)"
                : "var(--read-bg-elevated)"
              : isChosen
              ? "var(--read-gold-soft)"
              : "var(--read-bg-elevated)"
            return (
              <button
                key={idx}
                type="button"
                onClick={() => !state.submitted && patch({ selected: idx })}
                disabled={state.submitted}
                className="w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-colors disabled:cursor-default"
                style={{ borderColor: border, backgroundColor: bg }}
              >
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded text-xs font-semibold flex-shrink-0"
                  style={{
                    backgroundColor: showResult
                      ? isCorrectOpt
                        ? "var(--read-success)"
                        : isChosen
                        ? "var(--read-error)"
                        : "var(--read-border)"
                      : isChosen
                      ? "var(--read-gold)"
                      : "var(--read-border)",
                    color:
                      showResult && (isCorrectOpt || isChosen)
                        ? "var(--read-bg-inset)"
                        : isChosen
                        ? "var(--read-bg-inset)"
                        : "var(--read-text-muted)",
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <div className="flex-1 text-[14px]" style={{ color: "var(--read-text-body)" }}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}
                    components={mdComponents}
                  >
                    {opt}
                  </ReactMarkdown>
                </div>
              </button>
            )
          })}
        </div>
        )}

        {/* Confidence + self-explanation (pre-submit only) */}
        {!state.submitted && hasAnswer && (
          <div
            className="pt-4 space-y-4 border-t"
            style={{ borderColor: "var(--read-border)" }}
          >
            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2.5"
                style={{ color: "var(--read-gold)" }}
              >
                How confident are you?
              </p>
              <div className="flex gap-2">
                {(["low", "med", "high"] as const).map((c) => {
                  const active = state.confidence === c
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => patch({ confidence: c })}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-medium tracking-tight border transition-colors"
                      style={{
                        borderColor: active
                          ? "var(--read-gold-strong)"
                          : "var(--read-border-strong)",
                        color: active
                          ? "var(--read-gold)"
                          : "var(--read-text-muted)",
                        backgroundColor: active
                          ? "var(--read-gold-soft)"
                          : "transparent",
                      }}
                    >
                      {c === "low" ? "Low" : c === "med" ? "Medium" : "High"}
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2.5"
                style={{ color: "var(--read-gold)" }}
              >
                In one sentence, why?{" "}
                <span
                  className="font-display-italic normal-case tracking-normal"
                  style={{ color: "var(--read-text-faint)" }}
                >
                  (optional — but saying it cements it)
                </span>
              </p>
              <textarea
                value={state.selfExplanation}
                onChange={(e) => patch({ selfExplanation: e.target.value })}
                rows={2}
                placeholder="e.g., Order matters here because president ≠ VP, so I used P(n, k)"
                className="w-full border rounded-xl p-3 text-[13px] leading-[1.6] focus:outline-none focus:ring-2 resize-none transition-all"
                style={{
                  backgroundColor: "var(--read-bg-elevated)",
                  borderColor: "var(--read-border-strong)",
                  color: "var(--read-text-body)",
                }}
              />
            </div>
            <button
              onClick={() => patch({ submitted: true })}
              disabled={!canSubmit}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight hover:opacity-90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: "var(--read-gold)", color: "var(--read-bg-inset)" }}
            >
              Submit
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Explanation (post-submit) */}
        {state.submitted && (
          <PostSubmitReveal question={q} state={state} />
        )}
      </div>
    </div>
  )
}

function PostSubmitReveal({
  question,
  state,
}: {
  question: ReaderQuestion
  state: QuestionProgress
}) {
  const isCorrect = isReaderAnswerCorrect(
    question,
    state.selected,
    state.twoPartSelections
  )
  const [showExplanation, setShowExplanation] = useState(!isCorrect)

  // Calibration hint — compare confidence vs correctness.
  const calibrationLabel =
    state.confidence === "high" && !isCorrect
      ? "Confidence was High but missed — slow down on this pattern next time."
      : state.confidence === "low" && isCorrect
      ? "Confidence was Low but you nailed it — don't second-guess; your instinct was right."
      : state.confidence === "med" && !isCorrect
      ? "Medium confidence, wrong answer — this is the sweet spot for error-log notes."
      : null

  return (
    <div
      className="pt-4 border-t space-y-3"
      style={{ borderColor: "var(--read-border)" }}
    >
      <div
        className="flex items-start gap-3 p-3 rounded-lg text-[13px]"
        style={{
          backgroundColor: isCorrect
            ? "var(--read-success-soft)"
            : "var(--read-error-soft)",
          color: isCorrect ? "var(--read-success)" : "var(--read-error)",
        }}
      >
        {isCorrect ? (
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
        ) : (
          <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <p className="font-semibold">
            {isCorrect
              ? "Correct."
              : question.correctAnswerLetter
              ? `Incorrect. The answer is ${question.correctAnswerLetter}.`
              : "Incorrect. The correct selections are marked in the grid above."}
          </p>
          {calibrationLabel && (
            <p className="text-[12px] mt-1 opacity-90">{calibrationLabel}</p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowExplanation((s) => !s)}
        className="inline-flex items-center gap-1.5 text-xs transition-colors"
        style={{ color: "var(--read-text-muted)" }}
      >
        <Lightbulb className="w-3.5 h-3.5" />
        {showExplanation ? "Hide" : "Show"} explanation
        <ChevronDown
          className={cn(
            "w-3 h-3 transition-transform",
            showExplanation && "rotate-180"
          )}
        />
      </button>

      {showExplanation && (
        <div
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: "var(--read-bg-elevated)",
            borderColor: "var(--read-border)",
          }}
        >
          {!isCorrect && state.selected !== null && (
            <div
              className="flex items-center gap-2.5 text-[11px] mb-4 pb-3 border-b"
              style={{ borderColor: "var(--read-border)" }}
            >
              <span style={{ color: "var(--read-error)" }}>
                You chose {String.fromCharCode(65 + state.selected)}
              </span>
              <span style={{ color: "var(--read-text-faint)" }}>&middot;</span>
              <span style={{ color: "var(--read-success)" }}>
                Correct: {question.correctAnswerLetter}
              </span>
            </div>
          )}
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
            {question.explanation}
          </ReactMarkdown>
          {state.selfExplanation.trim() && (
            <div
              className="mt-4 pt-4 border-t"
              style={{ borderColor: "var(--read-border)" }}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
                style={{ color: "var(--read-text-faint)" }}
              >
                Your pre-submit plan
              </p>
              <p
                className="text-[13px] italic"
                style={{ color: "var(--read-text-body)" }}
              >
                &ldquo;{state.selfExplanation.trim()}&rdquo;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ---------- End-of-chapter problem sets ----------

function ProblemSetsBlock({
  slug,
  sets,
  targetScore,
  progress,
  update,
}: {
  slug: string
  sets: ReaderProblemSet[]
  targetScore: number | null
  progress: ChapterProgress
  update: (u: (prev: ChapterProgress) => ChapterProgress) => void
}) {
  const readySets = useMemo(
    () => sets.filter((s) => s.questions.length > 0),
    [sets]
  )
  if (readySets.length === 0) return null

  return (
    <section
      className="rounded-2xl border"
      style={{
        backgroundColor: "var(--read-bg-elevated)",
        borderColor: "var(--read-border-strong)",
      }}
    >
      <div
        className="px-6 sm:px-8 py-6 border-b"
        style={{ borderColor: "var(--read-border)" }}
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "var(--read-gold)" }}
        >
          End of Chapter
        </p>
        <h2
          className="font-display text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.01em] mt-1.5 leading-[1.1]"
          style={{ color: "var(--read-text)" }}
        >
          Graded problem{" "}
          <span className="font-display-italic" style={{ color: "var(--read-gold)" }}>
            sets.
          </span>
        </h2>
        <p
          className="text-[14px] mt-3 leading-[1.75]"
          style={{ color: "var(--read-text-body)" }}
        >
          Your accuracy targets are calibrated to your goal score
          {targetScore !== null ? ` of ${targetScore}` : " (set one on the dashboard to personalize)"}.
        </p>
      </div>

      <div className="px-6 sm:px-8 py-6 grid sm:grid-cols-3 gap-4">
        {readySets.map((set) => (
          <ProblemSetCard
            key={set.difficulty}
            slug={slug}
            set={set}
            allSets={readySets}
            targetScore={targetScore}
            progress={progress}
            update={update}
          />
        ))}
      </div>

      {/* Interleaved mixed review — the next-step drill once the student
          has run at least one problem set. Pulls from current chapter +
          past completed chapters + recent misses + review queue. */}
      <div
        className="px-6 sm:px-8 py-6 border-t"
        style={{ borderColor: "var(--read-border)" }}
      >
        <MixedReviewCard
          chapterSlug={slug}
          unlocked={hasAnyProblemSetResult(progress)}
          variant="chapter"
        />
      </div>
    </section>
  )
}

function hasAnyProblemSetResult(progress: ChapterProgress): boolean {
  const r = progress.problemSetResults
  if (!r) return false
  return (["easy", "medium", "hard"] as const).some((d) => {
    const entry = r[d]
    return !!entry && entry.total > 0
  })
}

function countAttemptedProblemSets(progress: ChapterProgress): number {
  const r = progress.problemSetResults
  if (!r) return 0
  return (["easy", "medium", "hard"] as const).reduce((acc, d) => {
    const entry = r[d]
    return acc + (entry && entry.total > 0 ? 1 : 0)
  }, 0)
}

function ProblemSetCard({
  slug,
  set,
  allSets,
  targetScore,
  progress,
  update,
}: {
  slug: string
  set: ReaderProblemSet
  allSets: ReaderProblemSet[]
  targetScore: number | null
  progress: ChapterProgress
  update: (u: (prev: ChapterProgress) => ChapterProgress) => void
}) {
  const [running, setRunning] = useState(false)
  const result = progress.problemSetResults[set.difficulty]
  const targetPct = resolveAccuracyTarget(set.targetAccuracyByScore, targetScore)

  const difficultyOrder = ["easy", "medium", "hard"] as const
  const currentIdx = difficultyOrder.indexOf(set.difficulty)
  const nextDifficulty =
    difficultyOrder.slice(currentIdx + 1).find((d) => allSets.some((s) => s.difficulty === d)) ??
    null
  const achievedPct =
    result && result.total > 0
      ? Math.round((result.correct / result.total) * 100)
      : null
  const passedTarget = achievedPct !== null && achievedPct >= targetPct

  const colorVar =
    passedTarget === true
      ? "var(--read-success)"
      : achievedPct !== null
      ? "var(--read-error)"
      : "var(--read-gold)"

  return (
    <>
      <button
        type="button"
        onClick={() => setRunning(true)}
        className="group p-5 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-0.5"
        style={{
          borderColor: "var(--read-border-strong)",
          backgroundColor: "var(--read-bg-inset)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: colorVar }}
          >
            {set.difficulty}
          </p>
          {achievedPct !== null && (
            <span
              className="text-[10px] px-2 py-0.5 rounded font-semibold uppercase tracking-[0.18em]"
              style={{
                backgroundColor: passedTarget
                  ? "var(--read-success-soft)"
                  : "var(--read-error-soft)",
                color: passedTarget ? "var(--read-success)" : "var(--read-error)",
              }}
            >
              {passedTarget ? "Passed" : "Retake"}
            </span>
          )}
        </div>
        <p
          className="font-display text-base font-semibold tracking-tight"
          style={{ color: "var(--read-text)" }}
        >
          {set.questions.length} question{set.questions.length === 1 ? "" : "s"}
        </p>
        <div
          className="mt-4 h-1.5 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--read-border)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${achievedPct ?? 0}%`,
              backgroundColor: colorVar,
            }}
          />
        </div>
        <div
          className="mt-2.5 flex items-center justify-between text-[11px] tabular-nums"
          style={{ color: "var(--read-text-faint)" }}
        >
          <span>
            {achievedPct === null
              ? `Goal: ${targetPct}%`
              : `You: ${achievedPct}% · Goal: ${targetPct}%`}
          </span>
        </div>
      </button>

      {running && (
        <ProblemSetRunner
          slug={slug}
          set={set}
          targetPct={targetPct}
          nextDifficulty={nextDifficulty}
          onClose={() => setRunning(false)}
          onFinish={(correct, total) =>
            update((prev) => ({
              ...prev,
              problemSetResults: {
                ...prev.problemSetResults,
                [set.difficulty]: { correct, total },
              },
            }))
          }
        />
      )}
    </>
  )
}

function ProblemSetRunner({
  set,
  targetPct,
  nextDifficulty,
  onClose,
  onFinish,
}: {
  slug: string
  set: ReaderProblemSet
  targetPct: number
  nextDifficulty: "medium" | "hard" | null
  onClose: () => void
  onFinish: (correct: number, total: number) => void
}) {
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  // Two-Part Analysis: one row selection per column. Reset to [] on advance;
  // the normalization below pads it back out to one null per column.
  const [twoPartSelected, setTwoPartSelected] = useState<(number | null)[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [done, setDone] = useState(false)
  const current = set.questions[idx]
  const isTwoPart = !!current.twoPartColumns?.length
  const twoSel = isTwoPart
    ? current.twoPartColumns!.map((_, i) => twoPartSelected[i] ?? null)
    : undefined
  const hasAnswer = isTwoPart
    ? twoSel!.every((s) => s !== null)
    : selected !== null

  function submit() {
    if (!hasAnswer) return
    setSubmitted(true)
  }
  function next() {
    const isCorrect = isReaderAnswerCorrect(current, selected, twoSel)
    const nextAnswers = [...answers, isCorrect]
    setAnswers(nextAnswers)
    if (idx + 1 >= set.questions.length) {
      const correctCount = nextAnswers.filter(Boolean).length
      onFinish(correctCount, set.questions.length)
      setDone(true)
      return
    }
    setIdx(idx + 1)
    setSelected(null)
    setTwoPartSelected([])
    setSubmitted(false)
  }
  function reset() {
    setIdx(0)
    setSelected(null)
    setSubmitted(false)
    setAnswers([])
    setDone(false)
  }

  // Modal-ish overlay. No portal — just a fixed position card.
  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl my-8 mx-4 rounded-2xl border"
        style={{
          backgroundColor: "var(--read-bg-elevated)",
          borderColor: "var(--read-border-strong)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "var(--read-border)" }}
        >
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--read-gold)" }}
            >
              {set.difficulty} set
            </p>
            <p
              className="font-display text-base font-semibold tracking-tight mt-1 tabular-nums"
              style={{ color: "var(--read-text)" }}
            >
              {done
                ? "Set complete"
                : `Question ${idx + 1} of ${set.questions.length}`}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded transition-colors"
            style={{ color: "var(--read-text-faint)" }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {done ? (
          <RunnerResults
            answers={answers}
            total={set.questions.length}
            difficulty={set.difficulty}
            nextDifficulty={nextDifficulty}
            targetPct={targetPct}
            onRetake={reset}
            onClose={onClose}
          />
        ) : (
          <div className="px-6 py-6 space-y-4">
            {current.context && <PassageContext text={current.context} />}
            {current.chartSpec && <QuestionChart spec={current.chartSpec} />}
            <div>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]} components={mdComponents}>
                {current.prompt}
              </ReactMarkdown>
            </div>
            {isTwoPart ? (
              <ReaderTwoPartGrid
                question={current}
                selections={twoSel!}
                submitted={submitted}
                onSelect={(ci, ri) => {
                  if (submitted) return
                  const next = [...twoSel!]
                  next[ci] = ri
                  setTwoPartSelected(next)
                }}
              />
            ) : (
            <div className="space-y-2">
              {current.options.map((opt, i) => {
                const chosen = selected === i
                const isCorrect = current.correctAnswer === i
                const border = submitted
                  ? isCorrect
                    ? "var(--read-success)"
                    : chosen
                    ? "var(--read-error)"
                    : "var(--read-border)"
                  : chosen
                  ? "var(--read-gold-strong)"
                  : "var(--read-border-strong)"
                const bg = submitted
                  ? isCorrect
                    ? "var(--read-success-soft)"
                    : chosen
                    ? "var(--read-error-soft)"
                    : "var(--read-bg-inset)"
                  : chosen
                  ? "var(--read-gold-soft)"
                  : "var(--read-bg-inset)"
                return (
                  <button
                    key={i}
                    onClick={() => !submitted && setSelected(i)}
                    disabled={submitted}
                    className="w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-colors disabled:cursor-default"
                    style={{ borderColor: border, backgroundColor: bg }}
                  >
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded text-xs font-semibold flex-shrink-0"
                      style={{
                        backgroundColor: submitted
                          ? isCorrect
                            ? "var(--read-success)"
                            : chosen
                            ? "var(--read-error)"
                            : "var(--read-border)"
                          : chosen
                          ? "var(--read-gold)"
                          : "var(--read-border)",
                        color:
                          submitted && (isCorrect || chosen)
                            ? "var(--read-bg-inset)"
                            : chosen
                            ? "var(--read-bg-inset)"
                            : "var(--read-text-muted)",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div className="flex-1 text-[14px]" style={{ color: "var(--read-text-body)" }}>
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}
                        components={mdComponents}
                      >
                        {opt}
                      </ReactMarkdown>
                    </div>
                  </button>
                )
              })}
            </div>
            )}

            {submitted && (
              <div
                className="p-3 rounded-lg border"
                style={{
                  backgroundColor: "var(--read-bg-inset)",
                  borderColor: "var(--read-border)",
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}
                  components={mdComponents}
                >
                  {current.explanation}
                </ReactMarkdown>
              </div>
            )}

            <div className="flex justify-end gap-2">
              {!submitted ? (
                <button
                  onClick={submit}
                  disabled={!hasAnswer}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight hover:opacity-90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ backgroundColor: "var(--read-gold)", color: "var(--read-bg-inset)" }}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={next}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                  style={{ backgroundColor: "var(--read-gold)", color: "var(--read-bg-inset)" }}
                >
                  {idx + 1 >= set.questions.length ? "Finish" : "Next"}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function RunnerResults({
  answers,
  total,
  difficulty,
  nextDifficulty,
  targetPct,
  onRetake,
  onClose,
}: {
  answers: boolean[]
  total: number
  difficulty: "easy" | "medium" | "hard"
  nextDifficulty: "medium" | "hard" | null
  targetPct: number
  onRetake: () => void
  onClose: () => void
}) {
  const correct = answers.filter(Boolean).length
  const pct = Math.round((correct / total) * 100)
  const passed = pct >= targetPct

  const performanceLabel =
    pct >= 90
      ? "Excellent."
      : passed
      ? "Target met."
      : pct >= 60
      ? "Getting there."
      : "Needs more work."

  const nextStepCopy = passed
    ? nextDifficulty
      ? `You're ready for the ${nextDifficulty} set. Close this and select it below.`
      : difficulty === "hard"
      ? "All sets complete. Move on to mixed practice or the next chapter."
      : "Set complete. Move on to the next difficulty when you're ready."
    : pct >= 60
    ? "Most of the material is there. Review any sections that felt uncertain, then retake."
    : "Revisit the chapter before retaking — the foundations need reinforcement first."

  return (
    <div className="px-6 py-8 space-y-6">
      {/* Score block */}
      <div className="text-center space-y-2">
        <div
          className="mx-auto w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: passed ? "var(--read-success-soft)" : "var(--read-error-soft)",
          }}
        >
          {passed ? (
            <Award className="w-7 h-7" style={{ color: "var(--read-success)" }} />
          ) : (
            <BrainCircuit className="w-7 h-7" style={{ color: "var(--read-error)" }} />
          )}
        </div>
        <p
          className="font-display text-5xl font-semibold tabular-nums tracking-tight"
          style={{ color: "var(--read-text)" }}
        >
          {pct}%
        </p>
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: passed ? "var(--read-success)" : "var(--read-error)" }}
        >
          {performanceLabel}
        </p>
        <p className="text-[12px] tabular-nums" style={{ color: "var(--read-text-muted)" }}>
          {correct} of {total} correct &middot; goal {targetPct}%
        </p>
      </div>

      {/* Per-question dots — quick visual scan of answer pattern */}
      {answers.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1.5">
          {answers.map((isCorrect, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              title={`Q${i + 1}: ${isCorrect ? "correct" : "incorrect"}`}
              style={{
                backgroundColor: isCorrect ? "var(--read-success)" : "var(--read-error)",
                opacity: isCorrect ? 0.75 : 1,
              }}
            />
          ))}
        </div>
      )}

      {/* Next step */}
      <p
        className="text-[13px] leading-relaxed text-center max-w-xs mx-auto"
        style={{ color: "var(--read-text-body)" }}
      >
        {nextStepCopy}
      </p>

      {/* Actions */}
      <div className="flex justify-center gap-2.5">
        {!passed && (
          <button
            onClick={onRetake}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            style={{ backgroundColor: "var(--read-gold)", color: "var(--read-bg-inset)" }}
          >
            Retake
          </button>
        )}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-tight hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          style={
            passed
              ? { backgroundColor: "var(--read-gold)", color: "var(--read-bg-inset)" }
              : {
                  border: "1px solid var(--read-border-strong)",
                  color: "var(--read-text)",
                  backgroundColor: "transparent",
                }
          }
        >
          {passed && nextDifficulty ? `Try ${nextDifficulty} set` : "Close"}
        </button>
      </div>
    </div>
  )
}
