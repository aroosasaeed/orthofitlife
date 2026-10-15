// ---------------------------------------------------------------------------
// POST /api/subscribe — prototype endpoint
// Validates the payload with zod and returns success without storage. When a
// newsletter provider is connected, replace the simulated delay with the
// provider call. Rate limiting and spam checks are deliberately out of scope
// for the prototype but noted here for the production implementation.
// ---------------------------------------------------------------------------

import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  source: z.string().max(120).optional(),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 422 });
  }

  // Simulated success — no data stored in the prototype.
  return NextResponse.json(
    { ok: true, message: "Subscription acknowledged (prototype — not stored)." },
    { headers: { "cache-control": "no-store" } },
  );
}
