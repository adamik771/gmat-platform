import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const dashboard = readFileSync(
  resolve("src/app/(app)/dashboard/page.tsx"),
  "utf8",
)

describe("dashboard query contracts", () => {
  it("counts error tags through their real attempt_id key", () => {
    const errorTagQueries = dashboard.match(
      /\.from\("error_tags"\)[\s\S]{0,140}?\.select\("attempt_id", \{ count: "exact", head: true \}\)/g,
    )

    expect(errorTagQueries).toHaveLength(2)
    expect(dashboard).not.toMatch(
      /\.from\("error_tags"\)[\s\S]{0,140}?\.select\("id", \{ count: "exact", head: true \}\)/,
    )
  })
})
