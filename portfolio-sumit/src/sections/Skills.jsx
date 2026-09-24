import SectionTitle from '../components/SectionTitle'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle
          title="Skills"
          subtitle="Technologies I have worked with, grouped by area."
        />

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills__group">
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills