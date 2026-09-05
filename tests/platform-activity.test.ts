import fs from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import {
  activeWindowForPath,
  DEFAULT_ACTIVE_WINDOW_MS,
  READING_ACTIVE_WINDOW_MS,
} from "@/lib/platform-activity"

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

describe("platform activity reading windows", () => {
  it("allows fifteen minutes for quiet study reading and five elsewhere", () => {
    expect(READING_ACTIVE_WINDOW_MS).toBe(15 * 60_000)
    expect(DEFAULT_ACTIVE_WINDOW_MS).toBe(5 * 60_000)
  })

  it.each([
    "/chapters/quant-01",
    "/guides/reading-quant-01-mindset",
    "/learn/examples",
    "/practice/session/custom",
    "/practice/history/session-id",
    "/review",
    "/review/question/question-id",
    "/error-log",
    "/mock/report",
  ])("keeps quiet reading active on %s", (pathname) => {
    expect(activeWindowForPath(pathname)).toBe(READING_ACTIVE_WINDOW_MS)
  })

  it.each(["/dashboard", "/chapters", "/practice", "/settings", "/admin/students"])(
    "keeps the shorter idle allowance on %s",
    (pathname) => {
      expect(activeWindowForPath(pathname)).toBe(DEFAULT_ACTIVE_WINDOW_MS)
    },
  )
})
