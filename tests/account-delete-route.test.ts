import { beforeEach, describe, expect, it, vi } from "vitest"

vi.mock("@/lib/supabase/server", () => ({ createSupabaseServer: vi.fn() }))
vi.mock("@/lib/supabase/service", () => ({ getSupabaseService: vi.fn() }))
vi.mock("@/lib/account-deletion", () => ({
  enqueueAccountDeletion: vi.fn(),
  processAccountDeletion: vi.fn(),
}))

import { POST } from "@/app/api/account/delete/route"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getSupabaseService } from "@/lib/supabase/service"
import {
  enqueueAccountDeletion,
  processAccountDeletion,
} from "@/lib/account-deletion"

const service = { kind: "service" }
const job = { id: "job-1", userId: "user-1", attempts: 0 }

beforeEach(() => {
  vi.resetAllMocks()
  vi.mocked(createSupabaseServer).mockResolvedValue({
    auth: {
      getUser: vi.fn(async () => ({
        data: { user: { id: "user-1", email: "person@example.com" } },
      })),
    },
  } as never)
  vi.mocked(getSupabaseService).mockReturnValue(service as never)
  vi.mocked(enqueueAccountDeletion).mockResolvedValue(job)
})

describe("POST /api/account/delete", () => {
  it("persists the job before processing and returns complete truthfully", async () => {
    vi.mocked(processAccountDeletion).mockResolvedValue({
      complete: true,
      authRemoved: true,
    })

    const response = await POST()

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ ok: true, status: "complete" })
    expect(enqueueAccountDeletion).toHaveBeenCalledWith(service, {
      userId: "user-1",
      email: "person@example.com",
    })
    expect(enqueueAccountDeletion.mock.invocationCallOrder[0]).toBeLessThan(
      processAccountDeletion.mock.invocationCallOrder[0],
    )
  })

  it("returns accepted but not complete after Auth removal when cleanup is pending", async () => {
    vi.mocked(processAccountDeletion).mockResolvedValue({
      complete: false,
      authRemoved: true,
    })

    const response = await POST()

    expect(response.status).toBe(202)
    await expect(response.json()).resolves.toEqual({ ok: false, status: "pending" })
  })

  it("accepts a durable request without claiming it is complete", async () => {
    vi.mocked(processAccountDeletion).mockResolvedValue({
      complete: false,
      authRemoved: false,
    })

    const response = await POST()
    const body = await response.json()

    expect(response.status).toBe(202)
    expect(body).toMatchObject({ ok: false, status: "pending" })
  })

  it("does not touch the service role for an unauthenticated request", async () => {
    vi.mocked(createSupabaseServer).mockResolvedValue({
      auth: { getUser: vi.fn(async () => ({ data: { user: null } })) },
    } as never)

    const response = await POST()

    expect(response.status).toBe(401)
    expect(getSupabaseService).not.toHaveBeenCalled()
  })
})
