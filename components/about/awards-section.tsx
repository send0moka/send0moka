import { Sparkle } from "lucide-react"
import Image from "next/image"
import AnimateOnScroll from "../animate-on-scroll"

const AWARD_IMAGES = [
  "https://media.licdn.com/dms/image/sync/v2/D5622AQGqCh7UjLr0WA/feedshare-shrink_800/feedshare-shrink_800/0/1695617340515?e=1754524800&v=beta&t=LZsTdge17Mvf_3pHQLyQT8-aRKFyiPeXMeRCET02JSc",
  "https://media.licdn.com/dms/image/v2/D562DAQFteqraSTZZQA/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1706480660653?e=1752710400&v=beta&t=pVDO5Znmm4TxJIhJ1rjiif0R5p8Mpwpf1SxE-wOG0yw",
  "https://media.licdn.com/dms/image/v2/D562DAQFo1L9wEt3APg/profile-treasury-image-shrink_800_800/B56ZfD8gHvH8Ag-/0/1751339107887?e=1752465600&v=beta&t=qul4uYxMDFztOJpbYSqvu0NgJ6ICroQxVpk8-dET0d0",
  "/pkm.jpg",
  "https://media.licdn.com/dms/image/v2/D562DAQFNw-ysuqNuLA/profile-treasury-image-shrink_8192_8192/profile-treasury-image-shrink_8192_8192/0/1702109522609?e=1752465600&v=beta&t=jVr7BD9WAELR--IkxyMHAlq_8IbP3hworhcHlqIymzE",
  "https://media.licdn.com/dms/image/v2/D562DAQFf6FqbuWUQpg/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1706480443432?e=1752710400&v=beta&t=Hru7MI8P9NudI7qhLRZ7ZHBS1tndbuJ7PBkNwMAN2G8",
]

const COMMON_IMAGE_PROPS = {
  className:
    "w-full !h-48 !object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl",
  width: 800,
  height: 450,
} as const

export default function AwardsSection() {
  return (
    <AnimateOnScroll delay={0.6} duration={0.6}>
      <section className="container max-screen py-16 flex gap-10">
        <aside>
          <AnimateOnScroll delay={0} duration={0.6}>
            <div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
              <Sparkle size={18} />
              <p className="shimmer word-spacing font-clash-display text-sm uppercase leading-none text-highlight-primary">
                Awards
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} duration={0.6}>
            <h2 className="!my-4 font-clash-display !text-5xl !font-medium text-text-primary">
              Awards & Recognition
            </h2>
          </AnimateOnScroll>
        </aside>

        <aside className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
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
