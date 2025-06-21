import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jehian — Software Engineer | UI/UX Designer",
  description: "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
  keywords: [
    "Jehian",
    "Software Engineer", 
    "UI/UX Designer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "TypeScript",
    "JavaScript",
    "Portfolio"
  ],
  authors: [{ name: "Jehian" }],
  creator: "Jehian",
  publisher: "Jehian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jehian.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jehian — Software Engineer | UI/UX Designer",
    description: "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
    url: "https://jehian.me",
    siteName: "Jehian Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jehian — Software Engineer | UI/UX Designer",
    description: "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
    creator: "@jehian",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
