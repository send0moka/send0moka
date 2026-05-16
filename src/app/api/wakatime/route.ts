import { getWakatimeStats } from "@/lib/wakatime";

export const revalidate = 3600;

export async function GET(): Promise<Response> {
  const stats = await getWakatimeStats();

  return Response.json(stats, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
