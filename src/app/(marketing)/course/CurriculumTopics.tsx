import styles from "./Course.module.css"

export default function CurriculumTopics({ topics }: { topics: string[] }) {
  return (
    <ul className={styles.topics}>
      {topics.map((topic) => <li key={topic}>{topic.replaceAll(" & ", " and ")}</li>)}
    </ul>
  )
}
