/**
 * Shared keyboard-shortcut helpers for the practice and mock runners.
 *
 * The two runners bind number keys (1-5 → option A-E), space for
 * Submit / Next, "n" for Next, "f" for Flag (mock only). Both share a
 * "don't hijack while typing" guard.
 */

/**
 * Returns true when the event originated from a form field or
 * contentEditable element — in that case we should NOT swallow the key
 * as a shortcut. Also skips if a modifier is held (ctrl/meta/alt) so
 * the student can still use browser shortcuts like Cmd+F.
 */
export function shouldIgnoreKeyboardShortcut(event: KeyboardEvent): boolean {
  if (event.ctrlKey || event.metaKey || event.altKey) return true
  const target = event.target as HTMLElement | null
  if (!target) return false
  const tag = target.tagName
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true
  if (target.isContentEditable) return true
  return false
}

/**
 * Maps a digit key event ("1".."9") to a zero-based option index, or
 * null if the key isn't a digit in range. Used for A-E selection: 1=A,
 * 2=B, ... — caller enforces the upper bound (typically 5).
 */
export function digitKeyToOptionIndex(
  key: string,
  maxOptions: number
): number | null {
  if (!/^[1-9]$/.test(key)) return null
  const index = Number(key) - 1
  if (index >= maxOptions) return null
  return index
}
