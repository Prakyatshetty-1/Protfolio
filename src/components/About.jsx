import "./About.css"

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a full-stack developer with experience in building dynamic and user-friendly web applications. My
              expertise lies in React and modern frontend technologies, allowing me to create seamless and interactive
              user experiences.
            </p>
            <p>
              My journey in web development began during college when I built my first mini project website, Vstudy.
              That experience sparked my passion for coding, and since then, I've been continuously learning and working
              on various projects, improving my skills in both frontend and backend development.
            </p>
            <p>
              I thrive on problem-solving and enjoy turning ideas into reality through clean and efficient code. Whether
              it's designing intuitive user interfaces or optimizing application performance, I always strive to deliver
              high-quality work.
            </p>
          </div>
          <div className="about-details">
            <div className="education">
              <h3>Education</h3>
              <div className="timeline-item">
                <h4>Bachelor of Science in Computer Science</h4>
                <p>A.P Shah Institute Of Technology</p>
              </div>
            </div>

            <div className="experience">
              <h3>Experience</h3>
              <div className="timeline-item">
                <h4> Developer</h4>
                <p>Blah Blah Blah</p>
                <p>More Blah Blah Blah</p>
              </div>
              <div className="timeline-item">
                <h4>FullStack Developer</h4>
                <p>Blah Blah Blah</p>
                <p>More Blah Blah Blah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
