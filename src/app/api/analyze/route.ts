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
  } catch (error) {}
}
