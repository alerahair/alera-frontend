import { useFetch } from '../api'
import { LoadingSpinner, ErrorMessage } from '../components/ApiState'
import './Services.css'

const FALLBACK = [
  { id: 1, category: 'Hair', name: 'Cut & Style', description: 'Precision cuts tailored to your face shape and lifestyle.' },
  { id: 2, category: 'Hair', name: 'Colour & Highlights', description: 'Balayage, ombré, full colour and more.' },
  { id: 3, category: 'Hair', name: 'Keratin Treatment', description: 'Long-lasting smoothing and frizz control.' },
  { id: 4, category: 'Hair', name: 'Braids & Extensions', description: 'Box braids, weaves, clip-ins and tape-ins.' },
  { id: 5, category: 'Nails', name: 'Manicure & Pedicure', description: 'Classic and luxury hand and foot care.' },
  { id: 6, category: 'Nails', name: 'Gel & Acrylic Nails', description: 'Long-wearing gel sets and full acrylic extensions.' },
  { id: 7, category: 'Nails', name: 'Nail Art', description: 'Custom designs, chrome, and nail embellishments.' },
  { id: 8, category: 'Treatments', name: 'Scalp Treatment', description: 'Targeted treatments for scalp health and hair growth.' },
  { id: 9, category: 'Treatments', name: 'Deep Conditioning', description: 'Intensive moisture and protein restoration masks.' },
]

function groupByCategory(services) {
  return services.reduce((acc, svc) => {
    const key = svc.category || 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(svc)
    return acc
  }, {})
}

const ICON = { Hair: '✂', Nails: '◈', Treatments: '◇' }

export default function Services() {
  const { data, loading, error } = useFetch('/api/services')
  const services = data || FALLBACK
  const grouped = groupByCategory(services)

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="services__intro">
            From precision cuts to intricate nail art — a full menu of beauty services
            delivered by skilled professionals.
          </p>
        </div>

        {loading && <LoadingSpinner />}
        {error && !data && <ErrorMessage message={error} />}

        {!loading && (
          <div className="services__grid">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category} className="services__card">
                <div className="services__card-icon">{ICON[category] || '◆'}</div>
                <h3 className="services__card-title">{category}</h3>
                <ul className="services__list">
                  {items.map(svc => (
                    <li key={svc.id ?? svc.name} className="services__list-item">
                      <span className="services__dot" />
                      <span>
                        <strong>{svc.name}</strong>
                        {svc.description && (
                          <span className="services__item-desc"> — {svc.description}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-outline services__card-btn">Book Now</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
