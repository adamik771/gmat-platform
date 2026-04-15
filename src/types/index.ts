// User & Auth
export interface User {
  id: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface Profile {
  id: string
  userId: string
  fullName: string
  targetScore: number
  currentScore: number
  examDate: string | null
  timezone: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
}

export type SubscriptionStatus = "active" | "canceled" | "past_due" | "trialing" | "inactive"
export type SubscriptionTier = "self_study" | "self_study_plus" | "coaching" | "intensive"

export interface Subscription {
  id: string
  userId: string
  stripeCustomerId: string
  stripeSubscriptionId: string | null
  stripePriceId: string | null
  tier: SubscriptionTier
  status: SubscriptionStatus
  currentPeriodStart: string | null
  currentPeriodEnd: string | null
  createdAt: string
  updatedAt: string
}

// Lessons
export type Section = "Quant" | "Verbal" | "DI"
export type Difficulty = "Beginner" | "Intermediate" | "Advanced"

export interface Lesson {
  id: string
  moduleNumber: number
  moduleName: string
  title: string
  description: string
  section: Section | "General"
  difficulty: Difficulty
  durationMinutes: number
  videoUrl: string | null
  order: number
  isPublished: boolean
  createdAt: string
}

export interface LessonProgress {
  id: string
  userId: string
  lessonId: string
  completed: boolean
  completedAt: string | null
  watchedSeconds: number
  notes: string | null
  createdAt: string
  updatedAt: string
}

// Practice
export type QuestionType =
  | "Problem Solving"
  | "Data Sufficiency"
  | "Critical Reasoning"
  | "Reading Comprehension"
  | "Sentence Correction"
  | "Data Insights"
  | "Multi-Source Reasoning"
  | "Table Analysis"
  | "Graphics Interpretation"
  | "Two-Part Analysis"

export interface Question {
  id: string
  section: Section
  type: QuestionType
  topic: string
  difficulty: Difficulty
  prompt: string
  options: string[]
  correctAnswer: number
  explanation: string
  createdAt: string
}

export interface QuestionSet {
  id: string
  userId: string
  name: string
  section: Section | "Mixed"
  difficulty: Difficulty | "Mixed"
  questionIds: string[]
  timeLimitMinutes: number | null
  createdAt: string
}

export interface PracticeAttempt {
  id: string
  userId: string
  questionSetId: string | null
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
  timeSpentSeconds: number
  errorType: string | null
  notes: string | null
  createdAt: string
}

// Analytics
export interface SectionScore {
  section: Section
  score: number
  accuracy: number
  trend: "up" | "down" | "stable"
  percentile: number
}

export interface WeeklyStats {
  week: string
  studyHours: number
  questionsAnswered: number
  accuracy: number
  estimatedScore: number
}

export interface AnalyticsSummary {
  userId: string
  currentEstimatedScore: number
  targetScore: number
  studyStreak: number
  totalStudyHours: number
  totalQuestionsAnswered: number
  overallAccuracy: number
  sections: SectionScore[]
  weeklyStats: WeeklyStats[]
  updatedAt: string
}

// Error Log
export type ErrorType =
  | "Conceptual"
  | "Careless"
  | "Time Pressure"
  | "Misread"
  | "Strategy"
  | "Other"

export interface ErrorLogEntry {
  id: string
  userId: string
  questionId: string
  section: Section
  topic: string
  questionPreview: string
  errorType: ErrorType
  notes: string | null
  reviewed: boolean
  reviewedAt: string | null
  createdAt: string
}

// Pricing
export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingTier {
  id: SubscriptionTier
  name: string
  price: number
  priceLabel: string
  description: string
  features: PricingFeature[]
  highlighted: boolean
  badge: string | null
  stripePriceId: string
  cta: string
}

// Navigation
export interface NavItem {
  label: string
  href: string
  icon?: string
  badge?: string
  children?: NavItem[]
}

// Dashboard
export interface ActivityItem {
  id: string
  type: "lesson_completed" | "practice_set" | "milestone" | "mock_exam" | "error_reviewed"
  title: string
  description: string
  timestamp: string
  score?: number
}

export interface QuickAction {
  label: string
  href: string
  icon: string
  description: string
}
