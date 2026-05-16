import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/portfolio-data";

export function Navbar(): ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="text-sm font-semibold uppercase tracking-widest text-zinc-950 dark:text-zinc-50"
          href="/"
        >
          send0moka
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="hidden md:inline-flex" href="/guestbook" variant="secondary">
          Say hello
        </Button>
        <Button className="md:hidden" href="/projects" variant="secondary">
          Projects
        </Button>
      </div>
    </header>
  );
}
