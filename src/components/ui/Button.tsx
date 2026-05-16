import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  HTMLAttributeAnchorTarget,
  ReactElement,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

interface ButtonLinkProps extends BaseButtonProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
}

interface ButtonActionProps extends BaseButtonProps {
  disabled?: boolean;
  href?: never;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonLinkProps | ButtonActionProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-teal-400 text-zinc-950 hover:bg-teal-300 dark:bg-teal-300 dark:hover:bg-teal-200",
  secondary:
    "border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800",
  ghost:
    "border-transparent bg-transparent text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900",
};

function getButtonClassName(
  variant: ButtonVariant = "primary",
  className?: string,
): string {
  return cn(
    "inline-flex h-11 items-center justify-center rounded-lg border px-4 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950",
    variantClasses[variant],
    className,
  );
}

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function isLinkButtonProps(props: ButtonProps): props is ButtonLinkProps {
  return typeof props.href === "string" && props.href.length > 0;
}

export function Button(props: ButtonProps): ReactElement {
  const { children, className, variant } = props;
  const buttonClassName = getButtonClassName(variant, className);

  if (isLinkButtonProps(props)) {
    const { href, target, rel } = props;

    if (isExternalHref(href)) {
      const externalTarget = target ?? (href.startsWith("http") ? "_blank" : undefined);
      const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
        href,
        className: buttonClassName,
        target: externalTarget,
        rel: rel ?? (externalTarget ? "noreferrer" : undefined),
      };

      return <a {...anchorProps}>{children}</a>;
    }

    return (
      <Link className={buttonClassName} href={href}>
        {children}
      </Link>
    );
  }

  const { disabled, type = "button" } = props;

  return (
    <button className={buttonClassName} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
