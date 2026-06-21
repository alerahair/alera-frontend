import { useState } from 'react'
import { useFetch } from '../api'
import { LoadingSpinner, ErrorMessage } from '../components/ApiState'
import './Branches.css'

const FALLBACK = [
  { id: 1,  name: 'Menlyn Park',    province: 'Gauteng',       city: 'Pretoria',      phone: '+27 12 000 0001', hours: 'Mon–Sat 9:00–18:00' },
  { id: 2,  name: 'Eastgate',       province: 'Gauteng',       city: 'Johannesburg',  phone: '+27 11 000 0002', hours: 'Mon–Sat 9:00–18:00' },
  { id: 3,  name: 'Sandton City',   province: 'Gauteng',       city: 'Johannesburg',  phone: '+27 11 000 0003', hours: 'Mon–Sun 9:00–19:00' },
  { id: 4,  name: 'Canal Walk',     province: 'Western Cape',  city: 'Cape Town',     phone: '+27 21 000 0004', hours: 'Mon–Sat 9:00–18:00' },
  { id: 5,  name: 'Somerset Mall',  province: 'Western Cape',  city: 'Somerset West', phone: '+27 21 000 0005', hours: 'Mon–Sat 9:00–17:00' },
  { id: 6,  name: 'Gateway',        province: 'KwaZulu-Natal', city: 'Durban',        phone: '+27 31 000 0006', hours: 'Mon–Sat 9:00–18:00' },
  { id: 7,  name: 'La Lucia Mall',  province: 'KwaZulu-Natal', city: 'Durban',        phone: '+27 31 000 0007', hours: 'Mon–Sat 9:00–17:00' },
  { id: 8,  name: 'Baywest Mall',   province: 'Eastern Cape',  city: 'Port Elizabeth',phone: '+27 41 000 0008', hours: 'Mon–Sat 9:00–18:00' },
  { id: 9,  name: 'Mimosa Mall',    province: 'Free State',    city: 'Bloemfontein',  phone: '+27 51 000 0009', hours: 'Mon–Sat 9:00–18:00' },
  { id: 10, name: 'Crossing Mall',  province: 'Mpumalanga',    city: 'Nelspruit',     phone: '+27 13 000 0010', hours: 'Mon–Sat 9:00–17:00' },
  { id: 11, name: 'Boardwalk',      province: 'Northern Cape', city: 'Kimberley',     phone: '+27 53 000 0011', hours: 'Mon–Sat 9:00–17:00' },
]

export default function Branches() {
  const [activeProvince, setActiveProvince] = useState('All')
  const { data, loading, error } = useFetch('/api/branches')

  const branches = data || FALLBACK
  const provinces = ['All', ...new Set(branches.map(b => b.province).filter(Boolean))]
  const filtered = activeProvince === 'All' ? branches : branches.filter(b => b.province === activeProvince)

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
          {provinces.map(prov => (
            <button
              key={prov}
              className={`branches__filter${activeProvince === prov ? ' branches__filter--active' : ''}`}
              onClick={() => setActiveProvince(prov)}
            >
              {prov}
            </button>
          ))}
        </div>

        {loading && <LoadingSpinner />}
        {error && !data && <ErrorMessage message={error} />}

        {!loading && (
          <div className="branches__grid">
            {filtered.map(branch => (
              <div key={branch.id ?? branch.name} className="branch-card">
                <div className="branch-card__top">
                  <h3 className="branch-card__name">{branch.name}</h3>
                  <span className="branch-card__province">{branch.province}</span>
                </div>
                <p className="branch-card__city">{branch.city}</p>
                <div className="branch-card__details">
                  {branch.phone && (
                    <div className="branch-card__row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`}>{branch.phone}</a>
                    </div>
                  )}
                  {branch.hours && (
                    <div className="branch-card__row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span>{branch.hours}</span>
                    </div>
                  )}
                  {branch.address && (
                    <div className="branch-card__row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{branch.address}</span>
                    </div>
                  )}
                </div>
                <a href="#contact" className="btn btn-outline branch-card__btn">Book at This Branch</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
