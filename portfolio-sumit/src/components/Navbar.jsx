import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal } from '../data/personal'
import ThemeToggle from './ThemeToggle'

// Main navigation links. Each href matches a section id we'll add later.
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Cloud & DevOps', href: '#cloud-devops' },
  { label: 'My Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

// Profile icons shown as small links instead of full nav items.
const profileLinks = [
  { label: 'GitHub', href: personal.social.github, Icon: FaGithub },
  { label: 'LinkedIn', href: personal.social.linkedin, Icon: FaLinkedinIn },
  { label: 'LeetCode', href: personal.social.leetcode, Icon: SiLeetcode },
]

function Navbar() {
  // Whether the mobile menu is open. Only matters on small screens.
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  // Close the mobile menu when the user presses Escape.
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    // Cleanup: remove the listener when the menu closes.
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          {personal.name}
        </a>

         {/* Always visible, on every screen size: theme toggle + hamburger */}
        <div className="navbar__right">
          <ThemeToggle />

        {/* Hamburger button: visible on mobile only (see CSS) */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

        {/* One menu for both layouts: a row on desktop, a dropdown on mobile */}
        <nav
          id="navbar-menu"
          className={`navbar__menu ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={personal.resumePath}
            className="navbar__resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          
          <ul className="navbar__profiles">
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
          
        </nav>
      </div>
    </header>
  )
}

export default Navbar