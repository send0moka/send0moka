"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import RollingText from "@/components/ui/RollingText"
import Menu from "@/components/ui/Menu"

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitors')
        const data = await response.json()
        if (data.count) setVisitorCount(data.count)
      } catch (error) {
        setError(true)
        console.error('Failed to fetch visitor count:', error)
      }
    }

    getVisitorCount()
  }, [])

  return (
    <>
      <motion.div
        className="fixed md:top-10 top-6 md:left-8 left-6 z-50 hover:text-white/80 text-white/40 flex items-center gap-4"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/">
          <RollingText text="SENDOMOKA" weight="medium" />
        </Link>
        {!error && (
          <>
            <span className="text-sm opacity-50">•</span>
            <span className="text-sm font-medium">
              {visitorCount?.toLocaleString() ?? '...'} visits
            </span>
          </>
        )}
      </motion.div>

      <motion.div 
        className="fixed top-0 md:top-12 md:right-12 right-0 z-40"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        style={{ height: isOpen ? "94%" : 0 }}
      >
        <div 
          className="md:w-[480px] w-full h-full bg-black relative rounded-3xl"
          style={{
            width: isOpen ? "480px" : "100px",
            height: isOpen ? "650px" : "40px",
            top: isOpen ? "-25px" : "0",
            right: isOpen ? "-25px" : "0",
            transition: "all 0.6s cubic-bezier(0.76, 0, 0.24, 1)"
          }}
        >
          {isOpen && <Menu />}
        </div>

        <div
          className="absolute md:top-0 top-4 right-4 md:right-0 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div 
            className="relative w-full h-full transition-all duration-500"
            style={{ top: isOpen ? "-100%" : "0%" }}
          >
            <div className="bg-gradient-to-b from-[#9b84f8] to-[#6365ee] h-full w-full grid place-items-center text-white">
              <RollingText text="Menu" weight="normal" />
            </div>
            <div className="bg-black h-full w-full grid place-items-center text-white">
              <RollingText text="Close" weight="medium" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
