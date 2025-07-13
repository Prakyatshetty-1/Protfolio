import "./Skills.css"
import SkillCard from "./SkillCard"

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          <SkillCard title="HTML/CSS" level="Advanced" />
          <SkillCard title="JavaScript" level="Intermediate" />
          <SkillCard title="React" level="Intermediate" />
          <SkillCard title="Java" level="Advanced" />
          <SkillCard title="C/C++" level="Advanced" />
        </div>
      </div>
    </section>
  )
}

export default Skills
