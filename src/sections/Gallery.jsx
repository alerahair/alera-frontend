import { useState } from 'react'
import './Gallery.css'

const CATEGORIES = ['All', 'Hair', 'Nails', 'Studio']

const GALLERY_ITEMS = [
  { id: 1, category: 'Hair', label: 'Balayage Colour' },
  { id: 2, category: 'Nails', label: 'Gel Nail Art' },
  { id: 3, category: 'Studio', label: 'Our Studio' },
  { id: 4, category: 'Hair', label: 'Braids & Extensions' },
  { id: 5, category: 'Nails', label: 'French Manicure' },
  { id: 6, category: 'Hair', label: 'Keratin Blowout' },
  { id: 7, category: 'Nails', label: 'Acrylic Set' },
  { id: 8, category: 'Studio', label: 'Team at Work' },
  { id: 9, category: 'Hair', label: 'Colour & Highlights' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === active)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Gallery</h2>
        </div>
        <div className="gallery__filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`gallery__filter${active === cat ? ' gallery__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="gallery__grid">
          {filtered.map(item => (
            <div key={item.id} className="gallery__item">
              <div className="gallery__img-placeholder">
                <span>{item.category[0]}</span>
              </div>
              <p className="gallery__item-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
