import { describe, expect, it } from "vitest"
import { resolveSiteOrigin } from "@/lib/site-origin"

describe("trusted site origin", () => {
  it("uses the configured canonical origin in production", () => {
    expect(
      resolveSiteOrigin("https://attacker.example/api/checkout", {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: "https://www.zakariangmat.com/ignored/path",
        VERCEL_ENV: "production",
      }),
    ).toBe("https://www.zakariangmat.com")
  })

  it("falls back to the canonical production domain for invalid config", () => {
    expect(
      resolveSiteOrigin("https://attacker.example", {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: "javascript:alert(1)",
      }),
    ).toBe("https://www.zakariangmat.com")
  })

  it("allows loopback origins during local development", () => {
    expect(
      resolveSiteOrigin("http://localhost:3027/api/checkout", {
        NODE_ENV: "development",
      }),
    ).toBe("http://localhost:3027")
  })

  it("allows only an exact Vercel preview host", () => {
    const env = {
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
      VERCEL_URL: "gmat-preview-abc.vercel.app",
    }
    expect(
      resolveSiteOrigin("https://gmat-preview-abc.vercel.app/api/checkout", env),
    ).toBe("https://gmat-preview-abc.vercel.app")
    expect(resolveSiteOrigin("https://evil.vercel.app/api/checkout", env)).toBe(
      "https://www.zakariangmat.com",
    )
  })

  it("rejects credential-bearing configured URLs", () => {
    expect(
      resolveSiteOrigin(undefined, {
        NEXT_PUBLIC_SITE_URL: "https://user:pass@example.com",
      }),
    ).toBe("https://www.zakariangmat.com")
  })
})
