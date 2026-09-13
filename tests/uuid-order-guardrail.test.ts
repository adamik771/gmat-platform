import { describe, it, expect } from "vitest"
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"

/**
 * Guardrail against the recurring "ordered by a random UUID" bug class.
 *
 * practice_attempts / practice_sessions ids are random UUIDs, so
 * `.order("session_id")` or `.order("id")` produces an ARBITRARY (but stable)
 * order that read as "recent" in three separate shipped bugs: the error-log
 * list, the dashboard Recent Mistakes tile, and the deep-review "your last
 * attempt". Recency must come from `created_at` (present on both tables in
 * the live schema). This test fails on any reintroduction.
 */
function tsFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue
    const p = join(dir, entry.name)
    if (entry.isDirectory()) tsFiles(p, acc)
    else if (/\.(ts|tsx)$/.test(entry.name)) acc.push(p)
  }
  return acc
}

describe("uuid-order guardrail", () => {
  it("no query orders by a UUID id column", () => {
    const offenders: string[] = []
    const re = /\.order\("(session_id|id|attempt_id)"/
    for (const file of tsFiles("src")) {
      const code = readFileSync(file, "utf8")
      const m = code.match(re)
      if (m) {
        const rel = file.split(`${process.cwd()}/`).pop() ?? file
        offenders.push(`${rel}: ${m[0]}`)
      }
    }
    expect(
      offenders,
      `Order by created_at, not a random-UUID id column:\n  ${offenders.join("\n  ")}`
    ).toEqual([])
  })
})
