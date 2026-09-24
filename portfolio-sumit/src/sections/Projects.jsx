import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="Practical work I have built."
        />

        <div className="projects__list">
          {projects.map((project) => (
            <article key={project.id} className="project">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>

              {/* Only show the features block if there are features */}
              {project.features.length > 0 && (
                <div className="project__block">
                  <h4 className="project__label">Features</h4>
                  <ul className="project__features">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project__block">
                <h4 className="project__label">Technologies</h4>
                <ul className="project__tags">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="project__tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project__actions">
                <Button href={project.links.github} variant="secondary" external>
                  View Code
                </Button>

                {/* Only show the live demo button if a link exists */}
                {project.links.live && (
                  <Button href={project.links.live} external>
                    Live Demo
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects