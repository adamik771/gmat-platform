import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const skeleton = readFileSync("src/components/shared/PageSkeleton.tsx", "utf8")
const styles = readFileSync("src/app/globals.css", "utf8")

describe("authenticated route loading", () => {
  it("uses one delayed Z without replacing the accessible loading state", () => {
    expect(skeleton).toContain('<span className="sr-only" role="status">')
    expect(skeleton).toContain('<div className="app-route-progress"')
    expect(skeleton).toContain('<div className="app-route-brand"')
    expect(skeleton).toContain("<span>Z</span>")
    expect(skeleton).not.toContain("ZG")
    expect(styles).toContain(
      "animation: route-brand-reveal 220ms ease-out 300ms forwards",
    )
  })

  it("never bounces or moves the brand mark", () => {
    const brandAnimation = styles.match(
      /@keyframes route-brand-breathe[\s\S]*?\n}/,
    )?.[0]
    expect(brandAnimation).toBeTruthy()
    expect(brandAnimation).toContain("opacity")
    expect(brandAnimation).not.toMatch(/transform|translate|scale/)
    expect(styles).not.toMatch(/route-brand-bounce/)
  })

  it("has a static reduced-motion presentation", () => {
    const reducedMotion = styles.match(
      /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\n}/,
    )?.[0]
    expect(reducedMotion).toBeTruthy()
    expect(reducedMotion).toContain("animation: none")
  })

  it("keeps both desktop and mobile shell geometry aligned", () => {
    expect(styles).toContain("left: 15rem")
    expect(styles).toContain("@media (max-width: 1023px)")
    expect(styles).toMatch(/\.app-route-brand[\s\S]*?left: 0/)
    expect(styles).toMatch(/\.app-route-progress[\s\S]*?left: 0/)
  })
})
