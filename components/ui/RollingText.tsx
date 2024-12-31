"use client"

import { useState } from "react"

type WeightType = 'normal' | 'medium' | 'semibold'

interface RollingTextProps {
  text: string
  weight?: WeightType
}

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold'
}

export default function RollingText({ text, weight = 'normal' }: RollingTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden whitespace-pre font-instrument-sans ${weightClasses[weight]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        {text.split("").map((letter, i) => (
          <span
            key={`top-${i}`}
            className="inline-block transition-transform duration-300"
            style={{
              transform: isHovered ? "translateY(-100%)" : "none",
              transitionDelay: `${i * 20}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute left-0 top-0">
        {text.split("").map((letter, i) => (
          <span
            key={`bottom-${i}`}
            className="inline-block transition-transform duration-300"
            style={{
              transform: isHovered ? "translateY(0)" : "translateY(100%)",
              transitionDelay: `${i * 20}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
