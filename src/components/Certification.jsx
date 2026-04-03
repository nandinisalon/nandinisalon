import React, { useEffect, useRef } from 'react'
import './Certification.css'

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
        <div className="cert-badge">
          <div className="cert-badge-logo">VLCC</div>
          <div className="cert-badge-line" />
          <div className="cert-badge-sub">Certified Professional</div>
        </div>
      </div>
      <p className="cert-caption reveal reveal-delay-2">Certified. Trusted. Experienced.</p>
    </section>
  )
}

export default Certification
