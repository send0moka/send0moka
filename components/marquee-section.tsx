"use client"

import { Sparkle } from "lucide-react"

export default function MarqueeSection() {
  const marqueeItems = [
    "Websites",
    "Designing",
    "Graphics",
    "Animations",
    "Community",
    "Development",
    "Mentor",
  ]
  return (
    <div className="py-sm relative flex-col overflow-hidden font-clash-display font-medium border-gradient">
      <div className="overflow-hidden">
        <div className="marquee-container">
          <div className="flex w-max gap-4 marquee-content">
            {/* First set of items */}
            {marqueeItems.map((item, index) => (
              <div key={`first-${index}`} className="flex-center gap-4">
                <h2 className="text-[#2c2c35] !text-5xl">{item}</h2>
                <Sparkle className="text-[#2c2c35]" size={24} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {marqueeItems.map((item, index) => (
              <div key={`second-${index}`} className="flex-center gap-4">
                <h2 className="text-[#2c2c35] !text-5xl">{item}</h2>
                <Sparkle className="text-[#2c2c35]" size={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  )
}
