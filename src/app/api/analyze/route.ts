import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("BODY: ", body);

    const articleUrl = body;

    const response = await fetch(articleUrl);
    const html = await response.text();
    const $ = cheerio.load(html);
    const textConent = $("body").text().trim();
    console.log("textConent: ", textConent);

    const data = { message: "we got your message" };
    return NextResponse.json(data, { status: 200 });
  } catch (error) {}
}
