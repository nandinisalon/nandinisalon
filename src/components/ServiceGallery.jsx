import React, { useEffect, useMemo, useState } from 'react'
import './ServiceGallery.css'

const imageModules = import.meta.glob('../assets/service-gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const videoModules = import.meta.glob('../assets/service-videos/*.mp4', {
  eager: true,
  import: 'default',
})

function ServiceGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

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
          label: `Service photo ${String(index + 1).padStart(2, '0')}`,
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
          label: `Service video ${String(index + 1).padStart(2, '0')}`,
        })),
    []
  )

  const previewPhotos = galleryItems.slice(0, 4)
  const previewVideos = videoItems.slice(0, 2)
  const visiblePhotos = isExpanded ? galleryItems : previewPhotos
  const visibleVideos = isExpanded ? videoItems : previewVideos

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
          <p className="service-gallery-copy">
            A full gallery of hair, makeup, skin, grooming, and salon moments so visitors can scroll through the
            service experience visually.
          </p>
        </div>

        <div className="service-gallery-meta">
          <span className="service-gallery-count">{galleryItems.length} photos</span>
          <span className="service-gallery-count">{videoItems.length} videos</span>
          <span className="service-gallery-meta-copy">From your latest service image collection</span>
        </div>

        <div className="service-gallery-actions">
          <button
            type="button"
            className="service-gallery-toggle"
            onClick={() => setIsExpanded((current) => !current)}
          >
            {isExpanded ? 'Show Less' : 'See All Media'}
          </button>
          <p className="service-gallery-hint">
            {isExpanded
              ? 'Showing the full collection.'
              : 'Showing a few highlights first. Expand to browse everything.'}
          </p>
        </div>

        <div className="service-gallery-section">
          <div className="service-gallery-section-header">
            <p className="service-video-kicker">Photos</p>
            <h3 className="service-video-title">
              {isExpanded ? 'Scroll through the full image gallery.' : 'A few image highlights.'}
            </h3>
          </div>

          <div className="service-gallery-rail">
            {visiblePhotos.map((item, index) => {
              const cardIndex = isExpanded ? index + 1 : index + 1

              return (
                <figure className="service-gallery-card" key={item.id}>
                  <img
                    className="service-gallery-media"
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                  />
                  <figcaption className="service-gallery-card-copy">
                    <span className="service-gallery-card-note">{item.label}</span>
                    <span className="service-gallery-card-category">Nandini Salon</span>
                  </figcaption>
                  <span className="service-gallery-card-index">{String(cardIndex).padStart(2, '0')}</span>
                </figure>
              )
            })}
          </div>
        </div>

        {videoItems.length > 0 && (
          <div className="service-video-section">
            <div className="service-video-header">
              <p className="service-video-kicker">Videos</p>
              <h3 className="service-video-title">
                {isExpanded ? 'Watch the full video collection.' : 'A couple of video highlights.'}
              </h3>
            </div>

            <div className="service-video-rail">
              {visibleVideos.map((item, index) => {
                const cardIndex = isExpanded ? index + 1 : index + 1

                return (
                  <figure className="service-video-card" key={item.id}>
                    <video
                      className="service-video-media"
                      src={item.video}
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                    />
                    <figcaption className="service-video-card-copy">
                      <span className="service-gallery-card-note">{item.label}</span>
                      <span className="service-gallery-card-category">Nandini Salon</span>
                    </figcaption>
                    <span className="service-gallery-card-index">{String(cardIndex).padStart(2, '0')}</span>
                  </figure>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServiceGallery
