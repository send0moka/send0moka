import { NextResponse } from "next/server"
import { getGitHubAvatarUrl } from "@/lib/github-config"

// Function to create rounded favicon using Canvas API
async function createRoundedFavicon(
  imageBuffer: ArrayBuffer,
  size: number = 32
): Promise<Buffer> {
  // Import canvas only when needed (server-side)
  const { createCanvas, loadImage } = await import("canvas")

  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext("2d")

  // Create circular clipping path with slight padding for better visibility
  const radius = size / 2 - 1
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, radius, 0, Math.PI * 2)
  ctx.clip()

  // Load and draw the image
  const img = await loadImage(Buffer.from(imageBuffer))
  ctx.drawImage(img, 0, 0, size, size)

  return canvas.toBuffer("image/png")
}

export async function GET() {
  try {
    const size = 32 // Standard favicon size

    // Fetch the avatar from GitHub
    const response = await fetch(getGitHubAvatarUrl(size), {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch favicon")
    }

    const imageBuffer = await response.arrayBuffer()

    // Create rounded version for favicon
    const roundedBuffer = await createRoundedFavicon(imageBuffer, size)

    return new NextResponse(roundedBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("Error fetching favicon:", error)
    return new NextResponse("Error fetching favicon", { status: 500 })
  }
}
