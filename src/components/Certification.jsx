import "./Project.css"
import aiml from "../images/aiml.jpeg"
import frontend from "../images/frontend.jpg"
import nvidia from "../images/nvidia.jpg"
import ScrollFloat from "../reactbits/ScrollFloat"

function Certification() {
  return (
    <section id="Certification" className="section">
      <div className="container">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=10%'
          scrollEnd='bottom bottom-=30%'
          textClassName="section-title"
          stagger={0.03}
        >
          Certificate
        </ScrollFloat>
        <div className="projects-grid">
          <Certify title="Aiml Certification with coders club" imageUrl={aiml} />
          <Certify title="Frontend development" imageUrl={frontend} />
          <Certify title="Nvidia Certification" imageUrl={nvidia} />
        </div>
      </div>
    </section>
  )
}

function Certify({ title, imageUrl }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl || "/placeholder.png"} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
      </div>
    </div>
  )
}

export default Certification
