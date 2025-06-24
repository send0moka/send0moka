"use client"

import { useEffect, useState } from "react"

export default function VignetteOverlay() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if at top (with small threshold)
      setIsAtTop(scrollY < 10)
      
      // Check if at bottom (with small threshold)
      setIsAtBottom(scrollY + windowHeight >= documentHeight - 10)
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="vignette-overlay">
      {/* Top vignette */}
      {!isAtTop && <div className="vignette-top" />}
      
      {/* Bottom vignette */}
      {!isAtBottom && <div className="vignette-bottom" />}
      
      {/* Left vignette - hidden on mobile */}
      <div className="vignette-left hidden sm:block" />
      
      {/* Right vignette - hidden on mobile */}
      <div className="vignette-right hidden sm:block" />
    </div>
  )
}
