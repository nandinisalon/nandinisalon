import React, { useEffect, useState } from 'react'
import './Hero.css'
import Trust from './Trust'
import nandiniPhoto from '../assets/nandini-photo.png'

function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg" style={{ transform: `translateY(${offsetY}px)` }} />

      <div className="hero-wrapper">
        <div className="hero-content">
          <p className="hero-eyebrow">Est. 2009 | Hyderabad</p>
          <h1 className="hero-title">
            A space where
            <br />
            <em>every woman</em>
            <br />
            feels beautiful.
          </h1>
          <p className="hero-sub">Discover premium beauty & grooming services crafted for you.</p>
          <Trust inline />
        </div>

        <div className="hero-image-section">
          <div className="hero-image-placeholder">
            <div className="hero-cert-badge" aria-label="Trained by VLCC School of Beauty">
              <div className="hero-cert-title">Trained by</div>
              <div className="hero-cert-logo">VLCC</div>
              <div className="hero-cert-school">School of Beauty</div>
              <div className="hero-cert-ribbon" />
            </div>
            <img className="hero-image" src={nandiniPhoto} alt="Nandini" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
