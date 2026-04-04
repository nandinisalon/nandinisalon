import React from 'react'
import './Hero.css'
import Trust from './Trust'
import nandiniPhoto from '../assets/nandini-photo.png'
import vlccBadge from '../assets/Nandi_VLCC_Tag.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

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
              <img
                className="hero-cert-badge-image"
                src={vlccBadge}
                alt="VLCC School of Beauty certification badge"
              />
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
