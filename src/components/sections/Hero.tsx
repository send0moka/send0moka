"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/portfolio-data";

const taglineWords = [
  "Frontend",
  "developer",
  "yang",
  "suka",
  "membuat",
  "interface",
  "rapi,",
  "hidup,",
  "dan",
  "enak",
  "dipakai.",
];

const heroProject = projects.find((project) => project.featured) ?? projects[0];

export function Hero(): ReactElement {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300"
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            Portfolio personal
          </motion.p>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
          >
            send0moka
          </motion.h1>
          <motion.p
            animate="visible"
            className="mt-6 flex max-w-2xl flex-wrap gap-x-2 gap-y-1 text-xl leading-8 text-zinc-600 dark:text-zinc-300"
            initial="hidden"
            transition={{ staggerChildren: 0.045 }}
          >
            {taglineWords.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <Button href="/projects">Lihat projects</Button>
            <Button href="/cv.pdf" variant="secondary">
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              alt={`${heroProject.title} preview`}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={heroProject.image}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-zinc-500 dark:text-zinc-500">Focus</p>
              <p className="mt-1 font-semibold text-zinc-950 dark:text-zinc-50">UI</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-zinc-500 dark:text-zinc-500">Stack</p>
              <p className="mt-1 font-semibold text-zinc-950 dark:text-zinc-50">Next.js</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-zinc-500 dark:text-zinc-500">Mood</p>
              <p className="mt-1 font-semibold text-zinc-950 dark:text-zinc-50">Clean</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
