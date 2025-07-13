import './Contact.css'
function Content() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>
        <div className="contact-buttons">
          <a href="mailto:prakyatshetty5@gmail.com" className="button primary-button">
            prakyatshetty5@gmail.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="button secondary-button">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
export default Content
