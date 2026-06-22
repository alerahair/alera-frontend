import './Footer.css'

const LINKS = {
  Services: ['Hair Services', 'Nail Services', 'Treatments', 'Gift Cards'],
  Company: ['About Us', 'Franchise', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const SOCIAL = [
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z"/>
      </svg>
    ),
  },
]

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
            {SOCIAL.map(({ label, href, icon }) => (
              <a key={label} href={href} className="footer__social-link" aria-label={label}>
                {icon}
              </a>
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
          <p>© {new Date().getFullYear()} Alera Hair and Nails Academy. All rights reserved.</p>
          <p>
            Designed with Care by Gainabit Holdings |{' '}
            <a
              href="https://tech.gainabit.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__credit-link"
            >
              tech.gainabit.africa
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
