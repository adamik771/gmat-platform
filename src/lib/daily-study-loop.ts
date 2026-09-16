export interface DailyStudyStatus {
  complete: boolean
  answered: number
  goal: number
  remaining: number
}

/** One canonical interpretation of the dashboard's daily question target. */
export function deriveDailyStudyStatus(
  questionsToday: number,
  dailyGoal: number
): DailyStudyStatus {
  const answered = Number.isFinite(questionsToday)
    ? Math.max(0, Math.floor(questionsToday))
    : 0
  const goal = Number.isFinite(dailyGoal) ? Math.max(1, Math.floor(dailyGoal)) : 1
  return {
    complete: answered >= goal,
    answered,
    goal,
    remaining: Math.max(0, goal - answered),
  }
}
