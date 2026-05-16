type ClassNameValue = string | false | null | undefined;

export function cn(...inputs: ClassNameValue[]): string {
  return inputs.filter((input): input is string => Boolean(input)).join(" ");
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function getUniqueTags(items: Array<{ tags: string[] }>): string[] {
  return Array.from(new Set(items.flatMap((item) => item.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
