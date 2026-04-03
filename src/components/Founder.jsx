import React, { useEffect, useRef, useState } from 'react'
import './Founder.css'

function Founder() {
  const founderRef = useRef(null)
  const imageRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal')
          elements.forEach((el) => {
            el.classList.add('visible')
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (founderRef.current) {
      observer.observe(founderRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="founder" ref={founderRef}>
      <div className="founder-inner">
        <div
          className="founder-image-wrap reveal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={imageRef}
        >
          <div className="founder-image-placeholder" style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
            <div className="image-placeholder-content">
              <div className="founder-badge">
                <span className="badge-icon">N</span>
              </div>
              <span className="founder-image-caption">Nandini | Founder</span>
            </div>
          </div>
        </div>
        <div className="founder-text">
          <div className="founder-copy-card">
            <div className="founder-label reveal">The Story</div>
            <blockquote className="founder-quote reveal reveal-delay-1">
              "For over 15 years, Nandini
              <br />
              has built more than a salon.
              <br />
              <br />
              <em>She built a space of
              <br />
              independence, resilience,
              <br />
              and care."</em>
            </blockquote>
            <p className="founder-body reveal reveal-delay-2">
              From sacrifice to strength - every detail is intentional.
              <br />
              <br />
              What began as a quiet dream became a place where women find themselves again. Not in a mirror, but in a
              moment of stillness.
            </p>
            <p className="founder-certification reveal reveal-delay-3">
              <em>VLCC Certified Professional</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
