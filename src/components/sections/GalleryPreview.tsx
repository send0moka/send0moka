import Image from "next/image";
import type { ReactElement } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/lib/portfolio-data";

export function GalleryPreview(): ReactElement {
  return (
    <section className="bg-zinc-50 py-20 dark:bg-zinc-900" id="gallery">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          action={{ label: "Buka gallery", href: "/gallery" }}
          description="Potongan visual dari project dan foto yang memberi konteks lebih personal."
          eyebrow="Gallery"
          title="Visual kecil yang menyimpan suasana."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.slice(0, 6).map((item) => (
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950"
              key={item.title}
            >
              <Image
                alt={item.alt}
                className="object-cover transition-transform duration-500 hover:scale-105"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
