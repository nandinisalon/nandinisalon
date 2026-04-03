import React, { useEffect, useRef } from 'react'
import './Reviews.css'

const reviews = [
  {
    id: 1,
    text: 'I finally found a place where I feel truly cared for. Not rushed. Not just another customer.',
    author: 'Priya M.'
  },
  {
    id: 2,
    text: 'Professional, warm, and consistent every single time. Nandini remembers every detail.',
    author: 'Sreelakshmi R.'
  },
  {
    id: 3,
    text: 'It feels like more than just a salon. It feels like a place that was built for women like me.',
    author: 'Ananya K.'
  }
]

function Reviews() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal')
          elements.forEach((el) => {
            el.classList.add('visible')
          })
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="reviews" ref={ref}>
      <div className="reviews-header">
        <div className="reviews-eyebrow reveal">What they say</div>
        <h2 className="reviews-title reveal reveal-delay-1">
          "Words from the women
          <br />
          who walked in."
        </h2>
      </div>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={review.id} className={`review-item reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}>
            <div className="review-mark">"</div>
            <p className="review-text">{review.text}</p>
            <div className="review-author">- {review.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
