import { createSupabaseServer } from "@/lib/supabase/server"
import type { Section } from "@/types"
import AnalyticsClient, {
  type PacingRow,
  type ScoreTrendPoint,
  type TopicRow,
} from "./AnalyticsClient"

// Minimum attempts required to trust a per-topic accuracy — anything below
// and a couple of lucky / unlucky answers dominate the number.
const TOPIC_MIN_ATTEMPTS = 5
const PACING_MIN_ATTEMPTS = 5

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
  let hasData = false

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
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
        .select("topic, subtopic, section, is_correct, time_spent_ms")
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
      hasData={hasData}
    />
  )
}
