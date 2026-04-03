import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Founder from './components/Founder'
import Gallery from './components/Gallery'
import ServiceGallery from './components/ServiceGallery'
import Transition from './components/Transition'
import Reviews from './components/Reviews'
import Certification from './components/Certification'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BrandsPage from './pages/BrandsPage'
import './App.css'

const getCurrentPage = () => {
  const route = window.location.hash.replace(/^#\/?/, '')
  return route === 'brands' ? 'brands' : 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [currentPage])

  return (
    <div className={`app page-${currentPage}`}>
      <Navigation currentPage={currentPage} />
      {currentPage === 'brands' ? (
        <BrandsPage />
      ) : (
        <>
          <Hero />
          <Intro />
          <Gallery />
          <ServiceGallery />
          <Founder />
          <Transition />
          <Reviews />
          <Certification />
          <FinalCTA />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
