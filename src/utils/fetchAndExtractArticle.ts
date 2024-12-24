import * as cheerio from "cheerio";

export default async function fetchAndExtractArticle(articleUrl: string) {
  try {
    const response = await fetch(articleUrl);
    const html = await response.text();

    // load html into cherio
    const $ = cheerio.load(html);

    let articleText = "";

    const articleContainer = $("article, main, .article-content, #main-text");

    if (articleContainer.length > 0) {
      articleContainer.find("p, h1, h2, h3, h4, h5, h6, li").each((_, el) => {
        const text = $(el).text().trim();
        if (text) {
          articleText += text + "\n\n";
        }
      });
    } else {
      $("body")
        .children()
        .not(
          "script, style, noscript, header, footer, nav, aside, form, input, button, select, textarea, dialog",
        )
        .each((_, el) => {
          const text = $(el).text().trim();
          if (text) {
            articleText += text + "\n\n";
          }
        });
    }

    const cleanedText = articleText
      .replace(/\s+/g, " ")
      .replace(/\n\s*\n/g, "\n")
      .trim();

    return cleanedText;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message); // Access message safely
    } else {
      console.error("Unknown error", error);
    }
    return "failed to extract article content.";
  }
}
