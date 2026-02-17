"use client"

import { Sparkle } from "lucide-react"
import dynamic from "next/dynamic"
import AnimateOnScroll from "./animate-on-scroll"
import NoSSR from "./no-ssr"

// Dynamic import untuk menghindari hydration errors
const TestimonialsCarousel = dynamic(() => import('./testimonials-carousel'), {
  ssr: false
})

function TestimonialsSection() {
  return (
    <section className="max-screen flex flex-col lg:flex-row gap-8 lg:gap-0 !mt-12 sm:!mt-16 lg:!mt-20 py-10 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="w-full lg:w-1/3 min-w-0">
        <AnimateOnScroll delay={0}>
          <div className="mb-3 sm:mb-4 flex w-fit items-center gap-1.5 sm:gap-2 text-highlight-primary">
            <Sparkle className="size-4 sm:size-5 shrink-0" />
            <p className="shimmer word-spacing font-clash-display text-xs sm:text-sm uppercase leading-none text-highlight-primary">
              Testimonials
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2} duration={0.6}>
          <h2 className="!my-2 sm:!my-4 font-clash-display !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !font-medium text-text-primary">
            What others say
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.4}>
          <p className="text-text-secondary mb-6 sm:mb-8 lg:mb-12 text-balance text-sm sm:text-base">
            I&apos;ve worked with some amazing people over the years, here is
            what they have to say about me.
          </p>
        </AnimateOnScroll>
      </div>
      <NoSSR
        fallback={
          <div className="w-full lg:w-2/3 min-w-0">
            <div className="relative">
              <div className="flex items-center justify-center min-h-[240px] sm:min-h-[300px]">
                <div className="animate-pulse w-full max-w-3xl">
                  <div className="bg-bg-800 border border-bg-700 rounded-2xl p-4 sm:p-6 md:p-8">
                    <div className="flex gap-4 items-center mb-4">
                      <div className="size-16 bg-bg-700 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-5 bg-bg-700 rounded mb-2"></div>
                        <div className="h-3 bg-bg-700 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-bg-700 rounded"></div>
                      <div className="h-4 bg-bg-700 rounded"></div>
                      <div className="h-4 bg-bg-700 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <TestimonialsCarousel />
      </NoSSR>
    </section>
  )
}

export default TestimonialsSection
