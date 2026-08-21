import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { ALL_GRADUATE_PROGRAMS } from "@/lib/graduate-programs"

function read(relativePath: string) {
  return readFileSync(resolve(relativePath), "utf8")
}

describe("graduate programme score explorer", () => {
  it("covers MBA, MiM, and finance master's programmes", () => {
    const types = new Set(ALL_GRADUATE_PROGRAMS.map((program) => program.programType))

    expect(types).toEqual(new Set(["MBA", "MiM", "Finance master's"]))
    expect(
      ALL_GRADUATE_PROGRAMS.filter(
        (program) => program.programType === "Finance master's",
      ).length,
    ).toBeGreaterThanOrEqual(4)
    expect(
      ALL_GRADUATE_PROGRAMS.filter((program) => program.programType === "MiM").length,
    ).toBeGreaterThanOrEqual(3)
  })

  it("requires official sources for every added business master's record", () => {
    const businessMasters = ALL_GRADUATE_PROGRAMS.filter(
      (program) => program.programType !== "MBA",
    )

    for (const program of businessMasters) {
      expect(program.sourceLabel).toBeTruthy()
      expect(program.sourceUrl).toMatch(/^https:\/\//)
      expect(program.testPolicy.length).toBeGreaterThan(20)
      if (program.legacyScore != null) {
        expect(program.focusEquivalent).toBeTruthy()
      }
    }
  })

  it("does not fabricate HSG class scores", () => {
    const hsgPrograms = ALL_GRADUATE_PROGRAMS.filter((program) =>
      program.schoolName.includes("St.Gallen"),
    )

    expect(hsgPrograms).toHaveLength(2)
    for (const program of hsgPrograms) {
      expect(program.legacyScore).toBeNull()
      expect(program.focusEquivalent).toBeNull()
      expect(program.scoreStatistic).toBe("Not published")
    }
    expect(hsgPrograms.find((program) => program.slug.includes("banking"))?.testPolicy).toContain(
      "30%",
    )
    expect(hsgPrograms.find((program) => program.slug.includes("strategy"))?.testPolicy).toContain(
      "20%",
    )
  })

  it("uses programme-level language on the public page", () => {
    const client = read(
      "src/app/(marketing)/score-by-school/ScoreBySchoolClient.tsx",
    )
    const page = read("src/app/(marketing)/score-by-school/page.tsx")
    const combined = `${client}\n${page}`

    expect(combined).toContain("MBA, MiM, and finance master")
    expect(combined).toContain("my target programme?")
    expect(combined).not.toContain("Median GMAT scores for 20+ top MBA programs")
    expect(combined).not.toContain("maps to roughly the 80th percentile")
  })
})

