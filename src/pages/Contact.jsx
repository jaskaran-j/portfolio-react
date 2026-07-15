import './Contact.css'

function Contact() {
  return (
    <main className="contact-main">
      <h1>Get In Touch</h1>
      <p className="contact-sub">
        I'm currently looking for internship opportunities. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:your@email.com">jaskarandeepsinghjashan@email.com</a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/jaskarandeep-singh-jashan-655904270" target="_blank">linkedin.com/in/jaskarandeep</a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a href="https://github.com/jaskaran-j" target="_blank">github.com/jaskaran-j</a>
        </div>
      </div>
    </main>
  )
}

export default Contact