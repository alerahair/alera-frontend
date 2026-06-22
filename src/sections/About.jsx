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
            Welcome to Alera Hair &amp; Nail Studio, where beauty meets expertise. At Alera, we are
            passionate about providing exceptional hair and nail services that celebrate and enhance
            your natural beauty. Our talented team specializes in a wide range of services, including
            braids, bonding, relaxers, haircuts, eyelashes, tong, dry curl, wet perm, makeup,
            manicures, and pedicures.
          </p>
          <p className="about__body">
            We pride ourselves on our expertise in working with diverse hair types and textures,
            particularly those of African descent. Our commitment is to ensure every client feels
            confident and beautiful. Our experienced stylists and technicians stay updated on the
            latest trends and techniques to deliver top-notch services tailored to your unique needs.
          </p>
          <p className="about__body">
            At Alera Hair &amp; Nail Studio, we believe in creating a welcoming and inclusive
            environment where everyone feels valued and pampered. Our goal is to provide a relaxing
            and enjoyable experience, leaving you looking and feeling your best.
          </p>

          <div className="about__vision-mission">
            <div className="about__vm-block">
              <h3 className="about__vm-heading">Our Vision</h3>
              <p className="about__body">
                Our vision is to be the premier hair and nail studio renowned for our expertise in
                diverse hair types, exceptional customer service, and commitment to enhancing natural
                beauty. We aspire to create a space where every client feels empowered and confident
                through our personalized and professional services.
              </p>
            </div>
            <div className="about__vm-block">
              <h3 className="about__vm-heading">Our Mission</h3>
              <p className="about__body">
                Our mission is to provide top-quality hair and nail services that cater to the unique
                needs of our clients. We are dedicated to continuous learning and innovation, ensuring
                that we offer the latest techniques and trends. At Alera Hair &amp; Nail Studio, we
                aim to create an inclusive and welcoming environment where every client leaves feeling
                beautiful and rejuvenated.
              </p>
            </div>
          </div>

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
