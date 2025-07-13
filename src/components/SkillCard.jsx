import "./SkillCard.css"

function SkillCard({ title, level, logo }) {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      <h3 className="skill-title">{logo}</h3>
      <p className="skill-level">{level}</p>
    </div>
  )
}

export default SkillCard
