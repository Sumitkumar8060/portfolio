import SectionTitle from '../components/SectionTitle'
import { personal } from '../data/personal'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle title="About" />

        <div className="about__layout">
          <div className="about__text">
            {personal.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="about__facts" aria-label="Quick facts">
            <h3 className="about__facts-title">Quick facts</h3>
            <dl>
              {personal.quickFacts.map(({ label, value }) => (
                <div key={label} className="about__fact">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About