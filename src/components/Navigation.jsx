import React, { useState, useEffect } from 'react'
import './Navigation.css'
import BrandLogo from './BrandLogo'

const links = [
  { label: 'Home', href: '#/' },
  { label: 'Brands', href: '#/brands' },
]

function Navigation({ currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSolid = currentPage === 'brands' || isScrolled

  return (
    <nav className={`navigation ${isSolid ? 'solid' : ''}`}>
      <a className="nav-logo" href="#/">
        <BrandLogo compact invert showTagline={false} />
      </a>

      <div className="nav-links">
        {links.map((link) => {
          const isActive =
            (currentPage === 'home' && link.href === '#/') ||
            (currentPage === 'brands' && link.href === '#/brands')

          return (
            <a
              key={link.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
              href={link.href}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation
