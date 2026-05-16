import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getSupabaseClient, hasSupabaseEnv } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import type { GuestbookEntry } from "@/types";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Tinggalkan pesan di guestbook send0moka.",
};

interface GuestbookPageProps {
  searchParams: Promise<{
    sent?: string | string[];
    error?: string | string[];
  }>;
}

function getParam(value?: string | string[]): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("guestbook")
    .select("id,name,message,created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error || !data) {
    return [];
  }

  return data as GuestbookEntry[];
}

export default async function GuestbookPage({
  searchParams,
}: GuestbookPageProps): Promise<ReactElement> {
  const params = await searchParams;
  const sent = getParam(params.sent) === "1";
  const error = getParam(params.error);
  const entries = await getGuestbookEntries();
  const supabaseReady = hasSupabaseEnv();

  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-300">
            Guestbook
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-5xl">
            Tinggalkan jejak kecil.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Form ini terhubung ke Supabase saat env var sudah diisi. Sebelum
            itu, UI tetap siap untuk dicek dan dipoles.
          </p>

          <Card as="section" className="mt-8">
            {sent ? (
              <p className="mb-4 rounded-lg border border-teal-300 bg-teal-50 px-4 py-3 text-sm font-medium text-teal-900 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-100">
                Pesan terkirim.
              </p>
            ) : null}
            {error ? (
              <p className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100">
                Guestbook belum bisa menyimpan pesan: {error}.
              </p>
            ) : null}
            {!supabaseReady ? (
              <p className="mb-4 rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                Isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY
                di .env.local untuk mengaktifkan form.
              </p>
            ) : null}
            <form action="/api/guestbook" className="space-y-4" method="post">
              <div>
                <label
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  htmlFor="name"
                >
                  Nama
                </label>
                <input
                  className="mt-2 h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:ring-teal-950"
                  id="name"
                  maxLength={48}
                  name="name"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  htmlFor="message"
                >
                  Pesan
                </label>
                <textarea
                  className="mt-2 min-h-32 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-950 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:ring-teal-950"
                  id="message"
                  maxLength={280}
                  name="message"
                  required
                />
              </div>
              <Button type="submit">Kirim pesan</Button>
            </form>
          </Card>
        </div>

        <div className="space-y-4">
          {entries.length > 0 ? (
            entries.map((entry) => (
              <Card as="article" key={entry.id}>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-semibold text-zinc-950 dark:text-zinc-50">
                    {entry.name}
                  </h2>
                  <time className="text-sm text-zinc-500 dark:text-zinc-500">
                    {formatDate(entry.created_at)}
                  </time>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {entry.message}
                </p>
              </Card>
            ))
          ) : (
            <Card as="section">
              <h2 className="font-semibold text-zinc-950 dark:text-zinc-50">
                Belum ada pesan.
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Setelah Supabase aktif dan ada pesan masuk, daftar guestbook
                akan muncul di sini.
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
