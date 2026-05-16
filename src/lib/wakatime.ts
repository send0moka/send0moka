import type { WakatimeLanguage, WakatimeStats } from "@/types";

const fallbackLanguages: WakatimeLanguage[] = [
  { name: "TypeScript", text: "Connect Wakatime", percent: 45 },
  { name: "TSX", text: "Connect Wakatime", percent: 32 },
  { name: "CSS", text: "Connect Wakatime", percent: 23 },
];

export const fallbackWakatimeStats: WakatimeStats = {
  codingTime: "Wakatime belum tersambung",
  dailyAverage: "Isi WAKATIME_API_KEY",
  topLanguages: fallbackLanguages,
  editor: "VS Code",
  updatedAt: "2026-05-16",
  source: "fallback",
};

interface WakatimeApiLanguage {
  name?: string;
  text?: string;
  percent?: number;
  color?: string;
}

interface WakatimeApiEditor {
  name?: string;
}

interface WakatimeApiResponse {
  data?: {
    human_readable_total?: string;
    human_readable_daily_average?: string;
    languages?: WakatimeApiLanguage[];
    editors?: WakatimeApiEditor[];
    modified_at?: string;
  };
}

export async function getWakatimeStats(): Promise<WakatimeStats> {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return fallbackWakatimeStats;
  }

  try {
    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        next: { revalidate: 3600 },
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        },
      },
    );

    if (!response.ok) {
      return fallbackWakatimeStats;
    }

    const json = (await response.json()) as WakatimeApiResponse;
    const data = json.data;

    if (!data) {
      return fallbackWakatimeStats;
    }

    const topLanguages =
      data.languages
        ?.slice(0, 5)
        .map((language) => ({
          name: language.name ?? "Unknown",
          text: language.text ?? "No time",
          percent: language.percent ?? 0,
          color: language.color,
        })) ?? fallbackLanguages;

    return {
      codingTime: data.human_readable_total ?? fallbackWakatimeStats.codingTime,
      dailyAverage:
        data.human_readable_daily_average ??
        fallbackWakatimeStats.dailyAverage,
      topLanguages,
      editor: data.editors?.[0]?.name ?? fallbackWakatimeStats.editor,
      updatedAt: data.modified_at ?? new Date().toISOString(),
      source: "wakatime",
    };
  } catch {
    return fallbackWakatimeStats;
  }
}
