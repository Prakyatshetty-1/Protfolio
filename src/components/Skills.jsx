import "./Skills.css"
import SkillCard from "./SkillCard"
import ScrollFloat from "../reactbits/ScrollFloat"
function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=10%'
          scrollEnd='bottom bottom-=30%'
          textClassName="section-title"
          stagger={0.03}
        >
          My Skills
        </ScrollFloat>
        <div className="skills-grid">
          <SkillCard title="HTML/CSS" level="Advanced" />
          <SkillCard title="JavaScript" level="Intermediate" />
          <SkillCard title="React" level="Intermediate" />
          <SkillCard title="Java" level="Advanced" />
          <SkillCard title="C/C++" level="Advanced" />
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
