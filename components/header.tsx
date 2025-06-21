'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ThemeToggle from './theme-toggle'

export default function Header() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="pointer-events-none sticky left-0 right-0 top-0 z-50 w-full px-0 !py-3">      <nav 
        className={`max-screen pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full px-4 !py-3 transition-all duration-600 sm:px-6 sm:py-3 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}
        style={{
          width: '100%',
          maxWidth: '1280px',
          backgroundColor: 'transparent',
        }}      >
        <Link 
          className="font-clash-display text-2xl font-medium sm:text-xl flex items-center" 
          href="/"
        >
          JH
        </Link>
        
        <ul className="text-text-secondary hidden gap-6 text-sm sm:flex">
          <li className="group relative">
            <Link 
              className={pathname === '/' ? 'active-link' : ''} 
              href="/"
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  Home
                </div>
                <div className="text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Home
                </div>
              </span>
            </Link>
          </li>
          <li className="group relative">
            <Link 
              className={pathname === '/about' ? 'active-link' : ''} 
              href="/about"
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  About
                </div>
                <div className="text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  About
                </div>
              </span>
            </Link>
          </li>
          <li className="group relative">
            <Link 
              className={pathname === '/projects' ? 'active-link' : ''} 
              href="/projects"
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  Projects
                </div>
                <div className="text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Projects
                </div>
              </span>
            </Link>
          </li>
          <li className="group relative">
            <Link 
              className={pathname === '/contact' ? 'active-link' : ''} 
              href="/contact"
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  Contact
                </div>
                <div className="text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Contact
                </div>
              </span>
            </Link>
          </li>
        </ul>        
        <div className="flex items-center justify-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
