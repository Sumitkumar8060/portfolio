import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { journeyData } from '../data/journey'

// Display label for each category key in journeyData
const categoryLabels = {
  education: 'Education',
  certifications: 'Certifications',
  achievements: 'Achievements',
  training: 'Training',
  experience: 'Experience',
  milestones: 'Milestones',
}

// Only categories with at least one real entry get a tab.
// Right now that's just education and certifications; the rest
// appear automatically once you add a real entry to journey.js.
const availableCategories = Object.keys(categoryLabels).filter(
  (key) => journeyData[key] && journeyData[key].length > 0
)

function MyJourney() {
  const [activeCategory, setActiveCategory] = useState(availableCategories[0])
  const items = journeyData[activeCategory] || []

  return (
    <section id="journey" className="journey">
      <div className="container">
        <SectionTitle
          title="My Journey"
          subtitle="A timeline of my education, achievements, certifications, and continuous learning."
        />

        <div className="journey__tabs" role="tablist" aria-label="Journey categories">
          {availableCategories.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              id={`journey-tab-${key}`}
              aria-selected={activeCategory === key}
              aria-controls={`journey-panel-${key}`}
              className={`journey__tab ${activeCategory === key ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        {/* key={activeCategory} forces this panel to remount on tab change,
            which is what triggers the fade-in animation each time */}
        <div
          key={activeCategory}
          id={`journey-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`journey-tab-${activeCategory}`}
          className="journey__panel"
        >
          <ol className="journey__timeline">
            {items.map((item, index) => (
              <li key={`${activeCategory}-${index}`} className="journey__item">
                <span className="journey__dot" aria-hidden="true"></span>
                <div className="journey__card">
                  <h3 className="journey__item-title">{item.title}</h3>
                  <p className="journey__item-meta">
                    {item.organization}
                    {item.period && <> &middot; {item.period}</>}
                  </p>

                  {item.description && (
                    <p className="journey__item-description">{item.description}</p>
                  )}

                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      className="journey__item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default MyJourney