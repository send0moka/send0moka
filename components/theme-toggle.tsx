"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme")
    if (theme) {
      setIsDark(theme === "dark")
      document.documentElement.className = theme
    } else {
      // Default to dark theme
      setIsDark(true)
      document.documentElement.className = "dark"
      localStorage.setItem("theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    document.documentElement.className = newTheme
    localStorage.setItem("theme", newTheme)
  }

  if (!mounted) {
    return (
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-bg-700 bg-bg-800 opacity-50">
        <div className="h-4 w-4 rounded-full bg-bg-600"></div>
      </button>
    )
  }
  return (
    <button
      onClick={toggleTheme}
      className="group flex h-9 w-9 items-center justify-center !rounded-full border border-bg-700 bg-bg-800 transition-all duration-300 hover:border-highlight-primary hover:bg-bg-700 hover:scale-105"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          className="h-4 w-4 fill-white transition-all duration-300 group-hover:fill-highlight-primary group-hover:-rotate-12"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="h-4 w-4 fill-text-secondary transition-all duration-300 group-hover:fill-highlight-primary group-hover:rotate-12"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
      )}
    </button>
  )
}
