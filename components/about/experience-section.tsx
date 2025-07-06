import AnimateOnScroll from "../animate-on-scroll"

export default function ExperienceSection() {
  return (
    <AnimateOnScroll delay={0.2} duration={0.6}>
      <section className="container max-screen py-16">
        <h2 className="font-clash-display text-4xl font-medium mb-8">
          Experience
        </h2>
        <p className="text-text-secondary">Experience content coming soon...</p>
      </section>
    </AnimateOnScroll>
  )
}
