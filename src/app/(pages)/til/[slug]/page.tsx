import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { getAllTilPosts, getTilPost } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface TilPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = await getAllTilPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: TilPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getTilPost(slug);

  return {
    title: post?.title ?? "TIL",
    description: post?.description ?? "TIL post send0moka.",
  };
}

export default async function TilPostPage({
  params,
}: TilPostPageProps): Promise<ReactElement> {
  const { slug } = await params;
  const post = await getTilPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
          {post.title}
        </h1>
        <time className="mt-4 block text-sm text-zinc-500 dark:text-zinc-500">
          {formatDate(post.date)}
        </time>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
        <pre className="mt-10 whitespace-pre-wrap rounded-lg border border-zinc-200 bg-white p-6 font-sans text-base leading-8 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          {post.content}
        </pre>
      </div>
    </article>
  );
}
