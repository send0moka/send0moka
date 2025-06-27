"use client"

import Link from "next/link"
import AnimateOnScroll from "./animate-on-scroll"

function CTASection() {
  return (
    <section className="max-screen rounded-3xl w-full bg-[#111116] !py-14 text-center">
      <AnimateOnScroll delay={0} duration={0.6}>
        <div className="inline-flex items-center !px-4 !py-2 bg-[#21291f] text-white rounded-full text-sm font-medium !mb-8 font-satoshi">
          <div className="size-[6px] rounded-full bg-highlight-primary !mr-2 animate-pulse" />
          Available for work
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2} duration={0.6}>
        <h2 className="!text-6xl !font-medium text-balance !px-80 font-clash-display text-text-primary mb-4">
          Let&apos;s create your next big idea.
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.4} duration={0.6}>
        <div className="!pt-8">
          <Link href="/contact">
            <button
              className="group cursor-pointer btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline relative overflow-hidden"
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
                  Contact Me
                </span>
                {/* Text hover yang muncul dari bawah */}
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
    </section>
  )
}

export default CTASection
