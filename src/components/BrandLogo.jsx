import React from 'react'
import './BrandLogo.css'

function BrandLogo({ compact = false, invert = false, showTagline = true }) {
  return (
    <div className={`brand-logo ${compact ? 'compact' : ''} ${invert ? 'invert' : ''}`}>
      <div className="brand-logo-wordmark" aria-label="Nandini Salon">
        <span className="brand-logo-glyph">नं</span>
        <span className="brand-logo-latin">
          di
          <span className="brand-logo-salon">Salon</span>
        </span>
      </div>
      {showTagline && (
        <div className="brand-logo-tagline">hair | nails | skin | makeup</div>
      )}
    </div>
  )
}

export default BrandLogo
