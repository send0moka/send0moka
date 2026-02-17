"use client"

import AnimateOnScroll from "@/components/animate-on-scroll"
import { Sparkle } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const tabs = ["All", "Development", "Design"]

  const getSliderPosition = (tab: string) => {
    if (isMobile) {
      switch (tab) {
        case "All":
          return { left: "0%", width: "33.33%" }
        case "Development":
          return { left: "33.33%", width: "33.33%" }
        case "Design":
          return { left: "66.66%", width: "33.33%" }
        default:
          return { left: "0%", width: "33.33%" }
      }
    }
    switch (tab) {
      case "All":
        return { left: "0%", width: "22%" }
      case "Development":
        return { left: "22%", width: "45%" }
      case "Design":
        return { left: "69.5%", width: "30%" }
      default:
        return { left: "0%", width: "22%" }
    }
  }

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
    {
      title: "Nucifero",
      category: "Design",
      year: "2025",
      image: "/projects/nucifero.svg",
      href: "/projects/nucifero",
    },
    {
      title: "Petir Desa ID",
      category: "Development",
      year: "2025",
      image: "/projects/petir-desaid.svg",
      href: "/projects/petir-desaid",
    },
    {
      title: "Petir Bercerita",
      category: "Development",
      year: "2025",
      image: "/projects/petir-bercerita.svg",
      href: "/projects/petir-bercerita",
    },
    // 2024 Projects
    {
      title: "Kiosk Queue RS Elisabeth",
      category: "Development & Design",
      year: "2024",
      image: "/projects/kiosk-rse.svg",
      href: "/projects/kiosk-rse",
    },
    {
      title: "Temulik",
      category: "Development & Design",
      year: "2024",
      image: "/projects/temulik.svg",
      href: "/projects/temulik",
    },
    {
      title: "Wedding Invitation",
      category: "Development",
      year: "2024",
      image: "/projects/wedding-invitation.svg",
      href: "/projects/wedding-invitation",
    },
    {
      title: "Soeara",
      category: "Development & Design",
      year: "2024",
      image: "/projects/soeara.svg",
      href: "/projects/soeara",
    },
    {
      title: "Flobamora",
      category: "Development & Design",
      year: "2024",
      image: "/projects/flobamora.svg",
      href: "/projects/flobamora",
    },
    {
      title: "Coinversity",
      category: "Design",
      year: "2024",
      image: "/projects/coinversity.svg",
      href: "/projects/coinversity",
    },
    {
      title: "Soedirman Digital School 2024",
      category: "Development",
      year: "2024",
      image: "/projects/sds-2024.svg",
      href: "/projects/sds-2024",
    },
    {
      title: "Analista101",
      category: "Development",
      year: "2024",
      image: "/projects/analista101.svg",
      href: "/projects/analista101",
    },
    {
      title: "DBMS Creative",
      category: "Development",
      year: "2024",
      image: "/projects/dbms-creative.svg",
      href: "/projects/dbms-creative",
    },
    {
      title: "AOT Rumbling Simulation",
      category: "Development & Design",
      year: "2024",
      image: "/projects/aot-rumbling.svg",
      href: "/projects/aot-rumbling",
    },
    // 2023 Projects
    {
      title: "EduEval",
      category: "Design",
      year: "2023",
      image: "/projects/edueval.svg",
      href: "/projects/edueval",
    },
    {
      title: "Soedirman Digital School 2023",
      category: "Development",
      year: "2023",
      image: "/projects/sds-2023.svg",
      href: "/projects/sds-2023",
    },
    {
      title: "Riseru Hobbyshop",
      category: "Development",
      year: "2023",
      image: "/projects/riseru.svg",
      href: "/projects/riseru",
    },
    {
      title: "JBKons Architecture",
      category: "Development",
      year: "2023",
      image: "/projects/jbkons.svg",
      href: "/projects/jbkons",
    },
    {
      title: "Zeta Voicepack",
      category: "Development",
      year: "2023",
      image: "/projects/zeta-voicepack.svg",
      href: "/projects/zeta-voicepack",
    },
  ]

  // Filter function
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true
    if (activeTab === "Development") {
      return project.category.includes("Development")
    }
    if (activeTab === "Design") {
      return project.category.includes("Design")
    }
    return false
  })

  return (
    <AnimateOnScroll delay={0.2} duration={0.6} triggerOnMount>
      <section className="container max-screen py-16 flex flex-col gap-10 px-4 sm:px-6">
        <aside className="!mt-24 !-mb-10">
          <AnimateOnScroll delay={0} duration={0.6} triggerOnMount>
            <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
              <Sparkle size={18} />
              <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
                My Work
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} duration={0.6} triggerOnMount>
            <h2 className="!my-4 w-full md:w-1/2 leading-tight font-clash-display !text-3xl sm:!text-4xl md:!text-5xl !font-medium text-text-primary">
              Creating next level digital products
            </h2>
          </AnimateOnScroll>
        </aside>
        <aside className="flex justify-center sm:justify-end">
          <div className="relative flex bg-transparent rounded-full border border-bg-700 p-1 w-full sm:w-auto">
            {/* Background slider */}
            <div
              className="absolute top-0 bg-bg-700 rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: getSliderPosition(activeTab).left,
                width: getSliderPosition(activeTab).width,
                height: "calc(100% - 8px)",
                top: "4px",
              }}
            />

            {/* Buttons */}
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative z-10 text-text-primary !px-4 sm:!px-6 !py-2 rounded-full cursor-pointer transition-colors duration-300 text-sm sm:text-base flex-1 sm:flex-initial"
              >
                {tab}
              </button>
            ))}
          </div>
        </aside>
        <div className="opacity-container grid grid-cols-1 grid-rows-[masonry] gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0 projects-hover-container">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`opacity-container-child group project-card h-fit w-full cursor-pointer ${
                index % 2 === 1 ? "!mt-10 sm:!mt-14" : "sm:even:mt-14"
              }`}
            >
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
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  )
}
