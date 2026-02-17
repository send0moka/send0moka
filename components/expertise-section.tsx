"use client"

import {
  Sparkle,
  CodeXml,
  PenTool,
  SwatchBook,
  ChevronDown,
} from "lucide-react"
import { useState, useEffect } from "react"
import AnimateOnScroll from "./animate-on-scroll"
import Image from "next/image"

function ExpertiseSection() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "development"
  )
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

  const skills = [
    // FE
    { name: "Angular", icon: "angular17" },
    { name: "Astro", icon: "astro" },
    { name: "Chakra UI", icon: "chakraui" },
    { name: "Framer", icon: "framer" },
    { name: "i18next", icon: "i18next" },
    { name: "Next JS", icon: "nextjs2" },
    { name: "Nuxt JS", icon: "nuxtjs" },
    { name: "PWA", icon: "pwa" },
    { name: "Qwik", icon: "qwik" },
    { name: "Radix UI", icon: "radixui" },
    { name: "Remix", icon: "remix" },
    { name: "Shadcn UI", icon: "shadcnui" },
    { name: "Solid JS", icon: "solidjs" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    // BE
    { name: "Appwrite", icon: "appwrite" },
    { name: "CodeIgniter", icon: "codeigniter" },
    { name: "Django", icon: "django" },
    { name: "Go", icon: "go" },
    { name: "Laravel", icon: "laravel" },
    { name: "Prisma", icon: "prisma" },
    { name: "Spring Boot", icon: "spring" },
    { name: "tRPC", icon: "tRPC" },
    // DB
    { name: "MongoDB", icon: "mongodb" },
    { name: "Supabase", icon: "supabase" },
    // Cloud Infra
    { name: "Alibaba Cloud", icon: "alibabacloud" },
    { name: "AWS", icon: "aws" },
    { name: "Cloudflare", icon: "cloudflare" },
    { name: "Google Cloud", icon: "gcloud" },
    { name: "Netlify", icon: "netlify2" },
    { name: "Vercel", icon: "vercel" },
    // Programming Languages
    { name: "C++", icon: "c++" },
    { name: "Python", icon: "python" },
    { name: "Rust", icon: "rust" },
    { name: "TypeScript", icon: "typescript" },
    // DevOps Version Control
    { name: "Bash", icon: "bash" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    // Design 
    { name: "Canva", icon: "canva" },
    { name: "Figma", icon: "figma" },
    { name: "Lightroom", icon: "lightroom" },
    { name: "Illustrator", icon: "ai" },
    // Animation
    { name: "GSAP", icon: "gsap" },
    // Mobile
    { name: "Android", icon: "android" },
    { name: "Flutter", icon: "flutter" },
    { name: "Ionic", icon: "ionic" },
    // Data AI
    { name: "Analytics", icon: "analytics" },
    { name: "Hugging Face", icon: "huggingface" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "Streamlit", icon: "streamlit" },
    // Productivity
    { name: "N8n", icon: "n8n" },
    { name: "Notion", icon: "notion" },
    { name: "VsCode", icon: "vscode" },
    // CMS
    { name: "WordPress", icon: "wordpress" },
    // Others
    { name: "Brave Browser", icon: "brave" },
    { name: "Bun JS", icon: "bunjs" },
    { name: "Firebase", icon: "firebase" },
    { name: "Zod", icon: "zod" },
  ]

  const getSkillIconPath = (iconName: string) => {
    const themeFolder = currentTheme === 'dark' ? 'dark' : 'light'
    return `/skills/${themeFolder}/${iconName}.svg`
  }

  const getThemeStyles = () => {
    return currentTheme === 'dark' 
      ? '!border-[#191920] !bg-[#111116]' 
      : '!border-[#e2e8f0] !bg-white'
  }

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  return (
    <section className="w-full overflow-hidden">
      <div className="max-screen !mt-12 sm:!mt-16 lg:!mt-20 py-10 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:gap-0">
          <div className="w-full min-w-0">
            <AnimateOnScroll delay={0} duration={0.6}>
              <div className="mb-3 sm:mb-4 flex w-fit items-center gap-1.5 sm:gap-2 text-highlight-primary">
                <Sparkle className="size-4 sm:size-5 shrink-0" />
                <p className="shimmer word-spacing font-clash-display text-xs sm:text-sm uppercase leading-none text-highlight-primary">
                  Speciality
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} duration={0.6}>
              <h2 className="!my-2 sm:!my-4 font-clash-display !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !font-medium text-text-primary">
                Areas of Expertise
              </h2>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.4} duration={0.6}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 min-w-0">
              <div className="w-full min-w-0 !space-y-3 sm:!space-y-4 order-2 lg:order-1">
                {/* Development Accordion */}
                <div 
                  className={`!border !p-3 sm:!p-4 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer min-w-0 ${getThemeStyles()}`}
                  onClick={() => toggleAccordion("development")}
                >
                  <div className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-3 sm:p-4 md:p-6 text-left text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-bg-700 min-h-[44px] sm:min-h-0">
                    <div className="flex items-center gap-2 sm:gap-3 font-medium min-w-0 flex-1">
                      <CodeXml className="size-4 sm:size-5 shrink-0" />
                      <span className="truncate">Development</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 ease-in-out flex-shrink-0 ${
                        activeAccordion === "development" ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div 
                    className={`overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === "development" 
                        ? "max-h-[16rem] sm:max-h-40 md:max-h-32 opacity-100 py-0" 
                        : "max-h-0 opacity-0 py-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 border-t border-bg-700 transition-all duration-300">
                      <p className="text-text-secondary !mt-3 sm:!mt-4 text-sm sm:text-base leading-relaxed break-words transition-all duration-300">
                        Building responsive websites. Providing the users an
                        enriching experience that responds to any device and screen
                        size.
                      </p>
                    </div>
                  </div>
                </div>
                {/* UI/UX Design Accordion */}
                <div 
                  className={`!border !p-3 sm:!p-4 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer min-w-0 ${getThemeStyles()}`}
                  onClick={() => toggleAccordion("design")}
                >
                  <div className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-3 sm:p-4 md:p-6 text-left text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-bg-700 min-h-[44px] sm:min-h-0">
                    <div className="flex items-center gap-2 sm:gap-3 font-medium min-w-0 flex-1">
                      <PenTool className="size-4 sm:size-5 shrink-0" />
                      <span className="truncate">UI/UX Design</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 ease-in-out flex-shrink-0 ${
                        activeAccordion === "design" ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div 
                    className={`overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === "design" 
                        ? "max-h-[16rem] sm:max-h-40 md:max-h-32 opacity-100 py-0" 
                        : "max-h-0 opacity-0 py-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 border-t border-bg-700 transition-all duration-300">
                      <p className="text-text-secondary !mt-3 sm:!mt-4 text-sm sm:text-base leading-relaxed break-words transition-all duration-300">
                        Designing user-centric, modern interfaces that shapes how
                        the audience interacts with the product.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Branding Accordion */}
                <div 
                  className={`!border !p-3 sm:!p-4 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer min-w-0 ${getThemeStyles()}`}
                  onClick={() => toggleAccordion("branding")}
                >
                  <div className="w-full font-satoshi text-text-primary flex items-center justify-between gap-2 p-3 sm:p-4 md:p-6 text-left text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-bg-700 min-h-[44px] sm:min-h-0">
                    <div className="flex items-center gap-2 sm:gap-3 font-medium min-w-0 flex-1">
                      <SwatchBook className="size-4 sm:size-5 shrink-0" />
                      <span className="truncate">Branding</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 ease-in-out flex-shrink-0 ${
                        activeAccordion === "branding" ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div 
                    className={`overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out ${
                      activeAccordion === "branding" 
                        ? "max-h-[20rem] sm:max-h-48 md:max-h-40 opacity-100 py-0" 
                        : "max-h-0 opacity-0 py-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 border-t border-bg-700 transition-all duration-300">
                      <p className="text-text-secondary !mt-3 sm:!mt-4 text-sm sm:text-base leading-relaxed break-words transition-all duration-300">
                        Building brand identities including working on logo,
                        typography, iconography, colour palette, visual language,
                        and brand personality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="group relative w-full max-w-full min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-bg-800 order-1 lg:order-2 h-[160px] sm:h-[200px] md:h-[240px] lg:h-auto lg:aspect-video">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-highlight-primary/20 to-transparent">
                  <Image
                    src="/expertise/development.webp"
                    alt="Development Illustration"
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      activeAccordion === "development" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <Image
                    src="/expertise/designing.avif"
                    alt="Design Illustration"
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      activeAccordion === "design" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <Image
                    src="/expertise/branding.avif"
                    alt="Branding Illustration"
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      activeAccordion === "branding" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <Image
                    src="/expertise/development.webp"
                    alt="Development Illustration"
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      !activeAccordion ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Skills marquee */}
          <AnimateOnScroll delay={0.6} duration={0.6}>
            <div className="relative overflow-hidden mt-6 sm:mt-8">
              <div className="overflow-hidden !py-4 sm:!py-6 md:!py-8">
                <div className="flex animate-marquee gap-2 sm:gap-3 md:gap-4 w-max">
                  {/* First set of skills */}
                  {skills.map((skill, index) => (
                    <div
                      key={`first-${index}`}
                      className={`inline-flex w-fit min-w-fit items-center gap-1.5 sm:gap-2 rounded-full !border !px-3 !py-1.5 sm:!px-4 sm:!py-2 text-xs sm:text-sm font-medium transition-colors hover:border-highlight-primary/50 hover:bg-bg-700 shrink-0 ${getThemeStyles()}`}
                    >
                      <Image
                        src={getSkillIconPath(skill.icon)}
                        alt={`${skill.name} icon`}
                        width={16}
                        height={16}
                        className="size-3.5 sm:size-4 object-contain shrink-0"
                      />
                      <span className="text-text-primary whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless scroll */}
                  {skills.map((skill, index) => (
                    <div
                      key={`second-${index}`}
                      className={`inline-flex w-fit min-w-fit items-center gap-1.5 sm:gap-2 rounded-full !border !px-3 !py-1.5 sm:!px-4 sm:!py-2 text-xs sm:text-sm font-medium transition-colors hover:border-highlight-primary/50 hover:bg-bg-700 shrink-0 ${getThemeStyles()}`}
                    >
                      <Image
                        src={getSkillIconPath(skill.icon)}
                        alt={`${skill.name} icon`}
                        width={16}
                        height={16}
                        className="size-3.5 sm:size-4 object-contain shrink-0"
                      />
                      <span className="text-text-primary whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                </div>
                {/* Gradient overlays */}
                <div className={`pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 z-10 ${
                  currentTheme === 'dark' 
                    ? 'bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent' 
                    : 'bg-gradient-to-r from-[#f7f8fa] via-[#f7f8fa]/80 to-transparent'
                }`}></div>
                <div className={`pointer-events-none absolute inset-y-0 -right-4 sm:-right-8 w-24 sm:w-36 md:w-48 z-10 ${
                  currentTheme === 'dark' 
                    ? 'bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent' 
                    : 'bg-gradient-to-l from-[#f7f8fa] via-[#f7f8fa]/80 to-transparent'
                }`}></div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection