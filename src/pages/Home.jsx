import './Home.css'
function Home() {
  return (
    <main>
      <section>
        <h1>Jaskarandeep Singh</h1>
        <h2>Computer Science Student · Data, ML & Cybersecurity</h2>
        <p>
          Final year CS student who loves building things and breaking them.
          Currently exploring machine learning and cloud computing with AWS.
          Looking for internship opportunities in data, ML, or cybersecurity.
        </p>
        <div>
          <a href="/projects">View my work</a>
          <a href="/contact">Get in touch</a>
        </div>
      </section>

      <section style ={{ marginTop: '4rem' }}>
        <h3>Tech Stack</h3>
        <div>
          {['Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'AWS'].map(tech => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home