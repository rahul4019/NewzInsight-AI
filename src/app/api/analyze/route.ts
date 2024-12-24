import { NextRequest, NextResponse } from "next/server";
import fetchAndExtractArticle from "@/utils/fetchAndExtractArticle";
import getNewsInsight from "@/utils/getNewsInsight";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const articleUrl = body;

    const articleText = await fetchAndExtractArticle(articleUrl);

    const articleInsight = await getNewsInsight(articleText);

    return NextResponse.json({ ...articleInsight }, { status: 200 });
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
