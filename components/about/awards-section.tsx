import { Sparkle } from "lucide-react"
import Image from "next/image"
import AnimateOnScroll from "../animate-on-scroll"

const AWARD_IMAGES = [
  "https://media.licdn.com/dms/image/v2/D562DAQFteqraSTZZQA/profile-treasury-document-cover-images_800/profile-treasury-document-cover-images_800/0/1706480660699?e=1772067600&v=beta&t=Nwd_Ry5NFTMhlAq7th9OyzjcWDEYsJ8mP9_HMeBnkSk",
  "/pkm.jpg",
  "https://media.licdn.com/dms/image/v2/D562DAQEJj8U-yYqaew/profile-treasury-image-shrink_800_800/B56ZfD58B7HQAk-/0/1751338438662?e=1772067600&v=beta&t=bdaYFEqwCqHxobHN9E2YSPIACBDLBTGo-aU1ZaFwSvU",
  "https://media.licdn.com/dms/image/v2/D562DAQEqSzymxFM_rw/profile-treasury-image-shrink_800_800/B56ZfC2FuPG0AY-/0/1751320651009?e=1772067600&v=beta&t=ShvtwODo6SpshnLsElGPvHdfWCjiEAkGKWfSbMAjiSc",
  "https://media.licdn.com/dms/image/v2/D562DAQEkgIjDvqxutA/profile-treasury-image-shrink_800_800/B56ZfDQgY3GoAY-/0/1751327575405?e=1772067600&v=beta&t=q8Ro5rcOROkFtBm4fTjCNGUzvgv8UwbirXTxBO0CJA8",
  "https://media.licdn.com/dms/image/v2/D562DAQGcFem3QcUB_A/profile-treasury-image-shrink_800_800/B56ZfCvkmzGQAY-/0/1751318941994?e=1772067600&v=beta&t=wXFyzb4WKK8wfqGh_KRrRX80mro0dCEM3GqmD6lRqJo",
]

const COMMON_IMAGE_PROPS = {
  className:
    "w-full !h-54 sm:!h-44 lg:!h-48 !object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl",
  width: 800,
  height: 450,
} as const

export default function AwardsSection() {
  return (
    <AnimateOnScroll delay={0.6} duration={0.6}>
      <section className="container max-screen py-10 sm:py-14 lg:py-16 px-4 sm:px-6 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
        <aside className="lg:min-w-[280px]">
          <AnimateOnScroll delay={0} duration={0.6}>
            <div className="mb-3 sm:mb-4 flex w-fit items-center gap-1.5 sm:gap-2 text-highlight-primary">
              <Sparkle size={16} className="sm:size-[18px]" />
              <p className="shimmer word-spacing font-clash-display text-xs sm:text-sm uppercase leading-none text-highlight-primary">
                Awards
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} duration={0.6}>
            <h2 className="!my-3 sm:!my-4 font-clash-display !text-3xl sm:!text-4xl lg:!text-5xl !font-medium text-text-primary">
              Awards & Recognition
            </h2>
          </AnimateOnScroll>
        </aside>

        <aside className="w-full min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {AWARD_IMAGES.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Award Image"
              {...COMMON_IMAGE_PROPS}
            />
          ))}
        </aside>
      </section>
    </AnimateOnScroll>
  )
}
