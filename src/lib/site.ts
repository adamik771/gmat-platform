// Single source of truth for public-facing site constants — the contact
// email and the headline content-stat claims. Pure string literals only, so
// this is safe to import from both server and client components (no node:fs).
// Change the value here, not inline in pages.
//
// Contact email: route mail through the brand domain rather than a personal
// Gmail. NOTE FOR DEPLOY: hello@zakariangmat.com must actually exist (or
// forward to the real inbox) before this ships, or contact/legal emails bounce.
export const SITE_CONTACT_EMAIL = "hello@zakariangmat.com"

// Question-bank claim. The live bank computes to ~1,933 original questions
// (src/lib/content.ts getAllQuestions().length, 62 chapters) as of 2026-06.
// We floor to a round "+" figure so the claim stays true as the bank grows
// and never contradicts the higher counts the app shows logged-in users.
// Bump to "2,000+" once getAllQuestions().length passes 2,000.
export const QUESTION_CLAIM = "1,900+ original practice questions"
export const QUESTION_CLAIM_SHORT = "1,900+ practice questions"

// Chapter-count claim. Live curriculum computes to 62 chapters as of 2026-07.
// Floored per the standing marketing rule; bump the floor here, never inline.
export const CHAPTER_COUNT_CLAIM = "50+"
