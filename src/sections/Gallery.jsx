import { useState } from 'react'
import { useFetch } from '../api'
import { LoadingSpinner, ErrorMessage } from '../components/ApiState'
import './Gallery.css'

const FALLBACK = [
  { id: 1, category: 'Hair', title: 'Balayage Colour', imageUrl: null },
  { id: 2, category: 'Nails', title: 'Gel Nail Art', imageUrl: null },
  { id: 3, category: 'Studio', title: 'Our Studio', imageUrl: null },
  { id: 4, category: 'Hair', title: 'Braids & Extensions', imageUrl: null },
  { id: 5, category: 'Nails', title: 'French Manicure', imageUrl: null },
  { id: 6, category: 'Hair', title: 'Keratin Blowout', imageUrl: null },
  { id: 7, category: 'Nails', title: 'Acrylic Set', imageUrl: null },
  { id: 8, category: 'Studio', title: 'Team at Work', imageUrl: null },
  { id: 9, category: 'Hair', title: 'Colour & Highlights', imageUrl: null },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const { data, loading, error } = useFetch('/api/gallery')

  const items = data || FALLBACK
  const categories = ['All', ...new Set(items.map(i => i.category).filter(Boolean))]
  const filtered = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Gallery</h2>
        </div>

        <div className="gallery__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery__filter${active === cat ? ' gallery__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && <LoadingSpinner />}
        {error && !data && <ErrorMessage message={error} />}

        {!loading && (
          <div className="gallery__grid">
            {filtered.map(item => (
              <div key={item.id} className="gallery__item">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="gallery__img"
                    loading="lazy"
                  />
                ) : (
                  <div className="gallery__img-placeholder" aria-hidden="true">
                    <span>{(item.category || 'G')[0]}</span>
                  </div>
                )}
                <p className="gallery__item-label">{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
