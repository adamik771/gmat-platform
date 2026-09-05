import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  LayoutDashboard,
  RotateCcw,
  Target,
} from "lucide-react"

const nav = [
  { label: "Today", icon: LayoutDashboard, active: true },
  { label: "Course", icon: BookOpen, active: false },
  { label: "Practice", icon: Target, active: false },
  { label: "Review", icon: RotateCcw, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
]

const signals = [
  { label: "Course", value: "38%", detail: "24 of 63 chapters", progress: 38 },
  { label: "Review", value: "8 due", detail: "3 high priority" },
  { label: "This week", value: "86", detail: "questions answered" },
]

const reviewTopics = [
  { label: "Assumption", count: "3 questions" },
  { label: "Rates & work", count: "2 questions" },
  { label: "Table Analysis", count: "3 questions" },
]

export default function HeroDashboardCard() {
  return (
    <div className="product-workbench" aria-label="Zakarian GMAT dashboard preview">
      <aside className="product-workbench__rail" aria-hidden="true">
        <div className="product-workbench__brand">
          <strong>ZAKARIAN</strong>
          <span />
          <strong>GMAT</strong>
        </div>
        <div className="product-workbench__nav">
          {nav.map(({ label, icon: Icon, active }) => (
            <div key={label} className={active ? "is-active" : undefined}>
              <Icon />
              {label}
            </div>
          ))}
        </div>
        <div className="product-workbench__rail-status">
          <span />
          Study plan active
        </div>
      </aside>

      <div className="product-workbench__main">
        <header className="product-workbench__header">
          <div>
            <p>Tuesday, 8:40</p>
            <strong>Good morning.</strong>
          </div>
          <div className="product-workbench__focus">
            <Target aria-hidden="true" />
            Focus 25
          </div>
        </header>

        <div className="product-workbench__body">
          <section className="product-workbench__mission">
            <div className="product-workbench__mission-copy">
              <div className="product-workbench__mission-label">
                <Target aria-hidden="true" />
                Today&apos;s mission
              </div>
              <h2>Complete a 15-question Number Properties set</h2>
              <p>
                Chosen from your weakest recent skill signal. One focused set,
                then the mistakes move into review.
              </p>
              <span>About 22 min · 15 questions</span>
            </div>
            <button type="button" tabIndex={-1}>
              Start set
              <ArrowRight aria-hidden="true" />
            </button>
          </section>

          <div className="product-workbench__grid">
            <section className="product-workbench__progress">
              <div className="product-workbench__section-heading">
                <div>
                  <p>Current position</p>
                  <h3>Your preparation at a glance</h3>
                </div>
                <BarChart3 aria-hidden="true" />
              </div>
              <div className="product-workbench__signals">
                {signals.map((signal) => (
                  <div key={signal.label}>
                    <p>{signal.label}</p>
                    <strong>{signal.value}</strong>
                    <span>{signal.detail}</span>
                    {signal.progress !== undefined && (
                      <div className="product-workbench__progress-track" aria-hidden="true">
                        <span style={{ width: `${signal.progress}%` }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="product-workbench__course-row">
                <div>
                  <span className="product-workbench__course-icon">
                    <BookOpen aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Continue: Properties of Integers</strong>
                    Next: divisibility and remainders
                  </span>
                </div>
                <ArrowRight aria-hidden="true" />
              </div>
            </section>

            <section className="product-workbench__queue">
              <div className="product-workbench__section-heading">
                <div>
                  <p>Review queue</p>
                  <h3>Due today</h3>
                </div>
                <RotateCcw aria-hidden="true" />
              </div>
              <ul>
                {reviewTopics.map((topic) => (
                  <li key={topic.label}>
                    <span><Check aria-hidden="true" /></span>
                    <div><strong>{topic.label}</strong><small>{topic.count}</small></div>
                  </li>
                ))}
              </ul>
              <div className="product-workbench__queue-link">
                Open review queue
                <ArrowRight aria-hidden="true" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
