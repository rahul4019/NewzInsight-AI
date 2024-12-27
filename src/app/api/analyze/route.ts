import { NextRequest, NextResponse } from "next/server";
import fetchAndExtractArticle from "@/utils/fetchAndExtractArticle";
import getNewsInsight from "@/utils/getNewsInsight";
import { drizzle } from "drizzle-orm/postgres-js";
import { articleAnalysesTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const db = drizzle(process.env.DATABASE_URL!);
    const body = await request.json();

    const articleUrl = body;

    // only anlayse the article if it is not present in the db
    const articleAnalysisExist = await db
      .select()
      .from(articleAnalysesTable)
      .where(eq(articleAnalysesTable.articleLink, articleUrl));

    if (articleAnalysisExist.length > 0) {
      return NextResponse.json({ ...articleAnalysisExist[0] }, { status: 200 });
    }

    const articleContent = await fetchAndExtractArticle(articleUrl);

    if (typeof articleContent === "string") {
      return NextResponse.json(
        { message: "Could not extract the content from the article" },
        { status: 500 },
      );
    } else {
      const articleInsight = await getNewsInsight(articleContent.articleText);
      const title = articleContent.articleTitle;

      const analysis: typeof articleAnalysesTable.$inferInsert = {
        title,
        articleLink: articleUrl,
        sentiment: articleInsight.sentiment,
        biasAssessment: articleInsight.biasAssessment,
        summary: articleInsight.summary,
      };

      // insert the analysis into the database
      await db.insert(articleAnalysesTable).values(analysis);

      return NextResponse.json({ ...analysis }, { status: 200 });
    }
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
