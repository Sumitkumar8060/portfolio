import SectionTitle from '../components/SectionTitle'

// The content for this section. Every tool comes from your own profile.
//
// `practice` is one sentence about what you have actually done with these
// tools. Write only things that are true and that you can explain in an
// interview. Set it to '' and the line will not be shown.
const areas = [
  {
    title: 'Cloud',
    tools: ['AWS'],
    practice: 'YOUR_CONFIRMED_EXAMPLE',
  },
  {
    title: 'Containers',
    tools: ['Docker', 'Docker Compose', 'Kubernetes'],
    practice: 'YOUR_CONFIRMED_EXAMPLE',
  },
  {
    title: 'CI/CD',
    tools: ['GitHub Actions', 'Jenkins'],
    practice: 'YOUR_CONFIRMED_EXAMPLE',
  },
  {
    title: 'Foundations',
    tools: ['Linux', 'Ubuntu', 'Git', 'GitHub'],
    practice: 'YOUR_CONFIRMED_EXAMPLE',
  },
]

function CloudDevOps() {
  return (
    <section id="cloud-devops" className="cloud">
      <div className="container">
        <SectionTitle
          title="Cloud & DevOps"
          subtitle="The tools I use to package, test, and ship backend applications. I am also studying Cloud Computing as my minor at Lovely Professional University."
        />

        <div className="cloud__grid">
          {areas.map((area) => (
            <div key={area.title} className="cloud__card">
              <h3 className="cloud__title">{area.title}</h3>

              <ul className="cloud__tools">
                {area.tools.map((tool) => (
                  <li key={tool} className="cloud__tool">
                    {tool}
                  </li>
                ))}
              </ul>

              {/* Only shown when you have written something */}
              {area.practice && (
                <p className="cloud__practice">{area.practice}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CloudDevOps