"use client"

import Link from "next/link"
import { Hand, ArrowUpRight } from "lucide-react"
import AnimateOnScroll from "./animate-on-scroll"

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jehianth" },
  { name: "GitHub", href: "https://github.com/send0moka" },
  { name: "Instagram", href: "https://www.instagram.com/jehianth" },
  { name: "Gmail", href: "mailto:jehianathayata@gmail.com" },
]

export default function HeroSection() {
  return (
    <section className="max-screen !pt-16 sm:!pt-20 md:!pt-24 flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
      {/* Greeting */}
      <AnimateOnScroll delay={0} duration={0.6}>
        <p className="text-text-primary mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 text-sm sm:text-base">
          <span className="wave">
            <Hand className="text-highlight-primary size-5 sm:size-6" />
          </span>
          Hey! It&apos;s me Jehian,
        </p>
      </AnimateOnScroll>
      {/* Main Heading */}
      <AnimateOnScroll delay={0.2} duration={0.6}>
        <h1 className="font-clash-display !font-medium leading-tight sm:leading-none text-pretty !text-3xl min-[480px]:!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl lg:w-3/4">
          Crafting{" "}
          <span className="text-highlight-primary">
            purpose driven experiences
          </span>
          {" "}that inspire &amp; engage.
        </h1>
      </AnimateOnScroll>
      {/* Description */}
      <AnimateOnScroll delay={0.4} duration={0.6}>
        <div className="md:flex-center mt-4 sm:mt-6 md:mt-8 flex flex-col items-start gap-3 sm:gap-4 md:flex-row md:items-center">
          <div className="bg-bg-700 h-px w-full min-w-0 md:max-w-[4rem] lg:max-w-[6rem]" />
          <p className="w-full min-w-0 text-pretty text-text-secondary text-sm sm:text-base">
            I work with brands globally to build pixel-perfect, engaging, and
            accessible digital experiences that drive results and achieve
            business goals.
          </p>
        </div>
      </AnimateOnScroll>
      {/* Social Links & CTA */}
      <AnimateOnScroll delay={0.6} duration={0.6}>
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col gap-4 sm:gap-6 md:flex-row md:justify-between md:items-center">
          {/* Social links - horizontal scroll on mobile, full row on desktop */}
          <ul className="opacity-container flex h-fit flex-wrap gap-3 sm:gap-4 md:flex-nowrap group">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name} className="opacity-container-child h-fit">
                <Link
                  target="_blank"
                  className="flex-center text-text-secondary gap-1.5 sm:gap-2 text-xs sm:text-sm uppercase transition-all duration-500 group-hover:opacity-50 hover:!opacity-100"
                  href={link.href}
                >
                  {link.name}
                  <ArrowUpRight className="size-3.5 sm:size-4 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/about" className="w-full sm:w-auto">
            <button
              className="group cursor-pointer btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline relative overflow-hidden !px-4 !py-2.5 sm:!px-6 sm:!py-3 text-sm sm:text-base w-full sm:w-auto"
              type="button"
              aria-disabled="false"
            >
              <span className="btn__ripple" />
              {/* Background yang muncul dari bawah */}
              <span
                className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                style={{ backgroundColor: "var(--foreground)" }}
              />
              {/* Text container */}
              <span className="block overflow-hidden relative z-10">
                {/* Text asli */}
                <span className="btn__text block transform group-hover:-translate-y-full transition-transform duration-500 ease-out">
                  Know me better
                </span>
                {/* Text hover yang muncul dari bawah */}
                <span
                  className="btn__text absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ color: "var(--background)" }}
                >
                  About me
                </span>
              </span>
            </button>
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
