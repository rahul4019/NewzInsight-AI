import { GoogleGenerativeAI } from "@google/generative-ai";

const constructPrompt = (articleText: string) => {
  return `Analyze the following news article and provide the following information in a structured JSON format:

1. Summary: A concise summary of the main points of the article. Aim for approximately 200 words.
2. Sentiment: The overall sentiment expressed in the article, broken down into positive, negative, and neutral percentages. The percentages should add up to 100%.
3. Bias Assessment: A brief assessment of potential bias in the article, explained in three sentences.

Article:
${articleText.slice(0, 4000)}

Respond in JSON format like this:

{
  "summary": "...",
  "sentiment": {
    "positive": 0,
    "negative": 0,
    "neutral": 0
  },
  "bias_assessment": "..."
}
`;
};

const getNewsInsight = async (articleText: string) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = constructPrompt(articleText);

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {}
};

export default getNewsInsight;
