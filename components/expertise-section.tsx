'use client'

import { Sparkle, CodeXml, PenTool, SwatchBook, ChevronDown } from 'lucide-react'
import { useState } from 'react'

function ExpertiseSection() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('development')

  const renderAnimatedTitle = (title: string) => {
    const words = title.split(' ')
    return (
      <h2 role="heading" className="mb-sm text-4xl md:text-5xl lg:text-6xl font-clash-display font-semibold text-text-primary">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="mr-[0.25em] inline-block overflow-y-hidden whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <span 
                key={charIndex} 
                className="inline-block" 
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h2>
    )
  }

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Angular', 'Redux',
    'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'PostgreSQL', 'Cypress', 'Docker',
    'Firebase', 'AWS', 'GSAP', 'Framer Motion', 'Figma', 'Tailwind CSS', 'GIT'
  ]

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  return (
    <section className="max-screen py-16 px-4">
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="0">
        <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
          <Sparkle size={18} />
          <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
            Speciality
          </p>
        </div>
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="200">
        {renderAnimatedTitle('Areas of Expertise')}
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="400">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="w-full space-y-4">            {/* Development Accordion */}
            <div className="border border-bg-700 bg-bg-800 mb-4 rounded-2xl overflow-hidden">
              <button 
                type="button" 
                className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-6 text-left text-lg font-medium transition-all hover:bg-bg-700"
                onClick={() => toggleAccordion('development')}
              >
                <div className="flex items-center gap-3">
                  <CodeXml size={20} />
                  Development
                </div>
                <ChevronDown 
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    activeAccordion === 'development' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {activeAccordion === 'development' && (
                <div className="px-6 pb-6 border-t border-bg-700">
                  <p className="text-text-secondary mt-4">
                    Building scalable web applications with modern technologies and best practices.
                  </p>
                </div>
              )}
            </div>
            
            {/* UI/UX Design Accordion */}
            <div className="border border-bg-700 bg-bg-800 mb-4 rounded-2xl overflow-hidden">
              <button 
                type="button" 
                className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-6 text-left text-lg font-medium transition-all hover:bg-bg-700"
                onClick={() => toggleAccordion('design')}
              >
                <div className="flex items-center gap-3">
                  <PenTool size={20} />
                  UI/UX Design
                </div>
                <ChevronDown 
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    activeAccordion === 'design' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {activeAccordion === 'design' && (
                <div className="px-6 pb-6 border-t border-bg-700">
                  <p className="text-text-secondary mt-4">
                    Creating intuitive and engaging user experiences through thoughtful design.
                  </p>
                </div>
              )}
            </div>
            
            {/* Branding Accordion */}
            <div className="border border-bg-700 bg-bg-800 mb-4 rounded-2xl overflow-hidden">
              <button 
                type="button" 
                className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-6 text-left text-lg font-medium transition-all hover:bg-bg-700"
                onClick={() => toggleAccordion('branding')}
              >
                <div className="flex items-center gap-3">
                  <SwatchBook size={20} />
                  Branding
                </div>
                <ChevronDown 
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    activeAccordion === 'branding' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {activeAccordion === 'branding' && (
                <div className="px-6 pb-6 border-t border-bg-700">
                  <p className="text-text-secondary mt-4">
                    Developing compelling brand identities that resonate with target audiences.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="group relative aspect-square lg:aspect-video h-full w-full overflow-hidden rounded-3xl bg-bg-800">
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-highlight-primary/20 to-transparent flex items-center justify-center">
              <div className="text-center">
                {activeAccordion === 'development' && <CodeXml size={64} className="text-highlight-primary mx-auto mb-4" />}
                {activeAccordion === 'design' && <PenTool size={64} className="text-highlight-primary mx-auto mb-4" />}
                {activeAccordion === 'branding' && <SwatchBook size={64} className="text-highlight-primary mx-auto mb-4" />}
                {!activeAccordion && <CodeXml size={64} className="text-highlight-primary mx-auto mb-4" />}
                <p className="text-text-secondary text-lg">
                  {activeAccordion === 'development' && 'Development'}
                  {activeAccordion === 'design' && 'UI/UX Design'}
                  {activeAccordion === 'branding' && 'Branding'}
                  {!activeAccordion && 'Development'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
      
      {/* Skills Grid */}
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="600">
        <div className="relative mt-16 overflow-hidden">
          <div className="overflow-hidden py-8">
            <div className="flex animate-marquee gap-4 w-max">
              {/* First set of skills */}
              {skills.map((skill, index) => (
                <div 
                  key={`first-${index}`}
                  className="inline-flex w-fit min-w-fit items-center gap-3 rounded-full border border-bg-700 bg-bg-800 px-6 py-3 text-sm font-medium transition-colors hover:border-highlight-primary/50 hover:bg-bg-700"
                >
                  <div className="relative h-3 w-3 bg-highlight-primary rounded-full"></div>
                  <span className="text-text-primary">{skill}</span>
                </div>
              ))}
              {/* Duplicate set for seamless scroll */}
              {skills.map((skill, index) => (
                <div 
                  key={`second-${index}`}
                  className="inline-flex w-fit min-w-fit items-center gap-3 rounded-full border border-bg-700 bg-bg-800 px-6 py-3 text-sm font-medium transition-colors hover:border-highlight-primary/50 hover:bg-bg-700"
                >
                  <div className="relative h-3 w-3 bg-highlight-primary rounded-full"></div>
                  <span className="text-text-primary">{skill}</span>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-900 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-900 to-transparent"></div>
          </div>
        </div>
      </span>
    </section>
  )
}

export default ExpertiseSection
