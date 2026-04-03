import React, { useEffect, useRef } from 'react'
import './Intro.css'

function Intro() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="intro">
      <div className="intro-shell reveal" ref={ref}>
        <p className="intro-kicker">A slower kind of beauty ritual</p>
        <p className="intro-text">
          Not for expectations.
          <br />
          Not for the world outside.
          <br />
          <br />
          <em>Just for you.</em>
        </p>
      </div>
    </section>
  )
}

export default Intro
