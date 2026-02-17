"use client"
import Link from "next/link"
import AnimateOnScroll from "../animate-on-scroll"
import Image from "next/image"
import CircularText from "../ui/circular-text"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme")
    if (theme) {
      setIsDark(theme === "dark")
    } else {
      // Default to dark theme
      setIsDark(true)
    }

    // Listen for theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark")
      }
    }

    // Listen for theme changes in other tabs/windows
    window.addEventListener("storage", handleStorageChange)

    // Also check for manual class changes on documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const currentClass = document.documentElement.className
          setIsDark(currentClass.includes("dark"))
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      observer.disconnect()
    }
  }, [])

  // Prevent hydration mismatch by not rendering theme-dependent styles until mounted
  const currentTheme = mounted ? (isDark ? "dark" : "light") : "dark"

  // Skills data with icon mapping
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
    // For dark mode, use dark icons
    // For light mode, use light icons
    const themeFolder = currentTheme === "dark" ? "dark" : "light"
    return `/skills/${themeFolder}/${iconName}.svg`
  }

  // Get theme-based styling
  const getThemeStyles = () => {
    return currentTheme === "dark"
      ? "!border-[#191920] !bg-[#111116]"
      : "!border-[#e2e8f0] !bg-white"
  }

  return (
    <AnimateOnScroll delay={0} duration={0.6}>
      <section className="!pt-24 flex flex-col">
        <aside className="container max-screen flex gap-15 items-center">
          <figure className="max-w-sm flex flex-col items-end">
            <Image
              src="/about/me.png"
              alt="Jehianth's profile picture"
              width={3024}
              height={4032}
              className="rounded-b-full"
              priority
            />
            <Link
              className="relative rounded-full bg-[#111116] !p-4 bottom-40"
              href="/contact"
            >
              <CircularText />
            </Link>
          </figure>
          <figure className="flex flex-col gap-4 !-mt-52">
            <h1 className="font-clash-display !font-medium !text-7xl text-balance">
              A{" "}
              <span className="text-highlight-primary">creative developer</span>{" "}
              & digital designer
            </h1>
            <p className="text-text-secondary text-balance">
              I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals.
            </p>
            <Link
              href="https://drive.google.com/file/d/1zpwpAsztKjGWDdjuYKh-KgskrhUpN1K5/view?usp=sharing"
              target="_blank"
            >
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
                    My Resume
                  </span>
                  {/* Text hover yang muncul dari bawah */}
                  <span
                    className="btn__text absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    style={{ color: "var(--background)" }}
                  >
                    CV ATS
                  </span>
                </span>
              </button>
            </Link>
          </figure>
        </aside>
        <aside className="!-mt-20 py-sm relative flex-col overflow-hidden border-gradient">
          <div className="overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="overflow-hidden !py-2">
                <div className="flex animate-marquee gap-4 w-max">
                  {/* First set of skills */}
                  {skills.map((skill, index) => (
                    <div
                      key={`first-${index}`}
                      className={`inline-flex w-fit min-w-fit items-center gap-2 rounded-full !border !px-4 !py-2 text-sm font-medium transition-colors hover:border-highlight-primary/50 hover:bg-bg-700 ${getThemeStyles()}`}
                    >
                      <Image
                        src={getSkillIconPath(skill.icon)}
                        alt={`${skill.name} icon`}
                        width={16}
                        height={16}
                        className="size-4 object-contain"
                      />
                      <span className="text-text-primary">{skill.name}</span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless scroll */}
                  {skills.map((skill, index) => (
                    <div
                      key={`second-${index}`}
                      className={`inline-flex w-fit min-w-fit items-center gap-2 rounded-full !border !px-4 !py-2 text-sm font-medium transition-colors hover:border-highlight-primary/50 hover:bg-bg-700 ${getThemeStyles()}`}
                    >
                      <Image
                        src={getSkillIconPath(skill.icon)}
                        alt={`${skill.name} icon`}
                        width={16}
                        height={16}
                        className="size-4 object-contain"
                      />
                      <span className="text-text-primary whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Gradient overlays */}
                <div
                  className={`pointer-events-none absolute inset-y-0 left-0 w-96 z-10 ${
                    currentTheme === "dark"
                      ? "bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent"
                      : "bg-gradient-to-r from-[#f7f8fa] via-[#f7f8fa]/80 to-transparent"
                  }`}
                ></div>
                <div
                  className={`pointer-events-none absolute inset-y-0 -right-8 w-96 z-10 ${
                    currentTheme === "dark"
                      ? "bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent"
                      : "bg-gradient-to-l from-[#f7f8fa] via-[#f7f8fa]/80 to-transparent"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </AnimateOnScroll>
  )
}
