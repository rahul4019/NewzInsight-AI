import { NextRequest, NextResponse } from "next/server";
import fetchAndExtractArticle from "@/utils/fetchAndExtractArticle";
import getNewsInsight from "@/utils/getNewsInsight";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const articleUrl = body;

    const articleContent = await fetchAndExtractArticle(articleUrl);

    if (typeof articleContent === "string") {
      return NextResponse.json(
        { message: "Could not extract the content from the article" },
        { status: 500 },
      );
    } else {
      const articleInsight = await getNewsInsight(articleContent.articleText);
      const title = articleContent.articleTitle;

      return NextResponse.json(
        { title, articleLink: articleUrl, ...articleInsight },
        { status: 200 },
      );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      console.error("Unknown error: ", error);
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
