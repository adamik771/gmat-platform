const noop = () => {}

/** Progressive enhancement: server-rendered content is always visible without animation support. */
export function startPublicMotion(root: HTMLElement): () => void {
  const targets = [...root.querySelectorAll<HTMLElement>("[data-motion], [data-motion-group] > *")]
  if (!targets.length || !window.matchMedia || typeof IntersectionObserver === "undefined") return noop
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
  const print = window.matchMedia("print")
  if (reduced.matches || print.matches) return noop

  const compact = window.matchMedia("(max-width: 700px)").matches
  const active = new Map<HTMLElement, Animation>()
  const seen = new Set<HTMLElement>()
  let stopped = false

  function reveal(element: HTMLElement, entering = false) {
    if (seen.has(element)) return
    seen.add(element)
    if (stopped || typeof element.animate !== "function" || document.hidden || element.contains(document.activeElement)) return
    const product = element.dataset.motion === "product"
    const offset = compact ? 6 : product ? 16 : 12
    const group = element.parentElement
    const row = group?.hasAttribute("data-motion-group")
      ? [...group.children].filter((sibling) => Math.abs(sibling.getBoundingClientRect().top - element.getBoundingClientRect().top) < 24)
      : []
    const delay = compact || entering ? 0 : Math.min(90, Math.max(0, row.indexOf(element)) * 45)

    // Only compositor properties change; the layout and scroll position stay native.
    try {
      const animation = element.animate([
        { opacity: entering ? 1 : 0, transform: `translateY(${offset}px)${product ? " scale(0.99)" : ""}` },
        { opacity: 1, transform: "none" },
      ], { duration: compact ? 360 : product ? 700 : 520, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" })
      active.set(element, animation)
      animation.onfinish = () => { animation.cancel(); active.delete(element) }
    } catch {
      // A failed enhancement must never prevent someone from reading or using the page.
    }
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      observer.unobserve(entry.target)
      reveal(entry.target as HTMLElement)
    }
  }, { threshold: 0, rootMargin: "0px 0px 48px 0px" })

  for (const element of targets) {
    const rect = element.getBoundingClientRect()
    // Never fade out content already on screen or restored by back/anchor navigation.
    if (rect.top < window.innerHeight) {
      if (rect.bottom > 0 && window.scrollY < 24 && ["intro", "product"].includes(element.dataset.motion ?? "")) reveal(element, true)
      else seen.add(element)
    } else observer.observe(element)
  }

  function cancelActive() {
    for (const animation of active.values()) animation.cancel()
    active.clear()
  }
  function settleInteraction(event: Event) {
    for (const element of targets) {
      if (!element.contains(event.target as Node)) continue
      seen.add(element)
      observer.unobserve(element)
      active.get(element)?.cancel()
      active.delete(element)
    }
  }
  function stopForPreference() {
    if (!reduced.matches && !print.matches) return
    stopped = true
    observer.disconnect()
    cancelActive()
  }
  function onVisibilityChange() {
    if (document.hidden) cancelActive()
  }

  root.addEventListener("focusin", settleInteraction)
  root.addEventListener("pointerdown", settleInteraction)
  reduced.addEventListener("change", stopForPreference)
  print.addEventListener("change", stopForPreference)
  document.addEventListener("visibilitychange", onVisibilityChange)
  return () => {
    stopped = true
    observer.disconnect()
    cancelActive()
    root.removeEventListener("focusin", settleInteraction)
    root.removeEventListener("pointerdown", settleInteraction)
    reduced.removeEventListener("change", stopForPreference)
    print.removeEventListener("change", stopForPreference)
    document.removeEventListener("visibilitychange", onVisibilityChange)
  }
}
