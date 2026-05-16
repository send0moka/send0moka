import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getWakatimeStats } from "@/lib/wakatime";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dev Stats",
  description: "Statistik coding send0moka dari Wakatime.",
};

export default async function DevStatsPage(): Promise<ReactElement> {
  const stats = await getWakatimeStats();

  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            Dev stats
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
            Statistik coding dari Wakatime.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Data ini cache 1 jam. Kalau API key belum diset, halaman tetap
            menampilkan fallback supaya layout bisa dilihat.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Card as="section">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  Total coding time
                </p>
                <p className="mt-3 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
                  {stats.codingTime}
                </p>
              </div>
              <Badge variant={stats.source === "wakatime" ? "teal" : "amber"}>
                {stats.source}
              </Badge>
            </div>
            <dl className="mt-8 space-y-5">
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
              <div>
                <dt className="text-sm text-zinc-500 dark:text-zinc-500">
                  Updated
                </dt>
                <dd className="mt-1 font-semibold text-zinc-950 dark:text-zinc-50">
                  {formatDate(stats.updatedAt)}
                </dd>
              </div>
            </dl>
          </Card>

          <Card as="section">
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              Top languages
            </h2>
            <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
              {stats.topLanguages.map((language) => (
                <div
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  key={language.name}
                >
                  <div>
                    <p className="font-medium text-zinc-950 dark:text-zinc-50">
                      {language.name}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
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
