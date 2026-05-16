export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  featured?: boolean;
  href?: string;
  repository?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface GalleryItem {
  title: string;
  image: string;
  category: string;
  alt: string;
  note?: string;
}

export interface LifeLogEntry {
  title: string;
  category: "book" | "film" | "cafe" | "place" | "note";
  date: string;
  description: string;
  location?: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export interface WakatimeLanguage {
  name: string;
  text: string;
  percent: number;
  color?: string;
}

export interface WakatimeStats {
  codingTime: string;
  dailyAverage: string;
  topLanguages: WakatimeLanguage[];
  editor: string;
  updatedAt: string;
  source: "wakatime" | "fallback";
}

export interface TilPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content?: string;
}
