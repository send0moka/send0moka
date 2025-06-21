'use client'

import Link from "next/link"

function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { href: "https://www.linkedin.com/in/jehian/", label: "LinkedIn" },
    { href: "https://github.com/jehian", label: "GitHub" },
    { href: "https://www.instagram.com/jehian/", label: "Instagram" },
    { href: "mailto:hello@jehian.me", label: "Gmail" },
    { href: "https://twitter.com/jehian", label: "Twitter" },
  ]

  return (
    <footer className="max-screen bg-bg-900 border-t border-bg-700">
      <div className="px-4 py-12">
        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="text-text-secondary text-sm font-satoshi">
            © {currentYear} Jehian. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-highlight-primary transition-colors font-satoshi text-sm"
            >
              {social.label}
            </Link>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8">
          <Link
            href="/"
            className="text-text-secondary hover:text-text-primary transition-colors font-satoshi text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-text-secondary hover:text-text-primary transition-colors font-satoshi text-sm"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-text-secondary hover:text-text-primary transition-colors font-satoshi text-sm"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-text-secondary hover:text-text-primary transition-colors font-satoshi text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
