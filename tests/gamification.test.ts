import { describe, it, expect } from "vitest"
import {
  computeStreaks,
  computeBadges,
  type BadgeInput,
} from "@/lib/gamification"

/**
 * Helper: build a YYYY-MM-DD key from a UTC-millis offset relative to "today",
 * using the SAME calendar arithmetic the module uses for the current day.
 *
 * computeStreaks anchors the *current* streak on `new Date()` (wall clock), so
 * any current-streak assertion has to be expressed relative to the real today
 * to stay deterministic across whatever day the suite runs. The *longest*
 * streak is computed purely from the input set, so those cases use fixed dates.
 */
function key(daysAgo: number): string {
  const now = new Date()
  // Mirror the module's todayKey (local-date components), then walk back in
  // UTC-day steps to match its keyFromUtc back-walk. Using UTC millis from the
  // local Y/M/D avoids DST drift, exactly like the module does.
  const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const target = new Date(todayUtc - daysAgo * 86400000)
  return `${target.getUTCFullYear()}-${String(target.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}-${String(target.getUTCDate()).padStart(2, "0")}`
}

describe("computeStreaks", () => {
  it("returns all-zero for empty input", () => {
    expect(computeStreaks(new Set())).toEqual({
      current: 0,
      longest: 0,
      activeToday: false,
    })
  })

  it("counts a single active day today as a streak of 1", () => {
    const result = computeStreaks(new Set([key(0)]))
    expect(result.current).toBe(1)
    expect(result.longest).toBe(1)
    expect(result.activeToday).toBe(true)
  })

  it("counts a clean consecutive streak ending today", () => {
    // today, yesterday, day-before -> current streak of 3.
    const result = computeStreaks(new Set([key(0), key(1), key(2)]))
    expect(result.current).toBe(3)
    expect(result.longest).toBe(3)
    expect(result.activeToday).toBe(true)
  })

  it("keeps the current streak alive via the yesterday grace window", () => {
    // No activity today, but yesterday + day-before are present. The grace
    // window means current still counts back from yesterday.
    const result = computeStreaks(new Set([key(1), key(2)]))
    expect(result.current).toBe(2)
    expect(result.activeToday).toBe(false)
  })

  it("breaks the current streak when both today and yesterday are missing", () => {
    // Most recent activity was 2 days ago -> outside the today/yesterday anchor.
    const result = computeStreaks(new Set([key(2), key(3)]))
    expect(result.current).toBe(0)
    expect(result.activeToday).toBe(false)
    // ...but those two days still form a longest streak of 2.
    expect(result.longest).toBe(2)
  })

  it("only counts the unbroken run touching today for the current streak", () => {
    // today + yesterday are consecutive (current = 2). A gap, then an older
    // 3-day block that does NOT touch today.
    const result = computeStreaks(
      new Set([key(0), key(1), key(5), key(6), key(7)])
    )
    expect(result.current).toBe(2)
    expect(result.activeToday).toBe(true)
    // The older block of 3 is the longest the user ever had.
    expect(result.longest).toBe(3)
  })

  it("computes the longest run from fixed historical dates with a breaking gap", () => {
    // Two runs: [2024-01-01..2024-01-04] (len 4) and [2024-03-10..2024-03-11]
    // (len 2). The Jan->Mar jump is a multi-day gap that resets the run. None
    // of these touch a realistic 'today', so current is 0 but longest is 4.
    const result = computeStreaks(
      new Set([
        "2024-01-01",
        "2024-01-02",
        "2024-01-03",
        "2024-01-04",
        "2024-03-10",
        "2024-03-11",
      ])
    )
    expect(result.longest).toBe(4)
    expect(result.current).toBe(0)
    expect(result.activeToday).toBe(false)
  })

  it("treats an exactly-one-day gap as breaking the run (boundary)", () => {
    // 2024-05-01 and 2024-05-03 are 2 days apart -> two separate runs of 1.
    const result = computeStreaks(new Set(["2024-05-01", "2024-05-03"]))
    expect(result.longest).toBe(1)
  })

  it("handles a month boundary as consecutive (2024-01-31 -> 2024-02-01)", () => {
    const result = computeStreaks(
      new Set(["2024-01-30", "2024-01-31", "2024-02-01"])
    )
    expect(result.longest).toBe(3)
  })

  it("handles a leap-day boundary as consecutive (2024-02-28 -> 02-29 -> 03-01)", () => {
    const result = computeStreaks(
      new Set(["2024-02-28", "2024-02-29", "2024-03-01"])
    )
    expect(result.longest).toBe(3)
  })

  it("is insensitive to input ordering of the date set", () => {
    const unordered = new Set([
      "2024-07-04",
      "2024-07-01",
      "2024-07-03",
      "2024-07-02",
    ])
    expect(computeStreaks(unordered).longest).toBe(4)
  })
})

// A baseline input where nothing is unlocked, so each badge case can flip
// exactly one threshold and assert that badge (and only the intended ones).
const ZERO_INPUT: BadgeInput = {
  totalSessions: 0,
  totalQuestions: 0,
  lessonsCompleted: 0,
  longestStreak: 0,
  currentStreak: 0,
  taggedMistakeCount: 0,
  reviewedMistakeCount: 0,
  hasCustomTest: false,
  hasTarget: false,
  largestSessionQuestions: 0,
}

function badge(badges: ReturnType<typeof computeBadges>, id: string) {
  const found = badges.find((b) => b.id === id)
  if (!found) throw new Error(`badge ${id} not found`)
  return found
}

describe("computeBadges", () => {
  it("returns the full stable 10-badge grid in order, all locked at zero", () => {
    const badges = computeBadges(ZERO_INPUT)
    expect(badges.map((b) => b.id)).toEqual([
      "first-session",
      "first-lesson",
      "streak-3",
      "streak-7",
      "hundred",
      "marathon",
      "custom-test",
      "target-set",
      "error-reviewer",
      "all-lessons",
    ])
    expect(badges.every((b) => b.unlocked === false)).toBe(true)
    // Every badge carries display metadata + an icon component.
    for (const b of badges) {
      expect(typeof b.label).toBe("string")
      expect(b.label.length).toBeGreaterThan(0)
      expect(typeof b.description).toBe("string")
      expect(b.icon).toBeTruthy()
    }
  })

  it("unlocks 'first-session' at exactly 1 session (boundary)", () => {
    expect(badge(computeBadges(ZERO_INPUT), "first-session").unlocked).toBe(
      false
    )
    expect(
      badge(computeBadges({ ...ZERO_INPUT, totalSessions: 1 }), "first-session")
        .unlocked
    ).toBe(true)
  })

  it("unlocks 'first-lesson' at 1 lesson but not 'all-lessons' until 8", () => {
    const one = computeBadges({ ...ZERO_INPUT, lessonsCompleted: 1 })
    expect(badge(one, "first-lesson").unlocked).toBe(true)
    expect(badge(one, "all-lessons").unlocked).toBe(false)

    const seven = computeBadges({ ...ZERO_INPUT, lessonsCompleted: 7 })
    expect(badge(seven, "all-lessons").unlocked).toBe(false)

    const eight = computeBadges({ ...ZERO_INPUT, lessonsCompleted: 8 })
    expect(badge(eight, "first-lesson").unlocked).toBe(true)
    expect(badge(eight, "all-lessons").unlocked).toBe(true)
  })

  it("unlocks streak badges off longestStreak at the 3 and 7 boundaries", () => {
    const at2 = computeBadges({ ...ZERO_INPUT, longestStreak: 2 })
    expect(badge(at2, "streak-3").unlocked).toBe(false)
    expect(badge(at2, "streak-7").unlocked).toBe(false)

    const at3 = computeBadges({ ...ZERO_INPUT, longestStreak: 3 })
    expect(badge(at3, "streak-3").unlocked).toBe(true)
    expect(badge(at3, "streak-7").unlocked).toBe(false)

    const at6 = computeBadges({ ...ZERO_INPUT, longestStreak: 6 })
    expect(badge(at6, "streak-7").unlocked).toBe(false)

    const at7 = computeBadges({ ...ZERO_INPUT, longestStreak: 7 })
    expect(badge(at7, "streak-3").unlocked).toBe(true)
    expect(badge(at7, "streak-7").unlocked).toBe(true)
  })

  it("ignores currentStreak for streak badges (they key off longestStreak)", () => {
    // High current streak but longest still below threshold -> stays locked.
    const badges = computeBadges({
      ...ZERO_INPUT,
      currentStreak: 99,
      longestStreak: 2,
    })
    expect(badge(badges, "streak-3").unlocked).toBe(false)
  })

  it("unlocks 'hundred' at exactly 100 questions (boundary)", () => {
    expect(
      badge(computeBadges({ ...ZERO_INPUT, totalQuestions: 99 }), "hundred")
        .unlocked
    ).toBe(false)
    expect(
      badge(computeBadges({ ...ZERO_INPUT, totalQuestions: 100 }), "hundred")
        .unlocked
    ).toBe(true)
  })

  it("unlocks 'marathon' at a 30-question session (boundary)", () => {
    expect(
      badge(
        computeBadges({ ...ZERO_INPUT, largestSessionQuestions: 29 }),
        "marathon"
      ).unlocked
    ).toBe(false)
    expect(
      badge(
        computeBadges({ ...ZERO_INPUT, largestSessionQuestions: 30 }),
        "marathon"
      ).unlocked
    ).toBe(true)
  })

  it("unlocks 'error-reviewer' at 5 reviewed mistakes, not from tagged count", () => {
    // taggedMistakeCount is high but reviewed is below threshold -> locked.
    const tagged = computeBadges({
      ...ZERO_INPUT,
      taggedMistakeCount: 50,
      reviewedMistakeCount: 4,
    })
    expect(badge(tagged, "error-reviewer").unlocked).toBe(false)

    const reviewed = computeBadges({ ...ZERO_INPUT, reviewedMistakeCount: 5 })
    expect(badge(reviewed, "error-reviewer").unlocked).toBe(true)
  })

  it("unlocks boolean badges 'custom-test' and 'target-set' from flags", () => {
    const both = computeBadges({
      ...ZERO_INPUT,
      hasCustomTest: true,
      hasTarget: true,
    })
    expect(badge(both, "custom-test").unlocked).toBe(true)
    expect(badge(both, "target-set").unlocked).toBe(true)

    const neither = computeBadges(ZERO_INPUT)
    expect(badge(neither, "custom-test").unlocked).toBe(false)
    expect(badge(neither, "target-set").unlocked).toBe(false)
  })

  it("unlocks every badge when all thresholds are met", () => {
    const maxed: BadgeInput = {
      totalSessions: 5,
      totalQuestions: 200,
      lessonsCompleted: 8,
      longestStreak: 10,
      currentStreak: 10,
      taggedMistakeCount: 20,
      reviewedMistakeCount: 20,
      hasCustomTest: true,
      hasTarget: true,
      largestSessionQuestions: 40,
    }
    const badges = computeBadges(maxed)
    expect(badges.every((b) => b.unlocked === true)).toBe(true)
  })
})
