import type { Difficulty, Section } from "@/types"

export const DIFFICULTY_MAP = { Easy: "Beginner", Medium: "Intermediate", Hard: "Advanced" } as const
export type DifficultyPick = keyof typeof DIFFICULTY_MAP | "Mixed"
type PoolQuestion = { section: Section; topic: string; difficulty: Difficulty }

export function topicKey(question: Pick<PoolQuestion, "section" | "topic">): string {
  return `${question.section}:${question.topic}`
}

export function filterBuilderPool<T extends PoolQuestion>(pool: T[], sections: Section[], topics: string[], difficulty: DifficultyPick): T[] {
  return pool.filter((question) => sections.includes(question.section)
    && (topics.length === 0 || topics.includes(topicKey(question)))
    && (difficulty === "Mixed" || question.difficulty === DIFFICULTY_MAP[difficulty]))
}
