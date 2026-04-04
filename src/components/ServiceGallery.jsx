import React, { useEffect, useMemo, useRef, useState } from 'react'
import './ServiceGallery.css'

const imageModules = import.meta.glob('../assets/service-gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const videoModules = import.meta.glob('../assets/service-videos/*.mp4', {
  eager: true,
  import: 'default',
})

const categoryBadges = ['Hair', 'Nails', 'Makeup', 'Skin', 'Laser', 'Grooming', 'Salon']

function ServiceGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const photoViewportRef = useRef(null)
  const photoGroupRef = useRef(null)
  const videoViewportRef = useRef(null)
  const videoGroupRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )

    const element = document.querySelector('.service-gallery')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const galleryItems = useMemo(
    () =>
      Object.entries(imageModules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
        .map(([path, image], index) => ({
          id: path,
          image,
          alt: `Service photo ${String(index + 1).padStart(2, '0')}`,
          displayNumber: String(index + 1).padStart(2, '0'),
        })),
    []
  )

  const videoItems = useMemo(
    () =>
      Object.entries(videoModules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
        .map(([path, video], index) => ({
          id: path,
          video,
          alt: `Service video ${String(index + 1).padStart(2, '0')}`,
          displayNumber: String(index + 1).padStart(2, '0'),
        })),
    []
  )

  useEffect(() => {
    const setupManualInfiniteScroll = (viewport, group) => {
      if (!viewport || !group) {
        return () => {}
      }

      let isAdjusting = false

      const getGroupSpan = () => {
        const track = group.parentElement
        if (!track) {
          return 0
        }

        const styles = window.getComputedStyle(track)
        const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0
        return group.offsetWidth + gap
      }

      const resetToMiddle = () => {
        const span = getGroupSpan()
        if (!span) {
          return
        }
        viewport.scrollLeft = span
      }

      const handleScroll = () => {
        if (isAdjusting) {
          return
        }

        const span = getGroupSpan()
        if (!span) {
          return
        }

        if (viewport.scrollLeft < span * 0.5) {
          isAdjusting = true
          viewport.scrollLeft += span
          isAdjusting = false
        } else if (viewport.scrollLeft > span * 1.5) {
          isAdjusting = true
          viewport.scrollLeft -= span
          isAdjusting = false
        }
      }

      const handleWheel = (event) => {
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
          event.preventDefault()
          viewport.scrollLeft += event.deltaY
        }
      }

      const handleResize = () => {
        resetToMiddle()
      }

      resetToMiddle()
      viewport.addEventListener('scroll', handleScroll, { passive: true })
      viewport.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('resize', handleResize)

      return () => {
        viewport.removeEventListener('scroll', handleScroll)
        viewport.removeEventListener('wheel', handleWheel)
        window.removeEventListener('resize', handleResize)
      }
    }

    const cleanupPhoto = setupManualInfiniteScroll(photoViewportRef.current, photoGroupRef.current)
    const cleanupVideo = setupManualInfiniteScroll(videoViewportRef.current, videoGroupRef.current)

    return () => {
      cleanupPhoto()
      cleanupVideo()
    }
  }, [galleryItems.length, videoItems.length])

  return (
    <section className={`service-gallery ${isVisible ? 'visible' : ''}`}>
      <div className="service-gallery-inner">
        <div className="service-gallery-header">
          <div>
            <p className="service-gallery-kicker">Photo Gallery</p>
            <h2 className="service-gallery-title">
              A closer look at
              <br />
              <em>our service work.</em>
            </h2>
          </div>
        </div>

        <div className="service-gallery-meta" aria-label="Service categories">
          {categoryBadges.map((badge) => (
            <span className="service-gallery-badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>

        <div className="service-gallery-showcase">
          <div
            className="service-gallery-viewport"
            aria-label="Manual scrolling photo gallery"
            ref={photoViewportRef}
          >
            <div className="service-gallery-track">
              <div className="service-gallery-group" aria-hidden="true">
                {galleryItems.map((item) => (
                  <figure className="service-gallery-card" key={`${item.id}-head-duplicate`}>
                    <img className="service-gallery-media" src={item.image} alt="" loading="lazy" />
                    <figcaption className="service-gallery-card-copy">
                      <span className="service-gallery-card-note">{item.displayNumber}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="service-gallery-group" ref={photoGroupRef}>
                {galleryItems.map((item) => (
                  <figure className="service-gallery-card" key={item.id}>
                    <img className="service-gallery-media" src={item.image} alt={item.alt} loading="lazy" />
                    <figcaption className="service-gallery-card-copy">
                      <span className="service-gallery-card-note">{item.displayNumber}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="service-gallery-group" aria-hidden="true">
                {galleryItems.map((item) => (
                  <figure className="service-gallery-card" key={`${item.id}-tail-duplicate`}>
                    <img className="service-gallery-media" src={item.image} alt="" loading="lazy" />
                    <figcaption className="service-gallery-card-copy">
                      <span className="service-gallery-card-note">{item.displayNumber}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {videoItems.length > 0 && (
            <div
              className="service-video-viewport"
              aria-label="Manual scrolling video gallery"
              ref={videoViewportRef}
            >
              <div className="service-video-track">
                <div className="service-gallery-group" aria-hidden="true">
                  {videoItems.map((item) => (
                    <figure className="service-video-card" key={`${item.id}-head-duplicate`}>
                      <video
                        className="service-video-media"
                        src={item.video}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                      />
                      <figcaption className="service-video-card-copy">
                        <span className="service-gallery-card-note">{item.displayNumber}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="service-gallery-group" ref={videoGroupRef}>
                  {videoItems.map((item) => (
                    <figure className="service-video-card" key={item.id}>
                      <video
                        className="service-video-media"
                        src={item.video}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                      />
                      <figcaption className="service-video-card-copy">
                        <span className="service-gallery-card-note">{item.displayNumber}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="service-gallery-group" aria-hidden="true">
                  {videoItems.map((item) => (
                    <figure className="service-video-card" key={`${item.id}-tail-duplicate`}>
                      <video
                        className="service-video-media"
                        src={item.video}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                      />
                      <figcaption className="service-video-card-copy">
                        <span className="service-gallery-card-note">{item.displayNumber}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceGallery
