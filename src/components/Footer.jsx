import React from 'react'
import './Footer.css'
import BrandLogo from './BrandLogo'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-brand">
            <BrandLogo invert />
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Visit Us</div>
          <div className="footer-info">
            <a
              href="https://maps.google.com/?q=Shop+no+4+First+Floor,+Opp.+GN+Bus+Stop,+Nehru+Nagar+Colony,+West+Marredpally,+Secunderabad,+Telangana+500026"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop no 4 First Floor, Opp. GN Bus Stop,
              <br />
              Nehru Nagar Colony, West Marredpally,
              <br />
              Secunderabad, Telangana 500026
            </a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <div className="footer-info">
            <a href="tel:+916305652525">+91 63056 52525</a>
            <br />
            <a href="mailto:nandinisalon26@gmail.com">nandinisalon26@gmail.com</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Follow</div>
          <div className="footer-info">
            <a href="https://instagram.com/so_pure_saloon_for_women" target="_blank" rel="noopener noreferrer">
              @so_pure_saloon_for_women
            </a>
            <br />
            Instagram
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>(c) 2026 Nandini Salon Parlour</span>
        <span>Secunderabad | Telangana</span>
      </div>
    </footer>
  )
}

export default Footer
