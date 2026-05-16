import Image from "next/image";
import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/portfolio-data";

export function FeaturedProjects(): ReactElement {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="bg-zinc-50 py-20 dark:bg-zinc-900" id="projects">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          action={{ label: "Lihat semua", href: "/projects" }}
          description="Beberapa project yang paling enak dijadikan pintu masuk untuk melihat arah visual, struktur komponen, dan taste frontend."
          eyebrow="Featured projects"
          title="Project yang paling mewakili cara saya membangun UI."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card as="article" className="overflow-hidden p-0" key={project.slug}>
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
                <Image
                  alt={`${project.title} preview`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={project.image}
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </h3>
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
