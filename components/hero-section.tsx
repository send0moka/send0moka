'use client'

import Link from 'next/link'
import { Hand, ArrowUpRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="max-screen">
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="0">
        <p className="text-text-primary mb-8 flex items-center gap-2">
          <span className="wave">
            <Hand className="text-highlight-primary" size={24} />
          </span>
          Hey! It&apos;s me Jehian,
        </p>
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="200">
        <div className='font-clash-display font-medium'>
          <h1 className="!text-[3rem] leading-none text-pretty md:text-6xl lg:w-3/4 lg:text-7xl">
            Crafting{' '}
            <span className="text-highlight-primary">purpose driven experiences</span>{' '}
            that inspire &amp;engage.
          </h1>
        </div>
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="400">
        <div className="md:flex-center mt-8 flex flex-col gap-4 md:flex-row">
          <div className="bg-bg-700 h-px w-full"></div>
          <p className="w-full text-pretty">
            I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
          </p>
        </div>
      </span>
      
      <span data-aos="fade" data-aos-offset="0" data-aos-duration="300" data-aos-easing="ease-in-out-sine" data-aos-delay="600">
        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <ul className="opacity-container hidden h-fit gap-4 md:flex">
            <li className="opacity-container-child h-fit">
              <Link 
                target="_blank" 
                className="flex-center text-text-secondary gap-2 text-sm uppercase transition" 
                href="https://www.linkedin.com/in/jehian/"
              >
                LinkedIn
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
            <li className="opacity-container-child h-fit">
              <Link 
                target="_blank" 
                className="flex-center text-text-secondary gap-2 text-sm uppercase transition" 
                href="https://github.com/jehian"
              >
                GitHub
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
            <li className="opacity-container-child h-fit">
              <Link 
                target="_blank" 
                className="flex-center text-text-secondary gap-2 text-sm uppercase transition" 
                href="https://www.instagram.com/jehian/"
              >
                Instagram
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
            <li className="opacity-container-child h-fit">
              <Link 
                target="_blank" 
                className="flex-center text-text-secondary gap-2 text-sm uppercase transition" 
                href="mailto:hello@jehian.me"
              >
                Gmail
                <span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
          </ul>
          
          <Link href="/about">
            <button 
              className="btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline" 
              type="button" 
              aria-disabled="false"
            >
              <span className="btn__ripple"></span>
              <span className="block overflow-hidden">
                <span className="btn__text" data-attr="About me">Know me better</span>
              </span>
            </button>
          </Link>
        </div>
      </span>
    </section>
  )
}
