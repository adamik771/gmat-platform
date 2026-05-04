"use client"

import { useEffect } from "react"
import type { ReviewCandidate } from "@/lib/review-queue"
import {
  saveCachedQuestions,
  saveReviewQueue,
  type CachedQuestion,
} from "@/lib/offline/review-cache"

/**
 * Side-effect-only component. On mount, writes the current review
 * queue + question payloads to IndexedDB so /offline/drill can run
 * the spaced-retrieval drills without network.
 *
 * Renders nothing. Both writes are best-effort and silent on failure
 * (private browsing, IDB quota exceeded, etc.).
 */
export default function ReviewCachePrimer({
  userId,
  queue,
  questions,
}: {
  userId: string
  queue: ReviewCandidate[]
  questions: CachedQuestion[]
}) {
  useEffect(() => {
    if (!userId) return
    if (queue.length === 0 && questions.length === 0) return
    void (async () => {
      await saveReviewQueue(userId, queue)
      await saveCachedQuestions(userId, questions)
    })()
  }, [userId, queue, questions])
  return null
}
