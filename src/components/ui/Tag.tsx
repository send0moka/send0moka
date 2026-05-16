import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  active?: boolean;
  children: ReactNode;
  href?: string;
}

export function Tag({ active = false, children, href }: TagProps): ReactElement {
  const className = cn(
    "inline-flex h-9 items-center rounded-lg border px-3 text-sm font-medium transition-colors",
    active
      ? "border-teal-300 bg-teal-100 text-teal-900 dark:border-teal-500 dark:bg-teal-950 dark:text-teal-100"
      : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800",
  );

  if (href) {
    return (
      <Link aria-current={active ? "page" : undefined} className={className} href={href}>
        {children}
      </Link>
    );
  }

  return <span className={className}>{children}</span>;
}
