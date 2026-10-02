import { beforeEach, describe, expect, it, vi } from "vitest"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

vi.mock("server-only", () => ({}))

import {
  enqueueAccountDeletion,
  processAccountDeletion,
  type AccountDeletionJob,
} from "@/lib/account-deletion"

const JOB: AccountDeletionJob = {
  id: "job-1",
  userId: "user-1",
  attempts: 0,
}

function processingClient(options?: {
  authError?: { code?: string; status?: number; message?: string } | null
  cleanupError?: { message: string } | null
  retryUpdateError?: { message: string } | null
  throwFrom?: "auth" | "cleanup" | "retry"
}) {
  const deleteUser = vi.fn(async () => {
    if (options?.throwFrom === "auth") throw new Error("network auth failure")
    return { error: options?.authError ?? null }
  })
  const rpc = vi.fn(async () => {
    if (options?.throwFrom === "cleanup") throw new Error("network rpc failure")
    return { error: options?.cleanupError ?? null }
  })
  const retryUpdates: Array<Record<string, unknown>> = []
  const client = {
    auth: { admin: { deleteUser } },
    rpc,
    from: vi.fn(() => ({
      update: (values: Record<string, unknown>) => ({
        eq: async () => {
          if (options?.throwFrom === "retry") throw new Error("network update failure")
          retryUpdates.push(values)
          return { error: options?.retryUpdateError ?? null }
        },
      }),
    })),
  }
  return { client, deleteUser, rpc, retryUpdates }
}

beforeEach(() => {
  vi.restoreAllMocks()
})

describe("processAccountDeletion", () => {
  it("reports complete only after Auth and transactional database cleanup succeed", async () => {
    const { client, deleteUser, rpc, retryUpdates } = processingClient()

    await expect(processAccountDeletion(client as never, JOB)).resolves.toEqual({
      complete: true,
      authRemoved: true,
    })
    expect(deleteUser).toHaveBeenCalledWith(JOB.userId)
    expect(rpc).toHaveBeenCalledWith("complete_account_deletion", {
      p_job_id: JOB.id,
    })
    expect(retryUpdates).toEqual([])
  })

  it("treats an already-missing Auth user as an idempotent retry", async () => {
    const { client, rpc } = processingClient({ authError: { status: 404 } })

    await expect(processAccountDeletion(client as never, JOB)).resolves.toEqual({
      complete: true,
      authRemoved: true,
    })
    expect(rpc).toHaveBeenCalledOnce()
  })

  it("does not touch database data when Auth deletion fails", async () => {
    const { client, rpc, retryUpdates } = processingClient({
      authError: { status: 500, message: "private provider detail" },
    })

    await expect(processAccountDeletion(client as never, JOB)).resolves.toEqual({
      complete: false,
      authRemoved: false,
    })
    expect(rpc).not.toHaveBeenCalled()
    expect(retryUpdates).toHaveLength(1)
    expect(retryUpdates[0]).toMatchObject({
      attempts: 1,
      last_error_code: "auth_delete_failed",
    })
    expect(JSON.stringify(retryUpdates[0])).not.toContain("private provider detail")
  })

  it("keeps the durable job pending when transactional cleanup fails", async () => {
    const { client, retryUpdates } = processingClient({
      cleanupError: { message: "email@example.com leaked in upstream error" },
    })

    await expect(processAccountDeletion(client as never, JOB)).resolves.toEqual({
      complete: false,
      authRemoved: true,
    })
    expect(retryUpdates[0]).toMatchObject({
      attempts: 1,
      last_error_code: "database_cleanup_failed",
    })
    expect(JSON.stringify(retryUpdates[0])).not.toContain("email@example.com")
  })

  it("keeps processing failures retryable when the client throws", async () => {
    const authThrow = processingClient({ throwFrom: "auth" })
    await expect(
      processAccountDeletion(authThrow.client as never, JOB),
    ).resolves.toEqual({ complete: false, authRemoved: false })

    const cleanupThrow = processingClient({ throwFrom: "cleanup" })
    await expect(
      processAccountDeletion(cleanupThrow.client as never, JOB),
    ).resolves.toEqual({ complete: false, authRemoved: true })
  })
})

describe("enqueueAccountDeletion", () => {
  it("normalizes email and returns no personal data to the worker", async () => {
    let inserted: Record<string, unknown> | undefined
    const client = {
      from: () => ({
        upsert: (values: Record<string, unknown>) => {
          inserted = values
          return {
            select: () => ({
              single: async () => ({
                data: { id: "job-1", user_id: "user-1", attempts: 0 },
                error: null,
              }),
            }),
          }
        },
      }),
    }

    const job = await enqueueAccountDeletion(client as never, {
      userId: "user-1",
      email: "  PERSON@Example.COM ",
    })

    expect(inserted).toMatchObject({
      user_id: "user-1",
      email: "person@example.com",
    })
    expect(job).toEqual(JOB)
    expect(job).not.toHaveProperty("email")
  })

  it("supports accounts without an email address", async () => {
    let inserted: Record<string, unknown> | undefined
    const client = {
      from: () => ({
        upsert: (values: Record<string, unknown>) => {
          inserted = values
          return {
            select: () => ({
              single: async () => ({
                data: { id: "job-1", user_id: "user-1", attempts: 0 },
                error: null,
              }),
            }),
          }
        },
      }),
    }

    await enqueueAccountDeletion(client as never, { userId: "user-1", email: null })
    expect(inserted).toMatchObject({ user_id: "user-1", email: null })
  })
})

describe("durable deletion migration", () => {
  it("atomically covers every persisted account-data table", () => {
    const migration = readFileSync(
      resolve("supabase/migrations/20260827000000_durable_account_deletion.sql"),
      "utf8",
    )
    const accountTables = [
      "error_tags",
      "practice_attempts",
      "practice_sessions",
      "lesson_completions",
      "purchases",
      "tutor_usage",
      "beta_feedback",
      "user_state",
      "email_events",
      "email_queue",
      "email_subscriptions",
      "lead_captures",
    ]
    const jobRemoval = migration.indexOf(
      "delete from public.account_deletion_jobs where id = p_job_id",
    )

    expect(migration).toContain("security definer")
    expect(migration).toContain("set search_path = ''")
    expect(migration).toContain(
      "revoke all on function public.complete_account_deletion(uuid) from public, anon, authenticated",
    )
    expect(jobRemoval).toBeGreaterThan(0)
    for (const table of accountTables) {
      const deletion = migration.indexOf(`delete from public.${table} where`)
      expect(deletion, `${table} must be erased`).toBeGreaterThan(0)
      expect(deletion, `${table} must be erased before the job`).toBeLessThan(
        jobRemoval,
      )
    }
  })
})
