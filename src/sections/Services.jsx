import { useFetch } from '../api'
import './Services.css'

const FALLBACK = [
  {
    id: 1, category: 'Hair', name: 'Braids',
    description: 'From classic to contemporary styles, our braiding experts create intricate and stunning braids that reflect your personal style.',
  },
  {
    id: 2, category: 'Hair', name: 'Bonding',
    description: 'Achieve the length and volume you desire with our seamless bonding techniques.',
  },
  {
    id: 3, category: 'Hair', name: 'Relaxers',
    description: 'Smooth and manage your hair with our gentle relaxer treatments, perfect for maintaining sleek and straight styles.',
  },
  {
    id: 4, category: 'Hair', name: 'Haircuts',
    description: 'Whether you\'re looking for a fresh new look or a trim, our stylists provide precision haircuts tailored to your preferences.',
  },
  {
    id: 5, category: 'Hair', name: 'Tong',
    description: 'Add curls and waves to your hair with our professional tong services, giving you a glamorous and voluminous look.',
  },
  {
    id: 6, category: 'Hair', name: 'Dry Curl',
    description: 'Enhance your natural curls with our dry curl techniques, providing definition and bounce.',
  },
  {
    id: 7, category: 'Hair', name: 'Wet Perm',
    description: 'Achieve long-lasting curls and waves with our wet perm services, designed to add texture and volume to your hair.',
  },
  {
    id: 8, category: 'Nail', name: 'Manicure',
    description: 'Pamper your hands with our luxurious manicure services, including nail shaping, cuticle care, and polish application.',
  },
  {
    id: 9, category: 'Nail', name: 'Pedicure',
    description: 'Treat your feet to a relaxing pedicure, featuring exfoliation, massage, and nail care for a polished finish.',
  },
  {
    id: 10, category: 'Beauty', name: 'Eyelashes',
    description: 'Enhance your eyes with our eyelash services, including extensions and lifts, for a fuller and more defined look.',
  },
  {
    id: 11, category: 'Beauty', name: 'Makeup',
    description: 'Look your best for any occasion with our professional makeup services, tailored to your individual style and preferences.',
  },
]

function groupByCategory(services) {
  return services.reduce((acc, svc) => {
    const key = svc.category || 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(svc)
    return acc
  }, {})
}

const ICON = { Hair: '✂', Nail: '◈', Beauty: '◇' }

export default function Services() {
  const { data } = useFetch('/api/services')
  const services = (Array.isArray(data) && data.length > 0) ? data : FALLBACK
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

        <div className="services__grid">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="services__card">
              <div className="services__card-icon">{ICON[category] || '◆'}</div>
              <h3 className="services__card-title">{category} Services</h3>
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
            </div>
          ))}
        </div>

        <p className="services__closing">
          Visit any of our branches and let our skilled team help you achieve your beauty goals.
        </p>
      </div>
    </section>
  )
}
