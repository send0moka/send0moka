'use client'

import Link from "next/link"

function CTASection() {
  const renderAnimatedTitle = (title: string) => {
    const words = title.split(' ')
    return (
      <h2 role="heading" className="mb-8 text-4xl md:text-5xl lg:text-6xl font-clash-display font-semibold text-text-primary">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="mr-[0.25em] inline-block">
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

  return (
    <section className="max-screen py-20 px-4 text-center">
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="0">
        <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8 font-satoshi">
          Available for work
        </div>
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="200">
        {renderAnimatedTitle("Let's create your next big idea.")}
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="400">
        <div className="pt-8">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-highlight-primary text-white px-8 py-4 rounded-full font-satoshi font-medium text-lg hover:bg-highlight-primary/90 transition-colors skew-hover-effect"
          >
            Contact Me
            <span className="inline-block transition-transform group-hover:translate-x-1">
              Contact Me
            </span>
          </Link>
        </div>
      </span>
    </section>
  )
}

export default CTASection
