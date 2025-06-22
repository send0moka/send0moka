'use client'

import Link from 'next/link'
import { Hand, ArrowUpRight } from 'lucide-react'

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jehian/' },
  { name: 'GitHub', href: 'https://github.com/jehian' },
  { name: 'Instagram', href: 'https://www.instagram.com/jehian/' },
  { name: 'Gmail', href: 'mailto:hello@jehian.me' },
]

const AOSConfig = {
  fade: 'fade',
  offset: '0',
  duration: '300',
  easing: 'ease-in-out-sine',
}

export default function HeroSection() {
  return (
    <section className="max-screen !py-24 flex flex-col gap-10">
      {/* Greeting */}
      <div data-aos={AOSConfig.fade} data-aos-offset={AOSConfig.offset} data-aos-duration={AOSConfig.duration} data-aos-easing={AOSConfig.easing} data-aos-delay="0">
        <p className="text-text-primary mb-8 flex items-center gap-2">
          <span className="wave">
            <Hand className="text-highlight-primary" size={24} />
          </span>
          Hey! It&apos;s me Jehian,
        </p>
      </div>
      
      {/* Main Heading */}
      <div data-aos={AOSConfig.fade} data-aos-offset={AOSConfig.offset} data-aos-duration={AOSConfig.duration} data-aos-easing={AOSConfig.easing} data-aos-delay="200">
        <h1 className="font-clash-display !font-medium !text-7xl leading-none text-pretty md:text-6xl lg:w-3/4 lg:text-7xl">
          Crafting{' '}
          <span className="text-highlight-primary">purpose driven experiences</span>{' '}
          that inspire &amp; engage.
        </h1>
      </div>
      
      {/* Description */}
      <div data-aos={AOSConfig.fade} data-aos-offset={AOSConfig.offset} data-aos-duration={AOSConfig.duration} data-aos-easing={AOSConfig.easing} data-aos-delay="400">
        <div className="md:flex-center mt-8 flex flex-col items-center gap-4 md:flex-row">
          <div className="bg-bg-700 h-px w-full" />
          <p className="w-full text-pretty text-text-secondary">
            I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
          </p>
        </div>
      </div>
      
      {/* Social Links & CTA */}
      <div data-aos={AOSConfig.fade} data-aos-offset={AOSConfig.offset} data-aos-duration={AOSConfig.duration} data-aos-easing={AOSConfig.easing} data-aos-delay="600">
        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">          <ul className="opacity-container hidden h-fit gap-4 md:flex group">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name} className="opacity-container-child h-fit">
                <Link 
                  target="_blank" 
                  className="flex-center text-text-secondary gap-2 text-sm uppercase transition-all duration-300 group-hover:opacity-50 hover:!opacity-100" 
                  href={link.href}
                >
                  {link.name}
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
          
          <Link href="/about">
            <button 
              className="cursor-pointer btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline" 
              type="button" 
              aria-disabled="false"
            >
              <span className="btn__ripple" />
              <span className="block overflow-hidden">
                <span className="btn__text" data-attr="About me">Know me better</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
