import { useState, useEffect } from 'react'

// Manages the current theme ('light' or 'dark').
//
// On first render, it reads whatever theme the inline script in
// index.html already set on <html>, so React and the page agree
// from the start. Any change is saved to localStorage so it's
// remembered next time the visitor comes back.

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}