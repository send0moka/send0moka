import type { ReactElement, ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  children,
}: SectionHeadingProps): ReactElement {
  return (
    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        ) : null}
        {children}
      </div>
      {action ? (
        <Button href={action.href} variant="secondary">
          {action.label}
        </Button>
      ) : null}
    </div>
  );
}
