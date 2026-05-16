import type { ReactElement } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About(): ReactElement {
  return (
    <section className="bg-white py-20 dark:bg-zinc-950" id="about">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="send0moka adalah ruang untuk menaruh karya frontend, catatan belajar, dan hal kecil yang membuat proses ngoding terasa lebih personal."
          eyebrow="About"
          title="Bukan cuma daftar project, tapi jejak cara berpikir."
        />
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Card as="section" className="p-6">
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Saya suka UI yang kelihatan tenang tapi tetap terasa responsif:
              spacing jelas, state lengkap, dan animasi yang membantu alur.
              Portfolio ini disusun sebagai tempat untuk memperlihatkan proses
              itu lewat project, TIL, gallery, life-log, dan guestbook.
            </p>
          </Card>
          <Card as="section" className="p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Working style
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="teal">Component-first</Badge>
              <Badge variant="amber">Responsive</Badge>
              <Badge variant="sky">Accessible</Badge>
              <Badge variant="rose">Detail-aware</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
