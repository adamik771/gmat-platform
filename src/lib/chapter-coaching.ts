/**
 * Pure decision for the "Chapter complete" card's coaching copy.
 *
 * Extracted from ChapterReader's ChapterCompletionCard so the branch selection
 * is unit-testable and can't crash the card. The previous inline logic fell
 * through to a `belowTargetRows.reduce(...)` with no initial value, which threw
 * "Reduce of empty array" — and crashed the page on completion — for any chapter
 * with NO problem sets (the welcome + section-intro chapters) or whose attempted
 * results don't match the chapter's own sets. This makes the "no rows to coach
 * on" cases resolve to a safe `generic` state instead.
 */
export type ChapterCoachingState =
  | "none_attempted" // has problem sets, none attempted yet
  | "all_above_target" // attempted some, all met their target
  | "has_weakest" // attempted some, at least one below target -> name the weakest
  | "generic" // no problem sets (intro chapters), or no attempted rows for this chapter's sets

export function selectChapterCoachingState(args: {
  hasProblemSets: boolean
  noneAttempted: boolean
  /** Count of this chapter's sets that have a recorded attempt (rows with accuracy). */
  attemptedCount: number
  /** Of the attempted rows, how many came in below their target. */
  belowTargetCount: number
}): ChapterCoachingState {
  const { hasProblemSets, noneAttempted, attemptedCount, belowTargetCount } = args
  if (!hasProblemSets) return "generic"
  if (noneAttempted) return "none_attempted"
  if (attemptedCount > 0 && belowTargetCount === 0) return "all_above_target"
  if (belowTargetCount > 0) return "has_weakest"
  // attempted count reported > 0 but no rows match this chapter's sets — coach generically.
  return "generic"
}
