import type { Metadata } from "next"

// The login page is a client component and cannot export metadata itself.
// Without this layout it inherited the homepage title/description with no
// canonical, indexing as a duplicate-homepage SERP result (it is footer-linked,
// so crawlers do reach it).
export const metadata: Metadata = {
  title: "Log In",
  description:
    "Log in to your Zakarian GMAT account — chapters, practice, analytics, and your adaptive study plan.",
  alternates: { canonical: "/login" },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
