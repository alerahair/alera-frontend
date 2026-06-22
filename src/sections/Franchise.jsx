import './Franchise.css'

const PERKS = [
  { title: 'Proven Brand', desc: 'Leverage 18+ years of trust and reputation across South Africa.' },
  { title: 'Full Training', desc: 'Comprehensive training for you and your team before opening day.' },
  { title: 'Marketing Support', desc: 'National campaigns and local marketing materials provided.' },
  { title: 'Ongoing Support', desc: 'Dedicated franchise manager and regular check-ins.' },
]

const BRANDS = ['Alera Hair', 'Alera Nail Bar', 'Alera Barbers']

export default function Franchise() {
  return (
    <section className="franchise" id="franchise">
      <div className="franchise__inner">
        <div className="container franchise__grid">
          <div className="franchise__copy">
            <p className="section-label">Join Our Family</p>
            <h2 className="section-title">Own an<br /><em>Alera Studio</em></h2>
            <p className="franchise__body">
              Become part of South Africa's fastest-growing hair and nail studio network.
              Our franchise model is designed to set you up for success — from your first
              consultation to your grand opening and beyond.
            </p>
            <div className="franchise__brands">
              {BRANDS.map(brand => (
                <span key={brand} className="franchise__brand-tag">{brand}</span>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">Enquire About Franchising</a>
          </div>
          <div className="franchise__perks">
            {PERKS.map(perk => (
              <div key={perk.title} className="franchise__perk">
                <div className="franchise__perk-dot" />
                <div>
                  <h4 className="franchise__perk-title">{perk.title}</h4>
                  <p className="franchise__perk-desc">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
