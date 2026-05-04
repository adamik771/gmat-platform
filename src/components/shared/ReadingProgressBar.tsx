"use client"

import { useEffect, useState } from "react"

/**
 * Thin gold progress bar fixed to the top of the viewport that tracks how far
 * the user has scrolled through the main reading container. Specifically, it
 * measures the scroll position relative to the target element's rendered
 * range (from "top of element reaches viewport top" to "bottom of element
 * reaches viewport bottom"), so the bar accurately reflects reading
 * progress through that element — not through the whole document.
 */
export default function ReadingProgressBar({
  targetSelector = "article",
}: {
  targetSelector?: string
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const target = document.querySelector<HTMLElement>(targetSelector)
    if (!target) return

    const compute = () => {
      const rect = target.getBoundingClientRect()
      const viewportH = window.innerHeight
      // Total scrollable distance over which the target "reads":
      // from when its top hits the viewport top to when its bottom hits
      // the viewport bottom.
      const totalDistance = Math.max(rect.height - viewportH, 1)
      // Current scroll into the target: how far the target's top is
      // above the viewport top (clamped to [0, totalDistance]).
      const scrolledIn = Math.max(0, -rect.top)
      const clamped = Math.min(scrolledIn, totalDistance)
      setProgress(clamped / totalDistance)
    }

    compute()
    window.addEventListener("scroll", compute, { passive: true })
    window.addEventListener("resize", compute)
    return () => {
      window.removeEventListener("scroll", compute)
      window.removeEventListener("resize", compute)
    }
  }, [targetSelector])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none"
      aria-hidden
      style={{
        background: "transparent",
      }}
    >
      <div
        className="h-full origin-left transition-transform duration-75"
        style={{
          background: "linear-gradient(to right, #C9A84C, #b8963e)",
          width: "100%",
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  )
}
