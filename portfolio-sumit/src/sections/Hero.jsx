import Button from '../components/Button'
import { personal } from '../data/personal'
import profileImage from '../assets/images/dp.png'

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Decorative only — hidden from screen readers, ignores clicks */}
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__symbol hero__symbol--1">{'{ }'}</span>
        <span className="hero__symbol hero__symbol--2">{'</>'}</span>
        <span className="hero__symbol hero__symbol--3">$_</span>
      </div>


      <div className="container hero__layout">
          <div className="hero__text">

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
      
      <div className="hero__photo-card">
          <img
            src="/images/profile.jpg"
            alt={personal.name}
            className="hero__photo"
          />

          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true"></span>
            {personal.availability}
          </div>

          <p className="hero__location">{personal.location}</p>


        </div>
      </div>
    </section>
  )
}

export default Hero