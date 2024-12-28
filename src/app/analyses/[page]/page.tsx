import { articleAnalysesTable } from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { desc, InferSelectModel } from "drizzle-orm";
import { RecentAnalysisCard } from "@/components/ui/RecentAnalysisCard";

type ArticleAnalysis = InferSelectModel<typeof articleAnalysesTable>;

// query the db to get the data according to the page in the params
async function fetchPaginatedAnalyses(
  page: number,
  pageSize: number,
): Promise<ArticleAnalysis[]> {
  const offset = (page - 1) * pageSize;

  const db = drizzle(process.env.DATABASE_URL!);

  const analyses: ArticleAnalysis[] = await db
    .select()
    .from(articleAnalysesTable)
    .orderBy(desc(articleAnalysesTable.createdAt))
    .offset(offset)
    .limit(pageSize);
  return analyses;
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = parseInt(params.page, 10);

  // page number validation
  if (isNaN(page) || page < 1) {
    return (
      <div>
        <h1>Invalid page number</h1>
      </div>
    );
  }

  const analyses: ArticleAnalysis[] = await fetchPaginatedAnalyses(page, 2);

  try {
    return (
      <div className="grid">
        <h1 className="text-3xl">hello world</h1>
        {analyses.map((analysis) => (
          <div key={analysis.id}>
            <RecentAnalysisCard analysis={analysis} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching articles", error);
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{(error as Error).message}</p>
      </div>
    );
  }
}
