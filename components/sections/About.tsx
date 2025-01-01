/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section id="about" className="px-4 md:px-8 relative">
      <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />

      <motion.div
        className="flex justify-center my-8"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h3 className="text-4xl md:text-6xl lg:text-7xl uppercase font-instrument-sans font-bold md:px-4 px-2 pb-10 mx-auto text-center">
          <motion.span
            className="inline-block overflow-hidden text-white/40"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            MORE ABOUT
          </motion.span>
          <br />
          <motion.span
            className="inline-block overflow-hidden"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            SENDOMOKA
          </motion.span>
        </h3>
      </motion.div>

      <div ref={containerRef} className="hidden md:block h-[50vh] w-[30rem] mx-auto rounded-2xl overflow-hidden -mt-16">
        <div className="relative w-[30rem] h-full mx-auto">
          <motion.div
            style={{ y }}
            className="absolute inset-0 h-[85%] w-full"
          >
            <Image
              alt="Profile Image Desktop"
              src="/me.png"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div className="md:hidden overflow-hidden rounded-2xl h-80 max-w-96 mx-auto">
        <Image
          alt="Profile Image Mobile"
          src="/me.png"
          width={500}
          height={500}
          className="w-full h-full object-cover transition hover:scale-105 duration-500 ease-out"
        />
      </div>

      <motion.div
        className="flex flex-col justify-center my-10 max-w-[60rem] mx-auto"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <p className="text-base md:text-3xl font-bold tracking-wide leading-relaxed uppercase text-center">
          I'M AN FRONT-END DEVELOPER AND UI/UX DESIGNER. MY PASSION IS BUILDING
          RESPONSIVE WEBSITE APPLICATIONS THAT LOOK COOL AND ARE EASY FOR USERS
          TO VISIT.
        </p>
        <p className="mt-10 md:text-2xl text-white/40 tracking-wide leading-relaxed text-center">
          I'm a Front-End Developer who allows me to bring my creative vision to
          life. I love finding <i>"unexpected solutions"</i> and believe that
          with the right perspective, design can enhance the human experience.
        </p>
      </motion.div>
    </section>
  )
}
