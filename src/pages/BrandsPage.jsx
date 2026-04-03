import React from 'react'
import Footer from '../components/Footer'
import './BrandsPage.css'

const brandGroups = [
  {
    id: '01',
    service: 'Skin Care',
    eyebrow: 'Treatment prep and glow',
    description:
      'Selected skin-care support for facials and salon rituals that focus on comfort, finish, and a clean glow.',
    brands: ['Kera Soul'],
  },
  {
    id: '02',
    service: 'Hair Care',
    eyebrow: 'Wash, repair, colour, finish',
    description:
      'Professional hair brands chosen for smoothening, colour services, strengthening care, and everyday salon styling.',
    brands: ['Sea Soul', 'Schwarzkopf', 'Wella', 'Godrej', 'Streax'],
  },
]

const totalBrands = brandGroups.reduce((count, group) => count + group.brands.length, 0)

function BrandsPage() {
  return (
    <>
      <main className="brands-page">
        <section className="brands-hero">
          <div className="brands-hero-glow brands-hero-glow-left" />
          <div className="brands-hero-glow brands-hero-glow-right" />

          <div className="brands-hero-inner">
            <p className="brands-kicker">Product Brands</p>
            <h1 className="brands-title">
              Brands behind
              <br />
              <em>every service.</em>
            </h1>
            <p className="brands-intro">
              A closer look at the brands currently highlighted for Nandini Salon Parlour across skin and hair
              services.
            </p>

            <div className="brands-stats">
              <div className="brands-stat">
                <span className="brands-stat-value">{brandGroups.length}</span>
                <span className="brands-stat-label">care categories</span>
              </div>
              <div className="brands-stat">
                <span className="brands-stat-value">{totalBrands}</span>
                <span className="brands-stat-label">listed brand names</span>
              </div>
              <div className="brands-stat">
                <span className="brands-stat-value">15+</span>
                <span className="brands-stat-label">years of salon experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="brands-overview">
          <div className="brands-overview-copy">
            <p className="brands-overview-label">At a glance</p>
            <h2>
              Services feel better when
              <br />
              the products are intentional.
            </h2>
          </div>
          <p className="brands-overview-text">
            This page gives clients a quick view of the brands used for key services. The lineup is simple, clear,
            and focused on reliable salon care for hair and skin.
          </p>
        </section>

        <section className="brands-grid-section">
          <div className="brands-grid">
            {brandGroups.map((group) => (
              <article className="brand-card" key={group.id}>
                <div className="brand-card-top">
                  <span className="brand-card-id">{group.id}</span>
                  <p className="brand-card-eyebrow">{group.eyebrow}</p>
                </div>

                <h3 className="brand-card-title">{group.service}</h3>
                <p className="brand-card-description">{group.description}</p>

                <div className="brand-chip-list">
                  {group.brands.map((brand) => (
                    <span className="brand-chip" key={brand}>
                      {brand}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="brands-cta">
          <p className="brands-cta-label">Need help choosing the right service?</p>
          <h2>
            Start with the treatment.
            <br />
            We will guide the rest.
          </h2>
          <div className="brands-cta-actions">
            <a href="#/" className="brands-cta-link brands-cta-link-primary">
              Back to Home
            </a>
            <a href="tel:+916305652525" className="brands-cta-link">
              Call 63056 52525
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default BrandsPage
