"use client"

import { useRouter } from "next/navigation"
import SaveForReviewButton from "@/components/review/SaveForReviewButton"

/**
 * The Saved tab's per-row unsave control. Wraps the shared SaveForReviewButton
 * and refreshes the route the moment a question is unsaved, so the row (and the
 * header count) drop out immediately instead of lingering until a manual reload.
 */
export default function SavedUnsaveButton({ questionId }: { questionId: string }) {
  const router = useRouter()
  return (
    <SaveForReviewButton
      questionId={questionId}
      initialSaved
      variant="compact"
      onToggle={(saved) => {
        if (!saved) router.refresh()
      }}
    />
  )
}
