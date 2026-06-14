import { describe, it, expect } from "vitest"
import {
  resolveChapterAssignment,
  TEST_CAPS,
  DIRECT_BANK_CHAPTER,
  BANK_RULES,
  COMING_SOON_CHAPTERS,
  OMITTED_CHAPTERS,
} from "@/lib/practice-tests-map"
import { getAllChapters } from "@/lib/content"

describe("resolveChapterAssignment — DIRECT_BANK_CHAPTER (1:1 DI banks)", () => {
  it("routes a direct bank to its identical chapter slug, ignoring subtopic, never viaDefault", () => {
    expect(resolveChapterAssignment("data-sufficiency", "anything at all")).toEqual({
      chapter: "data-sufficiency",
      viaDefault: false,
    })
    expect(resolveChapterAssignment("multi-source-reasoning", "")).toEqual({
      chapter: "multi-source-reasoning",
      viaDefault: false,
    })
  })

  it("a direct bank wins even when an uppercase / unrelated subtopic is supplied", () => {
    // direct lookup is checked before lowercasing/keyword rules
    expect(resolveChapterAssignment("table-analysis", "WEAKEN prime ratio")).toEqual({
      chapter: "table-analysis",
      viaDefault: false,
    })
  })
})

describe("resolveChapterAssignment — BANK_RULES keyword routing", () => {
  it("matches the first keyword rule whose substring appears in the subtopic", () => {
    // arithmetic: "divisib" -> gcf-lcm chapter (rule 1), "remainder" -> primes (rule 2)
    expect(resolveChapterAssignment("arithmetic", "divisibility check")).toEqual({
      chapter: "quant-07-gcf-lcm-units-digits",
      viaDefault: false,
    })
    expect(resolveChapterAssignment("arithmetic", "remainder when divided")).toEqual({
      chapter: "quant-10-primes-remainders",
      viaDefault: false,
    })
  })

  it("is case-insensitive (subtopic is lowercased before matching)", () => {
    expect(resolveChapterAssignment("critical-reasoning", "WEAKEN the argument").chapter).toBe(
      "verbal-05-cr-weaken"
    )
    expect(resolveChapterAssignment("critical-reasoning", "Strengthen").chapter).toBe(
      "verbal-04-cr-strengthen"
    )
  })

  it("matches keywords as substrings, not whole words", () => {
    // "inequalit" is a stem that catches both "inequality" and "inequalities"
    expect(resolveChapterAssignment("algebra", "compound inequalities").chapter).toBe(
      "quant-15-inequalities-absolute-value"
    )
    expect(resolveChapterAssignment("algebra", "quadratic factoring").chapter).toBe(
      "quant-14-quadratics-factoring"
    )
  })

  it("respects rule ORDER: an earlier rule wins over a later one when both could match", () => {
    // combinatorics: "probability" (rule 1, probability) precedes "counting" (rule 4).
    // A subtopic containing both keywords resolves to the earlier rule's chapter.
    expect(
      resolveChapterAssignment("combinatorics", "counting with probability").chapter
    ).toBe("quant-27-probability")
  })

  it("number-properties parity routes to even-odd integer properties chapter", () => {
    expect(resolveChapterAssignment("number-properties", "parity of sum").chapter).toBe(
      "quant-08-even-odd-integer-properties"
    )
    expect(resolveChapterAssignment("number-properties", "prime factorization").chapter).toBe(
      "quant-10-primes-remainders"
    )
  })

  it("reading-comprehension subtype keywords route to their RC subtype chapters", () => {
    expect(resolveChapterAssignment("reading-comprehension", "main idea").chapter).toBe(
      "verbal-14-rc-main-idea"
    )
    expect(resolveChapterAssignment("reading-comprehension", "inference question").chapter).toBe(
      "verbal-16-rc-inference"
    )
  })
})

describe("resolveChapterAssignment — default rule + viaDefault flag", () => {
  it("falls through to the bank default and flags viaDefault=true when no keyword matches", () => {
    // arithmetic default (match: []) -> fractions-decimals
    expect(resolveChapterAssignment("arithmetic", "zxqwv nonsense tag")).toEqual({
      chapter: "quant-06-fractions-decimals",
      viaDefault: true,
    })
    // number-properties default -> divisibility-factors
    expect(resolveChapterAssignment("number-properties", "no keyword here")).toEqual({
      chapter: "quant-09-divisibility-factors",
      viaDefault: true,
    })
  })

  it("a matched keyword sets viaDefault=false even when its chapter equals the default chapter", () => {
    // number-properties: "divisib" matches rule 3 -> quant-09 (same chapter as the
    // default rule), but it matched explicitly, so viaDefault must be false.
    expect(resolveChapterAssignment("number-properties", "divisibility rule")).toEqual({
      chapter: "quant-09-divisibility-factors",
      viaDefault: false,
    })
  })
})

describe("resolveChapterAssignment — unknown banks / edge cases", () => {
  it("returns {chapter:null, viaDefault:false} for a bank that has no rules at all", () => {
    expect(resolveChapterAssignment("totally-unknown-bank", "main idea")).toEqual({
      chapter: null,
      viaDefault: false,
    })
  })

  it("an empty subtopic in a keyword bank still resolves via the default rule", () => {
    // empty string contains no keyword, but "" is a substring concern only for
    // rule.match keywords (all non-empty), so it falls through to default.
    expect(resolveChapterAssignment("exponents-roots", "")).toEqual({
      chapter: "quant-11-exponent-rules",
      viaDefault: true,
    })
  })

  it("exponents-roots routes 'radical' to roots-radicals, default to exponent-rules", () => {
    expect(resolveChapterAssignment("exponents-roots", "radical simplification").chapter).toBe(
      "quant-12-roots-radicals"
    )
  })
})

describe("TEST_CAPS / COMING_SOON / OMITTED sets", () => {
  it("TEST_CAPS holds the exact per-section caps for all three sections", () => {
    expect(TEST_CAPS).toEqual({ Quant: 15, Verbal: 8, DI: 8 })
  })

  it("COMING_SOON_CHAPTERS is currently empty (all RC subtypes are live)", () => {
    expect(COMING_SOON_CHAPTERS.size).toBe(0)
    expect(COMING_SOON_CHAPTERS.has("verbal-13-rc-reading-process")).toBe(false)
  })

  it("OMITTED_CHAPTERS contains method/foundations/timing/intro chapters and excludes real topic chapters", () => {
    expect(OMITTED_CHAPTERS.has("quant-01-backsolving")).toBe(true)
    // verbal-01-foundations now has a dedicated practice bank (verbal-foundations.md
    // via DIRECT_BANK_CHAPTER), so it is no longer omitted.
    expect(OMITTED_CHAPTERS.has("verbal-01-foundations")).toBe(false)
    expect(OMITTED_CHAPTERS.has("di-foundations")).toBe(true)
    expect(OMITTED_CHAPTERS.has("quant-30-timing")).toBe(true)
    // the welcome + section-intro chapters have no banks either
    expect(OMITTED_CHAPTERS.has("gmat-welcome")).toBe(true)
    expect(OMITTED_CHAPTERS.has("quant-section-intro")).toBe(true)
    expect(OMITTED_CHAPTERS.has("verbal-section-intro")).toBe(true)
    expect(OMITTED_CHAPTERS.has("di-section-intro")).toBe(true)
    // a real, practiceable topic chapter must NOT be omitted
    expect(OMITTED_CHAPTERS.has("quant-08-even-odd-integer-properties")).toBe(false)
    expect(OMITTED_CHAPTERS.has("data-sufficiency")).toBe(false)
    expect(OMITTED_CHAPTERS.size).toBe(12)
  })

  it("COMING_SOON and OMITTED sets are disjoint (no chapter is both)", () => {
    for (const slug of OMITTED_CHAPTERS) {
      expect(COMING_SOON_CHAPTERS.has(slug)).toBe(false)
    }
  })
})

describe("cross-check: every routed chapter slug corresponds to a real chapter", () => {
  const realSlugs = new Set(getAllChapters().map((c) => c.slug))

  it("getAllChapters() yields a non-empty slug set (sanity)", () => {
    expect(realSlugs.size).toBeGreaterThan(0)
  })

  it("every DIRECT_BANK_CHAPTER target slug is a real chapter", () => {
    for (const chapterSlug of Object.values(DIRECT_BANK_CHAPTER)) {
      expect(realSlugs.has(chapterSlug), `DIRECT_BANK_CHAPTER -> missing chapter ${chapterSlug}`).toBe(
        true
      )
    }
  })

  it("every BANK_RULES target chapter slug is a real chapter", () => {
    for (const [bank, rules] of Object.entries(BANK_RULES)) {
      for (const rule of rules) {
        expect(
          realSlugs.has(rule.chapter),
          `BANK_RULES[${bank}] -> missing chapter ${rule.chapter}`
        ).toBe(true)
      }
    }
  })

  it("every OMITTED chapter slug is a real chapter (stale-entry guard)", () => {
    for (const slug of OMITTED_CHAPTERS) {
      expect(realSlugs.has(slug), `OMITTED -> missing chapter ${slug}`).toBe(true)
    }
  })
})
