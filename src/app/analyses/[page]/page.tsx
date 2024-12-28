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

type Params = Promise<{ page: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const page = parseInt(params.page, 10);

  // page number validation
  if (isNaN(page) || page < 1) {
    return (
      <div>
        <h1>Invalid page number</h1>
      </div>
    );
  }

  const analyses: ArticleAnalysis[] = await fetchPaginatedAnalyses(page, 6);

  try {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
