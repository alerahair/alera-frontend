import './Hero.css'
import heroBg from '../assets/pexels-afro hair.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      >
        <div className="hero__overlay" />
      </div>
      <div className="hero__content container">
        <h1 className="hero__title">Alera Hair &amp; Nail Studio</h1>
        <p className="hero__slogan"><em>Freedom To Natural Beauty</em></p>
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
