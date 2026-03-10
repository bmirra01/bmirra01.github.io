import { useReveal } from '../hooks/useReveal'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import Certifications from '../sections/Certifications'
import Testimonials from '../sections/Testimonials'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useReveal()

  return (
    <main style={{ paddingTop: '60px' }}>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
