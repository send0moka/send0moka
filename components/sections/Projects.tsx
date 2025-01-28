"use client"

import { ArrowUpRight } from "lucide-react"
import RollingText from "@/components/ui/RollingText"
import Image from "next/image"
import { useState, useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { motion } from "framer-motion"

const titleVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link: string
  type: "Flutter" | "Remix" | "Astro" | "Next JS" | "All"
}

const projects: ProjectCardProps[] = [
  {
    title: "Temulik",
    category: "Mobile Development",
    image: "/temulik.png",
    link: "https://github.com/send0moka/temulik",
    type: "Flutter",
  },
  {
    title: "Petir Bercerita",
    category: "Web Development",
    image: "/petir.png",
    link: "https://petirbercerita.life",
    type: "Remix",
  },
  {
    title: "Soedirman Digital School",
    category: "Web Development",
    image: "/sds.png",
    link: "https://soedirmandigitalschool.vercel.app",
    type: "Astro",
  },
  {
    title: "Hospital Kiosk Queue Print System",
    category: "Web Development",
    image: "/rsu.png",
    link: "https://github.com/send0moka/hospital-kiosk-queue-print-system",
    type: "Next JS",
  }
]

const ProjectCard = ({ title, category, image, link }: ProjectCardProps) => {
  const cardRef = useScrollAnimation()

  return (
    <div
      ref={cardRef}
      className="project-card relative rounded-xl md:rounded-3xl overflow-hidden bg-secondary/30 p-4 md:p-6 group opacity-0"
    >
      <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
        <div className="bg-white size-8 rounded-full text-black grid place-items-center">
          <ArrowUpRight size={20} />
        </div>
      </div>
      <a target="_blank" className="flex flex-col gap-4 md:gap-8" href={link}>
        <div className="overflow-hidden rounded-xl md:rounded-2xl relative aspect-[4/3]">
          <Image
            alt={title}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            priority
            className="object-cover group-hover:scale-110 transition duration-500 ease-out"
          />
        </div>
        <div className="relative">
          <div className="flex justify-between items-center max-md:hidden transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-4">
            <p className="text-sm md:text-xl uppercase tracking-wider font-semibold max-md:opacity-0">
              {title}
            </p>
            <button className="flex gap-2 items-center justify-center max-md:px-4">
              <RollingText text="Visit" />
              <span className="bg-black text-white/80 rounded-full p-1 z-10">
                <ArrowUpRight className="size-4 md:size-6" />
              </span>
            </button>
          </div>
          <div className="overflow-hidden max-md:hidden">
            <p className="absolute text-white/50 transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4">
              {category}
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}

interface ButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const FilterButton = ({ active, onClick, children, buttonRef }: ButtonProps) => (
  <div className="relative">
    {active && (
      <motion.div
        layoutId="active-pill"
        className="absolute inset-0 bg-primary rounded-full"
        transition={{ type: "spring", duration: 0.6 }}
      />
    )}
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative px-6 py-2 rounded-full ${
        active ? "text-black" : "border border-white/20"
      }`}
    >
      {children}
    </button>
  </div>
)

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Flutter" | "Remix" | "Astro" | "Next JS">("All")
  const buttonRefs = {
    All: useRef<HTMLButtonElement>(null),
    Flutter: useRef<HTMLButtonElement>(null),
    Remix: useRef<HTMLButtonElement>(null),
    Astro: useRef<HTMLButtonElement>(null),
    "Next JS": useRef<HTMLButtonElement>(null),
  }

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.type === activeFilter
  )

  return (
    <section className="md:px-10 px-4 relative my-20" id="projects">
      <h3 className="text-4xl md:text-6xl lg:text-7xl uppercase font-instrument-sans font-bold md:px-4 px-2 pb-10 mx-auto md:pl-16">
        <motion.span 
          className="inline-block overflow-hidden text-white/40"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          Selected
        </motion.span>
        <br />
        <motion.span 
          className="inline-block overflow-hidden"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          works
        </motion.span>
      </h3>

      <div className="flex items-center gap-4 py-8 justify-center max-md:flex-wrap">
        <FilterButton
          active={activeFilter === "All"}
          onClick={() => setActiveFilter("All")}
          buttonRef={buttonRefs.All}
        >
          <RollingText text="All" />
        </FilterButton>

        <FilterButton
          active={activeFilter === "Flutter"}
          onClick={() => setActiveFilter("Flutter")}
          buttonRef={buttonRefs.Flutter}
        >
          <RollingText text="Flutter" />
        </FilterButton>

        <FilterButton
          active={activeFilter === "Remix"}
          onClick={() => setActiveFilter("Remix")}
          buttonRef={buttonRefs.Remix}
        >
          <RollingText text="Remix" />
        </FilterButton>

        <FilterButton
          active={activeFilter === "Astro"}
          onClick={() => setActiveFilter("Astro")}
          buttonRef={buttonRefs.Astro}
        >
          <RollingText text="Astro" />
        </FilterButton>

        <FilterButton
          active={activeFilter === "Next JS"}
          onClick={() => setActiveFilter("Next JS")}
          buttonRef={buttonRefs["Next JS"]}
        >
          <RollingText text="Next JS" />
        </FilterButton>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
