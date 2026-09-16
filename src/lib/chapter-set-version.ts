export interface GradedSetRun {
  idx: number
  answers: boolean[]
  at?: number
  questionIds?: string[]
}

export function sameQuestionOrder(a: readonly string[], b: readonly string[]) {
  return a.length === b.length && a.every((id, i) => id === b[i])
}

/** Retain the exact previous deck for a run that began before a pin correction. */
export function resolveGradedSetRun<Q extends { id: string }>(
  current: readonly Q[],
  previous: readonly Q[] | undefined,
  run: GradedSetRun | null | undefined,
): { questions: Q[]; run: GradedSetRun; previousVersion: boolean } | null {
  if (!run || !Number.isInteger(run.idx) || run.idx <= 0 || !Array.isArray(run.answers) || run.answers.length !== run.idx || !run.answers.every((answer) => typeof answer === "boolean")) return null
  const legacy = previous?.length ? previous : current
  const ids = run.questionIds ?? legacy.map((q) => q.id)
  if (!Array.isArray(ids) || new Set(ids).size !== ids.length) return null
  const currentIds = current.map((q) => q.id)
  const previousIds = previous?.map((q) => q.id) ?? []
  const isCurrent = sameQuestionOrder(ids, currentIds)
  if (!isCurrent && !sameQuestionOrder(ids, previousIds)) return null
  const questions = isCurrent ? current : previous!
  if (run.idx >= questions.length) return null
  return { questions: [...questions], run: { ...run, questionIds: [...ids] }, previousVersion: !isCurrent }
}

export function resultMatchesCurrentSet(
  current: readonly { id: string }[],
  previous: readonly { id: string }[] | undefined,
  result: { questionIds?: string[] } | null | undefined,
) {
  if (!result) return false
  if (!result.questionIds) return !previous?.length
  return sameQuestionOrder(result.questionIds, current.map((q) => q.id))
}
