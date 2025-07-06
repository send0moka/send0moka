"use client"

import { motion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  duration = 0.3,
  className = "",
}: AnimateOnScrollProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // ease-in-out-sine equivalent
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
