"use client"

import { Sparkle } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import AnimateOnScroll from "./animate-on-scroll"

// Carousel component yang akan di-load di client side saja
function TestimonialsCarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const SLIDE_DURATION = 10000 // 10 secondsmport { Sparkle } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import AnimateOnScroll from "./animate-on-scroll"

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const SLIDE_DURATION = 10000 // 10 seconds

  const testimonials = [
    {
      name: "Vritika Naik",
      role: "Regional Head @GirlScript",
      content:
        "I am amazed at Jehian's ability to create intriguing designs. At GirlScript, Jehian not only worked with graphic designing but also designed the UI and contributed to the front end of the website. His work ethics are immaculate. His deliveries were always very well executed before time. His energy t...",
      image: "/testimonials/vritika-naik.webp",
    },
    {
      name: "Amrit Raj",
      role: "Senior Developer @Ignite Solutions",
      content:
        "I had the pleasure of collaborating with Jehian on a project where his exceptional UI/UX skills truly shone. Jehian's design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences. His creativity and keen eye for detail make him an admirable asset when it co...",
      image: "/testimonials/amrit-raj.webp",
    },
    {
      name: "Divya Walia",
      role: "Senior Java Developer @Nagarro",
      content:
        "I am writing to highly recommend Jehian for any Java fullstack role. I have had the pleasure of working with Jehian for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Jehian played a pivotal role in building the applicatio...",
      image: "/testimonials/divya-walia.webp",
    },
    {
      name: "Elavarasan Muthuvalavan",
      role: "Technical Lead @Ignite Solutions",
      content:
        "I had the pleasure of working alongside Jehian, who is an exceptional professional with an impressive command of Angular Templates, and CSS3. Beyond his technical prowess, what truly sets Jehian apart is his keen observational skills and ability to ask relevant questions that elevate the entire team...",
      image: "/testimonials/elavarasan-muthuvalavan.webp",
    },
    {
      name: "Gaurav Kerkar",
      role: "Software Engineer @OneShield",
      content:
        "I highly recommend Jehian for anyone seeking a talented software engineer with a strong expertise in Angular. His profound understanding of UI development has consistently elevated our projects. Diligent, collaborative, and always delivering top-notch solutions, Jehian is an asset to any t...",
      image: "/testimonials/gaurav-kerkar.webp",
    },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-sliding effect
  useEffect(() => {
    if (!isMounted || isDragging) return

    const startTime = Date.now()
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const progressPercent = (elapsed / SLIDE_DURATION) * 100
      
      if (progressPercent >= 100) {
        setProgress(0)
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      } else {
        setProgress(progressPercent)
      }
    }

    intervalRef.current = setInterval(updateProgress, 50)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentSlide, isMounted, isDragging, testimonials.length])

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const offset = clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    
    setIsDragging(false)
    
    const threshold = 50 // minimum drag distance
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Swipe right - go to previous
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      } else {
        // Swipe left - go to next
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }
    }
    
    setDragOffset(0)
    setProgress(0)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
    setProgress(0)
  }

  // Progress ring component
  const ProgressRing = ({ size = 64, strokeWidth = 3 }: { size?: number; strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (progress / 100) * circumference

    if (!isMounted) {
      return (
        <svg
          className="absolute inset-0 transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-bg-700"
          />
        </svg>
      )
    }

    return (
      <svg
        className="absolute inset-0 transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-bg-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="text-highlight-primary transition-all duration-75 ease-linear"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  return (
    <section className="max-screen flex !mt-20 py-16 px-4">
      <div className="w-1/3">
        <AnimateOnScroll delay={0}>
          <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
            <Sparkle size={18} />
            <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
              Testimonials
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2} duration={0.6}>
          <h2 className="!my-4 font-clash-display !text-5xl !font-medium text-text-primary">
            What others say
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.4}>
          <p className="text-text-secondary mb-12 text-balance">
            I&apos;ve worked with some amazing people over the years, here is
            what they have to say about me.
          </p>
        </AnimateOnScroll>
      </div>
      <div className="w-2/3">
        <AnimateOnScroll delay={0.6}>
          <div className="relative" suppressHydrationWarning>
            {/* Carousel container dengan preview */}
            <div 
              className="flex items-center select-none"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              style={{
                transform: `translateX(${Math.max(-50, Math.min(50, dragOffset))}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              
              {/* Previous card preview - 20px visible */}
              <div className="w-5 overflow-hidden flex-shrink-0 relative">
                {/* Left gradient fade */}
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-bg-900 via-bg-900/50 to-transparent z-10 pointer-events-none" />
                <div className={`!bg-bg-800 !border !border-bg-700 rounded-2xl !p-6 w-72 opacity-60 transition-opacity duration-300 ${!isMounted ? 'opacity-0' : ''}`}>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <div className="size-12 bg-bg-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                        <div className="size-8 bg-highlight-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-highlight-primary font-semibold text-sm">
                            {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="!font-clash-display !font-semibold text-text-primary !text-base !mb-1">
                          {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].name}
                        </h4>
                        <p className="text-text-secondary text-xs font-satoshi">
                          {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].role}
                        </p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed font-satoshi line-clamp-3">
                      {testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].content}
                    </p>
                  </div>
                </div>
              </div>

              {/* Current testimonial - main content */}
              <div 
                className="flex-1 px-5 cursor-grab active:cursor-grabbing"
                ref={cardRef}
              >
                <div className="!bg-bg-800 !border !border-bg-700 rounded-2xl !p-8 max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <div className="size-16 bg-bg-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                        <ProgressRing size={64} strokeWidth={3} />
                        <div className="size-12 bg-highlight-primary/20 rounded-full flex items-center justify-center relative z-10">
                          <span className="text-highlight-primary font-semibold text-lg">
                            {testimonials[currentSlide].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="!font-clash-display !font-semibold text-text-primary !text-xl !mb-1">
                          {testimonials[currentSlide].name}
                        </h4>
                        <p className="text-text-secondary text-sm mb-4 font-satoshi">
                          {testimonials[currentSlide].role}
                        </p>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed font-satoshi">
                      {testimonials[currentSlide].content}
                      <button className="!text-white hover:underline ml-1 transition-all duration-200">see more</button>
                    </p>
                  </div>
                </div>
              </div>

              {/* Next card preview - 20px visible */}
              <div className="w-5 overflow-hidden flex-shrink-0 relative">
                {/* Right gradient fade */}
                <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-bg-900 via-bg-900/50 to-transparent z-10 pointer-events-none" />
                <div className={`!bg-bg-800 !border !border-bg-700 rounded-2xl !p-6 w-72 -ml-64 opacity-60 transition-opacity duration-300 ${!isMounted ? 'opacity-0' : ''}`}>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <div className="size-12 bg-bg-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                        <div className="size-8 bg-highlight-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-highlight-primary font-semibold text-sm">
                            {testimonials[(currentSlide + 1) % testimonials.length].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="!font-clash-display !font-semibold text-text-primary !text-base !mb-1">
                          {testimonials[(currentSlide + 1) % testimonials.length].name}
                        </h4>
                        <p className="text-text-secondary text-xs font-satoshi">
                          {testimonials[(currentSlide + 1) % testimonials.length].role}
                        </p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed font-satoshi line-clamp-3">
                      {testimonials[(currentSlide + 1) % testimonials.length].content}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between !mt-20">
              <div className="text-center mt-12">
                <a
                  href="https://www.linkedin.com/in/jehian/details/recommendations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm !text-white font-medium hover:underline font-satoshi"
                >
                  Check it out on Linkedin
                </a>
              </div>
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="bg-bg-800 border border-bg-700 rounded-full p-3 hover:bg-bg-700 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg
                    className="w-5 h-5 text-text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
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
                  <svg
                    className="w-5 h-5 text-text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export default TestimonialsSection
