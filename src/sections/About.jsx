import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <div className="about__img-placeholder" aria-hidden="true">
            <span>A</span>
          </div>
          <div className="about__accent" aria-hidden="true" />
        </div>
        <div className="about__copy">
          <p className="section-label">Our Story</p>
          <h2 className="section-title">Crafting Beauty<br /><em>With Purpose</em></h2>
          <p className="about__body">
            Alera Hair & Nail Studio was born from a passion for beauty and a commitment to making
            professional hair and nail care accessible across South Africa. With over eight years in
            the industry, we've grown from a single salon to 11 locations — each one a place where
            clients feel at home.
          </p>
          <p className="about__body">
            Our stylists and nail technicians are trained to the highest standards, combining the
            latest techniques with personalised care to bring out your best.
          </p>
          <div className="about__values">
            {['Professionalism', 'Inclusivity', 'Excellence', 'Community'].map(v => (
              <span key={v} className="about__value-tag">{v}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
