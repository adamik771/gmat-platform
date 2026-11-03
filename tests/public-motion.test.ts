import { readFileSync } from "node:fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import PublicMotion from "@/components/marketing/PublicMotion"
import { startPublicMotion } from "@/components/marketing/public-motion"

vi.mock("next/navigation", () => ({ usePathname: () => "/course" }))

class Preference extends EventTarget { matches = false }
class Box {
  dataset: Record<string, string> = {}
  parentElement: Box | null = null
  children: Box[] = []
  grouped = false
  constructor(public top: number, kind?: string) { if (kind) this.dataset.motion = kind }
  getBoundingClientRect() { return { top: this.top, bottom: this.top + 120 } }
  contains(target: unknown) { return target === this || this.children.includes(target as Box) }
  hasAttribute(name: string) { return name === "data-motion-group" && this.grouped }
  animate = vi.fn<(frames: Keyframe[], options: KeyframeAnimationOptions) => { cancel: ReturnType<typeof vi.fn>; onfinish: (() => void) | null }>(() => ({
    cancel: vi.fn(), onfinish: null as (() => void) | null,
  }))
}

const media = new Map<string, Preference>()
let observed: { callback: IntersectionObserverCallback; observe: ReturnType<typeof vi.fn>; unobserve: ReturnType<typeof vi.fn>; disconnect: ReturnType<typeof vi.fn> }[]
let browser: { innerHeight: number; scrollY: number; matchMedia: (query: string) => Preference }
let doc: EventTarget & { hidden: boolean; activeElement: Box | null }

function rootFor(boxes: Box[]) {
  const listeners = new Map<string, EventListener>()
  const root = {
    querySelectorAll: () => boxes,
    addEventListener: (name: string, listener: EventListener) => listeners.set(name, listener),
    removeEventListener: (name: string) => listeners.delete(name),
  }
  return { root: root as unknown as HTMLElement, listeners }
}

function intersect(box: Box, isIntersecting = true) {
  observed[0].callback([{ target: box as unknown as Element, isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver)
}

beforeEach(() => {
  media.clear()
  observed = []
  browser = { innerHeight: 800, scrollY: 0, matchMedia: (query) => {
    if (!media.has(query)) media.set(query, new Preference())
    return media.get(query)!
  } }
  doc = Object.assign(new EventTarget(), { hidden: false, activeElement: null as Box | null })
  vi.stubGlobal("window", browser)
  vi.stubGlobal("document", doc)
  vi.stubGlobal("IntersectionObserver", class {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    constructor(public callback: IntersectionObserverCallback) { observed.push(this) }
  })
})
afterEach(() => vi.unstubAllGlobals())

describe("public motion", () => {
  it("server-renders all content without hidden states or a JavaScript dependency", () => {
    const html = renderToStaticMarkup(createElement(PublicMotion, null, createElement("h1", null, "Readable immediately")))
    expect(html).toContain("<h1>Readable immediately</h1>")
    expect(html).not.toMatch(/hidden|opacity|transform|inert|aria-hidden/)
    const css = readFileSync("src/components/marketing/PublicMotion.module.css", "utf8")
    expect(css).not.toMatch(/opacity:|visibility:|display:\s*none|will-change/)
    expect(css).toContain("prefers-reduced-motion: no-preference")
  })

  it.each(["(prefers-reduced-motion: reduce)", "print"])("leaves everything static for %s", (query) => {
    browser.matchMedia(query).matches = true
    const intro = new Box(100, "intro")
    const stop = startPublicMotion(rootFor([intro]).root)
    expect(observed).toHaveLength(0)
    expect(intro.animate).not.toHaveBeenCalled()
    stop()
  })

  it("does not hide visible content or animate a restored scroll position", () => {
    browser.scrollY = 600
    const intro = new Box(-300, "intro")
    const product = new Box(100, "product")
    const stop = startPublicMotion(rootFor([intro, product]).root)
    expect(intro.animate).not.toHaveBeenCalled()
    expect(product.animate).not.toHaveBeenCalled()
    expect(observed[0].observe).not.toHaveBeenCalled()
    stop()
  })

  it("keeps initial product text visible and clears completed animation effects", () => {
    const product = new Box(400, "product")
    const stop = startPublicMotion(rootFor([product]).root)
    const [frames, timing] = product.animate.mock.calls[0]
    expect(frames[0]).toEqual({ opacity: 1, transform: "translateY(16px) scale(0.99)" })
    expect(timing.duration).toBe(700)
    const animation = product.animate.mock.results[0].value
    animation.onfinish!()
    expect(animation.cancel).toHaveBeenCalledOnce()
    stop()
    expect(animation.cancel).toHaveBeenCalledOnce()
  })

  it("reveals once, staggers a row, and never changes layout properties", () => {
    const cards = [new Box(950), new Box(950), new Box(950), new Box(1250)]
    const group = new Box(950)
    group.grouped = true
    group.children = cards
    cards.forEach((card) => { card.parentElement = group })
    const stop = startPublicMotion(rootFor(cards).root)
    intersect(cards[0], false)
    expect(cards[0].animate).not.toHaveBeenCalled()
    cards.forEach((card) => intersect(card))
    expect(cards.map((card) => card.animate.mock.calls[0][1].delay)).toEqual([0, 45, 90, 0])
    for (const card of cards) {
      const [frames] = card.animate.mock.calls[0]
      frames.forEach((frame) => expect(Object.keys(frame).sort()).toEqual(["opacity", "transform"]))
      intersect(card)
      expect(card.animate).toHaveBeenCalledOnce()
    }
    stop()
    cards.forEach((card) => expect(card.animate.mock.results[0].value.cancel).toHaveBeenCalledOnce())
  })

  it("shortens motion and removes stagger delays on small screens", () => {
    browser.matchMedia("(max-width: 700px)").matches = true
    const box = new Box(1000)
    const stop = startPublicMotion(rootFor([box]).root)
    intersect(box)
    expect(box.animate.mock.calls[0][0][0].transform).toBe("translateY(6px)")
    expect(box.animate.mock.calls[0][1]).toMatchObject({ duration: 360, delay: 0 })
    stop()
  })

  it("settles immediately when a visitor interacts and cancels on a motion preference change", () => {
    const focused = new Box(1000)
    const pending = new Box(1200)
    const { root, listeners } = rootFor([focused, pending])
    const stop = startPublicMotion(root)
    intersect(focused)
    listeners.get("focusin")!({ target: focused } as unknown as Event)
    expect(focused.animate.mock.results[0].value.cancel).toHaveBeenCalledOnce()
    const preference = browser.matchMedia("(prefers-reduced-motion: reduce)")
    preference.matches = true
    preference.dispatchEvent(new Event("change"))
    expect(observed[0].disconnect).toHaveBeenCalledOnce()
    intersect(pending)
    expect(pending.animate).not.toHaveBeenCalled()
    stop()
    expect(listeners.size).toBe(0)
  })

  it("skips focused targets, catches missing animation support, and cleans up hidden-page work", () => {
    const focused = new Box(1000)
    const unsupported = new Box(1100)
    const normal = new Box(1200)
    unsupported.animate.mockImplementation(() => { throw new Error("Unavailable") })
    const stop = startPublicMotion(rootFor([focused, unsupported, normal]).root)
    doc.activeElement = focused
    intersect(focused)
    expect(focused.animate).not.toHaveBeenCalled()
    expect(() => intersect(unsupported)).not.toThrow()
    intersect(normal)
    doc.hidden = true
    doc.dispatchEvent(new Event("visibilitychange"))
    expect(normal.animate.mock.results[0].value.cancel).toHaveBeenCalledOnce()
    stop()
  })

  it("does nothing when IntersectionObserver is unavailable", () => {
    vi.stubGlobal("IntersectionObserver", undefined)
    const intro = new Box(100, "intro")
    expect(() => startPublicMotion(rootFor([intro]).root)()).not.toThrow()
    expect(intro.animate).not.toHaveBeenCalled()
  })

  it("is confined to public marketing and excludes forms and question inputs from reveal targets", () => {
    const read = (path: string) => readFileSync(path, "utf8")
    expect(read("src/app/(marketing)/layout.tsx")).toContain("<PublicMotion>")
    for (const path of ["src/app/(app)/layout.tsx", "src/app/(auth)/layout.tsx"]) expect(read(path)).not.toContain("PublicMotion")
    expect(read("src/components/marketing/LeadCapture.tsx")).not.toContain("data-motion")
    expect(read("src/app/(marketing)/sample-chapter/SampleQuestion.tsx")).not.toContain("data-motion")
    const source = read("src/components/marketing/public-motion.ts")
    expect(source).not.toMatch(/requestAnimationFrame|addEventListener\("scroll"|preventDefault/)
  })

  it("keeps reading, prices, metrics and page introductions steady", () => {
    const home = readFileSync("src/app/(marketing)/page.tsx", "utf8")
    const course = readFileSync("src/app/(marketing)/course/page.tsx", "utf8")
    const pricing = readFileSync("src/app/(marketing)/pricing/page.tsx", "utf8")
    for (const source of [home, course, pricing]) {
      expect(source).not.toMatch(/data-motion="intro"/)
      expect(source).not.toMatch(/className=\{(?:styles|pricing)\.(?:inventory|plans|phases|studySteps|path)\} data-motion/)
    }
    const css = readFileSync("src/app/(marketing)/course/Course.module.css", "utf8")
    const tabFrames = css.split("@keyframes sample-enter")[1].split(".lessonContext")[0]
    expect(tabFrames).not.toMatch(/transform|height|width/)
    expect(css).toContain(".samplePanel:focus-within { animation: none; }")
  })
})
