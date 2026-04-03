import React, { useEffect, useState } from 'react'
import './Gallery.css'
import hairImage from '../assets/services/hair.jpg'
import nailsImage from '../assets/services/nails.jpg'
import makeupImage from '../assets/services/makeup.jpg'
import facialImage from '../assets/services/facial.jpg'
import laserImage from '../assets/services/laser.jpg'
import lipImage from '../assets/services/lip.jpg'
import groomingImage from '../assets/services/grooming.jpg'
import salonImage from '../assets/services/salon.jpg'

function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [itemsInView, setItemsInView] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.dataset.index)
            setItemsInView((prev) => {
              if (!prev.includes(itemIndex)) {
                return [...prev, itemIndex]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.gallery-item').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('.gallery')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      name: 'Nail Art & Care',
      image: nailsImage,
      position: 'center center',
      overlay: 'rgba(18, 16, 18, 0.34), rgba(18, 16, 18, 0.74)',
    },
    {
      name: 'Hair Styling & Treatments',
      image: hairImage,
      position: 'center center',
      overlay: 'rgba(16, 14, 12, 0.3), rgba(16, 14, 12, 0.72)',
    },
    {
      name: 'Waxing',
      image: groomingImage,
      position: 'center 28%',
      overlay: 'rgba(28, 20, 18, 0.32), rgba(28, 20, 18, 0.74)',
    },
    {
      name: 'Laser Hair Removal',
      image: laserImage,
      position: 'center center',
      overlay: 'rgba(12, 18, 24, 0.3), rgba(12, 18, 24, 0.74)',
    },
    {
      name: 'Facials & Skincare',
      image: facialImage,
      position: 'center center',
      overlay: 'rgba(14, 18, 20, 0.28), rgba(14, 18, 20, 0.68)',
    },
    {
      name: 'Lip Color Filling',
      image: lipImage,
      position: 'center 92%',
      overlay: 'rgba(32, 18, 18, 0.32), rgba(32, 18, 18, 0.74)',
    },
    {
      name: 'Professional Makeup',
      image: makeupImage,
      position: 'center center',
      overlay: 'rgba(30, 20, 18, 0.3), rgba(30, 20, 18, 0.72)',
    },
    {
      name: 'Beauty & Grooming',
      image: salonImage,
      position: 'center center',
      overlay: 'rgba(20, 16, 14, 0.28), rgba(20, 16, 14, 0.68)',
    },
  ]

  return (
    <section className={`gallery ${isVisible ? 'visible' : ''}`}>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            Our<br />
            <em>Services</em>
          </h2>
          <p className="gallery-subtitle">
            Each service crafted with precision and care for your unique beauty needs.
          </p>
        </div>

        <div className="gallery-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`gallery-item ${
                itemsInView.includes(index) ? 'animate-in' : ''
              }`}
              data-index={index}
              style={{ '--delay': `${index * 0.08}s`, '--index': index }}
            >
              <div className="item-inner">
                <div
                  className="item-image"
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${service.overlay}), url(${service.image})`,
                    backgroundPosition: service.position,
                  }}
                />
                <div className="item-label">
                  <p className="item-name">{service.name}</p>
                </div>
                <div className="item-overlay">
                  <p className="item-name-hover">{service.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

