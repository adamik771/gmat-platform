/**
 * Read-only, aggregate-only question-quality audit.
 *
 * The script reads production attempts and categorical feedback but never
 * prints user ids, emails, free-text feedback, request metadata, or secrets.
 * It ranks review candidates; it never changes content or production data.
 */
import { createClient } from "@supabase/supabase-js"
import { getAllQuestions } from "../src/lib/content.ts"
import {
  assessDifficultyFit,
  computeItemStats,
  summariseBankHealth,
  type PsychometricsInput,
} from "../src/lib/psychometrics.ts"
import { databaseTimestampMicros } from "../src/lib/database-timestamp.ts"

const PAGE_SIZE = 500
const MAX_PAGES = 200
const REPORT_LIMIT = 40

interface FeedbackAggregate {
  total: number
  active: number
  tags: Map<string, number>
}

function isReplaySession(slug: unknown, topic: unknown) {
  const value = typeof slug === "string" ? slug : ""
  if (value.startsWith("review-") || value.startsWith("redo-")) return true
  return typeof topic === "string" && topic.toLowerCase().startsWith("mixed review")
}

function optionLength(option: string) {
  return option.replace(/\s+/g, " ").trim().length
}

function pct(value: number | null) {
  return value === null ? "-" : `${Math.round(value * 100)}%`
}

function cleanCell(value: string) {
  return value.replace(/\|/g, "/").replace(/\s+/g, " ").trim()
}

async function loadAttempts(service: ReturnType<typeof createClient>, cutoff: string) {
  const rows: PsychometricsInput[] = []
  let expectedCount: number | null = null
  let previous: { id: string; at: number } | null = null

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const { data, error, count } = await service
      .from("practice_attempts")
      .select(
        "id,user_id,question_id,section,topic,is_correct,created_at,hints_revealed,practice_sessions(slug,topic,user_id)",
        { count: "exact" }
      )
      .lte("created_at", cutoff)
      .order("created_at", { ascending: true })
      .order("id", { ascending: true })
      .range(rows.length, rows.length + PAGE_SIZE - 1)

    if (error) throw new Error(`practice_attempts read failed (${error.code ?? "unknown"})`)
    if (!Array.isArray(data) || count === null) throw new Error("practice_attempts pagination metadata missing")
    if (expectedCount === null) expectedCount = count
    if (count !== expectedCount || count > PAGE_SIZE * MAX_PAGES) {
      throw new Error("practice_attempts changed during audit or exceeded the safety ceiling")
    }
    if (data.length === 0) {
      if (rows.length !== expectedCount) throw new Error("practice_attempts audit was incomplete")
      return rows
    }

    for (const value of data) {
      const row = value as unknown as Record<string, unknown>
      const at = databaseTimestampMicros(row.created_at)
      if (
        typeof row.id !== "string" ||
        typeof row.user_id !== "string" ||
        typeof row.question_id !== "string" ||
        !["Quant", "Verbal", "DI"].includes(String(row.section)) ||
        typeof row.is_correct !== "boolean" ||
        at === null ||
        (previous && (at < previous.at || (at === previous.at && row.id <= previous.id)))
      ) {
        throw new Error("practice_attempts contained an invalid or unstable row")
      }
      const relation = row.practice_sessions
      const session = (Array.isArray(relation)
        ? relation.length === 1
          ? relation[0]
          : null
        : relation) as Record<string, unknown> | null
      rows.push({
        id: row.id,
        user_id: row.user_id,
        question_id: row.question_id,
        section: row.section as PsychometricsInput["section"],
        topic: typeof row.topic === "string" ? row.topic : "Unknown",
        is_correct: row.is_correct,
        created_at: typeof row.created_at === "string" ? row.created_at : null,
        hints_revealed: typeof row.hints_revealed === "number" ? row.hints_revealed : null,
        eligibleSession:
          !!session &&
          session.user_id === row.user_id &&
          typeof session.slug === "string" &&
          !isReplaySession(session.slug, session.topic),
      })
      previous = { id: row.id, at }
    }
    if (rows.length === expectedCount) return rows
  }
  throw new Error("practice_attempts audit reached the pagination safety ceiling")
}

async function loadFeedback(service: ReturnType<typeof createClient>, cutoff: string) {
  const aggregates = new Map<string, FeedbackAggregate>()
  let read = 0
  let expectedCount: number | null = null

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const { data, error, count } = await service
      .from("beta_feedback")
      .select("id,question_id,kind,tag,status,created_at", { count: "exact" })
      .eq("kind", "question")
      .not("question_id", "is", null)
      .lte("created_at", cutoff)
      .order("created_at", { ascending: true })
      .order("id", { ascending: true })
      .range(read, read + PAGE_SIZE - 1)

    if (error) throw new Error(`beta_feedback read failed (${error.code ?? "unknown"})`)
    if (!Array.isArray(data) || count === null) throw new Error("beta_feedback pagination metadata missing")
    if (expectedCount === null) expectedCount = count
    if (count !== expectedCount || count > PAGE_SIZE * MAX_PAGES) {
      throw new Error("beta_feedback changed during audit or exceeded the safety ceiling")
    }
    if (data.length === 0) {
      if (read !== expectedCount) throw new Error("beta_feedback audit was incomplete")
      return aggregates
    }

    for (const row of data as Array<Record<string, unknown>>) {
      if (typeof row.question_id !== "string") throw new Error("beta_feedback contained an invalid row")
      const aggregate = aggregates.get(row.question_id) ?? {
        total: 0,
        active: 0,
        tags: new Map<string, number>(),
      }
      aggregate.total += 1
      if (row.status !== "wontfix" && row.status !== "duplicate") aggregate.active += 1
      if (typeof row.tag === "string") {
        aggregate.tags.set(row.tag, (aggregate.tags.get(row.tag) ?? 0) + 1)
      }
      aggregates.set(row.question_id, aggregate)
    }
    read += data.length
    if (read === expectedCount) return aggregates
  }
  throw new Error("beta_feedback audit reached the pagination safety ceiling")
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error("Supabase service credentials are required")

  const service = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
  const cutoff = new Date().toISOString()
  const [attemptRows, feedback] = await Promise.all([
    loadAttempts(service, cutoff),
    loadFeedback(service, cutoff),
  ])
  const stats = computeItemStats(attemptRows)
  const statsById = new Map(stats.map((item) => [item.questionId, item]))
  const questions = getAllQuestions()
  const questionIds = new Set(questions.map((question) => question.id))

  const candidates = questions.map((question) => {
    const stat = statsById.get(question.id)
    const itemFeedback = feedback.get(question.id)
    const fit = assessDifficultyFit(
      question.difficulty,
      stat?.pValue ?? null,
      stat?.attempts ?? 0
    )
    const lengths = question.options.map(optionLength)
    const sortedLengths = [...lengths].sort((a, b) => b - a)
    const uniqueLongestCorrect =
      question.options.length === 5 &&
      lengths[question.correctAnswer] === sortedLengths[0] &&
      lengths.filter((length) => length === sortedLengths[0]).length === 1
    const materialLengthCue =
      uniqueLongestCorrect &&
      sortedLengths[0] - sortedLengths[1] >= 12 &&
      sortedLengths[0] / Math.max(sortedLengths[1], 1) >= 1.08
    const thinExplanation =
      question.explanation.replace(/\s+/g, " ").trim().length < 80 &&
      !question.fastestPath &&
      !question.takeaway
    const overlongExplanation = question.explanation.length > 2_500
    const reasons: string[] = []
    let evidenceScore = 0

    if ((itemFeedback?.active ?? 0) > 0) {
      evidenceScore += Math.min(itemFeedback!.active, 5) * 4
      reasons.push(`${itemFeedback!.active} active feedback`)
    }
    if (stat?.flag === "review") {
      evidenceScore += 8
      reasons.push("non-positive discrimination")
    } else if (stat?.flag === "easy" || stat?.flag === "hard") {
      evidenceScore += 5
      reasons.push(`empirically ${stat.flag}`)
    }
    if (fit === "too-easy" || fit === "too-hard") {
      evidenceScore += 4
      reasons.push(`${fit} for ${question.difficulty}`)
    }

    return {
      question,
      stat,
      feedback: itemFeedback,
      fit,
      evidenceScore,
      reasons,
      materialLengthCue,
      thinExplanation,
      overlongExplanation,
    }
  })

  const ranked = candidates
    .filter((candidate) => candidate.evidenceScore > 0)
    .sort(
      (a, b) =>
        b.evidenceScore - a.evidenceScore ||
        (b.stat?.attempts ?? 0) - (a.stat?.attempts ?? 0) ||
        a.question.id.localeCompare(b.question.id)
    )
    .slice(0, REPORT_LIMIT)
  const earlyWatchlist = candidates
    .filter((candidate) => {
      const attempts = candidate.stat?.attempts ?? 0
      const pValue = candidate.stat?.pValue ?? null
      return attempts >= 5 && attempts < 20 && pValue !== null && (pValue <= 0.2 || pValue >= 0.85)
    })
    .sort(
      (a, b) =>
        (b.stat?.attempts ?? 0) - (a.stat?.attempts ?? 0) ||
        a.question.id.localeCompare(b.question.id)
    )
    .slice(0, 20)

  const health = summariseBankHealth(stats)
  const unknownAttemptIds = stats.filter((stat) => !questionIds.has(stat.questionId)).length
  const unknownFeedbackIds = [...feedback.keys()].filter((id) => !questionIds.has(id)).length
  const sectionCounts = ["Quant", "Verbal", "DI"].map((section) => ({
    section,
    total: questions.filter((question) => question.section === section).length,
    withAttempts: stats.filter((stat) => stat.section === section && stat.attempts > 0).length,
    enoughData: stats.filter(
      (stat) => stat.section === section && stat.flag !== "insufficient"
    ).length,
  }))
  const activeFeedbackCount = [...feedback.values()].reduce(
    (sum, value) => sum + value.active,
    0
  )

  console.log("# Question Quality Audit")
  console.log(`Cutoff: ${cutoff}`)
  console.log("Privacy: aggregate-only; no identities or free-text feedback were loaded or printed.\n")
  console.log("## Coverage")
  console.log(`- Bank questions: ${questions.length}`)
  console.log(`- Recorded attempt rows read: ${attemptRows.length}`)
  console.log(`- Items with enough clean first-attempt data: ${health.withEnoughData}`)
  console.log(`- Empirically healthy among measurable items: ${health.okCount}/${health.withEnoughData}`)
  console.log(`- Active categorical question-feedback signals: ${activeFeedbackCount}`)
  console.log(`- Unknown historical attempt ids: ${unknownAttemptIds}`)
  console.log(`- Unknown feedback question ids: ${unknownFeedbackIds}\n`)
  console.log("| Section | Bank | Attempted items | Enough data |")
  console.log("| --- | ---: | ---: | ---: |")
  for (const row of sectionCounts) {
    console.log(`| ${row.section} | ${row.total} | ${row.withAttempts} | ${row.enoughData} |`)
  }

  console.log("\n## Ranked Review Queue")
  if (ranked.length === 0) {
    console.log("No question crossed the actionable evidence threshold.")
  } else {
    console.log("| Rank | Question | Section | Level | Clean attempts | Correct | Feedback | Evidence |")
    console.log("| ---: | --- | --- | --- | ---: | ---: | ---: | --- |")
    ranked.forEach((candidate, index) => {
      const tags = [...(candidate.feedback?.tags ?? new Map())]
        .sort((a, b) => b[1] - a[1])
        .map(([tag, count]) => `${tag}:${count}`)
        .join(", ")
      const evidence = [...candidate.reasons, tags].filter(Boolean).join("; ")
      console.log(
        `| ${index + 1} | ${candidate.question.id} | ${candidate.question.section} | ${candidate.question.difficulty} | ${candidate.stat?.attempts ?? 0} | ${pct(candidate.stat?.pValue ?? null)} | ${candidate.feedback?.active ?? 0} | ${cleanCell(evidence)} |`
      )
    })
  }

  console.log("\n## Early Watchlist (Inconclusive)")
  console.log("Items below have 5-19 clean first attempts and an extreme observed result. They are monitoring leads, not edit instructions.")
  if (earlyWatchlist.length === 0) {
    console.log("No item currently meets the early-watch criteria.")
  } else {
    console.log("| Question | Section | Level | Clean attempts | Correct | Static note |")
    console.log("| --- | --- | --- | ---: | ---: | --- |")
    for (const candidate of earlyWatchlist) {
      const staticNotes = [
        candidate.materialLengthCue ? "answer-length cue" : "",
        candidate.thinExplanation ? "thin explanation" : "",
        candidate.overlongExplanation ? "overlong explanation" : "",
      ].filter(Boolean).join(", ")
      console.log(
        `| ${candidate.question.id} | ${candidate.question.section} | ${candidate.question.difficulty} | ${candidate.stat?.attempts ?? 0} | ${pct(candidate.stat?.pValue ?? null)} | ${staticNotes || "-"} |`
      )
    }
  }

  const advancedVerbal = candidates.filter(
    (candidate) =>
      candidate.question.section === "Verbal" &&
      candidate.question.difficulty === "Advanced" &&
      candidate.question.options.length === 5
  )
  const lengthCueCount = advancedVerbal.filter((candidate) => candidate.materialLengthCue).length
  const dsQuestions = questions.filter(
    (question) => question.type === "Data Sufficiency" && /^[A-E]$/.test(question.correctAnswerLetter)
  )
  const dsDistribution = ["A", "B", "C", "D", "E"]
    .map((letter) => `${letter}:${dsQuestions.length ? pct(dsQuestions.filter((q) => q.correctAnswerLetter === letter).length / dsQuestions.length) : "-"}`)
    .join(" · ")

  console.log("\n## Static Guardrail Snapshot")
  console.log(`- Advanced Verbal material longest-answer cues: ${lengthCueCount}/${advancedVerbal.length} (${pct(advancedVerbal.length ? lengthCueCount / advancedVerbal.length : 0)})`)
  console.log(`- Data Sufficiency answer distribution: ${dsDistribution}`)
  console.log(`- Thin explanations flagged: ${candidates.filter((candidate) => candidate.thinExplanation).length}`)
  console.log(`- Overlong explanations flagged: ${candidates.filter((candidate) => candidate.overlongExplanation).length}`)
  console.log("\nThis queue is a screening tool, not an automatic verdict. Inspect source, answer key, distractors, and teaching value before any edit.")
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : "question-quality audit failed"
  console.error(`[question-quality-audit] ${message.slice(0, 200)}`)
  process.exitCode = 1
})
