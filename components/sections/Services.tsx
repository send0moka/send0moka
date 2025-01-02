"use client"

import { motion } from "framer-motion"
import RollingText from "@/components/ui/RollingText"

const titleVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

const services = [
  {
    title: "Web Development",
    description:
      "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
    image: "/images/web-development.webp",
  },
  {
    title: "App Development",
    description:
      "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
    image: "/images/app-development.webp",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design direction for business. Get your business on the next level. We help to create great experiences.",
    image: "/images/uiux-designer.webp",
  },
]

interface ServiceItemProps {
  title: string;
  description: string;
  image: string;
}

const ServiceItem = ({ title, description, image }: ServiceItemProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <a
        href="#contact"
        className="group relative flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-500 md:py-6 md:px-16 hover:bg-white/5"
      >
        <div>
          <div className="flex items-center justify-between">
            <h4 className="relative z-10 block text-2xl sm:text-4xl font-semibold md:font-bold md:text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">
              {title}
            </h4>
          </div>
          <p className="relative z-10 mt-2 block md:text-base text-sm text-foreground/50 transition-colors duration-500 text-white/40 group-hover:text-neutral-50">
            {description}
          </p>
        </div>

        <motion.img
          className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-84 lg:h-64 lg:w-96 max-md:hidden"
          src={image}
          alt={`Image representing a link for ${title}`}
          initial={{ scale: 0, rotate: -12.5, x: "-50%", y: "-50%" }}
          whileHover={{ scale: 1 }}
          style={{ top: "60%", left: "65%" }}
        />

        <motion.div
          className="z-10 md:p-4 grid justify-items-end gap-2 max-md:hidden"
          initial={{ opacity: 0, x: "25%" }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          <div className="border border-white/50 rounded-full py-2 px-4 text-white">
            <RollingText text="Discuss the project" />
          </div>
        </motion.div>
      </a>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section className="px-2 relative" id="services">
      <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />

      <h3 className="text-4xl md:text-6xl lg:text-7xl uppercase font-instrument-sans font-bold md:px-4 px-2 pb-10 mx-auto md:pl-16 overflow-hidden">
        <motion.span
          className="inline-block overflow-hidden text-white/40"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          services
        </motion.span>
        <br />
        <motion.span
          className="inline-block overflow-hidden"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          that i can do
        </motion.span>
      </h3>

      <div className="mx-auto pt-10">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>

      <motion.div
        className="flex items-center py-10 md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="p-4 rounded-full border border-white/50">
          <span>Discuss the project</span>
        </div>
      </motion.div>
    </section>
  )
}
