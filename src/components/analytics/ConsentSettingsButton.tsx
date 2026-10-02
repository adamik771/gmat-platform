"use client"

import { CONSENT_OPEN_EVENT } from "@/lib/analytics"

/**
 * The persistent "Privacy settings" control: reopens the consent banner so a
 * visitor can change their cookie/measurement choice at any time. Rendered in
 * the site footer, the privacy policy page, and app settings. Styling matches
 * the surrounding link lists via className passthrough.
 */
export default function ConsentSettingsButton({
  className,
}: {
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT))}
      className={className}
    >
      Privacy settings
    </button>
  )
}
