"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import AnimateOnScroll from "./animate-on-scroll"

function CTASection() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme")
    if (theme) {
      setIsDark(theme === "dark")
    } else {
      setIsDark(true)
    }
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark")
      }
    }
    
    window.addEventListener("storage", handleStorageChange)
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const currentClass = document.documentElement.className
          setIsDark(currentClass.includes("dark"))
        }
      })
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    })
    
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      observer.disconnect()
    }
  }, [])

  const currentTheme = mounted ? (isDark ? 'dark' : 'light') : 'dark'

  const getThemeStyles = () => {
    return currentTheme === 'dark' 
      ? '!bg-[#111116]' 
      : '!bg-white'
  }

  const getBadgeStyles = () => {
    return currentTheme === 'dark'
      ? 'bg-neutral-800 text-neutral-100'
      : 'bg-neutral-100 text-neutral-900'
  }

  const getTextStyles = () => {
    return currentTheme === 'dark'
      ? 'text-neutral-100'
      : 'text-neutral-900'
  }

  const getButtonStyles = () => {
    return currentTheme === 'dark'
      ? '!text-neutral-100 border-neutral-700 hover:bg-neutral-800'
      : '!text-neutral-900 border-neutral-300 hover:bg-neutral-100'
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <section className="max-screen flex items-center justify-center !mt-12 sm:!mt-16 lg:!mt-20 py-10 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="w-full max-w-[1280px] mx-auto rounded-3xl !bg-[#111116] !py-14 text-center px-4 sm:px-6">
          <div className="inline-flex items-center !px-4 !py-2 bg-neutral-800 text-neutral-100 rounded-full text-sm font-medium !mb-8 font-satoshi">
            <div className="size-[6px] rounded-full bg-highlight-primary !mr-2 animate-pulse" />
            Available for work
          </div>
          <h2 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl !font-medium text-balance !px-0 sm:!px-8 md:!px-16 lg:!px-32 xl:!px-80 font-clash-display text-neutral-100 mb-4">
            Let&apos;s create your next big idea.
          </h2>
          <div className="!pt-8">
            <Link href="/contact">
              <button
                className="group cursor-pointer btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline relative overflow-hidden !text-neutral-100 border-neutral-700 hover:bg-neutral-800"
                type="button"
                aria-disabled="false"
              >
                <span className="btn__ripple" />
                <span
                  className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ backgroundColor: "var(--foreground)" }}
                />
                <span className="block overflow-hidden relative z-10">
                  <span className="btn__text block transform group-hover:-translate-y-full transition-transform duration-500 ease-out">
                    Contact Me
                  </span>
                  <span
                    className="btn__text absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    style={{ color: "var(--background)" }}
                  >
                    Let&apos;s Talk
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="max-screen flex items-center justify-center !mt-12 sm:!mt-16 lg:!mt-20 py-10 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className={`w-full max-w-[1280px] mx-auto rounded-3xl ${getThemeStyles()} !py-14 text-center px-4 sm:px-6`}>
        <AnimateOnScroll delay={0} duration={0.6}>
          <div className={`inline-flex items-center !px-4 !py-2 ${getBadgeStyles()} rounded-full text-sm font-medium !mb-8 font-satoshi`}>
            <div className="size-[6px] rounded-full bg-highlight-primary !mr-2 animate-pulse" />
            Available for work
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} duration={0.6}>
          <h2 className={`!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl !font-medium text-balance !px-0 sm:!px-8 md:!px-16 lg:!px-32 xl:!px-80 font-clash-display ${getTextStyles()} mb-4`}>
            Let&apos;s create your next big idea.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4} duration={0.6}>
          <div className="!pt-8">
            <Link href="/contact">
              <button
                className={`group cursor-pointer btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline relative overflow-hidden ${getButtonStyles()}`}
                type="button"
                aria-disabled="false"
              >
                <span className="btn__ripple" />
                <span
                  className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ backgroundColor: "var(--foreground)" }}
                />
                <span className="block overflow-hidden relative z-10">
                  <span className="btn__text block transform group-hover:-translate-y-full transition-transform duration-500 ease-out">
                    Contact Me
                  </span>
                  <span
                    className="btn__text absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    style={{ color: "var(--background)" }}
                  >
                    Let&apos;s Talk
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export default CTASection