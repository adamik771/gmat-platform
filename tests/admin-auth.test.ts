import { afterEach, describe, expect, it } from "vitest"
import type { User } from "@supabase/supabase-js"
import { isAdmin } from "@/lib/admin-auth"

const originalAdminEmails = process.env.ADMIN_EMAILS

function user(overrides: Partial<User> = {}): User {
  return {
    id: "user-1",
    aud: "authenticated",
    role: "authenticated",
    email: "student@example.com",
    email_confirmed_at: new Date(0).toISOString(),
    phone: "",
    confirmed_at: new Date(0).toISOString(),
    last_sign_in_at: new Date(0).toISOString(),
    app_metadata: {},
    user_metadata: {},
    identities: [],
    created_at: new Date(0).toISOString(),
    updated_at: new Date(0).toISOString(),
    is_anonymous: false,
    ...overrides,
  }
}

afterEach(() => {
  if (originalAdminEmails === undefined) delete process.env.ADMIN_EMAILS
  else process.env.ADMIN_EMAILS = originalAdminEmails
})

describe("admin authorization", () => {
  it("rejects a self-assigned user_metadata role", () => {
    delete process.env.ADMIN_EMAILS
    expect(isAdmin(user({ user_metadata: { role: "admin" } }))).toBe(false)
  })

  it("accepts a server-controlled app_metadata role", () => {
    delete process.env.ADMIN_EMAILS
    expect(isAdmin(user({ app_metadata: { role: "admin" } }))).toBe(true)
  })

  it("accepts a case-insensitive configured email", () => {
    process.env.ADMIN_EMAILS = " OWNER@EXAMPLE.COM "
    expect(isAdmin(user({ email: "owner@example.com" }))).toBe(true)
  })
})
