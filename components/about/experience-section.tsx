import { Sparkle } from "lucide-react"
import AnimateOnScroll from "../animate-on-scroll"
import Image from "next/image"

interface ExperienceItemProps {
  logo: string | React.ReactNode
  title: string
  company: string
  period: string
  alt?: string
}

interface SubExperienceItemProps {
  title: string
  company: string
  period: string
}

const ExperienceItem = ({ logo, title, company, period, alt }: ExperienceItemProps) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 !mb-4 !pb-4 !border-b !border-border-secondary">
    <article className="flex items-center gap-3 sm:gap-4 min-w-0">
      {typeof logo === "string" ? (
        <Image
          src={logo}
          alt={alt || company}
          className="size-9 sm:size-11 mb-0 sm:mb-4 rounded-lg shrink-0"
          width={96}
          height={96}
        />
      ) : (
        logo
      )}
      <figure className="min-w-0">
        <p className="mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-text-primary tracking-tight line-clamp-2 sm:line-clamp-none">
          {title}
        </p>
        <p className="mb-0 sm:mb-4 text-xs sm:text-sm font-medium text-text-secondary tracking-tight truncate">
          @{company}
        </p>
      </figure>
    </article>
    <p className="text-[11px] sm:text-xs font-medium text-text-secondary opacity-80 tracking-tight shrink-0 sm:pl-2">
      {period}
    </p>
  </div>
)

const SubExperienceItem = ({ title, company, period }: SubExperienceItemProps) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 sm:gap-0 !mb-2 sm:!mb-2 !pb-2 last:!pb-0">
    <article className="flex items-start sm:items-center gap-2 sm:gap-4 min-w-0 flex-1">
      <div className="size-2 bg-neutral-500 rounded-full shrink-0 !mt-1.5 sm:!mt-0 !mx-3 sm:!mx-[17.5px]"></div>
      <figure className="min-w-0 flex-1">
        <p className="mb-0.5 sm:mb-2 text-[11px] sm:text-[13px] opacity-80 font-medium text-text-primary tracking-tight line-clamp-2 sm:line-clamp-none">
          {title}
        </p>
        <p className="mb-0 sm:mb-4 text-[11px] sm:text-[13px] opacity-80 font-medium text-text-secondary tracking-tight line-clamp-2 sm:line-clamp-none sm:truncate">
          @{company}
        </p>
      </figure>
    </article>
    <p className="text-[10px] sm:text-[11px] font-medium text-text-secondary opacity-60 tracking-tight shrink-0 !pl-10 sm:!pl-2">
      {period}
    </p>
  </div>
)

export default function ExperienceSection() {
  return (
    <AnimateOnScroll delay={0.2} duration={0.6}>
      <section className="container max-screen py-10 sm:py-14 lg:py-16 px-4 sm:px-6 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
        <aside className="lg:min-w-[280px] xl:min-w-[320px]">
          <AnimateOnScroll delay={0} duration={0.6}>
            <div className="mb-3 sm:mb-4 flex w-fit items-center gap-1.5 sm:gap-2 text-highlight-primary">
              <Sparkle size={16} className="sm:size-[18px]" />
              <p className="shimmer word-spacing font-clash-display text-xs sm:text-sm uppercase leading-none text-highlight-primary">
                Work History
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} duration={0.6}>
            <h2 className="!my-3 sm:!my-4 font-clash-display !text-3xl sm:!text-4xl lg:!text-5xl !font-medium text-text-primary">
              Experience
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4} duration={0.6}>
            <p className="mb-6 sm:mb-8 max-w-2xl text-xs sm:text-sm leading-relaxed text-text-secondary">
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products.
            </p>
          </AnimateOnScroll>
        </aside>
        <aside className="w-full min-w-0">
          {/* KPw Bank Indonesia Purwokerto */}
          <ExperienceItem
            logo="https://media.licdn.com/dms/image/v2/D4D0BAQEYRvlXhNPv0Q/company-logo_100_100/B4DZazetx1HsAQ-/0/1746767896896?e=1772668800&v=beta&t=j24CyuJPo2CSev3hFRJ2d9zawgX_-3r3yH7fg6ihQ50"
            title="Software Engineer Intern"
            company="KPw Bank Indonesia Purwokerto"
            period="Dec 2025"
            alt="KPw Bank Indonesia Purwokerto"
          />

          {/* Kementan RI */}
          <ExperienceItem
            logo="https://media.licdn.com/dms/image/v2/C510BAQFMo8Yhuuy6fg/company-logo_100_100/company-logo_100_100/0/1630608455755?e=1772668800&v=beta&t=dUI3fyRbZrucRyekW0t7yCBcU9hNryp7pU5iy2RL5xQ"
            title="Machine Learning Engineer Intern"
            company="Kementan RI"
            period="Aug 2025 — Nov 2025"
            alt="Kementan RI"
          />

          {/* SEF Unsoed */}
          <ExperienceItem
            logo="https://media.licdn.com/dms/image/v2/C560BAQGO60lRZpEtpQ/company-logo_100_100/company-logo_100_100/0/1630658801395?e=1772668800&v=beta&t=-D6Tqvs7_onzi7KCD0UFsa9-pR_lvsujX7BZ6PD5kGM"
            title="Freelance Web Developer"
            company="SEF Unsoed"
            period="May 2025 — Jul 2025"
            alt="SEF Unsoed"
          />

          {/* Informatics Laboratory - with sub-positions */}
          <div className="!mb-4 !pb-4 !border-b !border-border-secondary">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 !mb-2">
              <article className="flex items-center gap-3 sm:gap-4 min-w-0">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D560BAQHQtH_ytlLNoA/company-logo_100_100/company-logo_100_100/0/1720374835331?e=1772668800&v=beta&t=7eyNd5MQD-XVbOJlZGpZfBAdYAyDfr8m3Yy8cYL8J00"
                  alt="Informatics Laboratory Assistant"
                  className="size-9 sm:size-11 mb-0 sm:mb-4 rounded-lg shrink-0"
                  width={96}
                  height={96}
                />
                <figure className="min-w-0">
                  <p className="mb-0 sm:mb-2 text-xs sm:text-sm font-medium text-text-primary tracking-tight">
                    Informatics Laboratory
                  </p>
                  <p className="mb-0 sm:mb-4 text-xs sm:text-sm font-medium text-text-secondary tracking-tight truncate">
                    @Jenderal Soedirman University
                  </p>
                </figure>
              </article>
              <p className="text-[11px] sm:text-xs font-medium text-text-secondary opacity-80 tracking-tight shrink-0">
                2 times
              </p>
            </div>
            <div className="flex min-w-0">
              <div className="relative h-18 sm:h-14 w-[2px] bg-neutral-700 left-[17px] sm:left-[22.3px] top-3 sm:top-5 -z-10 shrink-0"></div>
              <div className="w-full">
                <SubExperienceItem
                  title="Coordinator"
                  company="Web Programming Practicum"
                  period="Aug 2024 — Dec 2024"
                />
                <SubExperienceItem
                  title="Lab Assistant"
                  company="Database Practicum"
                  period="Sep 2023 — Dec 2023"
                />
              </div>
            </div>
          </div>

          {/* BEM Unsoed */}
          <ExperienceItem
            logo="https://media.licdn.com/dms/image/v2/C510BAQE_TuzwrshLJw/company-logo_100_100/company-logo_100_100/0/1630624077878?e=1772668800&v=beta&t=YXSUK2NCXZP4USGkuKHyFZcDn_htuPNIev-El6wGIGM"
            title="Lead Director General of Data Analytics - Ministry of Research and Data"
            company="BEM Unsoed"
            period="Feb 2024 — Nov 2024"
            alt="BEM Unsoed"
          />

          {/* RSU St. Elisabeth */}
          <ExperienceItem
            logo="https://media.licdn.com/dms/image/v2/D560BAQGFGtyHmRVHoQ/company-logo_100_100/company-logo_100_100/0/1720694688183/prm_pasir_wetan_logo?e=1772668800&v=beta&t=fQMAcJd6Vq8jEWrYx9zvgw1lQVGwyb_X9_30sgp6ca4"
            title="Software Engineer Intern"
            company="RSU St. Elisabeth Purwokerto"
            period="Jul 2024 — Aug 2024"
            alt="RSU St. Elisabeth Purwokerto"
          />
        </aside>
      </section>
    </AnimateOnScroll>
  )
}
