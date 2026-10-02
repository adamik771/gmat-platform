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
    ).toBeGreaterThanOrEqual(13)
    expect(
      ALL_GRADUATE_PROGRAMS.filter((program) => program.programType === "MiM").length,
    ).toBeGreaterThanOrEqual(3)
  })

  it("distinguishes published current-GMAT figures from concordance estimates", () => {
    const esade = ALL_GRADUATE_PROGRAMS.find(
      (program) => program.slug === "esade-global-masters-finance",
    )
    const oxford = ALL_GRADUATE_PROGRAMS.find(
      (program) => program.slug === "oxford-msc-financial-economics",
    )

    expect(esade?.focusEquivalent).toBe("615")
    expect(esade?.focusScoreLabel).toContain("School-published")
    expect(oxford?.focusScoreLabel).toContain("concordance")
  })

  it("does not round aggregate old-GMAT statistics to a single score tick", () => {
    const bySlug = new Map(
      ALL_GRADUATE_PROGRAMS.map((program) => [program.slug, program]),
    )

    expect(bySlug.get("oxford-msc-financial-economics")?.focusEquivalent).toBe(
      "685-715",
    )
    expect(bySlug.get("hec-master-international-finance")?.focusEquivalent).toBe(
      "655-675",
    )
    expect(bySlug.get("lbs-masters-financial-analysis")?.focusEquivalent).toBe(
      "645-665",
    )
    expect(bySlug.get("imperial-msc-finance")?.focusEquivalent).toBe(
      "585-615",
    )
  })

  it("keeps admissions thresholds and ranges labelled as signals, not averages", () => {
    const sse = ALL_GRADUATE_PROGRAMS.find(
      (program) => program.slug === "sse-msc-finance",
    )
    const bocconi = ALL_GRADUATE_PROGRAMS.find(
      (program) => program.slug === "bocconi-mafinrisk",
    )
    const ie = ALL_GRADUATE_PROGRAMS.find(
      (program) => program.slug === "ie-master-finance",
    )

    expect(sse?.scoreStatistic).toBe("Minimum")
    expect(bocconi?.scoreStatistic).toBe("Observed range")
    expect(ie?.scoreStatistic).toBe("Recommended range")
    expect(bocconi?.focusEquivalent).toBe("595–755")
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

  it("shows MBA benchmarks only with row-level official-school evidence", () => {
    const officialDomains = [
      "hbs.edu",
      "stanford.edu",
      "upenn.edu",
      "chicagobooth.edu",
      "northwestern.edu",
      "mit.edu",
      "columbia.edu",
      "dartmouth.edu",
      "yale.edu",
      "nyu.edu",
      "berkeley.edu",
      "ucla.edu",
      "umich.edu",
      "virginia.edu",
      "duke.edu",
      "insead.edu",
      "london.edu",
      "iese.edu",
      "ox.ac.uk",
      "imd.org",
      "ceibs.edu",
      "isb.edu",
      "nus.edu.sg",
    ]
    const mbaPrograms = ALL_GRADUATE_PROGRAMS.filter(
      (program) => program.programType === "MBA",
    )

    expect(mbaPrograms).toHaveLength(23)
    for (const program of mbaPrograms) {
      expect(program.sourceLabel).toBeTruthy()
      expect(program.sourceUrl).toMatch(/^https:\/\//)

      const hostname = new URL(program.sourceUrl!).hostname
      expect(
        officialDomains.some(
          (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
        ),
      ).toBe(true)

      if (program.scoreStatistic === "Not published") {
        expect(program.legacyScore).toBeNull()
        expect(program.focusEquivalent).toBeNull()
      } else {
        expect(
          program.legacyScore != null || program.focusEquivalent != null,
        ).toBe(true)
      }

      if (program.focusEquivalent != null) {
        expect(program.focusScoreLabel).toContain("School-published")
        expect(program.focusScoreLabel).not.toContain("concordance")
      }
    }
  })

  it("keeps representative MBA figures tied to the cited cohort and scale", () => {
    const bySlug = new Map(
      ALL_GRADUATE_PROGRAMS.map((program) => [program.slug, program]),
    )

    expect(bySlug.get("harvard-hbs")).toMatchObject({
      legacyScore: 730,
      focusEquivalent: "685",
      scoreStatistic: "Median",
      sourceLabel: "HBS MBA Class of 2027 profile",
    })
    expect(bySlug.get("columbia")).toMatchObject({
      legacyScore: 734,
      focusEquivalent: "690",
      scoreStatistic: "Average",
    })
    expect(bySlug.get("fuqua")).toMatchObject({
      legacyScore: "680–770",
      focusEquivalent: null,
      scoreStatistic: "Observed range",
    })
    expect(bySlug.get("stanford-gsb")).toMatchObject({
      legacyScore: null,
      focusEquivalent: null,
      scoreStatistic: "Not published",
    })
  })

  it("contains no synthetic competitive-band data or presentation", () => {
    const files = [
      "src/lib/mba-schools.ts",
      "src/lib/graduate-programs.ts",
      "src/app/(marketing)/score-by-school/ScoreBySchoolClient.tsx",
    ].map(read)
    const combined = files.join("\n")
    const mbaPrograms = ALL_GRADUATE_PROGRAMS.filter(
      (program) => program.programType === "MBA",
    )

    for (const program of mbaPrograms) {
      expect(program).not.toHaveProperty("competitiveGMAT")
      expect(program).not.toHaveProperty("competitiveFocus")
    }
    expect(combined).not.toContain("competitiveGMAT")
    expect(combined).not.toContain("competitiveFocus")
    expect(combined).not.toContain("Directional MBA planning band")
    expect(combined).not.toContain("Competitive old GMAT")
    expect(combined).not.toContain("Approximate median")
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
    expect(combined).toContain("Rows are grouped by evidence type")
    expect(combined).toContain("GMAC comparison")
    expect(client).toContain("{program.sourceLabel}")
  })
})
