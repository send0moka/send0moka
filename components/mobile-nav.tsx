'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { House, Smile, LayoutDashboard, Send } from 'lucide-react'

export default function MobileNav() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Home', icon: House },
    { href: '/about', label: 'About', icon: Smile },
    { href: '/projects', label: 'Projects', icon: LayoutDashboard },
    { href: '/contact', label: 'Contact', icon: Send }
  ]
  
  return (
    <nav className="flex-center mobile-nav-hidden fixed bottom-0 left-0 right-0 z-50 w-full">
      <ul className="border-bg-700 bg-backdrop text-text-secondary flex w-full justify-evenly rounded-t-3xl border-t shadow backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <li key={item.href} className="p-4">
              <Link 
                className={`flex flex-col items-center justify-center gap-1 ${
                  isActive ? 'text-highlight-primary' : 'text-text-primary'
                }`} 
                href={item.href}
              >
                <Icon size={18} />
                <span className="text-xs">{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
