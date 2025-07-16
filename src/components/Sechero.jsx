"use client"

import "./Sechero.css"
import TypingText from "../reactbits/TypingText" // Assuming this path is correct
import FadeContent from "../reactbits/FadeContent" // Assuming this path is correct
import p from "../images/Profile.jpeg" // Assuming this path is correct for your image

function Sechero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              <TypingText text="Hii,I am Prakyat Shetty" speed={100} />
            </h2>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={1600}>
              <p className="hero-subtitle">
                I am a fullstack developer specializing in creating beautiful, functional, and user friendly
                websites,also with the great knowledge of backend.
              </p>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={2400}>
              {/* Anything placed inside this container will be fade into view */}
              <div className="hero-buttons">
                <a href="#contact" className="button primary-button">
                  Get in Touch
                </a>
                <a href="#projects" className="button secondary-button">
                  View My Work
                </a>
              </div>
            </FadeContent>
          </div>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={800}>
            {/* Anything placed inside this container will be fade into view */}
            <div className="hero-image">
              <img src={p || "/placeholder.svg"} className="profile-image" alt="Prakyat Shetty" />
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}
export default Sechero
