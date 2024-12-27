import { articleAnalysesTable } from "@/db/schema";
import { desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import { NextResponse } from "next/server";

export async function GET() {
  const db = drizzle(process.env.DATABASE_URL!);
  try {
    const recentArticles = await db
      .select()
      .from(articleAnalysesTable)
      .orderBy(desc(articleAnalysesTable.createdAt))
      .limit(3);

    return NextResponse.json(
      {
        recentArticles,
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 },
      );
    } else {
      console.error("Unknown error: ", error);
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
