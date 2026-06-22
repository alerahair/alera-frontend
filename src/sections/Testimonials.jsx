import { useFetch } from '../api'
import { LoadingSpinner, ErrorMessage } from '../components/ApiState'
import './Testimonials.css'

const FALLBACK = [
  { id: 1, name: 'Lerato M.', branch: 'Sandton City', rating: 5, text: 'Alera completely transformed my hair. The stylist listened to exactly what I wanted and delivered beyond my expectations. I won\'t go anywhere else!' },
  { id: 2, name: 'Ayanda N.', branch: 'Gateway', rating: 5, text: 'Best nail experience I\'ve ever had. The technician was meticulous and the studio is beautiful. My gel nails are still perfect three weeks later.' },
  { id: 3, name: 'Priya S.', branch: 'Canal Walk', rating: 5, text: 'I\'ve been coming to Alera for two years. Consistent quality every single visit. The team genuinely cares about your hair health, not just the style.' },
  { id: 4, name: 'Zanele D.', branch: 'Menlyn Park', rating: 5, text: 'My keratin treatment was done so professionally. The results speak for themselves — smooth, shiny hair with zero frizz. Absolutely worth it.' },
  { id: 5, name: 'Fatima A.', branch: 'Mimosa Mall', rating: 5, text: 'Friendly staff, clean environment, and exceptional service. They always make you feel like the most important client in the room.' },
  { id: 6, name: 'Nomsa T.', branch: 'Eastgate', rating: 5, text: 'My braids are always on point at Alera. Fast, neat, and they last. I\'ve recommended them to all my friends and family.' },
]

function Stars({ count = 5 }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'star star--filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { data, loading, error } = useFetch('/api/testimonials')
  const reviews = (Array.isArray(data) && data.length > 0) ? data : FALLBACK

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <p className="section-label">Client Love</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        {loading && <LoadingSpinner />}
        {error && !data && <ErrorMessage message={error} />}

        {!loading && (
          <div className="testimonials__grid">
            {reviews.map(review => (
              <div key={review.id} className="testimonial-card">
                <Stars count={review.rating ?? 5} />
                <blockquote className="testimonial-card__text">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" aria-hidden="true">
                    {(review.name || 'A')[0]}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{review.name}</p>
                    {review.branch && (
                      <p className="testimonial-card__branch">{review.branch}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
