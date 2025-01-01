"use client"

import { useRef, useEffect } from "react"

const skills = [
  "Javascript •",
  "Tailwind CSS •",
  "React JS •",
  "Vue JS •",
  "Next JS •",
  "Nuxt JS •",
  "NODE JS •",
  "Express JS •",
]

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const scrollSpeed = reverse ? 0.3 : -0.3
    let currentScroll = reverse ? -marquee.scrollWidth / 2 : 0
    let isScrolling = true

    const animate = () => {
      if (!isScrolling || !marquee) return
      currentScroll += scrollSpeed

      if (reverse) {
        if (currentScroll >= 0) {
          currentScroll = -marquee.scrollWidth / 2
        }
      } else {
        if (Math.abs(currentScroll) >= marquee.scrollWidth / 4) {
          currentScroll = 0
        }
      }

      marquee.style.transform = `translateX(${currentScroll}px)`
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      isScrolling = false
    }
  }, [reverse])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={marqueeRef}
        className="w-max flex items-center justify-center gap-2 md:py-3 py-1"
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
