import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import SectionTitle from '../components/SectionTitle'
import { personal } from '../data/personal'

// Content for each profile card. Links come from personal.js so there is
// only one place to update a URL.
//
// leetcodeStats: set to '' once you don't want a placeholder shown, or
// replace it with the real count, e.g. '120+ problems solved'.
const profiles = [
  {
    id: 'github',
    label: 'GitHub',
    href: personal.social.github,
    Icon: FaGithub,
    description: 'Source code for my projects, including CampusShare.',
    stats: '',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: personal.social.linkedin,
    Icon: FaLinkedinIn,
    description: 'My professional profile, education, and experience.',
    stats: '',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: personal.social.leetcode,
    Icon: SiLeetcode,
    description: 'Data structures and algorithms practice in C++.',
    stats: 'YOUR_LEETCODE_PROBLEM_COUNT solved',
  },
]

function CodingProfiles() {
  return (
    <section id="coding-profiles" className="profiles">
      <div className="container">
        <SectionTitle
          title="Coding Profiles"
          subtitle="Where to see my code, my background, and my problem-solving practice."
        />

        <div className="profiles__grid">
          {profiles.map(({ id, label, href, Icon, description, stats }) => (
            <a
              key={id}
              
              href={href}
              className="profile-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={28} className="profile-card__icon" aria-hidden="true" />
              <h3 className="profile-card__label">{label}</h3>
              <p className="profile-card__description">{description}</p>

              {/* Only shown when a stats line is provided */}
              {stats && <p className="profile-card__stats">{stats}</p>}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles