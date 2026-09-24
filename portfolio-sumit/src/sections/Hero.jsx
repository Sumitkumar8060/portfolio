import Button from '../components/Button'
import { personal } from '../data/personal'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="hero__eyebrow">
          B.Tech Computer Science &amp; Engineering, Lovely Professional University
        </p>

        {/* The only h1 on the page */}
        <h1 className="hero__name">{personal.name}</h1>

        <p className="hero__role">{personal.role}</p>

        <p className="hero__intro">{personal.intro}</p>

        <div className="hero__actions">
          <Button href="#projects">View Projects</Button>
          <Button href={personal.resumePath} variant="secondary" external>
            Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero