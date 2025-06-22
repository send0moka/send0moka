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
        <div className="size-[18px] rounded-full bg-bg-600"></div>
      </button>
    )
  }return (
    <button
      onClick={toggleTheme}      className={`cursor-pointer group flex h-9 w-9 items-center justify-center !rounded-full transition-all duration-300 hover:scale-105 ${
        isDark 
          ? "!bg-transparent hover:!bg-neutral-800" 
          : "!bg-transparent hover:!bg-neutral-200"
      }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >{isDark ? (
        <svg
          className="size-[18px] stroke-white transition-all duration-300 group-hover:stroke-highlight-primary group-hover:-rotate-12"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg
          className="size-[18px] stroke-black transition-all duration-300 group-hover:stroke-highlight-primary group-hover:rotate-12"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="m12 2 0 2" />
          <path d="m12 20 0 2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="m2 12 2 0" />
          <path d="m20 12 2 0" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  )
}
