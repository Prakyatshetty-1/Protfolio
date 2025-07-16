/**
 * @typedef {object} SkillCardProps
 * @property {string} title
 * @property {string} level
 * @property {string} [className] - Optional class names for styling.
 * @property {React.CSSProperties} [style] - Optional inline styles for animation delay.
 */

/**
 * SkillCard component displays a skill title and its level.
 * @param {SkillCardProps} props
 */
export default function SkillCard({ title, level, className, style }) {
  return (
    <div className={`skill-card ${className || ""}`} style={style}>
      <div className="skill-card-header">
        <h3 className="skill-card-title">{title}</h3>
      </div>
      <div className="skill-card-content">
        <p className="skill-card-level">{level}</p>
      </div>
    </div>
  )
}
