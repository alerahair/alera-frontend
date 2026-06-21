import './Services.css'

const SERVICES = [
  {
    category: 'Hair',
    items: ['Cut & Style', 'Colour & Highlights', 'Keratin Treatment', 'Braids & Extensions', 'Relaxers & Perms', 'Blowouts'],
    icon: '✂',
  },
  {
    category: 'Nails',
    items: ['Manicure', 'Pedicure', 'Gel Nails', 'Acrylic Extensions', 'Nail Art', 'Shellac'],
    icon: '◈',
  },
  {
    category: 'Treatments',
    items: ['Scalp Treatment', 'Deep Conditioning', 'Protein Treatment', 'Hand & Foot Massage', 'Nail Repair', 'Cuticle Care'],
    icon: '◇',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="services__intro">
            From precision cuts to intricate nail art — we offer a full menu of beauty services
            delivered by skilled professionals.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map(svc => (
            <div key={svc.category} className="services__card">
              <div className="services__card-icon">{svc.icon}</div>
              <h3 className="services__card-title">{svc.category}</h3>
              <ul className="services__list">
                {svc.items.map(item => (
                  <li key={item} className="services__list-item">
                    <span className="services__dot" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-outline services__card-btn">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
