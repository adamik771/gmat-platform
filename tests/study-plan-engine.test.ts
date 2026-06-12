import { describe, it, expect } from "vitest"
import { buildWeeklyCadence } from "@/lib/study-plan-engine"
import type {
  StudyPlanOutput,
  WeakArea,
  DailySuggestion,
} from "@/lib/study-plan-engine"
import type { Section } from "@/types"

// --- fixture builders, constructed straight from the exported interfaces ---

function weakArea(
  topic: string,
  chapterSlug: string | null,
  opts: Partial<WeakArea> = {},
): WeakArea {
  return {
    topic,
    section: (opts.section ?? "Quant") as Section,
    accuracy: opts.accuracy ?? 0.5,
    attempts: opts.attempts ?? 10,
    chapterSlug,
    errorPattern: opts.errorPattern ?? "mixed",
  }
}

function plan(opts: Partial<StudyPlanOutput> = {}): StudyPlanOutput {
  return {
    todaysFocus: opts.todaysFocus ?? [],
    weakAreas: opts.weakAreas ?? [],
    reviewDueCount: opts.reviewDueCount ?? 0,
  }
}

const lesson = (slug: string, title: string, module = 1) => ({
  slug,
  title,
  module,
})

const types = (days: DailySuggestion[]) => days.map((d) => d.type)

describe("buildWeeklyCadence — shape & length", () => {
  it("always returns exactly 7 days regardless of input richness", () => {
    expect(buildWeeklyCadence(plan(), []).length).toBe(7)
    expect(
      buildWeeklyCadence(
        plan({ reviewDueCount: 12, weakAreas: [weakArea("Algebra", "algebra")] }),
        [lesson("a", "A"), lesson("b", "B")],
      ).length,
    ).toBe(7)
  })

  it("every day is a well-formed DailySuggestion (valid type, label, href)", () => {
    const days = buildWeeklyCadence(
      plan({ reviewDueCount: 5, weakAreas: [weakArea("Geometry", "geometry")] }),
      [lesson("frac", "Fractions")],
    )
    const validTypes = new Set([
      "lesson",
      "practice",
      "review",
      "chapter",
      "mock",
    ])
    for (const d of days) {
      expect(validTypes.has(d.type)).toBe(true)
      expect(typeof d.label).toBe("string")
      expect(d.label.length).toBeGreaterThan(0)
      expect(d.href.startsWith("/")).toBe(true)
    }
  })
})

describe("buildWeeklyCadence — pool composition reacts to inputs", () => {
  it("empty plan with no lessons => pool is [lesson, practice]; with no lessons all 7 are practice", () => {
    const days = buildWeeklyCadence(plan(), [])
    // pool = ["lesson","practice"]; lesson has no queue -> falls through to practice
    expect(types(days)).toEqual(Array(7).fill("practice"))
    expect(days.every((d) => d.href === "/practice")).toBe(true)
  })

  it("review present (count>0) injects review into the cycle; absent it does not", () => {
    const withReview = buildWeeklyCadence(plan({ reviewDueCount: 1 }), [])
    expect(withReview.some((d) => d.type === "review")).toBe(true)

    const withoutReview = buildWeeklyCadence(plan({ reviewDueCount: 0 }), [])
    expect(withoutReview.some((d) => d.type === "review")).toBe(false)
  })

  it("review label/href reflect the live due-count and route to /review", () => {
    const days = buildWeeklyCadence(plan({ reviewDueCount: 14 }), [])
    const r = days.find((d) => d.type === "review")!
    expect(r).toBeDefined()
    expect(r.label).toBe("Review 14 due")
    expect(r.href).toBe("/review")
  })

  it("weak areas WITH a chapterSlug inject chapter days; chapter href/label come from the weak area", () => {
    const days = buildWeeklyCadence(
      plan({ weakAreas: [weakArea("Number Properties", "number-properties")] }),
      [],
    )
    const chapter = days.find((d) => d.type === "chapter")!
    expect(chapter).toBeDefined()
    expect(chapter.label).toBe("Number Properties")
    expect(chapter.href).toBe("/chapters/number-properties")
  })

  it("weak areas with NULL chapterSlug are filtered out — no chapter days", () => {
    const days = buildWeeklyCadence(
      plan({ weakAreas: [weakArea("Some Topic", null)] }),
      [],
    )
    expect(days.some((d) => d.type === "chapter")).toBe(false)
  })

  it("lessons in the queue surface as lesson days with /lessons/<slug> hrefs", () => {
    const days = buildWeeklyCadence(plan(), [lesson("ratios", "Ratios & Proportions")])
    const l = days.find((d) => d.type === "lesson")!
    expect(l).toBeDefined()
    expect(l.label).toBe("Ratios & Proportions")
    expect(l.href).toBe("/lessons/ratios")
  })
})

describe("buildWeeklyCadence — cycling order & queue consumption", () => {
  it("orders the pool review -> chapter -> lesson -> practice, then cycles", () => {
    // pool = ["review","chapter","lesson","practice"]; 7 days => indices 0..6
    // map to pool[i % 4]: review,chapter,lesson,practice,review,chapter,lesson
    const days = buildWeeklyCadence(
      plan({
        reviewDueCount: 4,
        weakAreas: [
          weakArea("W1", "w1-slug"),
          weakArea("W2", "w2-slug"),
        ],
      }),
      [lesson("l1", "L1"), lesson("l2", "L2")],
    )
    expect(types(days)).toEqual([
      "review",
      "chapter",
      "lesson",
      "practice",
      "review",
      "chapter",
      "lesson",
    ])
  })

  it("a single weak chapter is consumed once; later chapter slots fall back to practice", () => {
    // pool = ["chapter","lesson","practice"] (no review). i%3:
    // chapter,lesson,practice,chapter,lesson,practice,chapter
    // only ONE weak chapter -> 1st chapter slot uses it, the 4th & 7th fall through.
    const days = buildWeeklyCadence(
      plan({ weakAreas: [weakArea("Algebra", "algebra")] }),
      [lesson("l1", "L1")],
    )
    expect(types(days)).toEqual([
      "chapter",
      "lesson",
      "practice",
      "practice", // chapter queue empty -> fallback
      "practice", // lesson queue empty -> fallback
      "practice",
      "practice", // chapter queue empty -> fallback
    ])
    // exactly one real chapter day, using the single weak area
    const chapters = days.filter((d) => d.type === "chapter")
    expect(chapters).toHaveLength(1)
    expect(chapters[0].href).toBe("/chapters/algebra")
  })

  it("distinct weak chapters are consumed in order (FIFO via shift)", () => {
    const days = buildWeeklyCadence(
      plan({
        weakAreas: [
          weakArea("First", "first"),
          weakArea("Second", "second"),
        ],
      }),
      [],
    )
    // pool = ["chapter","lesson","practice"]; chapter slots at i=0 and i=3.
    const chapterDays = days.filter((d) => d.type === "chapter")
    expect(chapterDays.map((d) => d.label)).toEqual(["First", "Second"])
  })

  it("lessons are consumed FIFO and a depleted lesson queue degrades to practice", () => {
    // pool = ["lesson","practice"]; lesson slots at i=0,2,4,6 -> 4 slots, 2 lessons.
    const days = buildWeeklyCadence(
      plan(),
      [lesson("a", "Alpha"), lesson("b", "Beta")],
    )
    const lessonDays = days.filter((d) => d.type === "lesson")
    expect(lessonDays.map((d) => d.label)).toEqual(["Alpha", "Beta"])
    // 4 lesson slots, only 2 lessons -> remaining 2 lesson-slots become practice.
    // total practice = 3 (i=1,3,5) + 2 degraded = 5
    expect(days.filter((d) => d.type === "practice")).toHaveLength(5)
  })
})

describe("buildWeeklyCadence — output varies with inputs (not a fixed rotation)", () => {
  it("differs between a review-heavy plan and an empty plan", () => {
    const heavy = buildWeeklyCadence(
      plan({ reviewDueCount: 20, weakAreas: [weakArea("X", "x")] }),
      [lesson("l", "Lesson")],
    )
    const empty = buildWeeklyCadence(plan(), [])
    expect(types(heavy)).not.toEqual(types(empty))
  })

  it("review count changes only labels, not the type pattern, for same structure", () => {
    const a = buildWeeklyCadence(plan({ reviewDueCount: 5 }), [])
    const b = buildWeeklyCadence(plan({ reviewDueCount: 25 }), [])
    // same pool shape -> same type sequence
    expect(types(a)).toEqual(types(b))
    // but the review labels differ with the count (proves count flows through)
    const la = a.find((d) => d.type === "review")!.label
    const lb = b.find((d) => d.type === "review")!.label
    expect(la).toBe("Review 5 due")
    expect(lb).toBe("Review 25 due")
    expect(la).not.toBe(lb)
  })

  it("full pool (review+chapter+lesson+practice) yields all four types within the week", () => {
    const days = buildWeeklyCadence(
      plan({
        reviewDueCount: 9,
        weakAreas: [weakArea("W", "w"), weakArea("W2", "w2")],
      }),
      [lesson("l1", "L1"), lesson("l2", "L2")],
    )
    const present = new Set(types(days))
    expect(present.has("review")).toBe(true)
    expect(present.has("chapter")).toBe(true)
    expect(present.has("lesson")).toBe(true)
    expect(present.has("practice")).toBe(true)
  })
})
