import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import { describe, it, expect } from "vitest"

/**
 * Guardrail: any API route that PATCHES user_state must use the
 * error-aware read (getUserStateForWrite + errored abort), never plain
 * getUserState.
 *
 * getUserState silently degrades a FAILED row read to the (post-strip,
 * usually empty) legacy metadata copy. A read-modify-write route that
 * proceeds from that empty state rebuilds the whole key from nothing and
 * REPLACES the stored history on write — one transient DB error destroys
 * official-exam scores, mock flags, saved-for-review lists, or the skill
 * map, while returning 200. Six routes shipped with this bug; this test
 * keeps the class dead.
 */
function routeFiles(dir: string): string[] {
  const acc: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) acc.push(...routeFiles(p))
    else if (entry.name === "route.ts") acc.push(p)
  }
  return acc
}

describe("user_state read-modify-write guardrail", () => {
  it("no API route pairs patchUserState with the error-blind getUserState", () => {
    const offenders: string[] = []
    for (const file of routeFiles("src/app/api")) {
      const code = readFileSync(file, "utf8")
      if (!code.includes("patchUserState(")) continue
      // `getUserState(` must not appear except as `getUserStateForWrite(`.
      const blind = code.match(/getUserState\((?!.*ForWrite)/) !== null &&
        /(?<!ForWrite)\bgetUserState\(/.test(code)
      if (blind) {
        offenders.push(file.split(`${process.cwd()}/`).pop() ?? file)
      }
    }
    expect(
      offenders,
      `These routes patch user_state from an error-blind read — use getUserStateForWrite and abort on errored:\n  ${offenders.join("\n  ")}`
    ).toEqual([])
  })

  it("every patching route aborts when the state read errored", () => {
    const offenders: string[] = []
    for (const file of routeFiles("src/app/api")) {
      const code = readFileSync(file, "utf8")
      if (!code.includes("getUserStateForWrite(")) continue
      if (!code.includes("errored")) {
        offenders.push(file.split(`${process.cwd()}/`).pop() ?? file)
      }
    }
    expect(offenders).toEqual([])
  })
})
