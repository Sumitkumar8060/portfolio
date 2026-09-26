import { FaLinkedinIn } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { personal } from '../data/personal'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle
          title="Contact"
          subtitle="I'm looking for entry-level Backend, Cloud, and DevOps roles. Feel free to reach out."
        />

        <div className="contact__card">
          <div className="contact__row">
            <span className="contact__label">Email</span>
            <a href={`mailto:${personal.email}`} className="contact__value">
              {personal.email}
            </a>
          </div>

          <div className="contact__row">
            <span className="contact__label">LinkedIn</span>
            <a
              href={personal.social.linkedin}
              className="contact__value"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>

          <div className="contact__actions">
            <Button href={`mailto:${personal.email}`}>
              Email Me
            </Button>
            <Button
              href={personal.social.linkedin}
              variant="secondary"
              external
            >
              <FaLinkedinIn size={16} aria-hidden="true" style={{ marginRight: '0.5rem' }} />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact