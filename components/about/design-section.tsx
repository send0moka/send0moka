import {
  BrainCircuit,
  CodeXml,
  PencilRuler,
  PenLine,
  ShieldCheck,
  Sparkle,
} from "lucide-react"
import AnimateOnScroll from "../animate-on-scroll"

interface ProcessStepProps {
  icon: React.ComponentType<{ size: number; className: string }>
  stepNumber: string
  title: string
  description: string
}

const ProcessStep = ({ icon: Icon, stepNumber, title, description }: ProcessStepProps) => (
  <AnimateOnScroll delay={0.6} duration={0.6}>
    <div className="flex flex-col gap-4 !border !border-text-secondary/50 !p-6 rounded-3xl w-80">
      <Icon
        size={52}
        className="text-highlight-primary bg-[#191920] !p-4 rounded-full !border !border-[#2c2c35]"
      />
      <p className="text-text-primary text-2xl font-medium tracking-tight">
        {stepNumber}. {title}
      </p>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  </AnimateOnScroll>
)

const DESIGN_PROCESS_STEPS = [
  {
    icon: BrainCircuit,
    stepNumber: "01",
    title: "Strategize",
    description: "To create something awesome, one must first talk about the details. Planning is essential."
  },
  {
    icon: PenLine,
    stepNumber: "02",
    title: "Wireframe",
    description: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper."
  },
  {
    icon: PencilRuler,
    stepNumber: "03",
    title: "Design",
    description: "The most fun part of all - adding pizzaz to the wirefreames and bring it to life."
  },
  {
    icon: CodeXml,
    stepNumber: "04",
    title: "Development",
    description: "The design may be final but it needs to be functional and practical. Development is key."
  },
  {
    icon: ShieldCheck,
    stepNumber: "05",
    title: "Quality Assurance",
    description: "Website load times, SEO, file optimization, etc., weigh in to the quality of the site."
  }
]

export default function DesignSection() {
  return (
    <AnimateOnScroll delay={0.4} duration={0.6}>
      <section className="py-16 flex flex-col gap-10">
        <aside className="container max-screen">
          <AnimateOnScroll delay={0} duration={0.6}>
            <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
              <Sparkle size={18} />
              <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
                Steps I follow
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} duration={0.6}>
            <h2 className="!my-4 font-clash-display !text-5xl !font-medium text-text-primary">
              My Design Process
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4} duration={0.6}>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-secondary">
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products.
            </p>
          </AnimateOnScroll>
        </aside>
        <aside className="flex flex-wrap justify-center gap-6 px-4">
          {DESIGN_PROCESS_STEPS.map((step) => (
            <ProcessStep
              key={`${step.stepNumber}-${step.title}`}
              icon={step.icon}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </aside>
      </section>
    </AnimateOnScroll>
  )
}
