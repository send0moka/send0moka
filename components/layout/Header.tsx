"use client"

import Link from "next/link"
import { useState } from "react"
import RollingText from "@/components/ui/RollingText"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 md:top-12 md:right-12 right-0 z-20" style={{ height: 0 }}>
      <div 
        className="md:w-[480px] w-full h-full bg-black relative rounded-3xl"
        style={{
          width: isOpen ? "480px" : "100px",
          height: isOpen ? "600px" : "40px",
          transition: "all 0.6s cubic-bezier(0.76, 0, 0.24, 1)"
        }}
      />
      <div className="fixed md:top-10 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href="/">
          <RollingText text="SENDOMOKA" weight="medium" />
        </Link>
      </div>

      <div
        className="absolute md:top-0 top-4 right-4 md:right-0 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-full h-full" style={{ top: isOpen ? "100%" : "0%" }}>
          <div className="bg-gradient-to-b from-[#9b84f8] to-[#6365ee] h-full w-full grid place-items-center text-white tracking-tighter">
            <RollingText text="Menu" weight="normal" />
          </div>
          <div className="bg-black h-full w-full grid place-items-center">
            <RollingText text="Close" weight="medium" />
          </div>
        </div>
      </div>
    </div>
  )
}
