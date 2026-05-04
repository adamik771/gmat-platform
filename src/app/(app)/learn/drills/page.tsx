import OutlineIndex from "../_OutlineIndex"

export const metadata = {
  title: "Micro-drills",
}

export default function DrillsIndex() {
  return (
    <OutlineIndex
      kind="drill"
      eyebrow="Micro-drills"
      title={{ prefix: "Drill", accent: "sets." }}
      description="8-question sub-chapter drill blocks (3 easy / 3 medium / 2 hard) with inline answer + trap + lesson notes. Built for quick retrieval between chapters or before a timed session."
    />
  )
}
