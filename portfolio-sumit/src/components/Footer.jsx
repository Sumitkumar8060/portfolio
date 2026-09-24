import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal } from '../data/personal'

// Same profile links as the Navbar, read from personal.js
const profileLinks = [
  { label: 'GitHub', href: personal.social.github, Icon: FaGithub },
  { label: 'LinkedIn', href: personal.social.linkedin, Icon: FaLinkedinIn },
  { label: 'LeetCode', href: personal.social.leetcode, Icon: SiLeetcode },
]

function Footer() {
  // Always shows the current year, so you never have to update it by hand
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__info">
          <p className="footer__name">{personal.name}</p>
          <p className="footer__copyright">
            &copy; {currentYear} {personal.name}. Built with React and Vite.
          </p>
        </div>

        <ul className="footer__profiles">
          {profileLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#home" className="footer__top">
          Back to top
        </a>
      </div>
    </footer>
  )
}

export default Footer