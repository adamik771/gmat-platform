import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { describe, it, expect } from "vitest"
import { getAllChapters } from "@/lib/content"

/**
 * Guardrail: every hardcoded `/chapters/<slug>` link in the authenticated
 * app must point at a chapter that actually exists. Two persona-path CTAs
 * shipped with invented slugs (`data-sufficiency`,
 * `multi-source-reasoning`) and 404'd for every student who clicked them.
 */
function tsxFiles(dir: string): string[] {
  const acc: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) acc.push(...tsxFiles(p))
    else if (/\.(ts|tsx)$/.test(entry.name)) acc.push(p)
  }
  return acc
}

describe("hardcoded chapter links", () => {
  it("every /chapters/<slug> literal resolves to a real chapter", () => {
    const validSlugs = new Set(getAllChapters().map((c) => c.slug))
    const re = /["'`]\/chapters\/([a-z0-9-]+)/g
    const offenders: string[] = []
    for (const file of tsxFiles("src/app/(app)")) {
      const code = readFileSync(file, "utf8")
      for (const m of code.matchAll(re)) {
        const slug = m[1]
        if (!validSlugs.has(slug)) {
          offenders.push(
            `${file.split(`${process.cwd()}/`).pop()}: /chapters/${slug}`
          )
        }
      }
    }
    expect(
      offenders,
      `These links 404 — no such chapter slug:\n  ${offenders.join("\n  ")}`
    ).toEqual([])
  })
})
