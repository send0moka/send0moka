'use client'

import { useEffect } from 'react'

export default function DynamicFavicon() {
  useEffect(() => {
    // Replace favicon after page loads to use dynamic API
    const updateFavicon = () => {
      console.log('🔄 Updating favicon to dynamic API')
      
      // Remove existing favicon links
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
      console.log(`🗑️ Removing ${existingFavicons.length} existing favicon(s)`)
      existingFavicons.forEach(link => {
        console.log('Removing:', (link as HTMLLinkElement).href)
        link.remove()
      })
      
      // Add cache buster to force refresh
      const timestamp = new Date().getTime()
      
      // Add dynamic favicon
      const favicon = document.createElement('link')
      favicon.rel = 'icon'
      favicon.href = `/api/favicon?t=${timestamp}`
      favicon.type = 'image/png'
      favicon.sizes = '32x32'
      document.head.appendChild(favicon)
      console.log('✅ Added dynamic favicon:', favicon.href)
      
      // Add dynamic apple touch icon
      const appleFavicon = document.createElement('link')
      appleFavicon.rel = 'apple-touch-icon'
      appleFavicon.href = `/api/avatar?s=180&t=${timestamp}`
      appleFavicon.sizes = '180x180'
      document.head.appendChild(appleFavicon)
      console.log('✅ Added dynamic apple icon:', appleFavicon.href)
    }
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateFavicon, 100)
    
    // Optional: Update favicon periodically to sync with GitHub changes
    const interval = setInterval(updateFavicon, 60 * 60 * 1000) // Every hour
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return null // This component doesn't render anything
}
