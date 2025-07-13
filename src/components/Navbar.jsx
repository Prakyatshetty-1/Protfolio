"use client"

import "./Navbar.css"

function Navbar(props) {
  return (
    <>
      <header className="header">
        <div className="container header-content">
          <h1 className="logo">Prakyat Shetty</h1>
          <nav className="nav">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#Certification" className="nav-link">
              Certifications
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <div className="social-links">
            <a
              href="https://github.com/Prakyatshetty-1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <div className="theme-toggle-container">
              <button
                onClick={props.changeTheme}
                className={`theme-toggle ${props.darkMode === "dark" ? "dark" : "light"}`}
                aria-label="Toggle theme"
                title={`Switch to ${props.darkMode === "dark" ? "light" : "dark"} mode`}
              >
                <div className="toggle-slider">
                  <div className="toggle-icon">{props.darkMode === "dark" ? "🌙" : "☀️"}</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
