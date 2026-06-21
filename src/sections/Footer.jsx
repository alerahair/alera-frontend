import './Footer.css'

const LINKS = {
  Services: ['Hair Services', 'Nail Services', 'Treatments', 'Gift Cards'],
  Company: ['About Us', 'Franchise', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="footer__logo-alera">ALERA</span>
            <span className="footer__logo-sub">Hair & Nail Studio</span>
          </a>
          <p className="footer__tagline">
            Premium hair and nail care across South Africa. Your beauty, our craft.
          </p>
          <div className="footer__social">
            {['Instagram', 'Facebook', 'TikTok'].map(s => (
              <a key={s} href="#" className="footer__social-link" aria-label={s}>{s[0]}</a>
            ))}
          </div>
        </div>
        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading} className="footer__col">
            <h4 className="footer__col-heading">{heading}</h4>
            <ul>
              {items.map(item => (
                <li key={item}><a href="#" className="footer__col-link">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Alera Hair & Nail Studio. All rights reserved.</p>
          <p>Designed with care in South Africa 🇿🇦</p>
        </div>
      </div>
    </footer>
  )
}
