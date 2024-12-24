import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "hello from Newz Insight API" },
    { status: 200 },
  );
}
