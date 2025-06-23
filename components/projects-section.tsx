'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sparkle } from 'lucide-react'
import AnimateOnScroll from './animate-on-scroll'

const projects = [
  {
    title: 'Aora',
    category: 'Development',
    year: '2024',
    image: '/projects/aora.svg',
    bgColor: 'rgba(254, 243, 199)',
    href: '/projects/aora'
  },
  {
    title: 'Code Screenshot',
    category: 'Development & Design',
    year: '2024',
    image: '/projects/codescreenshot.svg',
    bgColor: 'rgba(251, 207, 232)',
    href: '/projects/code-screenshot'
  },
  {
    title: 'iPhone 15 Pro',
    category: 'Development & Design',
    year: '2024',
    image: '/projects/iphone15.svg',
    bgColor: 'rgba(231, 229, 228)',
    href: '/projects/iphone'
  },
  {
    title: 'Ochi Design',
    category: 'Development & Design',
    year: '2024',
    image: '/projects/ochidesign.svg',
    bgColor: 'rgba(187, 247, 208)',
    href: '/projects/ochi-design'
  }
]

export default function ProjectsSection() {
  return (
    <section className="max-screen">
      <AnimateOnScroll delay={0} duration={0.6}>
        <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
          <Sparkle size={18} />
          <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
            My Work
          </p>
        </div>
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.2} duration={0.6}>
        <h2 className="!my-4 font-clash-display !text-5xl !font-medium text-text-primary">
          Selected Projects
        </h2>
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.4} duration={0.6}>
        <p className="text-text-secondary">
          Here&apos;s a curated selection showcasing my expertise and the achieved results.
        </p>
      </AnimateOnScroll>
      
      <div className="opacity-container py-md grid grid-cols-1 grid-rows-[masonry] gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0">
        {projects.map((project, index) => (
          <AnimateOnScroll key={index} delay={0.6 + (index * 0.1)} duration={0.6}>
            <div className="opacity-container-child group h-fit w-full cursor-pointer sm:even:mt-14">
              <Link className="h-fit w-full" href={project.href}>
                <div 
                  style={{ backgroundColor: project.bgColor }} 
                  className="aspect-3/2 w-full overflow-hidden rounded-3xl"
                >
                  <Image
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.015]"
                    src={project.image}
                  />
                </div>
                
                <div className="mt-4 space-y-2">
                  <h5>{project.title}</h5>
                  <div className="flex justify-between">
                    <div className="flex flex-wrap gap-2">
                      <p className="text-sm text-text-secondary">{project.category}</p>
                    </div>
                    <p className="text-sm text-text-secondary">{project.year}</p>
                  </div>
                </div>
              </Link>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      
      <AnimateOnScroll delay={1.0} duration={0.6}>
        <Link href="/projects">
          <button 
            className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline m-auto block" 
            type="button" 
            aria-disabled="false"
          >
            <span className="btn__ripple"></span>
            <span className="block overflow-hidden">
              <span className="btn__text" data-attr="View All Projects">View All Projects</span>
            </span>
          </button>
        </Link>
      </AnimateOnScroll>
    </section>
  )
}
