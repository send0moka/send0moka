import AnimateOnScroll from "../animate-on-scroll"

export default function AwardsSection() {
  return (
    <AnimateOnScroll delay={0.6} duration={0.6}>
      <section className="container max-screen py-16">
        <h2 className="font-clash-display text-4xl font-medium mb-8">
          Awards & Recognition
        </h2>
        <p className="text-text-secondary">
          Awards and recognition content coming soon...
        </p>
      </section>
    </AnimateOnScroll>
  )
}
