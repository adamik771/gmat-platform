import { describe, expect, it } from "vitest"
import {
  buildAdminStudentMetrics,
  type BuildAdminStudentMetricsInput,
} from "@/lib/admin-student-metrics"

const NOW = new Date("2026-09-02T12:00:00.000Z")

function input(
  overrides: Partial<BuildAdminStudentMetricsInput> = {},
): BuildAdminStudentMetricsInput {
  return {
    users: [
      {
        id: "student-1",
        email: "student@example.com",
        isAdmin: false,
        createdAt: "2026-08-01T12:00:00.000Z",
        lastSignInAt: "2026-09-02T10:00:00.000Z",
        userMetadata: { full_name: "Test Student", target_score: 705 },
        appMetadata: {},
      },
    ],
    sessions: [],
    attempts: [],
    userStates: [],
    activityDays: [],
    purchases: [],
    tutorUsage: [],
    lessonCompletions: [],
    chapters: [
      {
        slug: "chapter-1",
        section: "Quant",
        sections: [
          { id: "pre", type: "pretest" },
          { id: "read-1", type: "reading" },
          { id: "read-2", type: "reading" },
          { id: "summary", type: "summary" },
        ],
      },
      {
        slug: "chapter-2",
        section: "Verbal",
        sections: [{ id: "read", type: "reading" }],
      },
    ],
    questions: [],
    now: NOW,
    ...overrides,
  }
}

describe("admin student metrics", () => {
  it("uses the same reading-only chapter completion rule as the student dashboard", () => {
    const [student] = buildAdminStudentMetrics(
      input({
        userStates: [
          {
            user_id: "student-1",
            updated_at: "2026-09-02T09:00:00.000Z",
            data: {
              chapter_progress: {
                "chapter-1": {
                  sectionsRead: { "read-1": true, "read-2": true },
                },
              },
            },
          },
        ],
      }),
    )

    expect(student.completedChapters).toBe(1)
    expect(student.totalChapters).toBe(2)
    expect(student.courseCompletionPct).toBe(50)
  })

  it("excludes review and redo attempts from original-attempt accuracy", () => {
    const [student] = buildAdminStudentMetrics(
      input({
        sessions: [
          {
            id: "original",
            user_id: "student-1",
            slug: "algebra",
            topic: "Algebra",
            section: "Quant",
            total_questions: 2,
            correct_count: 1,
            total_time_ms: 120_000,
            created_at: "2026-09-01T12:00:00.000Z",
          },
          {
            id: "review",
            user_id: "student-1",
            slug: "review-quant-2026-09-02",
            topic: "Review",
            section: "Quant",
            total_questions: 1,
            correct_count: 0,
            total_time_ms: 30_000,
            created_at: "2026-09-02T09:00:00.000Z",
          },
        ],
        attempts: [
          {
            id: "a1",
            user_id: "student-1",
            session_id: "original",
            section: "Quant",
            is_correct: true,
            time_spent_ms: 40_000,
            created_at: "2026-09-01T12:01:00.000Z",
          },
          {
            id: "a2",
            user_id: "student-1",
            session_id: "original",
            section: "Quant",
            is_correct: false,
            time_spent_ms: 80_000,
            created_at: "2026-09-01T12:02:00.000Z",
          },
          {
            id: "a3",
            user_id: "student-1",
            session_id: "review",
            section: "Quant",
            is_correct: false,
            time_spent_ms: 30_000,
            created_at: "2026-09-02T09:01:00.000Z",
          },
        ],
      }),
    )

    expect(student.questions).toBe(2)
    expect(student.accuracy).toBe(50)
    expect(student.averageTimeMs).toBe(60_000)
  })

  it("takes the daily maximum of tracked and practice time instead of double counting", () => {
    const [student] = buildAdminStudentMetrics(
      input({
        sessions: [
          {
            id: "s1",
            user_id: "student-1",
            slug: "custom",
            topic: "Custom set",
            section: "Verbal",
            total_questions: 10,
            correct_count: 8,
            total_time_ms: 3_600_000,
            created_at: "2026-09-01T12:00:00.000Z",
          },
        ],
        activityDays: [
          {
            user_id: "student-1",
            activity_date: "2026-09-01",
            active_seconds: 5_400,
            last_seen_at: "2026-09-01T15:00:00.000Z",
          },
          {
            user_id: "student-1",
            activity_date: "2026-09-02",
            active_seconds: 1_800,
            last_seen_at: "2026-09-02T10:00:00.000Z",
          },
        ],
      }),
    )

    expect(student.activeHours).toBe(2)
    expect(student.activeHours30d).toBe(2)
    expect(student.activeDays30d).toBe(2)
    expect(student.trackedActivityAvailable).toBe(true)
  })

  it("identifies a focus section only after enough recent evidence", () => {
    const sections = [
      ...Array.from({ length: 10 }, (_, index) => ({
        id: `q-${index}`,
        user_id: "student-1",
        session_id: null,
        section: "Quant",
        is_correct: index < 2,
        time_spent_ms: 60_000,
        created_at: "2026-09-01T12:00:00.000Z",
      })),
      ...Array.from({ length: 10 }, (_, index) => ({
        id: `v-${index}`,
        user_id: "student-1",
        session_id: null,
        section: "Verbal",
        is_correct: index < 4,
        time_spent_ms: 60_000,
        created_at: "2026-09-01T12:00:00.000Z",
      })),
      {
        id: "d-1",
        user_id: "student-1",
        session_id: null,
        section: "DI",
        is_correct: false,
        time_spent_ms: 60_000,
        created_at: "2026-09-01T12:00:00.000Z",
      },
    ]
    const [student] = buildAdminStudentMetrics(input({ attempts: sections }))

    expect(student.weakestSection).toBe("Quant")
    expect(student.sectionMetrics.find((metric) => metric.section === "DI")?.questions).toBe(1)
  })

  it("counts unique questions actually due under the spacing ladder", () => {
    const attempts = [
      ...Array.from({ length: 10 }, (_, index) => ({
      id: `wrong-${index}`,
      user_id: "student-1",
      session_id: null,
      question_id: `q-${index}`,
      section: "Verbal",
      is_correct: false,
      time_spent_ms: 240_000,
      created_at: "2026-09-01T10:00:00.000Z",
      })),
      {
        id: "recovered-wrong",
        user_id: "student-1",
        session_id: null,
        question_id: "recovered",
        section: "Verbal",
        is_correct: false,
        time_spent_ms: 120_000,
        created_at: "2026-08-31T10:00:00.000Z",
      },
      {
        id: "recovered-correct",
        user_id: "student-1",
        session_id: null,
        question_id: "recovered",
        section: "Verbal",
        is_correct: true,
        time_spent_ms: 120_000,
        created_at: "2026-09-02T10:00:00.000Z",
      },
    ]
    const [student] = buildAdminStudentMetrics(
      input({ attempts }),
    )

    expect(student.reviewBacklog).toBe(10)
    expect(student.status).toBe("review-backlog")
  })

  it("includes chapter checks and cumulative problem-set work without mixing accuracies", () => {
    const [student] = buildAdminStudentMetrics(
      input({
        questions: [
          { id: "check-1", section: "Quant", correctAnswer: 1 },
          { id: "check-2", section: "Quant", correctAnswer: 2 },
        ],
        userStates: [
          {
            user_id: "student-1",
            updated_at: "2026-09-02T11:00:00.000Z",
            data: {
              chapter_progress: {
                "chapter-1": {
                  sectionsRead: { "read-1": true },
                  questions: {
                    "check-1": { selected: 1, submitted: true },
                    "check-2": { selected: 0, submitted: true },
                  },
                  problemSetResults: {
                    easy: {
                      correct: 4,
                      total: 5,
                      attempts: 2,
                      lifetimeCorrect: 7,
                      lifetimeTotal: 10,
                    },
                  },
                },
              },
            },
          },
        ],
      }),
    )

    expect(student.practiceQuestions).toBe(0)
    expect(student.learningQuestions).toBe(12)
    expect(student.totalQuestions).toBe(12)
    expect(student.learningAccuracy).toBe(67)
    expect(student.accuracy).toBeNull()
    expect(student.chapterSetsCompleted).toBe(2)
    expect(student.status).not.toBe("not-started")
  })

  it("uses recent timing for interventions while retaining lifetime timing", () => {
    const attempts = [
      ...Array.from({ length: 15 }, (_, index) => ({
        id: `old-${index}`,
        user_id: "student-1",
        session_id: null,
        section: "Quant",
        is_correct: true,
        time_spent_ms: 300_000,
        created_at: "2026-07-01T12:00:00.000Z",
      })),
      ...Array.from({ length: 15 }, (_, index) => ({
        id: `recent-${index}`,
        user_id: "student-1",
        session_id: null,
        section: "Quant",
        is_correct: true,
        time_spent_ms: 60_000,
        created_at: "2026-09-01T12:00:00.000Z",
      })),
    ]
    const [student] = buildAdminStudentMetrics(input({ attempts }))

    expect(student.averageTimeMs).toBe(180_000)
    expect(student.averageTime30dMs).toBe(60_000)
    expect(student.status).toBe("no-alert")
  })

  it("uses section-specific median pace for timing intervention", () => {
    const slowQuant = Array.from({ length: 15 }, (_, index) => ({
      id: `slow-${index}`,
      user_id: "student-1",
      session_id: null,
      question_id: `slow-q-${index}`,
      section: "Quant",
      is_correct: true,
      time_spent_ms: 170_000,
      created_at: "2026-09-01T12:00:00.000Z",
    }))
    const [student] = buildAdminStudentMetrics(input({ attempts: slowQuant }))

    expect(student.status).toBe("timing")
    expect(student.guidance).toContain("Quant median pace")
  })

  it("does not name a weakest section when only one section has enough evidence", () => {
    const attempts = Array.from({ length: 30 }, (_, index) => ({
      id: `only-${index}`,
      user_id: "student-1",
      session_id: null,
      question_id: `only-q-${index}`,
      section: "Quant",
      is_correct: index < 10,
      time_spent_ms: 60_000,
      created_at: "2026-09-01T12:00:00.000Z",
    }))
    const [student] = buildAdminStudentMetrics(input({ attempts }))

    expect(student.weakestSection).toBeNull()
  })

  it("caps implausibly long small sessions in historical activity fallback", () => {
    const [student] = buildAdminStudentMetrics(
      input({
        sessions: [
          {
            id: "suspended",
            user_id: "student-1",
            slug: "review-offline-1",
            topic: "Review",
            section: "Quant",
            total_questions: 1,
            correct_count: 0,
            total_time_ms: 7_200_000,
            created_at: "2026-09-01T12:00:00.000Z",
          },
        ],
      }),
    )

    expect(student.activeHours).toBe(0.3)
  })

  it("expires the displayed paid plan at its advertised duration", () => {
    const [student] = buildAdminStudentMetrics(
      input({
        purchases: [
          {
            user_id: "student-1",
            plan_id: "self_study",
            paid_at: "2026-05-02T12:00:00.000Z",
            revoked_at: null,
          },
        ],
      }),
    )

    expect(student.plan).toBe("self_study")
    expect(student.planActive).toBe(false)
    expect(student.planExpiresAt).toBe("2026-09-02T12:00:00.000Z")
  })
})
