import React from 'react'
import './BrandLogo.css'
import primaryLogo from '../assets/Nandi_Primary_Logo.svg'

function BrandLogo({ compact = false, invert = false, showTagline = true }) {
  return (
    <div className={`brand-logo ${compact ? 'compact' : ''} ${invert ? 'invert' : ''}`}>
      <img className="brand-logo-wordmark" src={primaryLogo} alt="Nandini Salon logo" />
      {showTagline && (
        <div className="brand-logo-tagline">hair | nails | skin | makeup</div>
      )}
    </div>
  )
}

export default BrandLogo
