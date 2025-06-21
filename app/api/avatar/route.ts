import { NextResponse } from 'next/server'
import { getGitHubAvatarUrl } from '@/lib/github-config'

// Function to create rounded avatar using Canvas API
async function createRoundedAvatar(imageBuffer: ArrayBuffer, size: number = 460): Promise<Buffer> {
  // Import canvas only when needed (server-side)
  const { createCanvas, loadImage } = await import('canvas')
  
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')
  
  // Create circular clipping path
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.clip()
  
  // Load and draw the image
  const img = await loadImage(Buffer.from(imageBuffer))
  ctx.drawImage(img, 0, 0, size, size)
  
  return canvas.toBuffer('image/png')
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sizeParam = searchParams.get('s')
    const size = sizeParam ? parseInt(sizeParam) : 460
    const rounded = searchParams.get('rounded') !== 'false' // Default to true
    
    // Fetch the avatar from GitHub
    const response = await fetch(getGitHubAvatarUrl(size), {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch avatar')
    }

    const imageBuffer = await response.arrayBuffer()
    
    let finalBuffer: Buffer
    
    if (rounded) {
      // Create rounded version
      finalBuffer = await createRoundedAvatar(imageBuffer, size)
    } else {
      // Return original
      finalBuffer = Buffer.from(imageBuffer)
    }
    
    return new NextResponse(finalBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error fetching avatar:', error)
    return new NextResponse('Error fetching avatar', { status: 500 })
  }
}
