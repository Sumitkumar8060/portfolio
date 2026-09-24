import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import CloudDevOps from './sections/CloudDevOps'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CloudDevOps />

        {/* TEMPORARY: placeholder sections. Each is replaced by a real section later. */}
        <section id="education" style={{ minHeight: '100vh', padding: '2rem 1.25rem' }}>
          <h2>Education</h2>
        </section>
        <section id="contact" style={{ minHeight: '100vh', padding: '2rem 1.25rem' }}>
          <h2>Contact</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App