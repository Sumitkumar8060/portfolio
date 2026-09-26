import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import CloudDevOps from './sections/CloudDevOps'
import MyJourney from './sections/MyJourney'

import CodingProfiles from './sections/CodingProfiles'
import Contact from './sections/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'


function App() {
    useScrollReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CloudDevOps />
        <MyJourney />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App