import Link from "next/link";
import type { ReactElement } from "react";
import { socialLinks } from "@/lib/portfolio-data";

export function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Copyright {year} send0moka. Built with Next.js, Tailwind CSS, and pnpm.</p>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                className="font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ) : (
              <a
                className="font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
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
    </footer>
  );
}
