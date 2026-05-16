import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { WakatimeStats } from "@/types";

interface DevStatsSnapshotProps {
  stats: WakatimeStats;
}

export function DevStatsSnapshot({
  stats,
}: DevStatsSnapshotProps): ReactElement {
  return (
    <section className="bg-zinc-50 py-20 dark:bg-zinc-900" id="dev-stats">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          action={{ label: "Detail stats", href: "/dev-stats" }}
          description="Snapshot singkat dari kebiasaan coding. Saat WAKATIME_API_KEY belum diisi, bagian ini memakai fallback yang aman."
          eyebrow="Dev stats"
          title="Ritme coding dalam angka yang gampang discan."
        />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Card as="section">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Last 7 days
                </p>
                <p className="mt-2 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
                  {stats.codingTime}
                </p>
              </div>
              <Badge variant={stats.source === "wakatime" ? "teal" : "amber"}>
                {stats.source}
              </Badge>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-500">
                  Daily average
                </dt>
                <dd className="mt-1 font-semibold text-zinc-950 dark:text-zinc-50">
                  {stats.dailyAverage}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-500">
                  Editor
                </dt>
                <dd className="mt-1 font-semibold text-zinc-950 dark:text-zinc-50">
                  {stats.editor}
                </dd>
              </div>
            </dl>
          </Card>
          <Card as="section">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Top languages
            </p>
            <div className="space-y-3">
              {stats.topLanguages.map((language) => (
                <div
                  className="flex items-center justify-between gap-4 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950"
                  key={language.name}
                >
                  <div>
                    <p className="font-medium text-zinc-950 dark:text-zinc-50">
                      {language.name}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {language.text}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                    {language.percent.toFixed(1)}%
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
