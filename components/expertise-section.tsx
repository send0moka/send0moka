"use client"

import {
  Sparkle,
  CodeXml,
  PenTool,
  SwatchBook,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"
import AnimateOnScroll from "./animate-on-scroll"
import Image from "next/image"

function ExpertiseSection() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "development"
  )

  const renderAnimatedTitle = (title: string) => {
    const words = title.split(" ")
    return (
      <h2
        role="heading"
        className="mb-sm text-4xl md:text-5xl lg:text-6xl font-clash-display font-semibold text-text-primary"
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="mr-[0.25em] inline-block overflow-y-hidden whitespace-nowrap"
          >
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="inline-block">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h2>
    )
  }

  const skills = [
    // FE
    "Angular",
    "Astro",
    "Chakra UI",
    "Framer",
    "i18next",
    "Next JS",
    "Nuxt JS",
    "PWA",
    "Qwik",
    "Radix UI",
    "Remix",
    "Shadcn UI",
    "Solid JS",
    "Tailwind CSS",
    "Lines",
    "Figma",
    // BE
    "Appwrite",
    "CodeIgniter",
    "Django",
    "Go",
    "Laravel",
    "Prisma",
    "Spring Boot",
    "tRPC",
    // DB
    
  ]

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  return (
    <section className="max-screen py-16 px-4 !mt-28">
      <AnimateOnScroll delay={0} duration={0.6}>
        <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
          <Sparkle size={18} />
          <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
            Speciality
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.2} duration={0.6}>
        {renderAnimatedTitle("Areas of Expertise")}
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.4} duration={0.6}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 !mt-12">
          <div className="w-full !space-y-4">
            {/* Development Accordion */}
            <div 
              className="!border !border-[#191920] !bg-[#111116] !p-4 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => toggleAccordion("development")}
            >
              <div className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-6 text-left text-lg font-medium transition-all duration-300 hover:bg-bg-700">
                <div className="flex items-center gap-3 font-medium">
                  <CodeXml size={20} />
                  Development
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out ${
                    activeAccordion === "development" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeAccordion === "development" 
                    ? "max-h-32 opacity-100 py-0" 
                    : "max-h-0 opacity-0 py-0"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-6 pb-6 border-t border-bg-700 transition-all duration-300">
                  <p className="text-text-secondary !mt-4 transition-all duration-300">
                    Building responsive websites. Providing the users an
                    enriching experience that responds to any device and screen
                    size.
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX Design Accordion */}
            <div 
              className="!border !border-[#191920] !bg-[#111116] !p-4 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => toggleAccordion("design")}
            >
              <div className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-6 text-left text-lg font-medium transition-all duration-300 hover:bg-bg-700">
                <div className="flex items-center gap-3 font-medium">
                  <PenTool size={20} />
                  UI/UX Design
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out ${
                    activeAccordion === "design" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeAccordion === "design" 
                    ? "max-h-32 opacity-100 py-0" 
                    : "max-h-0 opacity-0 py-0"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-6 pb-6 border-t border-bg-700 transition-all duration-300">
                  <p className="text-text-secondary !mt-4 transition-all duration-300">
                    Designing user-centric, modern interfaces that shapes how
                    the audience interacts with the product.
                  </p>
                </div>
              </div>
            </div>
            {/* Branding Accordion */}
            <div 
              className="!border !border-[#191920] !bg-[#111116] !p-4 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => toggleAccordion("branding")}
            >
              <div className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-6 text-left text-lg font-medium transition-all duration-300 hover:bg-bg-700">
                <div className="flex items-center gap-3 font-medium">
                  <SwatchBook size={20} />
                  Branding
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out ${
                    activeAccordion === "branding" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeAccordion === "branding" 
                    ? "max-h-40 opacity-100 py-0" 
                    : "max-h-0 opacity-0 py-0"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-6 pb-6 border-t border-bg-700 transition-all duration-300">
                  <p className="text-text-secondary !mt-4 transition-all duration-300">
                    Building brand identities including working on logo,
                    typography, iconography, colour palette, visual language,
                    and brand personality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="group relative aspect-square lg:aspect-video h-full w-full overflow-hidden rounded-3xl bg-bg-800">
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-highlight-primary/20 to-transparent">
              <Image
                src="/expertise/development.webp"
                alt="Development Illustration"
                fill
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                  activeAccordion === "development" ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src="/expertise/designing.avif"
                alt="Design Illustration"
                fill
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                  activeAccordion === "design" ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src="/expertise/branding.avif"
                alt="Branding Illustration"
                fill
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                  activeAccordion === "branding" ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Default image when no accordion is active */}
              <Image
                src="/expertise/development.webp"
                alt="Development Illustration"
                fill
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                  !activeAccordion ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Skills Grid */}
      <AnimateOnScroll delay={0.6} duration={0.6}>
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
      </AnimateOnScroll>
    </section>
  )
}

export default ExpertiseSection
