import './Experience.css'

const experiences = [
  {
    id: 1,
    role: 'Shift Manager',
    company: 'McDonald\'s',
    period: '2023 — Present',
    type: 'Part Time',
    points: [
      'Managed inventory data including bi-monthly counts and usage tracking',
      'Analyzed consumption patterns to forecast inventory needs and reduce waste',
      'Handled ordering and supply chain coordination for daily operations',
      'Led shift team ensuring smooth operations and meeting targets'
    ]
  },
  {
    id: 2,
    role: 'STEM Student Ambassador',
    company: 'University of Winnipeg',
    period: '2024 — 2025',
    type: 'Volunteer',
    points: [
      'Represented the university at STEM outreach events for 2 consecutive years',
      'Conducted campus tours to inspire high school students toward STEM programs',
      'Developed communication and public speaking skills engaging diverse audiences'
    ]
  },
  {
    id: 3,
    role: 'Game Developer',
    company: 'U of Manitoba - Hackathon',
    period: '2026',
    type: 'Competition',
    points: [
      'Competed in a 24 hour game development hackathon building a game from scratch',
      'Contributed to sound design, QA testing and team coordination under pressure',
      'Won the Aesthetically Pleasing category award out of all competing teams'
    ]
  }
]

function Experience() {
  return (
    <main className="experience-main">
      <h1>Experience</h1>
      <p className="experience-sub">My journey so far — work, volunteering and competitions.</p>
      <div className="timeline">
        {experiences.map(exp => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="timeline-meta">
                <span className="period">{exp.period}</span>
                <span className="type-badge">{exp.type}</span>
              </div>
            </div>
            <ul>
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Experience