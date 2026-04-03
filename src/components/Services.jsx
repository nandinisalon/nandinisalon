import React, { useEffect, useRef, useState } from 'react'
import './Services.css'

const services = [
  {
    id: 1,
    num: '01',
    name: 'Hair',
    desc: 'Cuts, colour, treatments & styling for every texture and story.',
    icon: '✂️'
  },
  {
    id: 2,
    num: '02',
    name: 'Skin',
    desc: 'Facials, cleanup & advanced skin therapies tailored for you.',
    icon: '✨'
  },
  {
    id: 3,
    num: '03',
    name: 'Nails',
    desc: 'Manicure, pedicure & nail art with meticulous attention.',
    icon: '💅'
  },
  {
    id: 4,
    num: '04',
    name: 'Laser',
    desc: 'Precision laser hair removal & skin rejuvenation.',
    icon: '⚡'
  },
  {
    id: 5,
    num: '05',
    name: 'Makeup',
    desc: 'Bridal, occasion & editorial makeup by trained artists.',
    icon: '💄'
  },
  {
    id: 6,
    num: '06',
    name: 'Grooming',
    desc: 'Threading, waxing & full-body grooming services.',
    icon: '🌸'
  }
]

function Services() {
  const servicesRef = useRef(null)
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.service-item')
          items.forEach((item, index) => {
            item.classList.add('visible')
          })
        }
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" ref={servicesRef}>
      <div className="services-header">
        <h2 className="services-title reveal">
          What we
          <br />
          <em>offer</em>
        </h2>
        <p className="services-note reveal">Crafted with care. Delivered with precision.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-item reveal reveal-delay-${index % 4}`}
            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-num">{service.num}</div>
            <div className="service-name">{service.name}</div>
            <p className="service-desc">{service.desc}</p>
            <div className="service-hover-indicator">
              <span>Explore</span>
              <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
