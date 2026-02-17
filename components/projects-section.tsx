"use client"

import Link from "next/link"
import Image from "next/image"
import { Sparkle } from "lucide-react"
import AnimateOnScroll from "./animate-on-scroll"

const projects = [
  // 2025 Projects
  {
    title: "Hiota",
    category: "Design",
    year: "2025",
    image: "/projects/hiota.svg",
    href: "/projects/hiota",
  },
  {
    title: "Ga Cemas Lagi!",
    category: "Development",
    year: "2025",
    image: "/projects/gacemaslagi.svg",
    href: "/projects/gacemaslagi",
  },
  {
    title: "ATM Lestari",
    category: "Design",
    year: "2025",
    image: "/projects/atm-lestari.svg",
    href: "/projects/atm-lestari",
  },
  {
    title: "Siklus",
    category: "Design",
    year: "2025",
    image: "/projects/siklus.svg",
    href: "/projects/siklus",
  },
]

export default function ProjectsSection() {
  return (
    <section className="max-screen">
      <AnimateOnScroll delay={0} duration={0.6}>
        <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
          <Sparkle size={18} />
          <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
            My Work
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.2} duration={0.6}>
        <h2 className="!my-4 font-clash-display !text-3xl sm:!text-4xl md:!text-5xl !font-medium text-text-primary">
          Selected Projects
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.4} duration={0.6}>
        <p className="text-text-secondary">
          Here&apos;s a curated selection showcasing my expertise and the
          achieved results.
        </p>
      </AnimateOnScroll>
      <div className="opacity-container py-md grid grid-cols-1 grid-rows-[masonry] gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0 projects-hover-container">
        {projects.map((project, index) => (
          <AnimateOnScroll key={index} delay={0.6 + index * 0.1} duration={0.6}>
            <div className={`opacity-container-child group project-card h-fit w-full cursor-pointer ${
                index % 2 === 1 ? "!mt-10 sm:!mt-14" : "sm:even:mt-14"
              }`}>
              <Link className="h-fit w-full" href={project.href}>
                <div className="aspect-3/2 w-full overflow-hidden rounded-3xl">
                  <Image
                    alt={project.title}
                    width={1896}
                    height={1269}
                    className={`aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.015] ${
                      project.image.endsWith(".svg") ? "svg-crisp" : ""
                    }`}
                    src={project.image}
                    style={{
                      imageRendering: project.image.endsWith(".svg")
                        ? "crisp-edges"
                        : "auto",
                    }}
                    quality={100}
                    priority={index < 2}
                    unoptimized={project.image.endsWith(".svg")}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <div className="!mt-4">
                  <h5>{project.title}</h5>
                  <div className="flex justify-between">
                    <div className="flex flex-wrap gap-2">
                      <p className="text-sm text-text-secondary">
                        {project.category}
                      </p>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll delay={1.0} duration={0.6}>
        <div className="flex justify-center items-center">
          <Link href="/projects">
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
                  View All Projects
                </span>
                {/* Text hover yang muncul dari bawah */}
                <span
                  className="btn__text absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ color: "var(--background)" }}
                >
                  Explore More
                </span>
              </span>
            </button>
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
