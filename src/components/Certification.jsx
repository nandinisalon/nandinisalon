import React, { useEffect, useRef } from 'react'
import './Certification.css'
import vlccBadge from '../assets/Nandi_VLCC_Tag.svg'

function Certification() {
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
    <section className="certification" ref={ref}>
      <p className="cert-eyebrow reveal">Professional Credentials</p>
      <div className="cert-frame reveal reveal-delay-1">
        <img className="cert-badge" src={vlccBadge} alt="VLCC School of Beauty certification badge" />
      </div>
      <p className="cert-caption reveal reveal-delay-2">Certified. Trusted. Experienced.</p>
    </section>
  )
}

export default Certification
