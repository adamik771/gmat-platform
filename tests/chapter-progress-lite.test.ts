import { describe, it, expect } from "vitest"
import { readChapterProgressLite } from "@/lib/spaced-review"

// Guards #9: the install-date anchor that drill + recall-checkpoint scheduling
// depends on. It was read as a string while the writer only ever wrote a
// numeric lastSeenAt, so firstSeenMs was always undefined and those items
// never surfaced in /review.
describe("readChapterProgressLite", () => {
  it("reads a numeric firstSeenAt", () => {
    const r = readChapterProgressLite({ chapter_progress: { ch: { firstSeenAt: 1000 } } })
    expect(r.ch.firstSeenMs).toBe(1000)
  })

  it("falls back to lastSeenAt when firstSeenAt is absent (existing users)", () => {
    const r = readChapterProgressLite({ chapter_progress: { ch: { lastSeenAt: 2000 } } })
    expect(r.ch.firstSeenMs).toBe(2000)
  })

  it("prefers firstSeenAt over lastSeenAt", () => {
    const r = readChapterProgressLite({
      chapter_progress: { ch: { firstSeenAt: 100, lastSeenAt: 999 } },
    })
    expect(r.ch.firstSeenMs).toBe(100)
  })

  it("is undefined when neither timestamp is present", () => {
    const r = readChapterProgressLite({ chapter_progress: { ch: { sectionsRead: {} } } })
    expect(r.ch.firstSeenMs).toBeUndefined()
  })

  it("still accepts a legacy ISO-string firstSeenAt", () => {
    const iso = "2026-01-01T00:00:00.000Z"
    const r = readChapterProgressLite({ chapter_progress: { ch: { firstSeenAt: iso } } })
    expect(r.ch.firstSeenMs).toBe(Date.parse(iso))
  })
})
