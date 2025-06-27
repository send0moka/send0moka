"use client"

import Link from "next/link"
import { Linkedin, Github, Instagram, Mail, Twitter } from "lucide-react"

function Footer() {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/jehianth", label: "LinkedIn", icon: Linkedin },
    { href: "https://github.com/send0moka", label: "GitHub", icon: Github },
    { href: "https://www.instagram.com/jehianth", label: "Instagram", icon: Instagram },
    { href: "mailto:jehianathayata@gmail.com", label: "Gmail", icon: Mail },
    { href: "https://twitter.com/sendomoka", label: "Twitter", icon: Twitter },
  ]

  return (
      <footer className="max-screen w-full flex justify-between items-center !py-10">
        <p className="text-text-secondary text-sm font-satoshi">
          © {new Date().getFullYear()} Jehian. All rights reserved.
        </p>
        <div className="flex !space-x-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-highlight-primary transition-colors"
                aria-label={social.label}
              >
                <IconComponent size={20} />
              </Link>
            )
          })}
        </div>
      </footer>
  )
}

export default Footer
