'use client'

import { Sparkle } from 'lucide-react'
import { useState } from 'react'
import AnimateOnScroll from './animate-on-scroll'

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Vritika Naik",
      role: "Regional Head @GirlScript",
      content: "I am amazed at Jehian's ability to create intriguing designs. At GirlScript, Jehian not only worked with graphic designing but also designed the UI and contributed to the front end of the website. His work ethics are immaculate. His deliveries were always very well executed before time. His energy t...",
      image: "/testimonials/vritika-naik.webp"
    },
    {
      name: "Amrit Raj", 
      role: "Senior Developer @Ignite Solutions",
      content: "I had the pleasure of collaborating with Jehian on a project where his exceptional UI/UX skills truly shone. Jehian's design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences. His creativity and keen eye for detail make him an admirable asset when it co...",
      image: "/testimonials/amrit-raj.webp"
    },
    {
      name: "Divya Walia",
      role: "Senior Java Developer @Nagarro", 
      content: "I am writing to highly recommend Jehian for any Java fullstack role. I have had the pleasure of working with Jehian for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Jehian played a pivotal role in building the applicatio...",
      image: "/testimonials/divya-walia.webp"
    },
    {
      name: "Elavarasan Muthuvalavan",
      role: "Technical Lead @Ignite Solutions",
      content: "I had the pleasure of working alongside Jehian, who is an exceptional professional with an impressive command of Angular Templates, and CSS3. Beyond his technical prowess, what truly sets Jehian apart is his keen observational skills and ability to ask relevant questions that elevate the entire team...",
      image: "/testimonials/elavarasan-muthuvalavan.webp"
    },
    {
      name: "Gaurav Kerkar",
      role: "Software Engineer @OneShield",
      content: "I highly recommend Jehian for anyone seeking a talented software engineer with a strong expertise in Angular. His profound understanding of UI development has consistently elevated our projects. Diligent, collaborative, and always delivering top-notch solutions, Jehian is an asset to any t...",
      image: "/testimonials/gaurav-kerkar.webp"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  return (
    <section className="max-screen !mt-20 py-16 px-4">
      <AnimateOnScroll delay={0}>
        <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
          <Sparkle size={18} />
          <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
            Testimonials
          </p>
        </div>
      </AnimateOnScroll>
        
      <AnimateOnScroll delay={0.2}>
        <h2 className="!my-4 font-clash-display !text-5xl !font-medium text-text-primary">
          What others say
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.4}>
        <p className="text-text-secondary mb-12 max-w-2xl">
          I&apos;ve worked with some amazing people over the years, here is what they have to say about me.
        </p>
      </AnimateOnScroll>      
      <AnimateOnScroll delay={0.6}>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-bg-800 border border-bg-700 rounded-2xl p-8 max-w-4xl mx-auto">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-bg-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-12 h-12 bg-highlight-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-highlight-primary font-semibold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-clash-display font-semibold text-text-primary text-xl mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-text-secondary text-sm mb-4 font-satoshi">
                          {testimonial.role}
                        </p>
                        <p className="text-text-primary leading-relaxed font-satoshi">
                          {testimonial.content}
                          <button className="text-highlight-primary hover:underline ml-1">
                            see more
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-bg-800 border border-bg-700 rounded-full p-3 hover:bg-bg-700 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-text-secondary self-center text-sm">
              {currentSlide + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              className="bg-bg-800 border border-bg-700 rounded-full p-3 hover:bg-bg-700 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />              </svg>
            </button>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.8}>
        <div className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/in/jehian/details/recommendations/"
            target="_blank"            rel="noopener noreferrer"
            className="text-highlight-primary hover:underline font-satoshi"
          >
            Check it out on Linkedin
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

export default TestimonialsSection
