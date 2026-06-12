import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  ListChecks,
  Sparkles,
  Target,
  XCircle,
  Zap,
} from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  getAllQuestions,
  getChapterTest,
  getQuestionsBySetSlug,
  type ParsedQuestion,
} from "@/lib/content"
import { getCurriculumOutline } from "@/lib/curriculum-outline"
import { findSimilarQuestions } from "@/lib/similar-questions"
import { readSavedForReview } from "@/lib/spaced-review"
import QuestionFeedbackBar from "@/components/beta/QuestionFeedbackBar"
import SaveForReviewButton from "@/components/review/SaveForReviewButton"
import type { Section } from "@/types"

export const metadata = {
  title: "Question review",
}

const EYEBROW = "text-[10px] font-semibold uppercase tracking-[0.22em]"

/**
 * /review/question/[id] — deep, premium per-question review surface.
 *
 * For any question the student has solved (correct or wrong), this
 * page surfaces the eight pieces a serious review session needs:
 *
 *   1. Answer correctness    — your answer vs the correct answer
 *   2. Time spent            — vs the elite-scorer target time
 *   3. Fastest method        — `fastestPath` field (one-line strategic move)
 *   4. Full explanation      — the standardized 6-section explanation
 *   5. Trap diagnosis        — `commonTrap` plus per-choice `mistakeAnalysis`
 *   6. Related reading       — `relatedReading` chapter link
 *   7. Related micro-drills  — drill blocks from the same chapter
 *   8. Similar follow-up Qs  — top 5 similar questions in the bank
 *
 * The page is server-rendered. Auth-guarded for the personalised
 * attempt history (correctness + time spent); unauthenticated visitors
 * still see the question + explanation + similar items.
 */
export default async function QuestionReviewPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const allQuestions = getAllQuestions()
  const question = allQuestions.find((q) => q.id === id)
  if (!question) notFound()

  // ---- Personalised attempt history ----
  let lastAttempt: {
    isCorrect: boolean
    selectedAnswer: number | null
    timeSpentMs: number | null
    sessionSlug: string | null
    createdAt: string | null
  } | null = null
  let initialSaved = false
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const { data: rows } = await supabase
        .from("practice_attempts")
        .select(
          "is_correct, selected_answer, time_spent_ms, practice_sessions(slug, created_at)"
        )
        .eq("user_id", user.id)
        .eq("question_id", id)
        .order("id", { ascending: false })
        .limit(1)
      const row = (rows as unknown as Array<{
        is_correct: boolean
        selected_answer: number | null
        time_spent_ms: number | null
        practice_sessions: { slug: string; created_at: string } | null
      }> | null)?.[0]
      if (row) {
        lastAttempt = {
          isCorrect: !!row.is_correct,
          selectedAnswer: row.selected_answer,
          timeSpentMs: row.time_spent_ms,
          sessionSlug: row.practice_sessions?.slug ?? null,
          createdAt: row.practice_sessions?.created_at ?? null,
        }
      }
      initialSaved = readSavedForReview(user.user_metadata).has(id)
    }
  } catch {
    // Render anonymously when Supabase is unavailable.
  }

  // ---- Related micro-drills (same chapter as relatedReading) ----
  const outline = getCurriculumOutline()
  const relatedDrills = question.relatedReading
    ? outline
        .filter(
          (e) =>
            e.kind === "drill" && e.chapterSlug === question.relatedReading
        )
        .slice(0, 4)
    : []

  // ---- Similar follow-up questions ----
  const similar = findSimilarQuestions(question, allQuestions, 5)

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto space-y-12">
        <BackBar backHref={sessionBackHref(lastAttempt?.sessionSlug ?? null)} />

        <Hero question={question} attempt={lastAttempt} />

        {question.fastestPath && (
          <FastestPathCard text={question.fastestPath} />
        )}

        <ExplanationCard question={question} />

        {(question.commonTrap || question.mistakeAnalysis) && (
          <TrapDiagnosisCard question={question} attempt={lastAttempt} />
        )}

        {question.takeaway && <TakeawayCard text={question.takeaway} />}

        {question.relatedReading && (
          <RelatedReadingCard slug={question.relatedReading} />
        )}

        {relatedDrills.length > 0 && (
          <RelatedDrillsCard drills={relatedDrills} />
        )}

        {similar.length > 0 && (
          <SimilarQuestionsCard items={similar} />
        )}

        {/* Save-for-review CTA — one-click adds the question to the
            spaced-review queue with a +50 priority boost. */}
        <div className="flex items-center justify-between gap-4 px-2">
          <p className="text-[12px] text-[#888888] leading-relaxed max-w-md">
            Want this question to come back in your spaced-review queue? Save it.
            We&apos;ll surface it sooner with a priority boost.
          </p>
          <SaveForReviewButton
            questionId={question.id}
            initialSaved={initialSaved}
          />
        </div>

        {/* Beta feedback — bottom of the page so students who finished
            reading can flag issues with this specific question. */}
        <QuestionFeedbackBar questionId={question.id} />
      </div>
    </div>
  )
}

// ============================================================
// Subcomponents
// ============================================================

/**
 * Route a stored practice_sessions.slug to the surface that can actually
 * serve it. Only set slugs / chapter-test slugs / "custom" resolve on
 * /practice/session — mock/review/diagnostic slugs 404 there, so they go
 * back to their own hubs instead. Unknown slugs return null (link hidden).
 */
function sessionBackHref(rawSlug: string | null): string | null {
  if (!rawSlug) return null
  const slug = rawSlug.replace(/^session-/, "")
  if (slug === "custom") return "/practice/session/custom"
  if (/^mock-/.test(slug)) return "/mock/report"
  if (/^diagnostic/.test(slug)) return "/mock"
  const review = slug.match(/^review-(quant|verbal|di)\b/i)
  if (review) return `/review/${review[1].toLowerCase()}`
  if (/^review-/.test(slug)) return "/review"
  if (getChapterTest(slug) !== null || getQuestionsBySetSlug(slug).length > 0) {
    return `/practice/session/${slug}`
  }
  return null
}

function BackBar({ backHref }: { backHref: string | null }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link
        href="/review/all"
        className="inline-flex items-center gap-1.5 text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to spaced review
      </Link>
      {backHref && (
        <Link
          href={backHref}
          className="text-[12px] tracking-tight text-[#888888] hover:text-[#F0F0F0] transition-colors"
        >
          ← Back to session
        </Link>
      )}
    </div>
  )
}

function Hero({
  question,
  attempt,
}: {
  question: ParsedQuestion
  attempt: {
    isCorrect: boolean
    selectedAnswer: number | null
    timeSpentMs: number | null
  } | null
}) {
  const correctnessColor =
    attempt === null
      ? "#888888"
      : attempt.isCorrect
        ? "#3ECF8E"
        : "#FF4444"
  const correctnessLabel =
    attempt === null
      ? "Not yet attempted"
      : attempt.isCorrect
        ? "Correct"
        : "Incorrect"
  const yourLetter =
    attempt?.selectedAnswer != null
      ? String.fromCharCode(65 + attempt.selectedAnswer)
      : null
  const timeBucket = bucketTime(question.section, attempt?.timeSpentMs ?? null, question.estTimeSeconds)
  return (
    <section>
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <span
          className="px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.18em] font-semibold"
          style={{
            backgroundColor: "rgba(201,168,76,0.10)",
            color: "#C9A84C",
          }}
        >
          {question.section}
        </span>
        <span className="text-[11px] uppercase tracking-[0.16em] text-[#888888] font-medium">
          {question.topic}
          {question.subtopic && question.subtopic !== question.topic
            ? ` · ${question.subtopic}`
            : ""}
        </span>
        <span
          className="text-[11px] uppercase tracking-[0.16em] font-semibold px-2 py-0.5 rounded"
          style={{
            color: difficultyColor(question.difficulty),
            backgroundColor: `${difficultyColor(question.difficulty)}1A`,
          }}
        >
          {question.difficulty}
        </span>
        <span className="text-[11px] uppercase tracking-[0.16em] text-[#555555] font-medium">
          {question.type}
        </span>
      </div>

      {question.context && (
        <div
          className="p-5 rounded-2xl border border-white/[0.06] bg-[#0A0A0A] mb-5 prose prose-invert max-w-none"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
            {question.context}
          </ReactMarkdown>
        </div>
      )}

      <div
        className="p-7 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
      >
        <div className="prose prose-invert max-w-none mb-5">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
            {question.prompt}
          </ReactMarkdown>
        </div>
        {question.options.length > 0 && (
          <ol className="space-y-2 mb-5">
            {question.options.map((opt, i) => {
              const letter = String.fromCharCode(65 + i)
              const isCorrect = i === question.correctAnswer
              const isUserPick = attempt?.selectedAnswer === i
              const tone = isCorrect
                ? { color: "#3ECF8E", bg: "rgba(62,207,142,0.08)" }
                : isUserPick
                  ? { color: "#FF4444", bg: "rgba(255,68,68,0.08)" }
                  : { color: "#C0C0C0", bg: "transparent" }
              return (
                <li
                  key={letter}
                  className="flex items-start gap-3 px-4 py-3 rounded-lg border"
                  style={{
                    borderColor: isCorrect
                      ? "rgba(62,207,142,0.25)"
                      : isUserPick
                        ? "rgba(255,68,68,0.25)"
                        : "rgba(255,255,255,0.06)",
                    backgroundColor: tone.bg,
                  }}
                >
                  <span
                    className="text-[11px] font-bold tracking-[0.18em] mt-0.5"
                    style={{ color: tone.color }}
                  >
                    {letter}
                  </span>
                  <span className="flex-1 text-[14px] tracking-tight" style={{ color: tone.color }}>
                    {opt}
                  </span>
                  {isCorrect && (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#3ECF8E" }} />
                  )}
                  {isUserPick && !isCorrect && (
                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#FF4444" }} />
                  )}
                </li>
              )
            })}
          </ol>
        )}
        <div className="flex items-center gap-4 flex-wrap pt-3 border-t border-white/[0.04]">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: correctnessColor }}>
            {attempt?.isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : attempt ? <XCircle className="w-3.5 h-3.5" /> : null}
            {correctnessLabel}
          </span>
          {yourLetter && (
            <span className="text-[12px] text-[#888888]">
              You picked <span className="font-semibold text-[#F0F0F0]">{yourLetter}</span>
              <span className="mx-1.5 text-[#333333]">·</span>
              correct: <span className="font-semibold text-[#F0F0F0]">{question.correctAnswerLetter || "—"}</span>
            </span>
          )}
          <TimeBadge bucket={timeBucket} attempt={attempt} estSeconds={question.estTimeSeconds} />
        </div>
      </div>
    </section>
  )
}

function difficultyColor(diff: string): string {
  if (diff === "Beginner" || diff === "Easy") return "#3ECF8E"
  if (diff === "Advanced" || diff === "Hard") return "#FF4444"
  return "#C9A84C"
}

type TimeBucket = "fast" | "on-target" | "slow" | "stuck" | "no-data"

function bucketTime(
  section: Section,
  timeSpentMs: number | null,
  estTimeSeconds: number | undefined
): TimeBucket {
  if (timeSpentMs == null) return "no-data"
  const target = (estTimeSeconds ?? defaultTargetSeconds(section)) * 1000
  const ratio = timeSpentMs / target
  if (ratio > 1.6) return "stuck"
  if (ratio > 1.15) return "slow"
  if (ratio < 0.6) return "fast"
  return "on-target"
}

function defaultTargetSeconds(section: Section): number {
  // Per-question elite-scorer budget when est_time_seconds isn't authored.
  if (section === "Quant") return 110
  if (section === "Verbal") return 90
  return 120
}

function TimeBadge({
  bucket,
  attempt,
  estSeconds,
}: {
  bucket: TimeBucket
  attempt: { timeSpentMs: number | null } | null
  estSeconds?: number
}) {
  if (bucket === "no-data" || !attempt?.timeSpentMs) return null
  const sec = Math.round(attempt.timeSpentMs / 1000)
  const colors: Record<TimeBucket, string> = {
    fast: "#5FA8FF",
    "on-target": "#3ECF8E",
    slow: "#FF9933",
    stuck: "#FF4444",
    "no-data": "#888888",
  }
  const labels: Record<TimeBucket, string> = {
    fast: "Faster than target",
    "on-target": "On target",
    slow: "Over budget",
    stuck: "Stuck — well over budget",
    "no-data": "—",
  }
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em]"
      style={{ color: colors[bucket] }}
    >
      <Clock className="w-3 h-3" />
      {sec}s {estSeconds ? `vs ${estSeconds}s target` : ""}
      <span className="text-[11px] font-normal text-[#888888] tracking-normal lowercase normal-case ml-1">
        ({labels[bucket]})
      </span>
    </span>
  )
}

function FastestPathCard({ text }: { text: string }) {
  return (
    <Card eyebrow="Fastest path" icon={Zap} accent="#C9A84C">
      <p className="text-[16px] text-[#F0F0F0] leading-relaxed">{text}</p>
    </Card>
  )
}

function ExplanationCard({ question }: { question: ParsedQuestion }) {
  return (
    <Card eyebrow="Full explanation" icon={Sparkles} accent="#C9A84C">
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>
          {question.explanation || "_No written explanation on file._"}
        </ReactMarkdown>
      </div>
    </Card>
  )
}

function TrapDiagnosisCard({
  question,
  attempt,
}: {
  question: ParsedQuestion
  attempt: { selectedAnswer: number | null } | null
}) {
  const userLetter =
    attempt?.selectedAnswer != null
      ? (String.fromCharCode(65 + attempt.selectedAnswer) as "A" | "B" | "C" | "D" | "E")
      : null
  const userMistake =
    userLetter && question.mistakeAnalysis ? question.mistakeAnalysis[userLetter] : null
  return (
    <Card eyebrow="Trap diagnosis" icon={AlertTriangle} accent="#FF4444">
      {question.commonTrap && (
        <div className="mb-5 pb-5 border-b border-white/[0.05]">
          <p className={EYEBROW + " mb-2"} style={{ color: "#FF4444" }}>
            Engineered trap
          </p>
          <p className="text-[15px] text-[#F0F0F0] leading-relaxed">
            {question.commonTrap}
          </p>
        </div>
      )}
      {userMistake && userLetter && (
        <div className="mb-5 pb-5 border-b border-white/[0.05]">
          <p className={EYEBROW + " mb-2"} style={{ color: "#FF4444" }}>
            Why you picked {userLetter}
          </p>
          <p className="text-[14px] text-[#C0C0C0] leading-relaxed">
            {userMistake}
          </p>
        </div>
      )}
      {question.mistakeAnalysis && (
        <div>
          <p className={EYEBROW + " mb-3"} style={{ color: "#888888" }}>
            What each wrong choice was engineered to catch
          </p>
          <ul className="space-y-2">
            {(["A", "B", "C", "D", "E"] as const).map((letter) => {
              const m = question.mistakeAnalysis?.[letter]
              if (!m) return null
              const isUser = userLetter === letter
              return (
                <li
                  key={letter}
                  className="flex items-start gap-3 px-3 py-2 rounded-lg"
                  style={{
                    backgroundColor: isUser ? "rgba(255,68,68,0.06)" : "transparent",
                  }}
                >
                  <span
                    className="text-[11px] font-bold tracking-[0.18em] mt-0.5"
                    style={{ color: isUser ? "#FF4444" : "#888888" }}
                  >
                    {letter}
                  </span>
                  <span
                    className="flex-1 text-[13px] leading-relaxed"
                    style={{ color: isUser ? "#F0F0F0" : "#888888" }}
                  >
                    {m}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </Card>
  )
}

function TakeawayCard({ text }: { text: string }) {
  return (
    <Card eyebrow="Takeaway" icon={Target} accent="#3ECF8E">
      <p className="text-[15px] text-[#F0F0F0] leading-relaxed">{text}</p>
    </Card>
  )
}

function RelatedReadingCard({ slug }: { slug: string }) {
  const href = slug.startsWith("reading-") ? `/guides/${slug}` : `/chapters/${slug}`
  return (
    <Card eyebrow="Related reading" icon={BookOpen} accent="#5FA8FF">
      <Link
        href={href}
        className="group flex items-center justify-between gap-3 p-4 -mx-1 rounded-lg transition-colors hover:bg-white/[0.03]"
      >
        <div>
          <p className="text-[14px] text-[#F0F0F0] tracking-tight font-semibold">
            Open the chapter that teaches this skill
          </p>
          <p className="text-[12px] text-[#888888] mt-1 truncate">{slug}</p>
        </div>
        <ArrowRight className="w-4 h-4 flex-shrink-0 text-[#5FA8FF] group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </Card>
  )
}

function RelatedDrillsCard({
  drills,
}: {
  drills: ReturnType<typeof getCurriculumOutline>
}) {
  return (
    <Card eyebrow="Related micro-drills" icon={ListChecks} accent="#3ECF8E">
      <ul className="space-y-2">
        {drills.map((d) => (
          <li key={`${d.chapterSlug}-${d.ordinal}`}>
            <Link
              href={`/guides/${d.chapterSlug}#${d.subchapterAnchor}`}
              className="group flex items-center gap-3 px-3 py-2.5 -mx-1 rounded-lg transition-colors hover:bg-white/[0.03]"
            >
              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold flex-shrink-0" style={{ color: "#3ECF8E" }}>
                Drill
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[13px] font-semibold text-[#F0F0F0] tracking-tight truncate">
                  {d.label}
                </span>
                <span className="block text-[11px] text-[#888888] truncate mt-0.5">
                  in {d.subchapter}
                </span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-[#555555] group-hover:text-[#3ECF8E] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function SimilarQuestionsCard({
  items,
}: {
  items: ReturnType<typeof findSimilarQuestions>
}) {
  return (
    <Card eyebrow="Similar follow-ups" icon={Layers} accent="#B088FF">
      <p className="text-[12px] text-[#888888] mb-4 leading-relaxed">
        Ranked by trap-pattern + sub-skill match. Drill these to install the recognition signal you just used.
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.question.id}>
            <Link
              href={`/review/question/${item.question.id}`}
              className="group flex items-start gap-3 px-3 py-3 -mx-1 rounded-lg transition-colors hover:bg-white/[0.03]"
            >
              <span
                className="px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-[0.16em] uppercase flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: "rgba(176,136,255,0.10)",
                  color: "#B088FF",
                }}
              >
                {item.question.section}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[13px] font-semibold text-[#F0F0F0] tracking-tight line-clamp-2">
                  {item.question.subtopic !== item.question.topic
                    ? `${item.question.subtopic} (${item.question.topic})`
                    : item.question.topic}
                </span>
                <span className="block text-[11px] text-[#888888] mt-0.5 truncate">
                  {item.matchedOn.slice(0, 3).join(" · ")}
                </span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-1 text-[#555555] group-hover:text-[#B088FF] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function Card({
  eyebrow,
  icon: Icon,
  accent,
  children,
}: {
  eyebrow: string
  icon: typeof BookOpen
  accent: string
  children: React.ReactNode
}) {
  return (
    <section
      className="p-6 rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-4 h-4" style={{ color: accent }} />
        <p className={EYEBROW} style={{ color: accent }}>
          {eyebrow}
        </p>
      </div>
      {children}
    </section>
  )
}
