"use client"

import { useEffect, useRef } from "react"
import { trackEvent } from "@/lib/analytics"

type EventProps = Record<string, string | number | boolean | null>

/**
 * Fires a single trackEvent when mounted — for page-view funnel events like
 * `pricing_view` that have no natural click to hang an event on. Drop it into
 * a server page (e.g. <TrackView event="pricing_view" />); the ref guard keeps
 * it to one fire per mount even if props identity changes.
 */
export default function TrackView({
  event,
  props,
}: {
  event: string
  props?: EventProps
}) {
  const fired = useRef(false)
  useEffect(() => {
    if (fired.current) return
    fired.current = true
    trackEvent(event, props)
  }, [event, props])
  return null
}
