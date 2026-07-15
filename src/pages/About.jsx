import './About.css'
function About() {
  return (
    <main>
      <section>
        <h1>About Me</h1>
        <p>
          I'm Jaskarandeep, a final year Computer Science student with a passion 
          for data, machine learning, and cybersecurity. I love building things 
          and understanding how they work under the hood.
        </p>
        <p>
          Outside of coding I'm constantly learning — currently diving into 
          AWS cloud computing and exploring machine learning fundamentals.
          I'm looking for internship opportunities where I can apply my skills 
          and grow as a developer.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <div className="education-card">
          <h3>Bachelor of Applied Computer Science</h3>
          <span>University of Winnipeg</span>
          <span>2023 — 2026</span>
          <p>Final year student. Relevant coursework: Data Structures, 
          Algorithms, Database Systems, Computer Networks, Software Engineering, Machine Learning, Artificial Intelligence.</p>
        </div>
      </section>

      <section>
        <h2>Interests</h2>
        <div className="interests">
          {['Machine Learning', 'Cybersecurity', 'Cloud Computing', 
            'Data Analysis', 'Web Development'].map(interest => (
            <span key={interest} className="interest-pill">
              {interest}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About