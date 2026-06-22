import { useState } from 'react'
import { postJSON, useFetch } from '../api'
import './Contact.css'

const FALLBACK_BRANCHES = [
  'Twin City Mall', 'Sam Ntuli Mall', 'Tshilamba Mall', 'Groblersdal',
  'Rustenburg Mall', 'Bethal Mall', 'Matsamo Mall', 'Hebron Mall',
  'Maluti Crescent Mall', 'Tshepo Shopping Center', 'Mamaila Mall',
]

const EMPTY_FORM = { name: '', email: '', phone: '', branch: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const { data: branchData } = useFetch('/api/branches')
  const branchNames = branchData ? branchData.map(b => b.name) : FALLBACK_BRANCHES

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await postJSON('/api/contact', form)
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="contact__body">
            Get in touch with us.
          </p>
          <div className="contact__details">
            <div className="contact__detail-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:alerahair@gmail.com">alerahair@gmail.com</a>
            </div>
            <div className="contact__detail-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              <span>alerahair.co.za</span>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {status === 'success' ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>We've received your message and will be in touch shortly.</p>
              <button className="btn btn-outline contact__reset" onClick={() => setStatus('idle')}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Jane Smith"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="jane@email.com"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone" name="phone" type="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="+27 00 000 0000"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="branch">Preferred Branch</label>
                  <select
                    id="branch" name="branch"
                    value={form.branch} onChange={handleChange}
                    disabled={status === 'loading'}
                  >
                    <option value="">Select a branch</option>
                    {branchNames.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows="4"
                  value={form.message} onChange={handleChange}
                  placeholder="Tell us more about what you're looking for..."
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <p className="contact__error" role="alert">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
