"use client"

import { Sparkle } from "lucide-react"
import ScrollReveal from "./ui/scroll-reveal"

export default function AboutSection() {
  return (
    <section className="max-screen flex-center flex-col">
      <span
        data-aos="fade"
        data-aos-offset="0"
        data-aos-duration="300"
        data-aos-easing="ease-in-out-sine"
        data-aos-delay="0"
      >
        <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
          <Sparkle size={18} />
          <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
            About Me
          </p>
        </div>
      </span>

      <span
        data-aos="fade"
        data-aos-offset="0"
        data-aos-duration="300"
        data-aos-easing="ease-in-out-sine"
        data-aos-delay="200"
      >
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          I&apos;m Jehian, with over 2+ years of experience in development & design with a strong focus on producing high quality and impactful digital experiences. I have worked with some innovative industry leaders to help build their best products.
        </ScrollReveal>
      </span>
    </section>
  )
}
