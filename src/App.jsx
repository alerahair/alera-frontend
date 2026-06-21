import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import RatingBar from './sections/RatingBar'
import About from './sections/About'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Branches from './sections/Branches'
import Franchise from './sections/Franchise'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RatingBar />
        <About />
        <Services />
        <Gallery />
        <Branches />
        <Franchise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
