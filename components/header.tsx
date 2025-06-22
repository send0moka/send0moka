'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ThemeToggle from './theme-toggle'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

interface NavItemProps {
  href: string
  label: string
  isActive: boolean
}

function NavItem({ href, label, isActive }: NavItemProps) {
  return (
    <li className="group relative">
      <Link 
        className={isActive ? 'active-link' : ''} 
        href={href}
      >
        <span className={`relative inline-flex items-center overflow-hidden ${isActive ? '-translate-y-[1px]' : ''}`}>
          {isActive && (
            <div className="size-[6px] rounded-full bg-highlight-primary !mr-2 animate-pulse" />
          )}          <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            {label}
          </div>
          <div className={`text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0 ml-6 ${isActive ? 'translate-x-[14px]' : ''}`}>
            {label}
          </div>
        </span>
      </Link>
    </li>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])
  // Only use native scroll for maxWidth responsiveness
  useEffect(() => {
    const handleNativeScroll = () => {
      const scrollY = window.scrollY
      const isScrollingUp = scrollY < lastScrollY
      
      // Three-level scroll system
      let progress
      if (isScrollingUp && scrollY < 25) {
        progress = 0 // Immediate snap to full width when near top (1280px)
      } else if (scrollY >= 25 && scrollY < 100) {
        progress = 1 // First scroll level (940px)
      } else if (scrollY >= 100) {
        progress = 2 // Second scroll level (600px)
      } else {
        progress = 0 // Default to 1280px
      }
      
      setScrollProgress(progress)
      setLastScrollY(scrollY)
    }

    // Direct scroll event without RAF for maximum speed
    window.addEventListener('scroll', handleNativeScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleNativeScroll)
  }, [lastScrollY])
  // Calculate maxWidth and styles based on scroll progress
  const getNavStyles = () => {
    if (scrollProgress === 0) {
      return {
        maxWidth: '1280px',
        className: '',
        backgroundColor: 'transparent'
      }
    } else if (scrollProgress === 1) {
      return {
        maxWidth: '940px',
        className: '',
        backgroundColor: 'transparent'
      }
    } else {
      return {
        maxWidth: '600px',
        className: '!ring !ring-[#191920] rounded-full backdrop-blur-lg',
        backgroundColor: 'rgba(11, 11, 13, 0.8)' // Dark background with transparency
      }
    }
  }

  const navStyles = getNavStyles()
  const navClasses = `max-screen pointer-events-auto flex w-full items-center justify-between gap-6 px-4 !py-3 transition-all duration-600 sm:px-6 sm:py-3 ${navStyles.className} ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
  }`

  return (
    <header className="pointer-events-none sticky left-0 right-0 top-0 z-50 w-full px-0 !py-3">      <nav 
        className={navClasses}        style={{
          width: '100%',
          maxWidth: navStyles.maxWidth,
          backgroundColor: navStyles.backgroundColor,
        }}
      >
        <Link 
          className="font-clash-display text-2xl font-medium sm:text-xl flex items-center" 
          href="/"
        >
          JH
        </Link>
        
        <ul className="text-text-secondary hidden gap-6 text-sm sm:flex items-center">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </ul>
        
        <div className="flex items-center justify-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
