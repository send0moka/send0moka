import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/utils";
import { lifeLogEntries } from "@/lib/portfolio-data";

export function LifeLogPreview(): ReactElement {
  return (
    <section className="bg-white py-20 dark:bg-zinc-950" id="life-log">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          action={{ label: "Baca life-log", href: "/life-log" }}
          description="Catatan pendek tentang hal yang sedang dipelajari, dirapikan, atau diamati."
          eyebrow="Life-log"
          title="Jejak kecil di luar kartu project."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {lifeLogEntries.slice(0, 3).map((entry) => (
            <Card as="article" key={entry.title}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <Badge variant="teal">{entry.category}</Badge>
                <time className="text-sm text-zinc-500 dark:text-zinc-500">
                  {formatDate(entry.date)}
                </time>
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {entry.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {entry.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
