import { describe, it, expect } from "vitest"
import {
  getAllChapters,
  getPracticeChapterGroups,
  getChapterTest,
  parseChapterTestSlug,
  getQuestionsBySetSlug,
} from "@/lib/content"

const groups = getPracticeChapterGroups()

// Mirror of the server page's computation in chapters/[slug]/page.tsx — the
// slug the chapter "Practice" CTA links to (null => /practice hub fallback).
function ctaTestSlug(chapterSlug: string): string | null {
  return (
    groups.find((g) => g.chapterSlug === chapterSlug)?.tests[0]?.id ?? null
  )
}

describe("chapter -> practice routing (regression guard for the bare-section 404)", () => {
  it("NEVER builds a practice slug that 404s: every chapter resolves or falls back to /practice", () => {
    for (const ch of getAllChapters()) {
      const slug = ctaTestSlug(ch.slug)
      if (slug === null) continue // -> /practice hub, always valid
      // A non-null CTA slug MUST resolve to a real test (else the session
      // page calls notFound()). This is exactly the bug that shipped.
      expect(getChapterTest(slug), `unresolvable CTA slug for ${ch.slug}: ${slug}`).not.toBeNull()
    }
  })

  it("the old defective target (bare section name) does NOT resolve — both paths fail", () => {
    for (const bare of ["quant", "verbal", "di"]) {
      expect(getChapterTest(bare)).toBeNull()
      expect(parseChapterTestSlug(bare)).toBeNull()
      expect(getQuestionsBySetSlug(bare)).toHaveLength(0)
    }
  })

  it("the reported chapter (Functions & Sequences) now deep-links to a real test", () => {
    const slug = ctaTestSlug("quant-16-functions-sequences")
    expect(slug).toBe("ch-quant-16-functions-sequences-t1")
    expect(getChapterTest(slug!)).not.toBeNull()
  })

  it("method/foundations/timing chapters have no bank -> null -> /practice fallback", () => {
    for (const noBank of [
      "quant-01-backsolving",
      "verbal-01-foundations",
      "di-foundations",
      "quant-30-timing",
    ]) {
      expect(ctaTestSlug(noBank)).toBeNull()
    }
  })

  it("every test in every practice group is itself resolvable (no dangling tests)", () => {
    for (const g of groups) {
      for (const t of g.tests) {
        expect(getChapterTest(t.id), `dangling test ${t.id}`).not.toBeNull()
      }
    }
  })

  it("parseChapterTestSlug round-trips a valid chapter-test slug", () => {
    expect(parseChapterTestSlug("ch-quant-16-functions-sequences-t1")).toEqual({
      chapterSlug: "quant-16-functions-sequences",
      testIndex: 1,
    })
    expect(parseChapterTestSlug("ch-data-sufficiency-t2")).toEqual({
      chapterSlug: "data-sufficiency",
      testIndex: 2,
    })
    expect(parseChapterTestSlug("ch-foo-t0")).toBeNull()
    expect(parseChapterTestSlug("not-a-test-slug")).toBeNull()
  })
})
