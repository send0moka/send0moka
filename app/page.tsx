import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import MarqueeSection from '@/components/marquee-section'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import ExpertiseSection from '@/components/expertise-section'
import TestimonialsSection from '@/components/testimonials-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import MobileNav from '@/components/mobile-nav'

export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <main className="grow">
        <div className="revealFx relative flex w-full flex-col gap-24 justify-center hideRevealFx" style={{transitionDuration:'1.5s',transform:'translateY(0rem)'}}>
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <ProjectsSection />
          <ExpertiseSection />
          <TestimonialsSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}
