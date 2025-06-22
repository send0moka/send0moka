import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
  rotationEnd?: string
  wordAnimationEnd?: string
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : ""
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word
      return (
        <span className="inline-block word" key={index}>
          {word}        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) {
      console.warn("ScrollReveal: Container ref not found")
      return
    }

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window

    // Clear any existing ScrollTriggers for this element
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === el) trigger.kill()
    })

    // Set element visible immediately
    gsap.set(el, { visibility: "visible" })
    
    const wordElements = el.querySelectorAll<HTMLElement>(".word")
    console.log("ScrollReveal: Found", wordElements.length, "word elements")
    
    if (wordElements.length === 0) {
      console.warn("ScrollReveal: No .word elements found")
      return
    }

    // Set initial states
    gsap.set(wordElements, { 
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      willChange: "opacity, filter"
    })

    // Container rotation animation
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
          onUpdate: (self) => {
            console.log("Rotation progress:", self.progress)
          }
        },
      }
    )    // Opacity animation
    gsap.to(wordElements, {
      ease: "none",
      opacity: 1,
      stagger: 0.1, // Increased from 0.05 to 0.1 for slower reveal
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top bottom-=10%", // Changed from bottom-=20% to bottom-=10%
        end: "center center", // Changed from wordAnimationEnd to center center for longer animation
        scrub: 1, // Added scrub delay for smoother animation
        onUpdate: (self) => {
          console.log("Opacity progress:", self.progress)
        }
      },
    })

    // Blur animation (if enabled)
    if (enableBlur) {
      gsap.to(wordElements, {
        ease: "none",
        filter: "blur(0px)",
        stagger: 0.1, // Increased from 0.05 to 0.1
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=10%", // Changed from bottom-=20% to bottom-=10%
          end: "center center", // Changed from wordAnimationEnd to center center
          scrub: 1, // Added scrub delay
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill()
      })
    }
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ])
  return (
    <h2 ref={containerRef} className={`!my-5 ${containerClassName}`} style={{ visibility: "hidden" }}>
      <p
        className={`text-[clamp(1.6rem,4vw,2.2rem)] text-center leading-[1.5] font-medium ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  )
}

export default ScrollReveal
