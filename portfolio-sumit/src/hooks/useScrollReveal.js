import { useEffect } from 'react'

// Finds every top-level <section> inside <main> and fades/slides each one
// in the first time it scrolls into view. Runs once when the app mounts.

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            // Stop watching once revealed, so it never re-animates
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 } // fires once ~15% of the section is visible
    )

    sections.forEach((section) => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    // Cleanup if the component ever unmounts
    return () => observer.disconnect()
  }, [])
}