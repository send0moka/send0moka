import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import type { TilPost } from "@/types";

const tilDirectory = join(process.cwd(), "src", "content", "til");

type FrontmatterValue = string | string[];

function cleanValue(value: string): string {
  return value.trim().replace(/^["']|["']$/g, "");
}

function parseValue(value: string): FrontmatterValue {
  const trimmed = value.trim();

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => cleanValue(item))
      .filter(Boolean);
  }

  return cleanValue(trimmed);
}

function parseFrontmatter(raw: string, slug: string): TilPost {
  const lines = raw.split(/\r?\n/);

  if (lines[0] !== "---") {
    return {
      slug,
      title: slug,
      description: "",
      date: "1970-01-01",
      tags: [],
      content: raw,
    };
  }

  const endIndex = lines.findIndex((line, index) => index > 0 && line === "---");
  const frontmatterLines = endIndex > 0 ? lines.slice(1, endIndex) : [];
  const content = endIndex > 0 ? lines.slice(endIndex + 1).join("\n").trim() : raw;
  const metadata: Record<string, FrontmatterValue> = {};

  for (const line of frontmatterLines) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);
    metadata[key] = parseValue(value);
  }

  return {
    slug,
    title: String(metadata.title ?? slug),
    description: String(metadata.description ?? ""),
    date: String(metadata.date ?? "1970-01-01"),
    tags: Array.isArray(metadata.tags) ? metadata.tags : [],
    content,
  };
}

export async function getTilPost(slug: string): Promise<TilPost | null> {
  try {
    const raw = await readFile(join(tilDirectory, `${slug}.mdx`), "utf8");
    return parseFrontmatter(raw, slug);
  } catch {
    return null;
  }
}

export async function getAllTilPosts(): Promise<TilPost[]> {
  try {
    const fileNames = await readdir(tilDirectory);
    const posts = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => getTilPost(fileName.replace(/\.mdx$/, ""))),
    );

    return posts
      .filter((post): post is TilPost => Boolean(post))
      .sort(
        (first, second) =>
          new Date(second.date).getTime() - new Date(first.date).getTime(),
      );
  } catch {
    return [];
  }
}
