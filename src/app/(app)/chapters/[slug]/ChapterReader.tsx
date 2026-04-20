"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  FlaskConical,
  Lightbulb,
  Sparkles,
  X,
} from "lucide-react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"
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

/** localStorage key for this chapter's progress. Client-only. */
function storageKey(slug: string) {
  return `chapter-progress:${slug}`
}

/** Safe-read from localStorage. Returns EMPTY_PROGRESS during SSR or on bad JSON. */
function loadProgress(slug: string): ChapterProgress {
  if (typeof window === "undefined") return EMPTY_PROGRESS
  try {
    const raw = window.localStorage.getItem(storageKey(slug))
    if (!raw) return EMPTY_PROGRESS
    const parsed = JSON.parse(raw) as ChapterProgress
    // Defensive: backfill missing keys if the shape evolves.
    return {
      sectionsRead: parsed.sectionsRead ?? {},
      questions: parsed.questions ?? {},
      problemSetResults: parsed.problemSetResults ?? EMPTY_PROGRESS.problemSetResults,
    }
  } catch {
    return EMPTY_PROGRESS
  }
}

function saveProgress(slug: string, progress: ChapterProgress) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(storageKey(slug), JSON.stringify(progress))
  } catch {
    // Quota exceeded or private mode — silently ignore; progress just doesn't persist.
  }
}

// ----- Shared markdown styling for reading bodies -----
const mdComponents: Components = {
  p: (p) => <p {...p} className="text-[15px] leading-relaxed text-[#D8D8D8] my-4 first:mt-0 last:mb-0" />,
  h2: (p) => <h2 {...p} className="text-xl font-bold text-[#F0F0F0] mt-10 mb-4 first:mt-0" />,
  h3: (p) => <h3 {...p} className="text-base font-semibold text-[#F0F0F0] mt-6 mb-2" />,
  ul: (p) => <ul {...p} className="list-disc pl-6 my-4 space-y-1.5 text-[15px] text-[#D8D8D8]" />,
  ol: (p) => <ol {...p} className="list-decimal pl-6 my-4 space-y-1.5 text-[15px] text-[#D8D8D8]" />,
  li: (p) => <li {...p} className="leading-relaxed marker:text-[#555555]" />,
  strong: (p) => <strong {...p} className="font-semibold text-[#F0F0F0]" />,
  em: (p) => <em {...p} className="italic text-[#E8C97A]" />,
  blockquote: (p) => (
    <blockquote
      {...p}
      className="my-6 border-l-2 pl-4 italic text-[#A8A8A8]"
      style={{ borderColor: "#C9A84C" }}
    />
  ),
  code: ({ className, ...p }) => {
    const isBlock = className?.startsWith("language-")
    if (isBlock) {
      return <code {...p} className="font-mono text-xs text-[#F0F0F0] whitespace-pre-wrap" />
    }
    return (
      <code
        {...p}
        className="font-mono text-[13px] bg-white/[0.04] px-1.5 py-0.5 rounded"
        style={{ color: "#C9A84C" }}
      />
    )
  },
  pre: (p) => (
    <pre
      {...p}
      className="my-5 p-4 rounded-lg bg-[#0A0A0A] border border-white/[0.06] overflow-x-auto"
    />
  ),
  table: (p) => (
    <div className="my-5 overflow-x-auto rounded-lg border border-white/[0.08]">
      <table {...p} className="w-full border-collapse text-sm" />
    </div>
  ),
  thead: (p) => <thead {...p} className="bg-[#0F0F0F]" />,
  th: (p) => (
    <th
      {...p}
      className="text-left py-2 px-3 text-xs font-semibold uppercase tracking-wide text-[#888888] border-b border-white/[0.08]"
    />
  ),
  td: (p) => (
    <td
      {...p}
      className="py-2 px-3 text-[14px] text-[#D8D8D8] border-b border-white/[0.04]"
    />
  ),
  hr: () => <hr className="my-8 border-0 border-t border-white/[0.08]" />,
}

export default function ChapterReader({
  slug,
  title,
  section,
  estimatedMinutes,
  summary,
  sections,
  problemSets,
  targetScore,
}: {
  slug: string
  title: string
  section: Section
  estimatedMinutes: number
  summary: string | null
  sections: ReaderSection[]
  problemSets: ReaderProblemSet[]
  targetScore: number | null
}) {
  // Hydrate progress from localStorage after mount. SSR renders an empty
  // state (every question pristine, no sections marked read), then the
  // client useEffect fills it in. Avoids a hydration mismatch.
  const [progress, setProgress] = useState<ChapterProgress>(EMPTY_PROGRESS)
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setProgress(loadProgress(slug))
    setHydrated(true)
  }, [slug])

  const update = useCallback(
    (updater: (prev: ChapterProgress) => ChapterProgress) => {
      setProgress((prev) => {
        const next = updater(prev)
        saveProgress(slug, next)
        return next
      })
    },
    [slug]
  )

  const totalSections = sections.length
  const completedSections = sections.filter(
    (s) => progress.sectionsRead[s.id]
  ).length
  const percentComplete =
    totalSections > 0
      ? Math.round((completedSections / totalSections) * 100)
      : 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide"
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              color: "#C9A84C",
            }}
          >
            {section}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#555555]">
            <Clock className="w-3 h-3" />
            {estimatedMinutes} min
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#F0F0F0]">
          {title}
        </h1>
        {summary && (
          <p className="text-[15px] text-[#888888] mt-3 leading-relaxed">
            {summary}
          </p>
        )}
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-[#555555] mb-2">
          <span>
            {completedSections} of {totalSections} sections complete
          </span>
          <span>{percentComplete}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percentComplete}%`,
              backgroundColor: "#C9A84C",
            }}
          />
        </div>
      </div>

      {/* Sections render sequentially as cards. We always show all of them
          (no gated unlock) so a returning user can jump around; the progress
          bar above indicates which have been marked read. */}
      {sections.map((s) => (
        <SectionCard
          key={s.id}
          section={s}
          hydrated={hydrated}
          progress={progress}
          update={update}
        />
      ))}

      {/* End-of-chapter problem sets */}
      {problemSets.length > 0 && (
        <ProblemSetsBlock
          slug={slug}
          sets={problemSets}
          targetScore={targetScore}
          progress={progress}
          update={update}
        />
      )}
    </div>
  )
}

// ---------- Section card ----------

function SectionCard({
  section: s,
  hydrated,
  progress,
  update,
}: {
  section: ReaderSection
  hydrated: boolean
  progress: ChapterProgress
  update: (u: (prev: ChapterProgress) => ChapterProgress) => void
}) {
  const read = !!progress.sectionsRead[s.id]

  const icon =
    s.type === "pretest" ? (
      <FlaskConical className="w-5 h-5" style={{ color: "#C9A84C" }} />
    ) : s.type === "summary" ? (
      <Award className="w-5 h-5" style={{ color: "#C9A84C" }} />
    ) : (
      <BookOpen className="w-5 h-5" style={{ color: "#C9A84C" }} />
    )

  return (
    <article
      className={cn(
        "rounded-xl border bg-[#111111] transition-colors",
        read ? "border-white/[0.08]" : "border-white/[0.12]"
      )}
    >
      <header className="flex items-start gap-3 px-6 py-5 border-b border-white/[0.06]">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#555555]">
            {s.type === "pretest"
              ? "Pretest"
              : s.type === "summary"
              ? "Summary"
              : "Reading"}
          </p>
          <h2 className="text-lg font-semibold text-[#F0F0F0] mt-0.5">
            {s.title}
          </h2>
        </div>
        {hydrated && read && (
          <span
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: "#3ECF8E" }}
          >
            <CheckCircle2 className="w-3 h-3" />
            Read
          </span>
        )}
      </header>

      <div className="px-6 py-6 space-y-5">
        {s.intro && (
          <div
            className="p-4 rounded-lg border text-[14px] leading-relaxed"
            style={{
              borderColor: "rgba(201,168,76,0.2)",
              backgroundColor: "rgba(201,168,76,0.04)",
              color: "#D8D8D8",
            }}
          >
            <div className="flex items-start gap-2">
              <Sparkles
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: "#C9A84C" }}
              />
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
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
          <div className="prose-chapter">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {s.body}
            </ReactMarkdown>
          </div>
        )}

        {s.checkQuestions.map((q) => (
          <InlineQuestion
            key={q.id}
            question={q}
            label="Check your understanding"
            progress={progress}
            update={update}
          />
        ))}

        {!read && hydrated && (
          <button
            onClick={() =>
              update((prev) => ({
                ...prev,
                sectionsRead: { ...prev.sectionsRead, [s.id]: true },
              }))
            }
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#0A0A0A] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#C9A84C" }}
          >
            <Check className="w-3.5 h-3.5" />
            Mark section complete
          </button>
        )}
      </div>
    </article>
  )
}

// ---------- Inline question (pretest or check-your-understanding) ----------

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
  const state: QuestionProgress = progress.questions[q.id] ?? {
    selected: null,
    submitted: false,
    confidence: null,
    selfExplanation: "",
  }

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

  const canSubmit =
    state.selected !== null && !state.submitted && state.confidence !== null
  const isCorrect = state.selected === q.correctAnswer

  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{
        borderColor: state.submitted
          ? isCorrect
            ? "rgba(62,207,142,0.25)"
            : "rgba(255,68,68,0.25)"
          : "rgba(255,255,255,0.08)",
        backgroundColor: "#0F0F0F",
      }}
    >
      <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-2">
        <BrainCircuit className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#888888]">
          {label}
        </p>
        <span className="text-[10px] text-[#555555] ml-auto">
          {q.subtopic} · {q.difficulty}
        </span>
      </div>

      <div className="px-5 py-5 space-y-4">
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {q.prompt}
          </ReactMarkdown>
        </div>

        {/* Options */}
        <div className="space-y-2">
          {q.options.map((opt, idx) => {
            const isChosen = state.selected === idx
            const isCorrectOpt = q.correctAnswer === idx
            const showResult = state.submitted
            const border = showResult
              ? isCorrectOpt
                ? "rgba(62,207,142,0.5)"
                : isChosen
                ? "rgba(255,68,68,0.5)"
                : "rgba(255,255,255,0.06)"
              : isChosen
              ? "rgba(201,168,76,0.5)"
              : "rgba(255,255,255,0.08)"
            const bg = showResult
              ? isCorrectOpt
                ? "rgba(62,207,142,0.05)"
                : isChosen
                ? "rgba(255,68,68,0.05)"
                : "#0A0A0A"
              : isChosen
              ? "rgba(201,168,76,0.06)"
              : "#0A0A0A"
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
                        ? "#3ECF8E"
                        : isChosen
                        ? "#FF4444"
                        : "rgba(255,255,255,0.04)"
                      : isChosen
                      ? "#C9A84C"
                      : "rgba(255,255,255,0.04)",
                    color:
                      showResult && (isCorrectOpt || isChosen)
                        ? "#0A0A0A"
                        : isChosen
                        ? "#0A0A0A"
                        : "#888888",
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <div className="flex-1 text-[14px] text-[#D8D8D8]">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={mdComponents}
                  >
                    {opt}
                  </ReactMarkdown>
                </div>
              </button>
            )
          })}
        </div>

        {/* Confidence + self-explanation (pre-submit only) */}
        {!state.submitted && state.selected !== null && (
          <div className="pt-2 space-y-3 border-t border-white/[0.06]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#888888] mb-2">
                How confident are you?
              </p>
              <div className="flex gap-2">
                {(["low", "med", "high"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => patch({ confidence: c })}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors",
                      state.confidence === c
                        ? "border-[#C9A84C]/40 text-[#C9A84C]"
                        : "border-white/[0.08] text-[#888888] hover:text-[#F0F0F0]"
                    )}
                  >
                    {c === "low" ? "Low" : c === "med" ? "Medium" : "High"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#888888] mb-2">
                In one sentence, why? <span className="text-[#555555] normal-case tracking-normal italic">(optional — but saying it cements it)</span>
              </p>
              <textarea
                value={state.selfExplanation}
                onChange={(e) => patch({ selfExplanation: e.target.value })}
                rows={2}
                placeholder="e.g., Order matters here because president ≠ VP, so I used P(n, k)"
                className="w-full bg-[#0A0A0A] border border-white/[0.08] rounded-lg p-2.5 text-[13px] text-[#D8D8D8] placeholder:text-[#444444] focus:outline-none focus:border-[#C9A84C]/40 resize-none"
              />
            </div>
            <button
              onClick={() => patch({ submitted: true })}
              disabled={!canSubmit}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#0A0A0A] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#C9A84C" }}
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
  const isCorrect = state.selected === question.correctAnswer
  const [showExplanation, setShowExplanation] = useState(false)

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
    <div className="pt-4 border-t border-white/[0.06] space-y-3">
      <div
        className="flex items-start gap-3 p-3 rounded-lg text-[13px]"
        style={{
          backgroundColor: isCorrect
            ? "rgba(62,207,142,0.08)"
            : "rgba(255,68,68,0.08)",
          color: isCorrect ? "#3ECF8E" : "#FF4444",
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
              : `Incorrect. The answer is ${question.correctAnswerLetter}.`}
          </p>
          {calibrationLabel && (
            <p className="text-[12px] mt-1 opacity-90">{calibrationLabel}</p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowExplanation((s) => !s)}
        className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors"
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
          className="p-4 rounded-lg border border-white/[0.06]"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {question.explanation}
          </ReactMarkdown>
          {state.selfExplanation.trim() && (
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#555555] mb-1.5">
                Your pre-submit plan
              </p>
              <p className="text-[13px] text-[#A8A8A8] italic">
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
    <section className="rounded-xl border bg-[#111111] border-white/[0.08]">
      <div className="px-6 py-5 border-b border-white/[0.06]">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#555555]">
          End of Chapter
        </p>
        <h2 className="text-lg font-semibold text-[#F0F0F0] mt-0.5">
          Graded Problem Sets
        </h2>
        <p className="text-[13px] text-[#888888] mt-1 leading-relaxed">
          Your accuracy targets below are calibrated to your goal score
          {targetScore !== null ? ` of ${targetScore}` : " (set one on the dashboard to personalize)"}.
        </p>
      </div>

      <div className="px-6 py-5 grid sm:grid-cols-3 gap-4">
        {readySets.map((set) => (
          <ProblemSetCard
            key={set.difficulty}
            slug={slug}
            set={set}
            targetScore={targetScore}
            progress={progress}
            update={update}
          />
        ))}
      </div>
    </section>
  )
}

function ProblemSetCard({
  slug,
  set,
  targetScore,
  progress,
  update,
}: {
  slug: string
  set: ReaderProblemSet
  targetScore: number | null
  progress: ChapterProgress
  update: (u: (prev: ChapterProgress) => ChapterProgress) => void
}) {
  const [running, setRunning] = useState(false)
  const result = progress.problemSetResults[set.difficulty]
  const targetPct = resolveAccuracyTarget(set.targetAccuracyByScore, targetScore)
  const achievedPct =
    result && result.total > 0
      ? Math.round((result.correct / result.total) * 100)
      : null
  const passedTarget = achievedPct !== null && achievedPct >= targetPct

  const color =
    passedTarget === true
      ? "#3ECF8E"
      : achievedPct !== null
      ? "#FF4444"
      : "#C9A84C"

  return (
    <>
      <button
        type="button"
        onClick={() => setRunning(true)}
        className="p-4 rounded-xl border text-left transition-colors hover:border-white/[0.14]"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          backgroundColor: "#0F0F0F",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color }}
          >
            {set.difficulty}
          </p>
          {achievedPct !== null && (
            <span
              className="text-[10px] px-2 py-0.5 rounded font-semibold"
              style={{
                backgroundColor: passedTarget
                  ? "rgba(62,207,142,0.12)"
                  : "rgba(255,68,68,0.12)",
                color: passedTarget ? "#3ECF8E" : "#FF4444",
              }}
            >
              {passedTarget ? "Passed" : "Retake"}
            </span>
          )}
        </div>
        <p className="text-sm font-semibold text-[#F0F0F0]">
          {set.questions.length} question{set.questions.length === 1 ? "" : "s"}
        </p>
        <div className="mt-3 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${achievedPct ?? 0}%`,
              backgroundColor: color,
            }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-[#555555]">
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
  onClose,
  onFinish,
}: {
  slug: string
  set: ReaderProblemSet
  targetPct: number
  onClose: () => void
  onFinish: (correct: number, total: number) => void
}) {
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [done, setDone] = useState(false)
  const current = set.questions[idx]

  function submit() {
    if (selected === null) return
    setSubmitted(true)
  }
  function next() {
    const isCorrect = selected === current.correctAnswer
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
    setSubmitted(false)
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
        className="w-full max-w-2xl my-8 mx-4 rounded-xl border border-white/[0.12] bg-[#111111]"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#555555]">
              {set.difficulty} set
            </p>
            <p className="text-sm font-semibold text-[#F0F0F0] mt-0.5">
              {done
                ? "Set complete"
                : `Question ${idx + 1} of ${set.questions.length}`}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded text-[#555555] hover:text-[#F0F0F0] hover:bg-white/[0.04] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {done ? (
          <RunnerResults
            answers={answers}
            total={set.questions.length}
            targetPct={targetPct}
            onClose={onClose}
          />
        ) : (
          <div className="px-6 py-6 space-y-4">
            <div>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                {current.prompt}
              </ReactMarkdown>
            </div>
            <div className="space-y-2">
              {current.options.map((opt, i) => {
                const chosen = selected === i
                const isCorrect = current.correctAnswer === i
                const border = submitted
                  ? isCorrect
                    ? "rgba(62,207,142,0.5)"
                    : chosen
                    ? "rgba(255,68,68,0.5)"
                    : "rgba(255,255,255,0.06)"
                  : chosen
                  ? "rgba(201,168,76,0.5)"
                  : "rgba(255,255,255,0.08)"
                const bg = submitted
                  ? isCorrect
                    ? "rgba(62,207,142,0.05)"
                    : chosen
                    ? "rgba(255,68,68,0.05)"
                    : "#0A0A0A"
                  : chosen
                  ? "rgba(201,168,76,0.06)"
                  : "#0A0A0A"
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
                            ? "#3ECF8E"
                            : chosen
                            ? "#FF4444"
                            : "rgba(255,255,255,0.04)"
                          : chosen
                          ? "#C9A84C"
                          : "rgba(255,255,255,0.04)",
                        color:
                          submitted && (isCorrect || chosen)
                            ? "#0A0A0A"
                            : chosen
                            ? "#0A0A0A"
                            : "#888888",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div className="flex-1 text-[14px] text-[#D8D8D8]">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={mdComponents}
                      >
                        {opt}
                      </ReactMarkdown>
                    </div>
                  </button>
                )
              })}
            </div>

            {submitted && (
              <div
                className="p-3 rounded-lg border border-white/[0.06]"
                style={{ backgroundColor: "#0A0A0A" }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
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
                  disabled={selected === null}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[#0A0A0A] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#C9A84C" }}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={next}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[#0A0A0A] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#C9A84C" }}
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
  targetPct,
  onClose,
}: {
  answers: boolean[]
  total: number
  targetPct: number
  onClose: () => void
}) {
  const correct = answers.filter(Boolean).length
  const pct = Math.round((correct / total) * 100)
  const passed = pct >= targetPct
  return (
    <div className="px-6 py-8 text-center space-y-5">
      <div
        className="mx-auto w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: passed ? "rgba(62,207,142,0.1)" : "rgba(255,68,68,0.1)",
        }}
      >
        {passed ? (
          <Award className="w-8 h-8" style={{ color: "#3ECF8E" }} />
        ) : (
          <BrainCircuit className="w-8 h-8" style={{ color: "#FF4444" }} />
        )}
      </div>
      <div>
        <p className="text-3xl font-bold text-[#F0F0F0]">{pct}%</p>
        <p className="text-sm text-[#888888] mt-1">
          {correct} / {total} correct
        </p>
      </div>
      <p
        className="text-sm"
        style={{ color: passed ? "#3ECF8E" : "#FF4444" }}
      >
        {passed
          ? `Nice — you beat your target of ${targetPct}%.`
          : `Target was ${targetPct}%. Review the chapter and retake when you're ready.`}
      </p>
      <button
        onClick={onClose}
        className="px-4 py-2 rounded-lg text-xs font-medium text-[#0A0A0A]"
        style={{ backgroundColor: "#C9A84C" }}
      >
        Close
      </button>
    </div>
  )
}
