import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const read = (path: string) => readFileSync(path, "utf8")
const theme = read("src/components/marketing/PublicTheme.module.css")

function luminance(hex: string) {
  const rgb = hex.slice(1).match(/../g)!.map((part) => parseInt(part, 16) / 255)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722
}

function contrast(a: string, b: string) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (values[0] + 0.05) / (values[1] + 0.05)
}

describe("public design boundary", () => {
  it("mounts only on public marketing and account-entry layouts", () => {
    for (const group of ["marketing", "auth"]) {
      const layout = read(`src/app/(${group})/layout.tsx`)
      expect(layout).toContain("PublicTheme.module.css")
      expect(layout).toContain("publicTheme.site")
      expect(layout).toContain('id="main-content"')
    }
    expect(read("src/app/(app)/layout.tsx")).not.toMatch(/PublicTheme|--public-/)
    expect(read("src/app/layout.tsx")).not.toContain("PublicTheme")
    expect(read("src/app/globals.css")).not.toContain("--public-ink")
    expect(theme).not.toMatch(/:global\((?:body|\.app-workbench)/)
    const rootRules = theme.split("\n").filter(line => line.includes(":global(html)"))
    expect(rootRules).toHaveLength(2)
    for (const rule of rootRules) {
      expect(rule.trim()).toMatch(/^:global\(html\):has\(\.site\), :global\(html\):has\(\.palette\) \{/)
    }
    expect(theme).not.toMatch(/font-size:\s*[^;]*vw/)
  })

  it("gives the portalled menu its own tokens and keyboard focus treatment", () => {
    expect(theme).toContain(".site, .drawer {")
    expect(theme).toContain(".drawer :is(a, button):focus-visible")
    const nav = read("src/components/shared/Navbar.tsx")
    expect(nav).toContain("publicTheme.drawer")
    expect(nav).toContain('aria-current={pathname === link.href ? "page" : undefined}')
    expect(nav).not.toContain("isHomepage")
  })

  it("preserves dark fallbacks for pricing components reused inside the app", () => {
    const card = read("src/components/marketing/PricingCard.tsx")
    expect(card).toContain("var(--public-ink,#F0F0F0)")
    expect(card).toContain("var(--public-surface,#111111)")
    expect(card).not.toMatch(/--public-ink\s*:/)
    const checkout = read("src/components/marketing/CheckoutButton.tsx")
    expect(checkout).toContain("var(--public-action,#C9A84C)")
    expect(checkout).toContain("var(--public-on-accent,#0A0A0A)")
  })

  it("uses accessible text, controls and actions on every dark public surface", () => {
    const token = (name: string) => theme.match(new RegExp(`--public-${name}: (#[0-9a-f]{6});`))![1]
    for (const foreground of ["ink", "body", "muted", "accent", "success", "danger", "warning", "info"]) {
      for (const background of ["bg", "surface", "surface-hover", "tint"].map(token)) {
        expect(contrast(token(foreground), background), `${foreground} on ${background}`).toBeGreaterThanOrEqual(4.5)
      }
    }
    for (const action of ["action", "action-hover"]) {
      expect(contrast(token("on-accent"), token(action))).toBeGreaterThanOrEqual(4.5)
    }
    for (const background of ["bg", "surface", "surface-hover", "tint"].map(token)) {
      expect(contrast(token("control-line"), background)).toBeGreaterThanOrEqual(3)
    }
  })

  it("shares one palette across the candidate and public pages with neutral large surfaces", () => {
    expect(theme).toContain(".palette, .site, .drawer")
    expect(theme).toContain("color-scheme: dark")
    expect(theme).toContain("--public-tint: #1b1b1b")
    const base = read("src/components/marketing/PublicLanding.module.css")
    expect(base).toContain('composes: palette from "./PublicTheme.module.css"')
    for (const file of [
      "src/components/marketing/Homepage.module.css",
      "src/app/(marketing)/pricing/Pricing.module.css",
      "src/app/(marketing)/course/Course.module.css",
      "src/components/marketing/PublicLanding.module.css",
      "src/components/marketing/TeachingFirst.module.css",
      "src/components/marketing/Resources.module.css",
    ]) {
      const css = read(file)
      expect(css, file).not.toMatch(/--public-[\w-]+\s*:/)
      expect(css, file).not.toMatch(/background(?:-color)?:\s*#(?:fff|f[0-9a-f]{5})\b/i)
    }
  })
})
