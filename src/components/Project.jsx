import "./Project.css"
import Dashboard from "../images/miniProj.png"
import ideathon from "../images/ideathon.jpeg"

function Project() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="Crops Predection Web"
            description="Website that predicts the future price of the crops using linear regression."
            tags={["Html", "Css", "Javascript", "Python"]}
            imageUrl={ideathon}
          />
          <ProjectCard
            title="VStudy"
            description="An website focusing on the growth of student with newly based techniques"
            tags={["Html", "Javascript", "CSS"]}
            imageUrl={Dashboard}
          />
          <ProjectCard
            title="Portfolio Website"
            description="A responsive portfolio website built with React."
            tags={["React", "CSS"]}
            imageUrl=""
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, tags, imageUrl }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl || "/placeholder.png"} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
