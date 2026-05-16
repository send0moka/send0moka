import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardElement = "article" | "section" | "div";

interface CardProps {
  as?: CardElement;
  children: ReactNode;
  className?: string;
}

export function Card({
  as = "div",
  children,
  className,
}: CardProps): ReactElement {
  const Component = as;

  return (
    <Component
      className={cn(
        "rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
    >
      {children}
    </Component>
  );
}
