"use client"

import { useRef, useEffect, useState } from "react"
import SkillCard from "./SkillCard"
import ScrollFloat from "../reactbits/ScrollFloat"
import './Skills.css'

function Skills() {
  const gridRef = useRef(null)
  const [gridVisible, setGridVisible] = useState(false)

  const skillsData = [
    { title: "HTML/CSS", level: "Advanced" },
    { title: "JavaScript", level: "Intermediate" },
    { title: "React", level: "Intermediate" },
    { title: "Java", level: "Advanced" },
    { title: "C/C++", level: "Advanced" },
    { title: "HTML/CSS", level: "Advanced" },
    { title: "JavaScript", level: "Intermediate" },
    { title: "React", level: "Intermediate" },
    { title: "Java", level: "Advanced" },
    { title: "C/C++", level: "Advanced" },
  ]

  // Assuming a conceptual 4-column layout for animation logic
  const numColumnsForAnimation = 4

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true)
          observer.unobserve(entry.target) // Stop observing once visible
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Trigger when 20% of the grid is visible
      },
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current)
      }
    }
  }, [])

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
        <div ref={gridRef} className="skills-grid">
          {skillsData.map((skill, index) => {
            // Determine if the card should slide from left or right
            // (index % numColumnsForAnimation) gives the column index (0, 1, 2, 3...)
            // If column index is 0 or 1, it comes from left. Otherwise, from right.
            const isLeft = index % numColumnsForAnimation < 2
            const animationClass = isLeft ? "slide-in-left" : "slide-in-right"

            return (
              <SkillCard
                key={index}
                title={skill.title}
                level={skill.level}
                // Apply the animation class only when the grid is visible
                className={`${gridVisible ? animationClass : ""} ${gridVisible ? "animate-in" : ""}`}
                style={{ animationDelay: `${index * 0.07}s` }} // Staggered delay for each card
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
