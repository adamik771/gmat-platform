import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const appLayout = readFileSync("src/app/(app)/layout.tsx", "utf8")
const accountRoute = readFileSync("src/app/api/account/me/route.ts", "utf8")
const offlineSync = readFileSync(
  "src/components/offline/OfflineSyncTrigger.tsx",
  "utf8",
)
const adaptiveEngine = readFileSync("src/lib/adaptive-plan-engine.ts", "utf8")
const studyPlanEngine = readFileSync("src/lib/study-plan-engine.ts", "utf8")
const firstRunGuide = readFileSync(
  "src/app/(app)/dashboard/FirstRunGuide.tsx",
  "utf8",
)
const consultOffer = readFileSync(
  "src/app/(app)/dashboard/ConsultOffer.tsx",
  "utf8",
)

describe("authenticated shell performance boundaries", () => {
  it("bootstraps the shell from one minimal server-verified endpoint", () => {
    expect(appLayout).toContain('fetch("/api/account/me"')
    expect(appLayout).not.toContain('fetch("/api/admin/me"')
    expect(appLayout).not.toMatch(
      /^import .*createSupabaseBrowser.*from "@\/lib\/supabase\/browser"/m,
    )
    expect(accountRoute).toContain("const user = await getRequestUser()")
    expect(accountRoute).toContain("status: 401")
    expect(accountRoute).toContain('"cache-control": "private, no-store"')
    expect(accountRoute).not.toContain("getSupabaseService")
    expect(accountRoute).not.toMatch(/practice_attempts|auth\.admin|students/)
  })

  it("does not eagerly prefetch every authenticated destination", () => {
    expect(appLayout).toContain("prefetch={false}")
    expect(appLayout).toContain("router.prefetch(href)")
    expect(appLayout).toContain("onMouseEnter={() => onIntent(item.href)}")
    expect(appLayout).toContain("onFocus={() => onIntent(item.href)}")
  })

  it("keeps Supabase and offline persistence code out of the initial shell", () => {
    expect(appLayout).toContain('import("@/lib/supabase/browser")')
    expect(appLayout).toContain('import("@/lib/offline/sync")')
    expect(appLayout).toContain('import("@/lib/offline/review-cache")')
    expect(offlineSync).toContain('await import("@/lib/offline/sync")')
    expect(offlineSync).not.toMatch(
      /^import .*drainPendingAttempts.*from "@\/lib\/offline\/sync"/m,
    )
    for (const dashboardAction of [firstRunGuide, consultOffer]) {
      expect(dashboardAction).toContain(
        'await import("@/lib/supabase/browser")',
      )
      expect(dashboardAction).not.toMatch(
        /^import .*createSupabaseBrowser.*from "@\/lib\/supabase\/browser"/m,
      )
    }
  })
})

describe("server-read concurrency guardrails", () => {
  it("collects independent adaptive-plan sources concurrently", () => {
    expect(adaptiveEngine).toContain("await Promise.all([")
    expect(adaptiveEngine).toContain("loadDiagnosticReport(supabase, userId)")
    expect(adaptiveEngine).toContain("loadLatestMockReport(supabase, userId)")
    expect(adaptiveEngine).toContain("attemptsPromise")
    expect(adaptiveEngine).toContain("spacedQueuePromise")
  })

  it("loads the review queue and topic attempts concurrently", () => {
    expect(studyPlanEngine).toContain(
      "const [queue, { data: attemptRows }] = await Promise.all([",
    )
    expect(studyPlanEngine).toContain("queuePromise")
    expect(studyPlanEngine).toContain("attemptsPromise")
  })
})
