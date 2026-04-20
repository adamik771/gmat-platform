/**
 * Streak + badge derivations. Pure functions so they're easy to unit-test
 * and safe to call from any server component. All inputs are already-
 * aggregated primitives (counts + date strings), not Supabase rows, so
 * callers shape their queries once and feed the results in here.
 */

import type { LucideIcon } from "lucide-react"
import {
  Award,
  BookOpen,
  Flame,
  Medal,
  Star,
  Target,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react"

export interface StreakResult {
  /** Consecutive active days ending today (or yesterday if nothing today). */
  current: number
  /** Longest streak the user has ever had. */
  longest: number
  /** True when the user has an activity today — useful for framing copy. */
  activeToday: boolean
}

/**
 * Computes current and longest streaks from a set of ISO-date strings
 * (YYYY-MM-DD) representing days the user had any activity. A "streak" is a
 * run of consecutive days. The current streak is the run that includes
 * today, or yesterday (grace so users don't lose their streak before
 * midnight ends in their timezone). Everything breaks at a full missed day.
 */
export function computeStreaks(activeDays: Set<string>): StreakResult {
  if (activeDays.size === 0) {
    return { current: 0, longest: 0, activeToday: false }
  }

  const sorted = [...activeDays].sort() // YYYY-MM-DD sorts lexicographically
  const asDate = (s: string) => {
    // Parse as UTC midnight to avoid DST drift.
    const [y, m, d] = s.split("-").map(Number)
    return Date.UTC(y, m - 1, d)
  }
  const DAY_MS = 86400000

  // Longest run anywhere in the history.
  let longest = 1
  let run = 1
  for (let i = 1; i < sorted.length; i++) {
    const gap = (asDate(sorted[i]) - asDate(sorted[i - 1])) / DAY_MS
    if (gap === 1) {
      run++
      if (run > longest) longest = run
    } else if (gap > 1) {
      run = 1
    }
    // gap === 0 shouldn't happen — Set dedupes — but ignore if it does.
  }

  // Current streak anchored on today or yesterday.
  const now = new Date()
  const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")}`
  const activeToday = activeDays.has(todayKey)

  let current = 0
  // Start from today and walk backwards as long as the previous day is present.
  let cursor = asDate(todayKey)
  // If no activity today, the streak might still be alive if yesterday had
  // activity — we count backwards from yesterday instead.
  if (!activeDays.has(keyFromUtc(cursor))) {
    cursor -= DAY_MS
  }
  while (activeDays.has(keyFromUtc(cursor))) {
    current++
    cursor -= DAY_MS
  }

  return { current, longest, activeToday }
}

function keyFromUtc(ms: number): string {
  const d = new Date(ms)
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getUTCDate()).padStart(2, "0")}`
}

export interface BadgeInput {
  totalSessions: number
  totalQuestions: number
  lessonsCompleted: number
  longestStreak: number
  currentStreak: number
  taggedMistakeCount: number
  reviewedMistakeCount: number
  hasCustomTest: boolean
  hasTarget: boolean
  largestSessionQuestions: number
}

export interface Badge {
  id: string
  label: string
  description: string
  unlocked: boolean
  icon: LucideIcon
}

/**
 * Produces the achievement list for a user. Order is stable — unlocked and
 * locked badges both appear, which keeps the grid layout from shifting as
 * the user progresses.
 */
export function computeBadges(input: BadgeInput): Badge[] {
  return [
    {
      id: "first-session",
      label: "First Session",
      description: "Complete your first practice session.",
      unlocked: input.totalSessions >= 1,
      icon: Star,
    },
    {
      id: "first-lesson",
      label: "Student",
      description: "Mark your first lesson complete.",
      unlocked: input.lessonsCompleted >= 1,
      icon: BookOpen,
    },
    {
      id: "streak-3",
      label: "3-Day Streak",
      description: "Practice 3 days in a row.",
      unlocked: input.longestStreak >= 3,
      icon: Flame,
    },
    {
      id: "streak-7",
      label: "Week Strong",
      description: "Practice 7 days in a row.",
      unlocked: input.longestStreak >= 7,
      icon: Zap,
    },
    {
      id: "hundred",
      label: "Century",
      description: "Attempt 100 questions.",
      unlocked: input.totalQuestions >= 100,
      icon: Trophy,
    },
    {
      id: "marathon",
      label: "Marathon",
      description: "Complete a 30-question session.",
      unlocked: input.largestSessionQuestions >= 30,
      icon: Medal,
    },
    {
      id: "custom-test",
      label: "Test Builder",
      description: "Generate a custom practice test.",
      unlocked: input.hasCustomTest,
      icon: Wrench,
    },
    {
      id: "target-set",
      label: "Goal Set",
      description: "Set a target GMAT score on the dashboard.",
      unlocked: input.hasTarget,
      icon: Target,
    },
    {
      id: "error-reviewer",
      label: "Reflective Learner",
      description: "Review 5 mistakes in the error log.",
      unlocked: input.reviewedMistakeCount >= 5,
      icon: Award,
    },
    {
      id: "all-lessons",
      label: "Curriculum Complete",
      description: "Finish every lesson in the course.",
      // Threshold stays at 8 because the curriculum is fixed — if we ever
      // add lessons, this badge moves automatically.
      unlocked: input.lessonsCompleted >= 8,
      icon: Trophy,
    },
  ]
}
