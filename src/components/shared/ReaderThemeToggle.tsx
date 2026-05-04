"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export type ReadingTheme = "light" | "dark"

const STORAGE_KEY = "gmat-reading-theme"

/**
 * Returns the user's last-chosen reading theme, or "light" for first-time
 * visitors ("brighten content" default). SSR-safe — returns "light"
 * on the server; useEffect rehydrates on mount.
 */
export function useReadingTheme(): [ReadingTheme, (t: ReadingTheme) => void] {
  const [theme, setTheme] = useState<ReadingTheme>("light")

  // Rehydrate from localStorage on mount. Reads a browser API, so the
  // setState here is required — alternative would be a hydration mismatch.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "light" || stored === "dark") setTheme(stored)
    } catch {
      // Private-mode / disabled storage — fall through to default.
    }
  }, [])

  function update(next: ReadingTheme) {
    setTheme(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Silently ignore storage failures.
    }
  }

  return [theme, update]
}

/**
 * Applies the reading theme to any element carrying the `.reader-themed`
 * class. The corresponding CSS variables live in `src/app/globals.css`.
 *
 * Usage — place the toggle in the reader's header bar, and pass the
 * same `theme` value as the `data-reading-theme` attribute on the
 * shell element that also has `.reader-themed`.
 */
export default function ReaderThemeToggle({
  theme,
  onChange,
  className,
}: {
  theme: ReadingTheme
  onChange: (t: ReadingTheme) => void
  className?: string
}) {
  const next: ReadingTheme = theme === "light" ? "dark" : "light"
  const Icon = theme === "light" ? Moon : Sun
  const label = `Switch to ${next} reading mode`

  return (
    <button
      type="button"
      onClick={() => onChange(next)}
      aria-label={label}
      title={label}
      className={
        "inline-flex items-center justify-center w-9 h-9 rounded-lg " +
        "border transition-all duration-150 hover:scale-[1.04] active:scale-[0.96] " +
        (className ?? "")
      }
      style={{
        borderColor: "var(--read-border-strong)",
        backgroundColor: "var(--read-bg-elevated)",
        color: "var(--read-text-muted)",
      }}
    >
      <Icon className="w-4 h-4" />
    </button>
  )
}
