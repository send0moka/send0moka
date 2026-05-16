import type { Metadata } from "next";
import Image from "next/image";
import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/portfolio-data";
import { getUniqueTags } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Semua project frontend send0moka dengan filter tag.",
};

interface ProjectsPageProps {
  searchParams: Promise<{
    tag?: string | string[];
  }>;
}

function getActiveTag(tag?: string | string[]): string | undefined {
  return Array.isArray(tag) ? tag[0] : tag;
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps): Promise<ReactElement> {
  const params = await searchParams;
  const activeTag = getActiveTag(params.tag);
  const tags = getUniqueTags(projects);
  const filteredProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            Projects
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
            Semua project dalam satu tempat.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Filter berdasarkan tag untuk melihat arah kerja frontend, UI,
            dashboard, event page, dan eksperimen visual.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Tag active={!activeTag} href="/projects">
            Semua
          </Tag>
          {tags.map((tag) => (
            <Tag
              active={activeTag === tag}
              href={`/projects?tag=${encodeURIComponent(tag)}`}
              key={tag}
            >
              {tag}
            </Tag>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card as="article" className="overflow-hidden p-0" key={project.slug}>
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
                <Image
                  alt={`${project.title} preview`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  src={project.image}
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </h2>
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">
                    {project.year}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
