import Bias from "@/components/ui/Bias";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import SentimentAnalysis from "@/components/ui/SentimentAnalysis";
import Summary from "@/components/ui/Summary";
import { articleAnalysesTable } from "@/db/schema";
import { InferSelectModel, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import { Globe } from "lucide-react";
import Link from "next/link";

type ArticleAnalysis = InferSelectModel<typeof articleAnalysesTable>;

async function fetchAnalysis(id: string): Promise<ArticleAnalysis> {
  const db = drizzle(process.env.DATABASE_URL!);

  const analysis: ArticleAnalysis[] = await db
    .select()
    .from(articleAnalysesTable)
    .where(eq(articleAnalysesTable.id, id));

  return analysis[0];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const analysis: ArticleAnalysis = await fetchAnalysis(id);

  const { sentiment, biasAssessment, summary, articleLink, title } = analysis;
  try {
    return (
      <div className="min-h-screen  p-4 sm:p-6 md:p-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl text-primary sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
            Analysis of the article
          </h1>
          <div className="mb-4">
            <div>
              <Card className="h-full p-6 bg-background dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 font-bold sm:text-2xl text-primary">
                    <Globe />
                    <Link
                      href={articleLink}
                      className="hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {title}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-col lg:flex-row justify-around w-full gap-4 ">
                <SentimentAnalysis sentiment={sentiment} />
                <Bias biasAssessment={biasAssessment} />
              </div>
            </div>
            <div>
              <div>
                <Summary summary={summary} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching articles", error);
    return (
      <div>
        <h1>Error loading analysis</h1>
        <p>{(error as Error).message}</p>
      </div>
    );
  }
}
