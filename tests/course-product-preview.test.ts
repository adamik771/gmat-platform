import { readFileSync } from "node:fs"
import { Children, createElement, isValidElement, type ReactNode } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import CoursePage, { metadata } from "@/app/(marketing)/course/page"
import CourseSamples, { type CourseSample } from "@/app/(marketing)/course/CourseSamples"
import QuantSample from "@/app/(marketing)/sample-chapter/quant/page"
import VerbalSample from "@/app/(marketing)/sample-chapter/page"
import DISample from "@/app/(marketing)/sample-chapter/data-insights/page"
import { getAllChapters, getQuestionsByIds } from "@/lib/content"
import { getPublicInventory } from "@/components/marketing/content-inventory"

function findSamples(node: ReactNode): CourseSample[] {
  let result: CourseSample[] = []
  Children.forEach(node, (child) => {
    if (!isValidElement<{ children?: ReactNode; samples?: CourseSample[] }>(child)) return
    if (child.type === CourseSamples) result = child.props.samples ?? []
    else {
      const nested = findSamples(child.props.children)
      if (nested.length) result = nested
    }
  })
  return result
}

describe("course product preview", () => {
  it("keeps the full five-phase outline and all representative topic examples", () => {
    const html = renderToStaticMarkup(createElement(CoursePage))
    expect(metadata.alternates?.canonical).toBe("/course")
    expect(html.match(/<h1\b/g)).toHaveLength(1)
    expect(html.match(/<article\b/g)).toHaveLength(5)
    for (const title of ["Foundations first", "The strategy toolkit", "Core topics, three sections in rotation", "Advanced reasoning and answer traps", "Timing and mixed practice"]) {
      expect(html).toContain(title)
    }
    const curriculum = html.slice(html.indexOf('id="curriculum"'), html.indexOf('id="chapter-flow-title"'))
    expect(curriculum.match(/<li\b/g)).toHaveLength(23)
    expect(curriculum).not.toMatch(/Show \d+ more|aria-expanded/)
    expect(curriculum).toContain("Multi-Source Reasoning")
    expect(curriculum).toContain("Quant Timing and Pacing")
  })

  it("uses live inventory with explicit non-additive counts and existing conversion paths", () => {
    const html = renderToStaticMarkup(createElement(CoursePage))
    for (const value of Object.values(getPublicInventory())) {
      expect(html).toContain(`>${value.toLocaleString("en-US")}</dd>`)
    }
    expect(html).toContain("not extra interactive chapters")
    expect(html).toContain("not an additional set of chapter-test questions")
    for (const href of ["#lesson-preview", "#curriculum", "/chapters", "/signup", "/study-schedule", "/pricing"]) {
      expect(html).toContain(`href="${href}"`)
    }
    expect(html).toContain("Start 7-day trial")
  })

  it("reuses only already-public questions, including their full text and original answer keys", () => {
    const samples = findSamples(CoursePage())
    expect(samples.map((sample) => sample.id)).toEqual(["quant", "verbal", "di"])
    const publicPages = [QuantSample, VerbalSample, DISample]
    samples.forEach((sample, index) => {
      const config = publicPages[index]().props
      const chapter = getAllChapters().find((item) => item.slug === config.chapterSlug)!
      const allowed = getQuestionsByIds(chapter.sections
        .filter((section) => config.publicSectionIds.includes(section.id))
        .flatMap((section) => section.checkQuestionIds))
      if (!isValidElement<{ prompt: ReactNode; options: ReactNode[]; correctAnswer: number; explanation: ReactNode }>(sample.question)) {
        throw new Error(`Missing question for ${sample.id}`)
      }
      const question = allowed.find((item) => item.id === sample.question.key)!
      expect(question).toBeDefined()
      expect(sample.question.props.correctAnswer).toBe(question.correctAnswer)
      expect(sample.question.props.options).toHaveLength(question.options.length)
      sample.question.props.options.forEach((option, optionIndex) => {
        expect(isValidElement<{ children: string }>(option) && option.props.children).toBe(question.options[optionIndex])
      })
      const explanation = sample.question.props.explanation
      expect(isValidElement<{ children: string }>(explanation) && explanation.props.children).toBe(question.explanation)
      const prompt = sample.question.props.prompt
      if (!isValidElement<{ children: ReactNode[] }>(prompt)) throw new Error("Missing prompt")
      const [context, stem] = prompt.props.children
      expect(isValidElement<{ children: string }>(stem) && stem.props.children).toBe(question.prompt)
      if (question.context) expect(isValidElement<{ children: string }>(context) && context.props.children).toBe(question.context)
    })
  })

  it("mounts only one unanswered question with no result or duplicate form IDs", () => {
    const html = renderToStaticMarkup(createElement(CoursePage))
    expect(html.match(/role="tab"/g)).toHaveLength(3)
    expect(html.match(/id="sample-question"/g)).toHaveLength(1)
    expect(html.match(/id="sample-question-title"/g)).toHaveLength(1)
    expect(html.match(/type="radio"/g)).toHaveLength(5)
    expect(html).not.toMatch(/role="status"|type="radio"[^>]*checked/)
    expect(html).toMatch(/<button[^>]*disabled=""[^>]*>Check answer/)
    expect(html).toContain("This answer is not saved to your study history.")
  })

  it("keeps the course presentation scoped and the real lesson asset dimensioned", () => {
    const css = readFileSync("src/app/(marketing)/course/Course.module.css", "utf8")
    expect(css).not.toMatch(/:global\((?:body|html|\.app-workbench)/)
    expect(css).not.toMatch(/font-size:\s*[^;]*vw/)
    const html = renderToStaticMarkup(createElement(CoursePage))
    expect(html).toMatch(/<img[^>]*width="760"[^>]*height="570"/)
    expect(html).toContain("From the public Quant sample.")
  })
})
