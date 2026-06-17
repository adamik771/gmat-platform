"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion"

type Props = {
  start: number
  delta: number
  end: number
  durationMs?: number
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

// Returns true on the client after hydration, false during SSR. Cleaner
// than useState(false) + useEffect(() => setMounted(true)) and avoids the
// react-hooks/set-state-in-effect lint warning.
const subscribeNoop = () => () => {}
function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  )
}

function useCountUp(target: number, fire: boolean, durationMs: number, disabled: boolean) {
  const [value, setValue] = useState<number>(target)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (disabled) {
      // Sync value to target when animation is disabled. setState here is
      // intentional and required to honor target prop changes.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target)
      return
    }
    if (!fire) return
    setValue(0)
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / durationMs)
      const eased = easeOutCubic(progress)
      setValue(Math.round(target * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [fire, target, durationMs, disabled])

  return value
}

export default function ScoreCalloutNumbers({
  start,
  delta,
  end,
  durationMs = 1200,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const rootRef = useRef<HTMLDivElement | null>(null)
  const mounted = useHydrated()
  const [fire, setFire] = useState(false)

  useEffect(() => {
    if (!mounted) return
    if (prefersReducedMotion) {
      // Reduced-motion: skip the IntersectionObserver and fire immediately.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFire(true)
      return
    }
    const node = rootRef.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") {
      setFire(true)
      return
    }
    const rect = node.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh && rect.bottom > 0) {
      setFire(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setFire(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [mounted, prefersReducedMotion])

  const disableCountUp = !mounted || prefersReducedMotion
  const startVal = useCountUp(start, fire, durationMs, disableCountUp)
  const deltaVal = useCountUp(delta, fire, durationMs, disableCountUp)
  const endVal = useCountUp(end, fire, durationMs, disableCountUp)

  const reserveDigits = (n: number) =>
    "0".repeat(String(n).length)

  return (
    <div
      ref={rootRef}
      className="relative inline-flex items-center gap-4 sm:gap-8 px-5 sm:px-10 py-6 sm:py-8 rounded-2xl border mb-12"
      style={{
        borderColor: "rgba(201,168,76,0.18)",
        backgroundColor: "#111111",
        boxShadow:
          "0 0 80px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="text-center">
        <p
          className="font-display text-5xl sm:text-7xl font-semibold text-[#888888] tracking-[-0.03em] leading-none tabular-nums relative"
          aria-label={`${start}`}
        >
          <span aria-hidden className="invisible">
            {reserveDigits(start)}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            {startVal}
          </span>
        </p>
        <p className="text-[10px] tracking-[0.18em] uppercase text-[#555555] mt-3 font-medium">
          Start
        </p>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <div
          className="h-px w-10 sm:w-20"
          style={{
            background:
              "linear-gradient(to right, rgba(201,168,76,0.1), #C9A84C, rgba(201,168,76,0.1))",
          }}
        />
        <span
          className="text-[10px] tracking-[0.2em] uppercase font-semibold tabular-nums relative inline-block"
          style={{ color: "#C9A84C" }}
          aria-label={`+${delta}`}
        >
          <span aria-hidden className="invisible">
            +{reserveDigits(delta)}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            +{deltaVal}
          </span>
        </span>
      </div>
      <div className="text-center relative">
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.25) 0%, transparent 65%)",
            filter: "blur(20px)",
          }}
          aria-hidden
        />
        <p
          className="relative font-display text-5xl sm:text-7xl font-semibold tracking-[-0.03em] leading-none tabular-nums"
          style={{ color: "#C9A84C" }}
          aria-label={`${end}`}
        >
          <span aria-hidden className="invisible">
            {reserveDigits(end)}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            {endVal}
          </span>
        </p>
        <p
          className="relative text-[10px] tracking-[0.18em] uppercase mt-3 font-medium"
          style={{ color: "#C9A84C" }}
        >
          Official
        </p>
      </div>
    </div>
  )
}
