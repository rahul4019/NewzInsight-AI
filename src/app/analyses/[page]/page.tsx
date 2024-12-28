import { articleAnalysesTable } from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { desc, InferSelectModel } from "drizzle-orm";
import { RecentAnalysisCard } from "@/components/ui/RecentAnalysisCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import getPaginationRange from "@/utils/getPaginationRange";

type ArticleAnalysis = InferSelectModel<typeof articleAnalysesTable>;

// query the db to get the data according to the page in the params
async function fetchPaginatedAnalyses(
  page: number,
  pageSize: number,
): Promise<{ analyses: ArticleAnalysis[]; totalPages: number }> {
  const offset = (page - 1) * pageSize;

  const db = drizzle(process.env.DATABASE_URL!);

  const analysesCount = await db.$count(articleAnalysesTable);
  console.log("typeof of Count: ", typeof analysesCount);
  console.log("Count: ", analysesCount);

  const analyses: ArticleAnalysis[] = await db
    .select()
    .from(articleAnalysesTable)
    .orderBy(desc(articleAnalysesTable.createdAt))
    .offset(offset)
    .limit(pageSize);

  return { analyses, totalPages: Math.ceil(analysesCount / pageSize) };
}

type Params = Promise<{ page: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const page = parseInt(params.page, 10);

  // page number validation
  if (isNaN(page) || page < 1) {
    return (
      <div>
        <h1 className="text-3xl">Invalid page number</h1>
      </div>
    );
  }

  const {
    analyses,
    totalPages,
  }: {
    analyses: ArticleAnalysis[];
    totalPages: number;
  } = await fetchPaginatedAnalyses(page, 9);

  console.log(totalPages);

  try {
    return (
      <div className="flex flex-col items-center gap-10 p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyses.map((analysis) => (
            <div key={analysis.id}>
              <RecentAnalysisCard analysis={analysis} />
            </div>
          ))}
        </div>
        <Pagination className="">
          <PaginationContent>
            {/* previous button */}
            <PaginationItem className={page === 1 ? "hidden" : ""}>
              <PaginationPrevious
                href={`/analyses/${page > 1 ? page - 1 : page}`}
              />
            </PaginationItem>

            {getPaginationRange(page, totalPages).map((pageNumber, index) => {
              if (pageNumber === "ellipsis") {
                return (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href={`/analyses/${pageNumber}`}
                    className={pageNumber === page ? "active" : ""}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* next button */}
            <PaginationItem className={page === totalPages ? "hidden" : ""}>
              <PaginationNext
                href={`/analyses/${page < totalPages ? page + 1 : page}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
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
function count() {
  throw new Error("Function not implemented.");
}
