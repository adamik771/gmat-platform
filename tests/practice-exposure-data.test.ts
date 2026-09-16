import type { SupabaseClient, User } from "@supabase/supabase-js"
import { beforeEach, describe, expect, it, vi } from "vitest"
vi.mock("server-only", () => ({}))
const mocks = vi.hoisted(() => ({ report: vi.fn(), state: vi.fn() }))
vi.mock("@/lib/server-data-observability", () => ({ reportDataFailure: mocks.report }))
vi.mock("@/lib/user-state", () => ({ getUserStateForWrite: mocks.state }))
import { loadPracticeExposure, loadSelectionState } from "@/lib/practice-exposure-data"

const user = { id: "this-student" } as User
const now = new Date("2026-09-15T00:00:00Z")
const row = (id: string, day = "01") => ({ id, question_id: `q-${id}`, created_at: `2026-09-${day}T00:00:00Z`, topic: "Algebra", is_correct: true })
function db(pages: Array<{ data: unknown; error: unknown; count: number | null }>) {
  const query = { select: vi.fn().mockReturnThis(), eq: vi.fn().mockReturnThis(), lte: vi.fn().mockReturnThis(), order: vi.fn().mockReturnThis(), range: vi.fn().mockReturnThis(),
    then(resolve: (value: unknown) => unknown) { return Promise.resolve(pages.shift()).then(resolve) } }
  return { query, client: { from: vi.fn(() => query) } as unknown as SupabaseClient }
}
beforeEach(() => vi.clearAllMocks())

describe("freshness history loading", () => {
  it("reads all capped pages scoped to this user, in date order with deterministic ties", async () => {
    const { client, query } = db([{ data: [row("z")], error: null, count: 2 }, { data: [row("a", "02")], error: null, count: 2 }])
    const result = await loadPracticeExposure(client, user, { c: { questions: { chapter: { submitted: true } } } }, false, now)
    expect(result.errored).toBe(false)
    expect(result.lastSeen.size).toBe(3)
    expect(query.eq.mock.calls).toEqual([["user_id", user.id], ["user_id", user.id]])
    expect(query.range.mock.calls).toEqual([[0, 499], [1, 500]])
    expect(query.lte).toHaveBeenCalledWith("created_at", now.toISOString())
  })
  it("flags partial, unstable, oversized and malformed histories instead of claiming freshness", async () => {
    for (const pages of [
      [{ data: null, count: null, error: { code: "failure" } }],
      [{ data: [], count: null, error: null }],
      [{ data: [], count: 50_001, error: null }],
      [{ data: [row("a")], count: 2, error: null }, { data: [], count: 2, error: null }],
      [{ data: [row("a")], count: 2, error: null }, { data: [row("b")], count: 3, error: null }],
      [{ data: [row("a"), row("a")], count: 2, error: null }],
      [{ data: [{ ...row("a"), created_at: "invalid" }], count: 1, error: null }],
    ]) {
      const { client } = db(pages)
      const result = await loadPracticeExposure(client, user, { c: { questionExposures: { known: 100 } } }, false, now)
      expect(result.errored).toBe(true)
      expect(result.lastSeen.get("known")).toBe(100)
    }
  })
  it("distinguishes an empty new account from a failed chapter-state read", async () => {
    for (const errored of [false, true]) {
      const { client } = db([{ data: [], error: null, count: 0 }])
      expect((await loadPracticeExposure(client, user, {}, errored, now)).errored).toBe(errored)
    }
  })
  it("does not reject a valid sub-millisecond page boundary as an ID-order error", async () => {
    const { client } = db([
      { data: [{ ...row("z"), created_at: "2026-09-01T00:00:00.123456Z" }], count: 2, error: null },
      { data: [{ ...row("a"), created_at: "2026-09-01T00:00:00.123457Z" }], count: 2, error: null },
    ])
    const result = await loadPracticeExposure(client, user, {}, false, now)
    expect(result.errored).toBe(false)
    expect(result.lastSeen.size).toBe(2)
  })
  it("handles thrown state reads without allowing writes or reporting complete history", async () => {
    mocks.state.mockRejectedValueOnce(new Error("network unavailable"))
    expect(await loadSelectionState({} as SupabaseClient, user)).toEqual({ state: {}, errored: true })
    mocks.state.mockResolvedValueOnce({ state: { chapter_progress: {} }, errored: false })
    expect((await loadSelectionState({} as SupabaseClient, user)).errored).toBe(false)
  })
})
