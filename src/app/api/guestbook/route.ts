import { getSupabaseClient } from "@/lib/supabase";

interface GuestbookInput {
  name: string;
  message: string;
}

interface ParsedPayload {
  input: GuestbookInput;
  isForm: boolean;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function sanitize(value: FormDataEntryValue | unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidInput(input: GuestbookInput): boolean {
  return (
    input.name.length > 0 &&
    input.name.length <= 48 &&
    input.message.length > 0 &&
    input.message.length <= 280
  );
}

function redirectToGuestbook(request: Request, key: string, value: string): Response {
  const url = new URL("/guestbook", request.url);
  url.searchParams.set(key, value);
  return Response.redirect(url, 303);
}

async function parsePayload(request: Request): Promise<ParsedPayload | null> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("form")) {
    const formData = await request.formData();
    return {
      input: {
        name: sanitize(formData.get("name")),
        message: sanitize(formData.get("message")),
      },
      isForm: true,
    };
  }

  const json = (await request.json()) as unknown;

  if (!isRecord(json)) {
    return null;
  }

  return {
    input: {
      name: sanitize(json.name),
      message: sanitize(json.message),
    },
    isForm: false,
  };
}

export async function GET(): Promise<Response> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return Response.json({ data: [], error: "Supabase env belum diatur" });
  }

  const { data, error } = await supabase
    .from("guestbook")
    .select("id,name,message,created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return Response.json({ data: [], error: error.message }, { status: 500 });
  }

  return Response.json({ data: data ?? [] });
}

export async function POST(request: Request): Promise<Response> {
  const payload = await parsePayload(request);

  if (!payload || !isValidInput(payload.input)) {
    if (payload?.isForm) {
      return redirectToGuestbook(request, "error", "invalid");
    }

    return Response.json(
      { error: "Name and message are required." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseClient();

  if (!supabase) {
    if (payload.isForm) {
      return redirectToGuestbook(request, "error", "env");
    }

    return Response.json(
      { error: "Supabase env belum diatur." },
      { status: 503 },
    );
  }

  const { data, error } = await supabase
    .from("guestbook")
    .insert(payload.input)
    .select("id,name,message,created_at")
    .single();

  if (error) {
    if (payload.isForm) {
      return redirectToGuestbook(request, "error", "supabase");
    }

    return Response.json({ error: error.message }, { status: 500 });
  }

  if (payload.isForm) {
    return redirectToGuestbook(request, "sent", "1");
  }

  return Response.json({ data }, { status: 201 });
}
