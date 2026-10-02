"use client"

import type { ComponentPropsWithoutRef } from "react"
import { trackPlanEnquiry, type PlanEnquiryEvent } from "@/lib/analytics"

type PlanEnquiryLinkProps = Pick<ComponentPropsWithoutRef<"a">, "children" | "className" | "target" | "rel"> & {
  href: string
  planId: PlanEnquiryEvent["plan_id"]
  channel: PlanEnquiryEvent["channel"]
  surface: PlanEnquiryEvent["surface"]
}

export default function PlanEnquiryLink({ planId, channel, surface, ...anchorProps }: PlanEnquiryLinkProps) {
  const recordClick = () => trackPlanEnquiry({ plan_id: planId, channel, surface })

  return (
    <a
      {...anchorProps}
      onClick={recordClick}
      onAuxClick={(event) => { if (event.button === 1) recordClick() }}
    />
  )
}
