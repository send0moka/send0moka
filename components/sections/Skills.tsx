"use client"

import { useRef, useEffect } from "react"

const skills = [
  "TypeScript •",
  "Go •",
  "Rust •",
  "React •",
  "Vue •",
  "Flutter •",
  "Kotlin •",
  "PHP •",
  "Python •",
  "UI/UX •",
  "Docker •",
  "Jira •",
]

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor
}

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const velocityRef = useRef(0)
  const skewRef = useRef<number>(0)
  const speedRef = useRef(reverse ? 1 : -1)
  const defaultSpeed = reverse ? 0.3 : -0.3
  const targetSpeedRef = useRef(defaultSpeed)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let currentScroll = reverse ? -marquee.scrollWidth / 2 : 0
    let isScrolling = true

    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY)
      velocityRef.current = delta
      const acceleration = Math.min(delta / 25, 10)
      targetSpeedRef.current = defaultSpeed * (3 + acceleration)

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        targetSpeedRef.current = defaultSpeed
      }, 50)
    }

    const animate = () => {
      if (!isScrolling || !marquee) return

      speedRef.current = lerp(speedRef.current, targetSpeedRef.current, 0.25)
      currentScroll += speedRef.current

      const speedDiff = Math.abs(speedRef.current - defaultSpeed)
      const normalizedDiff = Math.min(speedDiff / Math.abs(defaultSpeed), 1)
      const targetSkew = Math.min(normalizedDiff * 30, 30) // Always positive skew
      
      skewRef.current = lerp(skewRef.current, targetSkew, 0.3)

      if (reverse) {
        if (currentScroll >= 0) {
          currentScroll = -marquee.scrollWidth / 2
        }
      } else {
        if (Math.abs(currentScroll) >= marquee.scrollWidth / 4) {
          currentScroll = 0
        }
      }

      // Format skew value to fixed decimal places
      const skewValue = Number(skewRef.current.toFixed(3))
      marquee.style.transform = `translateX(${currentScroll}px) skewX(${-skewValue}deg)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('wheel', handleWheel)
    animate()

    return () => {
      isScrolling = false
      window.removeEventListener('wheel', handleWheel)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [reverse, defaultSpeed])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={marqueeRef}
        className="w-max flex items-center justify-center gap-2 md:py-3 py-1 transition-transform duration-200"
      >
        {[...skills, ...skills, ...skills, ...skills, ...skills].map(
          (skill, i) => (
            <span
              key={i}
              className="md:text-7xl text-xl font-semibold uppercase text-white/30"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <MarqueeRow />
      <MarqueeRow reverse />
      <MarqueeRow />
    </section>
  )
}
