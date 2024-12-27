import * as cheerio from "cheerio";

function extractArticleTitle($: cheerio.CheerioAPI): string {
  // attempt to fetch title from common locations
  const metaTitle = $("title").text();
  const h1Title = $("h1").text();
  const customTitle = $(".article-title").text(); // example of a custom class

  // decide which title to use based on priority
  const articleTitle = h1Title || metaTitle || customTitle || "no title found";
  return articleTitle;
}

export type ArticleContent = {
  articleTitle: string;
  articleText: string;
};

export default async function fetchAndExtractArticle(
  articleUrl: string,
): Promise<ArticleContent | string> {
  try {
    // fetch the html of the provided article url
    const response = await fetch(articleUrl);
    const html = await response.text();

    // load html to cheerio for parsing and manipulation
    const $ = cheerio.load(html);

    const articleTitle = extractArticleTitle($);

    let articleText = "";

    // try to find the main content container using common selectors
    const articleContainer = $(
      "article, main, .article-content, #main-text, [role='main'], .post-content, .entry-content",
    );

    if (articleContainer.length > 0) {
      // extract text from the main content container if it exists
      articleContainer.find("p, h1, h2, h3, h4, h5, h6, li").each((_, el) => {
        const text = $(el).text().trim();
        if (text) {
          articleText += text + "\n\n";
        }
      });
    } else {
      // fallback: extract meaningful content from the entire body
      $("body")
        .find("*")
        .not(
          "script, style, noscript, header, footer, nav, aside, form, input, button, select, textarea, dialog, .ad, .sidebar, [aria-hidden='true'], [role='complementary'], [class*='ad'], [class*='promo']",
        )
        .each((_, el) => {
          const text = $(el).text().trim();
          if (text && text.length > 50) {
            // exclude very short snippets
            articleText += text + "\n\n";
          }
        });
    }

    // remove excessive line breaks and whitespace from the extracted content
    const cleanedText = articleText
      .replace(/\s+/g, " ")
      .replace(/\n\s*\n/g, "\n\n")
      .trim();

    // if cleaned text is empty, provide a fallback message
    if (!cleanedText) {
      return "no meaningful content extracted.";
    }

    return { articleTitle, articleText: cleanedText };
  } catch (error: unknown) {
    // handle errors and provide a fallback message
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("unknown error", error);
    }
    return "failed to extract article content.";
  }
}
