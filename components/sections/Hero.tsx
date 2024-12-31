"use client"

import { ArrowRight } from "lucide-react"
import RollingText from "@/components/ui/RollingText"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Blob backgrounds */}
      <span className="blob size-1/4 absolute rotate-90 top-20 left-0 blur-[100px] -z-10 opacity-50" />
      <span className="blob w-1/4 h-2/3 absolute -right-40 rotate-180 bottom-52 blur-[100px] -z-10 opacity-50" />

      <div className="w-full px-4 md:px-8 tracking-tight">
        <div className="flex items-center justify-center flex-col h-[90vh]">
          {/* Title */}
          <div className="py-6 flex items-center flex-col">
            <h1 className="md:text-9xl text-5xl font-bold overflow-hidden text-center font-instrument-sans">
              <span className="inline-block overflow-hidden">
                JEHIAN ATHAYA <br />
                TSANI AZ ZUHRY
              </span>
            </h1>
          </div>

          {/* Description */}
          <div>
            <p className="text-accent text-center md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
              I am a developer and designer who has a passion for building
              responsive, cool looking, and easy to visit website applications.
            </p>
          </div>

          {/* Button */}
          <div>
            <button className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-4 group">
              <RollingText text="Let's talk" />
              <ArrowRight
                className="group-hover:rotate-90 transition-transform"
                size={20}
              />
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="justify-between hidden md:flex w-full px-6 tracking-tighter">
          <p className="text-lg font-medium">
            BASED IN PURWOKERTO<span className="text-white/40">, INDONESIA</span>
          </p>
          <p className="text-lg font-medium">
            FRONT-END DEVELOPER{" "}
            <span className="text-white/40">+ UI DESIGNER</span>
          </p>
        </div>
      </div>
    </section>
  )
}
