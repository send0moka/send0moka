"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor
}

export default function Cursor() {
  const [cursor, setCursor] = useState<HTMLDivElement | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!cursor) return

    cursor.style.opacity = "1"
    let animationFrameId: number

    const render = () => {
      cursorRef.current.x = lerp(
        cursorRef.current.x,
        targetRef.current.x - (isHovering ? 24 : 8),
        0.05
      )
      cursorRef.current.y = lerp(
        cursorRef.current.y,
        targetRef.current.y - (isHovering ? 24 : 8),
        0.05
      )

      cursor.style.transform = `translate(${cursorRef.current.x}px, ${cursorRef.current.y}px)`
      animationFrameId = requestAnimationFrame(render)
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }

    const handleProjectHover = () => setIsHovering(true)
    const handleProjectLeave = () => setIsHovering(false)

    const projects = document.querySelectorAll('.project-card')
    projects.forEach(project => {
      project.addEventListener('mouseenter', handleProjectHover)
      project.addEventListener('mouseleave', handleProjectLeave)
    })

    window.addEventListener("mousemove", handleMouseMove)
    animationFrameId = requestAnimationFrame(render)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      projects.forEach(project => {
        project.removeEventListener('mouseenter', handleProjectHover)
        project.removeEventListener('mouseleave', handleProjectLeave)
      })
      cancelAnimationFrame(animationFrameId)
    }
  }, [cursor, isHovering])

  return (
    <motion.div
      ref={setCursor}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference max-md:hidden grid place-items-center"
      animate={{
        width: isHovering ? "96px" : "16px",
        height: isHovering ? "96px" : "16px",
        backgroundColor: isHovering ? "white" : "transparent",
        border: isHovering ? "none" : "1px solid white"
      }}
      transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
      style={{ opacity: 0 }}
    >
      {isHovering && <ArrowUpRight className="text-black" size={32} />}
    </motion.div>
  )
}