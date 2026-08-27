import { beforeEach, describe, expect, it, vi } from "vitest"

vi.mock("@/lib/supabase/service", () => ({ getSupabaseService: vi.fn() }))
vi.mock("@/lib/account-deletion", () => ({ processAccountDeletion: vi.fn() }))

import { GET } from "@/app/api/cron/account-deletions/route"
import { getSupabaseService } from "@/lib/supabase/service"
import { processAccountDeletion } from "@/lib/account-deletion"

function dueJobsClient(rows: Array<Record<string, unknown>>) {
  return {
    from: () => ({
      select: () => ({
        lte: () => ({
          order: () => ({
            limit: async () => ({ data: rows, error: null }),
          }),
        }),
      }),
    }),
  }
}

beforeEach(() => {
  vi.resetAllMocks()
  process.env.CRON_SECRET = "test-secret"
})

describe("account-deletion retry cron", () => {
  it("rejects requests without the cron bearer secret", async () => {
    const response = await GET(new Request("http://localhost/api/cron/account-deletions"))

    expect(response.status).toBe(401)
    expect(getSupabaseService).not.toHaveBeenCalled()
  })

  it("processes due jobs without selecting or returning email", async () => {
    const client = dueJobsClient([
      { id: "job-1", user_id: "user-1", attempts: 2 },
    ])
    vi.mocked(getSupabaseService).mockReturnValue(client as never)
    vi.mocked(processAccountDeletion).mockResolvedValue({
      complete: true,
      authRemoved: true,
    })

    const response = await GET(
      new Request("http://localhost/api/cron/account-deletions", {
        headers: { authorization: "Bearer test-secret" },
      }),
    )

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({
      ok: true,
      checked: 1,
      completed: 1,
      pending: 0,
    })
    expect(processAccountDeletion).toHaveBeenCalledWith(client, {
      id: "job-1",
      userId: "user-1",
      attempts: 2,
    })
  })
})
