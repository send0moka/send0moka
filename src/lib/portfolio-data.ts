import type {
  Certificate,
  GalleryItem,
  LifeLogEntry,
  NavLink,
  Project,
  SocialLink,
  StackGroup,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "TIL", href: "/til" },
  { label: "Gallery", href: "/gallery" },
  { label: "Life-log", href: "/life-log" },
  { label: "Guestbook", href: "/guestbook" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/send0moka", external: true },
  { label: "Email", href: "mailto:hello@send0moka.dev" },
  { label: "CV", href: "/cv.pdf" },
];

export const projects: Project[] = [
  {
    title: "Temulik",
    slug: "temulik",
    description:
      "Showcase produk dengan flow landing page yang jelas, visual tegas, dan komponen yang mudah dipakai ulang.",
    tags: ["Next.js", "Tailwind CSS", "UI"],
    image: "/temulik.png",
    year: "2026",
    featured: true,
  },
  {
    title: "Kiosk RSE",
    slug: "kiosk-rse",
    description:
      "Interface kiosk operasional dengan fokus pada alur cepat, status yang mudah discan, dan layar yang rapi.",
    tags: ["React", "Dashboard", "UX"],
    image: "/kiosk-rse.png",
    year: "2026",
    featured: true,
  },
  {
    title: "Nucifero",
    slug: "nucifero",
    description:
      "Eksplorasi halaman brand dan presentasi produk dengan arah visual yang lebih ekspresif.",
    tags: ["Frontend", "Brand UI", "Motion"],
    image: "/nucifero.png",
    year: "2025",
    featured: true,
  },
  {
    title: "SEF",
    slug: "sef",
    description:
      "Halaman informasi event dengan struktur konten yang padat, responsif, dan mudah dinavigasi.",
    tags: ["Next.js", "Event", "Responsive"],
    image: "/sef.png",
    year: "2025",
  },
  {
    title: "Skripsi Workspace",
    slug: "skripsi-workspace",
    description:
      "Ruang dokumentasi dan presentasi progres riset yang menekankan ringkasan cepat dan arsip visual.",
    tags: ["Research", "Documentation", "UI"],
    image: "/skripsi.png",
    year: "2025",
  },
  {
    title: "BI Interface Study",
    slug: "bi-interface-study",
    description:
      "Latihan komposisi interface informasi dengan hierarki data, panel ringkas, dan visual yang tenang.",
    tags: ["Dashboard", "Data UI", "Frontend"],
    image: "/bi.png",
    year: "2025",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Frontend Fundamentals",
    issuer: "Update issuer",
    date: "Update date",
    description:
      "Slot untuk sertifikat utama yang membuktikan pondasi HTML, CSS, JavaScript, dan responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "React and TypeScript",
    issuer: "Update issuer",
    date: "Update date",
    description:
      "Slot untuk sertifikat atau kelas yang paling relevan dengan stack portfolio ini.",
    tags: ["React", "TypeScript", "Components"],
  },
  {
    title: "UI Implementation",
    issuer: "Update issuer",
    date: "Update date",
    description:
      "Slot untuk bukti praktik slicing, accessibility, design system, atau project-based learning.",
    tags: ["UI", "Accessibility", "Tailwind CSS"],
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Core frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Data and state",
    items: ["Zustand", "Supabase", "Native fetch", "ISR"],
  },
  {
    title: "Workflow",
    items: ["pnpm", "GitHub", "Vercel", "VS Code"],
  },
  {
    title: "Focus",
    items: ["Responsive UI", "Component systems", "Accessible interaction"],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Workspace note",
    image: "/IMG_5509.jpg",
    category: "photo",
    alt: "Workspace photo for send0moka portfolio",
    note: "Foto personal untuk memberi rasa hidup di portfolio.",
  },
  {
    title: "Outdoor frame",
    image: "/DSC00195.jpg",
    category: "photo",
    alt: "Outdoor visual frame",
    note: "Frame visual untuk bagian gallery.",
  },
  {
    title: "Temulik preview",
    image: "/temulik.png",
    category: "project",
    alt: "Temulik project preview",
  },
  {
    title: "Kiosk RSE preview",
    image: "/kiosk-rse.png",
    category: "project",
    alt: "Kiosk RSE project preview",
  },
  {
    title: "Nucifero preview",
    image: "/nucifero.png",
    category: "project",
    alt: "Nucifero project preview",
  },
  {
    title: "SEF preview",
    image: "/sef.png",
    category: "project",
    alt: "SEF project preview",
  },
];

export const lifeLogEntries: LifeLogEntry[] = [
  {
    title: "Merapikan portfolio",
    category: "note",
    date: "2026-05-16",
    description:
      "Membentuk struktur App Router, menyiapkan section landing, dan membuat route terpisah untuk project, TIL, gallery, stats, dan guestbook.",
    tags: ["Next.js", "Portfolio"],
  },
  {
    title: "Ngulik micro-interaction",
    category: "note",
    date: "2026-05-12",
    description:
      "Eksperimen kecil untuk transisi teks dan ritme hover supaya UI terasa hidup tanpa berisik.",
    tags: ["Motion", "UI"],
  },
  {
    title: "Mencatat TIL",
    category: "note",
    date: "2026-05-09",
    description:
      "Mulai menyimpan catatan belajar pendek dalam format MDX supaya pengetahuan kecil tidak hilang.",
    tags: ["TIL", "Writing"],
  },
];
