import { describe, it, expect } from "vitest"
import { buildWeeklyCadence, pickNextChapters } from "@/lib/study-plan-engine"
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
    setSlug: opts.setSlug ?? null,
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

// Guided-path reading queue entries (the deprecated lessons library is gone
// from the cadence — readings are chapter reads).
const reading = (slug: string, title: string) => ({ slug, title })

const types = (days: DailySuggestion[]) => days.map((d) => d.type)

describe("buildWeeklyCadence — shape & length", () => {
  it("always returns exactly 7 days regardless of input richness", () => {
    expect(buildWeeklyCadence(plan(), []).length).toBe(7)
    expect(
      buildWeeklyCadence(
        plan({ reviewDueCount: 12, weakAreas: [weakArea("Algebra", "algebra")] }),
        [reading("a", "A"), reading("b", "B")],
      ).length,
    ).toBe(7)
  })

  it("every day is a well-formed DailySuggestion (valid type, label, href)", () => {
    const days = buildWeeklyCadence(
      plan({ reviewDueCount: 5, weakAreas: [weakArea("Geometry", "geometry")] }),
      [reading("frac", "Fractions")],
    )
    const validTypes = new Set(["practice", "review", "chapter", "mock"])
    for (const d of days) {
      expect(validTypes.has(d.type)).toBe(true)
      expect(typeof d.label).toBe("string")
      expect(d.label.length).toBeGreaterThan(0)
      expect(d.href.startsWith("/")).toBe(true)
    }
  })

  it("never emits a /lessons/ link (the lessons library is deprecated)", () => {
    const days = buildWeeklyCadence(
      plan({ reviewDueCount: 3, weakAreas: [weakArea("Algebra", "algebra")] }),
      [reading("quant-05-order-and-signed-numbers", "Order of Operations")],
    )
    for (const d of days) {
      expect(d.href.startsWith("/lessons")).toBe(false)
    }
  })
})

describe("buildWeeklyCadence — pool composition reacts to inputs", () => {
  it("empty plan with no readings => all 7 days fall through to practice", () => {
    const days = buildWeeklyCadence(plan(), [])
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

  it("low weekly hours put the weak-area chapter FIRST in the rotation", () => {
    const p = plan({
      reviewDueCount: 3,
      weakAreas: [weakArea("Algebra", "algebra")],
    })
    // Without hours (or medium hours) review leads; at a low-hours target the
    // scarce first day goes to the weakest area instead.
    expect(buildWeeklyCadence(p, [])[0].type).toBe("review")
    expect(buildWeeklyCadence(p, [], 10)[0].type).toBe("review")
    const low = buildWeeklyCadence(p, [], 4)
    expect(low[0].type).toBe("chapter")
    expect(low[0].href).toBe("/chapters/algebra")
  })

  it("high weekly hours reserve the last day as a light review/rest day", () => {
    const high = buildWeeklyCadence(plan(), [], 20)
    expect(high.length).toBe(7)
    expect(high[6]).toEqual({
      type: "review",
      label: "Light review + rest",
      href: "/review",
    })
    // Medium hours leave the seventh day alone.
    expect(buildWeeklyCadence(plan(), [], 10)[6].type).toBe("practice")
  })

  it("readings in the queue surface as chapter days with /chapters/<slug> hrefs", () => {
    const days = buildWeeklyCadence(plan(), [
      reading("quant-18-ratios-proportions", "Ratios & Proportions"),
    ])
    const r = days.find((d) => d.type === "chapter")!
    expect(r).toBeDefined()
    expect(r.label).toBe("Ratios & Proportions")
    expect(r.href).toBe("/chapters/quant-18-ratios-proportions")
  })
})

describe("buildWeeklyCadence — cycling order & queue consumption", () => {
  it("orders the pool review -> weak-chapter -> reading -> practice, then cycles", () => {
    // pool = ["review","chapter","reading","practice"]; 7 days => pool[i % 4]:
    // review, weak, reading, practice, review, weak, reading.
    // Weak-chapter days and reading days both render as type "chapter" —
    // distinguish them by href.
    const days = buildWeeklyCadence(
      plan({
        reviewDueCount: 4,
        weakAreas: [weakArea("W1", "w1-slug"), weakArea("W2", "w2-slug")],
      }),
      [reading("r1", "R1"), reading("r2", "R2")],
    )
    expect(types(days)).toEqual([
      "review",
      "chapter",
      "chapter",
      "practice",
      "review",
      "chapter",
      "chapter",
    ])
    expect(days.map((d) => d.href)).toEqual([
      "/review",
      "/chapters/w1-slug",
      "/chapters/r1",
      "/practice",
      "/review",
      "/chapters/w2-slug",
      "/chapters/r2",
    ])
  })

  it("a single weak chapter is consumed once; later weak slots fall back to practice", () => {
    // pool = ["chapter","reading","practice"] (no review). pool[i % 3]:
    // weak, reading, practice, weak, reading, practice, weak.
    // One weak area + one reading -> later weak/reading slots degrade.
    const days = buildWeeklyCadence(
      plan({ weakAreas: [weakArea("Algebra", "algebra")] }),
      [reading("r1", "R1")],
    )
    expect(types(days)).toEqual([
      "chapter", // weak: Algebra
      "chapter", // reading: R1
      "practice",
      "practice", // weak queue empty -> fallback
      "practice", // reading queue empty -> fallback
      "practice",
      "practice", // weak queue empty -> fallback
    ])
    const chapters = days.filter((d) => d.type === "chapter")
    expect(chapters.map((d) => d.href)).toEqual([
      "/chapters/algebra",
      "/chapters/r1",
    ])
  })

  it("distinct weak chapters are consumed in order (FIFO via shift)", () => {
    const days = buildWeeklyCadence(
      plan({
        weakAreas: [weakArea("First", "first"), weakArea("Second", "second")],
      }),
      [],
    )
    const chapterDays = days.filter((d) => d.type === "chapter")
    expect(chapterDays.map((d) => d.label)).toEqual(["First", "Second"])
  })

  it("readings are consumed FIFO and a depleted reading queue degrades to practice", () => {
    // pool = ["reading","practice"]; reading slots at i=0,2,4,6 -> 4 slots, 2 readings.
    const days = buildWeeklyCadence(plan(), [
      reading("a", "Alpha"),
      reading("b", "Beta"),
    ])
    const readingDays = days.filter((d) => d.type === "chapter")
    expect(readingDays.map((d) => d.label)).toEqual(["Alpha", "Beta"])
    expect(readingDays.map((d) => d.href)).toEqual(["/chapters/a", "/chapters/b"])
    // 4 reading slots, only 2 readings -> remaining 2 slots become practice.
    // total practice = 3 (i=1,3,5) + 2 degraded = 5
    expect(days.filter((d) => d.type === "practice")).toHaveLength(5)
  })
})

describe("buildWeeklyCadence — output varies with inputs (not a fixed rotation)", () => {
  it("differs between a review-heavy plan and an empty plan", () => {
    const heavy = buildWeeklyCadence(
      plan({ reviewDueCount: 20, weakAreas: [weakArea("X", "x")] }),
      [reading("r", "Reading")],
    )
    const empty = buildWeeklyCadence(plan(), [])
    expect(types(heavy)).not.toEqual(types(empty))
  })

  it("review count below the urgent threshold changes only labels, not the type pattern", () => {
    const a = buildWeeklyCadence(plan({ reviewDueCount: 5 }), [])
    const b = buildWeeklyCadence(plan({ reviewDueCount: 9 }), [])
    expect(types(a)).toEqual(types(b))
    const la = a.find((d) => d.type === "review")!.label
    const lb = b.find((d) => d.type === "review")!.label
    expect(la).toBe("Review 5 due")
    expect(lb).toBe("Review 9 due")
    expect(la).not.toBe(lb)
  })

  it("an urgent review backlog (>= 10 due) earns a second weekly review slot", () => {
    const readings = [reading("r1", "R1"), reading("r2", "R2")]
    const calm = buildWeeklyCadence(
      plan({ reviewDueCount: 5, weakAreas: [weakArea("W", "w")] }),
      readings
    )
    const urgent = buildWeeklyCadence(
      plan({ reviewDueCount: 25, weakAreas: [weakArea("W", "w")] }),
      readings
    )
    const reviewDays = (days: typeof calm) =>
      days.filter((d) => d.type === "review").length
    expect(reviewDays(urgent)).toBeGreaterThan(reviewDays(calm))
  })

  it("full pool (review + weak chapter + reading + practice) yields review, chapter, and practice days", () => {
    const days = buildWeeklyCadence(
      plan({
        reviewDueCount: 9,
        weakAreas: [weakArea("W", "w"), weakArea("W2", "w2")],
      }),
      [reading("r1", "R1"), reading("r2", "R2")],
    )
    const present = new Set(types(days))
    expect(present.has("review")).toBe(true)
    expect(present.has("chapter")).toBe(true)
    expect(present.has("practice")).toBe(true)
    // Both flavors of chapter day appear: weak-area chapters AND readings.
    const hrefs = days.map((d) => d.href)
    expect(hrefs).toContain("/chapters/w")
    expect(hrefs).toContain("/chapters/r1")
  })
})

describe("pickNextChapters — recency-aware recommendation", () => {
  type Ch = { slug: string; read: boolean; engaged: boolean }
  const ch = (slug: string, read: boolean, engaged: boolean): Ch => ({ slug, read, engaged })
  const run = (chapters: Ch[]) =>
    pickNextChapters(
      chapters,
      (c) => c.read,
      (c) => c.engaged,
    )
  const slugs = (cs: Ch[]) => cs.map((c) => c.slug)

  it("brand-new student (no engagement) gets chapter 1 as next", () => {
    const r = run([ch("a", false, false), ch("b", false, false), ch("c", false, false)])
    expect(r.nextUp?.slug).toBe("a")
    expect(slugs(r.upcoming)).toEqual(["a", "b", "c"])
    expect(r.skippedEarlier).toEqual([])
  })

  it("the Mikayel case: an early chapter left 1 section short no longer pins as next", () => {
    // a = "Welcome" (engaged but not fully read), b/c read, d/e untouched.
    const r = run([
      ch("welcome", false, true),
      ch("b", true, true),
      ch("c", true, true),
      ch("d", false, false),
      ch("e", false, false),
    ])
    expect(r.nextUp?.slug).toBe("d") // forward from furthest engaged (c), NOT welcome
    expect(slugs(r.upcoming)).toEqual(["d", "e"])
    expect(slugs(r.skippedEarlier)).toEqual(["welcome"]) // not lost, just deprioritized
    // welcome still appears in the cadence queue — after the forward work.
    expect(slugs(r.readingQueue)).toEqual(["d", "e", "welcome"])
  })

  it("continues the furthest chapter when it is itself incomplete", () => {
    const r = run([ch("a", true, true), ch("b", false, true), ch("c", false, false)])
    expect(r.nextUp?.slug).toBe("b") // continue b, the furthest engaged + incomplete
  })

  it("falls back to a skipped-earlier chapter when everything forward is done", () => {
    // skipped a; engaged + read b and c; nothing forward left.
    const r = run([ch("a", false, false), ch("b", true, true), ch("c", true, true)])
    expect(r.nextUp?.slug).toBe("a")
    expect(slugs(r.skippedEarlier)).toEqual(["a"])
  })

  it("returns null next when every chapter is read", () => {
    const r = run([ch("a", true, true), ch("b", true, true)])
    expect(r.nextUp).toBeNull()
    expect(r.upcoming).toEqual([])
  })
})
