"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const SLIDE_DURATION = 10000 // 10 seconds

  const testimonials = [
    {
      name: "Brian Cahya",
      role: "Software Engineer (Intern) @Elisabeth Hospital Purwokerto",
      content:
        "I’m impressed by Jehian’s skill in developing efficient software solutions. During his internship at St. Elisabeth Purwokerto General Hospital, he built a seamless Online Registration System. His clean code and timely delivery exceeded expectations. Jehian’s dedication and problem-solving skills make him a valuable asset to any team.",
      image: "https://avatars.githubusercontent.com/u/148684209?v=4",
    },
    {
      name: "Dzakwan Irfan",
      role: "Software Engineer (Intern) @CV General Digital Solutions",
      content:
        "Jehian’s contribution to our 'Hiota' app at DTI Creative Clash 2025 was remarkable. His problem-solving skills and ability to meet deadlines with quality work made him an invaluable team member. His expertise in Angular and CSS3 significantly enhanced our project. I highly recommend Jehian for any software development role.",
      image:
        "https://framerusercontent.com/images/8SB77DXTMcncETjHhTfNi0zdbNg.png?scale-down-to=512",
    },
    {
      name: "Amarramitha Poodja",
      role: "Informatics Student @Soedirman University",
      content:
        "Jehian’s UI/UX work on our university project was outstanding. His intuitive design for the 'Daily Green Finance Report' app was both user-friendly and visually appealing. He’s a proactive team player! His attention to detail and ability to deliver high-quality work on time were impressive. I highly recommend Jehian for any UI/UX design role.",
      image: "https://gacemaslagi.site/team/amarra.webp",
    },
    {
      name: "Hamas Izzuddin",
      role: "Informatics Student @Soedirman University",
      content:
        "Jehian’s ability to design intuitive interfaces shone in our university’s ‘EcoTrack’ project. His thoughtful approach to user needs and timely execution made the app highly effective. His expertise in Angular and CSS3 significantly enhanced our project. I highly recommend Jehian for any UI/UX design role.",
      image: "https://gacemaslagi.site/team/hamas.webp",
    },
    {
      name: "Eka Bintang",
      role: "Informatics Student @Soedirman University",
      content:
        "In the DTI CodeFest 2025, Jehian’s contributions to our ‘SafePath’ app were impressive. His technical expertise and collaborative spirit ensured a polished product delivered on time. His attention to detail and ability to deliver high-quality work on time were impressive. I highly recommend Jehian for any software development role.",
      image: "https://gacemaslagi.site/team/eka.webp",
    },
  ]

  // Auto-sliding effect
  useEffect(() => {
    if (isDragging) return

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
  }, [currentSlide, isDragging, testimonials.length])

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
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
        setCurrentSlide(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        )
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
  const ProgressRing = ({
    size = 64,
    strokeWidth = 3,
  }: {
    size?: number
    strokeWidth?: number
  }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (progress / 100) * circumference

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
    <div className="w-2/3">
      <div className="relative">
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
            transform: `translateX(${Math.max(
              -50,
              Math.min(50, dragOffset)
            )}px)`,
            transition: isDragging
              ? "none"
              : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Previous card preview - 20px visible */}
          <div className="rotate-180 !mr-5 w-5 overflow-hidden flex-shrink-0 relative">
            {/* Left gradient fade */}
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-bg-900 via-bg-900/50 to-transparent z-10 pointer-events-none" />
            <div className="!bg-bg-800 !border !border-bg-700 rounded-2xl !p-6 w-72 opacity-60 transition-opacity duration-300">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="size-12 bg-bg-700 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={
                        testimonials[
                          (currentSlide - 1 + testimonials.length) %
                            testimonials.length
                        ].image
                      }
                      alt={
                        testimonials[
                          (currentSlide - 1 + testimonials.length) %
                            testimonials.length
                        ].name
                      }
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="!font-clash-display !font-semibold text-text-primary !text-base !mb-1">
                      {
                        testimonials[
                          (currentSlide - 1 + testimonials.length) %
                            testimonials.length
                        ].name
                      }
                    </h4>
                    <p className="text-text-secondary text-xs font-satoshi">
                      {
                        testimonials[
                          (currentSlide - 1 + testimonials.length) %
                            testimonials.length
                        ].role
                      }
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed font-satoshi line-clamp-3">
                  {
                    testimonials[
                      (currentSlide - 1 + testimonials.length) %
                        testimonials.length
                    ].content
                  }
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
                  <div className="size-16 bg-bg-700 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <ProgressRing size={64} strokeWidth={3} />
                    <div className="size-12 rounded-full overflow-hidden relative z-10">
                      <Image
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        fill
                        className="object-cover"
                      />
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
                  <button className="!text-white hover:underline ml-1 transition-all duration-200">
                    see more
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Next card preview - 20px visible */}
          <div className="w-5 !ml-5 overflow-hidden flex-shrink-0 relative">
            {/* Right gradient fade */}
            <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-bg-900 via-bg-900/50 to-transparent z-10 pointer-events-none" />
            <div className="!bg-bg-800 !border !border-bg-700 rounded-2xl !p-6 w-72 -ml-64 opacity-60 transition-opacity duration-300">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="size-12 bg-bg-700 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={
                        testimonials[(currentSlide + 1) % testimonials.length]
                          .image
                      }
                      alt={
                        testimonials[(currentSlide + 1) % testimonials.length]
                          .name
                      }
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="!font-clash-display !font-semibold text-text-primary !text-base !mb-1">
                      {
                        testimonials[(currentSlide + 1) % testimonials.length]
                          .name
                      }
                    </h4>
                    <p className="text-text-secondary text-xs font-satoshi">
                      {
                        testimonials[(currentSlide + 1) % testimonials.length]
                          .role
                      }
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed font-satoshi line-clamp-3">
                  {
                    testimonials[(currentSlide + 1) % testimonials.length]
                      .content
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between !mt-20">
          <a
            href="https://www.linkedin.com/in/jehian/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pb-2 relative overflow-hidden group"
            style={{ 
              borderBottom: '2px solid var(--border-bg-700)',
            }}
          >
            {/* Animated border effect */}
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-highlight-primary transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>

            <span className="text-sm text-text-primary font-medium font-satoshi">
              Check it out on Linkedin
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right text-text-primary"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="cursor-pointer !mr-4 !bg-bg-800 !border !border-bg-700 !rounded-full !p-3 hover:!bg-bg-700 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left h-4 w-4"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <span className="text-text-secondary self-center text-sm">
              {currentSlide + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              className="cursor-pointer rotate-180 !ml-4 !bg-bg-800 !border !border-bg-700 !rounded-full !p-3 hover:!bg-bg-700 transition-colors"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left h-4 w-4"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCarousel
