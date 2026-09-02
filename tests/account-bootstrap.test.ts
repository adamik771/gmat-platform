import { beforeEach, describe, expect, it, vi } from "vitest"

const { getRequestUser, isAdmin } = vi.hoisted(() => ({
  getRequestUser: vi.fn(),
  isAdmin: vi.fn(),
}))

vi.mock("@/lib/supabase/server", () => ({ getRequestUser }))
vi.mock("@/lib/admin-auth", () => ({ isAdmin }))

import { GET } from "@/app/api/account/me/route"

beforeEach(() => {
  getRequestUser.mockReset()
  isAdmin.mockReset()
})

describe("account shell bootstrap", () => {
  it("fails closed when no verified user exists", async () => {
    getRequestUser.mockResolvedValue(null)

    const response = await GET()

    expect(response.status).toBe(401)
    expect(response.headers.get("cache-control")).toBe("private, no-store")
    expect(response.headers.get("vary")).toBe("Cookie")
    expect(await response.json()).toEqual({ error: "Unauthorized" })
    expect(isAdmin).not.toHaveBeenCalled()
  })

  it("returns only display-safe fields for the current user", async () => {
    const user = {
      id: "user-123",
      email: "private@example.com",
      user_metadata: {
        full_name: "Ada Lovelace",
        target_score: 735,
      },
      app_metadata: { role: "admin" },
    }
    getRequestUser.mockResolvedValue(user)
    isAdmin.mockReturnValue(true)

    const response = await GET()
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(response.headers.get("cache-control")).toBe("private, no-store")
    expect(body).toEqual({
      userId: "user-123",
      displayName: "Ada",
      initials: "AL",
      isAdmin: true,
    })
    expect(JSON.stringify(body)).not.toContain("private@example.com")
    expect(JSON.stringify(body)).not.toContain("target_score")
    expect(isAdmin).toHaveBeenCalledWith(user)
  })

  it("uses an email initial without exposing the email", async () => {
    getRequestUser.mockResolvedValue({
      id: "user-456",
      email: "student@example.com",
      user_metadata: {},
      app_metadata: {},
    })
    isAdmin.mockReturnValue(false)

    const body = await (await GET()).json()

    expect(body).toEqual({
      userId: "user-456",
      displayName: "",
      initials: "S",
      isAdmin: false,
    })
  })
})
