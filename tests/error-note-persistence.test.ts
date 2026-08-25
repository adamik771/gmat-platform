import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const client = readFileSync(
  resolve("src/app/(app)/error-log/ErrorLogClient.tsx"),
  "utf8",
)
const route = readFileSync(resolve("src/app/api/error-tags/route.ts"), "utf8")

describe("error-log note persistence guardrails", () => {
  it("keeps blur-triggered writes alive during navigation and offers an explicit save", () => {
    expect(client).toContain("keepalive: true")
    expect(client).toContain('"Save note"')
    expect(client).toContain("onBlur={() => void commitNotes()}")
  })

  it("does not mark a failed or superseded note write as clean", () => {
    expect(client).toContain("const didSave = await save")
    expect(client).toContain("if (didSave && !hasNewerDraft)")
    expect(client).toContain("setNotesDirty(false)")
    expect(client).toContain("setNotesDirty(true)")
  })

  it("confirms the note through a database read before returning success", () => {
    expect(route).toContain('.select("notes")')
    expect(route).toContain("persistedNotes !== body.notes")
    expect(route).toContain("Your note could not be confirmed as saved")
  })
})
