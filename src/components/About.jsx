"use client"

import { useRef, useEffect, useState } from "react"
import ScrollFloat from "../reactbits/ScrollFloat"
import './About.css'

export default function About5() {
  const sectionRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)

  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [isEducationVisible, setIsEducationVisible] = useState(false)
  const [isExperienceVisible, setIsExperienceVisible] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is visible
    }

    // Observer for the main About section
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true)
          sectionObserver.unobserve(entry.target) // Stop observing once visible
        }
      })
    }, observerOptions)

    // Observer for the Education div
    const educationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsEducationVisible(true)
          educationObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observer for the Experience div
    const experienceObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsExperienceVisible(true)
          experienceObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Start observing elements if they exist
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }
    if (educationRef.current) {
      educationObserver.observe(educationRef.current)
    }
    if (experienceRef.current) {
      experienceObserver.observe(experienceRef.current)
    }

    // Cleanup observers on component unmount
    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current)
      }
      if (educationRef.current) {
        educationObserver.unobserve(educationRef.current)
      }
      if (experienceRef.current) {
        experienceObserver.unobserve(experienceRef.current)
      }
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <section
      id="about"
      ref={sectionRef}
      // Apply base class and then conditionally add 'is-visible'
      className={`section5 fade-in-section5 ${isSectionVisible ? "is-visible" : ""}`}
    >
      <div className="container5">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=10%"
          scrollEnd="bottom bottom-=30%"
          textClassName="section-title5"
          stagger={0.03}
        >
          About Me
        </ScrollFloat>
        <div className="about-content5">
          <div className="about-text5">
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
          <div className="about-details5">
            <div ref={educationRef} className={`education5 slide-in-right5 ${isEducationVisible ? "is-visible" : ""}`}>
              <h3>Education</h3>
              <div className="timeline-item5">
                <h4>Bachelor of Science in Computer Science</h4>
                <p>A.P Shah Institute Of Technology</p>
              </div>
            </div>

            <div
              ref={experienceRef}
              className={`experience5 slide-in-right5 ${isExperienceVisible ? "is-visible" : ""}`}
            >
              <h3>Experience</h3>
              <div className="timeline-item5">
                <h4>JOINT DEV HEAD, CODERS CLUB</h4>
                <p>
                  Leading and mentoring a team of developers to build web <br />
                  applications and tools for club events and initiatives. <br />
                  Leading and mentoring a team of developers to build web <br />
                  applications and tools for club events and initiatives. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
