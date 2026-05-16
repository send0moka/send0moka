import type { Metadata } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getAllTilPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "TIL",
  description: "Today I Learned notes from send0moka.",
};

export default async function TILPage(): Promise<ReactElement> {
  const posts = await getAllTilPosts();

  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            TIL
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
            Catatan belajar pendek.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            File MDX di src/content/til akan otomatis muncul di halaman ini.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card as="article" key={post.slug}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                      <Link
                        className="transition-colors hover:text-teal-700 dark:hover:text-teal-300"
                        href={`/til/${post.slug}`}
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                  <time className="text-sm text-zinc-500 dark:text-zinc-500">
                    {formatDate(post.date)}
                  </time>
                </div>
              </Card>
            ))
          ) : (
            <Card as="section">
              <h2 className="font-semibold text-zinc-950 dark:text-zinc-50">
                Belum ada TIL.
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Tambahkan file .mdx ke src/content/til untuk mulai mengisi.
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
