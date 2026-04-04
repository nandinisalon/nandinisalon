import React, { useEffect, useRef } from 'react'
import './FinalCTA.css'
import primaryLogo from '../assets/Nandi_Primary_Logo.svg'

function FinalCTA() {
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
    <section className="final-cta" ref={ref}>
      <img className="final-watermark" src={primaryLogo} alt="" aria-hidden="true" />
      <h2 className="final-title reveal">
        Take your time.
        <br />
        <em>You deserve it.</em>
      </h2>
    </section>
  )
}

export default FinalCTA
