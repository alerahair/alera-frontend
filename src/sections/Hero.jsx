import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__overlay" />
      </div>
      <div className="hero__content container">
        <p className="hero__eyebrow">Alera Hair &amp; Nail Studio</p>
        <h1 className="hero__title">
          Freedom To<br /><em>Natural Beauty</em>
        </h1>
        <p className="hero__subtitle">
          Professional hair and nail services crafted with care.
        </p>
        <div className="hero__actions">
          <a href="#branches" className="btn btn-outline-white">Find a Branch</a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
