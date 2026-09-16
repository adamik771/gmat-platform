import type { Metadata } from "next"

// The signup page is a client component and cannot export metadata itself.
// Without this layout it inherited the homepage title/description with no
// canonical, indexing as a duplicate-homepage SERP result.
export const metadata: Metadata = {
  title: "Create Your Free Account",
  description:
    "Sign up for a free 7-day full-access trial — every chapter, the full question bank, mock exams, and the adaptive study plan. No credit card required.",
  alternates: { canonical: "/signup" },
}

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
