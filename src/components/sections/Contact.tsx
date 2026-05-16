import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialLinks } from "@/lib/portfolio-data";

export function Contact(): ReactElement {
  return (
    <section className="bg-zinc-50 py-20 dark:bg-zinc-900" id="contact">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Kalau mau ngobrol soal project, kolaborasi, atau sekadar meninggalkan jejak, bagian ini sudah siap jadi pintu masuk."
          eyebrow="Contact"
          title="Akhir halaman, awal percakapan."
        />
        <Card as="section" className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              Reach send0moka
            </h3>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {socialLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    className="font-medium text-teal-700 hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-200"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    className="font-medium text-teal-700 hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-200"
                    href={link.href}
                    key={link.href}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:hello@send0moka.dev">Email</Button>
            <Button href="/guestbook" variant="secondary">
              Guestbook
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
