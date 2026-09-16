import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const page = readFileSync("src/app/(app)/admin/students/page.tsx", "utf8")
const layout = readFileSync("src/app/(app)/admin/layout.tsx", "utf8")
const loader = readFileSync("src/lib/admin-student-data.ts", "utf8")
const adminMe = readFileSync("src/app/api/admin/me/route.ts", "utf8")

describe("admin student data boundary", () => {
  it("fails closed at both admin route layers", () => {
    expect(layout).toContain("if (!isAdmin(user)) notFound()")
    expect(page).toContain("if (!isAdmin(user)) notFound()")
    expect(page.indexOf("if (!isAdmin(user)) notFound()")).toBeLessThan(
      page.indexOf("loadAdminStudentMetrics(user"),
    )
  })

  it("checks the trusted viewer before creating a service-role client", () => {
    expect(loader.indexOf("if (!isAdmin(viewer))")).toBeGreaterThan(-1)
    expect(loader.indexOf("if (!isAdmin(viewer))")).toBeLessThan(
      loader.indexOf("getSupabaseService()"),
    )
    expect(loader).not.toMatch(/user_metadata\??\.role/)
  })

  it("exposes only the current viewer's admin boolean to the app shell", () => {
    expect(adminMe).toContain("{ isAdmin: isAdmin(user) }")
    expect(adminMe).toContain('"cache-control": "private, no-store"')
    expect(adminMe).not.toContain("getSupabaseService")
    expect(adminMe).not.toMatch(/students|practice_attempts|auth\.admin/)
  })
})
