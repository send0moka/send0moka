import AnimateOnScroll from "../animate-on-scroll"

export default function DesignSection() {
  return (
    <AnimateOnScroll delay={0.4} duration={0.6}>
      <section className="container max-screen py-16">
        <h2 className="font-clash-display text-4xl font-medium mb-8">
          Design Philosophy
        </h2>
        <p className="text-text-secondary">
          Design philosophy content coming soon...
        </p>
      </section>
    </AnimateOnScroll>
  )
}
