import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stackGroups } from "@/lib/portfolio-data";

export function UsesStack(): ReactElement {
  return (
    <section className="bg-white py-20 dark:bg-zinc-950" id="uses">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Tools yang dipakai sehari-hari untuk membangun, merapikan, dan deploy UI."
          eyebrow="Uses"
          title="Stack yang cukup praktis untuk bergerak cepat."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <Card as="section" key={group.title}>
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="neutral">
                    {item}
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
