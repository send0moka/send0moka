import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import Marquee from "@/components/sections/Marquee"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Skills />
    </main>
  )
}
