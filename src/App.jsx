import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Branches from './sections/Branches'
import Testimonials from './sections/Testimonials'
import Franchise from './sections/Franchise'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Branches />
        <Testimonials />
        <Franchise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
