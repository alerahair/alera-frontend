import { useState } from 'react'
import { useFetch } from '../api'
import './Branches.css'

const FALLBACK = [
  { id: 1,  name: 'Twin City Mall',        province: 'Free State',  city: 'Heidedal, Bloemfontein' },
  { id: 2,  name: 'Sam Ntuli Mall',        province: 'Gauteng',     city: 'Katlehong, Johannesburg' },
  { id: 3,  name: 'Tshilamba Mall',        province: 'Limpopo',     city: 'Tshilamba' },
  { id: 4,  name: 'Groblersdal',           province: 'Limpopo',     city: 'Groblersdal' },
  { id: 5,  name: 'Rustenburg Mall',       province: 'North West',  city: 'Rustenburg' },
  { id: 6,  name: 'Bethal Mall',           province: 'Mpumalanga',  city: 'Bethal' },
  { id: 7,  name: 'Matsamo Mall',          province: 'Mpumalanga',  city: 'Matsamo' },
  { id: 8,  name: 'Hebron Mall',           province: 'North West',  city: 'Hebron' },
  { id: 9,  name: 'Maluti Crescent Mall',  province: 'Free State',  city: 'Phuthaditjhaba' },
  { id: 10, name: 'Tshepo Shopping Center',province: 'Gauteng',     city: '' },
  { id: 11, name: 'Mamaila Mall',          province: 'Limpopo',     city: 'Mamaila' },
]

export default function Branches() {
  const [activeProvince, setActiveProvince] = useState('All')
  const { data } = useFetch('/api/branches')

  const branches = data || FALLBACK
  const provinces = ['All', ...new Set(branches.map(b => b.province).filter(Boolean))]
  const filtered = activeProvince === 'All' ? branches : branches.filter(b => b.province === activeProvince)

  return (
    <section className="branches" id="branches">
      <div className="container">
        <div className="branches__header">
          <p className="section-label">Find Us</p>
          <h2 className="section-title">Our Branches</h2>
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

        <div className="branches__grid">
          {filtered.map(branch => (
            <div key={branch.id ?? branch.name} className="branch-card">
              <div className="branch-card__top">
                <h3 className="branch-card__name">{branch.name}</h3>
                <span className="branch-card__province">{branch.province}</span>
              </div>
              {branch.city && <p className="branch-card__city">{branch.city}</p>}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
