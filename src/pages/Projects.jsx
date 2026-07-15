import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'React Portfolio',
    description: 'Personal portfolio built with React, Vite and React Router. Features dark theme, multi-page routing and responsive design.',
    tech: ['React', 'Vite', 'CSS', 'React Router'],
    github: 'https://github.com/jaskaran-j/portfolio-react',
    live: 'https://portfolio-react-delta-dun.vercel.app'
  },
  {
  id: 2,
  title: 'HTML/CSS Portfolio',
  description: 'First personal portfolio website built with pure HTML and CSS. Hosted on Cloudflare Pages.',
  tech: ['HTML', 'CSS'],
  github: 'https://github.com/jaskaran-j/portfolio',
  live: 'https://jaskarandeep.pages.dev/'
  }
]

function Projects() {
  return (
    <main className="projects-main">
      <h1>Projects</h1>
      <p className="projects-sub">Things I have built so far — more coming soon.</p>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank">GitHub</a>}
              {project.live && <a href={project.live} target="_blank">Live</a>}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects