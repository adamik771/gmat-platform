import { createElement, Fragment, type ReactNode } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import { getChapterBySlug } from "@/lib/content"
import QuantSample from "@/app/(marketing)/sample-chapter/quant/page"
import VerbalSample from "@/app/(marketing)/sample-chapter/page"
import DiSample from "@/app/(marketing)/sample-chapter/data-insights/page"
import PracticeSamples from "@/app/(marketing)/gmat-practice-questions-free/page"

// Isolate the real practice questions from unrelated marketing forms/tracking.
vi.mock("@/components/marketing/AcquisitionLanding", () => ({
  default: ({ afterHero }: { afterHero: ReactNode }) => createElement(Fragment, null, afterHero),
}))

function reading(slug: string, sectionId: string) {
  const section = getChapterBySlug(slug)?.sections.find((entry) => entry.id === sectionId)
  expect(section, `${slug}/${sectionId}`).toBeDefined()
  return section!.body
}

describe("public sample teaching corrections", () => {
  it("keeps the Quant example correct and explains the direction before eliminating choices", () => {
    const choices = [2, 4, 6, 8, 10]
    const gap = (x: number) => (3 * x - 4) / 5 - (x - 4)
    expect(choices.filter((x) => gap(x) === 0)).toEqual([8])
    expect(gap(6)).toBeCloseTo(0.8)
    expect(gap(7) - gap(6)).toBeCloseTo(-0.4)
    const body = reading("quant-13-linear-equations-systems", "linear-equations-one-unknown")
    expect(body).toContain("Sorted choices alone do not establish that relationship")
    expect(body).toContain("eliminate A, B and C and test the larger choices")
    expect(body).not.toContain("C is too large for balance")
    expect(body).not.toContain("at most two tests")
    expect(body).toContain("divide both sides by a if a is nonzero")
    expect(body).toContain("when b is nonzero, there is no solution")
  })

  it("renders the corrected Quant text through the actual public chapter route", () => {
    const html = renderToStaticMarkup(createElement(QuantSample))
    expect(html).toContain("Sorted choices alone do not establish that relationship")
    expect(html).toContain("The left side exceeds the right by 0.8")
    expect(html).toContain("replacing a child ticket with an adult ticket increases revenue by $4")
    expect(html).toContain("Answer: D.")
    expect(html).toContain("Try a question")
  })

  it("renders Verbal without teaching a false choice between meaning and structure", () => {
    const html = renderToStaticMarkup(createElement(VerbalSample))
    expect(html).not.toContain("Reading on the GMAT is not about comprehension")
    expect(html).not.toContain("exactly two kinds of sentences")
    expect(html).not.toContain("structure beats content")
    expect(html).not.toContain("function first, content second")
    expect(html).toContain("Concessions:")
    expect(html).toContain("definitions")
    expect(html).toContain("loyalty program")
    expect(html).toContain("not a direct measurement of air quality")
    expect(html).toContain("An unrelated change downtown would do neither")
    expect(html).toContain("Try a question")
  })

  it("keeps the full Verbal lesson consistent about assumptions and because", () => {
    const body = reading("verbal-01-foundations", "argument-anatomy")
    expect(body).toContain('the reason follows "because."')
    expect(body).toContain("support relationship, not sentence order alone")
    expect(body).toContain("A fact can strengthen an argument without being necessary to it")
    expect(body).not.toContain("only the evidence-then-conclusion ordering")
    expect(body).not.toContain("Every one is just a different operation performed on the same bridge")
  })

  it("renders the combined-statement branch without a timing or guessing guarantee", () => {
    const html = renderToStaticMarkup(createElement(DiSample))
    expect(html).toContain("If neither is sufficient alone, test them together")
    expect(html).toContain("sufficient together means C; insufficient together means E")
    expect(html).toContain("without importing anything from the other statement")
    expect(html).not.toContain("eliminates guessing")
    expect(html).not.toContain("two binary tests")
    expect(html).not.toContain("every DS question in under 2 minutes")
    expect(html).not.toContain("20+ seconds per question")
  })

  it("keeps a value question distinct from a yes/no question in the full DI lesson", () => {
    const possibleValues = [2, 3]
    expect(new Set(possibleValues).size).toBe(2)
    expect(new Set(possibleValues.map((x) => x === 7))).toEqual(new Set([false]))
    const body = reading("data-sufficiency", "value-vs-yes-no")
    expect(body).toContain("A statement allowing x to be either 2 or 3")
    expect(body).toContain("leaves the first question unresolved")
    expect(body).not.toContain('The "yes/no rephrase" trick')
  })

  it("preserves the public practice keys and closed answer reveals", () => {
    const html = renderToStaticMarkup(createElement(PracticeSamples))
    expect(html.match(/Answer: ([A-E])/g)).toEqual(["Answer: C", "Answer: B", "Answer: A"])
    expect(html.match(/<details\b/g)).toHaveLength(3)
    expect(html).not.toMatch(/<details[^>]*\bopen(?:[= >])/)
    expect(html).toContain("without proving it")
    expect(html).toContain("Test statement (2) separately, without using statement (1)")
    expect(html).not.toContain("C actively weakens")
    expect(html).not.toContain("must rule out the biggest alternative")
    expect(html).toContain("$80")
    expect(html).toContain("15%")
    expect(html).toContain("$68")
    expect(html).toContain("3x + 7 = 22")
    expect(80 * (1 - 0.15)).toBe(68)
    expect((22 - 7) / 3).toBe(5)
  })

  it.each([
    ["quant-13-linear-equations-systems", ["linear-equations-one-unknown", "systems-of-equations"], ["algebra-q110", "algebra-q4", "algebra-q15"], [2, 2]],
    ["verbal-01-foundations", ["how-verbal-works", "active-reading"], ["reading-comprehension-q2"], [4, 2]],
    ["data-sufficiency", ["the-five-answer-framework", "rephrasing-the-question"], ["data-sufficiency-q3", "data-sufficiency-q6", "data-sufficiency-q21"], [13, 21, 11]],
  ] as const)("preserves sample sections, practice pins and graded-set sizes for %s", (slug, sections, questionIds, counts) => {
    const chapter = getChapterBySlug(slug)!
    const publicReadings = chapter.sections.filter((section) => (sections as readonly string[]).includes(section.id))
    expect(publicReadings.map((section) => section.id)).toEqual(sections)
    expect(publicReadings.flatMap((section) => section.checkQuestionIds)).toEqual(questionIds)
    expect(publicReadings.every((section) => section.body.length > 1000)).toBe(true)
    expect(chapter.problemSets.map((set) => set.questionIds.length)).toEqual(counts)
    expect(chapter.sections.at(-1)?.type).toBe("summary")
  })
})
