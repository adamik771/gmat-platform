/**
 * Shared constants used by both the server page (for aggregations) and
 * the client component (for UI). Keeping these in a non-"use client"
 * module so the server can iterate them without the Turbopack
 * client-boundary weirdness that drops non-component exports.
 */

export const ERROR_TAGS = [
  "Conceptual",
  "Careless",
  "Time Pressure",
  "Misread",
  "Strategy",
  "Other",
] as const

export type ErrorTag = (typeof ERROR_TAGS)[number]
