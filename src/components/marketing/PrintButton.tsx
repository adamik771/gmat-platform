"use client"

import { Printer } from "lucide-react"

/**
 * Print / save-as-PDF trigger. Uses a real onClick handler instead of an
 * `href="javascript:window.print()"` link — that scheme is commonly blocked
 * by CSP and refused by iOS Safari, so the checklist's headline "printable"
 * action would silently no-op on phones.
 */
export default function PrintButton({
  label = "Print or save as PDF",
}: {
  label?: string
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
      style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
    >
      <Printer className="w-4 h-4" />
      {label}
    </button>
  )
}
