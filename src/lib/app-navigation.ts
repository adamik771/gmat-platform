export const appSections = [
  { label: "Today", href: "/dashboard", routes: ["/dashboard", "/study-plan"], views: [
    { label: "Today", href: "/dashboard" },
    { label: "Study plan", href: "/study-plan" },
    { label: "Long-term plan", href: "/study-plan/adaptive" },
  ] },
  { label: "Learn", href: "/chapters", routes: ["/chapters", "/learn", "/guides", "/lessons"], views: [
    { label: "Interactive chapters", href: "/chapters" },
    { label: "Supporting readings", href: "/learn" },
    { label: "Reference library", href: "/guides" },
  ] },
  { label: "Practice", href: "/practice", routes: ["/practice", "/test-builder"], views: [
    { label: "Chapter sets", href: "/practice" },
    { label: "Custom set", href: "/test-builder" },
    { label: "History", href: "/practice/history" },
  ] },
  { label: "Review", href: "/review", routes: ["/review", "/error-log"], views: [
    { label: "Due review", href: "/review" },
    { label: "Full queue", href: "/review/all" },
    { label: "Error log", href: "/error-log" },
    { label: "Saved", href: "/review/saved" },
  ] },
  { label: "Exams", href: "/mock", routes: ["/mock"], views: [] },
  { label: "Analytics", href: "/analytics", routes: ["/analytics", "/score-calculator"], views: [
    { label: "Performance", href: "/analytics" },
    { label: "Score calculator", href: "/score-calculator" },
  ] },
] as const

export function routeMatches(pathname: string, route: string): boolean {
  return pathname === route || pathname.startsWith(`${route}/`)
}

export function getAppSection(pathname: string) {
  return appSections.find((section) => section.routes.some((route) => routeMatches(pathname, route)))
}

export function getActiveAppView(pathname: string) {
  const section = getAppSection(pathname)
  return section?.views.filter((view) => routeMatches(pathname, view.href))
    .sort((a, b) => b.href.length - a.href.length)[0]
}
