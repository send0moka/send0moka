'use client'

import { Sparkle } from 'lucide-react'

export default function MarqueeSection() {
  const marqueeItems = [
    'Websites',
    'Designing', 
    'Graphics',
    'Animations',
    'Community',
    'Development',
    'Mentor'
  ]

  return (
    <div className="border-bg-700 py-sm relative flex-col overflow-hidden border-y">
      <div className="overflow-hidden">
        <div className="marquee-container">
          <div className="flex w-max gap-4 marquee-content">
            {/* First set of items */}
            {marqueeItems.map((item, index) => (
              <div key={`first-${index}`} className="flex-center gap-4">
                <h2 className="text-bg-600 text-2xl font-medium">{item}</h2>
                <Sparkle className="text-bg-600" size={24} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {marqueeItems.map((item, index) => (
              <div key={`second-${index}`} className="flex-center gap-4">
                <h2 className="text-bg-600 text-2xl font-medium">{item}</h2>
                <Sparkle className="text-bg-600" size={24} />
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
