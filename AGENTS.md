# AGENTS.md — Portfolio send0moka

> File ini dibaca otomatis oleh AI Codex setiap session.
> Berisi semua konteks project, konvensi, dan aturan coding.
> Jangan hapus atau pindahkan dari root project.

---

## 1. Identitas Project

- **Nama project**: Portfolio personal send0moka
- **Tujuan**: Portfolio frontend developer — menampilkan skill, project, aktivitas, dan kepribadian
- **Pemilik**: send0moka
- **Repo root**: `D:\send0moka`
- **Deploy target**: Vercel (auto-deploy dari GitHub)

---

## 2. Tech Stack

### Wajib (sudah terinstall)
| Package | Versi | Kegunaan |
|---|---|---|
| Next.js | 14 (App Router) | Framework utama, SSG + ISR |
| TypeScript | strict mode | Type safety di seluruh codebase |
| Tailwind CSS | v3 | Styling utility-first |
| Framer Motion | latest | Semua animasi dan page transition |
| Zustand | latest | Global state (filter gallery, life-log, dll) |
| Supabase JS | latest | Database guestbook + auth |

### Opsional (install saat dibutuhkan)
| Package | Kegunaan |
|---|---|
| `@next/mdx` + `next-mdx-remote` | Konten halaman TIL |
| `shiki` | Syntax highlighting di TIL code blocks |
| `lenis` | Smooth scroll premium |
| `gsap` | Animasi kompleks hero text reveal (jika dibutuhkan) |
| `react-wrap-balancer` | Heading typography tanpa orphan |
| `@prisma/client` | Jika butuh type-safe query ke Supabase |

### Package manager
Selalu gunakan **pnpm**. Jangan gunakan npm atau yarn.

```bash
# Benar
pnpm add <package>
pnpm dev

# Salah — jangan lakukan ini
npm install <package>
yarn add <package>
```

---

## 3. Arsitektur & Struktur Folder

Project menggunakan **Next.js App Router** dengan `src/` directory.

```
D:\send0moka\
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← Root layout (font, metadata, Navbar, Footer)
│   │   ├── page.tsx                ← Landing page (/ route) — import semua sections
│   │   ├── globals.css             ← Tailwind base + custom CSS variables
│   │   ├── (pages)/                ← Route group, tidak memengaruhi URL
│   │   │   ├── projects/
│   │   │   │   └── page.tsx        ← /projects
│   │   │   ├── til/
│   │   │   │   ├── page.tsx        ← /til (list semua TIL posts)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx    ← /til/[slug] (detail post)
│   │   │   ├── gallery/
│   │   │   │   └── page.tsx        ← /gallery
│   │   │   ├── life-log/
│   │   │   │   └── page.tsx        ← /life-log
│   │   │   ├── dev-stats/
│   │   │   │   └── page.tsx        ← /dev-stats
│   │   │   └── guestbook/
│   │   │       └── page.tsx        ← /guestbook
│   │   └── api/
│   │       ├── guestbook/
│   │       │   └── route.ts        ← API route GET/POST guestbook
│   │       └── wakatime/
│   │           └── route.ts        ← Fetch + cache data dari Wakatime API
│   ├── components/
│   │   ├── ui/                     ← Atomic, reusable components
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   ├── sections/               ← Sections landing page (9 sections)
│   │   │   ├── Hero.tsx            ← ① Hero: nama, tagline, CTA
│   │   │   ├── About.tsx           ← ② About: personal, bukan template
│   │   │   ├── FeaturedProjects.tsx← ③ Featured projects → /projects
│   │   │   ├── Certificates.tsx    ← ④ Certificates: bukti skill
│   │   │   ├── DevStatsSnapshot.tsx← ⑤ Dev stats snapshot → /dev-stats
│   │   │   ├── UsesStack.tsx       ← ⑥ Uses/stack: tools yang dipakai
│   │   │   ├── GalleryPreview.tsx  ← ⑦ Gallery preview → /gallery
│   │   │   ├── LifeLogPreview.tsx  ← ⑧ Life-log preview → /life-log
│   │   │   └── Contact.tsx         ← ⑨ Contact: form atau link sosial
│   │   ├── layout/                 ← Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── providers/
│   │       └── Providers.tsx       ← Client-side providers (jika perlu)
│   ├── lib/
│   │   ├── supabase.ts             ← Supabase client (createClient)
│   │   ├── wakatime.ts             ← Fetch helper untuk Wakatime API
│   │   ├── mdx.ts                  ← Helper untuk baca file MDX
│   │   └── utils.ts                ← Utility functions (cn, formatDate, dll)
│   ├── content/
│   │   └── til/                    ← File .mdx untuk TIL posts
│   │       └── example-post.mdx
│   └── types/
│       └── index.ts                ← Global TypeScript types & interfaces
├── public/
│   ├── images/
│   └── cv.pdf
├── AGENTS.md                       ← File ini
├── .env.local                      ← Env vars (jangan commit ke git)
├── .env.example                    ← Template env vars (commit ini)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Sitemap & Halaman

### Landing page `/` — 9 sections berurutan
| # | Section | Konten | Link ke |
|---|---|---|---|
| ① | Hero | Nama, tagline animasi, 2 CTA button | — |
| ② | About | Cerita personal, bukan template klise | — |
| ③ | Featured Projects | 2–3 project terbaik dengan card | `/projects` |
| ④ | Certificates | Visual cards bukti skill & sertifikasi | — |
| ⑤ | Dev Stats Snapshot | Jam coding, top language dari Wakatime | `/dev-stats` |
| ⑥ | Uses/Stack | Tech stack dan tools yang dipakai sehari-hari | — |
| ⑦ | Gallery Preview | Thumbnail 4–6 foto/karya terbaik | `/gallery` |
| ⑧ | Life-log Preview | Snippet buku/film/cafe/tempat terkini | `/life-log` |
| ⑨ | Contact | Link sosial + form kontak (atau mailto) | — |

### Halaman terpisah
| Route | Deskripsi | Data source |
|---|---|---|
| `/projects` | Semua project dengan filter tag | Static data / `projects.ts` |
| `/til` | List TIL posts | MDX files di `content/til/` |
| `/til/[slug]` | Detail TIL post | MDX file |
| `/gallery` | Foto & karya dengan lightbox, filter | Static / Supabase |
| `/life-log` | Jurnal: buku, film, cafe, tempat | Static / Supabase |
| `/dev-stats` | Full Wakatime stats: VSCode, bahasa | Wakatime API |
| `/guestbook` | Form + list pesan pengunjung | Supabase |

---

## 5. Konvensi Coding

### TypeScript
- Gunakan **strict mode** — sudah dikonfigurasi di `tsconfig.json`
- Selalu beri type eksplisit pada props komponen, return type function, dan API response
- Definisikan interface/type di `src/types/index.ts` jika digunakan di lebih dari satu file
- Gunakan `interface` untuk object shapes, `type` untuk union/intersections

```typescript
// Benar
interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
}

// Salah
const ProjectCard = ({ title, description, tags, href }: any) => { ... }
```

### React & Next.js
- **Server Component by default** — semua komponen adalah Server Component kecuali perlu interaktivitas
- Tambahkan `"use client"` hanya jika komponen menggunakan: hooks (useState, useEffect), event handler browser, Framer Motion, Zustand
- Gunakan **named export** untuk semua komponen, **kecuali** file `page.tsx` dan `layout.tsx` yang harus `default export`
- Gunakan `next/image` untuk semua gambar — jangan gunakan tag `<img>` biasa
- Gunakan `next/link` untuk semua navigasi internal — jangan gunakan tag `<a>` untuk link internal
- Gunakan `next/font` untuk font — sudah dikonfigurasi di `layout.tsx`

```typescript
// Benar — named export untuk komponen biasa
export function ProjectCard({ title }: ProjectCardProps) { ... }

// Benar — default export untuk page
export default function ProjectsPage() { ... }
```

### Styling dengan Tailwind
- **Tailwind only** — jangan buat file CSS terpisah atau inline style `style={{}}`
- Pengecualian: CSS custom properties di `globals.css`
- Gunakan utility `cn()` dari `lib/utils.ts` untuk conditional classNames
- Dark mode menggunakan class strategy: `dark:` prefix Tailwind
- Jangan hardcode warna hex — selalu pakai Tailwind color tokens

```typescript
// Gunakan cn() untuk conditional classes
import { cn } from "@/lib/utils"

<div className={cn(
  "rounded-lg border p-4",
  isActive && "border-blue-500 bg-blue-50"
)} />
```

```typescript
// lib/utils.ts — wajib ada
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Animasi dengan Framer Motion
- Selalu tambahkan `"use client"` di komponen yang menggunakan Framer Motion
- Gunakan `viewport={{ once: true }}` untuk animasi scroll — jangan animasi berulang saat scroll balik
- Gunakan `initial`, `animate`, `exit` yang konsisten di seluruh project
- Stagger children menggunakan `variants` dan `staggerChildren`

```typescript
// Pola animasi scroll yang benar
"use client"
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  ...
</motion.div>
```

### Data fetching
- Gunakan **fetch native** di Server Components — jangan install axios
- Gunakan `revalidate` untuk ISR (Incremental Static Regeneration)
- Wakatime data: cache 1 jam (`revalidate: 3600`)
- Guestbook: fetch realtime dari Supabase di client atau Server Action

```typescript
// Benar — native fetch dengan revalidate
const res = await fetch("https://wakatime.com/api/v1/...", {
  next: { revalidate: 3600 },
  headers: { Authorization: `Basic ${btoa(process.env.WAKATIME_API_KEY!)}` }
})

// Salah
import axios from "axios"
const res = await axios.get(...)
```

---

## 6. Environment Variables

File `.env.local` (tidak di-commit ke git):

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...

# Wakatime
WAKATIME_API_KEY=waka_...

# (Opsional) Secret untuk Server Actions
GUESTBOOK_SECRET=...
```

File `.env.example` (wajib di-commit, isi dengan placeholder):

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
WAKATIME_API_KEY=
```

### Aturan env vars
- Prefix `NEXT_PUBLIC_` hanya untuk vars yang aman diekspos ke browser
- Jangan pernah expose `WAKATIME_API_KEY` ke client — hanya diakses di `app/api/wakatime/route.ts`
- Selalu akses via `process.env.NAMA_VAR` — jangan hardcode value

---

## 7. Supabase Setup

### Schema tabel `guestbook`
```sql
create table guestbook (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table guestbook enable row level security;

-- Allow public read
create policy "Anyone can read guestbook"
  on guestbook for select using (true);

-- Allow public insert
create policy "Anyone can insert guestbook"
  on guestbook for insert with check (true);
```

### Client Supabase (`src/lib/supabase.ts`)
```typescript
import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

---

## 8. Hal yang JANGAN Dilakukan

```
❌ Jangan gunakan pages/ router — project ini App Router
❌ Jangan install atau import axios — gunakan native fetch
❌ Jangan hardcode warna hex di Tailwind — gunakan color tokens
❌ Jangan buat file CSS baru — Tailwind saja, kecuali globals.css
❌ Jangan gunakan <img> — pakai next/image
❌ Jangan gunakan <a> untuk link internal — pakai next/link
❌ Jangan tambah "use client" sembarangan — Server Component by default
❌ Jangan expose API key ke client-side code
❌ Jangan gunakan npm atau yarn — hanya pnpm
❌ Jangan buat komponen tanpa TypeScript types
❌ Jangan animasi tanpa viewport={{ once: true }} untuk scroll animations
```

---

## 9. Urutan Pengerjaan yang Direkomendasikan

Ikuti urutan ini supaya ada sesuatu yang bisa dilihat di setiap tahap:

1. `src/app/layout.tsx` — font, metadata, Navbar, Footer
2. `src/components/sections/Hero.tsx` — section pertama, langsung keliatan
3. `src/app/page.tsx` — import semua sections
4. `src/components/sections/About.tsx`
5. `src/components/sections/FeaturedProjects.tsx`
6. `src/app/(pages)/projects/page.tsx`
7. `src/components/sections/Certificates.tsx`
8. Setup Supabase → `src/app/(pages)/guestbook/page.tsx`
9. Setup MDX → `src/app/(pages)/til/page.tsx` dan `/til/[slug]`
10. `src/app/api/wakatime/route.ts` → `src/components/sections/DevStatsSnapshot.tsx`
11. `src/app/(pages)/dev-stats/page.tsx`
12. `src/app/(pages)/gallery/page.tsx`
13. `src/app/(pages)/life-log/page.tsx`
14. `src/components/sections/Contact.tsx`
15. Animasi, polish, dark mode, SEO metadata

---

## 10. Cara Memberikan Task ke AI

Saat meminta pembuatan komponen baru, selalu sertakan konteks:

**Format prompt yang baik:**
```
Buatkan [nama file] di [path].
Fungsi: [apa yang dilakukan komponen ini]
Props: [jika relevan]
Catatan: [constraint khusus jika ada]
```

**Contoh:**
```
Buatkan src/components/sections/Hero.tsx.
Fungsi: Section pertama landing page, berisi nama "send0moka", tagline animasi dengan
Framer Motion (reveal per kata), dan dua CTA button: "Lihat Projects" (link ke /projects)
dan "Download CV" (link ke /cv.pdf).
Catatan: Gunakan "use client", TypeScript strict, Tailwind only, animasi stagger per kata.
```