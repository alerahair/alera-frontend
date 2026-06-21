import { useState } from 'react'
import './Branches.css'

const BRANCHES = [
  { name: 'Menlyn Park', province: 'Gauteng', city: 'Pretoria', phone: '+27 12 000 0001', hours: 'Mon–Sat 9:00–18:00' },
  { name: 'Eastgate', province: 'Gauteng', city: 'Johannesburg', phone: '+27 11 000 0002', hours: 'Mon–Sat 9:00–18:00' },
  { name: 'Sandton City', province: 'Gauteng', city: 'Johannesburg', phone: '+27 11 000 0003', hours: 'Mon–Sun 9:00–19:00' },
  { name: 'Canal Walk', province: 'Western Cape', city: 'Cape Town', phone: '+27 21 000 0004', hours: 'Mon–Sat 9:00–18:00' },
  { name: 'Somerset Mall', province: 'Western Cape', city: 'Somerset West', phone: '+27 21 000 0005', hours: 'Mon–Sat 9:00–17:00' },
  { name: 'Gateway', province: 'KwaZulu-Natal', city: 'Durban', phone: '+27 31 000 0006', hours: 'Mon–Sat 9:00–18:00' },
  { name: 'La Lucia Mall', province: 'KwaZulu-Natal', city: 'Durban', phone: '+27 31 000 0007', hours: 'Mon–Sat 9:00–17:00' },
  { name: 'Baywest Mall', province: 'Eastern Cape', city: 'Port Elizabeth', phone: '+27 41 000 0008', hours: 'Mon–Sat 9:00–18:00' },
  { name: 'Mimosa Mall', province: 'Free State', city: 'Bloemfontein', phone: '+27 51 000 0009', hours: 'Mon–Sat 9:00–18:00' },
  { name: 'Crossing Mall', province: 'Mpumalanga', city: 'Nelspruit', phone: '+27 13 000 0010', hours: 'Mon–Sat 9:00–17:00' },
  { name: 'Boardwalk', province: 'Northern Cape', city: 'Kimberley', phone: '+27 53 000 0011', hours: 'Mon–Sat 9:00–17:00' },
]

const PROVINCES = ['All', ...new Set(BRANCHES.map(b => b.province))]

export default function Branches() {
  const [activeProvince, setActiveProvince] = useState('All')

  const filtered = activeProvince === 'All'
    ? BRANCHES
    : BRANCHES.filter(b => b.province === activeProvince)

  return (
    <section className="branches" id="branches">
      <div className="container">
        <div className="branches__header">
          <p className="section-label">Find Us</p>
          <h2 className="section-title">Our Branches</h2>
          <p className="branches__intro">
            With 11 locations across South Africa, there's always an Alera studio near you.
          </p>
        </div>
        <div className="branches__filters">
          {PROVINCES.map(prov => (
            <button
              key={prov}
              className={`branches__filter${activeProvince === prov ? ' branches__filter--active' : ''}`}
              onClick={() => setActiveProvince(prov)}
            >
              {prov}
            </button>
          ))}
        </div>
        <div className="branches__grid">
          {filtered.map(branch => (
            <div key={branch.name} className="branch-card">
              <div className="branch-card__top">
                <h3 className="branch-card__name">{branch.name}</h3>
                <span className="branch-card__province">{branch.province}</span>
              </div>
              <p className="branch-card__city">{branch.city}</p>
              <div className="branch-card__details">
                <div className="branch-card__row">
                  <span className="branch-card__icon">📞</span>
                  <a href={`tel:${branch.phone.replace(/\s/g, '')}`}>{branch.phone}</a>
                </div>
                <div className="branch-card__row">
                  <span className="branch-card__icon">🕐</span>
                  <span>{branch.hours}</span>
                </div>
              </div>
              <a href="#contact" className="btn btn-outline branch-card__btn">Book at This Branch</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
