import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import DynamicFavicon from "@/components/dynamic-favicon"
import SmoothScroll from "@/components/smooth-scroll"
import VignetteOverlay from "@/components/vignette-overlay"

const satoshi = localFont({
  src: "../public/fonts/satoshi/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
})

const clashDisplay = localFont({
  src: "../public/fonts/clashdisplay/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
})

const GITHUB_USER_ID = "166832786"

export const metadata: Metadata = {
  title: "Jehian — Software Engineer | UI/UX Designer",
  description:
    "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
  keywords:
    "Jehian,Designer,Developer,Software Engineer,Web Development,Frontend Developer,Next.js Developer,UI/UX Designer,React Developer",
  authors: [{ name: "Jehian" }],
  creator: "Jehian",
  publisher: "Jehian",
  robots: "index, follow, nocache",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/api/avatar?s=180",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Jehian — Software Engineer | UI/UX Designer",
    description:
      "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
    url: "https://jehian.me",
    siteName: "Jehian",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://avatars.githubusercontent.com/u/${GITHUB_USER_ID}?v=4&s=1200`,
        width: 1200,
        height: 1200,
        alt: "Jehian's Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://jehian.me",
    creator: "@jehian",
    title: "Jehian — Software Engineer | UI/UX Designer",
    description:
      "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
    images: [
      `https://avatars.githubusercontent.com/u/${GITHUB_USER_ID}?v=4&s=1200`,
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${clashDisplay.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark light" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==='light'||(!('theme' in localStorage)&&window.matchMedia('(prefers-color-scheme: light)').matches)){document.documentElement.className=document.documentElement.className.replace('dark','light')}else{document.documentElement.className=document.documentElement.className.replace('light','dark')}}catch(_){}`,
          }}
        />
      </head>
      <body className="relative flex h-full min-h-dvh flex-col bg-bg-900 text-text-primary">
        <DynamicFavicon />
        <VignetteOverlay />
        <SmoothScroll>
          <div id="scroll-wrapper" className="flex grow flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}
