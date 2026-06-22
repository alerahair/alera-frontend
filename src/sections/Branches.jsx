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
                <p className="branch-card__city">{branch.city || ''}</p>
                <span className="branch-card__province">{branch.province}</span>
              </div>
              <div className="branch-card__bottom">
                <div className="branch-card__row">
                  <span className="branch-card__label">Contact:</span>
                  <span>{branch.phone || ''}</span>
                </div>
                <div className="branch-card__row">
                  <span className="branch-card__label">Email:</span>
                  <span>{branch.email || ''}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
