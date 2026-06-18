import { describe, it, expect } from "vitest"
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { USER_STATE_KEYS } from "@/lib/user-state-keys"

/**
 * Guardrail against the 494 REQUEST_HEADER_TOO_LARGE incident recurring.
 *
 * Growing per-user state (chapter progress, saved questions, confidence logs,
 * mock flags, review logs, ...) must live in the `user_state` table, accessed
 * via getUserState/patchUserState — NEVER in Supabase `user_metadata`, which
 * rides in the auth JWT/cookie and blew past Vercel's header limit when it grew.
 *
 * This test fails if any source file reads one of the relocated keys back off
 * `user_metadata` (which is how you'd consume it if you wrongly wrote it there).
 * The migration removed every such read; reintroducing one should fail CI.
 *
 * If this fires: move the data to user_state (see src/lib/user-state.ts), don't
 * add it to user_metadata.
 */

// Only the accessor itself may reference these keys next to user_metadata
// (it migrates the legacy copy off user_metadata and strips it).
const ALLOWLIST = new Set(["src/lib/user-state.ts"])

function tsFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue
    const p = join(dir, entry.name)
    if (entry.isDirectory()) tsFiles(p, acc)
    else if (/\.(ts|tsx)$/.test(entry.name)) acc.push(p)
  }
  return acc
}

/** Drop comments so a stale doc comment mentioning the old path isn't flagged. */
function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "")
}

describe("user_metadata guardrail (prevents the 494 cookie-bloat regression)", () => {
  it("no relocated key is read off user_metadata — those belong in user_state", () => {
    const offenders: string[] = []
    for (const file of tsFiles("src")) {
      const rel = file.split(`${process.cwd()}/`).pop() ?? file
      if (ALLOWLIST.has(rel)) continue
      const code = stripComments(readFileSync(file, "utf8"))
      for (const key of USER_STATE_KEYS) {
        // matches user_metadata.<key>, user_metadata?.<key>, user_metadata["<key>"]
        const re = new RegExp(`user_metadata\\s*[?.\\[]+\\s*["']?${key}\\b`)
        const m = code.match(re)
        if (m) offenders.push(`${rel}: ${m[0]}`)
      }
    }
    expect(
      offenders,
      `Relocated keys must be read via getUserState (user_state table), not user_metadata:\n  ${offenders.join("\n  ")}`,
    ).toEqual([])
  })
})
