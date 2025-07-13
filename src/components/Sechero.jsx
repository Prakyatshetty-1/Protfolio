import "./Sechero.css"
import TypingText from "../reactbits/TypingText"
import p from "../images/Profile.jpeg"

function Sechero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              <TypingText
                text="Hii,I am Prakyat Shetty"
                speed={125}
              />
            </h2>
            <p className="hero-subtitle">
              I am a passionate fullstack developer specializing in creating beautiful, functional, and user friendly
              websites.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="button primary-button">
                Get in Touch
              </a>
              <a href="#projects" className="button secondary-button">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={p || "/placeholder.svg"} className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Sechero
