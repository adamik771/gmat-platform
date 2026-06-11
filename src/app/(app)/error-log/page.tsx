import Link from "next/link"
import { AlertCircle, X } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getAllQuestions, type ParsedQuestion } from "@/lib/content"
import {
  classifyMistakes,
  persistAutoClassifications,
  type MistakeAttemptInput,
} from "@/lib/mistake-classifier"
import { buildMistakeInsights } from "@/lib/mistake-insights"
import EmptyState from "@/components/shared/EmptyState"
import type { Difficulty, QuestionType, Section } from "@/types"
import {
  ERROR_TAG_BY_ID,
  ERROR_FAMILIES,
  ROOT_CAUSE_BY_ID,
  ROOT_CAUSE_FAMILIES,
} from "./constants"
import ErrorLogClient, {
  type MistakeEntry,
} from "./ErrorLogClient"
import BreakdownCard, {
  type FamilyBreakdown,
  type FamilyBucket,
  type RootCauseBreakdown,
  type RootCauseBucket,
} from "./BreakdownCard"
import InsightsPanel from "./InsightsPanel"

export default async function ErrorLogPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id: sessionIdFilter } = await searchParams
  let mistakes: MistakeEntry[] = []
  let hasUser = false

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      hasUser = true

      // Grab every wrong attempt + join the parent session's created_at so we
      // can timestamp and link rows. Supabase nested select syntax returns
      // the related row under the relationship name. When `session_id` is
      // present in the query string, scope to that session — used by the
      // "Tag mistakes from this session" CTA on the practice completion screen.
      let attemptsQuery = supabase
        .from("practice_attempts")
        .select(
          "id, question_id, section, topic, subtopic, difficulty, question_type, selected_answer, time_spent_ms, session_id, practice_sessions(slug, created_at)"
        )
        .eq("user_id", user.id)
        .eq("is_correct", false)
        .order("session_id", { ascending: false })
        .limit(200)
      if (sessionIdFilter) {
        attemptsQuery = attemptsQuery.eq("session_id", sessionIdFilter)
      }
      const { data: attempts } = await attemptsQuery

      // Pull tags for the same user in a second query and merge by id. Doing
      // this separately (vs an FK join) avoids Supabase relationship-cache
      // edge cases and keeps both queries simple.
      //
      // We try to select `confidence` (G9 column). If the migration hasn't
      // run yet the column is missing — Supabase returns an error rather
      // than gracefully ignoring it, so we fall back to the legacy SELECT.
      type TagRow = {
        attempt_id: string
        tag: string | null
        root_cause: string | null
        contributing_causes: string[] | null
        notes: string | null
        reviewed: boolean | null
        remediation_assigned_at: string | null
        remediation_completed_at: string | null
        confidence?: string | null
      }
      const withConfidence = await supabase
        .from("error_tags")
        .select(
          "attempt_id, tag, root_cause, contributing_causes, notes, reviewed, remediation_assigned_at, remediation_completed_at, confidence",
        )
        .eq("user_id", user.id)
      let tags: TagRow[]
      if (withConfidence.error) {
        const legacy = await supabase
          .from("error_tags")
          .select(
            "attempt_id, tag, root_cause, contributing_causes, notes, reviewed, remediation_assigned_at, remediation_completed_at",
          )
          .eq("user_id", user.id)
        tags = (legacy.data as TagRow[] | null) ?? []
      } else {
        tags = (withConfidence.data as TagRow[] | null) ?? []
      }
      const tagMap = new Map<string, TagRow>()
      for (const t of tags) {
        tagMap.set(t.attempt_id, t)
      }

      // Build a question-id → ParsedQuestion map once so each row lookup is O(1).
      const byId = new Map<string, ParsedQuestion>()
      for (const q of getAllQuestions()) byId.set(q.id, q)

      type AttemptRow = {
        id: string
        question_id: string
        section: string
        topic: string
        subtopic: string | null
        difficulty: string | null
        question_type: string | null
        selected_answer: number | null
        time_spent_ms: number | null
        session_id: string
        practice_sessions: { slug: string; created_at: string } | null
      }

      mistakes = ((attempts as AttemptRow[] | null) ?? []).map((a) => {
        const q = byId.get(a.question_id)
        const t = tagMap.get(a.id)
        return {
          id: a.id,
          questionId: a.question_id,
          section: a.section as Section,
          topic: a.topic,
          subtopic: a.subtopic ?? "",
          difficulty: a.difficulty ?? "",
          questionType: a.question_type ?? "",
          selectedAnswer: a.selected_answer,
          timeSpentMs: a.time_spent_ms,
          sessionSlug: a.practice_sessions?.slug ?? null,
          createdAt: a.practice_sessions?.created_at ?? null,
          // Enriched from markdown content — may be null if a question was
          // renamed/removed between the attempt being saved and this render.
          prompt: q?.prompt ?? null,
          options: q?.options ?? null,
          correctAnswer: q?.correctAnswer ?? null,
          correctAnswerLetter: q?.correctAnswerLetter ?? null,
          explanation: q?.explanation ?? null,
          context: q?.context ?? null,
          twoPartColumns: q?.twoPartColumns ?? null,
          tag: (t?.tag ?? null) as MistakeEntry["tag"],
          rootCause: t?.root_cause ?? null,
          contributingCauses: t?.contributing_causes ?? [],
          notes: t?.notes ?? null,
          reviewed: t?.reviewed ?? false,
          remediationAssignedAt: t?.remediation_assigned_at ?? null,
          remediationCompletedAt: t?.remediation_completed_at ?? null,
          confidence: (t?.confidence === "auto" || t?.confidence === "manual"
            ? t.confidence
            : null) as MistakeEntry["confidence"],
        }
      })
    }
  } catch {
    // Supabase unavailable — render empty state below.
  }

  // Per-family breakdown. Groups tagged mistakes by their error family
  // (9 families in the framework taxonomy), lumps legacy-tagged rows
  // into "Legacy," and surfaces the "Untagged" backlog separately.
  const familyCounts = new Map<FamilyBucket, number>()
  for (const m of mistakes) {
    let bucket: FamilyBucket
    if (!m.tag) {
      bucket = "Untagged"
    } else {
      const def = ERROR_TAG_BY_ID[m.tag]
      bucket = def ? def.family : "Legacy"
    }
    familyCounts.set(bucket, (familyCounts.get(bucket) ?? 0) + 1)
  }
  const familyBuckets: FamilyBucket[] = [
    ...ERROR_FAMILIES,
    "Legacy",
    "Untagged",
  ]
  const familyBreakdown: FamilyBreakdown[] = familyBuckets
    .map((family) => {
      const count = familyCounts.get(family) ?? 0
      return {
        family,
        count,
        pct:
          mistakes.length > 0
            ? Math.round((count / mistakes.length) * 100)
            : 0,
      }
    })
    // Hide families the student has no mistakes in — avoids a long grid of zeros.
    .filter((row) => row.count > 0)

  // Per-root-cause-family breakdown. The K1/…/F1 hierarchy is orthogonal
  // to the question-type families above — it says WHERE the solve process
  // broke, not WHAT kind of question failed. Students who tag both get a
  // second, independent read on their misses.
  const rootCauseCounts = new Map<RootCauseBucket, number>()
  for (const m of mistakes) {
    let bucket: RootCauseBucket
    if (!m.rootCause) {
      bucket = "Uncoded"
    } else {
      const def = ROOT_CAUSE_BY_ID[m.rootCause]
      bucket = def ? def.family : "Uncoded"
    }
    rootCauseCounts.set(bucket, (rootCauseCounts.get(bucket) ?? 0) + 1)
  }
  const rootCauseBuckets: RootCauseBucket[] = [
    ...ROOT_CAUSE_FAMILIES,
    "Uncoded",
  ]
  const rootCauseBreakdown: RootCauseBreakdown[] = rootCauseBuckets
    .map((family) => {
      const count = rootCauseCounts.get(family) ?? 0
      return {
        family,
        count,
        pct:
          mistakes.length > 0
            ? Math.round((count / mistakes.length) * 100)
            : 0,
      }
    })
    .filter((row) => row.count > 0)

  // Contributing-cause aggregation — walks each mistake's 0-2 secondary
  // codes into the same 7 root-cause families. A mistake can contribute
  // to multiple family buckets (if its two contributing codes live in
  // different families) — we're counting code-instances here, not
  // mistakes, so the denominator is total contributing assignments.
  const contribCounts = new Map<RootCauseBucket, number>()
  let contribTotal = 0
  for (const m of mistakes) {
    for (const cid of m.contributingCauses ?? []) {
      const fam = ROOT_CAUSE_BY_ID[cid]?.family
      if (!fam) continue
      contribCounts.set(fam, (contribCounts.get(fam) ?? 0) + 1)
      contribTotal += 1
    }
  }
  const contributingBreakdown: RootCauseBreakdown[] = ROOT_CAUSE_FAMILIES
    .map((family) => {
      const count = contribCounts.get(family) ?? 0
      return {
        family,
        count,
        pct: contribTotal > 0 ? Math.round((count / contribTotal) * 100) : 0,
      }
    })
    .filter((row) => row.count > 0)

  const totalMistakes = mistakes.length
  const reviewedCount = mistakes.filter((m) => m.reviewed).length

  // Auto-classify every miss + aggregate into the dashboard view-model.
  // This complements the manual tagging — students see auto-inferred
  // categorization (trap, sub-skill, time bucket) without having to
  // tag every row by hand.
  const questionsById = new Map<string, ParsedQuestion>()
  for (const q of getAllQuestions()) questionsById.set(q.id, q)
  const classifierInput: MistakeAttemptInput[] = mistakes.map((m) => ({
    questionId: m.questionId,
    section: m.section,
    topic: m.topic,
    subtopic: m.subtopic ?? null,
    difficulty: (m.difficulty as Difficulty) || null,
    questionType: (m.questionType as QuestionType) || null,
    selectedAnswer: m.selectedAnswer,
    timeSpentMs: m.timeSpentMs ?? null,
  }))
  const classifications = classifyMistakes(classifierInput, questionsById)
  const attemptTimestamps = new Map<string, number>()
  for (const m of mistakes) {
    if (m.createdAt) {
      const ts = new Date(m.createdAt).getTime()
      if (Number.isFinite(ts)) attemptTimestamps.set(m.questionId, ts)
    }
  }
  const insights = buildMistakeInsights(classifications, {
    questionsById,
    attemptTimestamps,
  })

  // Persist auto-classifications (G9). Only fires for misses that have
  // no existing tag row — manual rows always win, so this is effectively
  // a one-time backfill per attempt. Uses upsert with `ignoreDuplicates`
  // so a re-render after the first persist is a no-op. Soft-fails when
  // the `confidence` column hasn't been added yet (migration in
  // `mistake-classifier.ts::__schema_migration_g9`).
  if (mistakes.length > 0) {
    try {
      const supabase = await createSupabaseServer()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        const untagged = mistakes
          .map((m, i) => ({ entry: m, classification: classifications[i] }))
          .filter(({ entry }) => entry.tag == null && entry.rootCause == null)
        if (untagged.length > 0) {
          await persistAutoClassifications(
            supabase,
            user.id,
            untagged.map(({ entry, classification }) => ({
              attemptId: entry.id,
              classification,
            }))
          )
        }
      }
    } catch {
      // Soft-fail — page render must not depend on the write succeeding.
    }
  }

  // Remediation-flag summary for the header chip. "In progress" = assigned
  // but not completed (any time, still open). "Completed this week" =
  // completed within the last 7 days — bounded so the chip doesn't grow
  // monotonically as the student clears old remediations.
  const { remediationInProgress, remediationCompletedThisWeek } =
    computeRemediationSummary(mistakes)

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <section
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-14"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% -10%, rgba(201,168,76,0.14) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 110% 110%, rgba(255,68,68,0.08) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-grain opacity-[0.035] mix-blend-overlay"
          aria-hidden
        />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#C9A84C" }}
            >
              Error log
            </p>
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.4), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            Recent{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              mistakes.
            </span>
          </h1>
          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mt-4 max-w-2xl">
            {totalMistakes > 0 ? (
              <>
                <span className="tabular-nums">
                  {totalMistakes} mistake{totalMistakes === 1 ? "" : "s"} logged
                </span>{" "}
                ·{" "}
                <span className="tabular-nums">{reviewedCount} reviewed</span>
                {" "}— every wrong answer is a tagged specimen. Classify the
                failure mode, write a note, and the pattern starts to surface.
              </>
            ) : hasUser ? (
              "No mistakes logged yet — every question you get wrong will show up here with its full explanation."
            ) : (
              "Sign in to see questions you've missed in practice sets, with explanations and quick links back to the sets."
            )}
          </p>
          {sessionIdFilter && (
            <div className="mt-5 inline-flex items-center gap-2 text-[12px] text-[#C0C0C0] px-3 py-1.5 rounded-full border border-white/[0.08] bg-[#0A0A0A]">
              <span className="tabular-nums">
                Viewing one session
              </span>
              <span className="text-[#444444]">·</span>
              <Link
                href="/error-log"
                className="inline-flex items-center gap-1 font-semibold hover:text-[#F0F0F0] transition-colors"
                style={{ color: "#C9A84C" }}
              >
                Show all
                <X className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {totalMistakes === 0 ? (
        <EmptyState
          icon={AlertCircle}
          title="No mistakes logged yet"
          description={
            hasUser
              ? "Your error log starts when you submit your first practice session — every miss will show up here with its explanation and a one-tap link back to the set."
              : "Sign in to see questions you've missed in practice sets, with explanations and quick links back to the sets."
          }
          ctaHref="/practice"
          ctaLabel="Start practicing"
          size="md"
        />
      ) : (
        <>
          <InsightsPanel insights={insights} />

          <BreakdownCard
            familyBreakdown={familyBreakdown}
            rootCauseBreakdown={rootCauseBreakdown}
            contributingBreakdown={contributingBreakdown}
          />

          <ErrorLogClient
            mistakes={mistakes}
            remediationInProgress={remediationInProgress}
            remediationCompletedThisWeek={remediationCompletedThisWeek}
          />
        </>
      )}
    </div>
  )
}

/**
 * Walks the mistake list once and returns the two remediation counts
 * the header chip surfaces. Pulled out of the render body so the
 * `Date.now()` read doesn't trip React's impure-call-in-render rule.
 */
function computeRemediationSummary(mistakes: MistakeEntry[]): {
  remediationInProgress: number
  remediationCompletedThisWeek: number
} {
  const weekAgoMs = Date.now() - 7 * 86400000
  let inProgress = 0
  let completedWeek = 0
  for (const m of mistakes) {
    if (m.remediationAssignedAt && !m.remediationCompletedAt) inProgress += 1
    if (m.remediationCompletedAt) {
      const t = new Date(m.remediationCompletedAt).getTime()
      if (Number.isFinite(t) && t >= weekAgoMs) completedWeek += 1
    }
  }
  return {
    remediationInProgress: inProgress,
    remediationCompletedThisWeek: completedWeek,
  }
}
