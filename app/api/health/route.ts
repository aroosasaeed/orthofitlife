import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "orthofitlife-web",
    dataSource: process.env.NEXT_PUBLIC_DATA_SOURCE ?? "mock",
    time: new Date().toISOString(),
  });
}
