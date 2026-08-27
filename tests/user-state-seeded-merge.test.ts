import { readFileSync } from "node:fs"
import { describe, expect, it, vi } from "vitest"

vi.mock("server-only", () => ({}))

import {
  patchUserState,
  USER_STATE_MIGRATION_SQL,
  type UserState,
} from "@/lib/user-state"

const MIGRATION_PATH = new URL(
  "../supabase/migrations/20260827000100_user_state_seeded_merge.sql",
  import.meta.url,
)

function makeClient(rpcError: string | null = null) {
  const rpc = vi.fn(async () => ({
    error: rpcError ? { message: rpcError } : null,
  }))
  const updateUser = vi.fn(async () => ({ error: null }))
  return {
    client: { rpc, auth: { updateUser } },
    rpc,
    updateUser,
  }
}

const user = {
  id: "65a828a5-5d44-4cb4-9ce6-16193b6a30c4",
  user_metadata: {
    chapter_progress: { stale: { sectionsRead: ["old"] } },
    saved_for_review: ["legacy-question"],
    full_name: "Bounded metadata stays in auth",
  },
}

describe("patchUserState legacy seeding", () => {
  it("sends legacy metadata separately from the canonical patch", async () => {
    const { client, rpc } = makeClient()
    const patch: UserState = {
      chapter_progress: { current: { sectionsRead: ["new"] } },
    }

    await expect(
      patchUserState(client as never, user as never, patch),
    ).resolves.toEqual({ error: null })

    expect(rpc).toHaveBeenCalledWith("merge_user_state_seeded", {
      p_patch: patch,
      p_legacy_seed: {
        chapter_progress: { stale: { sectionsRead: ["old"] } },
        saved_for_review: ["legacy-question"],
      },
    })
  })

  it("does not strip metadata when the atomic write fails", async () => {
    const { client, updateUser } = makeClient("database unavailable")

    await expect(
      patchUserState(client as never, user as never, { mock_flags: { q1: true } }),
    ).resolves.toEqual({ error: "database unavailable" })
    expect(updateUser).not.toHaveBeenCalled()
  })
})

describe("merge_user_state_seeded SQL contract", () => {
  const migrationSql = readFileSync(MIGRATION_PATH, "utf8")

  it.each([
    ["versioned migration", migrationSql],
    ["manual bootstrap SQL", USER_STATE_MIGRATION_SQL],
  ])("uses legacy data only in the insert branch of %s", (_label, sql) => {
    const normalized = sql.replace(/\s+/g, " ")
    const conflictUpdate = normalized.split("on conflict (user_id) do update")[1]

    expect(normalized).toContain(
      "coalesce(p_legacy_seed, '{}'::jsonb) || coalesce(p_patch, '{}'::jsonb)",
    )
    expect(conflictUpdate).toContain(
      "data = public.user_state.data || coalesce(p_patch, '{}'::jsonb)",
    )
    expect(conflictUpdate).not.toContain("p_legacy_seed")
  })
})
