import React, { useEffect, useRef } from 'react'
import './Transition.css'

function Transition() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal')
          elements.forEach((el) => {
            el.classList.add('visible')
          })
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
    <section className="transition-section" ref={ref}>
      <div className="transition-before reveal">
        Tired.
        <br />
        Overwhelmed.
        <br />
        Rushed.
      </div>
      <div className="transition-divider reveal" />
      <div className="transition-after reveal">
        Calm.
        <br />
        <em>Seen.</em>
        <br />
        Beautiful.
      </div>
    </section>
  )
}

export default Transition
