import { createSupabaseServer } from "@/lib/supabase/server"
import {
  computeCalibration,
  type CalibrationReport,
  type ChapterProgressMap,
} from "@/lib/calibration"
import { getAllQuestions } from "@/lib/content"
import type { Section } from "@/types"
import AnalyticsClient, {
  type DifficultyTimingRow,
  type ErrorPatternSummary,
  type PacingRow,
  type ScoreTrendPoint,
  type TopicRow,
  type TopicTimingRow,
} from "./AnalyticsClient"

// Minimum attempts required to trust a per-topic accuracy — anything below
// and a couple of lucky / unlucky answers dominate the number.
const TOPIC_MIN_ATTEMPTS = 5
const PACING_MIN_ATTEMPTS = 5
const TOPIC_TIMING_MIN_ATTEMPTS = 5
const DIFFICULTY_TIMING_MIN_ATTEMPTS = 3

/** A time-spent value below this almost always means the user submitted
 * without reading the question (e.g. accidental click). Dropped from all
 * time aggregations so one instant-submit doesn't skew averages. */
const MIN_ATTEMPT_MS = 1000

/** Deviation thresholds for classifying attempts as "fast" or "slow"
 * relative to the user's own section baseline. 0.7× and 1.3× keep the
 * labels meaningful without tagging the middle 60% of attempts. */
const FAST_RATIO = 0.7
const SLOW_RATIO = 1.3

// Per-section target pace in minutes (reference for the "over / under"
// color coding). Quant allots ~2 min/q, Verbal ~1.75 (CR/RC mix), DI ~2.5.
const SECTION_TARGET_MIN: Record<Section, number> = {
  Quant: 2.0,
  Verbal: 1.75,
  DI: 2.5,
}

/**
 * Scale an accuracy percentage (0-100) to an estimated GMAT Focus total
 * (205..805 in 10-point increments). Matches the derivation on the
 * dashboard's Score Goal card so the two surfaces don't drift.
 */
function accuracyToFocusTotal(accuracy: number): number {
  const clamped = Math.max(0, Math.min(100, accuracy))
  // 0% → 60 per section → 205 total. 100% → 90 per section → 805 total.
  const raw = 205 + clamped * 6.0
  return 205 + Math.round((raw - 205) / 10) * 10
}

export default async function AnalyticsPage() {
  let scoreTrend: ScoreTrendPoint[] = []
  let topicRows: TopicRow[] = []
  let pacingRows: PacingRow[] = []
  let topicTimingRows: TopicTimingRow[] = []
  let difficultyTimingRows: DifficultyTimingRow[] = []
  let errorPatterns: ErrorPatternSummary | null = null
  let calibration: CalibrationReport | null = null
  let hasData = false

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      // ---------- Calibration (from ChapterReader confidence ratings) ----------
      // chapter_progress is written cross-device via /api/chapter-progress.
      // Confidence is rated inline while the student works a chapter check
      // question; this panel aggregates across all chapters.
      const chapterProgress = user.user_metadata?.chapter_progress as
        | ChapterProgressMap
        | undefined
      if (chapterProgress) {
        calibration = computeCalibration(chapterProgress, getAllQuestions())
      }

      // ---------- Score trajectory ----------
      const eightWeeksAgo = new Date(Date.now() - 56 * 86400000).toISOString()

      // Per-session accuracy is the right unit here; if a user does 3 sessions
      // in a week, the weekly average means "average accuracy across sessions
      // that week", which we then scale to a Focus total.
      const { data: sessions } = await supabase
        .from("practice_sessions")
        .select("accuracy, section, created_at")
        .eq("user_id", user.id)
        .gte("created_at", eightWeeksAgo)
        .order("created_at", { ascending: true })

      if (sessions && sessions.length > 0) {
        type Bucket = { overall: number[]; Quant: number[]; Verbal: number[]; DI: number[] }
        const weeks = new Map<string, Bucket>()
        for (const s of sessions) {
          const d = new Date(s.created_at as string)
          const weekStart = new Date(d)
          weekStart.setDate(d.getDate() - d.getDay())
          const key = weekStart.toISOString().slice(0, 10)
          const bucket =
            weeks.get(key) ?? {
              overall: [],
              Quant: [],
              Verbal: [],
              DI: [],
            }
          const acc = Number(s.accuracy)
          bucket.overall.push(acc)
          const sec = s.section as Section | string
          if (sec === "Quant" || sec === "Verbal" || sec === "DI") {
            bucket[sec].push(acc)
          }
          weeks.set(key, bucket)
        }

        scoreTrend = [...weeks.entries()]
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([weekKey, b], i) => {
            const weekDate = new Date(weekKey)
            const mean = (arr: number[]) =>
              arr.length > 0 ? arr.reduce((x, y) => x + y, 0) / arr.length : null
            const overallAcc = mean(b.overall)
            return {
              weekKey,
              weekLabel:
                weekDate.toLocaleDateString("en-US", {
                  month: "short",
                }) + ` W${Math.ceil(weekDate.getDate() / 7)}`,
              index: i,
              total:
                overallAcc !== null ? accuracyToFocusTotal(overallAcc) : null,
              overallAccuracy: overallAcc !== null ? Math.round(overallAcc) : null,
              quant: mean(b.Quant) !== null ? Math.round(mean(b.Quant)!) : null,
              verbal: mean(b.Verbal) !== null ? Math.round(mean(b.Verbal)!) : null,
              di: mean(b.DI) !== null ? Math.round(mean(b.DI)!) : null,
            }
          })
      }

      // ---------- Per-topic accuracy ----------
      const { data: attempts } = await supabase
        .from("practice_attempts")
        .select("topic, subtopic, section, difficulty, is_correct, time_spent_ms")
        .eq("user_id", user.id)

      if (attempts && attempts.length > 0) {
        hasData = true

        // Group by (section + topic) so "Algebra" in Quant and (hypothetical)
        // "Algebra" elsewhere don't collide. Topic label includes subtopic
        // where it adds useful detail (e.g. "CR — Assumption").
        type TopicAgg = {
          total: number
          correct: number
          section: Section
          subtopic: string | null
        }
        const topicMap = new Map<string, TopicAgg>()
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const topic = (a.topic as string) || "Other"
          const key = `${sec}|${topic}`
          const agg =
            topicMap.get(key) ?? {
              total: 0,
              correct: 0,
              section: sec,
              subtopic: (a.subtopic as string | null) || null,
            }
          agg.total++
          if (a.is_correct) agg.correct++
          topicMap.set(key, agg)
        }

        const rows: TopicRow[] = [...topicMap.entries()]
          .filter(([, v]) => v.total >= TOPIC_MIN_ATTEMPTS)
          .map(([key, v]) => {
            const topic = key.split("|").slice(1).join("|")
            return {
              topic,
              section: v.section,
              attempts: v.total,
              accuracy: Math.round((v.correct / v.total) * 100),
            }
          })
          .sort((a, b) => b.attempts - a.attempts)

        topicRows = rows

        // ---------- Pacing per section ----------
        type SecAgg = { total: number; count: number }
        const secAgg: Record<Section, SecAgg> = {
          Quant: { total: 0, count: 0 },
          Verbal: { total: 0, count: 0 },
          DI: { total: 0, count: 0 },
        }
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const ms = (a.time_spent_ms as number) ?? 0
          // Defensive against time_spent_ms of 0 or negative (clock skew /
          // submit-without-interaction) — skip those from the avg so one
          // instant-submit doesn't drag the mean to near-zero.
          if (ms <= 1000) continue
          secAgg[sec].total += ms
          secAgg[sec].count++
        }

        pacingRows = (["Quant", "Verbal", "DI"] as const)
          .filter((sec) => secAgg[sec].count >= PACING_MIN_ATTEMPTS)
          .map((sec) => {
            const avgMin = secAgg[sec].total / secAgg[sec].count / 60000
            const target = SECTION_TARGET_MIN[sec]
            return {
              section: sec,
              avgMin: Math.round(avgMin * 10) / 10,
              targetMin: target,
              // "over" in time = slower than target = red.
              over: avgMin > target,
            }
          })

        // ---------- Per-section baseline average time (ms) ----------
        // Needed by several downstream aggregations — topic timing
        // deviation + fast/slow classification — so compute once.
        const sectionAvgMs: Partial<Record<Section, number>> = {}
        for (const sec of ["Quant", "Verbal", "DI"] as const) {
          if (secAgg[sec].count > 0) {
            sectionAvgMs[sec] = secAgg[sec].total / secAgg[sec].count
          }
        }

        // ---------- Per-topic timing ----------
        // For each (section, topic) with enough attempts, compute the
        // average time-per-question and compare to the user's overall
        // section average. Flags topics where the student burns
        // significantly more (or less) time than their own baseline —
        // far more actionable than "your Quant average is 2.1 min/q".
        type TopicTimeAgg = {
          section: Section
          totalMs: number
          count: number
        }
        const topicTime = new Map<string, TopicTimeAgg>()
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const ms = (a.time_spent_ms as number) ?? 0
          if (ms <= MIN_ATTEMPT_MS) continue
          const topic = (a.topic as string) || "Other"
          const key = `${sec}|${topic}`
          const agg = topicTime.get(key) ?? {
            section: sec,
            totalMs: 0,
            count: 0,
          }
          agg.totalMs += ms
          agg.count += 1
          topicTime.set(key, agg)
        }

        topicTimingRows = [...topicTime.entries()]
          .filter(([, v]) => v.count >= TOPIC_TIMING_MIN_ATTEMPTS)
          .map(([key, v]) => {
            const topic = key.split("|").slice(1).join("|")
            const avgMs = v.totalMs / v.count
            const avgMin = avgMs / 60000
            const baseMs = sectionAvgMs[v.section]
            const ratio = baseMs ? avgMs / baseMs : 1
            const flag: TopicTimingRow["flag"] =
              ratio >= SLOW_RATIO ? "slow" : ratio <= FAST_RATIO ? "fast" : "even"
            return {
              topic,
              section: v.section,
              attempts: v.count,
              avgMin: Math.round(avgMin * 10) / 10,
              ratio: Math.round(ratio * 100) / 100,
              flag,
            }
          })
          // Slowest (biggest drags on pace) first — those are the high-leverage
          // ones to attack.
          .sort((a, b) => b.ratio - a.ratio)
          .slice(0, 10)

        // ---------- Per-difficulty timing ----------
        // Shows how long the student spends on Beginner / Intermediate /
        // Advanced within each section. Surfaces "I spend 3 min on easy
        // questions" scenarios that indicate careless slow-down.
        type DifficultyTimeAgg = {
          totalMs: number
          count: number
          correct: number
        }
        const diffTime = new Map<
          string,
          DifficultyTimeAgg & { section: Section; difficulty: string }
        >()
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const ms = (a.time_spent_ms as number) ?? 0
          if (ms <= MIN_ATTEMPT_MS) continue
          const difficulty =
            (a.difficulty as string | null) ?? "Intermediate"
          const key = `${sec}|${difficulty}`
          const agg = diffTime.get(key) ?? {
            section: sec,
            difficulty,
            totalMs: 0,
            count: 0,
            correct: 0,
          }
          agg.totalMs += ms
          agg.count += 1
          if (a.is_correct) agg.correct += 1
          diffTime.set(key, agg)
        }

        difficultyTimingRows = [...diffTime.values()]
          .filter((v) => v.count >= DIFFICULTY_TIMING_MIN_ATTEMPTS)
          .map((v) => {
            const avgMin = v.totalMs / v.count / 60000
            return {
              section: v.section,
              difficulty: v.difficulty,
              attempts: v.count,
              avgMin: Math.round(avgMin * 10) / 10,
              accuracy: Math.round((v.correct / v.count) * 100),
            }
          })
          .sort((a, b) => {
            // Sort Quant → Verbal → DI, then Beginner → Intermediate → Advanced
            const secOrder: Record<Section, number> = { Quant: 0, Verbal: 1, DI: 2 }
            if (a.section !== b.section) return secOrder[a.section] - secOrder[b.section]
            const diffOrder: Record<string, number> = {
              Beginner: 0,
              Intermediate: 1,
              Advanced: 2,
            }
            return (diffOrder[a.difficulty] ?? 99) - (diffOrder[b.difficulty] ?? 99)
          })

        // ---------- Error-pattern breakdown ----------
        // Classifies every attempt (with valid time) against its
        // section's baseline:
        //   correct + fast   → efficient  (good)
        //   correct + slow   → labored   (right but inefficient)
        //   wrong   + fast   → rushed    (panic / misread)
        //   wrong   + slow   → stuck     (conceptual gap)
        //   middle-tempo attempts get no label — the student's behaviour
        //   was neither too fast nor too slow to flag.
        let efficient = 0
        let labored = 0
        let rushed = 0
        let stuck = 0
        let labelledWrong = 0
        let labelledRight = 0
        for (const a of attempts) {
          const sec = a.section as Section
          if (sec !== "Quant" && sec !== "Verbal" && sec !== "DI") continue
          const ms = (a.time_spent_ms as number) ?? 0
          if (ms <= MIN_ATTEMPT_MS) continue
          const base = sectionAvgMs[sec]
          if (!base) continue
          const ratio = ms / base
          const isCorrect = !!a.is_correct
          if (ratio <= FAST_RATIO) {
            if (isCorrect) {
              efficient += 1
              labelledRight += 1
            } else {
              rushed += 1
              labelledWrong += 1
            }
          } else if (ratio >= SLOW_RATIO) {
            if (isCorrect) {
              labored += 1
              labelledRight += 1
            } else {
              stuck += 1
              labelledWrong += 1
            }
          }
        }
        if (labelledRight + labelledWrong > 0) {
          errorPatterns = {
            efficient,
            labored,
            rushed,
            stuck,
            totalLabelled: labelledRight + labelledWrong,
          }
        }
      }
    }
  } catch {
    // Supabase unavailable — render empty state.
  }

  return (
    <AnalyticsClient
      scoreTrend={scoreTrend}
      topicRows={topicRows}
      pacingRows={pacingRows}
      topicTimingRows={topicTimingRows}
      difficultyTimingRows={difficultyTimingRows}
      errorPatterns={errorPatterns}
      calibration={calibration}
      hasData={hasData}
    />
  )
}
