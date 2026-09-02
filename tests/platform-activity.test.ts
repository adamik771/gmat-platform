import fs from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"

const migration = fs.readFileSync(
  path.join(
    process.cwd(),
    "supabase/migrations/20260902010000_user_activity_daily.sql",
  ),
  "utf8",
)

describe("platform activity storage contract", () => {
  it("stores only daily aggregate duration and last-seen time", () => {
    expect(migration).toContain("create table if not exists public.user_activity_daily")
    expect(migration).toContain("active_seconds integer")
    expect(migration).toContain("last_seen_at timestamptz")
    expect(migration).not.toMatch(/\b(path|url|device|user_agent|event_name)\s+(text|jsonb)/i)
  })

  it("enforces own-row RLS and authenticated-only RPC access", () => {
    expect(migration).toContain("alter table public.user_activity_daily enable row level security")
    expect(migration.match(/auth\.uid\(\) = user_id/g)).toHaveLength(1)
    expect(migration).toContain("security definer")
    expect(migration).toContain("set search_path = ''")
    expect(migration).toContain(
      "revoke all on table public.user_activity_daily from public, anon, authenticated",
    )
    expect(migration).not.toMatch(
      /grant[^;\n]*(?:insert|update|delete|all)[^;\n]*user_activity_daily[^;\n]*to\s+authenticated/i,
    )
    expect(migration).toContain(
      "revoke all on function public.record_user_activity(integer) from public, anon",
    )
    expect(migration).toContain(
      "grant execute on function public.record_user_activity(integer) to authenticated",
    )
  })

  it("caps payloads, elapsed-time inflation, and the daily total", () => {
    expect(migration).toContain("p_active_seconds > 120")
    expect(migration).toContain("v_now - current_day.last_seen_at")
    expect(migration).toContain("current_day.active_seconds + least(")
    expect(migration).toContain("active_seconds = least(")
    expect(migration).toContain("86400")
  })
})
