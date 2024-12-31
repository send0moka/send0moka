"use client"

import { useEffect, useState } from "react"

export default function Cursor() {
  const [cursor, setCursor] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!cursor) return

    cursor.style.opacity = "1"

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursor])

  return (
    <div
      ref={setCursor}
      className="fixed top-0 left-0 w-4 h-4 bg-transparent border border-white rounded-full pointer-events-none z-50 mix-blend-difference max-md:hidden"
      style={{ 
        opacity: 0,
        transition: "transform 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
      }}
    />
  )
}