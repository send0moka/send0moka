'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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
  className = ""
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // ease-in-out-sine equivalent
      }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
