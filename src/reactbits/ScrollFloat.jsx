"use client"

import { useRef, useEffect, useState } from "react"

/**
 * @typedef {object} ScrollFloatProps
 * @property {number} [animationDuration] - Duration of the animation in seconds.
 * @property {string} [ease] - Easing function (not directly used by pure CSS, but kept for prop consistency).
 * @property {string} [scrollStart] - Scroll start point (not directly used by IntersectionObserver, but kept for prop consistency).
 * @property {string} [scrollEnd] - Scroll end point (not directly used by IntersectionObserver, but kept for prop consistency).
 * @property {string} [textClassName] - Class name for the text element.
 * @property {number} [stagger] - Stagger delay (not directly used for single element, but kept for prop consistency).
 * @property {React.ReactNode} children - The content to be animated.
 */

/**
 * ScrollFloat component applies a fade-in-up animation when it enters the viewport.
 * @param {ScrollFloatProps} props
 */
export default function ScrollFloat({ animationDuration = 0.8, textClassName, children }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Stop observing once visible
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the element is visible
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${textClassName || ""} ${isVisible ? "animate-in" : ""}`}
      style={{ transitionDuration: `${animationDuration}s` }}
    >
      {children}
    </div>
  )
}
