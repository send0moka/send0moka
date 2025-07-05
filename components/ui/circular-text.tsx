import React from "react"
import { ArrowUpRight } from "lucide-react"

const CircularText = () => {
  const text =
    " • LETS TALK • LETS TALK • LETS TALK • CHAT "
  const radius = 46 // radius untuk path lingkaran
  const size = 112 // size-28 = 112px
  const center = size / 2 // center point = 56px

  return (
    <div className="relative size-28 group cursor-pointer">
      {/* Circular Text */}
      <div
        className="absolute inset-0 animate-spin"
        style={{ animationDuration: "20s" }}
      >
        <svg className="size-full" viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <path
              id="circle-path"
              d={`M ${center} ${center} m -${radius} 0 a ${radius} ${radius} 0 1 1 ${
                radius * 2
              } 0 a ${radius} ${radius} 0 1 1 -${radius * 2} 0`}
              fill="none"
            />
          </defs>
          <text
            className="text-lg fill-[#f6f7ff] font-normal"
            style={{ fontSize: "14px" }}
          >
            <textPath href="#circle-path" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Circle with Arrow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-18 rounded-full !border !border-[#2c2c35] flex items-center justify-center bg-transparent">
          {/* Single arrow that rotates from up-right to right */}
          <ArrowUpRight className="size-5 text-[#f6f7ff] transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </div>
      </div>
    </div>
  )
}

export default CircularText
