import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/lib/portfolio-data";

export function Certificates(): ReactElement {
  return (
    <section className="bg-white py-20 dark:bg-zinc-950" id="certificates">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Bagian ini disiapkan untuk bukti belajar dan sertifikasi yang paling relevan dengan frontend."
          eyebrow="Certificates"
          title="Bukti skill yang bisa dirapikan bertahap."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <Card as="article" key={certificate.title}>
              <p className="text-sm font-medium text-teal-600 dark:text-teal-300">
                {certificate.issuer}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                {certificate.date}
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {certificate.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {certificate.tags.map((tag) => (
                  <Badge key={tag} variant="sky">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
