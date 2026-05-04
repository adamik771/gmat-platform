import OutlineIndex from "../_OutlineIndex"

export const metadata = {
  title: "Active recall checkpoints",
}

export default function RecallIndex() {
  return (
    <OutlineIndex
      kind="recall"
      eyebrow="Active Recall"
      title={{ prefix: "Recall", accent: "checkpoints." }}
      description="Free-recall question sets at the end of each sub-chapter section. The single highest-leverage retention tool the curriculum uses — close the chapter, attempt the questions cold, then check your answers."
    />
  )
}
