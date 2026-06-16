import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getQuestionsBySetSlug,
  getQuestionsByIds,
  getChapterTest,
  parseChapterTestSlug,
  getChapterBySlug,
} from "@/lib/content"
import { createSupabaseServer } from "@/lib/supabase/server"
import {
  PAYWALL_ENABLED,
  getPlanTierForUser,
  practiceTestsAllowed,
} from "@/lib/entitlements"
import UpgradeGate from "@/components/shared/UpgradeGate"
import {
  DEFAULT_LEVEL,
  getLevelForSlug,
  getTopicSkillLevels,
  pickAdaptiveOrder,
  type TopicSkillLevel,
} from "@/lib/topic-skill"
import { TOPIC_TO_SET } from "@/lib/topic-chapter-map"
import SessionClient, { type SessionQuestion, type WeakTopicHint } from "./SessionClient"

export default async function PracticeSessionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // A chapter-test slug (`ch-<chapterSlug>-t<n>`) runs a specific curated subset
  // of a chapter's questions; any other slug is a topic-set (all questions in a
  // bank file). Try the chapter-test path first — its shape can't collide with a
  // topic-set slug — then fall back.
  const chapterTest = getChapterTest(slug)
  let setLabel: string | undefined
  if (chapterTest) {
    const parsed = parseChapterTestSlug(slug)
    const chapterTitle = parsed ? getChapterBySlug(parsed.chapterSlug)?.title : undefined
    setLabel = chapterTitle ? `${chapterTitle} · ${chapterTest.label}` : chapterTest.label
  }

  // Paywall gate: free accounts get the first test of each chapter; the rest
  // are paid. Fully skipped while PAYWALL_ENABLED is off (no extra query).
  // Only applies to chapter-test slugs — topic-set / custom / review slugs
  // are gated elsewhere or not at all.
  if (PAYWALL_ENABLED && chapterTest) {
    const parsedForGate = parseChapterTestSlug(slug)
    if (parsedForGate) {
      const supabase = await createSupabaseServer()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      const tier = user ? await getPlanTierForUser(supabase, user.id) : "free"
      if (parsedForGate.testIndex > practiceTestsAllowed(tier)) {
        return (
          <UpgradeGate
            feature="More practice tests"
            blurb="Free accounts get the first test in every chapter. Unlock every test in all chapters across Quant, Verbal, and Data Insights — hundreds of original, timing-targeted questions."
            perks={[
              "Every practice test in every chapter",
              "Hundreds of additional original questions",
              "Full per-chapter coverage, easy to hard",
            ]}
          />
        )
      }
    }
  }

  const questions = chapterTest
    ? getQuestionsByIds(chapterTest.questionIds)
    : getQuestionsBySetSlug(slug)
  if (questions.length === 0) notFound()

  // Filter out questions that still have 0 parseable options after parsing
  // (shouldn't happen now that TPA tables produce row-label options, but
  // kept as a safety net for any future format).
  const playable: SessionQuestion[] = questions
    .filter((q) => q.options.length > 0)
    .map((q) => ({
      id: q.id,
      number: q.number,
      section: q.section,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      type: q.type,
      prompt: q.prompt,
      context: q.context,
      options: q.options,
      correctAnswer: q.correctAnswer,
      correctAnswerLetter: q.correctAnswerLetter,
      explanation: q.explanation,
      hints: q.hints,
      fastestPath: q.fastestPath,
      commonTrap: q.commonTrap,
      mistakeAnalysis: q.mistakeAnalysis,
      takeaway: q.takeaway,
      twoPartColumns: q.twoPartColumns,
      twoPartCorrectAnswers: q.twoPartCorrectAnswers,
      chartSpec: q.chartSpec,
    }))

  if (playable.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h1 className="text-xl font-bold text-[#F0F0F0] mb-2">{questions[0].topic}</h1>
          <p className="text-sm text-[#888888] mb-4">
            This question format requires a custom answer UI that isn&apos;t supported in
            the practice session yet.
          </p>
          <Link
            href="/practice"
            className="inline-block text-xs px-3 py-1.5 rounded-lg font-medium hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Back to Practice
          </Link>
        </div>
      </div>
    )
  }

  // Adaptive ordering. Reads the student's per-topic skill level from
  // user_metadata and reorders `playable` so level-appropriate questions
  // lead. Falls back to file order when the student has fewer than
  // MIN_ATTEMPTS_FOR_ADAPTIVE attempts on this slug — predictable
  // behaviour for new users. Auth/metadata errors are non-fatal.
  //
  // Also computes the student's weakest topic from practice_attempts so
  // the completion screen can show a specific "Practice X next" CTA
  // instead of the generic "invest in a weaker area" fallback.
  let skill: TopicSkillLevel = {
    level: DEFAULT_LEVEL,
    attempts: 0,
    updatedAt: 0,
  }
  let weakestTopic: WeakTopicHint | null = null
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const levels = getTopicSkillLevels(user.user_metadata)
      skill = getLevelForSlug(levels, slug)

      // Fetch enough history to compute per-topic accuracy. 2k rows is
      // sufficient for most users; the limit avoids over-fetching on
      // heavy accounts while still giving good signal.
      const { data: attempts } = await supabase
        .from("practice_attempts")
        .select("topic, is_correct")
        .eq("user_id", user.id)
        .limit(2000)

      if (attempts && attempts.length > 0) {
        const stats = new Map<string, { total: number; correct: number }>()
        for (const row of attempts) {
          const t = row.topic as string | null
          if (!t) continue
          const s = stats.get(t) ?? { total: 0, correct: 0 }
          s.total += 1
          if (row.is_correct) s.correct += 1
          stats.set(t, s)
        }

        const currentTopic = questions[0].topic
        const worst = [...stats.entries()]
          .filter(([t, s]) => t !== currentTopic && s.total >= 3)
          .map(([t, s]) => ({ topic: t, accuracy: s.correct / s.total }))
          .sort((a, b) => a.accuracy - b.accuracy)[0]

        // Only surface a specific recommendation when there's a real gap.
        // Topics at ≥75% don't need a redirect — the student is fine there.
        if (worst && worst.accuracy < 0.75) {
          // Set slug, not chapter slug — this href feeds /practice/session,
          // which only resolves question-bank set slugs (see TOPIC_TO_SET).
          const practiceSlug = TOPIC_TO_SET[worst.topic] ?? null
          if (practiceSlug) {
            weakestTopic = { topic: worst.topic, practiceSlug, accuracy: worst.accuracy }
          }
        }
      }
    }
  } catch {
    // Anonymous or supabase down — keep defaults / skip recommendation.
  }
  const adaptive = pickAdaptiveOrder(playable, skill)

  return (
    <SessionClient
      slug={slug}
      topic={questions[0].topic}
      section={questions[0].section}
      questions={adaptive}
      skillLevel={skill.level}
      skillAttempts={skill.attempts}
      weakestTopic={weakestTopic ?? undefined}
      setLabel={setLabel}
    />
  )
}
