import { describe, it, expect } from "vitest"
import { byMostRecent } from "@/app/(app)/error-log/constants"

describe("error log ordering", () => {
  const entry = (id: string, createdAt: string | null) => ({ id, createdAt })

  it("sorts newest first", () => {
    const rows = [
      entry("a", "2026-07-01T10:00:00+00:00"),
      entry("b", "2026-07-10T10:00:00+00:00"),
      entry("c", "2026-07-05T10:00:00+00:00"),
    ]
    expect(rows.sort(byMostRecent).map((r) => r.id)).toEqual(["b", "c", "a"])
  })

  it("sinks entries without a timestamp to the bottom", () => {
    const rows = [
      entry("a", null),
      entry("b", "2026-07-10T10:00:00+00:00"),
      entry("c", "not-a-date"),
    ]
    expect(rows.sort(byMostRecent).map((r) => r.id)).toEqual(["b", "c", "a"])
  })

  it("breaks timestamp ties stably by id", () => {
    const rows = [
      entry("a", "2026-07-10T10:00:00+00:00"),
      entry("b", "2026-07-10T10:00:00+00:00"),
    ]
    // Same instant — order by id descending, deterministic across renders.
    expect(rows.sort(byMostRecent).map((r) => r.id)).toEqual(["b", "a"])
    expect(rows.sort(byMostRecent).map((r) => r.id)).toEqual(["b", "a"])
  })
})
