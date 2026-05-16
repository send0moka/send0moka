import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { lifeLogEntries } from "@/lib/portfolio-data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Life-log",
  description: "Catatan pendek send0moka tentang belajar, proses, dan hidup.",
};

export default function LifeLogPage(): ReactElement {
  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            Life-log
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
            Catatan kecil yang sengaja disimpan.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Ruang untuk buku, film, cafe, tempat, dan proses belajar yang
            nantinya bisa terus diisi.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {lifeLogEntries.map((entry) => (
            <Card as="article" key={entry.title}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge variant="teal">{entry.category}</Badge>
                    {entry.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                    {entry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {entry.description}
                  </p>
                </div>
                <time className="text-sm text-zinc-500 dark:text-zinc-500">
                  {formatDate(entry.date)}
                </time>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
