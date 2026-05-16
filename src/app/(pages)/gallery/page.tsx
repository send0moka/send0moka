import type { Metadata } from "next";
import Image from "next/image";
import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { galleryItems } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery foto dan visual project send0moka.",
};

interface GalleryPageProps {
  searchParams: Promise<{
    category?: string | string[];
  }>;
}

function getActiveCategory(category?: string | string[]): string | undefined {
  return Array.isArray(category) ? category[0] : category;
}

export default async function GalleryPage({
  searchParams,
}: GalleryPageProps): Promise<ReactElement> {
  const params = await searchParams;
  const activeCategory = getActiveCategory(params.category);
  const categories = Array.from(
    new Set(galleryItems.map((item) => item.category)),
  ).sort();
  const items = activeCategory
    ? galleryItems.filter((item) => item.category === activeCategory)
    : galleryItems;

  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            Gallery
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
            Foto dan preview visual.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Campuran aset project dan foto personal yang bisa dipakai untuk
            memberi rasa hidup pada portfolio.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Tag active={!activeCategory} href="/gallery">
            Semua
          </Tag>
          {categories.map((category) => (
            <Tag
              active={activeCategory === category}
              href={`/gallery?category=${encodeURIComponent(category)}`}
              key={category}
            >
              {category}
            </Tag>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                <Image
                  alt={item.alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={item.image}
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h2>
                  {item.note ? (
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.note}
                    </p>
                  ) : null}
                </div>
                <Badge variant="teal">{item.category}</Badge>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
