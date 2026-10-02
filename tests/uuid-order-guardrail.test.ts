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
 * the live schema). A secondary id tie-break immediately after created_at
 * is permitted: pagination must be stable for rows sharing a timestamp.
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
  const withoutChronologicalTieBreak = (code: string) => code.replace(
    /(\.order\("created_at",\s*\{\s*ascending:\s*(?:true|false)\s*\}\))\s*\.order\("id",\s*\{\s*ascending:\s*(?:true|false)\s*\}\)/g,
    "$1",
  )

  it("permits only an immediately secondary id order, never UUID recency", () => {
    expect(withoutChronologicalTieBreak('.order("created_at", { ascending: true }).order("id", { ascending: true })')).not.toContain('.order("id"')
    expect(withoutChronologicalTieBreak('.order("id", { ascending: true }).order("created_at", { ascending: true })')).toContain('.order("id"')
    expect(withoutChronologicalTieBreak('.order("session_id")')).toContain('.order("session_id"')
  })

  it("no query uses a UUID id as its primary order", () => {
    const offenders: string[] = []
    const re = /\.order\("(session_id|id|attempt_id)"/
    for (const file of tsFiles("src")) {
      const code = withoutChronologicalTieBreak(readFileSync(file, "utf8"))
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
