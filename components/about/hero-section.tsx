import Link from "next/link"
import AnimateOnScroll from "../animate-on-scroll"
import Image from "next/image"
import CircularText from "../ui/circular-text"

export default function HeroSection() {
  return (
    <AnimateOnScroll delay={0} duration={0.6}>
      <section className="container max-screen !pt-24 flex flex-col gap-10">
        <aside className="flex gap-15 items-center">
          <figure className="max-w-sm flex flex-col items-end">
            <Image
              src="/about/me.png"
              alt="Jehianth's profile picture"
              width={3024}
              height={4032}
              className="rounded-b-full"
              priority
            />
            <Link className="relative rounded-full bg-[#111116] !p-4 bottom-40" href="/contact">
              <CircularText />
            </Link>
          </figure>
          <figure className="flex flex-col gap-4">
            <h1 className="font-clash-display !font-medium !text-7xl text-balance">
              A{" "}
              <span className="text-highlight-primary">creative developer</span>{" "}
              & digital designer
            </h1>
            <p className="text-text-secondary text-balance">
              I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals.
            </p>
            <Link
              href="https://resmume.com/resume/amVoaWFuYXRoYXlhdGFAZ21haWwuY29tOjczODM0"
              target="_blank"
            >
              <button
                className="group cursor-pointer btn ring-offset-background focus-visible:ring-highlight-primary whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 btn__outline relative overflow-hidden"
                type="button"
                aria-disabled="false"
              >
                <span className="btn__ripple" />
                {/* Background yang muncul dari bawah */}
                <span
                  className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ backgroundColor: "var(--foreground)" }}
                />
                {/* Text container */}
                <span className="block overflow-hidden relative z-10">
                  {/* Text asli */}
                  <span className="btn__text block transform group-hover:-translate-y-full transition-transform duration-500 ease-out">
                    My Resume
                  </span>
                  {/* Text hover yang muncul dari bawah */}
                  <span
                    className="btn__text absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    style={{ color: "var(--background)" }}
                  >
                    CV ATS
                  </span>
                </span>
              </button>
            </Link>
          </figure>
        </aside>
        <aside>marquee</aside>
      </section>
    </AnimateOnScroll>
  )
}
