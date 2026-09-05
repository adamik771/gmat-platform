import { readFileSync } from "node:fs"
import { NextRequest, NextResponse } from "next/server"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

const getUser = vi.fn()

vi.mock("@/lib/supabase/proxy", () => ({
  createSupabaseProxy: () => ({
    supabase: { auth: { getUser } },
    response: () => NextResponse.next(),
  }),
}))

import { proxy } from "@/proxy"

const originalUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const originalKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

beforeEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co"
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "test-anon-key"
  getUser.mockReset()
})

afterEach(() => {
  if (originalUrl === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_URL
  else process.env.NEXT_PUBLIC_SUPABASE_URL = originalUrl
  if (originalKey === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  else process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalKey
})

describe("authentication boundary", () => {
  it("keeps public pages available when auth configuration is missing", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    const response = await proxy(new NextRequest("https://zakariangmat.com/pricing"))

    expect(response.status).toBe(200)
    expect(response.headers.get("x-middleware-next")).toBe("1")
  })

  it("fails closed on protected pages when auth configuration is missing", async () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL

    const response = await proxy(new NextRequest("https://zakariangmat.com/review"))

    expect(response.status).toBe(503)
    expect(response.headers.get("cache-control")).toBe("private, no-store")
  })

  it("fails closed when the auth provider throws", async () => {
    getUser.mockRejectedValueOnce(new Error("auth unavailable"))

    const response = await proxy(new NextRequest("https://zakariangmat.com/guides"))

    expect(response.status).toBe(503)
    expect(response.headers.get("retry-after")).toBe("30")
  })
})

describe("service-worker cache boundary", () => {
  const source = readFileSync("public/sw.js", "utf8")
  const precache = source.match(/const PRECACHE_URLS = \[(.*?)\]/s)?.[1] ?? ""

  it("does not precache or intercept authenticated review pages", () => {
    expect(precache).not.toContain('"/review"')
    expect(source).not.toContain('url.pathname === "/review"')
    expect(source).not.toContain("DATA_CACHE")
  })

  it("forces the privacy repair to activate and purge old caches", () => {
    expect(source).toContain('CACHE_VERSION = "v2"')
    expect(source).toContain("self.skipWaiting()")
    expect(source).toContain("await self.clients.claim()")
  })
})

describe("database-backed abuse controls", () => {
  const migration = readFileSync(
    "supabase/migrations/20260902000000_security_rate_limits.sql",
    "utf8",
  ).toLowerCase()

  it("keeps the limiter table inaccessible to browser roles", () => {
    expect(migration).toContain(
      "alter table public.security_rate_limits enable row level security",
    )
    expect(migration).toContain(
      "revoke all on table public.security_rate_limits from public, anon, authenticated",
    )
    expect(migration).not.toMatch(
      /grant\s+(?:select|insert|update|delete|all)[\s\S]*?security_rate_limits[\s\S]*?to\s+(?:anon|authenticated)/,
    )
  })

  it("exposes the atomic function only to the service role", () => {
    expect(migration).toContain("security invoker")
    expect(migration).toContain("set search_path = ''")
    expect(migration).toContain(
      "from public, anon, authenticated",
    )
    expect(migration).toContain("to service_role")
  })
})
