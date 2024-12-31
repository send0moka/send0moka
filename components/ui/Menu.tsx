"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import RollingText from "@/components/ui/RollingText"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://instagram.com/sendomoka", label: "Instagram" },
  { href: "https://linkedin.com/in/sendomoka", label: "LinkedIn" },
  { href: "https://dribbble.com/sendomoka", label: "Dribbble" },
  { href: "https://youtube.com/sendomoka", label: "Youtube" },
]

export default function Menu() {
  return (
    <div className="flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]">
      <div className="flex gap-2 flex-col">
        {navigationLinks.map((link, i) => (
          <div 
            key={link.label} 
            className="linkContainer"
            style={{
              opacity: 0,
              animation: `slideUpDelay 0.5s ease forwards ${i * 0.1 + 0.3}s`
            }}
          >
            <Link href={link.href} className="flex flex-wrap overflow-hidden w-full">
              <div className="text-5xl text-white flex items-center w-full group relative py-2">
                <ArrowRight 
                  className="absolute left-0 size-6 opacity-0 group-hover:opacity-100 transition-all duration-300 stroke-2" 
                  style={{ color: "white" }} 
                />
                <span className="transition-transform duration-300 group-hover:translate-x-8">
                  {link.label}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap">
        {socialLinks.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            className="w-1/2 mt-1"
            style={{
              opacity: 0,
              animation: `slideUpDelay 0.5s ease forwards ${i * 0.1 + 0.3}s`
            }}
          >
            <RollingText text={link.label} />
          </Link>
        ))}
      </div>
    </div>
  )
}