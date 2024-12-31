"use client"

import { Sparkle } from "lucide-react"

const MarqueeItem = () => (
  <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
    <span className="px-4 font-bold">WEB DEVELOPER</span>
    <Sparkle fill="#fff" size={20} />
    <span className="px-4 font-bold">UI/UX DESIGNER</span>
    <Sparkle fill="#fff" size={20} />
    <span className="px-4 font-bold">MOBILE DEVELOPER</span>
    <Sparkle fill="#fff" size={20} />
    <span className="px-4 font-bold">SYSTEM ANALYST</span>
    <Sparkle fill="#fff" size={20} />
    <span className="px-4 font-bold">TECH ENTHUSIAST</span>
    <Sparkle fill="#fff" size={20} />
  </div>
)

export default function Marquee() {
  return (
    <section className="overflow-hidden py-8">
      <div className="relative flex flex-col items-center justify-center overflow-hidden py-3 bg-gradient-to-br from-primary to-indigo-400 -rotate-1">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>
    </section>
  )
}