import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  console.log(url);

  return NextResponse.json(
    { message: "hello from Newz Insight API" },
    { status: 200 },
  );
}
