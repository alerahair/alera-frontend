import { useState } from 'react'
import './Contact.css'

const BRANCH_NAMES = [
  'Menlyn Park', 'Eastgate', 'Sandton City', 'Canal Walk', 'Somerset Mall',
  'Gateway', 'La Lucia Mall', 'Baywest Mall', 'Mimosa Mall', 'Crossing Mall', 'Boardwalk',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', branch: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Book Your<br /><em>Appointment</em></h2>
          <p className="contact__body">
            Ready for a new look? Fill in the form and we'll confirm your appointment
            at your nearest Alera studio within 24 hours.
          </p>
          <div className="contact__details">
            <div className="contact__detail-row">
              <span>✉</span>
              <a href="mailto:hello@alerahair.co.za">hello@alerahair.co.za</a>
            </div>
            <div className="contact__detail-row">
              <span>🌐</span>
              <span>alerahair.co.za</span>
            </div>
          </div>
        </div>
        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>We've received your booking request and will be in touch shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Smith" />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" />
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+27 00 000 0000" />
                </div>
                <div className="contact__field">
                  <label htmlFor="branch">Preferred Branch *</label>
                  <select id="branch" name="branch" required value={form.branch} onChange={handleChange}>
                    <option value="">Select a branch</option>
                    {BRANCH_NAMES.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="hair">Hair Services</option>
                  <option value="nails">Nail Services</option>
                  <option value="treatment">Treatments</option>
                  <option value="franchise">Franchise Enquiry</option>
                </select>
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell us more about what you're looking for..." />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">Send Booking Request</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
