import React, { useEffect, useRef } from 'react'
import './Trust.css'

const trustItems = [
  { number: '15+', label: 'Years Experience' },
  { number: 'VLCC', label: 'Certified Professional', isItalic: true },
  { number: '∞', label: 'Repeat Client Trust' },
]

function Trust({ inline = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.reveal')
          items.forEach((el) => {
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
    <div className={`trust ${inline ? 'trust-inline' : ''}`} ref={ref}>
      <div className="trust-inner">
        {trustItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className={`trust-item reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}>
              <div className={`trust-number ${item.isItalic ? 'italic' : ''}`}>{item.number}</div>
              <div className="trust-label">{item.label}</div>
            </div>
            {index < trustItems.length - 1 && <div className="trust-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Trust
