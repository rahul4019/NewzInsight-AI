import * as cheerio from "cheerio";

export default async function fetchAndExtractArticle(articleUrl: string) {
  try {
    const response = await fetch(articleUrl);
    const html = await response.text();

    // load html to cherio
    const $ = cheerio.load(html);

    let articleText = "";

    // Enhanced article container selection
    const articleContainer = $(
      "article, main, .article-content, #main-text, [role='main'], .post-content, .entry-content"
    );

    if (articleContainer.length > 0) {
      // Extract text only from relevant tags
      articleContainer.find("p, h1, h2, h3, h4, h5, h6, li").each((_, el) => {
        const text = $(el).text().trim();
        if (text) {
          articleText += text + "\n\n";
        }
      });
    } else {
      // Fallback: Extract content heuristically
      $("body")
        .find("*")
        .not(
          "script, style, noscript, header, footer, nav, aside, form, input, button, select, textarea, dialog, .ad, .sidebar, [aria-hidden='true'], [role='complementary'], [class*='ad'], [class*='promo']"
        )
        .each((_, el) => {
          const text = $(el).text().trim();
          if (text && text.length > 50) { // Exclude very short snippets
            articleText += text + "\n\n";
          }
        });
    }

    // Remove excessive line breaks and whitespace
    const cleanedText = articleText
      .replace(/\s+/g, " ")
      .replace(/\n\s*\n/g, "\n\n")
      .trim();

    // If cleaned text is empty, provide a fallback message
    if (!cleanedText) {
      return "No meaningful content extracted.";
    }

    return cleanedText;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message); // Access message safely
    } else {
      console.error("Unknown error", error);
    }
    return "Failed to extract article content.";
  }
}

