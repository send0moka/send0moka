import { Sparkle } from "lucide-react"
import AnimateOnScroll from "../animate-on-scroll"
import Image from "next/image"

export default function ExperienceSection() {
  return (
    <AnimateOnScroll delay={0.2} duration={0.6}>
      <section className="container max-screen py-16 flex gap-10">
        <aside>
          <AnimateOnScroll delay={0} duration={0.6}>
            <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
              <Sparkle size={18} />
              <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
                Work History
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} duration={0.6}>
            <h2 className="!my-4 font-clash-display !text-5xl !font-medium text-text-primary">
              Experience
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4} duration={0.6}>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-text-secondary">
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products.
            </p>
          </AnimateOnScroll>
        </aside>
        <aside className="w-full">
          <div className="flex justify-between items-center !mb-4 !pb-4 !border-b !border-border-secondary">
            <article className="flex items-center gap-4">
              <div className="size-11 mb-4 rounded-lg bg-neutral-800"></div>
              <figure>
                <p className="mb-2 text-sm font-medium text-text-primary tracking-tight">
                  Stay Tuned for Intern
                </p>
                <p className="mb-4 text-sm font-medium text-text-secondary tracking-tight">
                  @Place
                </p>
              </figure>
            </article>
            <p className="text-xs font-medium text-text-secondary opacity-80 tracking-tight">
              Aug 2025 — Dec 2025
            </p>
          </div>
          <div className="flex justify-between items-center !mb-4 !pb-4 !border-b !border-border-secondary">
            <article className="flex items-center gap-4">
              <Image
                src="https://media.licdn.com/dms/image/v2/C560BAQGO60lRZpEtpQ/company-logo_100_100/company-logo_100_100/0/1630658801395?e=1757548800&v=beta&t=J162rdczhrGzHc_R-ymohrRAZPve-MjnDclL4st7O9Q"
                alt="SEF Unsoed"
                className="size-11 mb-4 rounded-lg"
                width={96}
                height={96}
              />
              <figure>
                <p className="mb-2 text-sm font-medium text-text-primary tracking-tight">
                  Freelance Web Developer
                </p>
                <p className="mb-4 text-sm font-medium text-text-secondary tracking-tight">
                  @SEF Unsoed
                </p>
              </figure>
            </article>
            <p className="text-xs font-medium text-text-secondary opacity-80 tracking-tight">
              May 2025 — Jul 2025
            </p>
          </div>
          {/* 2 */}
          <div className="!mb-4 !pb-4 !border-b !border-border-secondary">
            <div className="flex justify-between items-center !mb-2">
              <article className="flex items-center gap-4">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D560BAQHQtH_ytlLNoA/company-logo_100_100/company-logo_100_100/0/1720374835331?e=1757548800&v=beta&t=zY0Jl3D5U-uDABFUHMkirNYlkqtYid450yM4TyNXs5k"
                  alt="Informatics Laboratory Assistant"
                  className="size-11 mb-4 rounded-lg"
                  width={96}
                  height={96}
                />
                <figure>
                  <p className="mb-2 text-sm font-medium text-text-primary tracking-tight">
                    Informatics Laboratory
                  </p>
                  <p className="mb-4 text-sm font-medium text-text-secondary tracking-tight">
                    @Jenderal Soedirman University
                  </p>
                </figure>
              </article>
              <p className="text-xs font-medium text-text-secondary opacity-80 tracking-tight">
                2 times
              </p>
            </div>
            <div className="flex">
              <div className="relative h-11 w-[2px] bg-neutral-700 left-[22.4] top-5 -z-10"></div>
              <div className="w-full">
                <div className="flex justify-between items-center !mb-2">
                  <article className="flex items-center gap-4">
                    <div className="size-2 bg-neutral-500 rounded-full !mx-[17.5px]"></div>
                    <figure>
                      <p className="mb-2 text-[13px] opacity-80 font-medium text-text-primary tracking-tight">
                        Coordinator
                      </p>
                      <p className="mb-4 text-[13px] opacity-80 font-medium text-text-secondary tracking-tight">
                        @Web Programming Practicum
                      </p>
                    </figure>
                  </article>
                  <p className="text-[11px] font-medium text-text-secondary opacity-60 tracking-tight">
                    Aug 2024 — Dec 2024
                  </p>
                </div>
                <div className="flex justify-between items-center !mb-2">
                  <article className="flex items-center gap-4">
                    <div className="size-2 bg-neutral-500 rounded-full !mx-[17.5px]"></div>
                    <figure>
                      <p className="mb-2 text-[13px] opacity-80 font-medium text-text-primary tracking-tight">
                        Lab Assistant
                      </p>
                      <p className="mb-4 text-[13px] opacity-80 font-medium text-text-secondary tracking-tight">
                        @Database Practicum
                      </p>
                    </figure>
                  </article>
                  <p className="text-[11px] font-medium text-text-secondary opacity-60 tracking-tight">
                    Sep 2023 — Dec 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex justify-between items-center !mb-4 !pb-4 !border-b !border-border-secondary">
            <article className="flex items-center gap-4">
              <Image
                src="https://media.licdn.com/dms/image/v2/C510BAQE_TuzwrshLJw/company-logo_100_100/company-logo_100_100/0/1630624077878?e=1757548800&v=beta&t=j4f8pT32rOt8ZlDPPrr978wQqCYY6XwX1bUVuEr57cM"
                alt="BEM Unsoed"
                className="size-11 mb-4 rounded-lg"
                width={96}
                height={96}
              />
              <figure>
                <p className="mb-2 text-sm font-medium text-text-primary tracking-tight">
                  Lead Director General of Data Analytics - Ministry of Research and Data
                </p>
                <p className="mb-4 text-sm font-medium text-text-secondary tracking-tight">
                  @BEM Unsoed
                </p>
              </figure>
            </article>
            <p className="text-xs font-medium text-text-secondary opacity-80 tracking-tight">
              Feb 2024 — Nov 2024
            </p>
          </div>
          {/* 4 */}
          <div className="flex justify-between items-center !mb-4 !pb-4 !border-b !border-border-secondary">
            <article className="flex items-center gap-4">
              <Image
                src="https://media.licdn.com/dms/image/v2/D560BAQGFGtyHmRVHoQ/company-logo_100_100/company-logo_100_100/0/1720694688183/prm_pasir_wetan_logo?e=1757548800&v=beta&t=ADQLba5cjcwBMyoChd9kWff9LgQ_WudMndURdgGeHec"
                alt="RSU St. Elisabeth Purwokerto"
                className="size-11 mb-4 rounded-lg"
                width={96}
                height={96}
              />
              <figure>
                <p className="mb-2 text-sm font-medium text-text-primary tracking-tight">
                  Software Engineer Intern
                </p>
                <p className="mb-4 text-sm font-medium text-text-secondary tracking-tight">
                  @RSU St. Elisabeth Purwokerto
                </p>
              </figure>
            </article>
            <p className="text-xs font-medium text-text-secondary opacity-80 tracking-tight">
              Jul 2024 — Aug 2024
            </p>
          </div>
        </aside>
      </section>
    </AnimateOnScroll>
  )
}
