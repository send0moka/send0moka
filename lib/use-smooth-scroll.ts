'use client'

import { useLenis } from 'lenis/react'

export function useSmoothScroll() {
  const lenis = useLenis()

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (!lenis) return

    const defaultOptions = {
      offset: 0,
      duration: 1.2,
      ...options
    }

    lenis.scrollTo(target, defaultOptions)
  }

  const scrollToTop = () => {
    scrollTo(0, { duration: 1.5 })
  }
  const scrollToElement = (selector: string, options?: { offset?: number; duration?: number }) => {
    scrollTo(selector, options)
  }

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
    lenis
  }
}
