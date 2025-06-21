'use client'

import { Sparkle } from 'lucide-react'

export default function AboutSection() {
  const aboutText = "I'm Jehian, with over 5+ years of experience in design & development with strong focus on producing high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to help build their top-notch products."

  const renderAnimatedText = (text: string) => {
    const words = text.split(' ')
    return (
      <p className="flex flex-wrap justify-center font-satoshi text-text-primary text-2xl font-medium tracking-wide sm:text-3xl md:text-[2rem]">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="relative mr-2 mt-2">
            {word.split('').map((char, charIndex) => (
              <span key={charIndex}>
                <span className="absolute opacity-20">{char}</span>
                <span style={{ opacity: 0 }}>{char}</span>
              </span>
            ))}
          </span>
        ))}
      </p>
    )
  }

  return (
    <section className="max-screen flex-center flex-col">
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="0">
        <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
          <Sparkle size={18} />
          <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
            About Me
          </p>
        </div>
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="200">
        {renderAnimatedText(aboutText)}
      </span>
    </section>
  )
}
