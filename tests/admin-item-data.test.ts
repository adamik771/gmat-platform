import { readFileSync } from "node:fs"
import type { User } from "@supabase/supabase-js"
import { beforeEach, describe, expect, it, vi } from "vitest"

vi.mock("server-only", () => ({}))
const mocks = vi.hoisted(() => ({ getService: vi.fn(), report: vi.fn() }))
vi.mock("@/lib/supabase/service", () => ({ getSupabaseService: mocks.getService }))
vi.mock("@/lib/server-data-observability", () => ({ reportDataFailure: mocks.report }))
import { loadAdminItemStats } from "@/lib/admin-item-data"

const admin = { id: "admin", app_metadata: { role: "admin" } } as User
function row(id: string, slug = "algebra") {
  return { id, user_id: "private-student-id", question_id: "algebra-q1", section: "Quant", topic: "Algebra", is_correct: true,
    created_at: "2026-09-01T10:00:00Z", hints_revealed: 0,
    practice_sessions: { slug, topic: "Algebra", user_id: "private-student-id" } }
}
function database(pages: Array<{ data: unknown; error: unknown; count: number | null }>) {
  const chain = {
    select: vi.fn().mockReturnThis(), lte: vi.fn().mockReturnThis(), order: vi.fn().mockReturnThis(), range: vi.fn().mockReturnThis(),
    then(resolve: (value: unknown) => unknown) { return Promise.resolve(pages.shift()).then(resolve) },
  }
  mocks.getService.mockReturnValue({ from: vi.fn(() => chain) })
  return chain
}

beforeEach(() => { vi.clearAllMocks(); vi.stubEnv("ADMIN_EMAILS", "") })

describe("item QA data boundary", () => {
  it("rejects anonymous, ordinary and forged-metadata admins before service access", async () => {
    for (const user of [null, { id: "student", app_metadata: {} }, { id: "student", app_metadata: {}, user_metadata: { role: "admin" } }]) {
      await expect(loadAdminItemStats(user as User | null)).rejects.toThrow("unavailable")
    }
    expect(mocks.getService).not.toHaveBeenCalled()
  })

  it("paginates even if a server row cap returns less than the requested page size", async () => {
    const second = { ...row("002"), user_id: "private-second-id", practice_sessions: { ...row("002").practice_sessions, user_id: "private-second-id" } }
    const chain = database([{ data: [row("001")], count: 2, error: null }, { data: [second], count: 2, error: null }])
    const result = await loadAdminItemStats(admin)
    expect(result[0].attempts).toBe(2)
    expect(chain.range.mock.calls).toEqual([[0, 499], [1, 500]])
    expect(chain.order.mock.calls.slice(0, 2)).toEqual([["created_at", { ascending: true }], ["id", { ascending: true }]])
    expect(JSON.stringify(result)).not.toContain("private-")
  })

  it("excludes review, redo, hinted and orphaned rows from eligible samples", async () => {
    const data = [row("001", "review-Quant"), { ...row("002"), question_id: "q2", hints_revealed: 1 }, { ...row("003", "redo-algebra"), question_id: "q3" }, { ...row("004"), question_id: "q4", practice_sessions: null }]
    database([{ data, count: 4, error: null }])
    const result = await loadAdminItemStats(admin)
    expect(result).toHaveLength(4)
    expect(result.every((item) => item.attempts === 0)).toBe(true)
  })

  it("preserves sub-millisecond ordering and the actual first attempt", async () => {
    database([{ data: [
      { ...row("z"), created_at: "2026-09-01T10:00:00.000001+00:00", is_correct: false },
      { ...row("a"), created_at: "2026-09-01T10:00:00.000002+00:00" },
    ], count: 2, error: null }])
    const [item] = await loadAdminItemStats(admin)
    expect(item.attempts).toBe(1)
    expect(item.correct).toBe(0)
  })

  it("fails closed on query failures, missing counts, missing pages or unstable order", async () => {
    for (const pages of [
      [{ data: null, count: null, error: { code: "42P01", message: "private detail" } }],
      [{ data: [], count: null, error: null }],
      [{ data: [row("001")], count: 2, error: null }, { data: [], count: 2, error: null }],
      [{ data: [row("001")], count: 2, error: null }, { data: [row("001")], count: 2, error: null }],
      [{ data: [row("001")], count: 2, error: null }, { data: [row("002")], count: 3, error: null }],
    ]) {
      database(pages)
      await expect(loadAdminItemStats(admin)).rejects.toThrow("No partial results")
    }
    expect(mocks.report).toHaveBeenCalled()
  })

  it("keeps the route guard ahead of cross-student loading and never uses public role metadata", () => {
    const source = readFileSync("src/app/(app)/qa/psychometrics/page.tsx", "utf8")
    expect(source.indexOf("if (!user || !isAdmin(user))")).toBeLessThan(source.indexOf("loadAdminItemStats(user)"))
    expect(source).not.toContain("getSupabaseService")
    expect(source).not.toContain("user_metadata")
    expect(source).toContain("{!error && <>")
  })
})
