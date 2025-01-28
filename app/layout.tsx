import type { Metadata } from "next"
import { Inter, Instrument_Sans, Yellowtail } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/layout/SmoothScroll"
import Cursor from "@/components/ui/Cursor"
import Header from "@/components/layout/Header"

const inter = Inter({
  subsets: ["latin"],
  weight: "100",
  variable: "--font-inter",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
})

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yellowtail",
})

export const metadata: Metadata = {
  title: "Sendomoka ~ Software Engineer and UI Designer",
  description: "Jehian's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSans.variable} ${yellowtail.variable}`}
    >
      <body>
        <Header />
        <Cursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
